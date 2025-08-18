import React from 'react';
import { Image } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Avatar = ({ uri, size = hp('5%') }) => (
  <Image
    source={{ uri }}
    style={{ width: size, height: size, borderRadius: size / 2 }}
  />
);

export default Avatar;
