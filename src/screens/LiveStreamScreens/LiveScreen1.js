import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import RoundButton from '../../components/LiveStreamComponents/ReusableCentreIconButton';
import Camera from '../../assets/svgs/Camera.svg';
import ContinueButton from '../../components/button/button1';
import PrimaryColors from '../../constants/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';

const LiveScreen = () => {
  const [restrictJoin, setRestrictJoin] = useState(true);
  const navigation = useNavigation();
  return (
    <ImageBackground
      source={require('../../assets/images/LiveScreen.png')}
      style={styles.container}
      imageStyle={{ borderRadius: 24 }}
    >
      <View style={styles.overlayContent}>
        <RoundButton>
          <Camera />
        </RoundButton>

        <View style={styles.textBox}>
          <Text style={styles.description}>
            Showing my new hot outfits by wearing them, come on ! 🔥🔥🎉
          </Text>
        </View>

        <TouchableOpacity
          style={styles.restrictRow}
          onPress={() => setRestrictJoin(!restrictJoin)}
        >
          <View style={styles.checkbox}>
            {restrictJoin && <Text style={styles.checkmark}>✓</Text>}
          </View>
          <Text style={styles.restrictText}>
            Restrict users requests to join
          </Text>
        </TouchableOpacity>

        <ContinueButton
          onPress={() => {
            navigation.replace('LiveScreen2');
          }}
          title="Start Live"
          secondStyle={{
            color: PrimaryColors.PurpleText,
            fontWeight: '600',
            fontSize: wp('4%'),
          }}
          buttonStyle={styles.startBtn}
        />
      </View>
    </ImageBackground>
  );
};

export default LiveScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'hidden',
    justifyContent: 'flex-end',
  },
  overlayContent: {
    alignItems: 'center',
    paddingBottom: hp('5%'),
    paddingHorizontal: wp('5%'),
  },
  textBox: {
    backgroundColor: PrimaryColors.White10percent_Opacity,
    borderRadius: 12,
    padding: wp('4%'),
    marginTop: hp('2%'),
    marginBottom: hp('1.5%'),
    width: '100%',
  },
  description: {
    color: '#fff',
    fontSize: wp('3.6%'),
  },
  restrictRow: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    justifyContent: 'flex-start',
    marginVertical: hp('1.5%'),
  },
  checkbox: {
    width: wp('5%'),
    height: wp('5%'),
    backgroundColor: '#9333ea',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: wp('2%'),
  },
  restrictText: {
    color: '#fff',
    fontSize: wp('3.5%'),
  },
  startBtn: {
    width: '100%',
    marginTop: hp('1.5%'),
  },
  startBtnText: {
    color: '#9333ea',
    fontWeight: 'bold',
    fontSize: wp('4%'),
  },
  checkmark: {
    color: '#fff',
    fontSize: wp('3.5%'),
    fontWeight: 'bold',
    lineHeight: wp('4.5%'),
  },
});
