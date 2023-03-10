import type {PropsWithChildren} from 'react';
import React from 'react';
import {Image, SafeAreaView, TouchableOpacity} from 'react-native';
import * as Progress from 'react-native-progress';
import styles from './styles';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function SilderBar(): JSX.Element {
  return (
    <SafeAreaView style={styles.silderMain}>
      <Image
        style={styles.crossImg}
        source={require('../../asset/crossIcon.png')}
      />
      <Progress.Bar
        style={styles.progressbar}
        progress={0.5}
        borderRadius={5}
        width={300}
      />
      <TouchableOpacity>
        <Image source={require('../../asset/morehHorizontal.png')} />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default SilderBar;
