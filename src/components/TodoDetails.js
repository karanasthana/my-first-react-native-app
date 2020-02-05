/* eslint-disable no-debugger */
import React from 'react';
import { View, Text, ActivityIndicator, Button } from 'react-native';

class TodoDetails extends React.Component {
    constructor(props) {
        super(props);

        // this.fetchAccount = this.fetchAccount.bind(this);
    }

    state = {
        response: '',
    };

    fetchAccount() {
        const url =
            'https://karan.orgzit.com/api/1/account/fetch/';
        this.makeApiCall(url);
    }

    async makeApiCall(url) {
        try {
            let response = await fetch(url, {
                method: 'GET',
                headers: {
                    Authorization:
                        'ApiKey karan:3bc0e0a70f43d2f341e499ca82fccdc7ba4fe7e5',
                },
            });
            let responseJson = await response.json();
            this.setState({ response: JSON.stringify(responseJson) });
            console.log(responseJson);
        } catch (error) {
            console.error(error);
        }
    }

    render() {
        let UI;

        if (this.state.response === '') {
                UI = <View><Button title="Fetch Account" onPress={() => this.fetchAccount()}></Button></View>;
        } else {
            UI = <View><Button title="Fetch Account" onPress={() => this.fetchAccount()}></Button></View>;
            let response = JSON.parse(this.state.response);
            let currentAccount = response.current_account;
            let currentAccountUser = response.current_account_user;
            UI = <View>
                <Text>
                    AccountName: {currentAccount.name}
                </Text>
                <Text>
                    AccountBillingType: {currentAccount.billing_plan_type}
                </Text>
                <Text>
                    AccountUserEmail: {currentAccountUser.user.email}
                </Text>
            </View>
        }
        return (UI);
    }
}

export default TodoDetails;
