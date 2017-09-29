
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/jantsch/GPSTracker)

[![Travis](https://img.shields.io/travis/rust-lang/rust.svg)](https://github.com/jantsch/GPSTracker)

# JobTracker

<a href="https://imgflip.com/gif/1wr6dl"><img src="https://i.imgflip.com/1wr6dl.gif" title="made at imgflip.com"/></a>

* Standard React Native App Utilizing 'react-native init'

## :arrow_up: How to Setup

**Step 1:** git clone this repo:

Run Front End 

**Step 2:** cd to GPS_FE:

**Step 3:** Install the dependencies with npm install

**Step 4:** Create keystore and place inside the folder /android/app

**Step 5:** Replace the Google API  inside the file AndroidManifest.xml

**Step 6:** Replace gradle.properties content with 

MYAPP_RELEASE_STORE_FILE=***

MYAPP_RELEASE_KEY_ALIAS=***

MYAPP_RELEASE_STORE_PASSWORD=***

MYAPP_RELEASE_KEY_PASSWORD=***

android.useDeprecatedNdk=true

Run Back End 

**Step 7:** cd to GPS_BackEnd:

**Step 8:** Install the dependencies with npm install

**Step 9:** Create .env with  

JWT_SECRET = ***

MONGO_URL = ***

PORT = 3000


## :arrow_forward: How to Run App

1. cd to the repo
2. Run Build for either OS
  * for iOS
    * run `react-native run-ios`
  * for Android
    * Run Genymotion
    * run `react-native run-android`

## Features
- Search for jobs in specific area.
- Store jobs that the user wants to apply later.
- Welcome screen with slider.
- Splash screen and loading screen enabled.
- Auth Email/Password
- Token stored in AsyncStorage


## :closed_lock_with_key: Secrets

This project uses [react-native-config](https://github.com/luggit/react-native-config) to expose config variables to your javascript code in React Native. You can store API keys
and other sensitive information in a `.env` file:

```
SERVER_URL=https://myapi.com
```

and access them from React Native like so:

```
import Secrets from 'react-native-config'

Secrets.SERVER_URL  // 'https://myapi.com'
```

<<<<<<< HEAD
The `.env` file is ignored by git keeping those secrets out of your repo.
=======
The `.env` file is ignored by git keeping those secrets out of your repo.
>>>>>>> ace53dfff4260143c616398d4fa6083f4f663298
