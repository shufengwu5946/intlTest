/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  SectionList
} from "react-native";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
import { IntlProvider } from "react-intl";
import * as RNLocalize from "react-native-localize";
import moment from "moment";
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

    let nowDate = moment(new Date())
      .add("year", 0)
      .format("YYYY-MM-DD");
    return (
      <View style={styles.container}>
        {/* <IntlProvider
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
        </IntlProvider> */}
        <Calendar
          // Initially visible month. Default = Date()
          current={nowDate}
          // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
          //minDate={"2012-05-10"}
          // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
          //maxDate={"2012-05-30"}
          // Handler which gets executed on day press. Default = undefined
          onDayPress={day => {
            console.log("selected day", day);
          }}
          // Handler which gets executed on day long press. Default = undefined
          onDayLongPress={day => {
            console.log("selected day", day);
          }}
          // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
          monthFormat={"yyyy MM"}
          // Handler which gets executed when visible month changes in calendar. Default = undefined
          onMonthChange={month => {
            console.log("month changed", month);
          }}
          // Hide month navigation arrows. Default = false
          hideArrows={false}
          // Replace default arrows with custom ones (direction can be 'left' or 'right')
          // renderArrow={direction => <Arrow />}
          // Do not show days of other months in month page. Default = false
          hideExtraDays={true}
          // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
          // day from another month that is visible in calendar page. Default = false
          disableMonthChange={true}
          // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
          firstDay={1}
          // Hide day names. Default = false
          hideDayNames={true}
          // Show week numbers to the left. Default = false
          showWeekNumbers={true}
          // Handler which gets executed when press arrow icon left. It receive a callback can go back month
          onPressArrowLeft={substractMonth => substractMonth()}
          // Handler which gets executed when press arrow icon left. It receive a callback can go next month
          onPressArrowRight={addMonth => addMonth()}
        />
        <Button
          title="滚动"
          onPress={() => {
            this.sectionList.scrollToLocation({
              sectionIndex: 5,
              itemIndex: -1,
              animated: false
            });
          }}
        />
        <SectionList
          ref={sectionList => (this.sectionList = sectionList)}
          renderItem={({ item, index, section }) => (
            <View style={{ backgroundColor: "grey" }}>
              <Text key={index}>{item}</Text>
            </View>
          )}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={{ fontWeight: "bold" }}>{title}</Text>
          )}
          sections={[
            {
              title: "2019-10-01",
              data: [
                "item1",
                "item2",
                "item1",
                "item2",
                "item1",
                "item2",
                "item1",
                "item2",
                "item1",
                "item2"
              ]
            },
            {
              title: "2019-10-05",
              data: [
                "item3",
                "item4",
                "item3",
                "item4",
                "item3",
                "item4",
                "item3",
                "item4"
              ]
            },
            {
              title: "2019-10-08",
              data: ["item5", "item6", "item5", "item6", "item5", "item6"]
            },
            { title: "2019-10-13", data: ["item3", "item4"] },
            {
              title: "2019-10-16",
              data: [
                "item3",
                "item4",
                "item3",
                "item4",
                "item3",
                "item4",
                "item3",
                "item4"
              ]
            },
            { title: "2019-10-18", data: ["item3", "item4"] },
            { title: "2019-10-19", data: ["item3", "item4"] },
            {
              title: "2019-10-21",
              data: [
                "item3",
                "item4",
                "item3",
                "item4",
                "item3",
                "item4",
                "item3",
                "item4"
              ]
            },
            { title: "2019-10-27", data: ["item3", "item4"] }
          ]}
          keyExtractor={(item, index) => item + index}
          stickySectionHeadersEnabled
          //refreshing={true}
          //onRefresh={() => {}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
    // justifyContent: "center",
    // alignItems: "center",
    // backgroundColor: "#F5FCFF"
  }
  // welcome: {
  //   fontSize: 20,
  //   textAlign: "center",
  //   margin: 10
  // },
  // instructions: {
  //   textAlign: "center",
  //   color: "#333333",
  //   marginBottom: 5
  // }
});
