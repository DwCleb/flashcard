import { StyleSheet } from 'react-native';

import { metrics, colors, general } from 'theme';
import { scale } from '../../theme/metrics';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: scale(0.8),
    width: metrics.screen.width * 0.8,
    fontSize: scale(15),
    height: 50,
    borderRadius: metrics.base.radius,
  },
  
});

export default styles;
