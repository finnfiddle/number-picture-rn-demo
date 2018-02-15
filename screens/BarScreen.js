import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Dimensions,
} from 'react-native';

import Bar from '../charts/Bar';
import { generateNodes } from '../util';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  state = { nodes: generateNodes() };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ nodes: generateNodes() });
    }, 2000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { width, height } = Dimensions.get('window');
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={{ top: 50 }}>
            <Bar width={width} height={height - 100} nodes={this.state.nodes} />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
