import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Platform,
  KeyboardAvoidingView,
  View,
} from 'react-native';
import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

const AppSafeAreaView = ({
  children,
  style,
  edges = ['top', 'bottom'],
  barStyle = 'dark-content',
  backgroundColor = 'transparent',
  translucent = true,

  enableKeyboardAvoid = true,
}) => {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView style={[styles.safeArea, style]} edges={edges}>
      <StatusBar
        barStyle={barStyle}
        backgroundColor={backgroundColor}
        translucent
      />

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.keyboardAvoid}
        keyboardVerticalOffset={insets.top}
        enabled={enableKeyboardAvoid}
      >
        <View style={[styles.content, { paddingBottom: insets.bottom }]}>
          {children}
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  keyboardAvoid: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
});

export default AppSafeAreaView;
