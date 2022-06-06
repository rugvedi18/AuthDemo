import {createStackNavigator} from '@react-navigation/stack';
import {Container} from 'react-navigation';
import EmployeeDetails from '../EmployeeDetails';
import ShowEmployeeDetail from '../ShowEmployeeDetail';
import {NavigationContainer} from '@react-navigation/native';

const stack = createStackNavigator();

export default Container = AppNavigator => {
  return (
    <NavigationContainer>
      <stack.navigator>
        <stack.Screen
          name="Employee"
          component={EmployeeDetails}
          options={{headerShown: false}}
        />
        <stack.screen
          name="Details"
          component={ShowEmployeeDetail}
          options={{headerShown: false}}
        />
      </stack.navigator>
    </NavigationContainer>
  );
};

//   {
//   EmployeeDetails: {
//     screen: EmployeeDetails,
//     navigationOptions: {headerShown: false},
//   },
//   ShowEmployeeDetail: {
//     screen: ShowEmployeeDetail,
//     navigationOptions: {headerShown: false},
//   },
// });

// export default Container(AppNavigator);
