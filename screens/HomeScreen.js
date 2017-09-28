import React, { Component } from 'react';
import { Image, TouchableOpacity, StyleSheet } from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';
import Header from '../components/headers/DefaultHeader';
import {
  Container,
  Content,
  Row, Col, Grid,
  Card, CardItem,
  Body,
  H1, H2, H3, Text,
  Button,
  Right,
  Icon,
  List, ListItem
} from "native-base";
import Colors from '../constants/Colors';

const banner = require('../assets/contents/banner1.jpg');

class HomeScreen extends Component {
  static navigationOptions = {
    header: <Header {...this.props}/>,
  };

  render() {
    var news = [
      {
        image: banner,
        title: `Manfaatkan Waktu Sempit di Hari Libur “Kejepit”`,
        published_date: '22 September 2017',
      },
      {
        image: banner,
        title: `5 Strategi Aman untuk Menyiapkan Dana Pendidikan Anak Anda`,
        published_date: '24 July 2017',
      },
      {
        image: banner,
        title: `Sequis Online Memenangkan Indonesia Digital Innovation Award 2017`,
        published_date: '23 June 2017',
      }
    ];
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
                  <H2 style={styles.fontColor}>
                    Inovasi asuransi
                  </H2>
                  <H2 style={styles.fontColor}>
                    murah - mudah - cepat
                  </H2>
                </Body>
              </CardItem>
            </Card>
          </Row>
          <Row>
            <List
              dataArray={news}
              renderRow={(newsItem) =>
                <Card>
                <Grid>
                  <Col size={7}>
                    <Row size={4}>
                      <Col>
                        <CardItem>
                          <Body>
                            <Text style={styles.newsTitle}>
                              {newsItem.title}
                            </Text>
                          </Body>
                        </CardItem>
                      </Col>
                    </Row>
                    <Row size={1}>
                    <CardItem>
                      <Body style={styles.newsDateContainer}>
                        <Icon name='ios-calendar-outline' style={styles.newsDateIcon}/>
                        <Text style={styles.newsDate}>
                          {newsItem.published_date}
                        </Text>
                      </Body>
                    </CardItem>
                    </Row>
                  </Col>
                  <Col size={3}>
                    <CardItem style={styles.newsThumbnailsRight}>
                    <Image
                    source={newsItem.image}
                    style={styles.newsImageCardSize}
                    />
                    </CardItem>
                  </Col>
                </Grid>
                </Card>
              }>
            </List>
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
  defaultImageCardSize: {height: 250, flex: 1, width: null},
  defaultHoverTextCard: {
    backgroundColor: 'rgba(153, 153, 153, 0.6)',
    position: 'absolute',
    top: 0
  },
  marginContent: {margin: 5},
  newsImageCardSize: {height: 115, flex: 1, width: null},
  newsThumbnailsRight: {paddingTop:0, paddingRight:0, paddingBottom:0},
  newsTitle: {},
  newsDateContainer: {
    width: 100,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  newsDateIcon: {marginRight: 10, fontSize: 14, color: '#666'},
  newsDate: {fontSize: 14, color: '#999'}
});

export default HomeScreen;
