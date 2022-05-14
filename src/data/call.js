export const callWebhookData = [
  {
    name: 'call.created',
    direction: 'outbound',
    body: {
      "resource": "call",
      "event": "call.created",
      "timestamp": 1646389737,
      "token": "58ffd2bc5f3113f7bebf210a49299a1b",
      "data": {
        "id": 780836699,
        "direct_link": "https://api.aircall.io/v1/calls/780836699",
        "direction": "outbound",
        "status": "initial",
        "missed_call_reason": null,
        "started_at": 1646389735,
        "answered_at": null,
        "ended_at": null,
        "duration": 0,
        "cost": "0.0",
        "hangup_cause": null,
        "voicemail": null,
        "recording": null,
        "asset": null,
        "raw_digits": "+43 720 880079",
        "user": {
          "id": 736640,
          "direct_link": "https://api.aircall.io/v1/users/736640",
          "name": "Koen Test RrNuYErJ74",
          "email": "koen.verduijn+v5doewlrdy@aircall.io",
          "available": true,
          "availability_status": "available",
          "language": "en-US",
          "wrap_up_time": 0
        },
        "number": {
          "id": 404821,
          "direct_link": "https://api.aircall.io/v1/numbers/404821",
          "name": "Koens Test",
          "digits": "+44 330 818 6690",
          "country": "GB",
          "time_zone": "Europe/London",
          "open": true,
          "availability_status": "open",
          "is_ivr": false,
          "live_recording_activated": false,
          "messages": {
            "welcome": "https://media-web.aircall.io/tracks/tts/languages/en/voices/Joanna/85a54589f4bac4767f07c3adb4d5bad49602c0e4.mp3",
            "waiting": "https://media-web.aircall.io/tracks/library/bensound-retrosoul.mp3",
            "ivr": "https://media-web.aircall.io/tts/languages/en/voices/Joanna/5b2401096b75861108e2ceb6ccc4e4c81e03b525.mp3",
            "voicemail": "https://media-web.aircall.io/tracks/tts/languages/en/voices/Joanna/74ce97ac9772be646ccf5583b92be7248930af18.mp3",
            "closed": "https://media-web.aircall.io/tracks/tts/languages/en/voices/Joanna/e5bc465c2b0595ade98a98500aa6851cb557a663.mp3",
            "callback_later": "https://media-web.aircall.io/tts/languages/en/voices/Joanna/a04a676e475a50791cccbea7faa349dab88c4f05.mp3"
          }
        },
        "archived": false,
        "teams": [],
        "comments": [],
        "tags": []
      }
    }
  },
  {
    name: 'call.created',
    direction: 'inbound',
    body: {
      "resource": "call",
      "event": "call.created",
      "timestamp": 1646389739,
      "token": "58ffd2bc5f3113f7bebf210a49299a1b",
      "data": {
        "id": 780836754,
        "direct_link": "https://api.aircall.io/v1/calls/780836754",
        "direction": "inbound",
        "status": "initial",
        "missed_call_reason": null,
        "started_at": 1646389739,
        "answered_at": null,
        "ended_at": null,
        "duration": 0,
        "cost": "0.0",
        "hangup_cause": null,
        "voicemail": null,
        "recording": null,
        "asset": null,
        "raw_digits": "+44 330 818 6690",
        "number": {
          "id": 397375,
          "direct_link": "https://api.aircall.io/v1/numbers/397375",
          "name": "Koens Product number",
          "digits": "+43 720 880079",
          "country": "AT",
          "time_zone": "Europe/Vienna",
          "open": true,
          "availability_status": "custom",
          "is_ivr": false,
          "live_recording_activated": false,
          "messages": {
            "welcome": "https://media-web.aircall.io/tracks/tts/languages/de/voices/Marlene/eb173eb99d8608c016271c16cf75b6b5086d3125.mp3",
            "waiting": "https://media-web.aircall.io/companies/196488/numbers/397375/tracks/library/1644499866/laysa-blaue-augen-himmelstern-volkstumliche-schlagerhits-volkstumlich-schlager-osterreich.mp3",
            "ivr": "https://media-web.aircall.io/tts/languages/de/voices/Vicki/adf9b35dba93e711077b7923ae4aaa04344ae4ca.mp3",
            "voicemail": "https://media-web.aircall.io/tracks/tts/languages/de/voices/Marlene/fe82be3b431df4a8268ac785305c921eaae82156.mp3",
            "closed": "https://media-web.aircall.io/tracks/tts/languages/de/voices/Marlene/347c0c91783d8fcbaa28744ba57a61f785ba14f3.mp3",
            "callback_later": "https://media-web.aircall.io/tts/languages/de/voices/Vicki/acd4ccdc2586dbbf862336daab64b2080fa43a5c.mp3"
          }
        },
        "archived": false,
        "teams": [],
        "comments": [],
        "tags": []
      }
    }
  },
  {
    name: 'call.ringing_on_agent',
    direction: 'inbound',
    body: {
      "resource": "call",
      "event": "call.ringing_on_agent",
      "timestamp": 1646389739,
      "token": "58ffd2bc5f3113f7bebf210a49299a1b",
      "data": {
        "id": 780836754,
        "direct_link": "https://api.aircall.io/v1/calls/780836754",
        "direction": "inbound",
        "status": "initial",
        "missed_call_reason": null,
        "started_at": 1646389739,
        "answered_at": null,
        "ended_at": null,
        "duration": 0,
        "cost": "0.0",
        "hangup_cause": null,
        "voicemail": null,
        "recording": null,
        "asset": null,
        "raw_digits": "+44 330 818 6690",
        "user": {
          "id": 731416,
          "direct_link": "https://api.aircall.io/v1/users/731416",
          "name": "Koen Verduijn SE",
          "email": "koen.verduijn+demo@aircall.io",
          "available": true,
          "availability_status": "available",
          "language": "en-US",
          "wrap_up_time": 90
        },
        "number": {
          "id": 397375,
          "direct_link": "https://api.aircall.io/v1/numbers/397375",
          "name": "Koens Product number",
          "digits": "+43 720 880079",
          "country": "AT",
          "time_zone": "Europe/Vienna",
          "open": true,
          "availability_status": "custom",
          "is_ivr": false,
          "live_recording_activated": false,
          "messages": {
            "welcome": "https://media-web.aircall.io/tracks/tts/languages/de/voices/Marlene/eb173eb99d8608c016271c16cf75b6b5086d3125.mp3",
            "waiting": "https://media-web.aircall.io/companies/196488/numbers/397375/tracks/library/1644499866/laysa-blaue-augen-himmelstern-volkstumliche-schlagerhits-volkstumlich-schlager-osterreich.mp3",
            "ivr": "https://media-web.aircall.io/tts/languages/de/voices/Vicki/adf9b35dba93e711077b7923ae4aaa04344ae4ca.mp3",
            "voicemail": "https://media-web.aircall.io/tracks/tts/languages/de/voices/Marlene/fe82be3b431df4a8268ac785305c921eaae82156.mp3",
            "closed": "https://media-web.aircall.io/tracks/tts/languages/de/voices/Marlene/347c0c91783d8fcbaa28744ba57a61f785ba14f3.mp3",
            "callback_later": "https://media-web.aircall.io/tts/languages/de/voices/Vicki/acd4ccdc2586dbbf862336daab64b2080fa43a5c.mp3"
          }
        },
        "archived": false,
        "teams": [],
        "comments": [],
        "tags": []
      }
    }
  },
  {
    name: 'call.answered',
    direction: 'outbound',
    body: {
      "resource": "call",
      "event": "call.answered",
      "timestamp": 1646389740,
      "token": "58ffd2bc5f3113f7bebf210a49299a1b",
      "data": {
        "id": 780836699,
        "direct_link": "https://api.aircall.io/v1/calls/780836699",
        "direction": "outbound",
        "status": "answered",
        "missed_call_reason": null,
        "started_at": 1646389735,
        "answered_at": 1646389740,
        "ended_at": null,
        "duration": 0,
        "cost": "0.0",
        "hangup_cause": null,
        "voicemail": null,
        "recording": null,
        "asset": null,
        "raw_digits": "+43 720 880079",
        "user": {
          "id": 736640,
          "direct_link": "https://api.aircall.io/v1/users/736640",
          "name": "Koen Test RrNuYErJ74",
          "email": "koen.verduijn+v5doewlrdy@aircall.io",
          "available": true,
          "availability_status": "available",
          "language": "en-US",
          "wrap_up_time": 0
        },
        "number": {
          "id": 404821,
          "direct_link": "https://api.aircall.io/v1/numbers/404821",
          "name": "Koens Test",
          "digits": "+44 330 818 6690",
          "country": "GB",
          "time_zone": "Europe/London",
          "open": true,
          "availability_status": "open",
          "is_ivr": false,
          "live_recording_activated": false,
          "messages": {
            "welcome": "https://media-web.aircall.io/tracks/tts/languages/en/voices/Joanna/85a54589f4bac4767f07c3adb4d5bad49602c0e4.mp3",
            "waiting": "https://media-web.aircall.io/tracks/library/bensound-retrosoul.mp3",
            "ivr": "https://media-web.aircall.io/tts/languages/en/voices/Joanna/5b2401096b75861108e2ceb6ccc4e4c81e03b525.mp3",
            "voicemail": "https://media-web.aircall.io/tracks/tts/languages/en/voices/Joanna/74ce97ac9772be646ccf5583b92be7248930af18.mp3",
            "closed": "https://media-web.aircall.io/tracks/tts/languages/en/voices/Joanna/e5bc465c2b0595ade98a98500aa6851cb557a663.mp3",
            "callback_later": "https://media-web.aircall.io/tts/languages/en/voices/Joanna/a04a676e475a50791cccbea7faa349dab88c4f05.mp3"
          }
        },
        "archived": false,
        "teams": [],
        "comments": [],
        "tags": []
      }
    }
  },
  {
    name: 'call.answered',
    direction: 'inbound',
    body: {
      "resource": "call",
      "event": "call.answered",
      "timestamp": 1646391189,
      "token": "58ffd2bc5f3113f7bebf210a49299a1b",
      "data": {
        "id": 780883160,
        "direct_link": "https://api.aircall.io/v1/calls/780883160",
        "direction": "inbound",
        "status": "answered",
        "missed_call_reason": null,
        "started_at": 1646391174,
        "answered_at": 1646391189,
        "ended_at": null,
        "duration": 0,
        "cost": "0.0",
        "hangup_cause": null,
        "voicemail": null,
        "recording": null,
        "asset": null,
        "raw_digits": "+44 330 818 6690",
        "user": {
          "id": 731416,
          "direct_link": "https://api.aircall.io/v1/users/731416",
          "name": "Koen Verduijn SE",
          "email": "koen.verduijn+demo@aircall.io",
          "available": true,
          "availability_status": "available",
          "language": "en-US",
          "wrap_up_time": 90
        },
        "number": {
          "id": 397375,
          "direct_link": "https://api.aircall.io/v1/numbers/397375",
          "name": "Koens Product number",
          "digits": "+43 720 880079",
          "country": "AT",
          "time_zone": "Europe/Vienna",
          "open": true,
          "availability_status": "custom",
          "is_ivr": false,
          "live_recording_activated": false,
          "messages": {
            "welcome": "https://media-web.aircall.io/tracks/tts/languages/de/voices/Marlene/eb173eb99d8608c016271c16cf75b6b5086d3125.mp3",
            "waiting": "https://media-web.aircall.io/companies/196488/numbers/397375/tracks/library/1644499866/laysa-blaue-augen-himmelstern-volkstumliche-schlagerhits-volkstumlich-schlager-osterreich.mp3",
            "ivr": "https://media-web.aircall.io/tts/languages/de/voices/Vicki/adf9b35dba93e711077b7923ae4aaa04344ae4ca.mp3",
            "voicemail": "https://media-web.aircall.io/tracks/tts/languages/de/voices/Marlene/fe82be3b431df4a8268ac785305c921eaae82156.mp3",
            "closed": "https://media-web.aircall.io/tracks/tts/languages/de/voices/Marlene/347c0c91783d8fcbaa28744ba57a61f785ba14f3.mp3",
            "callback_later": "https://media-web.aircall.io/tts/languages/de/voices/Vicki/acd4ccdc2586dbbf862336daab64b2080fa43a5c.mp3"
          }
        },
        "archived": false,
        "teams": [],
        "comments": [],
        "tags": []
      }
    }
  },
  {
    name: 'call.hold',
    direction: 'outbound',
    body: {
      "resource": "call",
      "event": "call.hold",
      "timestamp": 1646389751,
      "token": "58ffd2bc5f3113f7bebf210a49299a1b",
      "data": {
        "id": 780836699,
        "direct_link": "https://api.aircall.io/v1/calls/780836699",
        "direction": "outbound",
        "status": "answered",
        "missed_call_reason": null,
        "started_at": 1646389735,
        "answered_at": 1646389740,
        "ended_at": null,
        "duration": 0,
        "cost": "0.0",
        "hangup_cause": null,
        "voicemail": null,
        "recording": null,
        "asset": null,
        "raw_digits": "+43 720 880079",
        "user": {
          "id": 736640,
          "direct_link": "https://api.aircall.io/v1/users/736640",
          "name": "Koen Test RrNuYErJ74",
          "email": "koen.verduijn+v5doewlrdy@aircall.io",
          "available": true,
          "availability_status": "available",
          "language": "en-US",
          "wrap_up_time": 0
        },
        "number": {
          "id": 404821,
          "direct_link": "https://api.aircall.io/v1/numbers/404821",
          "name": "Koens Test",
          "digits": "+44 330 818 6690",
          "country": "GB",
          "time_zone": "Europe/London",
          "open": true,
          "availability_status": "open",
          "is_ivr": false,
          "live_recording_activated": false,
          "messages": {
            "welcome": "https://media-web.aircall.io/tracks/tts/languages/en/voices/Joanna/85a54589f4bac4767f07c3adb4d5bad49602c0e4.mp3",
            "waiting": "https://media-web.aircall.io/tracks/library/bensound-retrosoul.mp3",
            "ivr": "https://media-web.aircall.io/tts/languages/en/voices/Joanna/5b2401096b75861108e2ceb6ccc4e4c81e03b525.mp3",
            "voicemail": "https://media-web.aircall.io/tracks/tts/languages/en/voices/Joanna/74ce97ac9772be646ccf5583b92be7248930af18.mp3",
            "closed": "https://media-web.aircall.io/tracks/tts/languages/en/voices/Joanna/e5bc465c2b0595ade98a98500aa6851cb557a663.mp3",
            "callback_later": "https://media-web.aircall.io/tts/languages/en/voices/Joanna/a04a676e475a50791cccbea7faa349dab88c4f05.mp3"
          }
        },
        "archived": false,
        "teams": [],
        "comments": [],
        "tags": []
      }
    }
  },
  {
    name: 'call.unhold',
    direction: 'outbound',
    body: {
      "resource": "call",
      "event": "call.unhold",
      "timestamp": 1646389753,
      "token": "58ffd2bc5f3113f7bebf210a49299a1b",
      "data": {
        "id": 780836699,
        "direct_link": "https://api.aircall.io/v1/calls/780836699",
        "direction": "outbound",
        "status": "answered",
        "missed_call_reason": null,
        "started_at": 1646389735,
        "answered_at": 1646389740,
        "ended_at": null,
        "duration": 0,
        "cost": "0.0",
        "hangup_cause": null,
        "voicemail": null,
        "recording": null,
        "asset": null,
        "raw_digits": "+43 720 880079",
        "user": {
          "id": 736640,
          "direct_link": "https://api.aircall.io/v1/users/736640",
          "name": "Koen Test RrNuYErJ74",
          "email": "koen.verduijn+v5doewlrdy@aircall.io",
          "available": true,
          "availability_status": "available",
          "language": "en-US",
          "wrap_up_time": 0
        },
        "number": {
          "id": 404821,
          "direct_link": "https://api.aircall.io/v1/numbers/404821",
          "name": "Koens Test",
          "digits": "+44 330 818 6690",
          "country": "GB",
          "time_zone": "Europe/London",
          "open": true,
          "availability_status": "open",
          "is_ivr": false,
          "live_recording_activated": false,
          "messages": {
            "welcome": "https://media-web.aircall.io/tracks/tts/languages/en/voices/Joanna/85a54589f4bac4767f07c3adb4d5bad49602c0e4.mp3",
            "waiting": "https://media-web.aircall.io/tracks/library/bensound-retrosoul.mp3",
            "ivr": "https://media-web.aircall.io/tts/languages/en/voices/Joanna/5b2401096b75861108e2ceb6ccc4e4c81e03b525.mp3",
            "voicemail": "https://media-web.aircall.io/tracks/tts/languages/en/voices/Joanna/74ce97ac9772be646ccf5583b92be7248930af18.mp3",
            "closed": "https://media-web.aircall.io/tracks/tts/languages/en/voices/Joanna/e5bc465c2b0595ade98a98500aa6851cb557a663.mp3",
            "callback_later": "https://media-web.aircall.io/tts/languages/en/voices/Joanna/a04a676e475a50791cccbea7faa349dab88c4f05.mp3"
          }
        },
        "archived": false,
        "teams": [],
        "comments": [],
        "tags": []
      }
    }
  },
  {
    name: 'call.hold',
    direction: 'inbound',
    body: {
      "resource": "call",
      "event": "call.hold",
      "timestamp": 1646391208,
      "token": "58ffd2bc5f3113f7bebf210a49299a1b",
      "data": {
        "id": 780883160,
        "direct_link": "https://api.aircall.io/v1/calls/780883160",
        "direction": "inbound",
        "status": "answered",
        "missed_call_reason": null,
        "started_at": 1646391174,
        "answered_at": 1646391189,
        "ended_at": null,
        "duration": 0,
        "cost": "0.0",
        "hangup_cause": null,
        "voicemail": null,
        "recording": null,
        "asset": null,
        "raw_digits": "+44 330 818 6690",
        "user": {
          "id": 731416,
          "direct_link": "https://api.aircall.io/v1/users/731416",
          "name": "Koen Verduijn SE",
          "email": "koen.verduijn+demo@aircall.io",
          "available": true,
          "availability_status": "available",
          "language": "en-US",
          "wrap_up_time": 90
        },
        "number": {
          "id": 397375,
          "direct_link": "https://api.aircall.io/v1/numbers/397375",
          "name": "Koens Product number",
          "digits": "+43 720 880079",
          "country": "AT",
          "time_zone": "Europe/Vienna",
          "open": true,
          "availability_status": "custom",
          "is_ivr": false,
          "live_recording_activated": false,
          "messages": {
            "welcome": "https://media-web.aircall.io/tracks/tts/languages/de/voices/Marlene/eb173eb99d8608c016271c16cf75b6b5086d3125.mp3",
            "waiting": "https://media-web.aircall.io/companies/196488/numbers/397375/tracks/library/1644499866/laysa-blaue-augen-himmelstern-volkstumliche-schlagerhits-volkstumlich-schlager-osterreich.mp3",
            "ivr": "https://media-web.aircall.io/tts/languages/de/voices/Vicki/adf9b35dba93e711077b7923ae4aaa04344ae4ca.mp3",
            "voicemail": "https://media-web.aircall.io/tracks/tts/languages/de/voices/Marlene/fe82be3b431df4a8268ac785305c921eaae82156.mp3",
            "closed": "https://media-web.aircall.io/tracks/tts/languages/de/voices/Marlene/347c0c91783d8fcbaa28744ba57a61f785ba14f3.mp3",
            "callback_later": "https://media-web.aircall.io/tts/languages/de/voices/Vicki/acd4ccdc2586dbbf862336daab64b2080fa43a5c.mp3"
          }
        },
        "archived": false,
        "teams": [],
        "comments": [],
        "tags": []
      }
    }
  },
  {
    name: 'call.unhold',
    direction: 'inbound',
    body: {
      "resource": "call",
      "event": "call.unhold",
      "timestamp": 1646391212,
      "token": "58ffd2bc5f3113f7bebf210a49299a1b",
      "data": {
        "id": 780883160,
        "direct_link": "https://api.aircall.io/v1/calls/780883160",
        "direction": "inbound",
        "status": "answered",
        "missed_call_reason": null,
        "started_at": 1646391174,
        "answered_at": 1646391189,
        "ended_at": null,
        "duration": 0,
        "cost": "0.0",
        "hangup_cause": null,
        "voicemail": null,
        "recording": null,
        "asset": null,
        "raw_digits": "+44 330 818 6690",
        "user": {
          "id": 731416,
          "direct_link": "https://api.aircall.io/v1/users/731416",
          "name": "Koen Verduijn SE",
          "email": "koen.verduijn+demo@aircall.io",
          "available": true,
          "availability_status": "available",
          "language": "en-US",
          "wrap_up_time": 90
        },
        "number": {
          "id": 397375,
          "direct_link": "https://api.aircall.io/v1/numbers/397375",
          "name": "Koens Product number",
          "digits": "+43 720 880079",
          "country": "AT",
          "time_zone": "Europe/Vienna",
          "open": true,
          "availability_status": "custom",
          "is_ivr": false,
          "live_recording_activated": false,
          "messages": {
            "welcome": "https://media-web.aircall.io/tracks/tts/languages/de/voices/Marlene/eb173eb99d8608c016271c16cf75b6b5086d3125.mp3",
            "waiting": "https://media-web.aircall.io/companies/196488/numbers/397375/tracks/library/1644499866/laysa-blaue-augen-himmelstern-volkstumliche-schlagerhits-volkstumlich-schlager-osterreich.mp3",
            "ivr": "https://media-web.aircall.io/tts/languages/de/voices/Vicki/adf9b35dba93e711077b7923ae4aaa04344ae4ca.mp3",
            "voicemail": "https://media-web.aircall.io/tracks/tts/languages/de/voices/Marlene/fe82be3b431df4a8268ac785305c921eaae82156.mp3",
            "closed": "https://media-web.aircall.io/tracks/tts/languages/de/voices/Marlene/347c0c91783d8fcbaa28744ba57a61f785ba14f3.mp3",
            "callback_later": "https://media-web.aircall.io/tts/languages/de/voices/Vicki/acd4ccdc2586dbbf862336daab64b2080fa43a5c.mp3"
          }
        },
        "archived": false,
        "teams": [],
        "comments": [],
        "tags": []
      }
    }
  },
  {
    name: 'call.unsuccessful_transfer',
    direction: 'inbound',
    body: {
      "resource": "call",
      "event": "call.unsuccessful_transfer",
      "timestamp": 1646391274,
      "token": "58ffd2bc5f3113f7bebf210a49299a1b",
      "data": {
        "id": 780883160,
        "direct_link": "https://api.aircall.io/v1/calls/780883160",
        "direction": "inbound",
        "status": "answered",
        "missed_call_reason": null,
        "started_at": 1646391174,
        "answered_at": 1646391189,
        "ended_at": null,
        "duration": 0,
        "cost": "0.0",
        "hangup_cause": null,
        "voicemail": null,
        "recording": null,
        "asset": null,
        "raw_digits": "+44 330 818 6690",
        "user": {
          "id": 731416,
          "direct_link": "https://api.aircall.io/v1/users/731416",
          "name": "Koen Verduijn SE",
          "email": "koen.verduijn+demo@aircall.io",
          "available": true,
          "availability_status": "available",
          "language": "en-US",
          "wrap_up_time": 90
        },
        "number": {
          "id": 397375,
          "direct_link": "https://api.aircall.io/v1/numbers/397375",
          "name": "Koens Product number",
          "digits": "+43 720 880079",
          "country": "AT",
          "time_zone": "Europe/Vienna",
          "open": true,
          "availability_status": "custom",
          "is_ivr": false,
          "live_recording_activated": false,
          "messages": {
            "welcome": "https://media-web.aircall.io/tracks/tts/languages/de/voices/Marlene/eb173eb99d8608c016271c16cf75b6b5086d3125.mp3",
            "waiting": "https://media-web.aircall.io/companies/196488/numbers/397375/tracks/library/1644499866/laysa-blaue-augen-himmelstern-volkstumliche-schlagerhits-volkstumlich-schlager-osterreich.mp3",
            "ivr": "https://media-web.aircall.io/tts/languages/de/voices/Vicki/adf9b35dba93e711077b7923ae4aaa04344ae4ca.mp3",
            "voicemail": "https://media-web.aircall.io/tracks/tts/languages/de/voices/Marlene/fe82be3b431df4a8268ac785305c921eaae82156.mp3",
            "closed": "https://media-web.aircall.io/tracks/tts/languages/de/voices/Marlene/347c0c91783d8fcbaa28744ba57a61f785ba14f3.mp3",
            "callback_later": "https://media-web.aircall.io/tts/languages/de/voices/Vicki/acd4ccdc2586dbbf862336daab64b2080fa43a5c.mp3"
          }
        },
        "archived": false,
        "teams": [],
        "comments": [],
        "tags": [],
        "transferred_to": {
          "id": 530103,
          "direct_link": "https://api.aircall.io/v1/users/530103",
          "name": "Martin Dizon Demo",
          "email": "martin.dizon+demo@aircall.io",
          "available": true,
          "availability_status": "available",
          "language": "en-US",
          "wrap_up_time": 0
        },
        "transferred_by": {
          "id": 731416,
          "direct_link": "https://api.aircall.io/v1/users/731416",
          "name": "Koen Verduijn SE",
          "email": "koen.verduijn+demo@aircall.io",
          "available": true,
          "availability_status": "available",
          "language": "en-US",
          "wrap_up_time": 90
        }
      }
    }
  },
  {
    name: 'call.hungup',
    direction: 'outbound',
    body: {
      "resource": "call",
      "event": "call.hungup",
      "timestamp": 1646389755,
      "token": "58ffd2bc5f3113f7bebf210a49299a1b",
      "data": {
        "id": 780836699,
        "direct_link": "https://api.aircall.io/v1/calls/780836699",
        "direction": "outbound",
        "status": "done",
        "missed_call_reason": null,
        "started_at": 1646389735,
        "answered_at": 1646389740,
        "ended_at": 1646389755,
        "duration": 20,
        "cost": "0.0",
        "hangup_cause": null,
        "voicemail": null,
        "recording": null,
        "asset": null,
        "raw_digits": "+43 720 880079",
        "user": {
          "id": 736640,
          "direct_link": "https://api.aircall.io/v1/users/736640",
          "name": "Koen Test RrNuYErJ74",
          "email": "koen.verduijn+v5doewlrdy@aircall.io",
          "available": true,
          "availability_status": "available",
          "language": "en-US",
          "wrap_up_time": 0
        },
        "number": {
          "id": 404821,
          "direct_link": "https://api.aircall.io/v1/numbers/404821",
          "name": "Koens Test",
          "digits": "+44 330 818 6690",
          "country": "GB",
          "time_zone": "Europe/London",
          "open": true,
          "availability_status": "open",
          "is_ivr": false,
          "live_recording_activated": false,
          "messages": {
            "welcome": "https://media-web.aircall.io/tracks/tts/languages/en/voices/Joanna/85a54589f4bac4767f07c3adb4d5bad49602c0e4.mp3",
            "waiting": "https://media-web.aircall.io/tracks/library/bensound-retrosoul.mp3",
            "ivr": "https://media-web.aircall.io/tts/languages/en/voices/Joanna/5b2401096b75861108e2ceb6ccc4e4c81e03b525.mp3",
            "voicemail": "https://media-web.aircall.io/tracks/tts/languages/en/voices/Joanna/74ce97ac9772be646ccf5583b92be7248930af18.mp3",
            "closed": "https://media-web.aircall.io/tracks/tts/languages/en/voices/Joanna/e5bc465c2b0595ade98a98500aa6851cb557a663.mp3",
            "callback_later": "https://media-web.aircall.io/tts/languages/en/voices/Joanna/a04a676e475a50791cccbea7faa349dab88c4f05.mp3"
          }
        },
        "archived": false,
        "teams": [],
        "comments": [],
        "tags": []
      }
    }
  },
  {
    name: 'call.hungup',
    direction: 'inbound',
    body: {
      "resource": "call",
      "event": "call.hungup",
      "timestamp": 1646389756,
      "token": "58ffd2bc5f3113f7bebf210a49299a1b",
      "data": {
        "id": 780836754,
        "direct_link": "https://api.aircall.io/v1/calls/780836754",
        "direction": "inbound",
        "status": "done",
        "missed_call_reason": "agents_did_not_answer",
        "started_at": 1646389739,
        "answered_at": null,
        "ended_at": 1646389756,
        "duration": 17,
        "cost": "0.0",
        "hangup_cause": null,
        "voicemail": null,
        "recording": null,
        "asset": null,
        "raw_digits": "+44 330 818 6690",
        "number": {
          "id": 397375,
          "direct_link": "https://api.aircall.io/v1/numbers/397375",
          "name": "Koens Product number",
          "digits": "+43 720 880079",
          "country": "AT",
          "time_zone": "Europe/Vienna",
          "open": true,
          "availability_status": "custom",
          "is_ivr": false,
          "live_recording_activated": false,
          "messages": {
            "welcome": "https://media-web.aircall.io/tracks/tts/languages/de/voices/Marlene/eb173eb99d8608c016271c16cf75b6b5086d3125.mp3",
            "waiting": "https://media-web.aircall.io/companies/196488/numbers/397375/tracks/library/1644499866/laysa-blaue-augen-himmelstern-volkstumliche-schlagerhits-volkstumlich-schlager-osterreich.mp3",
            "ivr": "https://media-web.aircall.io/tts/languages/de/voices/Vicki/adf9b35dba93e711077b7923ae4aaa04344ae4ca.mp3",
            "voicemail": "https://media-web.aircall.io/tracks/tts/languages/de/voices/Marlene/fe82be3b431df4a8268ac785305c921eaae82156.mp3",
            "closed": "https://media-web.aircall.io/tracks/tts/languages/de/voices/Marlene/347c0c91783d8fcbaa28744ba57a61f785ba14f3.mp3",
            "callback_later": "https://media-web.aircall.io/tts/languages/de/voices/Vicki/acd4ccdc2586dbbf862336daab64b2080fa43a5c.mp3"
          }
        },
        "archived": false,
        "teams": [],
        "comments": [],
        "tags": []
      }
    }
  },
  {
    name: 'call.tagged',
    direction: 'inbound',
    body: {
      "resource": "call",
      "event": "call.tagged",
      "timestamp": 1646391384,
      "token": "58ffd2bc5f3113f7bebf210a49299a1b",
      "data": {
        "id": 780883160,
        "direct_link": "https://api.aircall.io/v1/calls/780883160",
        "direction": "inbound",
        "status": "done",
        "missed_call_reason": null,
        "started_at": 1646391174,
        "answered_at": 1646391189,
        "ended_at": 1646391382,
        "duration": 208,
        "cost": "0.0",
        "hangup_cause": null,
        "voicemail": null,
        "recording": null,
        "asset": null,
        "raw_digits": "+44 330 818 6690",
        "user": {
          "id": 731416,
          "direct_link": "https://api.aircall.io/v1/users/731416",
          "name": "Koen Verduijn SE",
          "email": "koen.verduijn+demo@aircall.io",
          "available": true,
          "availability_status": "available",
          "language": "en-US",
          "wrap_up_time": 90
        },
        "number": {
          "id": 397375,
          "direct_link": "https://api.aircall.io/v1/numbers/397375",
          "name": "Koens Product number",
          "digits": "+43 720 880079",
          "country": "AT",
          "time_zone": "Europe/Vienna",
          "open": true,
          "availability_status": "custom",
          "is_ivr": false,
          "live_recording_activated": false,
          "messages": {
            "welcome": "https://media-web.aircall.io/tracks/tts/languages/de/voices/Marlene/eb173eb99d8608c016271c16cf75b6b5086d3125.mp3",
            "waiting": "https://media-web.aircall.io/companies/196488/numbers/397375/tracks/library/1644499866/laysa-blaue-augen-himmelstern-volkstumliche-schlagerhits-volkstumlich-schlager-osterreich.mp3",
            "ivr": "https://media-web.aircall.io/tts/languages/de/voices/Vicki/adf9b35dba93e711077b7923ae4aaa04344ae4ca.mp3",
            "voicemail": "https://media-web.aircall.io/tracks/tts/languages/de/voices/Marlene/fe82be3b431df4a8268ac785305c921eaae82156.mp3",
            "closed": "https://media-web.aircall.io/tracks/tts/languages/de/voices/Marlene/347c0c91783d8fcbaa28744ba57a61f785ba14f3.mp3",
            "callback_later": "https://media-web.aircall.io/tts/languages/de/voices/Vicki/acd4ccdc2586dbbf862336daab64b2080fa43a5c.mp3"
          }
        },
        "archived": false,
        "teams": [],
        "comments": [],
        "tags": [
          {
            "id": 1022984,
            "name": "Assess_Eng_Lvl",
            "tagged_by": {
              "id": 731416,
              "direct_link": "https://api.aircall.io/v1/users/731416",
              "name": "Koen Verduijn SE",
              "email": "koen.verduijn+demo@aircall.io",
              "available": true,
              "availability_status": "available",
              "language": "en-US",
              "wrap_up_time": 90
            },
            "tagged_at": 1646391384
          }
        ],
        "transferred_to": {
          "id": 530103,
          "direct_link": "https://api.aircall.io/v1/users/530103",
          "name": "Martin Dizon Demo",
          "email": "martin.dizon+demo@aircall.io",
          "available": true,
          "availability_status": "available",
          "language": "en-US",
          "wrap_up_time": 0
        },
        "transferred_by": {
          "id": 731416,
          "direct_link": "https://api.aircall.io/v1/users/731416",
          "name": "Koen Verduijn SE",
          "email": "koen.verduijn+demo@aircall.io",
          "available": true,
          "availability_status": "available",
          "language": "en-US",
          "wrap_up_time": 90
        }
      }
    }
  },
  {
    name: 'call.ended',
    direction: 'outbound',
    body: {
      "resource": "call",
      "event": "call.ended",
      "timestamp": 1646389786,
      "token": "58ffd2bc5f3113f7bebf210a49299a1b",
      "data": {
        "id": 780836699,
        "direct_link": "https://api.aircall.io/v1/calls/780836699",
        "direction": "outbound",
        "status": "done",
        "missed_call_reason": null,
        "started_at": 1646389735,
        "answered_at": 1646389740,
        "ended_at": 1646389755,
        "duration": 20,
        "cost": "0.0",
        "hangup_cause": null,
        "voicemail": null,
        "recording": null,
        "asset": null,
        "raw_digits": "+43 720 880079",
        "user": {
          "id": 736640,
          "direct_link": "https://api.aircall.io/v1/users/736640",
          "name": "Koen Test RrNuYErJ74",
          "email": "koen.verduijn+v5doewlrdy@aircall.io",
          "available": true,
          "availability_status": "available",
          "language": "en-US",
          "wrap_up_time": 0
        },
        "number": {
          "id": 404821,
          "direct_link": "https://api.aircall.io/v1/numbers/404821",
          "name": "Koens Test",
          "digits": "+44 330 818 6690",
          "country": "GB",
          "time_zone": "Europe/London",
          "open": true,
          "availability_status": "open",
          "is_ivr": false,
          "live_recording_activated": false,
          "messages": {
            "welcome": "https://media-web.aircall.io/tracks/tts/languages/en/voices/Joanna/85a54589f4bac4767f07c3adb4d5bad49602c0e4.mp3",
            "waiting": "https://media-web.aircall.io/tracks/library/bensound-retrosoul.mp3",
            "ivr": "https://media-web.aircall.io/tts/languages/en/voices/Joanna/5b2401096b75861108e2ceb6ccc4e4c81e03b525.mp3",
            "voicemail": "https://media-web.aircall.io/tracks/tts/languages/en/voices/Joanna/74ce97ac9772be646ccf5583b92be7248930af18.mp3",
            "closed": "https://media-web.aircall.io/tracks/tts/languages/en/voices/Joanna/e5bc465c2b0595ade98a98500aa6851cb557a663.mp3",
            "callback_later": "https://media-web.aircall.io/tts/languages/en/voices/Joanna/a04a676e475a50791cccbea7faa349dab88c4f05.mp3"
          }
        },
        "archived": false,
        "teams": [],
        "comments": [],
        "tags": []
      }
    }
  },
  {
    name: 'call.ended',
    direction: 'inbound',
    body: {
      "resource": "call",
      "event": "call.ended",
      "timestamp": 1646389786,
      "token": "58ffd2bc5f3113f7bebf210a49299a1b",
      "data": {
        "id": 780836754,
        "direct_link": "https://api.aircall.io/v1/calls/780836754",
        "direction": "inbound",
        "status": "done",
        "missed_call_reason": "agents_did_not_answer",
        "started_at": 1646389739,
        "answered_at": null,
        "ended_at": 1646389756,
        "duration": 17,
        "cost": "0.0",
        "hangup_cause": null,
        "voicemail": "https://production-pdx-555773567328-web.s3.us-west-2.amazonaws.com/companies/196488/recordings/call-780836754-f759b3275353036ea10492f18632ad0e-voicemail.mp3?X-Amz-Algorithm=AWS4-HMAC-SHA256\u0026X-Amz-Credential=ASIAYCZVPUFQCGAMRZMS%2F20220304%2Fus-west-2%2Fs3%2Faws4_request\u0026X-Amz-Date=20220304T102946Z\u0026X-Amz-Expires=600\u0026X-Amz-SignedHeaders=host\u0026X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFO3Ehx6FmKoh0Z1TTd90BsBS4rENvWAsW1Wsd%2Bwg5KaAiAYzrUw%2BiSKXsAv9xANmYc%2FCA%2BJ3t5n5MnPTUdh%2FeqHiCr5AwhZEAIaDDU1NTc3MzU2NzMyOCIMcUivnxGKIXMiHLL%2FKtYDNCUU8dDsV4tkJbC9ptst0Cv4CP6HmKBaAwnNWne6spEcw8u2Jdgn9RS%2BsLKyR%2Fo3ItAK8aXBVse%2ByMD9yYwxWz027gwi43DYoR30S7dhRPFZ7KfPvsWc%2F64nf5nHPLIxaBj2YvbaSeyJ2HOeQPFIZ4eeIQitGCOYIJCn2MmFrDtmeVrv2D1hohuD6BTuvCWiMgzV5hd8RNkijumsfIawnU3745oo9MUd3qjVq%2BQijI2W6ujV2UlmqNt5JGKFIff74cbbaNV1fmavxa68CcPNUnJofRcc6K%2BH5lRR11LqBTsDuJTTTO%2B83%2F%2BCRTNoUMt%2FI1gu1FT41dCDUbjmP425yehKizLA6wXrdCBeljjIG1iGaU97%2FqE3PUGAma0w3VRmZJZ2o0irsX8Vc%2BpenFjYBSWVTMfvHG%2Bp1vrKZhfoou6wdQpLnBMmwPRkCFGp0H7ZfkepKyYDyRk3DO1jJH7LsYN9bBB1PGRpCi7fFtlk%2Bzqe%2BfkOxMoxoE%2F83Bz88iC0NgZmCXAiOYs6%2Bw%2FcpRz9r5gfrsy3Z6q53u3u6DlqJWAd3BAnpeudnanU%2BL7toFgomJJ1Hi1ZfMRUklat%2BnqSKQhopTzlwBfUhB3CCWRUkjygcdjlp8kwnJOHkQY6pgGpYs2TyHkPbC9PVRrSV3ykqSIvva8amz29zWhetQkHt7dC1hyVd6E2u5SvetLTuKpvDca7JUK4laEVeMGh8%2FkV49BYMqvGD4N8q3izQF6jZb7B7pSKjjbmtmEue8EjnummCjmYh8gtXanmPodd7fHiMnmGRrqvk7sHWBx8w8uRls0XvlfC8Shl5ro6v444iuSiBM%2BOkrzepxhmeX%2BAoIWy2ji%2B2xyw\u0026X-Amz-Signature=a108739ba319df8f7c586a5545588327c435d460459205e7d5e3dffadfa991af",
        "recording": null,
        "asset": "https://assets.aircall.io/calls/780836754/voicemail",
        "raw_digits": "+44 330 818 6690",
        "number": {
          "id": 397375,
          "direct_link": "https://api.aircall.io/v1/numbers/397375",
          "name": "Koens Product number",
          "digits": "+43 720 880079",
          "country": "AT",
          "time_zone": "Europe/Vienna",
          "open": true,
          "availability_status": "custom",
          "is_ivr": false,
          "live_recording_activated": false,
          "messages": {
            "welcome": "https://media-web.aircall.io/tracks/tts/languages/de/voices/Marlene/eb173eb99d8608c016271c16cf75b6b5086d3125.mp3",
            "waiting": "https://media-web.aircall.io/companies/196488/numbers/397375/tracks/library/1644499866/laysa-blaue-augen-himmelstern-volkstumliche-schlagerhits-volkstumlich-schlager-osterreich.mp3",
            "ivr": "https://media-web.aircall.io/tts/languages/de/voices/Vicki/adf9b35dba93e711077b7923ae4aaa04344ae4ca.mp3",
            "voicemail": "https://media-web.aircall.io/tracks/tts/languages/de/voices/Marlene/fe82be3b431df4a8268ac785305c921eaae82156.mp3",
            "closed": "https://media-web.aircall.io/tracks/tts/languages/de/voices/Marlene/347c0c91783d8fcbaa28744ba57a61f785ba14f3.mp3",
            "callback_later": "https://media-web.aircall.io/tts/languages/de/voices/Vicki/acd4ccdc2586dbbf862336daab64b2080fa43a5c.mp3"
          }
        },
        "archived": false,
        "teams": [],
        "comments": [],
        "tags": []
      }
    }
  },
  {
    name: 'call.commented',
    direction: 'inbound',
    body: {
      "resource": "call",
      "event": "call.commented",
      "timestamp": 1646391469,
      "token": "58ffd2bc5f3113f7bebf210a49299a1b",
      "data": {
        "id": 780883160,
        "direct_link": "https://api.aircall.io/v1/calls/780883160",
        "direction": "inbound",
        "status": "done",
        "missed_call_reason": null,
        "started_at": 1646391174,
        "answered_at": 1646391189,
        "ended_at": 1646391382,
        "duration": 208,
        "cost": "0.0",
        "hangup_cause": null,
        "voicemail": null,
        "recording": null,
        "asset": null,
        "raw_digits": "+44 330 818 6690",
        "user": {
          "id": 731416,
          "direct_link": "https://api.aircall.io/v1/users/731416",
          "name": "Koen Verduijn SE",
          "email": "koen.verduijn+demo@aircall.io",
          "available": true,
          "availability_status": "available",
          "language": "en-US",
          "wrap_up_time": 90
        },
        "number": {
          "id": 397375,
          "direct_link": "https://api.aircall.io/v1/numbers/397375",
          "name": "Koens Product number",
          "digits": "+43 720 880079",
          "country": "AT",
          "time_zone": "Europe/Vienna",
          "open": true,
          "availability_status": "custom",
          "is_ivr": false,
          "live_recording_activated": false,
          "messages": {
            "welcome": "https://media-web.aircall.io/tracks/tts/languages/de/voices/Marlene/eb173eb99d8608c016271c16cf75b6b5086d3125.mp3",
            "waiting": "https://media-web.aircall.io/companies/196488/numbers/397375/tracks/library/1644499866/laysa-blaue-augen-himmelstern-volkstumliche-schlagerhits-volkstumlich-schlager-osterreich.mp3",
            "ivr": "https://media-web.aircall.io/tts/languages/de/voices/Vicki/adf9b35dba93e711077b7923ae4aaa04344ae4ca.mp3",
            "voicemail": "https://media-web.aircall.io/tracks/tts/languages/de/voices/Marlene/fe82be3b431df4a8268ac785305c921eaae82156.mp3",
            "closed": "https://media-web.aircall.io/tracks/tts/languages/de/voices/Marlene/347c0c91783d8fcbaa28744ba57a61f785ba14f3.mp3",
            "callback_later": "https://media-web.aircall.io/tts/languages/de/voices/Vicki/acd4ccdc2586dbbf862336daab64b2080fa43a5c.mp3"
          }
        },
        "archived": false,
        "teams": [],
        "comments": [
          {
            "id": 24923492,
            "content": "asdfasdfasdf\nalskdfjlaskdjflaksjdf",
            "posted_by": {
              "id": 731416,
              "direct_link": "https://api.aircall.io/v1/users/731416",
              "name": "Koen Verduijn SE",
              "email": "koen.verduijn+demo@aircall.io",
              "available": true,
              "availability_status": "available",
              "language": "en-US",
              "wrap_up_time": 90
            },
            "posted_at": 1646391469
          }
        ],
        "tags": [
          {
            "id": 1022984,
            "name": "Assess_Eng_Lvl",
            "tagged_by": {
              "id": 731416,
              "direct_link": "https://api.aircall.io/v1/users/731416",
              "name": "Koen Verduijn SE",
              "email": "koen.verduijn+demo@aircall.io",
              "available": true,
              "availability_status": "available",
              "language": "en-US",
              "wrap_up_time": 90
            },
            "tagged_at": 1646391384
          }
        ],
        "transferred_to": {
          "id": 530103,
          "direct_link": "https://api.aircall.io/v1/users/530103",
          "name": "Martin Dizon Demo",
          "email": "martin.dizon+demo@aircall.io",
          "available": true,
          "availability_status": "available",
          "language": "en-US",
          "wrap_up_time": 0
        },
        "transferred_by": {
          "id": 731416,
          "direct_link": "https://api.aircall.io/v1/users/731416",
          "name": "Koen Verduijn SE",
          "email": "koen.verduijn+demo@aircall.io",
          "available": true,
          "availability_status": "available",
          "language": "en-US",
          "wrap_up_time": 90
        }
      }
    }
  },
  {
    name: 'call.voicemail_left',
    direction: 'inbound',
    body: {
      "resource": "call",
      "event": "call.voicemail_left",
      "timestamp": 1646389789,
      "token": "58ffd2bc5f3113f7bebf210a49299a1b",
      "data": {
        "id": 780836754,
        "direct_link": "https://api.aircall.io/v1/calls/780836754",
        "direction": "inbound",
        "status": "done",
        "missed_call_reason": "agents_did_not_answer",
        "started_at": 1646389739,
        "answered_at": null,
        "ended_at": 1646389756,
        "duration": 17,
        "cost": "0.0",
        "hangup_cause": null,
        "voicemail": "https://production-pdx-555773567328-web.s3.us-west-2.amazonaws.com/companies/196488/recordings/call-780836754-f759b3275353036ea10492f18632ad0e-voicemail.mp3?X-Amz-Algorithm=AWS4-HMAC-SHA256\u0026X-Amz-Credential=ASIAYCZVPUFQIKGNJEEP%2F20220304%2Fus-west-2%2Fs3%2Faws4_request\u0026X-Amz-Date=20220304T102949Z\u0026X-Amz-Expires=600\u0026X-Amz-SignedHeaders=host\u0026X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlLcRH7Rl%2BnlLOoN20noRcnmH7OFA3jDE9Y%2FCipTiP2AIgQX%2FdQqrnaoefj9TmXrH3OMGRHmdiZ6tcP2BNrJL%2B69Eq%2BQMIWRACGgw1NTU3NzM1NjczMjgiDIPXI1Q10gqaM7guQyrWA6lWWo4q8YoesUEEP68c6IKZ3aazqhzMg2NrdR6NM09Mc%2BLZjbVqfN8R9dJSjfSJtgiMg2tJldeFg5MFytzeiO98ZD9zZKotdSsuPnIOWxstHXQ0956yxNp8Ag25Cl%2BX53KavpMLgCJQn4xvctgoxwohNoUksk5%2FoM2OL%2BbdbnldtN7ZXjdapNCW9IbWXoze%2FvEiLCKSVP%2BtnZ4IbveVig7Kqkx%2FuBnKSOC60rQSHeHY2jVdwfqkZTzLG6P2t2WfKXCqVD2L39vthy1HtF%2FCC8v9%2FaL2D13rtqR%2FAjmUeuWMdXgyv2oLqKFCTrp0XWLxRB4hK82xSP318vco4C%2FsSWCEA%2Fjr22BK%2FzP4NmfnGQXZ48aUTPhJhuVvj%2Bn6aPhsBu0V1tmNfQpe0TEE6oDOLn%2FgdynP2BYBuYsci8bKcBkao9MZBtT70%2F170pirA2TDX2nq4NcJO4wBFnQTtYoPieiWtYM%2FGERFnNAtBMtHwmZPTNGLI9viK6zHIMjQ%2BE4Ybw1VcNzlkQ0x%2FURz1%2BPzGF2QKYWFQGVqt7lFkwKAMB0a3EEvHIRB4ZaEI9PvIl1TY9pqAtriY8adg%2B6KyABn2nVrbPXbH%2FT7m%2BdbyslVSiSetVRovMx4MImOh5EGOqUBYVhzgJNDja1J0FOtweS8Jrj4nTlJhIGCXklG%2FIh5%2Ff0qQNnSXjhlFLP%2BqhEf59xcSbCMJI4RNkSc9E2cLpdXZgLHtV26vOVpCHOL9FVTuFYF4wf8T9E2mHX%2Byxy9MxdrxZPr%2BCvcvRV4MeAfcGR%2BPOLtJTZROxp8vSWRkW88q1LTjEnBvwVErqDV3Rne4705%2BAYtgrTe8a4Q7HTGUM13dqEwiCwS\u0026X-Amz-Signature=e702f4733cb34036fa964545f23b6f402ad1e02b19ec13b4de93e3528fcc737b",
        "recording": null,
        "asset": "https://assets.aircall.io/calls/780836754/voicemail",
        "raw_digits": "+44 330 818 6690",
        "number": {
          "id": 397375,
          "direct_link": "https://api.aircall.io/v1/numbers/397375",
          "name": "Koens Product number",
          "digits": "+43 720 880079",
          "country": "AT",
          "time_zone": "Europe/Vienna",
          "open": true,
          "availability_status": "custom",
          "is_ivr": false,
          "live_recording_activated": false,
          "messages": {
            "welcome": "https://media-web.aircall.io/tracks/tts/languages/de/voices/Marlene/eb173eb99d8608c016271c16cf75b6b5086d3125.mp3",
            "waiting": "https://media-web.aircall.io/companies/196488/numbers/397375/tracks/library/1644499866/laysa-blaue-augen-himmelstern-volkstumliche-schlagerhits-volkstumlich-schlager-osterreich.mp3",
            "ivr": "https://media-web.aircall.io/tts/languages/de/voices/Vicki/adf9b35dba93e711077b7923ae4aaa04344ae4ca.mp3",
            "voicemail": "https://media-web.aircall.io/tracks/tts/languages/de/voices/Marlene/fe82be3b431df4a8268ac785305c921eaae82156.mp3",
            "closed": "https://media-web.aircall.io/tracks/tts/languages/de/voices/Marlene/347c0c91783d8fcbaa28744ba57a61f785ba14f3.mp3",
            "callback_later": "https://media-web.aircall.io/tts/languages/de/voices/Vicki/acd4ccdc2586dbbf862336daab64b2080fa43a5c.mp3"
          }
        },
        "archived": false,
        "teams": [],
        "comments": [],
        "tags": []
      }
    }
  },
  {
    name: 'call.archived',
    direction: 'inbound',
    body: {
      "resource": "call",
      "event": "call.archived",
      "timestamp": 1646652862,
      "token": "8f8da879a8bfd89b6c4ff3b73efc0409",
      "data": {
        "id": 782972196,
        "direct_link": "https://api.aircall.io/v1/calls/782972196",
        "direction": "inbound",
        "status": "done",
        "missed_call_reason": null,
        "started_at": 1646651076,
        "answered_at": null,
        "ended_at": 1646651109,
        "duration": 33,
        "cost": "0.0",
        "hangup_cause": null,
        "voicemail": null,
        "recording": null,
        "asset": null,
        "raw_digits": "+44 330 818 6690",
        "number": {
          "id": 397375,
          "direct_link": "https://api.aircall.io/v1/numbers/397375",
          "name": "Koens Product number",
          "digits": "+43 720 880079",
          "country": "AT",
          "time_zone": "Europe/Vienna",
          "open": true,
          "availability_status": "custom",
          "is_ivr": false,
          "live_recording_activated": false,
          "messages": {
            "welcome": "https://media-web.aircall.io/tracks/tts/languages/de/voices/Marlene/eb173eb99d8608c016271c16cf75b6b5086d3125.mp3",
            "waiting": "https://media-web.aircall.io/companies/196488/numbers/397375/tracks/library/1644499866/laysa-blaue-augen-himmelstern-volkstumliche-schlagerhits-volkstumlich-schlager-osterreich.mp3",
            "ivr": "https://media-web.aircall.io/tts/languages/de/voices/Vicki/adf9b35dba93e711077b7923ae4aaa04344ae4ca.mp3",
            "voicemail": "https://media-web.aircall.io/tracks/tts/languages/de/voices/Marlene/fe82be3b431df4a8268ac785305c921eaae82156.mp3",
            "closed": "https://media-web.aircall.io/tracks/tts/languages/de/voices/Marlene/347c0c91783d8fcbaa28744ba57a61f785ba14f3.mp3",
            "callback_later": "https://media-web.aircall.io/tts/languages/de/voices/Vicki/acd4ccdc2586dbbf862336daab64b2080fa43a5c.mp3"
          }
        },
        "archived": true,
        "teams": [],
        "comments": [],
        "tags": [
          {
            "id": 60692,
            "name": "Callback Request",
            "tagged_by": {},
            "tagged_at": 1646651108
          }
        ]
      }
    }
  }
];

/* notes
- Inbound diagram: if not connected, call.ringing_on_agent then it jumps over hungup and goes to call.ended
- Hangup: webhook user.wut_start arrives earlier than call.hungup
- ended: nice, inbound/outbound webhook gets send earliest depending who hung first
- call.commented: although section is called notes, still referred to as comments
- comments: tags send immediately, comments send after call.ended
- outbound diagram: call hold/onhold missing
*/