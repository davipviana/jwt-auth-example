
import { handleResponse, authHeader } from '../_helpers';

export const employeeService = {
    employeeOperation
};

function employeeOperation() {
    const authorization = authHeader();
    const requestOptions = {
        method: 'GET',
        headers: { ...authorization, 'Accept': 'application/json' }
    };
    return fetch('https://localhost:5001/v1/home/employee', requestOptions)
        .then(handleResponse)
        .then(response => {
            return response.status;
        });
}