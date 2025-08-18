import React, { useState, useRef } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import { QRCodeCard } from '../../../components';
import AppSafeAreaView from '../../../components/General/SafeAreaView/SafeAreaView';
import Header from '../../../components/General/Headers/GeneralHeader';
import Icon from 'react-native-vector-icons/Entypo';
import TabSwitcher from '../../../components/General/TabSwitcher/TabSwitcher';
import ShareBottomSheet from '../../../components/General/BottomSheets/ShareBttomSheet';
import ScanQRCode from './scanQRCode/ScanQRCode';

const MyQRCode = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState(0); // 0 = My code, 1 = Scan code
  const bottomSheetRef = useRef(null);

  const handleSave = () => {
    console.log('Save QR Code');
  };

  const handleShare = () => {
    bottomSheetRef.current?.open();
  };

  const handleMenu = () => {
    console.log('Menu pressed');
  };

  return (
    <BottomSheetModalProvider>
      <AppSafeAreaView>
        <Header
          title="Qr Code"
          rightElement={
            <View style={{ flexDirection: 'row', gap: wp(5) }}>
              <TouchableOpacity onPress={handleShare}>
                <Icon name="share" size={20} />
              </TouchableOpacity>
              <TouchableOpacity onPress={handleMenu}>
                <Icon name="dots-three-horizontal" size={20} />
              </TouchableOpacity>
            </View>
          }
        />

        <TabSwitcher onTabChange={setActiveTab} />

        <View style={styles.content}>
          {activeTab === 0 ? (
            <QRCodeCard
              profileName="Sofiya_Stefen"
              description="an artist based in Portland. I find inspiration in nature and urban life. Let's connect and create something beautiful!"
              profileImage={require('../../../assets/images/ProfileImage.png')}
              qrCodeData="https://tiptop.app/profile/sofiya_stefen"
              onSave={handleSave}
              onShare={handleShare}
            />
          ) : (
            <ScanQRCode />
          )}
        </View>

        {/* ✅ Bottom Sheet */}
        <ShareBottomSheet ref={bottomSheetRef} />
      </AppSafeAreaView>
    </BottomSheetModalProvider>
  );
};

export default MyQRCode;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: hp('5%'),
  },
});
