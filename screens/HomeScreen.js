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
        route: 'news/detail/1',
        image: require('../assets/contents/kejepit.jpg'),
        title: `Manfaatkan Waktu Sempit di Hari Libur “Kejepit”`,
        published_date: '22 September 2017',
        contents: `
        Tidak punya waktu dan tidak punya uang, dua hal yang paling sering menjadi alibi untuk berkata “nanti-nanti aja deh!”. Namun kalau dipikir-pikir lagi, sebenarnya masalah yang lebih besar adalah tidak punya waktu. Terutama bagi masyarakat urban yang harus membagi waktu antara pekerjaan, keluarga, dan teman. Ada benarnya ungkapan bijak yang berkata bahwa uang bisa dicari, tapi waktu yang hilang tidak bisa dibeli lagi. Karenanya, bukan hanya manajemen keuangan yang perlu diperhatikan, tapi juga manajemen waktu.

        Namun sayangnya, ditengah kesibukan dan prioritas yang ada, sulit sekali mencari waktu kosong. Akhir pekan yang “hanya” 2 hari dalam seminggu pun seringkali diprotes dan dianggap kurang. Karena itu, libur long weekend dan hari libur kejepit terasa seperti suatu berkah tersendiri. Bicara tentang yang kedua, sepertinya hanya Indonesia yang mengenal istilah ini. Terkenal dengan nama Harpitnas (Hari Kejepit Nasional), istilah ini mengacu kepada hari kerja yang terletak di antara dua hari libur. Hari kerja dan hari libur yang saling jepit ini ibarat pisau bermata dua. Menyenangkan, karena ada satu hari libur untuk melarikan diri sejenak dari aktivitas pekerjaan. Namun di sisi lain, tidak sedemikian menyenangkan karena libur yang sangat singkat dan besok harinya sudah harus kembali bekerja, padahal rasanya belum puas beristirahat seharian penuh.`
      },
      {
        route: 'news/detail/2',
        image: require('../assets/contents/anak.jpg'),
        title: `5 Strategi Aman untuk Menyiapkan Dana Pendidikan Anak Anda`,
        published_date: '24 July 2017',
        contents: `
        Memperingati Hari Anak Nasional 2017 yang jatuh pada tanggal 23 Juli, Menteri Koordinator bidang Pembangunan Manusia dan Kebudayaan, Puan Maharani, menekankan pentingnya pendidikan agar anak-anak Indonesia memiliki jiwa yang mantap, berbudi luhur, dan berakhlak mulia. Beliau menyinggung pula mengenai masalah ketahanan keluarga karena dari keluarga lah anak-anak memulai segalanya. Pesan ini menjadi pengingat bagi para orang tua agar pendidikan anak menjadi prioritas sejak dini. Namun ada banyak tantangan untuk mewujudkan pendidikan yang terbaik bagi anak-anak bangsa, salah satunya adalah biaya pendidikan yang terus meningkat.

        Badan Pusat Statistik (BPS) mencatat, kenaikan biaya pendidikan di Indonesia mencapai 10% per tahun. Sementara di sisi lain, menurut survei dari Kelly Services Indonesia, rata-rata kenaikan gaji karyawan di Indonesia pada tahun 2016 berada pada kisaran 7-10%. Artinya, perlu strategi tersendiri untuk mengencangkan ikat pinggang agar pendidikan anak tetap terjamin, tanpa mengorbankan aspek-aspek biaya hidup lainnya.`
      },
      {
        route: 'news/detail/3',
        image: require('../assets/contents/award.jpg'),
        title: `Sequis Online Memenangkan Indonesia Digital Innovation Award 2017`,
        published_date: '23 June 2017',
        contents: `
        Sequis mendapatkan penghargaan Indonesia Digital Innovation Award 2017 kategori Perusahaan Asuransi Jiwa dengan Aset di atas Rp 10 Triliun. Penghargaan diterima oleh Josafat Timotius, Vice President Information Technology PT A.J. Sequis Life pada hari Jumat, 16 Juni 2017 di Grand Ballroom Pullman Hotel, Jakarta.

        Indonesia Digital Innovation Award 2017 merupakan bentuk apresiasi yang diberikan oleh Majalah Warta Ekonomi kepada perusahaan-perusahaan di Indonesia yang mampu menghasilkan inovasi terbaik dalam hal produk dan layanan yang menerapkan teknologi digital sehingga dapat terus bersaing di tengah perkembangan industri. Sequis terpilih menjadi pemenang lewat Sequis Online, inovasi digital yang memungkinkan nasabah untuk memilih dan membeli produk asuransi secara langsung via online. Ke depannya, Sequis Online akan terus bertransformasi dan menghadirkan inovasi-inovasi berikutnya agar nasabah semakin dipermudah untuk mendapatkan produk asuransi dengan mudah dan cepat.`
      }
    ];

    const { navigate } = this.props.navigation;

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
                <TouchableOpacity
                  onPress={() => navigate('NewsDetail', newsItem)}
                >
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
                </TouchableOpacity>
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
