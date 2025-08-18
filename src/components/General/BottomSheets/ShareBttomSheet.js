import React, { useMemo, forwardRef, useImperativeHandle, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import Clipboard from '@react-native-clipboard/clipboard';

const ShareBottomSheet = forwardRef((props, ref) => {
  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ['40%'], []);

  useImperativeHandle(ref, () => ({
    open: () => bottomSheetRef.current?.expand(),
    close: () => bottomSheetRef.current?.close(),
  }));

  const handleCopy = () => {
    Clipboard.setString('https://tiptok.app.link/3m4rItHovb');
  };

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={-1} // start closed
      snapPoints={snapPoints}
      enablePanDownToClose
      backgroundStyle={styles.sheetBackground}
      handleIndicatorStyle={styles.handleIndicator}
    >
      <BottomSheetView style={styles.container}>
        <Text style={styles.title}>Share Post</Text>

        <View style={styles.linkRow}>
          <Text style={styles.linkText}>
            https://tiptok.app.link/3m4rItHovb
          </Text>
          <TouchableOpacity onPress={handleCopy} style={styles.copyButton}>
            <Icon name="copy" size={20} color="#000" />
          </TouchableOpacity>
        </View>

        <View style={styles.iconRow}>
          <TouchableOpacity style={styles.iconBox}>
            <Icon name="whatsapp" size={28} color="#25D366" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconBox}>
            <Icon name="instagram" size={28} color="#E1306C" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconBox}>
            <Icon name="facebook" size={28} color="#1877F2" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconBox}>
            <Icon name="ellipsis-h" size={28} color="#000" />
          </TouchableOpacity>
        </View>
      </BottomSheetView>
    </BottomSheet>
  );
});

export default ShareBottomSheet;

const styles = StyleSheet.create({
  sheetBackground: {
    borderTopLeftRadius: wp(5),
    borderTopRightRadius: wp(5),
    backgroundColor: '#fff',
  },
  handleIndicator: {
    backgroundColor: '#ccc',
    width: wp(15),
  },
  container: {
    flex: 1,
    padding: wp(5),
  },
  title: {
    fontSize: wp(5),
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: hp(2),
  },
  linkRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: wp(3),
    backgroundColor: '#f5f5f5',
    borderRadius: wp(2),
    marginBottom: hp(3),
  },
  linkText: {
    fontSize: wp(3.5),
    flex: 1,
  },
  copyButton: {
    marginLeft: wp(3),
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  iconBox: {
    width: wp(15),
    height: wp(15),
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp(3),
  },
});
