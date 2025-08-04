import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ContinueButton from '../../components/button/button1';
import CustomTextInput from '../../components/TextInput/CustomTextInput';
import GoogleButton from '../../components/button/GoogleButton';
import PrimaryColors from '../../constants/colors';
import { useNavigation } from '@react-navigation/native';
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
        <View style={styles.content}>
          {/* Heading */}
          <Text style={styles.signIn}>SIGN IN</Text>
          <Text style={styles.continue}>TO CONTINUE</Text>

          {/* Inputs */}
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

          {/* Forgot Password */}
          <TouchableOpacity style={styles.forgot}>
            <Text style={styles.forgotText}>Forget Password?</Text>
          </TouchableOpacity>

          {/* Log In Button */}
          <ContinueButton title="Log In" onPress={handleLogin} />
        </View>
        {/* Create Account */}
        <TouchableOpacity style={styles.createAccount}>
          <Text style={styles.createAccountText}>Create account here</Text>
        </TouchableOpacity>

        <View style={styles.content2}>
          {/* Divider */}
          <View style={styles.dividerWrapper}>
            <View style={styles.line} />
            <Text style={styles.dividerText}>Continue With</Text>
            <View style={styles.line} />
          </View>

          {/* Google Sign In */}
          <GoogleButton onPress={() => console.log('Google Sign-In')} />

          {/* Terms & Policy */}
          <Text style={styles.terms}>
            By proceeding forward, You agree to the,
            <Text style={styles.link}> Privacy Policy </Text>
            and
            <Text style={styles.link}> Terms of Use</Text>
          </Text>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: {
    padding: 27,
    //flex: 1,
    justifyContent: 'center',
  },
  signIn: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: '900',
    color: '#fff',
  },
  continue: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '700',
    color: 'rgba(255,255,255,0.5)',
    marginBottom: 30,
  },
  forgot: {
    alignItems: 'flex-end',
    marginVertical: 8,
  },
  forgotText: {
    color: '#fff',
    fontSize: 14,
  },
  createAccount: {
    backgroundColor: '#8988D9',
    paddingVertical: 25,
    width: '100%',
  },
  createAccountText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 16,
  },
  dividerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#fff',
  },
  dividerText: {
    marginHorizontal: 12,
    color: '#fff',
    fontSize: 17,
  },
  terms: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    marginTop: 20,
    lineHeight: 25,
  },
  link: {
    fontWeight: '700',
    color: '#fff',
  },
  content2: {
    padding: 27,
    //flex: 1,
    justifyContent: 'center',
  },
});

export default LoginInScreen;
