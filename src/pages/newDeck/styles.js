
import { StyleSheet } from 'react-native'
import { metrics, colors } from 'theme'
import { scale } from 'theme/metrics'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: metrics.base.padding,
  },
  title: {
    padding: metrics.base.padding,
    marginHorizontal: metrics.base.margin * 4,
    textAlign: 'center',
    color: colors.black,
    fontSize: scale(22),
  },
  button: {
    alignItems: 'center',
    marginVertical: 20,
  },
  containerInput: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: metrics.base.margin,
  },
  input: {
    borderWidth: scale(0.8),
    width: metrics.screen.width * 0.8,
    fontSize: scale(15),
    height: scale(45),
    borderRadius: metrics.base.radius,
    padding: metrics.base.padding * 0.5,
  },
})

export default styles
