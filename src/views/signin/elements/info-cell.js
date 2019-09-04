import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 40,
    backgroundColor: 'white'
  },
  infoTextInput: {
    height: 40,
    borderColor: 'gray',
    borderBottomWidth: 1,
    padding: 5,
    color: 'black',
  }
})

class InfoCell extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hint: props.hint
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.infoTextInput}
          onChangeText={this.props.onChangeText}
          onFocus={this.props.onFocus}
          placeholder={this.state.hint}
          autoCapitalize={'none'}
        />
      </View>
  )}
}

export default InfoCell;
