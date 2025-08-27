# Chromecast Example Android Sender

## Overview

Example Google Cast Android sender application that sends commands to control a red square on the receiver app.
The sender provides directional controls (up, down, left, right) and text input capabilities.

## Features

- Cast button integration with Google Cast SDK
- Directional control buttons (Up, Down, Left, Right)
- Text input field for sending custom messages
- Modern UI built with Jetpack Compose
- Dependency injection with Hilt

## Prerequisites

- Android Studio (latest version recommended)
- Android device or emulator with Google Play Services
- A Chromecast device or Cast-enabled device on the same network

## Default Receiver App

**The application comes pre-configured with a working receiver app hosted on AWS CloudFront.**
You can test the sender immediately without deploying your own receiver.

## Using Your Own Receiver

If you want to use your own custom receiver app:

1. Register your receiver app in the [Google Cast SDK Developer Console](https://cast.google.com/publish/)
2. Deploy your receiver app (see the `js/` directory for the receiver implementation)
3. Replace the `chromecast_app_id` in `app/src/main/res/values/strings.xml`:
   ```xml
   <string name="chromecast_app_id" translatable="false">YOUR_APP_ID_HERE</string>
   ```

## How to Run

1. Open the `android/` directory in Android Studio
2. Sync the project with Gradle files
3. Connect your Android device or start an emulator
4. Ensure your device is on the same network as your Chromecast
5. Run the application
6. Tap the Cast button in the app to connect to a Chromecast device
7. Use the directional buttons or text input to send commands

## Project Structure

- Built with Kotlin and Jetpack Compose
- Uses Google Cast SDK v3
- Implements MVVM architecture pattern
- Package name: `pl.gunock.chromecastexample`

## Configuration

- **Min SDK:** 24 (Android 7.0)
- **Target SDK:** 36
- **Compile SDK:** 36
- **Java Version:** 17

## Testing the App

1. Launch the app on your Android device
2. Tap the Cast icon in the top menu
3. Select your Chromecast device from the list
4. Once connected, the receiver app will display a red square
5. Use the directional buttons to move the square
6. Enter text in the input field and tap "Send" to send custom messages

## Additional Resources

- [Google Cast SDK Documentation](https://developers.google.com/cast/docs/android_sender)
- [Cast SDK Registration](https://developers.google.com/cast/docs/registration)
- [Jetpack Compose Documentation](https://developer.android.com/jetpack/compose)
