
import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#ececec' },
  container: {
    flex: 1,
    // paddingHorizontal: 16,
    // paddingVertical: 16,
    marginTop:40
  },
  card: {
    flex: 1,
    // borderRadius: CARD_RADIUS,
    padding: 22,
    paddingTop: 28,
    overflow: 'hidden',
    // justifyContent: 'center',
  },
  avatarOuterRing: {
    alignItems: 'center',
    marginTop: 12,
  },
  avatarRing: {
    width: 110,
    height: 110,
    borderRadius: 55,
    padding: 4,
    shadowColor: '#7b5cff',
    shadowOpacity: 0.6,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 8 },
  },
  avatarInnerBorder: {
    flex: 1,
    borderRadius: 55,
    backgroundColor: '#0d0d0f',
    padding: 4,
  },
  avatar: {
    width: '100%',
    height: '100%',
    borderRadius: 55,
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 14,
  },
  username: { color: '#fff', fontSize: 18, fontWeight: '800',alignSelf:"center" },
  verifiedDot: {
    marginLeft: 6,
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#3b82f6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fullname: { color: '#d6d6d6', textAlign: 'center', marginTop: 2 },
  title: {
    color: '#fff',
    fontSize: 28,
    fontWeight: '900',
    marginTop: 28,
    textAlign: 'center',
  },
  subtitle: {
    color: '#cfcfe7',
    marginTop: 4,
    textAlign: 'center',
    marginBottom: 18,
  },
  rows: {
    // backgroundColor: 'rgba(255,255,255,0.06)',
    borderRadius: 16,
    paddingHorizontal: 14,
    paddingTop: 6,
    paddingBottom: 6,
    marginTop:40
  },
  hairline: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: 'rgba(255,255,255,0.15)',
    marginVertical: 8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rowLabel: { color: '#c9c9d9', fontSize: 14 },
  rowValue: { color: '#ffffff', fontSize: 14, fontWeight: '800' },
  rowHint: { color: '#9c9cb5', fontSize: 12, marginTop: 2 },
  cta: {
    marginTop: 24,
    height: 56,
    backgroundColor: '#fff',
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ctaText: { color: '#a855f7', fontWeight: '800', fontSize: 16 },
});
export default styles;