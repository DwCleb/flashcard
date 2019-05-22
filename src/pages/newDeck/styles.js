
import { StyleSheet } from 'react-native'
import { metrics, colors, general } from 'theme'
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
  }
})

export default styles
