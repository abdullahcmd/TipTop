import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { icons } from '../../constants/icons';

const DisplayName = ({ name, onEditPress }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.sectionTitle}>Displaying Name</Text>
            <View style={styles.nameContainer}>
                <Text style={styles.name}>{name}</Text>
                <TouchableOpacity onPress={onEditPress} style={styles.editButton}>
                    <Image source={icons.edit} style={styles.editIcon} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 24,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#333',
        marginBottom: 12,
        paddingHorizontal: 20,
    },
    nameContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 12,
        marginHorizontal: 20,
        paddingVertical: 5,
        // paddingHorizontal: 20,
    },
    name: {
        fontSize: wp('7%'),
        fontWeight: 'bold',
        color: '#333',
    },
    editButton: {
    },
    editIcon: {
        width: wp('5%'),
        height: wp('5%'),
        resizeMode: 'contain',
        marginLeft: 8,
        marginBottom: hp('2%'),
        marginRight: wp('2%'),
    },
});

export default DisplayName; 