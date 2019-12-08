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
            });
        }).then(() => {
            getAllCinemas(this.state.token).then((cinemaList) => {
                this.setState({
                    cinemaList,
                });
            });
        });
    }


    render() {
        const cinemas = this.state.cinemaList.map(cinema => {
            return <View key={cinema.id}><Text style={{color: 'orange'}}>{cinema.name}</Text></View>;
        })
        return (
            <View style={defaultStyles.container}>
                {cinemas}
            </View>
        );
    }
}

export default CinemaScreen;
