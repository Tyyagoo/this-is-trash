export type TranslationEvent = {
  timestamp: string;
  translation_id: string;
  source_language: string;
  target_language: string;
  client_name: string;
  event_name: "translation_delivered";
  duration: number;
  nr_words: number;
};

export type TimedAverage = {
  date: string;
  average_delivery_time: number;
};
