import {StyleSheet, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import Preference from 'react-native-preference';
const lang = Preference.get('language');
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  backgroundImg: {
    width: windowWidth,
    height: windowHeight - 20,
  },
  header: {
    flexDirection: 'row',
    margin: 20,
  },
  headerText: {
    fontSize: 18,
    marginLeft: 10,
    marginRight: 10,
    writingDirection: lang == 'en' ? 'ltr' : 'rtl',
  },
  headerImg: {width: 20, height: 20, resizeMode: 'contain'},
  linearGradient: {
    width: '95%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 30,
    marginHorizontal: 10,
  },
  progressBarView: {
    width: '90%',
    height: 200,
    alignSelf: 'center',
    backgroundColor: '#FFFFFF',
    marginTop: -30,
    borderRadius: 10,
    borderBottomColor: '#EE963D',
    borderBottomWidth: 0.7,
    alignItems: 'center',
  },
  tab: {
    flexDirection: 'row',
  },
  tabButton: {
    backgroundColor: 'red',
    width: '50%',
    height: 50,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabText: {
    fontSize: 16,
    fontWeight: '500',
  },
  progressBarTitlesView: {
    width: '100%',
    paddingTop: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  progressBarTextTitle: {
    fontSize: 12,
    color: '#999999',
    writingDirection: lang == 'en' ? 'ltr' : 'rtl',
  },
  progressBarTextTitle2: {
    fontSize: 14,
    writingDirection: lang == 'en' ? 'ltr' : 'rtl',
  },
  progressOuterView: {width: '100%', paddingHorizontal: 20},
  progressInnerView: {
    width: '100%',
    height: 5,
    borderRadius: 5,
    backgroundColor: '#EFEFEF',
    // alignItems: 'flex-end',
  },
  progressLinearGradient: {
    height: 5,
    borderRadius: 5,
  },
  bottomMainView: {
    backgroundColor: '#FFFFFF70',
    marginTop: 20,
    paddingHorizontal: 40,
    paddingVertical: 20,
    borderRadius: 20,
  },
  innerImgText: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
    writingDirection: lang == 'en' ? 'ltr' : 'rtl',
  },
  flatListView: {
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  linearGradientButton: {
    height: 50,
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    borderRadius: 20,
  },
  modalMainView: {
    width: '80%',
    height: 300,
    // backgroundColor: '#FFFFFF',
    // position: 'absolute',
    marginBottom: 100,
    alignSelf: 'center',
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: '#FFFFFF',
    overflow: 'hidden',
  },
  madal2: {
    width: windowWidth,
    height: windowHeight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBar: {
    backgroundColor: '#FFFFFF',
    width: '90%',
    height: 60,
    marginTop: 10,
    alignSelf: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#EE963D',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalButtonsView: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  modalButtons: {
    width: '40%',
    height: 40,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#EE963D',
    padding: 5,
  },
});
