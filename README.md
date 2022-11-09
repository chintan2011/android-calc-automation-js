# Android Calculator App Automation using Appium and WDIO with JS


Note: This configuration is composed using Ubuntu18 and realme8i for Android device


## Prerequisites
```
sudo apt update
sudo apt upgrade
sudo apt install android-tools-adb android-tools-fastboot -y
```

### Install Java JDK
https://www.oracle.com/java/technologies/javase-jdk14-downloads.html

```
export JAVA_HOME=<path to your jdk>
```

To verify that hava is installed correctly run
```
java --version
```

### Install Node.JS
https://nodejs.org/en/download/
To verify that nodeJS has been installed correctly, run
```
node --version
```

### Install Android Studio
https://developer.android.com/studio
Set ANDROID_HOME variable with android sdk as value
```
export ANDROID_HOME=<path to your Android sdk>
```
To ensure that all necessary tools are installed and configured properly, run
```
adb devices
```
this will start `adb server` and list all the connected Android devices.

* Make sure you enable developer mode ( Settings > About Phone > Build Number, tap build number 7 times) for your device and enable USB debugging

* If you get ‘command not found’ error, then setup ‘platform-tools’ path and ‘tool’ path which are inside the SDK folder, in the path system variable.

* If your device is shown as unknown, remove the device from the machine and disable USB debugging. Try to enable it again and connect to the machine. Once you connect your device, it will be getting a popup message asking, ‘do you trust the machine’. You need to allow it.

* If your device is not shown under the list of devices attached, it means your machine doesn’t have drivers to identify your device. Search for the drivers which do support your device and install them will be sorted out this issue.

### Install Appium Desktop
http://appium.io/downloads.html
#### Note: Make sure to update JAVA_HOME and ANDROID_HOME variables for appium desktop.

<br>

### Install Appium Inspector
https://github.com/appium/appium-inspector

<br>

## Running Test

### Install all dependencies
```
cd android-calc-automation-js
npm install
```

Inside the project folder edit `wdio.conf.js` file.

Run `adb devices` and copy device id.

Paste the device id beside `deviceName` under `capabilities` in `wdio.conf.js` file.

Similarly update `platformVersion`.

Add absolute path for `app`.

### Important Note
For some device additional security settings need to be enabled before we can launch native applications for testing, please refer to the manufactures' documentation.

<br>

## Running the test
Start Appium server using Appium desktop app.

Inside `android-calc-automation-js` repo run the following command
```
npm run test
```
<br>

### Vscode `launch.json` config
```
{
    "type": "node-terminal",
    "request": "launch",
    "name": "Launch Program",
    "cwd": "${workspaceFolder}/android-calc-automation-js",
    "command": "npm run test"
}
```