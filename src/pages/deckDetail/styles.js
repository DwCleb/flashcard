
import { StyleSheet } from 'react-native'
import { metrics, colors } from 'theme'
import { scale } from 'theme/metrics'

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
  },
  width: {
    width: metrics.screen.width,
    marginHorizontal: scale(20),
  },
  content: {
    backgroundColor: '#F7F4F4',
    borderColor: '#030303',
    alignSelf: 'center',
    borderWidth: scale(1.5),
    borderRadius: scale(26),
    height: scale(450),
    marginTop: scale(30),
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: scale(20),
    width: scale(300),
  },
  contentInfo: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    alignContent: 'center',
    padding: metrics.base.padding,
    flex: 6,
  },
  info: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    alignContent: 'center',
    padding: metrics.base.padding,
    flex: 1,
  },
  title: {
    fontSize: scale(24),
    paddingBottom: scale(20),
  },
  cardNumbersContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    alignContent: 'center',
    flex: 3,
  },
  cardNumbers: {
    textAlign: 'center',
    fontSize: scale(24),
    color: colors.secondary,
  },
  card: {
    textAlign: 'center',
    fontSize: scale(18),
    color: colors.black,
  },
  footer: {
    justifyContent: 'flex-end',
    height: scale(50),
    flex: 1,
    flexDirection: 'row',
  },
})

export default styles
