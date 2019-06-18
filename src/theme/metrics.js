import { Dimensions, Platform } from 'react-native'

const { width, height } = Dimensions.get('window')
// Guideline sizes are based on iPhone 6 screen
const guidelineBaseWidth = 375
// por enquanto não vamos usar o scale no projeto.
export const scale = size => (width / guidelineBaseWidth) * size

const statusBarHeight =
  Platform.OS === 'ios'
    ? scale(20)
    : StatusBar.currentHeight
      ? StatusBar.currentHeight
      : 0

const safeArea =
  Platform.OS === 'ios'
    ? scale(20)
    : 0

const navigationHeaderHeight = Platform.OS === 'ios' ? 76 : 83

const hitSlop = {
  top: 6,
  bottom: 6,
  left: 6,
  right: 6,
}

const screen = {
  width: width < height ? width : height,
  height: width < height ? height : width,
}

const base = {
  padding: scale(20),
  margin: scale(20),
  radius: scale(5),
}

// Used via Metrics.baseMargin
export default {
  text: {
    letterSpacing: scale(0.25),
  },
  statusBarHeight,
  safeArea,
  navigationHeaderHeight,
  hitSlop,
  screen,
  base,
}

