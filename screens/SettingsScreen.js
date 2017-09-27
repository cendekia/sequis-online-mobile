import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import Header from '../components/headers/DefaultHeader';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    header: <Header {...this.props}/>,
  };

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return <ExpoConfigView />;
  }
}
