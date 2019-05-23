
import { StyleSheet } from 'react-native'
import { metrics, colors, general } from 'theme'
import { scale } from 'theme/metrics'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: metrics.base.padding,
    paddingTop: metrics.base.padding * 3,
  },
  title: {
    textAlign: 'left',
    color: colors.black,
    fontSize: scale(15),
    marginVertical: metrics.base.margin * 0.2,
  },
  button: {
    alignItems: 'center',
    marginVertical: 20,
  },
  containerTitle: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    alignSelf : 'flex-start',
    marginHorizontal: metrics.base.margin * 1.2,
  },
  containerInput: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: metrics.base.margin,
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
