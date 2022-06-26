import React, {memo} from 'react';
import {TouchableOpacity} from 'react-native';

import {signIn} from '../../Services/Facebook';

import Fb from '../../assets/icons/fb.svg';

const Facebook = () => (
  <TouchableOpacity onPress={signIn}>
    <Fb width={50} height={50} />
  </TouchableOpacity>
);

export default memo(Facebook);
