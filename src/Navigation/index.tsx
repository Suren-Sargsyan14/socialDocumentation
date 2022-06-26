import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import WelcomeRoot from './Roots/Welcome';

const Navigation = () => {
  return (
    <NavigationContainer>
      <WelcomeRoot />
    </NavigationContainer>
  );
};

export default Navigation;
