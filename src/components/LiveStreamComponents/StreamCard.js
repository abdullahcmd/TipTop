import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const StreamCard = ({
  type,
  avatar,
  avatarLeft,
  avatarRight,
  avatars,
  username,
  viewers,
  cardStyle2,
  description,
}) => {
  return (
    <View style={[styles.card, cardStyle2]}>
      {/* Avatar(s) */}
      {type === 'solo' && <Image source={avatar} style={styles.avatar} />}
      {type === 'battle' && (
        <View style={styles.battleWrapper}>
          <Image source={avatarLeft} style={styles.battleAvatar} />
          <Text style={styles.vsText}>VS</Text>
          <Image source={avatarRight} style={styles.battleAvatar} />
        </View>
      )}
      {type === 'group' && (
        <View style={styles.groupWrapper}>
          {avatars.map((img, idx) => (
            <Image key={idx} source={img} style={styles.groupAvatar} />
          ))}
        </View>
      )}

      {/* Info */}
      <View style={styles.info}>
        <Text style={styles.username}>{username} ✅</Text>
        <Text style={styles.viewers}>{viewers} Viewers</Text>
        <Text style={styles.desc}>{description}</Text>
      </View>
    </View>
  );
};

export default StreamCard;

const styles = StyleSheet.create({
  card: {
    width: '48%',
    //borderRadius: 16,
    padding: 16,
    backgroundColor: '#F4F4F4',
  },
  avatar: {
    width: 72,
    height: 72,
    borderRadius: 36,
    alignSelf: 'center',
    marginBottom: 10,
  },
  battleWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  battleAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginHorizontal: 8,
  },
  vsText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#FFA500',
  },
  groupWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 6,
    marginBottom: 10,
  },
  groupAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  info: {
    alignItems: 'center',
  },
  username: {
    fontWeight: '600',
    fontSize: 14,
    marginBottom: 2,
  },
  viewers: {
    fontSize: 13,
    color: '#666',
    marginBottom: 6,
  },
  desc: {
    textAlign: 'center',
    fontSize: 13,
    color: '#000',
  },
});
