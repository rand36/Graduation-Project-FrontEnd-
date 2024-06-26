import { Dimensions, StyleSheet } from "react-native";
import { COLORS } from "../assets/colors/colors";
const windowWidth = Dimensions.get("window").width * 0.91;
const windowHeight = Dimensions.get("window").height * 0.5;
export const styles = StyleSheet.create({
  container: {
    // backgroundColor: "#f1f1d6",
    flex: 1,
    position: "relative",
  },
  containerWithPadding: {
    paddingHorizontal: 30,
  },
  containerWithPadding20: {
    paddingHorizontal: 20,
  },
  textInput: {
    // borderColor: COLORS.main,
    marginVertical: 10,
    padding: 10,
    borderRadius: 10,
    borderColor: COLORS.main,
    borderWidth: 1.2,
    fontSize: 16,
  },
  onBoardHeader: {
    // padding: 20,
    paddingHorizontal: 20,
    position: "relative",
    flex: 4,
    alignItems: "center",
  },
  authHeader: {
    position: "relative",
    width: "100%",
    alignItems: "center",
  },
  authLogo: {
    position: "relative",
    width: 200,
    height: 140,
    objectFit: "contain",
    marginTop: 40,
  },
  authBody: {
    flex: 1,
    paddingTop: 40,
  },
  headerLogo: {
    height: "70%",
    width: "70%",
    objectFit: "contain",
    marginTop: -20,
  },
  onBoardBottom: {
    flex: 6,
    position: "relative",
    justifyContent: "flex-end",
  },
  bottonBlock: {
    backgroundColor: COLORS.main,
    alignSelf: "center",
    borderRadius: 20,
    marginBottom: 20,
    width: "70%",
    height: 45,
    justifyContent: "center",
  },
  bottonText: {
    textAlign: "center",
    color: COLORS.white,
    fontWeight: "700",
    fontSize: 19,
  },
  linkTextWhite: {
    color: COLORS.white,
    alignSelf: "center",
    marginBottom: 20,
    fontWeight: "600",
    fontSize: 15,
  },
  landingImage: {
    width: "100%",
    height: "100%",
    objectFit: "fill",
    position: "absolute",
  },
  splashScreen: {
    flex: 1,
    backgroundColor: COLORS.main,
    paddingLeft: 20,
    paddingRight: 20,
    position: "relative",
    justifyContent: "center",
  },
  logoContainer: {
    position: "relative",
    width: "100%",
    height: 150,
    justifyContent: "center",
    alignItems: "center",
    marginTop: -60,
  },
  splashLogo: {
    position: "absolute",
    objectFit: "contain",
    height: "80%",
    width: "80%",
  },
  formOptions: {
    flexDirection: "row",
    justifyContent: "flex-end",
    padding: 5,
    marginBottom: 20,
  },
  linkView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
    flexDirection: "row",
    marginBottom: 40,
  },
  linkColor: {
    color: "blue",
  },
  errorBox: {
    marginTop: 10,
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginLeft: "auto",
    marginRight: "auto",
    height: 40,
  },
  errorText: {
    borderWidth: 1,
    borderColor: "red",
    textAlign: "center",
    padding: 10,
    color: "red",
    borderRadius: 10,
    textTransform: "capitalize",
  },
  spinnerContainer: {
    position: "relative",
    zIndex: 2,
    backgroundColor: "#fff",
    height: "100%",
    justifyContent: "center",
  },
  otpBox: {
    width: 65,
    height: 60,
    textAlign: "center",
    borderWidth: 1,
    borderRadius: 10,
    marginLeft: 10,
    borderColor: COLORS.main,
    borderWidth: 1.2,
    fontSize: 10,
  },
  sliderContainer: {
    backgroundColor: "#F7E7D8",
    marginBottom: 20,
  },
  sliderHeaderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: 30,
  },
  sliderHeaderTitle: {
    fontSize: 30,
    fontWeight: "600",
    color: COLORS.navy,
  },
  sliderHeaderButton: {
    paddingRight: 20,
    color: COLORS.main,
    fontWeight: "500",
  },
  addEventBox: {
    marginVertical: 10,
    padding: 10,
    borderRadius: 10,
    borderColor: COLORS.main,
    borderWidth: 1.2,
    fontSize: 16,
    width: windowWidth,
  },
  HomeSliderCardBody: {
    position: "relative",
    backgroundColor: COLORS.white,
    width: 230,
    height: 180,
    marginRight: -10,
    borderRadius: 10,
    alignItems: "center",
    paddingBottom: 5,
    marginLeft: 30,
    marginBottom: 5,
    shadowColor: "black",
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 4,
  },
  HomeSliderCardCoverImage: {
    height: "75%",
    width: "100%",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    objectFit: "fill",
    zIndex: 1,
  },
  HomeSliderCardTextContainer: {
    justifyContent: "center",
    flex: 1,
  },
  HomeSliderCardTitle: {
    color: COLORS.main,
    fontWeight: "600",
    fontSize: 18,
    textTransform: "capitalize",
    textAlign: "center",
  },
  HomeSliderCardDescription: {
    paddingHorizontal: 5,
    textAlign: "center",
    fontSize: 14,
    color: COLORS.navy,
    fontWeight: "500",
  },
  UserSmallImageContainer: {
    position: "absolute",
    width: 55,
    height: 55,
    backgroundColor: "red",
    zIndex: 2,
    borderRadius: 30,
    left: 10,
    top: 10,
    borderColor: COLORS.main,
    borderWidth: 2,
  },
  UserSmallImage: {
    backgroundColor: "grey",
    width: "100%",
    height: "100%",
    borderRadius: 50,
  },
});

export const fonts = StyleSheet.create({
  mainHeader: {
    fontSize: 20,
    fontWeight: "700",
    paddingHorizontal: 50,
    textAlign: "center",
    color: COLORS.navy,
    marginTop: -30,
    marginBottom: 20,
  },
  secondHeader: {
    fontSize: 15,
    fontWeight: "500",
    paddingHorizontal: 20,
    textAlign: "center",
    color: COLORS.navy,
  },
  h1: {
    fontSize: 36,
    fontWeight: "500",
    color: COLORS.navy,
    marginBottom: 10,
    letterSpacing: 1.2,
  },
  h2: {
    fontSize: 18,
    fontWeight: "500",
    color: COLORS.navy,
    letterSpacing: 1.2,
  },
  sectionHeader: {
    color: COLORS.main,
    fontSize: 20,
    fontWeight: "600",
  },
});
