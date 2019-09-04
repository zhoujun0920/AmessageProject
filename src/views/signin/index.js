import React from 'react';
import {
  TouchableOpacity,
  Keyboard,
  Platform,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View
} from 'react-native';

//3rd party libraries
import {Actions} from 'react-native-router-flux';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import KeyboardAwareScrollView from 'react-native-keyboard-aware-scroll-view';

// View Elements
import InfoCell from './elements/info-cell';
import CompanyBanner from './elements/companyBanner-cell';

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  headerText: {
    textAlign: 'center',
    fontSize: 23,
    fontWeight: 'bold',
  },
  headerView: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomView: {
    flex:3,
  },
  statusBar: {
    height: 24,
  },
  settings: {
    flex: 1,
    alignItems: 'flex-end',
  },
  signInButton: {
    backgroundColor: '#24A0ED',
    borderRadius: 10,
    height: 40,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signInText: {
    color: 'white',
    fontWeight: 'bold'
  },
  signUpText: {
    color: 'gray',
    fontSize: 11,
    padding: 15
  },
  linearGradient: {
    height: 44,
    width: 200,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  touchable: {
    backgroundColor: 'transparent',
  }
})

class SignInView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.onChangeEmail = this._onChangeEmail.bind(this);
    this.onChangePassword = this._onChangePassword.bind(this);
  }

  componentDidMount() {
    this.keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      this._keyboardDidShow,
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      this._keyboardDidHide,
    );
  }

  componentWillUnMount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  _onChangeEmail(text) {
    this.setState({
      email: text
    })
  }

  _onChangePassword(text) {
    this.setState({
      password: text
    });
  }

  _onPressSignIn() {
    console.log(this.state.email);
    console.log(this.state.password);
    Keyboard.dismiss();
  }

  _keyboardDidShow() {
    console.log('keyboard show')
  }

  _keyboardDidHide() {
    console.log('keyboard dismiss')
  }

  _scrollToInput(reactNode: any) {
    // Add a 'scroll' ref to your ScrollView
    this.scroll.props.scrollToFocusedInput(reactNode)
  }

  _onFocus() {
    this._scrollToInput(ReactNative.findNodeHandle(event.target))
  }

  render() {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <View style={styles.statusBar} />}
        <SafeAreaView style={styles.safeAreaView}>
          <KeyboardAwareScrollView
            innerRef={ref => {
            this.scroll = ref
          }}>
            <CompanyBanner />

            <View style={styles.headerView}>
              <Text style={styles.headerText}>A Message Project</Text>
            </View>
            <View style={{flex:1.5}}>
              <InfoCell hint={"Email"} onChangeText={this._onChangeEmail} onFoucs={this._onFocus}/>
              <InfoCell hint={"Password"} onChangeText={this._onChangePassword}/>
            </View>
            <View style={{alignItems: 'center'}}>
              <Animatable.View
                animation="fadeIn"
                delay={1900}
                duration={1000}
                style={{ position: 'absolute', alignItems: 'center'}}
              >
                <LinearGradient
                  colors={['#4c669f', '#3b5998', '#192f6a']}
                  style={styles.linearGradient}>
                  <TouchableOpacity
                    onPress={this._onPressSignIn.bind(this)}
                  >
                    <Text style={styles.buttonText}>
                      Sign In
                    </Text>
                  </TouchableOpacity>
                </LinearGradient>

                <TouchableOpacity
                  onPress={Actions.signup}
                  unerlayColor='transparent'
                >
                  <Text style={styles.signUpText}>
                    Sign Up
                  </Text>
                </TouchableOpacity>
              </Animatable.View>
            </View>
            <View style={styles.bottomView} />
          </KeyboardAwareScrollView>
        </SafeAreaView>
      </View>
    );
  }
}

export default SignInView;
