import React from 'react';
import {
  Button,
  TouchableOpacity,
  Keyboard,
  Platform,
  Text,
  SafeAreaView,
  StyleSheet,
  View
} from 'react-native';

//3rd party libraries
import {Actions} from 'react-native-router-flux';

// View Elements
import InfoCell from '../signin/elements/info-cell';

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
  }
})

class SignUpView extends React.Component {
  constructor(props) {
    super(props)
    this.setState({
      email: "",
      password: "",
    })
    this.onChangeEmail = this.onChangeEmail.bind(this)
    this.onChangePassword = this.onChangePassword.bind(this)
  }

  onChangeEmail(text) {
    this.setState({
      email: text
    })
  }

  onChangePassword(text) {
    this.setState({
      password: text
    })
  }

  onPressSignUp() {
    console.log(this.state.email)
    console.log(this.state.password)
    Keyboard.dismiss()
  }

  render() {
    return(
      <View style={styles.container}>
        {Platform.OS === 'ios' && <View style={styles.statusBar} />}
        <SafeAreaView style={styles.safeAreaView}>
          <View style={{alignItems: 'flex-start', paddingLeft: 10, paddingBottom: 20}}>
            <Button
              title={'Back'}
              onPress={Actions.pop}
            />
          </View>
          <View style={{flex:1.5}}>
            <InfoCell hint={"Email"} onChangeText={this.onChangeEmail}/>
            <InfoCell hint={"Password"} onChangeText={this.onChangePassword}/>
          </View>
          <View style={{alignItems: 'center'}}>
            <TouchableOpacity
              style={styles.signInButton}
            >
              <Text style={styles.signInText}>
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.bottomView} />
        </SafeAreaView>
      </View>
    );
  }
}

export default SignUpView
