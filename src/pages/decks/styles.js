
import { StyleSheet } from 'react-native'
import { colors } from 'theme'
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
    marginVertical: 20,
  },
})

export default styles
