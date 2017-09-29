import React, { Component } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import Header from '../components/headers/StackHeader';
import { Container, Content, Text } from "native-base";

class NewsScreen extends Component {
  constructor(props) {
        super(props)

        console.log(this.props)
        // -> { icon: 'home', … }
    }
  static navigationOptions = ({navigation}) => ({
    header: <Header
        title='News'
        navigation={navigation}
      />,
  });

  render() {
    return (
      <Container>
        <Content style={{justifyContent: 'center', alignItems: 'center' }}>
          <Text>
            News detail screen
          </Text>
        </Content>
      </Container>
    );
  }
}

export default NewsScreen;
