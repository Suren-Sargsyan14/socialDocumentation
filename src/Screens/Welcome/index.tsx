import React from 'react';
import {Text, View, useColorScheme} from 'react-native';

import Facebook from '../../Components/Social/Facebook';

const Welcome = () => {
  const isDark = useColorScheme() === 'dark';

  return (
    <View style={[isDark && {backgroundColor: 'black'}, {flex: 1}]}>
      <Text>Welcome Screen</Text>
      <View style={{flex: 1, alignItems: 'center', paddingTop: 50}}>
        <Facebook />
      </View>
    </View>
  );
};

export default Welcome;
