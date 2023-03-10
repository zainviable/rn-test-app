import {PropsWithChildren, useEffect, useMemo, useState} from 'react';
import React from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Video from 'react-native-fast-video';
// import WaveForm from 'react-native-audiowaveform';
import SilderBar from '../../component/silderBar';
import styles from './styles';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Screen1(): JSX.Element {
  const [openMic, setOpenMic] = useState(false);
  const [isWellDone, setIsWellDone] = useState(false);
  const [isPuase, setIsPuase] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setOpenMic(false);
      setIsWellDone(true);
    }, 1000);
  }, [openMic]);

  const renderAudio = () => {
    return (
      <View style={styles.mainView}>
        <Image
          style={styles.bookMarkIcon}
          source={require('../../asset/icon_bookmark.png')}
        />
        <View style={styles.viewTextSpeaker}>
          <Image source={require('../../asset/speaker.png')} />
          <Text style={styles.txtSpeak}>La estamos haciendo muy bien.</Text>
        </View>
        <Text style={styles.txtSpeakEng}>We are doing very well</Text>
        {!openMic && (
          <TouchableOpacity
            onPress={() => {
              setIsPuase(true);
              setOpenMic(true);
            }}
            style={styles.viewMic}>
            <Image source={require('../../asset/mic.png')} />
          </TouchableOpacity>
        )}
      </View>
    );
  };

  const renderVoice = () => {
    return (
      <ImageBackground
        source={require('../../asset/voiceBgImg.png')}
        style={{width: '100%', height: 230}}>
        <View style={[styles.mainView, {position: 'absolute'}]}>
          <Image
            style={styles.bookMarkIconVoice}
            source={require('../../asset/icon_bookmark.png')}
          />
          <Text style={[styles.txtSpeakEng, {top: -35}]}>Speak now...</Text>

          <Text
            style={[
              styles.txtSpeak,
              {alignSelf: 'center', top: -10, color: 'rgba(128, 128, 128, 1)'},
            ]}>
            La estamos haciendo muy bien.
          </Text>
        </View>

        <View style={{marginBottom: 20}}>
          <Image
            style={{
              height: 350,
              width: '80%',
              alignSelf: 'center',
            }}
            source={require('../../asset/audioAminated.gif')}
          />
        </View>
      </ImageBackground>
    );
  };

  const renderWellDone = () => {
    return (
      <ImageBackground
        source={require('../../asset/wellDonebg.png')}
        style={{alignItems: 'center', height: 250}}>
        <View style={styles.wellDonemainView}>
          <ImageBackground
            source={require('../../asset/wellDoneTickPath.png')}
            style={{
              width: 100,
              height: 73,
              top: -45,
              alignSelf: 'center',
              position: 'absolute',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                width: 50,
                height: 50,
                borderRadius: 25,
                backgroundColor: '#4AD118',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image source={require('../../asset/correntTick.png')} />
            </View>
          </ImageBackground>
          <Image
            style={styles.welldonebookMarkIcon}
            source={require('../../asset/icon_bookmark.png')}
          />
          <Text
            style={{
              color: '#05AA1F',
              alignSelf: 'center',
              fontSize: 18,
              fontWeight: 'bold',
            }}>
            WELL DONE!
          </Text>
          <View
            style={{
              width: '80%',
              height: 36,
              backgroundColor: 'rgba(5, 170, 31, 0.14)',
              alignSelf: 'center',
              marginTop: 10,
              borderRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 16, color: 'rgba(5, 170, 31, 1)'}}>
              La estamos haciendo muy bien.
            </Text>
          </View>
        </View>

        <TouchableOpacity
          onPress={() => {
            setIsPuase(false);
            setIsWellDone(false);
          }}
          style={{
            width: '80%',
            height: 50,
            alignItems: 'center',
            backgroundColor: 'rgba(74, 209, 24, 1)',
            marginBottom: 30,
            justifyContent: 'center',
            borderRadius: 16,
          }}>
          <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>
            CONTINUE
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    );
  };

  return (
    <View style={{flex: 1}}>
      <Video
        source={require('../../asset/Feedback_Drills_Correct.mov')}
        playInBackground={false}
        paused={isPuase}
        posterResizeMode="cover"
        resizeMode="cover"
        repeat={true}
        disableFocus={true}
        controls={false}
        fullscreen={false}
        maxBitRate={2000}
        bufferConfig={{
          minBufferMs: 20000,
          maxBufferMs: 50000,
          bufferForPlaybackMs: 2500,
          bufferForPlaybackAfterRebufferMs: 5000,
        }}
        maxBitRate={50000}
        style={styles.video}
      />

      <View style={styles.innerViewAudio}>
        <SilderBar />

        <View style={{justifyContent: 'flex-end', flex: 1}}>
          {!isWellDone && !openMic && renderAudio()}
          {!isWellDone && openMic && renderVoice()}
          {isWellDone && renderWellDone()}
        </View>
      </View>
    </View>
  );
}

export default Screen1;
