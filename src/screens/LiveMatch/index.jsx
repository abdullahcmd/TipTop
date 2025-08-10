import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Image,
  TouchableOpacity,
  TextInput,
  Dimensions,
  Modal,
  Animated,
  Easing,
  Pressable,
  ScrollView
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useMemo, useRef, useState } from 'react';
export default function LiveMatch() {
  const navigation = useNavigation();
  const [open, setOpen] = useState(false);

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" />

      <View style={styles.phoneCard}>
        {/* split preview */}
        <View style={styles.splitWrap}>
          {/* Left side */}
          <Image
            source={require('../../assets/images/match1.png')}
            style={[styles.side, styles.leftSide]}
          />
          {/* Right side */}
          <Image
            source={require('../../assets/images/match2.png')}
            style={[styles.side, styles.rightSide]}
          />

          {/* center divider */}
          <View style={styles.divider} />

          {/* top coins pills */}
          <View style={[styles.coinsPill, { left: 14 }]}>
            <Text style={styles.coinsText}>12430</Text>
          </View>
          <View style={[styles.coinsPill, { right: 14 }]}>
            <Text style={styles.coinsText}>8253</Text>
          </View>

          {/* top names + avatars */}
          <View style={[styles.nameWrap, { left: 14 }]}>
            <Avatar uri="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80" />
            <Text style={styles.nameText}>ava_joseph</Text>
          </View>
          <View style={[styles.nameWrap, { right: 14, flexDirection: 'row-reverse' }]}>
            <Avatar uri="https://images.unsplash.com/photo-1548142813-c348350df52b?w=200&q=80" />
            <Text style={[styles.nameText, { marginLeft: 0, marginRight: 8 }]}>sofiya_stefen</Text>
          </View>

          {/* center VS + timer */}
          <View style={styles.vsWrap}>
            <Text style={styles.vsText}>VS</Text>
            <View style={styles.timerPill}>
              <Text style={styles.timerText}>4:19</Text>
            </View>
          </View>

          {/* gradient at bottom for chat readability */}
          <LinearGradient
            colors={["rgba(0,0,0,0)", "rgba(0,0,0,0.6)", "rgba(0,0,0,0.75)"]}
            style={styles.bottomFade}
            pointerEvents="none"
          />

          {/* chat bubbles */}
          <View style={styles.chatLayer}>
            <ChatBubble
              avatar="https://i.pravatar.cc/100?img=68"
              name="Roxy_Roxy"
              verified
              text="wow, what a figure, what you do dear girl? 😎"
            />
            <ChatBubble
              avatar="https://i.pravatar.cc/100?img=12"
              name="DashyJames✌️"
              text=""
              count={82}
            />
            <ChatBubble
              avatar="https://i.pravatar.cc/100?img=33"
              name="jessi_joshua"
              text="Amazing hottie ❤️❤️❤️🔥🔥"
            />
          </View>

          {/* bottom input + controls */}
          <View style={styles.bottomBar}>
            <View style={styles.inputWrap}>
              <TextInput
                placeholder="What do you think.."
                placeholderTextColor="#f1f1f1"
                style={styles.input}
              />
            </View>
            <TouchableOpacity style={styles.circleBtn} onPress={() => setOpen(true)}>
              <Ionicons name="gift-outline" size={20} color="#fff" />
            </TouchableOpacity>

           
            <TouchableOpacity style={styles.circleBtn}>
              <Ionicons name="ellipsis-horizontal" size={20} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { navigation.goBack() }} style={[styles.circleBtn, styles.heartBtn]}>
              <Ionicons name="heart" size={20} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <GiftModal
              visible={open}
              coins={583}
              onClose={() => setOpen(false)}
              onSend={(g) => {
                console.log('Send gift:', g);
              }}
            />
    </SafeAreaView>
  );
}
export function GiftModal({ visible, coins = 583, onClose, onSend }) {
  const duration = 220;
  const backdrop = useRef(new Animated.Value(0)).current; // 0..1
  const translateY = useRef(new Animated.Value(40)).current; // px

  useEffect(() => {
    if (visible) {
      Animated.parallel([
        Animated.timing(backdrop, { toValue: 1, duration, easing: Easing.out(Easing.cubic), useNativeDriver: true }),
        Animated.timing(translateY, { toValue: 0, duration, easing: Easing.out(Easing.cubic), useNativeDriver: true }),
      ]).start();
    } else {
      Animated.parallel([
        Animated.timing(backdrop, { toValue: 0, duration: 180, easing: Easing.in(Easing.cubic), useNativeDriver: true }),
        Animated.timing(translateY, { toValue: 40, duration: 180, easing: Easing.in(Easing.cubic), useNativeDriver: true }),
      ]).start();
    }
  }, [visible]);

  const gifts = useMemo(
    () => [
      { id: '1', emoji: '👍', coins: 30 },
      { id: '2', emoji: '👏', coins: 82 },
      { id: '3', emoji: '👌', coins: 15 },
      { id: '4', emoji: '🎉', coins: 23 },
      { id: '5', emoji: '😎', coins: 25 },
      { id: '6', emoji: '❤️', coins: 200 },
      { id: '7', emoji: '😁', coins: 99 },
      { id: '8', emoji: '🥳', coins: 30 },
      { id: '9', emoji: '🤔', coins: 52 },
      { id: '10', emoji: '😍', coins: 89 },
      { id: '11', emoji: '😉', coins: 45 },
      { id: '12', emoji: '😇', coins: 67 },
    ],
    []
  );

  return (
    <Modal visible={visible} transparent animationType="none" statusBarTranslucent>
      {/* Backdrop */}
      <Pressable onPress={onClose} style={StyleSheet.absoluteFill}>
        <Animated.View
          pointerEvents="none"
          style={[styles.backdrop, { opacity: backdrop.interpolate({ inputRange: [0, 1], outputRange: [0, 0.5] }) }]}>
        </Animated.View>
      </Pressable>

      {/* Bottom sheet */}
      <SafeAreaView style={styles.bottomSafe}>
        <Animated.View style={[styles.sheet, { transform: [{ translateY }] }]}> 
          {/* Header */}
          <View style={styles.sheetHeader}>
            <Text style={styles.sheetTitle}>Send Gifts</Text>
            <TouchableOpacity onPress={onClose} style={styles.closeBtn}>
              <Text style={styles.closeText}>✕</Text>
            </TouchableOpacity>
          </View>

          {/* Coins */}
          <View style={styles.coinsWrap}>
            <Text style={styles.coinsValue}>{String(coins)}</Text>
            <Text style={styles.coinsLabel}>Coins You Have</Text>
          </View>

          {/* Grid */}
          <ScrollView contentContainerStyle={{ paddingHorizontal: 14, paddingBottom: 60 }} showsVerticalScrollIndicator={false}>
            <View style={styles.grid}>
              {gifts.map((g) => (
                <View key={g.id} style={styles.itemCard}>
                  <Text style={styles.itemEmoji}>{g.emoji}</Text>
                  <Text style={styles.itemCoins}>{g.coins} Coins</Text>
                  <TouchableOpacity
                    onPress={() => onSend && onSend(g)}
                    activeOpacity={0.85}
                    style={styles.sendBtn}
                  >
                    <Text style={styles.sendText}>SEND</Text>
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          </ScrollView>
        </Animated.View>
      </SafeAreaView>
    </Modal>
  );
}
function Avatar({ uri }) {
  return (
    <View style={styles.avatarRing}>
      <Image source={{ uri }} style={styles.avatar} />
    </View>
  );
}

function ChatBubble({ avatar, name, verified, text, count }) {
  return (
    <View style={styles.chatRow}>
      <Image source={{ uri: avatar }} style={styles.chatAvatar} />
      <View style={styles.chatBubble}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={styles.chatName}>{name}</Text>
          {verified ? (
            <View style={styles.verifiedDot}><Ionicons name="checkmark" size={10} color="#fff" /></View>
          ) : null}
          {typeof count === 'number' ? (
            <View style={styles.countPill}><Text style={styles.countText}>{count}</Text></View>
          ) : null}
        </View>
        {text ? <Text style={styles.chatText}>{text}</Text> : null}
      </View>
    </View>
  );
}

