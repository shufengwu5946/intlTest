/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Text, View } from "react-native";
import { FormattedMessage  } from "react-intl";

export default class Comp extends Component {
  render() {
    return (
      <View >
        <FormattedMessage id="main"/>
      </View>
    );
  }
}

