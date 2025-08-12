import { StyleSheet } from 'react-native';
const PURPLE = '#8E5BFF';
const styles = StyleSheet.create({
    safe: { flex: 1, backgroundColor: '#F5F5F7' },
    header: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, paddingTop: 4, paddingBottom: 8 },
    icon: { fontSize: 20 },
    iconBtn: { marginLeft: 16 },
    headerTitle: { flex: 1, fontSize: 32, fontWeight: '700', marginLeft: 8 },
    headerRight: { flexDirection: 'row', alignItems: 'center' },

    tabs: { flexDirection: 'row', paddingHorizontal: 16, marginTop: 8 },
    tabItem: { marginRight: 24 },
    tabItemActive: { marginRight: 24, alignItems: 'flex-start' },
    tabText: { color: '#777', fontSize: 16, fontWeight: '600' },
    tabTextActive: { color: '#000', fontSize: 16, fontWeight: '700' },
    tabUnderline: { marginTop: 6, height: 2, width: 44, backgroundColor: PURPLE, borderRadius: 2 },

    row: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', borderRadius: 16, padding: 12, marginTop: 12 },
    sep: { height: 0 },
    avatar: { width: 48, height: 48, borderRadius: 24, marginRight: 12 },
    name: { fontSize: 16, fontWeight: '700' },
    sub: { marginTop: 2 },
    time: { color: '#8e8e8e', fontSize: 12 },
});
export default styles;