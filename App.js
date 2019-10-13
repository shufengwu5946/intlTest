/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button } from "react-native";
import { IntlProvider } from "react-intl";
import * as RNLocalize from "react-native-localize";
import zh_CN from "./locales/zh_CN";
import zh_TW from "./locales/zh_TW";
import Comp from "./Comp";

console.log(
  RNLocalize.findBestAvailableLanguage([
    "en",
    "zh-CN",
    "zh-TW",
    "zh-Hans-CN",
    "zh-Hant-CN"
  ])
);
console.log(RNLocalize.getLocales());

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { lan: "zh-CN" };
  }
  render() {
    let messages = {};
    messages["zh-CN"] = zh_CN;
    messages["zh-TW"] = zh_TW;
    return (
      <View style={styles.container}>
        <IntlProvider
          locale={this.state.lan}
          messages={messages[this.state.lan]}
          textComponent={Text}
        >
          <Text style={styles.welcome}>Welcome to React Native!</Text>
          <Text style={styles.instructions}>To get started, edit App.js</Text>
          <Text style={styles.instructions}>{instructions}</Text>
          <Comp />
          <Button
            onPress={() => {
              if (this.state.lan === "zh-CN") {
                this.setState({ lan: "zh-TW" });
              } else {
                this.setState({ lan: "zh-CN" });
              }
            }}
            title="zhuanhuan"
          ></Button>
        </IntlProvider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
