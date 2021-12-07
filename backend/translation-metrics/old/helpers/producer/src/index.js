"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var uuid_1 = require("uuid");
var axios_1 = __importDefault(require("axios"));
var languages_1 = __importDefault(require("./languages"));
var API_URL = "http://localhost:8080/events/translation";
var randomInt = function (upper_bound) {
    return Math.floor(Math.random() * upper_bound);
};
var generateRandomTranslation = function () {
    var translation_id = (0, uuid_1.v4)();
    var timestamp = new Date().toISOString().replace("Z", "");
    var source_language = languages_1.default[randomInt(languages_1.default.length)];
    var target_language = languages_1.default[randomInt(languages_1.default.length)];
    var client_name = "easyjet";
    var event_name = "translation_delivered";
    var nr_words = randomInt(4096);
    var duration = source_language === target_language
        ? 0
        : Math.floor(Math.random() * 10 * nr_words);
    return {
        translation_id: translation_id,
        timestamp: timestamp,
        source_language: source_language,
        target_language: target_language,
        client_name: client_name,
        event_name: event_name,
        nr_words: nr_words,
        duration: duration,
    };
};
setInterval(function () {
    var event_translation = generateRandomTranslation();
    console.log(event_translation.timestamp);
    axios_1.default
        .post(API_URL, event_translation)
        .then(function (res) {
        return res.status === 200 ? console.log(res.data) : console.error("error");
    })
        .catch(function (err) { return console.error("error"); });
}, 1000);
