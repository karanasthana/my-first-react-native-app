/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

class AddTodo extends React.Component {
    state = {
        text: '',
    };

    constructor(props) {
        super(props);
    }

    addTodo = text => {
        // redux store interaction
        this.props.dispatch(addTodo(text));
        this.setState({ text: '' });
    };

    render() {
        return (
            <View style={{ flexDirection: 'row', marginHorizontal: 20 }}>
                <TextInput
                    style={styles.textInput}
                    placeholder="AddTask"
                    value={this.state.text}
                    onChangeText={text => this.setState({ text })}
                />
                <TouchableOpacity
                    onPress={() => this.addTodo(this.state.text)}
                    style={{ alignItems: 'center', justifyContent: 'center' }}
                >
                    <Text style={{ fontSize: 20, color: Colors.red }}>+</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default connect()(AddTodo);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    textInput: {
        borderColor: Colors.red,
        backgroundColor: '#eaeaea',
        height: 50,
        flex: 1,
        padding: 10,
        // borderWidth: 1
    },
});
