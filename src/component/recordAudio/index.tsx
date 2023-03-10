// import {PropsWithChildren, useState} from 'react';
// import React from 'react';
// import {
//   Button,
//   Dimensions,
//   Image,
//   PermissionsAndroid,
//   Platform,
//   SafeAreaView,
//   Text,
//   TouchableOpacity,
//   View,
// } from 'react-native';
// import * as Progress from 'react-native-progress';
// import styles from './styles';
// import AudioRecorderPlayer from 'react-native-audio-recorder-player';
// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

// function RecordAudio(): JSX.Element {
//   const audioRecorderPlayer = new AudioRecorderPlayer();
//   const [recordSecs, setRecordSecs] = useState(0);
//   const [recordTime, setRecordTime] = useState('00:00:00');
//   const [currentPositionSec, setCurrentPositionSec] = useState(0);
//   const [currentDurationSec, setCurrentDurationSec] = useState(0);
//   const [playTime, setPlayTime] = useState('00:00:00');
//   const [duration, setDuration] = useState('00:00:00');
//   const screenWidth = Dimensions.get('screen').width;
//   const onStartRecord = async () => {
//     const result = await audioRecorderPlayer.startRecorder();
//     audioRecorderPlayer.addRecordBackListener(e => {
//       setRecordSecs(e.currentPosition);
//       setRecordTime(audioRecorderPlayer.mmssss(Math.floor(e.currentPosition)));
//       return;
//     });
//     console.log(result);
//   };
//    const path = Platform.select({
//     ios: undefined,
//     android: undefined,
//   });

//   const onStopRecord = async () => {
//     const result = await audioRecorderPlayer.stopRecorder();
//     audioRecorderPlayer.removeRecordBackListener();
//     setRecordSecs(0);

//     console.log(result);
//   };

//   const onStartPlay = async () => {
//     console.log('onStartPlay');
//     const msg = await audioRecorderPlayer.startPlayer();
//     console.log(msg);
//     audioRecorderPlayer.addPlayBackListener(e => {
//       setCurrentPositionSec(e.currentPosition);
//       setCurrentDurationSec(e.duration);
//       setPlayTime(audioRecorderPlayer.mmssss(Math.floor(e.currentPosition)));
//       setDuration(audioRecorderPlayer.mmssss(Math.floor(e.duration)));

//       return;
//     });
//   };

//   const onPausePlay = async () => {
//     await audioRecorderPlayer.pausePlayer();
//   };

//   const onStopPlay = async () => {
//     console.log('onStopPlay');
//     audioRecorderPlayer.stopPlayer();
//     audioRecorderPlayer.removePlayBackListener();
//   };

//   const onStatusPress = (e: any): void => {
//     const touchX = e.nativeEvent.locationX;
//     console.log(`touchX: ${touchX}`);

//     const playWidth =
//       (currentPositionSec / currentDurationSec) * (screenWidth - 56);
//     console.log(`currentPlayWidth: ${playWidth}`);

//     const currentPosition = Math.round(currentPositionSec);

//     if (playWidth && playWidth < touchX) {
//       const addSecs = Math.round(currentPosition + 1000);
//       audioRecorderPlayer.seekToPlayer(addSecs);
//       console.log(`addSecs: ${addSecs}`);
//     } else {
//       const subSecs = Math.round(currentPosition - 1000);
//       audioRecorderPlayer.seekToPlayer(subSecs);
//       console.log(`subSecs: ${subSecs}`);
//     }
//   };

//   const onStartRecord1 = async (): Promise<void> => {
//     if (Platform.OS === 'android') {
//       try {
//         const grants = await PermissionsAndroid.requestMultiple([
//           PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
//           PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
//           PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
//         ]);

//         console.log('write external stroage', grants);

//         if (
//           grants['android.permission.WRITE_EXTERNAL_STORAGE'] ===
//             PermissionsAndroid.RESULTS.GRANTED &&
//           grants['android.permission.READ_EXTERNAL_STORAGE'] ===
//             PermissionsAndroid.RESULTS.GRANTED &&
//           grants['android.permission.RECORD_AUDIO'] ===
//             PermissionsAndroid.RESULTS.GRANTED
//         ) {
//           console.log('permissions granted');
//         } else {
//           console.log('All required permissions not granted');

//           return;
//         }
//       } catch (err) {
//         console.warn(err);

//         return;
//       }
//     }
//   };

//   const onStatusPress1 = (e: any): void => {
//     const touchX = e.nativeEvent.locationX;
//     console.log(`touchX: ${touchX}`);

//     const playWidth =
//       (currentPositionSec / currentDurationSec) * (screenWidth - 56);
//     console.log(`currentPlayWidth: ${playWidth}`);

//     const currentPosition = Math.round(currentPositionSec);

//     if (playWidth && playWidth < touchX) {
//       const addSecs = Math.round(currentPosition + 1000);
//       audioRecorderPlayer.seekToPlayer(addSecs);
//       console.log(`addSecs: ${addSecs}`);
//     } else {
//       const subSecs = Math.round(currentPosition - 1000);
//       audioRecorderPlayer.seekToPlayer(subSecs);
//       console.log(`subSecs: ${subSecs}`);
//     }
//   };

//   const onPauseRecord = async (): Promise<void> => {
//     try {
//       const r = await audioRecorderPlayer.pauseRecorder();
//       console.log(r);
//     } catch (err) {
//       console.log('pauseRecord', err);
//     }
//   };

//   const onResumeRecord = async (): Promise<void> => {
//     await audioRecorderPlayer.resumeRecorder();
//   };

//   const onStopRecord1 = async (): Promise<void> => {
//     const result = await audioRecorderPlayer.stopRecorder();
//     audioRecorderPlayer.removeRecordBackListener();
//     setRecordSecs(0)

//     console.log(result);
//   };

//   const onStartPlay1 = async (): Promise<void> => {

//     try {
//       const msg = await audioRecorderPlayer.startPlayer(path);

//       //? Default path
//       // const msg = await this.audioRecorderPlayer.startPlayer();
//       const volume = await audioRecorderPlayer.setVolume(1.0);
//       console.log(`path: ${msg}`, `volume: ${volume}`);

//       audioRecorderPlayer.addPlayBackListener((e: PlayBackType) => {
//         console.log('playBackListener', e);
//         this.setState({
//           currentPositionSec: e.currentPosition,
//           currentDurationSec: e.duration,
//           playTime: this.audioRecorderPlayer.mmssss(
//             Math.floor(e.currentPosition),
//           ),
//           duration: this.audioRecorderPlayer.mmssss(Math.floor(e.duration)),
//         });
//       });
//     } catch (err) {
//       console.log('startPlayer error', err);
//     }
//   };

//   private onPausePlay = async (): Promise<void> => {
//     await this.audioRecorderPlayer.pausePlayer();
//   };

//   private onResumePlay = async (): Promise<void> => {
//     await this.audioRecorderPlayer.resumePlayer();
//   };

//   private onStopPlay = async (): Promise<void> => {
//     console.log('onStopPlay');
//     this.audioRecorderPlayer.stopPlayer();
//     this.audioRecorderPlayer.removePlayBackListener();
//   };
// }
//   return (
//     <SafeAreaView style={styles.container}>
//       <Text style={styles.titleTxt}>Audio test Player</Text>
//       <Text style={styles.txtRecordCounter}>{recordTime}</Text>
//       <View style={styles.viewRecorder}>
//         <View style={styles.recordBtnWrapper}>
//           <TouchableOpacity style={styles.btn} onPress={onStartRecord1}>
//             <Text style={styles.txt}>Record</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={[
//               styles.btn,
//               {
//                 marginLeft: 12,
//               },
//             ]}
//             onPress={() => {}}>
//             <Text style={styles.txt}>Pause</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={[
//               styles.btn,
//               {
//                 marginLeft: 12,
//               },
//             ]}
//             onPress={() => {}}>
//             <Text style={styles.txt}>Resume</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={[
//               styles.btn,
//               {
//                 marginLeft: 12,
//               },
//             ]}
//             onPress={() => onStopRecord()}>
//             <Text style={styles.txt}>Stop</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//       <View style={styles.viewPlayer}>
//         <TouchableOpacity style={styles.viewBarWrapper} onPress={onStatusPress}>
//           <View style={styles.viewBar}>
//             <View style={[styles.viewBarPlay, {width: '100%'}]} />
//           </View>
//         </TouchableOpacity>
//         <Text style={styles.txtCounter}>
//           {playTime} / {duration}
//         </Text>
//         <View style={styles.playBtnWrapper}>
//           <TouchableOpacity style={styles.btn} onPress={() => onStartPlay()}>
//             <Text style={styles.txt}>Play</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.btn} onPress={() => onPausePlay()}>
//             <Text style={styles.txt}>Pause</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.btn} onPress={() => onResumePlay()}>
//             <Text style={styles.txt}>Resume</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.btn} onPress={() => onStopPlay()}>
//             <Text style={styles.txt}>Stop</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// }

// export default RecordAudio;

import AudioRecorderPlayer, {
  AVEncoderAudioQualityIOSType,
  AVEncodingOption,
  AudioEncoderAndroidType,
  AudioSourceAndroidType,
  OutputFormatAndroidType,
} from 'react-native-audio-recorder-player';
import type {
  AudioSet,
  PlayBackType,
  RecordBackType,
} from 'react-native-audio-recorder-player';
import {
  Dimensions,
  PermissionsAndroid,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {Component} from 'react';

import RNFetchBlob from 'rn-fetch-blob';
import type {ReactElement} from 'react';

const styles: any = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#455A64',
    flexDirection: 'column',
    alignItems: 'center',
  },
  titleTxt: {
    marginTop: 100,
    color: 'white',
    fontSize: 28,
  },
  viewRecorder: {
    marginTop: 40,
    width: '100%',
    alignItems: 'center',
  },
  recordBtnWrapper: {
    flexDirection: 'row',
  },
  viewPlayer: {
    marginTop: 60,
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  viewBarWrapper: {
    marginTop: 28,
    marginHorizontal: 28,
    alignSelf: 'stretch',
  },
  viewBar: {
    backgroundColor: '#ccc',
    height: 4,
    alignSelf: 'stretch',
  },
  viewBarPlay: {
    backgroundColor: 'white',
    height: 4,
    width: 0,
  },
  playStatusTxt: {
    marginTop: 8,
    color: '#ccc',
  },
  playBtnWrapper: {
    flexDirection: 'row',
    marginTop: 40,
  },
  btn: {
    borderColor: 'white',
    borderWidth: 1,
  },
  txt: {
    color: 'white',
    fontSize: 14,
    marginHorizontal: 8,
    marginVertical: 4,
  },
  txtRecordCounter: {
    marginTop: 32,
    color: 'white',
    fontSize: 20,
    textAlignVertical: 'center',
    fontWeight: '200',
    fontFamily: 'Helvetica Neue',
    letterSpacing: 3,
  },
  txtCounter: {
    marginTop: 12,
    color: 'white',
    fontSize: 20,
    textAlignVertical: 'center',
    fontWeight: '200',
    fontFamily: 'Helvetica Neue',
    letterSpacing: 3,
  },
});

interface State {
  isLoggingIn: boolean;
  recordSecs: number;
  recordTime: string;
  currentPositionSec: number;
  currentDurationSec: number;
  playTime: string;
  duration: string;
}

const screenWidth = Dimensions.get('screen').width;

class Page extends Component<any, State> {
  private dirs = RNFetchBlob.fs.dirs;
  private path = Platform.select({
    ios: undefined,
    android: undefined,

    // Discussion: https://github.com/hyochan/react-native-audio-recorder-player/discussions/479
    // ios: 'https://firebasestorage.googleapis.com/v0/b/cooni-ebee8.appspot.com/o/test-audio.mp3?alt=media&token=d05a2150-2e52-4a2e-9c8c-d906450be20b',
    // ios: 'https://staging.media.ensembl.fr/original/uploads/26403543-c7d0-4d44-82c2-eb8364c614d0',
    // ios: 'hello.m4a',
    // android: `${this.dirs.CacheDir}/hello.mp3`,
  });

  private audioRecorderPlayer: AudioRecorderPlayer;

  constructor(props: any) {
    super(props);
    this.state = {
      isLoggingIn: false,
      recordSecs: 0,
      recordTime: '00:00:00',
      currentPositionSec: 0,
      currentDurationSec: 0,
      playTime: '00:00:00',
      duration: '00:00:00',
    };

    this.audioRecorderPlayer = new AudioRecorderPlayer();
    this.audioRecorderPlayer.setSubscriptionDuration(0.1); // optional. Default is 0.5
  }

  public render(): ReactElement {
    let playWidth =
      (this.state.currentPositionSec / this.state.currentDurationSec) *
      (screenWidth - 56);

    if (!playWidth) {
      playWidth = 0;
    }

    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.titleTxt}>Audio Recorder Player</Text>
        <Text style={styles.txtRecordCounter}>{this.state.recordTime}</Text>
        <View style={styles.viewRecorder}>
          <View style={styles.recordBtnWrapper}>
            <TouchableOpacity style={styles.btn} onPress={this.onStartRecord}>
              <Text style={styles.txt}>Record</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={this.onPauseRecord}>
              <Text style={styles.txt}>Pause</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={this.onResumeRecord}>
              <Text style={styles.txt}>Resume</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={this.onStopRecord}>
              <Text style={styles.txt}>Stop</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.viewPlayer}>
          <TouchableOpacity
            style={styles.viewBarWrapper}
            onPress={this.onStatusPress}>
            <View style={styles.viewBar}>
              <View style={[styles.viewBarPlay, {width: playWidth}]} />
            </View>
          </TouchableOpacity>
          <Text style={styles.txtCounter}>
            {this.state.playTime} / {this.state.duration}
          </Text>
          <View style={styles.playBtnWrapper}>
            <TouchableOpacity style={styles.btn} onPress={this.onStartPlay}>
              <Text style={styles.txt}>Play</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={this.onPausePlay}>
              <Text style={styles.txt}>Pause</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={this.onResumePlay}>
              <Text style={styles.txt}>Resume</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={this.onStopPlay}>
              <Text style={styles.txt}>Stop</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }

  private onStatusPress = (e: any): void => {
    const touchX = e.nativeEvent.locationX;
    console.log(`touchX: ${touchX}`);

    const playWidth =
      (this.state.currentPositionSec / this.state.currentDurationSec) *
      (screenWidth - 56);
    console.log(`currentPlayWidth: ${playWidth}`);

    const currentPosition = Math.round(this.state.currentPositionSec);

    if (playWidth && playWidth < touchX) {
      const addSecs = Math.round(currentPosition + 1000);
      this.audioRecorderPlayer.seekToPlayer(addSecs);
      console.log(`addSecs: ${addSecs}`);
    } else {
      const subSecs = Math.round(currentPosition - 1000);
      this.audioRecorderPlayer.seekToPlayer(subSecs);
      console.log(`subSecs: ${subSecs}`);
    }
  };

  private onStartRecord = async (): Promise<void> => {
    if (Platform.OS === 'android') {
      try {
        const grants = await PermissionsAndroid.requestMultiple([
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
          PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
        ]);

        console.log('write external stroage', grants);

        if (
          grants['android.permission.WRITE_EXTERNAL_STORAGE'] ===
            PermissionsAndroid.RESULTS.GRANTED &&
          grants['android.permission.READ_EXTERNAL_STORAGE'] ===
            PermissionsAndroid.RESULTS.GRANTED &&
          grants['android.permission.RECORD_AUDIO'] ===
            PermissionsAndroid.RESULTS.GRANTED
        ) {
          console.log('permissions granted');
        } else {
          console.log('All required permissions not granted');

          return;
        }
      } catch (err) {
        console.warn(err);

        return;
      }
    }

    const audioSet: AudioSet = {
      AudioEncoderAndroid: AudioEncoderAndroidType.AAC,
      AudioSourceAndroid: AudioSourceAndroidType.MIC,
      AVEncoderAudioQualityKeyIOS: AVEncoderAudioQualityIOSType.high,
      AVNumberOfChannelsKeyIOS: 2,
      AVFormatIDKeyIOS: AVEncodingOption.aac,
      OutputFormatAndroid: OutputFormatAndroidType.AAC_ADTS,
    };

    console.log('audioSet', audioSet);

    const uri = await this.audioRecorderPlayer.startRecorder(
      this.path,
      audioSet,
    );

    this.audioRecorderPlayer.addRecordBackListener((e: RecordBackType) => {
      // console.log('record-back', e);
      this.setState({
        recordSecs: e.currentPosition,
        recordTime: this.audioRecorderPlayer.mmssss(
          Math.floor(e.currentPosition),
        ),
      });
    });
    console.log(`uri: ${uri}`);
  };

  private onPauseRecord = async (): Promise<void> => {
    try {
      const r = await this.audioRecorderPlayer.pauseRecorder();
      console.log(r);
    } catch (err) {
      console.log('pauseRecord', err);
    }
  };

  private onResumeRecord = async (): Promise<void> => {
    await this.audioRecorderPlayer.resumeRecorder();
  };

  private onStopRecord = async (): Promise<void> => {
    const result = await this.audioRecorderPlayer.stopRecorder();
    this.audioRecorderPlayer.removeRecordBackListener();
    this.setState({
      recordSecs: 0,
    });
    console.log(result);
  };

  private onStartPlay = async (): Promise<void> => {
    console.log('onStartPlay', this.path);

    try {
      const msg = await this.audioRecorderPlayer.startPlayer(this.path);

      //? Default path
      // const msg = await this.audioRecorderPlayer.startPlayer();
      const volume = await this.audioRecorderPlayer.setVolume(1.0);
      console.log(`path: ${msg}`, `volume: ${volume}`);

      this.audioRecorderPlayer.addPlayBackListener((e: PlayBackType) => {
        console.log('playBackListener', e);
        this.setState({
          currentPositionSec: e.currentPosition,
          currentDurationSec: e.duration,
          playTime: this.audioRecorderPlayer.mmssss(
            Math.floor(e.currentPosition),
          ),
          duration: this.audioRecorderPlayer.mmssss(Math.floor(e.duration)),
        });
      });
    } catch (err) {
      console.log('startPlayer error', err);
    }
  };

  private onPausePlay = async (): Promise<void> => {
    await this.audioRecorderPlayer.pausePlayer();
  };

  private onResumePlay = async (): Promise<void> => {
    await this.audioRecorderPlayer.resumePlayer();
  };

  private onStopPlay = async (): Promise<void> => {
    console.log('onStopPlay');
    this.audioRecorderPlayer.stopPlayer();
    this.audioRecorderPlayer.removePlayBackListener();
  };
}

export default Page;
