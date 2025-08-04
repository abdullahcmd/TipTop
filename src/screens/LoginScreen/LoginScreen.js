import React, { useState } from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Platform,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ContinueButton from '../../components/button/button1';
import CustomTextInput from '../../components/TextInput/CustomTextInput';
import GoogleButton from '../../components/button/GoogleButton';
import PrimaryColors from '../../constants/colors';
import { useNavigation } from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const LoginInScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Email:', email, 'Password:', password);
    navigation.navigate('Home');
  };

  return (
    <LinearGradient
      colors={[
        PrimaryColors.gradient_Color1,
        PrimaryColors.gradient_Color2,
        PrimaryColors.gradient_Color3,
      ]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={styles.content}>
            <Text style={styles.signIn}>SIGN IN</Text>
            <Text style={styles.continue}>TO CONTINUE</Text>

            <CustomTextInput
              placeholder="Enter Your Email"
              value={email}
              onChangeText={setEmail}
            />
            <CustomTextInput
              placeholder="Enter Password"
              value={password}
              onChangeText={setPassword}
              password={true}
            />

            <TouchableOpacity style={styles.forgot}>
              <Text style={styles.forgotText}>Forget Password?</Text>
            </TouchableOpacity>

            <ContinueButton title="Log In" onPress={handleLogin} />
          </View>

          <TouchableOpacity style={styles.createAccount}>
            <Text style={styles.createAccountText}>Create account here</Text>
          </TouchableOpacity>

          <View style={styles.content2}>
            <View style={styles.dividerWrapper}>
              <View style={styles.line} />
              <Text style={styles.dividerText}>Continue With</Text>
              <View style={styles.line} />
            </View>

            <GoogleButton onPress={() => console.log('Google Sign-In')} />

            <Text style={styles.terms}>
              By proceeding forward, You agree to the,
              <Text style={styles.link}> Privacy Policy </Text>
              and
              <Text style={styles.link}> Terms of Use</Text>
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: {
    padding: wp('7%'),
    paddingTop: Platform.OS === 'android' ? hp('5%') : wp('7%'),
    justifyContent: 'center',
  },
  signIn: {
    textAlign: 'center',
    fontSize: wp('7.5%'),
    fontFamily: 'benzin-bold',
    color: '#fff',
  },
  continue: {
    textAlign: 'center',
    fontFamily: 'benzin-bold',
    fontSize: wp('6.5%'),
    color: 'rgba(255,255,255,0.5)',
    marginBottom: hp('3.5%'),
  },
  forgot: {
    alignItems: 'flex-end',
    marginVertical: hp('1.2%'),
  },
  forgotText: {
    color: '#fff',
    fontSize: wp('3.8%'),
  },
  createAccount: {
    backgroundColor: '#8988D9',
    paddingVertical: hp('3.5%'),
    width: '100%',
  },
  createAccountText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '500',
    fontSize: wp('4%'),
  },
  dividerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp('3.5%'),
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#fff',
  },
  dividerText: {
    marginHorizontal: wp('3%'),
    color: '#fff',
    fontSize: wp('4.5%'),
  },
  terms: {
    color: '#fff',
    textAlign: 'center',
    fontSize: wp('4%'),
    marginTop: hp('2.5%'),
    lineHeight: wp('6.5%'),
  },
  link: {
    fontWeight: '700',
    color: '#fff',
  },
  content2: {
    padding: wp('7%'),
    justifyContent: 'center',
  },
});

export default LoginInScreen;
