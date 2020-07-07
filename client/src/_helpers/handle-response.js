import { authenticationService } from '../_services';

export function handleResponse(response) {
    if (!response.ok) {
        if (401 === response.status) {
            // auto logout if 401 Unauthorized
            authenticationService.logout();
            window.location.reload(true);
        }

        if (403 === response.status)
            return Promise.resolve(response)

        const error = response.statusText;
        return Promise.reject(error);
    }

    return response;
}