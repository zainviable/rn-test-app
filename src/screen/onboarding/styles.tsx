import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  mainView: {
    width: 335,
    height: 126,
    backgroundColor: 'white',
    marginBottom: 100,
    borderRadius: 20,
    alignSelf: 'center',
  },
  bookMarkIcon: {alignSelf: 'flex-end', margin: 10},
  bookMarkIconVoice: {alignSelf: 'flex-end', margin: 10},
  viewTextSpeaker: {
    marginHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  txtSpeak: {fontSize: 18, marginHorizontal: 10},
  txtSpeakEng: {
    fontSize: 14,
    marginHorizontal: 10,
    alignSelf: 'center',
    marginTop: 5,
    color: '#707070',
  },
  viewMic: {
    backgroundColor: 'blue',
    width: 60,
    height: 60,
    borderRadius: 20,
    position: 'absolute',
    alignSelf: 'center',
    bottom: -30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  video: {width: '100%', height: '100%'},
  innerViewAudio: {
    flex: 1,
    // alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  linearGradient: {
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    width: '100%',
    height: 130,
    alignSelf: 'center',
  },
  wellDonemainView: {
    width: 335,
    height: 144,
    backgroundColor: 'white',
    marginBottom: 20,
    borderRadius: 20,
    zIndex: 11,
  },
  welldonebookMarkIcon: {
    alignSelf: 'flex-end',
    margin: 10,
  },
});