import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const AttachmentCard = ({ thumb, title, subtitle }) => {
  return (
    <View style={styles.attachmentRow}>
      <Image source={{ uri: thumb }} style={styles.attachmentThumb} />
      <View style={{ flex: 1 }}>
        <Text style={styles.attachmentTitle}>{title}</Text>
        <Text style={styles.attachmentSubtitle}>{subtitle}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  attachmentRow: {
    flexDirection: 'row',
    gap: wp('3%'),
    alignItems: 'center',
    backgroundColor: '#EEF2F7',
    borderRadius: wp('2.5%'),
    padding: wp('2.8%'),
    marginTop: hp('1.2%'),
  },
  attachmentThumb: {
    width: wp('16%'),
    height: wp('16%'),
    borderRadius: wp('2.5%'),
  },
  attachmentTitle: {
    fontSize: hp('1.95%'),
    fontWeight: '700',
    color: '#1F2328',
    marginBottom: hp('0.4%'),
  },
  attachmentSubtitle: {
    fontSize: hp('1.7%'),
    color: '#5B6168',
    lineHeight: hp('2.2%'),
  },
});

export default AttachmentCard;
