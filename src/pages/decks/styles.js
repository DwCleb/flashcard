
import { StyleSheet } from 'react-native'
import { colors, metrics } from 'theme'
import { scale } from 'theme/metrics'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  title: {
    textAlign: 'center',
    color: colors.black,
    fontSize: scale(22),
  },
  button: {
    alignItems: 'center',
    marginVertical: metrics.base.margin,
  },
  noDecks: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginVertical: metrics.base.margin * 2,
    fontSize: scale(20),
  },
})

export default styles
