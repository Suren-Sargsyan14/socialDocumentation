import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {WelcomeRootParamList, WelcomeRootRouteNames} from './routes';

const Root = createNativeStackNavigator<WelcomeRootParamList>();

import {WelcomeScreen} from '../../../Screens';

const WelcomeRoot = () => {
  return (
    <Root.Navigator>
      <Root.Screen
        component={WelcomeScreen}
        name={WelcomeRootRouteNames.WELCOME}
      />
    </Root.Navigator>
  );
};

export default WelcomeRoot;
