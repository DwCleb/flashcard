import { StyleSheet } from 'react-native';

import { metrics, colors, general } from 'theme';
import { scale } from '../../theme/metrics';

const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    justifyContent: 'center',
    width: metrics.screen.width,
    height: scale(120),
    padding: metrics.base.padding,
    paddingRight: 0,
    borderWidth: scale(0.8),
    borderColor: colors.grey,
    flexDirection: 'column',
  },
  content: {
    justifyContent: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  cardTitleContainer: {
    alignSelf: 'center',
    flex: 8,
  },
  cardTitle: {
    textAlign: 'left',
    fontSize: scale(22),
  },
  cardNumbersContainer: {
    alignItems: 'center',
    flexDirection: 'column',
    flex: 3,
    marginRight: scale(-30),
  },
  cardNumbers: {
    textAlign: 'center',
    fontSize: scale(22),
    color: colors.secondary,
  },
  card: {
    textAlign: 'center',
    fontSize: scale(15),
    color: colors.black,
  },
  cardIcon: {
    alignSelf: 'flex-start',
    alignItems: 'flex-end',
    flex: 1,
    flexDirection: 'column',
    paddingRight: metrics.base.padding * 0.5,
    marginTop: scale(-22),
  },
  
});

export default styles;
