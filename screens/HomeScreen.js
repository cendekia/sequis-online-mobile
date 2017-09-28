import React, { Component } from 'react';
import { Image, TouchableOpacity, StyleSheet } from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';
import Header from '../components/headers/DefaultHeader';
import {
  Container,
  Content,
  Row,
  Card,
  CardItem,
  Body,
  H1, H2, H3, Text,
  Button,
  Right,
  Icon,
  ListItem
} from "native-base";
import Colors from '../constants/Colors';

const banner = require('../assets/contents/banner1.jpg');

class HomeScreen extends Component {
  static navigationOptions = {
    header: <Header {...this.props}/>,
  };

  render() {
    return (
      <Container>
        <Content style={styles.marginContent}>
          <Row>
            <Card style={styles.defaultCardBg}>
              <CardItem cardBody>
                <Image
                  source={banner}
                  style={styles.defaultImageCardSize}
                />
              </CardItem>
              <CardItem style={{
                backgroundColor: Colors.tintColor
              }}>
              <TouchableOpacity
                onPress={() => alert("buy clicked")}
                style={styles.navBarLeftButton}
              >
                <Icon name='ios-cart' size={20} style={styles.fontColor}/>
                <Text style={styles.fontColor}>
                  Beli Sekarang
                </Text>
              </TouchableOpacity>
              </CardItem>
              <CardItem style={styles.defaultHoverTextCard}>
                <Body>
                  <H1 style={styles.fontColor}>
                    Inovasi asuransi murah - mudah - cepat
                  </H1>
                </Body>
              </CardItem>

            </Card>
          </Row>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  navBarLeftButton: {
    paddingLeft: 8,
    width: 100,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  fontColor: { color: 'white' },
  defaultCardBg: { backgroundColor: 'transparent', borderColor: 'transparent' },
  defaultImageCardSize: {height: 300, flex: 1},
  defaultHoverTextCard: {
    backgroundColor: 'rgba(153, 153, 153, 0.6)',
    position: 'absolute',
    top: 0
  },
  marginContent: {margin: 5}
});

export default HomeScreen;
