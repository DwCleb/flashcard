import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';

if (__DEV__) {
  const tron = Reactotron
    .configure({ host: '192.168.1.5' }) // D E V
    .useReactNative()
    .use(reactotronRedux())
    .use(sagaPlugin())
    .connect();

  console.tron = tron;

  tron.clear();
}
