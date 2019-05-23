import React, { Component } from 'react'
import {
  Text,
  TouchableOpacity,
} from 'react-native'
import PropTypes from 'prop-types';
import styles from './styles'
import { colors } from 'theme'
import { conditionalExpression } from '@babel/types';

class Button extends Component {

  state = {
    textColor: '',
    backgroundColor: '',
    borderColor: '',
  }
  componentDidMount() {
    this.getTheme()
  }

  getTheme() {
    const { theme } = this.props

    let backgroundColor
    let textColor
    let borderColor

    switch (theme) {
      case 'success':
        textColor = colors.black
        backgroundColor = colors.success
        borderColor = colors.transparent
        break;
      case 'danger':
        textColor = colors.white
        backgroundColor = colors.danger
        borderColor = colors.transparent
        break;
      case 'void':
        textColor = colors.black
        backgroundColor = colors.transparent
        borderColor = colors.black
        break;
      default:
        textColor = colors.white
        backgroundColor = colors.black
        borderColor = colors.transparent
        break;
    }
    this.setState({
      textColor,
      backgroundColor,
      borderColor,
    })
  }

  onClick() {
    const { navigateScreen, navigation } = this.props

    if (navigateScreen != null) {
      navigation.navigate(navigateScreen)
    }

    return true;
  }

  render() {
    const {
      textColor,
      borderColor,
      backgroundColor,
    } = this.state

    const { text, style, onPress } = this.props

    return (
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={onPress}
        style={[
          { backgroundColor, borderColor },
          styles.container,
          style
        ]}
      >
        <Text style={{color: textColor}}>
          {text}
        </Text>
      </TouchableOpacity>)
  }
}

Button.propTypes = {
}

export default Button
