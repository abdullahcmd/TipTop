import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AppSafeAreaView from '../../components/General/SafeAreaView/SafeAreaView';
import Header from '../../components/General/Headers/GeneralHeader';
import { wp } from '../../utils/helpers/responsive';
import GradientButton from '../../components/General/Button/GradientButton';
import LabeledPasswordInput from '../../components/General/TextInput/SignUpTextInput';

const ForgotPassScreen2 = () => {
  return (
    <AppSafeAreaView>
      <Header title="Reset Password" />

      <LabeledPasswordInput label={'New Password'} placeholder={'*********'} />
      <LabeledPasswordInput
        label={'Confirm Password'}
        placeholder={'*********'}
      />
      <GradientButton text="Sign In" />
    </AppSafeAreaView>
  );
};

const styles = StyleSheet.create({
  Heading: {
    paddingHorizontal: wp(10),
    textAlign: 'center',
    fontWeight: '400',
    fontSize: wp(4),
  },
});

export default ForgotPassScreen2;
