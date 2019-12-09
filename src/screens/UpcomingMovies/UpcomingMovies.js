import React, { Component } from 'react';
import { ScrollView, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getUpcomingMovies } from '../../service/services';
import MovieDetails from '../../components/MovieDetails/MovieDetails';

class UpcomingMovies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
        };
    }

    componentDidMount() {
        getUpcomingMovies(this.props.token).then((movies) => this.setState({
            movies: movies.sort((a, b) => new Date(b['release-dateIS']) - new Date(a['release-dateIS'])),
        }));
    }


    render() {
        const dimensions = Dimensions.get('window');
        const imageHeight = ((dimensions.width - 60) * 10) / 6.75;
        const imageWidth = (dimensions.width - 60);
        const movieList = this.state.movies.map((movie) => (
            <MovieDetails
                key={movie.id}
                selectMovie={() => {}}
                imageHeight={imageHeight}
                imageWidth={imageWidth}
                movie={movie}
            />
        ));
        return (
            <ScrollView>
                {movieList}
            </ScrollView>
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
