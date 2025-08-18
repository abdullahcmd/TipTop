import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AppSafeAreaView from '../../components/General/SafeAreaView/SafeAreaView';
import Header from '../../components/General/Headers/GeneralHeader';
import { wp } from '../../utils/helpers/responsive';
import GradientButton from '../../components/General/Button/GradientButton';
import { useNavigation } from '@react-navigation/native';
import LabeledPasswordInput from '../../components/General/TextInput/SignUpTextInput';

const ForgotPassScreen = () => {
  const navigation = useNavigation();
  return (
    <AppSafeAreaView>
      <Header title="Forgot Password" />
      <Text style={styles.Heading}>
        Enter your email and will send you instruction on how to reset it
      </Text>
      <LabeledPasswordInput
        label={'Email'}
        secureTextEntry={false}
        placeholder={'Enter your email'}
      />
      <GradientButton
        onPress={() => {
          navigation.navigate('ForgotPass2');
        }}
      />
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

export default ForgotPassScreen;
