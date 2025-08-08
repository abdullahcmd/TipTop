import React, {
  useMemo,
  useState,
  forwardRef,
  useImperativeHandle,
  useRef,
} from 'react';
import { StyleSheet, Text } from 'react-native';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import RequestTab from './Tabs/RequestTab';
import InvitedTab from './Tabs/InvitedTab';
import CoHostsTab from './Tabs/CoHostTab';
import BottomSheetTabs from './BottomSheetTab';
import { hp } from '../../../utils/helpers/responsive';
import { invitedUsers } from '../../../utils/DummyData/DummyData';

const LiveBottomSheet = forwardRef((props, ref) => {
  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ['60%'], []);
  const [activeTab, setActiveTab] = useState('Requests');

  useImperativeHandle(ref, () => ({
    expand: () => bottomSheetRef.current?.expand(),
    close: () => bottomSheetRef.current?.close(),
  }));

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Requests':
        return <RequestTab />;
      case 'Audience':
        return (
          <InvitedTab
            SearchBar={false}
            UsersList={invitedUsers}
            showButton={false}
          />
        );
      case 'Invited':
        return <InvitedTab UsersList={invitedUsers} ButtonText="Cancel" />;
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
      {/* Static header area */}
      <BottomSheetView style={styles.container}>
        <Text style={styles.title}>Members</Text>
        <BottomSheetTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      </BottomSheetView>

      {/* Scrollable tab content */}
      <BottomSheetView style={styles.tabContent}>
        {renderTabContent()}
      </BottomSheetView>
    </BottomSheet>
  );
});

export default LiveBottomSheet;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingBottom: 8,
    marginBottom: hp(19),
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 16,
  },
  tabContent: {
    flex: 1,
    marginTop: hp(15),
  },
});
