import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import Header from '../components/headers/DefaultHeader';
import { Container, Content, Text } from "native-base";

export default class ChatsScreen extends React.Component {
  static navigationOptions = {
    header: <Header {...this.props}/>,
  };

  render() {
    return (
      <Container>
        <Content style={{justifyContent: 'center', alignItems: 'center' }}>
          <Text>
            Chat Bot screen
          </Text>
        </Content>
      </Container>
    );
  }
}
