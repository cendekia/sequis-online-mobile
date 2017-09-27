import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import Header from '../components/headers/DefaultHeader';
import { Container, Content, Text } from "native-base";

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    header: <Header {...this.props}/>,
  };

  render() {
    return (
      <Container>
        <Content style={{justifyContent: 'center', alignItems: 'center' }}>
          <Text>
            Setting screen
          </Text>
        </Content>
      </Container>
    );
  }
}
