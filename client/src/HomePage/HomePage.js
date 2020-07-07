import React from 'react';

import { authenticationService, employeeService, managerService } from '../_services';

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: authenticationService.currentUserValue,
            employeeResponse: '',
            managerResponse: ''
        };
    }

    componentDidMount() {
        employeeService.employeeOperation().then(response => {
            this.setState({ employeeResponse: response });
        });
        managerService.managerOperation().then(response => {
            this.setState({ managerResponse: response });
        });
    }

    render() {
        const { currentUser, employeeResponse, managerResponse } = this.state;
        return (
            <div>
                <h1>Hi {currentUser.user.username}!</h1>
                <p>You're logged in with React & JWT!!</p>
                <hr />
                <p>Employee Response: {employeeResponse}</p>
                <p>Manager Response: {managerResponse}</p>
            </div>
        );
    }
}

export default HomePage;