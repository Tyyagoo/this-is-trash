"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
var readline_1 = require("readline");
var fs_1 = require("fs");
var yargs = __importStar(require("yargs"));
var _ = __importStar(require("lodash"));
var argv = yargs
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
var args = argv.parseSync();
var inputFile = (_a = args["input-file"]) !== null && _a !== void 0 ? _a : "./in.json";
var windowSize = (_b = args["window-size"]) !== null && _b !== void 0 ? _b : 10;
var readline = (0, readline_1.createInterface)((0, fs_1.createReadStream)(inputFile, { encoding: "utf-8", flags: "r" }));
var outputStream = (0, fs_1.createWriteStream)("./out.json", {
    encoding: "utf-8",
    flags: "r+",
});
var buff = {};
readline.on("line", function (line) {
    var _a;
    var event = JSON.parse(line);
    var date = new Date(event.timestamp);
    date.setUTCSeconds(0);
    date.setUTCMilliseconds(0);
    buff[date.getTime()] = __spreadArray(__spreadArray([], ((_a = buff[date.getTime()]) !== null && _a !== void 0 ? _a : []), true), [event], false);
});
setInterval(function () {
    var date = new Date();
    date.setUTCSeconds(0);
    date.setUTCMilliseconds(0);
    var eventsWindow = _.chain(buff)
        .filter(function (obj, key) { return date.getTime() - +key < windowSize * 60000; })
        .flatMap()
        .value();
    var average_delivery_time = _.reduce(eventsWindow, function (acc, curr) { return acc + curr.duration; }, 0) /
        _.size(eventsWindow);
    var out = {
        date: date.toUTCString(),
        average_delivery_time: average_delivery_time !== null && average_delivery_time !== void 0 ? average_delivery_time : 0,
    };
    outputStream.write(JSON.stringify(out) + "\n", function (err) {
        if (err)
            return console.log(err);
        console.log(JSON.stringify(out));
    });
}, 60000);
