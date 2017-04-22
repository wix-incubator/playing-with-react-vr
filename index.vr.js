import React from 'react';
import {Animated, AppRegistry, asset, StyleSheet, Pano, Text, View} from 'react-vr';

export default class World extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('pano.jpg')} />
        <AnimatedText />
      </View>
    );
  }
}

class AnimatedText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      yRotation: new Animated.Value(0),
    };
  }

  componentDidMount() {
    Animated.timing(this.state.yRotation, {
      duration: 30000,
      toValue: 930,
    }).start();
  }

  render() {
    return (
      <Animated.Text
        style={{
          layoutOrigin: [0.5, 0.5],
          transform: [{translate: [0, 0, -1]}, {scale: 2}, {rotateY: this.state.yRotation}],
        }}
      >
        Hello World! :)
      </Animated.Text>
    );
  }
}

AppRegistry.registerComponent('WelcomeToVR', () => World);
