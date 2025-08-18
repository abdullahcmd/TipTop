import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import { icons } from '../../../../constants/icons';

const ScanQRCode = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('scan');
  const [flashlightOn, setFlashlightOn] = useState(false);

  const toggleFlashlight = () => {
    setFlashlightOn(!flashlightOn);
  };

  return (
    <>
      <View style={styles.container}>
        {/* Instruction Text */}
        <Text style={styles.instructionText}>
          Scan the QR of the profile you want to search
        </Text>

        {/* Main Scanning Area */}
        <View style={styles.scanningContainer}>
          {/* Flashlight Toggle */}
          <TouchableOpacity
            style={styles.flashlightButton}
            onPress={toggleFlashlight}
          >
            <Icon
              name={flashlightOn ? 'flash' : 'flash-outline'}
              size={24}
              color="#fff"
            />
          </TouchableOpacity>

          {/* Scanning Frame */}
          <View style={styles.scanningFrame}>
            <View style={styles.dashedBorder}>
              <Text style={styles.frameText}>
                Place QR code inside the frame
              </Text>
            </View>
          </View>

          {/* QR Code Display Card */}
          <View style={styles.qrCard}>
            {/* Tabs */}
            <View style={styles.tabContainer}>
              <TouchableOpacity
                style={[styles.tab]}
                onPress={() => setActiveTab('scan')}
              >
                <Text
                  style={[
                    styles.tabText,
                    activeTab === 'scan' && styles.activeTabText,
                  ]}
                >
                  Scan This code
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.tab]}
                onPress={() => setActiveTab('myqr')}
              >
                <Text
                  style={[
                    styles.tabText,
                    activeTab === 'myqr' && styles.activeTabText,
                  ]}
                >
                  My QR Code
                </Text>
              </TouchableOpacity>
            </View>

            {/* QR Code Display */}
            <View style={styles.qrDisplayContainer}>
              <View style={styles.qrCodeSection}>
                <View style={styles.qrCodePlaceholder}>
                  <Image source={icons.qrCode} style={styles.qrCodeImage} />
                </View>
              </View>
              <View style={styles.profileInfoSection}>
                <View style={styles.profileNameContainer}>
                  <Text style={styles.profileName}>Sofiya_Stefen</Text>
                  <Icon name="checkmark-circle" size={16} color="#007AFF" />
                </View>
                <Text style={styles.profileDescription}>
                  an artist based in
                </Text>
                <Text style={styles.profileLocation}>Portland...</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Upload Button */}
        <TouchableOpacity style={styles.uploadButton}>
          <Icon name="arrow-up" size={20} color="#666" />
          <View style={styles.uploadDivider} />
          <Text style={styles.uploadText}>Upload From Gallery</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignSelf: 'center',
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp('4%'),
    paddingVertical: hp('2%'),
  },
  backButton: {
    padding: wp('2%'),
  },
  instructionText: {
    fontSize: wp('3.5%'),
    color: '#6B7280',
    textAlign: 'center',
    paddingHorizontal: wp('6%'),
    marginBottom: hp('3%'),
  },
  scanningContainer: {
    height: '65%',
    backgroundColor: '#1F2937',
    marginHorizontal: wp('8%'),
    borderRadius: wp('4%'),
    padding: wp('3%'),
    position: 'relative',
    marginTop: hp('2%'),
    marginBottom: hp('2%'),
  },
  flashlightButton: {
    position: 'absolute',
    top: wp('4%'),
    right: wp('4%'),
    zIndex: 1,
    padding: wp('2%'),
  },
  scanningFrame: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp('2%'),
  },
  dashedBorder: {
    width: '95%',
    height: '60%',
    borderWidth: 3,
    borderColor: '#fff',
    borderStyle: 'dashed',
    borderRadius: wp('2%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  frameText: {
    color: '#fff',
    fontSize: wp('3%'),
    textAlign: 'center',
    paddingHorizontal: wp('4%'),
  },
  qrCard: {
    backgroundColor: '#10151C',
    borderRadius: wp('3%'),
    padding: wp('4%'),
    marginTop: hp('2%'),
  },
  tabContainer: {
    flexDirection: 'row',
    // backgroundColor: '#4B5563',
    borderRadius: wp('2%'),
    marginBottom: hp('3%'),
    padding: wp('1%'),
  },
  tab: {
    flex: 1,
    alignItems: 'center',
  },
  activeTab: {
    backgroundColor: '#1F2937',
  },
  tabText: {
    fontSize: wp('4%'),
    color: '#9CA3AF',
    fontWeight: '500',
  },
  activeTabText: {
    color: '#fff',
    fontWeight: '600',
  },
  qrDisplayContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  qrCodeSection: {
    marginRight: wp('4%'),
  },
  qrCodePlaceholder: {
    width: wp('16%'),
    height: wp('16%'),
    backgroundColor: '#fff',
    borderRadius: wp('2%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000',
  },
  qrCodeImage: {
    width: '90%',
    height: '90%',
    resizeMode: 'contain',
  },
  profileInfoSection: {
    flex: 1,
  },
  profileNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp('1%'),
  },
  profileName: {
    fontSize: wp('4%'),
    fontWeight: 'bold',
    color: '#fff',
    marginRight: wp('2%'),
  },
  profileDescription: {
    fontSize: wp('3%'),
    color: '#9CA3AF',
    lineHeight: hp('2%'),
  },
  profileLocation: {
    fontSize: wp('3%'),
    color: '#9CA3AF',
    lineHeight: hp('2%'),
  },
  uploadButton: {
    width: '83%',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E5E7EB',
    marginHorizontal: wp('4%'),
    marginBottom: hp('4%'),
    paddingVertical: hp('2%'),
    borderRadius: wp('2%'),
  },
  uploadDivider: {
    width: 1,
    height: hp('2%'),
    backgroundColor: '#666',
    marginHorizontal: wp('2%'),
  },
  uploadText: {
    fontSize: wp('3.5%'),
    color: '#666',
    fontWeight: '500',
  },
});

export default ScanQRCode;
