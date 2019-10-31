# aseka-mobile-frontend

### demo

![Alt Text](https://github.com/pavinduLakshan/aseka-mobile-frontend/blob/master/demo.gif)

All changes have been described in the relevant places itself.

## How to use

1. Clone the repository `git clone https://github.com/pavinduLakshan/aseka-mobile-frontend.git`.
2. Navigate to the project directory and run `npm install`.
3. Navigate to the `android/app` directory and execute the following command.

 > `keytool -genkey -v -keystore debug.keystore -storepass android -alias androiddebugkey -keypass android -keyalg RSA -keysize 2048 -    validity 10000`

This will prompt to enter answers to number of questions. Give arbitrary answers to them and Enter `yes` to the last question.
This will create a `.keystore` file in `/app` directory. 

4. Open an emulator and run `react-native run-android` in the project directory.
