import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AppSafeAreaView from '../../components/General/SafeAreaView/SafeAreaView';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import LabeledPasswordInput from '../../components/General/TextInput/SignUpTextInput';
import ContinueButton from '../../components/General/Button/button1';

const BRAND_PINK = '#A03C97';
const BG = '#EEEEEE';
const CARD = '#FFFFFF';

const SignUpScreen = ({ navigation }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');

  return (
    <AppSafeAreaView>
      {/* Card */}

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: hp('5%') }}
      >
        <View style={styles.card}>
          {/* Back Icon */}
          <TouchableOpacity onPress={() => navigation?.goBack?.()}>
            <Ionicons name="chevron-back" size={wp('6%')} color="#111" />
          </TouchableOpacity>

          {/* Big Title */}
          <View
            style={{
              marginTop: hp('2%'),
              paddingHorizontal: wp('3%'),
              marginBottom: hp('2%'),
            }}
          >
            <Text style={styles.titleBold}>SIGN UP &</Text>
            <Text style={styles.titlePink}>START JOURNEY</Text>
          </View>

          {/* Form */}

          <LabeledPasswordInput
            label="Full Name"
            placeholder="Enter Your Full Name"
            value={fullName}
            secureTextEntry={false} // No password toggle here
            onChangeText={setFullName}
          />

          <LabeledPasswordInput
            label="Email"
            placeholder="Enter Your Email"
            value={email}
            onChangeText={setEmail}
            secureTextEntry={false} // No password toggle here
          />

          <LabeledPasswordInput
            label="Password"
            placeholder="Enter Your Password"
            value={password}
            onChangeText={setPassword}
          />

          <LabeledPasswordInput
            label="Re-Type Password"
            placeholder="Re-type Your Password"
            value={rePassword}
            onChangeText={setRePassword}
          />

          <View style={{ height: hp('3%') }} />

          <ContinueButton
            buttonStyle={{
              backgroundColor: '#454545',
              marginHorizontal: wp(6),
            }}
            secondStyle={{ color: 'white' }}
            title="Create Account"
          />

          {/* Terms */}
          <View style={styles.termsWrap}>
            <Text style={styles.terms}>
              By proceeding forward, You agree to the,
            </Text>
            <View
              style={{
                flexDirection: 'row',
                gap: 6,
                marginTop: 2,
                flexWrap: 'wrap',
                justifyContent: 'center',
              }}
            >
              <Text style={styles.linkBold}>Privacy Policy</Text>
              <Text style={styles.terms}>and</Text>
              <Text style={styles.linkBold}>Terms of Use</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </AppSafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerGhost: {
    color: '#9E9E9E',
    fontSize: wp('5%'), // Responsive font size
    marginBottom: hp('1.5%'), // Responsive margin
  },
  card: {
    flex: 1,
    backgroundColor: CARD,
    paddingTop: hp('2%'), // Responsive padding-top
    borderRadius: wp('4%'), // Responsive border-radius
  },
  titleBold: {
    fontSize: wp('8%'), // Responsive font size
    fontFamily: 'benzin-bold',
    color: '#111111',
    letterSpacing: 0.5,
  },
  titlePink: {
    marginTop: hp('1%'), // Responsive margin-top
    fontSize: wp('8%'), // Responsive font size
    fontFamily: 'benzin-bold',
    color: BRAND_PINK,
    letterSpacing: 0.5,
  },
  termsWrap: {
    alignItems: 'center',
    marginTop: hp('2%'), // Responsive margin-top
  },
  terms: {
    color: '#9E9E9E',
    fontSize: wp('3.5%'), // Responsive font size
    textAlign: 'center',
  },
  linkBold: {
    color: '#7D7D7D',
    fontSize: wp('3.5%'), // Responsive font size
    fontWeight: '700',
    textDecorationLine: 'none',
  },
});

export default SignUpScreen;
