import React, { Component } from 'react'
import {
  Text,
  TouchableOpacity,
} from 'react-native'
import PropTypes from 'prop-types'
import styles from './styles'
import { colors } from 'theme'
import { scale } from 'theme/metrics'

class Button extends Component {
  state = {
    themeStyle: {},
    typeStyle: {},
  }

  componentDidMount() {
    this.getTheme()
    this.getType()
  }

  getTheme() {
    const { theme } = this.props

    let themeStyle = {}

    switch (theme) {
      case 'success':
        themeStyle = {
          textColor: colors.white,
          backgroundColor: colors.success,
          borderColor: colors.transparent,
          fontSize: scale(15),
        }
        break
      case 'danger':
        themeStyle = {
          textColor: colors.white,
          backgroundColor: colors.danger,
          borderColor: colors.transparent,
          fontSize: scale(15),
        }
        break
      case 'void':
        themeStyle = {
          textColor: colors.black,
          backgroundColor: colors.whiteTransparent,
          borderColor: colors.black,
        }
        break
      case 'answer':
        themeStyle = {
          textColor: colors.danger,
          backgroundColor: colors.whiteTransparent,
          borderColor: colors.danger,
          fontWeight: '600',
        }
        break
      default:
        themeStyle = {
          textColor: colors.white,
          backgroundColor: colors.black,
          borderColor: colors.transparent,
        }
        break
    }
    this.setState({ themeStyle })
  }

  getType() {
    const { type } = this.props

    let typeStyle = {}

    switch (type) {
      case 'borderedBottomFull':
        typeStyle = {
          width: '100%',
          height: '100%',
          borderBottomLeftRadius: scale(24),
          borderBottomRightRadius: scale(24),
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
        }
        break
      case 'borderedBottomLeft':
        typeStyle = {
          width: '50%',
          height: '100%',
          borderBottomLeftRadius: scale(24),
          borderBottomRightRadius: 0,
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
        }
        break
      case 'borderedBottomRight':
        typeStyle = {
          width: '50%',
          height: '100%',
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: scale(24),
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
        }
        break

      default:
        typeStyle = {
          width: '50%'
        }
        break
    }


    this.setState({ typeStyle })
  }

  onClick() {
    const { navigateScreen, navigation } = this.props

    if (navigateScreen != null) {
      navigation.navigate(navigateScreen)
    }

    return true
  }

  render() {
    const { themeStyle, typeStyle } = this.state

    const { text, style, onPress } = this.props

    return (
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={onPress}
        style={[
          styles.container,
          typeStyle,
          themeStyle,
          style,
        ]}
      >
        <Text style={{
          color: themeStyle.textColor,
          fontSize: themeStyle.fontSize,
        }}>
          {text}
        </Text>
      </TouchableOpacity>)
  }
}

Button.propTypes = {
}

export default Button
