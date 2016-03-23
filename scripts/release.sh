#!/bin/sh

#keytool -genkey -v -keystore SimpleGUI.keystore -alias SimpleGUI -keyalg RSA -keysize 2048 -validity 10000

cordova run android --release -- --keystore=scripts/SimpleGUI.keystore --storePassword=123456 --alias=SimpleGUI --password=123456
