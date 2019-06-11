import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const BoxMessage = (props) => {
  const { isVisible, correct, incorrect } = props;
  return (
    <View>
      {isVisible
        ? (
          <View style={styles.messageView}>
            <Text style={styles.messageText}>You finish the test!</Text>
            <Text style={styles.messageText}>You answer correctly {correct} and incorrectly {incorrect} questions.</Text>
            <Text style={styles.messageText}>You got {(correct * 100 / (correct + incorrect)).toFixed(0)}%</Text>
          </View>
        )
        : <Text />
      }
    </View>
  );
};

BoxMessage.propTypes = {
  correct: PropTypes.number.isRequired,
  incorrect: PropTypes.number.isRequired,
  isVisible: PropTypes.bool.isRequired,
};

export default BoxMessage;
