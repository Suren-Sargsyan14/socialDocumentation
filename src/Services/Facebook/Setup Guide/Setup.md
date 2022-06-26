# Package Selection

I choose a package named `React Native FBSDK Next`.

### Package Installation
***

To install this package you need to run these commands in you terminal. 

If you are using yarn

`yarn add react-native-fbsdk-next`

and if you are using npm

`npm install --save react-native-fbsdk-next`

## iOS Installation Guide
***

After installation for iOS you need to install pods.
Go to `ios` folder in your root directory and then run
`pod install` command. 

### Facebook SDK installation
***

After pod installation you need to include facebook sdk 
in your project package dependencies. 
For that you need to open Xcode, go to `File` in top menu
and choose `Add Packages...`.

![Add Packages](./Add%20Packages.png)

In opened window's top right corner you will see search input. 
Put https://github.com/facebook/facebook-ios-sdk
url in input and press `Enter/Return`.

![window](./Add%20Package%20Window.png)

When the package will be found press `Add Package` button.

The alternate way to open package dependency window is
to open your project target's general pain and choose 
`Package Dependencies` from the top menu and press
`+` sign.

![target dependencies](./Project%20target%20packages.png)

### iOS code setup
***

After the package dependency is installed open the `AppDelegate.h`
file from your project root and add the following code under file's imports.

```
#import <FBSDKCoreKit/FBSDKCoreKit.h>
#import <FBSDKLoginKit/FBSDKLoginKit.h>
```

And then open `AppDelegate.m` file, add in the end of existing imports
the following line.

`#import <FBSDKCoreKit/FBSDKCoreKit.h>`

and right after that add the next code snippet inside
`didFinishLaunchingWithOptions`.

```
[[FBSDKApplicationDelegate sharedInstance] application:application
                         didFinishLaunchingWithOptions:launchOptions];
```

### Setting App ID
***

If you want to use Facebook SDK in your project you need to add your facebook app id `FacebookAppID`
and your app's client token `FacebookClientToken` into `Info.plist` file of your project
and add a `URL Scheme` for that you need to add the following code into you `Info.plist` file

```
    <key>CFBundleURLTypes</key>
    <array>
        <dict>
            <key>CFBundleTypeRole</key>
            <string>Editor</string>
            <key>CFBundleURLName</key>
            <string>Facebook</string>
            <key>CFBundleURLSchemes</key>
            <array>
                <string>fb[YOUR_APP_ID]</string>
            </array>
        </dict>
    </array>
    <key>FacebookAppID</key>
    <string>[YOUR_APP_ID]</string>
    <key>FacebookClientToken</key>
    <string>[YOUR_CLIENT_TOKEN]</string>
```


## Android Installation Guide
***

### Android code setup
***

Open `build.gradle` file placed in android folder and add the following line in 
buildscript repositories 

`mavenCentral()`

Right after that open `build.gradle` file from `android/app` and add the following line 
in it's dependencies.

`implementation 'com.facebook.android:facebook-android-sdk:latest.release'`


### Setting App ID
***

Then you need to put Facebook app id and client token in your manifest file. For that open
`strings.xml` file by `android/app/src/main/res/values/strings.xml` path and put the following
code inside `resources` tag.

```
    <string name="facebook_app_id">[YOUR_APP_ID]</string>
    <string name="facebook_client_token">[YOUR_CLIENT_TOKEN]</string>
```

And then update your manifest file placed in `android/app/src/main/AndroidManifest.xml` path.

```
<application android:label="@string/app_name" ...>
    ...
    <meta-data android:name="com.facebook.sdk.ApplicationId" android:value="@string/facebook_app_id"/>
    <meta-data android:name="com.facebook.sdk.ClientToken" android:value="@string/facebook_client_token"/>
    ...
</application>
```

***
### For more information you can visit [NPM Web Page](https://www.npmjs.com/package/react-native-fbsdk-next) or [GitHub Repository](https://github.com/thebergamo/react-native-fbsdk-next)
