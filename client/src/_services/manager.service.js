
import { handleResponse, authHeader } from '../_helpers';

export const managerService = {
    managerOperation
};

function managerOperation() {
    const authorization = authHeader();
    const requestOptions = {
        method: 'GET',
        headers: { ...authorization, 'Accept': 'application/json' }
    };
    return fetch('https://localhost:5001/v1/home/manager', requestOptions)
        .then(handleResponse)
        .then(response => {
            return response.status;
        });
}