import {StyleSheet} from 'react-native';
import theme from '../../components/theme';

const stylesLayout = StyleSheet.create({
  imageSize: {height: 70, width: 70, borderRadius: 10},
  cardsContainer: {
    justifyContent: 'center',
    flexDirection: 'column',
    borderColor: 'red',
    borderWidth: 1,
    margin: 10,
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
  },
  namesContainer: {
    flexDirection: 'row',
  },
  textNameSize: {fontSize: theme.fonts.TITLE_TEXT},
  emailTextSize: {fontSize: theme.fonts.TINY_TEXT},
});

export default stylesLayout;
