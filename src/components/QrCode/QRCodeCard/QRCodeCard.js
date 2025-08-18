import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import { icons } from '../../../constants/icons';
import ActionButtons from '../ActionButtons/ActionButtons';

const QRCodeCard = ({
  profileName,
  description,
  profileImage,
  qrCodeData,
  onSave,
  onShare,
}) => {
  return (
    <View style={styles.card}>
      <View style={styles.qrCodeContainer}>
        <LinearGradient
          colors={['#A855F7', '#F472B6']}
          style={styles.qrCodeBackground}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
        >
          <View style={styles.qrCodePlaceholder}>
            <Image source={icons.qrCode} style={styles.qrCodeImage} />
          </View>

          {/* Profile image overlay */}
          <View style={styles.profileImageContainer}>
            <Image
              source={
                profileImage ||
                require('../../../assets/images/ProfileImage.png')
              }
              style={styles.profileImage}
            />
          </View>
        </LinearGradient>
      </View>

      <View style={styles.profileInfo}>
        <View style={styles.nameContainer}>
          <Text style={styles.profileName}>{profileName}</Text>
          <Icon
            name="checkmark-circle"
            size={20}
            color="#007AFF"
            style={styles.verifiedIcon}
          />
        </View>

        <Text style={styles.description}>{description} ⚡</Text>
      </View>

      <ActionButtons onSave={onSave} onShare={onShare} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: wp('10%'),
    padding: wp('4%'),
    marginHorizontal: wp('4%'),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  qrCodeContainer: {
    alignItems: 'center',
    marginBottom: hp('2%'),
  },
  qrCodeBackground: {
    width: wp('60%'),
    height: wp('60%'),
    borderRadius: wp('6%'),
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  qrCodePlaceholder: {
    width: wp('50%'),
    height: wp('50%'),
    backgroundColor: '#fff',
    borderRadius: wp('4%'),
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  qrCodeImage: {
    width: '90%',
    height: '90%',
    resizeMode: 'contain',
  },
  qrRow: {
    flexDirection: 'row',
  },
  qrPixel: {
    width: wp('2%'),
    height: wp('2%'),
  },
  profileImageContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginLeft: -wp('6%'),
    marginTop: -wp('6%'),
  },
  profileImage: {
    width: wp('12%'),
    height: wp('12%'),
    borderRadius: wp('6%'),
    borderWidth: 3,
    borderColor: '#FFFFFF',
  },
  profileInfo: {
    alignItems: 'center',
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp('1%'),
  },
  profileName: {
    fontSize: wp('5%'),
    fontWeight: 'bold',
    color: '#000000',
    marginRight: wp('1%'),
  },
  verifiedIcon: {
    marginLeft: wp('1%'),
  },
  description: {
    fontSize: wp('3.5%'),
    color: '#666666',
    textAlign: 'center',
    lineHeight: hp('2.5%'),
    paddingHorizontal: wp('2%'),
  },
});

export default QRCodeCard;
