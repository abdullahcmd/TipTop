
import { StyleSheet } from 'react-native';
const PURPLE = '#8E5BFF';
const BUBBLE_BG = '#ECECEC';

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#fff' },

  header: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 12, paddingTop: 4, paddingBottom: 8, borderBottomWidth: 1, borderColor: '#eee' },
  icon: { fontSize: 20 },
  iconBtn: { marginLeft: 12 },
  headerAvatar: { width: 34, height: 34, borderRadius: 17, marginLeft: 8, marginRight: 10 },
  headerName: { fontSize: 16, fontWeight: '700' },
  headerSub: { color: '#6c6c6c', fontSize: 12 },

  bubbleRow: { marginVertical: 6, flexDirection: 'row' },
  left: { justifyContent: 'flex-start' },
  right: { justifyContent: 'flex-end' },
  bubble: { paddingVertical: 10, paddingHorizontal: 12, borderRadius: 16, maxWidth: '78%' },
  bubbleMe: { backgroundColor: PURPLE, borderBottomRightRadius: 4 },
  bubbleOther: { backgroundColor: BUBBLE_BG, borderBottomLeftRadius: 4 },
  msgText: { fontSize: 15, lineHeight: 20 },

  voice: { flexDirection: 'row', alignItems: 'center', paddingVertical: 10, paddingHorizontal: 12, borderRadius: 16, maxWidth: '78%' },
  voiceTime: { color: '#fff', marginLeft: 8 },

  inputWrap: {
    flexDirection: 'row', alignItems: 'center', padding: 8,
    borderTopWidth: 1, borderColor: '#eee', backgroundColor: '#fff'
  },
  plus: {
    width: 32, textAlign: 'center', fontSize: 22,
  },
  input: {
    flex: 1, backgroundColor: '#F3F3F5', borderRadius: 22, height: 42, paddingHorizontal: 16, marginHorizontal: 8,
  },
  inputIcon: { fontSize: 18, marginHorizontal: 6 },
});
export default styles;