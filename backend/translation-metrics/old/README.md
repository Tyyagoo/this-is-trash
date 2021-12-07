# Translation Metrics

## Note

this proposal is so distant from the original,
i'll just do whatever they want me to do,
even if this isn't my objective with these challenges.

## Proposal

At [Unbabel](https://github.com/Unbabel) we deal with a lot of translation data. One of the metrics we use for our clients' SLAs is the delivery time of a translation.

In the context of this problem, and to keep things simple, our translation flow is going to be modeled as only one event.

**translation_event**

```json
{
  "timestamp": "2021-11-15T20:43:49.349",
  "translation_id": "5aa5b2f39f7254a75aa4",
  "source_language": "en",
  "target_language": "fr",
  "client_name": "easyjet",
  "event_name": "translation_delivered",
  "duration": 2000,
  "nr_words": 100
}
```

- Your mission is to build a simple ~~command line application~~ REST API that accepts and parses a stream of events and provides endpoints to get time to time, real time and so on.

- In this case, we're interested in calculating, for every minute, a moving average of the translation delivery time for the last X minutes.

**output should be something like that**

```json
{
  "start": "2021-11-15T20:40:00.000",
  "end": "2021-11-15T20:50:00.000",
  "average_delivery_time": 5384.328 // you'll get that from translation_event.duration
}
```

[See challenge source](https://github.com/Unbabel/backend-engineering-challenge)
