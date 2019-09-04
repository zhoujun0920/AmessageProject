import React from 'react';

import {
  Actions,
  Router,
  Scene,
} from 'react-native-router-flux';

import AppGlobalConfig from './src/globalConfig/appConfig'

import SignInView from './src/views/signin';
import SignUpView from './src/views/signup';

const scenes = Actions.create(
    <Scene key="root" hideNavBar={true}>
      <Scene key="signin" title="Sign In" component={SignInView} initial={true} />
      <Scene key="signup" title="Sign Up" component={SignUpView} />
    </Scene>
)

class App extends React.Component {
  constructor() {
    super()
    GLOBAL.AppGlobalConfig = AppGlobalConfig
    AppGlobalConfig.init().finally(() => {
      console.log("app global config finish")
    });
  }

  render() {
    return (
        <Router scenes={scenes} />
    );
  }
}

export default App;
