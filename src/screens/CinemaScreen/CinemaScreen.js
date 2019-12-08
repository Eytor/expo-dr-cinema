import React, { Component } from 'react';
import { View, Text } from 'react-native';
import defaultStyles from '../../resources/defaultStyles';
import { getAuthToken, getAllMovies } from '../../service/services';

class CinemaScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token: null,
            movieList: null,
        };
    }

    componentDidMount() {
        const token = getAuthToken();
        const movieList = getAllMovies(this.getToken);

        this.setState({
            token,
            movieList,
        });
    }

    render() {
        return (
            <View style={defaultStyles.container}>
                <Text>Some text</Text>
            </View>
        );
    }
}

export default CinemaScreen;
