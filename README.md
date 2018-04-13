## How to Create a Tab Bar with React-Navigation?

#### Intro
Hello everyone and welcome to The Frontier! My name is Israel Machovec, and I’m a Product Manager at Big Nerd Ranch. In this screencast, I will show you how to use React-Navigation to Create a Tab Bar in a React Native App.

In the example, I created three views, each representing an artist from the popular hip-hop group Migos. Yes, the same guys who brought you "Bad and Bougie" are now represented here in a React Native tutorial.

#### Background

To get started, we assume that you are already familiar with the basics of React Native. I created a new React Native app using the [ create-react-native-app ](#) CLI and [ Expo ](#) and will be showing a preview of the app using the Xcode Simulator.

*__Screen:__* _An open React Native Project in Atom, App preview using Xcode Simulator_

#### Install React-Navigation

First, we'll need to import React Navigation into our project. Open up your terminal, head to your project folder, and type in the following command.

*__Screen:__* _Opens terminal and types in the following command. Does not press enter._

```
npm install --save react-navigation
```
I've already imported React Navigation into my project, so I'm not going to run the installation again. If you are having trouble with the installation you can check out - [ React Navigation on GitHub ](#).

#### Create Folders

Now that we have installed React-Navigation, we're going to create a few folders where we'll be doing a majority of our work. We'll start by creating a folder called  **App**. Inside of the App folder we'll create a **Views** and **Config** folder. We'll also create an **index.js** file inside the App folder.

*__Screen:__* _Creates App, View, and Config folders and the index.js file._

#### Create Views

Next, let's create some views so we have something to navigate through. When creating our views, we'll need to make sure we import the following items from React-Native to support out theme:

* ScrollView
* Text
* Image
* StyleSheet

*__Screen:__* _Types in the following into an empty file._

```JavaScript
import React, { Component} from 'react';
import { ScrollView, Text, StyleSheet, Image } from 'react-native';
```  

Since we're here to learn about creating a tab bar, I've created a theme we can copy and paste into our view files. After we paste the theme, we'll still have to edit a few items. Since I'm from Atlanta and big fan of hip-hop music, I decided to make three screens of my favorite Atlanta artists the Migos - Quavo, Offset, Takeoff. Inside of our **Views** folder we'll create 3 files.

* Quavo.js <br>
* Offset.js<br>
* Takeoff.js<br>

*__Screen:__* _Creates 3 files, Copy and paste the theme into the files_

```JavaScript
import React, {Component} from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

var backgroundImage = require('./Assets/Quavo.png')

class Quavo extends Component {
  render() {
    return (

      <View style={styles.imageView}>
        <View style={{position: 'absolute', left:0, top:0, height: '100%', width: '100%'}}>
          <Image source={backgroundImage} style={{flex:1, height: null, width: null}}/>
          </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  textFirst: {
  flex: 1,
  fontSize: 50,
  fontWeight: 'bold',
  textAlign: 'center',
  marginTop: 150,
  },
  imageView: {
    flex: 1,
    justifyContent: 'flex-end'
  }
});

export default Quavo;
```
Now that we've copy and pasted the theme into the files, we'll need to go back and edit a few items.

*__Screen:__* _Makes edits to class, export, and image source on files_

#### Creating the Navigation

Now that we have everything set up, we can start building our navigation. We'll head over to our **Config** folder and create a **Navigation.js** file. In this file, we are going to be importing TabNavigator provided by react-navigation and we'll also be importing our view files.

*__Screen:__* _Adds the following to the navigation file._

```JavaScript
import React from "react";
import { TabNavigator } from "react-navigation";

import Quavo from '../Views/Quavo';
import Offset from '../Views/Offset';
import Takeoff from '../Views/Takeoff';
```

Next, we'll set up our navigation using TabNavigator. The first item in our TabNavigator will define what is displayed on the screen.

*__Screen:__* _Adds screens to the navigation file. Shows the display name example._

```JavaScript
import React from "react";
import { TabNavigator } from "react-navigation";

import Quavo from '../Views/Quavo';
import Offset from '../Views/Offset';
import Takeoff from '../Views/Takeoff';

export const Tab = TabNavigator({

  Quavo: {
    screen: Quavo,
  },
  Offset: {
    screen: Offset,
  },
  Takeoff: {
    screen: Takeoff,
  },
}

})
```

We'll finish up with the navigation file by adding some custom styling to the tab bar.

*__Screen:__* _Adds styling to the navigation file._

```JavaScript
import React from "react";
import { TabNavigator } from "react-navigation";

import Quavo from '../Views/Quavo';
import Offset from '../Views/Offset';
import Takeoff from '../Views/Takeoff';

export const Tab = TabNavigator({
  Quavo: {
    screen: Quavo,
  },
  Offset: {
    screen: Offset,
  },
  Takeoff: {
    screen: Takeoff,
  },

}, {
  tabBarPosition: 'bottom',
  swipeEnabled: true,
  tabBarOptions: {
    activeTintColor: '#f2f2f2',
    activeBackgroundColor: "blue",
    inactiveTintColor: '#666',
    labelStyle: {
      fontSize: 22,
      padding: 12
    }
  }
});

```
For more information on styling you can visit the React Navigation documentation at https://reactnavigation.org

#### Import the Navigator

Next we are going to import our Tab Navigator into our **./App/index.js** file. We named our exported class **'Tab'** and will use that name to render the file.

```JavaScript
import React, { Component } from 'react';
import { Tab } from "./Config/Navigation";

export default class App extends Component {
  render() {
      return( <Tab /> );
  }
}

```

#### Importing the index.js File

Finally, well need to import our **'./App/index.js'** file into our root level **App.js**

```JavaScript
import App from './App/index';
export default App;

```
#### Wrapping it Up

Now you can restart your app and view our Tab Bar.

*__Screen:__* _Show tab bar functionality_

### End

Congrats! You've now completed a working tab bar using react-navigation. Now I may not be the most qualified person to give this tutorial, however, you can find some amazing instructional videos created by our expert engineers at Big Nerd Ranch to help take your skills to the next level. If you haven't signed up yet, you can start a free trial by visiting https://thefrontier.bignerdranch.com.

Once again, my name is Israel Machovec, thank you for watching and we hope to see you again soon.
