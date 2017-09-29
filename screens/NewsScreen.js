import React, { Component } from 'react';
import { ScrollView, StyleSheet, Image } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import Header from '../components/headers/StackHeader';
import {
  Container, Content, Text, H1, H2, H3,
  Row, Col, Grid, Card, CardItem, Body, Icon
} from "native-base";



class NewsScreen extends Component {
  constructor(props) {
    super(props)

  }
  static navigationOptions = ({navigation}) => ({
    header: <Header
        title='News'
        navigation={navigation}
      />,
  });

  render() {
    let news = this.props.navigation.state.params;

    return (
      <Container>
        <Content>
          <Row>
            <Grid>
            <Image
              source={news.image}
              style={{height: 200, width: null, flex: 1}}
            />
            </Grid>
          </Row>
          <Row>
            <Col>
              <Card>
                <CardItem>
                  <H3>
                    {news.title}
                  </H3>
                </CardItem>
                <CardItem>
                  <Body style={styles.newsDateContainer}>
                    <Icon name='ios-calendar-outline' style={styles.newsDateIcon}/>
                    <Text style={styles.newsDate}>
                      {news.published_date}
                    </Text>
                  </Body>
                </CardItem>
                <CardItem>
                  <Text>
                    {news.contents}
                  </Text>
                </CardItem>
              </Card>
            </Col>
          </Row>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
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

export default NewsScreen;
