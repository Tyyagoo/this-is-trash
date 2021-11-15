import { v4 as uuid } from "uuid";
import axios from "axios";
import languages from "./languages";

type TranslationEvent = {
  timestamp: string;
  translation_id: string;
  source_language: string;
  target_language: string;
  client_name: string;
  event_name: "translation_delivered";
  duration: number;
  nr_words: number;
};

const API_URL = "http://localhost:8080/events/translation";

const generateRandomTranslation = (): TranslationEvent => {
  const translation_id = uuid();
  const timestamp = new Date().toISOString();
  const source_language = languages[Math.random() * languages.length];
  const target_language = languages[Math.random() * languages.length];
  const client_name = "easyjet";
  const event_name = "translation_delivered";
  const nr_words = Math.floor(Math.random() * 4096);
  const duration =
    source_language === target_language
      ? 0
      : Math.floor(Math.random() * 5 * nr_words);

  return {
    translation_id,
    timestamp,
    source_language,
    target_language,
    client_name,
    event_name,
    nr_words,
    duration,
  };
};

setInterval(() => {
  const event_translation = generateRandomTranslation();
  console.log(event_translation.timestamp);
  axios
    .post<TranslationEvent>(API_URL, event_translation)
    .then((res) =>
      res.status === 200 ? console.log(res.data) : console.error("error")
    )
    .catch((err) => console.error("error"));
}, 1000);
