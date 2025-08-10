// StreamEndedScreen.js
// React Native screen matching the provided "Stream Ended" summary design

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
export default function EndLiveScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" backgroundColor="#3b0fff" />

      <View style={styles.container}>
        <LinearGradient
          colors={["#3b0fff", "#201041", "#0f0f0f"]}
          start={{ x: 0.1, y: 0 }}
          end={{ x: 0.9, y: 1 }}
          style={styles.card}
        >
          {/* Avatar with neon ring */}
          <View style={styles.avatarOuterRing}>
            <LinearGradient
              colors={["#ff00cc", "#3333ff", "#00e5ff"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.avatarRing}
            >
              <View style={styles.avatarInnerBorder}>
                <Image
                  source={{ uri: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&q=80' }}
                  style={styles.avatar}
                />
              </View>
            </LinearGradient>
          </View>

          {/* Username + verified */}
          <View style={styles.nameRow}>
            <Text style={styles.username}>sofiya_stefen</Text>
            <View style={styles.verifiedDot}>
              <Ionicons name="checkmark" size={12} color="#fff" />
            </View>
          </View>
          <Text style={styles.fullname}>Sofiya Stefen</Text>

          {/* Title & subtitle */}
          <Text style={styles.title}>Stream Ended!</Text>
          <Text style={styles.subtitle}>Below is the summary of your stream!</Text>

          {/* Summary rows */}
          <View style={styles.rows}>
            <SummaryRow label="Streamed For" value="1h 10m 35s" />
            <Hairline />
            <SummaryRow label="Viewers" value="853" />
            <Hairline />
            <SummaryRow label="Followers Gained" value="182" />
            <Hairline />
            <SummaryRow label="Streamed For" value="1h 10m 35s" />
            <Hairline />
            <SummaryRow label="Viewers" value="853" />
            <Hairline />
            <SummaryRow label="Followers Gained" value="182" />
            <Hairline />
            <SummaryRow label="Total Coins Collected" value="12563" hint="Battle : 12400 + Live : 163" />
          </View>

          {/* CTA */}
          <TouchableOpacity style={styles.cta} onPress={() => navigation.navigate('Home')}> 
            <Text style={styles.ctaText}>Go Home</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </SafeAreaView>
  );
}

function Hairline() {
  return <View style={styles.hairline} />;
}

function SummaryRow({ label, value, hint }) {
  return (
    <View style={styles.row}>
      <Text style={styles.rowLabel}>{label}</Text>
      <View style={{ alignItems: 'flex-end' }}>
        <Text style={styles.rowValue}>{value}</Text>
        {hint ? <Text style={styles.rowHint}>{hint}</Text> : null}
      </View>
    </View>
  );
}


