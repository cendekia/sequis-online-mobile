import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';
import Header from '../components/headers/DefaultHeader';
import { Container, Content, Text } from "native-base";

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: <Header {...this.props}/>,
  };

  render() {
    return (
      <Container>
        <Content style={{justifyContent: 'center', alignItems: 'center' }}>
          <Text>
            Home screen
          </Text>
        </Content>
      </Container>
    );
  }


}
