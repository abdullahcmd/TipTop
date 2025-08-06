import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const ProfilePhotoSelector = ({ selectedPhoto, onPhotoSelect }) => {
    const photos = [
        { id: 1, source: require('../../assets/images/ProfileImage.png') },
        { id: 2, source: require('../../assets/images/ProfileImage.png') },
        { id: 3, source: require('../../assets/images/ProfileImage.png') },
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.sectionTitle}>Change Photo</Text>
            <View style={styles.photosContainer}>
                {photos.map((photo) => (
                    <TouchableOpacity
                        key={photo.id}
                        style={[
                            styles.photoContainer,
                            selectedPhoto === photo.id && styles.selectedPhoto
                        ]}
                        onPress={() => onPhotoSelect(photo.id)}
                    >
                        <Image source={photo.source} style={styles.photo} />
                        {selectedPhoto === photo.id && (
                            <View style={styles.selectedIndicator}>
                                <Text style={styles.checkmark}>✓</Text>
                            </View>
                        )}
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: hp('3%'),
    },
    sectionTitle: {
        fontSize: wp('4.5%'),
        fontWeight: '600',
        color: '#333',
        marginBottom: hp('1.5%'),
        paddingHorizontal: wp('5%'),
    },
    photosContainer: {
        flexDirection: 'row',
    },
    photoContainer: {
        position: 'relative',
        borderRadius: wp('50%'),
        borderColor: 'transparent',
        marginLeft: wp('3%'),
    },
    selectedPhoto: {
    },
    photo: {
        width: wp('20%'),
        height: wp('20%'),
        borderRadius: wp('10%'),
    },
    selectedIndicator: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        backgroundColor: '#4CAF50',
        borderRadius: wp('6%'),
        width: wp('6%'),
        height: wp('6%'),
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: '#fff',
    },
    checkmark: {
        color: '#fff',
        fontSize: wp('3%'),
        fontWeight: 'bold',
    },
});

export default ProfilePhotoSelector; 