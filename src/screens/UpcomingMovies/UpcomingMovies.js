import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getUpcomingMovies } from '../../service/services';
import CinemaDetails from '../../components/CinemaDetails/CinemaDetails';

class UpcomingMovies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
        };
    }

    componentDidMount() {
        getUpcomingMovies(this.props.token).then((movies) => this.setState({ movies }));
    }


    render() {
        // selectMovie: PropTypes.func.isRequired,
        // imageHeight: PropTypes.number.isRequired,
        // imageWidth: PropTypes.number.isRequired,
        // movie: PropTypes.object.isRequired,
        // certificate: PropTypes.oneOfType([
        //     PropTypes.string,
        //     PropTypes.object,
        // ]).isRequired,
        const dimensions = Dimensions.get('window');
        const imageHeight = ((dimensions.width - 60) * 10) / 6.75;
        const imageWidth = (dimensions.width - 60);
        const movieList = this.state.movies.map((movie) => (
            <CinemaDetails
                selectMovie={() => {}}
                imageHeight={imageHeight}
                imageWidth={imageWidth}
                movie={movie}
                certificate={movie.certificateIS}
            />
        ));
        return (
            <View>
                {movieList}
            </View>
        );
    }
}

UpcomingMovies.propTypes = {
    token: PropTypes.string.isRequired,
};

const mapStateToProps = ({ token }) => ({
    token,
});

export default connect(mapStateToProps)(UpcomingMovies);
