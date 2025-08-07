import React, {
  useMemo,
  useState,
  forwardRef,
  useImperativeHandle,
  useRef,
} from 'react';
import { StyleSheet, Dimensions, Text } from 'react-native';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import RequestTab from './Tabs/RequestTab';
import InvitedTab from './Tabs/InvitedTab';
import CoHostsTab from './Tabs/CoHostTab';
import BottomSheetTabs from './BottomSheetTab';

const { height } = Dimensions.get('window');
const invitedUsers = [
  {
    id: '1',
    username: 'jesica_joseph',
    fullname: 'Jesica Joseph',
    image: require('../../../assets/images/ProfileImage.png'),
  },
  {
    id: '2',
    username: "jenny_d'souza",
    fullname: "Jenny D'souza",
    image: require('../../../assets/images/ProfileImage.png'),
  },
  {
    id: '3',
    username: 'WilsonDukes',
    fullname: 'Wilson Dukes',
    image: require('../../../assets/images/ProfileImage.png'),
  },
];

const LiveBottomSheet = forwardRef((props, ref) => {
  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ['60%'], []);
  const [activeTab, setActiveTab] = useState('Requests');

  // Expose `expand()` and `close()` to parent
  useImperativeHandle(ref, () => ({
    expand: () => {
      bottomSheetRef.current?.expand();
    },
    close: () => {
      bottomSheetRef.current?.close();
    },
  }));

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Requests':
        return <RequestTab />;
      case 'Audience':
        return <InvitedTab />;
      case 'Invited':
        return <InvitedTab UsersList={invitedUsers} />;
      case 'Co-hosts':
        return <CoHostsTab />;
      default:
        return null;
    }
  };

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={-1}
      snapPoints={snapPoints}
      enablePanDownToClose
    >
      <BottomSheetView style={styles.container}>
        <Text style={styles.title}>Members</Text>
        <BottomSheetTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <BottomSheetView style={styles.tabContent}>
          {renderTabContent()}
        </BottomSheetView>
      </BottomSheetView>
    </BottomSheet>
  );
});

export default LiveBottomSheet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 16,
  },
  tabContent: {
    flex: 1,
    marginTop: 10,
  },
});
