import {
  Text,
  View,
  Image,
  StyleSheet,
  Platform,
  StatusBar,
  Dimensions,
  TextInput,
} from "react-native";
import React from "react";
import ViewMoreText from "react-native-view-more-text";

const WelcomeScreen = () => {
  function renderViewLess(onPress){
    return(
      <Text onPress={onPress}>View Less</Text>
    )
  }
  function renderViewMore(onPress){
    return(
      <Text onPress={onPress}>View more</Text>
    )
  }
  return (
    <View style={styles.homepage}>
      {/* header */}
      <View style={styles.header}>
        <Image
          style={{ marginLeft: 20 }}
          contentFit="cover"
          source={require("../main_assets/profile-image.png")}
        />
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            contentFit="cover"
            source={require("../main_assets/search.png")}
          />
          <TextInput
            style={{ width: "55%" }}
            numberOfLines={1}
            placeholder="Type to search"
          />
        </View>
        <Image
          style={{ marginRight: 20 }}
          contentFit="cover"
          source={require("../main_assets/iconmore.png")}
        />
      </View>
      {/* main controller */}
      <View style={styles.maincontroller}>
        <View style={styles.card}>
          <View style={styles.cardheader}>
            <Image source={require("../main_assets/profile-image.png")}></Image>
            <Text style={{ fontSize: 18 }}>Mohan</Text>
          </View>
          <View style={styles.cardcontent}>
            <ViewMoreText
            numberOfLines={2}
            renderViewMore={renderViewMore}
            renderViewLess={renderViewLess}>
              <Text numberOfLines={2}>
                We're hiring for the position of [Job Title] at [Your Company
                Name] in [City, State/Country]. This role requires [Main
                Responsibilities]. Ideal candidates have [Required Qualification
                1], [Required Qualification 2], and [Required Qualification 3].
                Preferred qualifications include [Preferred Qualification 1] and
                [Preferred Qualification 2].
              </Text>
            </ViewMoreText>
          </View>
          <View style={styles.innnercard}>
            <Text>This is the inner card</Text>
          </View>
          <View style={styles.cardfooter}>
            <Text>Application Applied : 28</Text>
            <Text>Vacancies : 20</Text>
          </View>
        </View>
      </View>
      {/* Footer */}
      <View style={styles.footer}>
        <View style={styles.footeritem}>
          <Image
            contentFit="cover"
            source={require("../main_assets/iconhome.png")}
          />
          <Text>Home</Text>
        </View>
        <View style={styles.footeritem}>
          <Image
            contentFit="cover"
            source={require("../main_assets/iconsearch.png")}
          />
          <Text>Browse</Text>
        </View>
        <View style={styles.footeritem}>
          <Image
            contentFit="cover"
            source={require("../main_assets/iconradio.png")}
          />
          <Text>Connect</Text>
        </View>
      </View>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  homepage: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    height: Dimensions.get("window").height,
    position: "relative",
  },
  header: {
    width: Dimensions.get("window").width,
    paddingTop: 5,
    paddingBottom: 5,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
  },
  maincontroller: {
    top: 40,
    bottom: 40,
    height: Dimensions.get("window").height - 95,
    width: Dimensions.get("window").width,
    position: "absolute",
  },
  card: {
    padding: 10,
    marginTop: 20,
    borderStyle: "solid",
    borderWidth: 1,
    width: Dimensions.get("window").width,
  },
  cardheader: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
  },
  cardcontent: {},
  innnercard: {
    borderStyle: "solid",
    borderWidth: 1,
    height: 50,
    marginBottom: 10,
  },
  cardfooter: {
    borderStyle: "solid",
    borderWidth: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  footer: {
    width: Dimensions.get("window").width,
    position: "absolute",
    bottom: 0,
    marginBottom: 10,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  footeritem: {
    display: "flex",
    alignItems: "center",
  },
});
