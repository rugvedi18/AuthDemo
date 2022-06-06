export const saveEmployeeDetails = employeeDetails => ({
  //   type
  type: 'SAVE_EMPLOYEE_DETAIL',
  //   payload
  employeeDetails: {
    firstName: employeeDetails.firstName,
    lastName: employeeDetails.lastName,
  },
});
