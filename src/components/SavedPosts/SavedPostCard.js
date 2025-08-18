import React from 'react';
import { View, ImageBackground, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const SavedPostCard = ({ image, views }) => {
    return (
        <View style={styles.cardWrapper}>
            <ImageBackground source={image} style={styles.card} imageStyle={styles.image} resizeMode="cover">
                <View style={styles.overlay}>
                    <Ionicons name="play" size={wp('3.5%')} color="#fff" />
                    <Text style={styles.views}>{views}</Text>
                </View>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    cardWrapper: {
        flex: 1,
        // margin: wp('0.7%'),
        // borderRadius: wp('2%'),
        overflow: 'hidden',
        backgroundColor: '#F3F4F6',
        // elevation: 2,
        minWidth: 0,
    },
    card: {
        width: '100%',
        // Increase height by using a lower aspect ratio (taller)
        aspectRatio: 0.7, // was 1, now taller
        justifyContent: 'flex-end',
    },
    image: {
        // borderRadius: wp('2%'),
    },
    overlay: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: hp('0.5%'),
        paddingHorizontal: wp('1.5%'),
        backgroundColor: 'rgba(30, 41, 59, 0.45)',
        borderBottomLeftRadius: wp('2%'),
        borderBottomRightRadius: wp('2%'),
    },
    views: {
        color: '#fff',
        fontSize: wp('3.2%'),
        marginLeft: wp('1%'),
        fontWeight: '600',
        textShadowColor: 'rgba(0,0,0,0.25)',
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 1,
    },
});

export default SavedPostCard;
