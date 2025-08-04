import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import RoundButton from '../../components/button/LiveScreenButtons/ReusableCentreIconButton';
import Camera from '../../assets/svgs/Camera.svg';
import ContinueButton from '../../components/button/button1';
import PrimaryColors from '../../constants/colors';

const LiveScreen = () => {
  const [restrictJoin, setRestrictJoin] = useState(true);

  return (
    <ImageBackground
      source={require('../../assets/images/LiveScreen.png')} // replace with your image
      style={styles.container}
      imageStyle={{ borderRadius: 24 }}
    >
      <View style={styles.overlayContent}>
        {/* Camera Button */}
        <RoundButton>
          <Camera />
        </RoundButton>

        {/* Text description */}
        <View style={styles.textBox}>
          <Text style={styles.description}>
            Showing my new hot outfits by wearing them, come on ! 🔥🔥🎉
          </Text>
        </View>

        {/* Restrict Join */}
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

        {/* Start Live Button */}
        <ContinueButton
          title="Start Live"
          secondStyle={{ color: PrimaryColors.PurpleText, fontWeight: '600' }}
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
    borderRadius: 24,
    overflow: 'hidden',
    justifyContent: 'flex-end',
  },
  overlayContent: {
    alignItems: 'center',
    paddingBottom: 40,
    paddingHorizontal: 20,
  },
  textBox: {
    backgroundColor: PrimaryColors.White10percent_Opacity,
    borderRadius: 12,
    padding: 12,
    marginTop: 16,
    marginBottom: 10,
    width: '100%',
  },
  description: {
    color: '#fff',
    fontSize: 14,
  },
  restrictRow: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    justifyContent: 'flex-start',
    marginVertical: 14,
  },
  checkbox: {
    width: 20,
    height: 20,
    backgroundColor: '#9333ea',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  checkboxInner: {
    width: 10,
    height: 10,
    backgroundColor: '#fff',
    borderRadius: 2,
  },
  restrictText: {
    color: '#fff',
    fontSize: 14,
  },
  startBtn: {
    width: '100%',
    marginTop: 10,
  },
  startBtnText: {
    color: '#9333ea',
    fontWeight: 'bold',
    fontSize: 16,
  },
  checkmark: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 18,
  },
});
