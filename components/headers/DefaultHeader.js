import React, { Component } from 'react';
import { STATUS_BAR_HEIGHT } from '../../constants';
import { Ionicons } from '@expo/vector-icons';
import {
  Container,
  Header,
  Content,
  Left,
  Right,
  Body,
  Title,
  Subtitle,
  Button,
  StyleProvider
} from "native-base";
import { Platform, Image } from 'react-native';
import Colors from '../../constants/Colors';

class DefaultHeader extends Component {
  defaultState = {
    showButton: true,
    action: () => alert("menu clicked"),
    style: {
      container: {
        height: Platform.OS ==='android' ? 25 : 45
      },
      iconName: "ios-contact",
      fontSize: 30,
      icon: {
        color: "#fff"
      }
    }
  };

  render() {
    function renderLeft(state) {
      if (state.showButton) {
        return <Left style={state.style}>{renderButton(state)}</Left>;
      } else {
        return <Left />;
      }
    }
    function renderButton(state) {
      return  <Button transparent onPress={state.action}>
                <Ionicons name={state.style.iconName} size={state.style.fontSize} style={state.style.icon} />
              </Button>;
    }

    return (
      <Header
        style={{
          height: Platform.OS ==='android' ? 30 + STATUS_BAR_HEIGHT : 65
        }}
        androidStatusBarColor = {Colors.tintColor}
        backgroundColor = {Colors.tintColor}
        iosBarStyle="light-content"
      >
        { !this.props.leftButton && renderLeft(this.defaultState)}
        { this.props.leftButton && renderLeft(this.props.leftButton)}

        <Body style={{ height: Platform.OS ==='android' ? 25 + STATUS_BAR_HEIGHT : 35 }}>
          {/*<Title style={{ color: "#FFF", width: 200, marginTop: 8 }}>{this.props.title}</Title>*/}
          <Image
            source={require('../../assets/icons/loading-icon-white.png')}
            style={{ width: 143, height: 29, marginTop: 6 }}
          />
        </Body>

        <Right />

      </Header>
    );
  }
}

export default DefaultHeader;
