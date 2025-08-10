import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#000',
    paddingTop: hp('1.2%'),
    paddingHorizontal: wp('5%'),
    alignSelf: 'center',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tab: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconWrapper: {
    alignItems: 'center',
  },
  underline: {
    height: hp('0.4%'),
    backgroundColor: '#C86CFA',
    width: wp('8%'),
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    marginBottom: hp('0.7%'),
  },
  addButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusCircle: {
    width: wp('12%'),
    height: wp('12%'),
    backgroundColor: '#C86CFA',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default styles;