import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableHighlight,
} from 'react-native';
import {connect} from 'react-redux';
import {saveEmployeeDetails} from '../Actions/saveEmployeeDetailAction';

class EmployeeDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
    };
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.mainView}>
          <Text style={styles.mainTextStyle}>Enter your Details</Text>
          <Text style={styles.textStyle}>Enter First Name</Text>
          <TextInput
            style={styles.textInputStyle}
            underlineColorAndroid="transparent"
            placeholderTextColor="#cccccc"
            placeholder="Enter First Name"
            onChangeText={firstName => {
              this.setState({firstName: firstName}, () => {});
            }}
          />
          <Text style={styles.textStyle}>Enter Last Name</Text>
          <TextInput
            style={styles.textInputStyle}
            underlineColorAndroid="transparent"
            placeholderTextColor="#cccccc"
            placeholder="Enter Last Name"
            onChangeText={lastName => {
              this.setState({lastName: lastName}, () => {});
            }}
          />
          <TouchableHighlight
            underlayColor="transparent"
            style={styles.buttonStyle}
            onPress={() => {
              var employeeDetails = {};
              employeeDetails.firstName = this.state.firstName;
              employeeDetails.lastName = this.state.lastName;
              this.props.reduxSaveEmployeeDetail(employeeDetails);
              this.props.navigation.navigate('ShowEmployeeDetail');
            }}>
            <Text style={styles.buttonTextStyle}>Save</Text>
          </TouchableHighlight>
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'lightgray',
    paddingBottom: 50,
  },
  mainView: {
    width: '100%',
    height: '50%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
  },
  textInputStyle: {
    width: '100%',
    height: 40,
    backgroundColor: 'white',
    paddingHorizontal: 15,
    marginBottom: 10,
    marginTop: 10,
  },
  textStyle: {
    width: '100%',
    height: 20,
    textAlign: 'left',
    marginTop: 10,
    fontSize: 15,
  },
  mainTextStyle: {
    width: '100%',
    height: 40,
    //paddingHorizontal:15,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
    fontSize: 20,
  },
  buttonStyle: {
    width: '100%',
    height: 40,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    marginTop: 20,
  },
  buttonTextStyle: {
    width: '100%',
    height: '100%',
    textAlign: 'center',
    marginTop: 10,
    fontSize: 18,
  },
});
const mapDispatchToProps = dispatch => {
  return {
    reduxSaveEmployeeDetail: employeDetails =>
      dispatch(saveEmployeeDetails(employeDetails)),
  };
};
export default connect(null, mapDispatchToProps)(EmployeeDetails);
