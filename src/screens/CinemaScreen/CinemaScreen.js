import React, { Component } from 'react';
import { View, Text } from 'react-native';
import defaultStyles from '../../resources/defaultStyles';
import { getAuthToken, getAllMovies, getAllCinemas } from '../../service/services';

class CinemaScreen extends Component {
    constructor(props) {
        super(props);
        this.token = getAuthToken();
        this.state = {
            token: null,
            movieList: null,
            cinemaList: [],
        };
    }

    componentWillMount() {
        getAuthToken().then((token) => {
            this.setState({
                token,
            }, () => console.log('Fetched token!'));
        }).then(() => {
            getAllCinemas(this.state.token).then((cinemaList) => {
                this.setState({
                    cinemaList,
                }, () => console.log(this.state.cinemaList));
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
