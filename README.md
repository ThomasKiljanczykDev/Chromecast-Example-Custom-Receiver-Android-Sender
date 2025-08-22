# Chromecast Example Customer Receiver with Android Sender

This project demonstrates a complete Google Cast (Chromecast) implementation with both sender and a custom receiver
application.

## Project Structure

The project consists of two main modules:

### [Android Sender Application](./android/README.md)

An Android application that acts as a Google Cast sender,
allowing users to send commands to control the receiver application.

### [JavaScript Receiver Application](./js/README.md)

A custom web-based receiver application that responds to commands from the sender by moving visual elements (red square)
on the screen.

## Getting Started

Please refer to the individual module README files for specific setup and running instructions:

- [Android Sender Setup](./android/README.md)
- [JavaScript Receiver Setup](./js/README.md)

## Requirements

- Google Cast device (Chromecast, Android TV, etc.)
- Google Cast SDK registration for the custom receiver app
- Android Studio for the Android sender application
- Web hosting for the JavaScript receiver application

## License

See the LICENSE files in each module directory for licensing information.