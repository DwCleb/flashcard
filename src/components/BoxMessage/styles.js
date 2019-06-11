import { StyleSheet } from 'react-native'
import { metrics, colors } from 'theme'

const styles = StyleSheet.create({
  messageView: {
    marginVertical: 30,
    backgroundColor: colors.white,
    borderWidth: 1,
    padding: metrics.base.padding * 1.2,
    borderRadius: metrics.base.radius * 2,
    borderColor: colors.light,
    justifyContent: 'center',
    alignSelf: 'center',
    width: metrics.screen.width * 0.7,
    marginTop: metrics.base.margin * 2,
  },
  messageText: {
    textAlign: 'center',
    color: colors.darker,
    fontSize: 18,
    marginVertical: 5,
  },
})

export default styles
