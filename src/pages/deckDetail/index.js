import React, { Component } from 'react'
import { View, Text, } from 'react-native'
import PropTypes from 'prop-types';
import VerticalSlideAnimation from 'components/vertical-slide-animation'
import Button from 'components/Button'
import styles from './styles'
import { scale } from '../../theme/metrics';

class DeckDetail extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('card').title,
  });

  componentWillMount() {
    const { navigation } = this.props;
    this.card = navigation.getParam('card')
  }

  onNavigate = (screen) => {
    const { navigation } = this.props;
    navigation.navigate(screen)
  }

  render() {
    const { title } = this.card
    return (
      <View style={styles.container}>
        <VerticalSlideAnimation>
          <View style={styles.content}>
            <View style={styles.contentInfo}>
              <View style={styles.cardNumbersContainer}>
                <Text style={styles.title}>
                  {title}
                </Text>
                <Text style={styles.cardNumbers}>
                  {3}
                </Text>
                <Text style={styles.card}>
                  cards
                </Text>
              </View>
            </View>
            <View style={styles.footer}>
              <Button
                text="Add Card"
                theme="void"
                onPress={() => this.onNavigate("AddCard")}
                style={styles.addCard}
              />
              <Button
                text="Start Quiz"
                onPress={() => this.onNavigate("Quiz")}
                style={styles.startQuiz}
              />
            </View>
          </View>
        </VerticalSlideAnimation>
      </View>
    )
  }
}

DeckDetail.propTypes = {
}

export default DeckDetail
