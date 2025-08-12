
import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#f1f1f1' },
  card: {
    flex: 1,
    overflow: 'hidden',
    backgroundColor: '#000',
  },
  topBtn: {
    position: 'absolute',
    top: 12,
    height: 34,
    width: 34,
    borderRadius: 17,
    backgroundColor: 'rgba(0,0,0,0.35)',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
  },
  pipWrap: {
    position: 'absolute',
    right: 12,
    top: 84,
    width: 112,
    height: 148,
  },
  pipShadow: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 12,
    backgroundColor: 'transparent',
    shadowColor: '#000',
    shadowOpacity: 0.35,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 6,
  },
  pip: {
    flex: 1,
    borderRadius: 12,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#fff',
    backgroundColor: '#222',
  },
  pipOff: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  controls: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 24,
    paddingHorizontal: 28,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  circleBtn: {
    height: 56,
    width: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.35)',
    backdropFilter: 'blur(10px)', // ignored on RN but harmless; keeps iOS web parity look
  },
  endBtn: {
    height: 64,
    width: 64,
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ff4155',
  },
});
export default styles;