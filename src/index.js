import React, { Fragment, Component } from 'react';
import { Provider } from 'react-redux';
import {
  YellowBox,
  StatusBar,
} from 'react-native';

import 'config/reactotron';
import store from 'store';
import Routes from 'routes';
import { colors } from 'theme';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
YellowBox.ignoreWarnings(['Warning: jumpToIndex(...) is deprecated', '']);

export default class App extends Component {


  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <StatusBar backgroundColor={colors.primary} barStyle="light-content" />
          <Routes />
        </Fragment>
      </Provider>
    );
  }
}
