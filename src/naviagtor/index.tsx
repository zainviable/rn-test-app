import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import RecordAudio from '../component/recordAudio';
import screen1 from '../screen/onboarding/screen1';

export const Navigation: React.FC<Props> = props => {
  const Stack = createStackNavigator<RootStackParamList>();

  return (
    <Stack.Navigator initialRouteName="screen1">
      <Stack.Screen
        name="screen1"
        component={screen1}
        options={{headerShown: false, width: '100%'}}
      />
      <Stack.Screen
        name="record"
        component={RecordAudio}
        options={{headerShown: false, width: '100%'}}
      />
    </Stack.Navigator>
  );
};
