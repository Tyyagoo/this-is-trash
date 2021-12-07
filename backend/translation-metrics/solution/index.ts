import { TranslationEvent, TimedAverage } from "./types";

import { createInterface } from "readline";
import { createReadStream, createWriteStream } from "fs";

import * as yargs from "yargs";
import * as _ from "lodash";

const argv = yargs
  .option("input-file", {
    alias: "i",
    description: "Path to input file.",
    type: "string",
  })
  .option("window-size", {
    alias: "w",
    description: "Time window to relevant metrics.",
    type: "number",
  });

const args = argv.parseSync();
const inputFile = args["input-file"] ?? "./in.json";
const windowSize = args["window-size"] ?? 10;

const readline = createInterface(
  createReadStream(inputFile, { encoding: "utf-8", flags: "r" })
);

const outputStream = createWriteStream("./out.json", {
  encoding: "utf-8",
  flags: "r+",
});

let buff: { [key: number]: TranslationEvent[] } = {};

readline.on("line", (line) => {
  const event: TranslationEvent = JSON.parse(line);
  const date = new Date(event.timestamp);
  date.setUTCSeconds(0);
  date.setUTCMilliseconds(0);

  buff[date.getTime()] = [...(buff[date.getTime()] ?? []), event];
});

setInterval(() => {
  const date = new Date();
  date.setUTCSeconds(0);
  date.setUTCMilliseconds(0);

  const eventsWindow = _.chain(buff)
    .filter((obj, key) => date.getTime() - +key < windowSize * 60000)
    .flatMap()
    .value();

  const average_delivery_time =
    _.reduce(eventsWindow, (acc, curr) => acc + curr.duration, 0) /
    _.size(eventsWindow);

  const out: TimedAverage = {
    date: date.toUTCString(),
    average_delivery_time: average_delivery_time ?? 0,
  };

  outputStream.write(JSON.stringify(out) + "\n", (err) => {
    if (err) return console.log(err);
    console.log(JSON.stringify(out));
  });
}, 60000);
