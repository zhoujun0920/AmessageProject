import React, { Component } from 'react';
import { ImageBackground, Image, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { View } from 'react-native-animatable';

const bannerImage = require('../../../../assets/companybanner.jpg');
const comapnyLogo = require('../../../../assets/companylogo.png');

const companyBannerStyle = StyleSheet.create({
  background: {
    width, height: companyBannerHeight, alignItems: 'center', justifyContent: 'center',
  },
  icon: {
    position: 'absolute', width: companyIconWidth, tintColor: '#f0f',
  },
});

class CompanyBanner extends Component {
  constructor() {
    super();
    this.state = {
      gradient: ['#f0f', '#f0f']
    };
  }

  render() {
    return (
      <View animation="fadeInRight" delay={250} duration={700}>
        <ImageBackground
          source={bannerImage}
          style={companyBannerStyle.background}
        >
          <LinearGradient colors={this.state.gradient} style={companyBannerStyle.background} />
          <Image source={comapnyLogo} resizeMode="contain" style={companyBannerStyle.icon} />
        </ImageBackground>
      </View>
    );
  }
}

export default CompanyBanner;
