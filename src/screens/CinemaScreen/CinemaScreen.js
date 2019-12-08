import React, { Component } from 'react';
import { View, Text } from 'react-native';
import defaultStyles from '../../resources/defaultStyles';
import { getAuthToken, getAllMovies } from '../../service/services';

class CinemaScreen extends Component {
    constructor(props) {
        super(props);
        this.token = getAuthToken();
        this.state = {
            token: null,
            movieList: [],
        };
    }

    componentWillMount() {
        getAuthToken().then((token) => {
            this.setState({
                token,
            }, () => console.log('Fetched token!'));
        }).then(() => {
            getAllMovies(this.state.token).then((movieList) => {
                this.setState({
                    movieList: movieList,
                });
            });
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
