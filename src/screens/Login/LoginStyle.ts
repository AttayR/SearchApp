import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    color:'#1F5E7C',
    fontSize: hp('3%'),
    fontWeight: 'bold',
    marginBottom: hp('2%'),
  },
  image: {
    width: wp('60%'),
    height: hp('30%'),
    marginTop: hp('2%'),

    marginBottom: hp('2%'),
  },
  innerContainer:{
    flex: 1,
    alignItems: 'center',
  },
  label: {
    fontSize: hp('2%'),
    color: '#0E42C6',
    alignSelf: 'flex-start',
    marginLeft: wp('10%'),
    marginTop: hp('5%'),

    marginBottom: hp('1%'),
  },
  input: {
    width: wp('80%'),
    height: hp('6%'),
    borderColor: '#ddd',
    color:'#646874',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: wp('4%'),
    backgroundColor: '#DAEAF9',
    marginBottom: hp('2%'),
  },
  buttonContainer: {
    width: wp('40%'),
    height: hp('6%'),
    borderRadius: 8,
    marginTop: hp('5%'),
    overflow: 'hidden',
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: hp('2%'),
    fontWeight: 'bold',
  },
});

export default styles;
