import { StyleSheet } from 'react-native';
const PURPLE = '#8E5BFF';
const styles = StyleSheet.create({
    safe: { flex: 1, backgroundColor: '#F5F5F7' },

    header: {
        flexDirection: 'row', alignItems: 'center',
        paddingHorizontal: 16, paddingTop: 4, paddingBottom: 8,
        justifyContent:"space-between"
    },
    headercol: {
        // flexDirection: 'column',
        // paddingHorizontal: 16, paddingTop: 4, paddingBottom: 8,
        // justifyContent:"space-between"
    },
    icon: { fontSize: 20 },
    iconBtn: { marginLeft: 16 },
    headerTitle: { flex: 1, fontSize: 32, fontWeight: '700', marginLeft: 8 },
    headerRight: { flexDirection: 'row', alignItems: 'center' },

    tabs: { flexDirection: 'row', paddingHorizontal: 16, marginTop: 8, width: "100%", justifyContent: "space-between" },
    tabItem: { marginRight: 24, alignItems: 'center',width:"48%" },
    tabText: { color: '#777', fontSize: 16, fontWeight: '600' },
    tabTextActive: { color: '#000', fontSize: 16, fontWeight: '700' },
    tabUnderline: { marginTop: 6, height: 2, width: 44, backgroundColor: PURPLE, borderRadius: 2,width:"100%" },

    row: {
        flexDirection: 'row', alignItems: 'center',
        backgroundColor: '#fff', borderRadius: 16, padding: 12, marginTop: 12,
    },
    avatarWrap: { width: 52, height: 52, marginRight: 12 },
    avatar: { width: 52, height: 52, borderRadius: 26, marginRight: 12 },
    dot: {
        position: 'absolute', bottom: 2, right: 2,
        width: 10, height: 10, borderRadius: 5, backgroundColor: '#2ecc71',
        borderWidth: 2, borderColor: '#fff'
    },
    name: { fontSize: 16, fontWeight: '700', marginBottom: 2 },
    msg: { color: '#6b6b6b' },
    sub: { marginTop: 2 },
    time: { color: '#8e8e8e', fontSize: 12 },

    badge: {
        backgroundColor: PURPLE, borderRadius: 10, minWidth: 22, height: 20,
        alignItems: 'center', justifyContent: 'center', paddingHorizontal: 6,
    },
    badgeText: { color: '#fff', fontSize: 12, fontWeight: '700' },
});
export default styles;