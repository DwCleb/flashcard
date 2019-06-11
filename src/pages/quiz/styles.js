
import { StyleSheet } from 'react-native'
import { metrics, general } from 'theme'
import { scale } from 'theme/metrics'

const styles = StyleSheet.create({
  question: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: scale(20),
  },
  questionText: {
    fontSize: scale(20),
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    marginTop: 0,
  },
  cardContainer: {
    width: metrics.screen.width,
    marginHorizontal: scale(20),
    height: 470,
    marginTop: 0,
  },
  card: {
    backgroundColor: '#F7F4F4',
    borderColor: '#030303',
    alignSelf: 'center',
    borderWidth: scale(1.5),
    borderRadius: scale(26),
    height: scale(450),
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: scale(20),
    width: scale(300),
  },
  content: {
    backgroundColor: '#F7F4F4',
    borderColor: '#030303',
    alignSelf: 'center',
    borderWidth: scale(1.5),
    borderRadius: scale(26),
    height: scale(450),
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
  footer: {
    justifyContent: 'flex-end',
    height: scale(50),
    flex: 1,
    flexDirection: 'row',
  },
})

export default styles
