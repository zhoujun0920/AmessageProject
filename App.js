import React from 'react';

import {
  Actions,
  Router,
  Scene,
  // Reducer,
} from 'react-native-router-flux';

import LoginView from './src/views/login';

const scenes = Actions.create(
    <Scene key="root" hideNavBar={true}>
      <Scene key="login" title="Login" component={LoginView} initial={true} />
    </Scene>
)

class App extends React.Component {
  render() {
    return <Router scenes={scenes} />
  }
}

export default App;
