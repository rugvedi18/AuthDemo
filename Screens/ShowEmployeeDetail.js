import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

class ShowEmployeeDetail extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.mainTextStyle}> Student Details </Text>
        <View style={styles.textViewStyle}>
          <Text style={styles.textStyle}>First Name: </Text>
          <Text style={styles.textStyle}>
            {' '}
            {this.props.employeeDetails.firstName}
          </Text>
        </View>
        <View style={styles.textViewStyle}>
          <Text style={styles.textStyle}>Last Name: </Text>
          <Text style={styles.textStyle}>
            {this.props.employeeDetails.lastName}
          </Text>
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
    alignItems: 'flex-start',
    backgroundColor: 'lightgray',
  },
  textViewStyle: {
    flexDirection: 'row',
    paddingBottom: 20,
    marginHorizontal: 20,
  },
  textStyle: {
    height: 20,
    textAlign: 'left',
    marginTop: 10,
    fontSize: 15,
  },
  mainTextStyle: {
    width: '100%',
    height: 40,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
    fontSize: 20,
  },
});

const mapStateToProps = state => {
  return {
    employeeDetails: state.employeeDetailReducer.employeeDetails,
  };
};
export default connect(mapStateToProps, null)(ShowEmployeeDetail);
