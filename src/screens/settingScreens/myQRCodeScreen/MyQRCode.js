import React from 'react';
import { StyleSheet, View, SafeAreaView, StatusBar } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { QRCodeCard, ActionButtons } from '../../../components';

const MyQRCode = ({ navigation }) => {
    const handleSave = () => {
        // Handle save functionality
        console.log('Save QR Code');
    };

    const handleShare = () => {
        navigation.navigate('ScanQRCode');
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

            <View style={styles.content}>
                <QRCodeCard
                    profileName="Sofiya_Stefen"
                    description="an artist based in Portland. I find inspiration in nature and urban life. Let's connect and create something beautiful!"
                    profileImage={require('../../../assets/images/ProfileImage.png')}
                    qrCodeData="https://tiptop.app/profile/sofiya_stefen"
                    onSave={handleSave}
                    onShare={handleShare}
                />

            </View>
        </SafeAreaView>
    );
};

export default MyQRCode;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: hp('5%'),
    },
});