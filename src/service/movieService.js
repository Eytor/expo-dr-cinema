/**
 * Function that gets all upcoming movies from API
 *
 * @export
 * @param {string} token - access token
 * @returns
 */
export function getUpcomingMovies(token) {
    const url = 'http://api.kvikmyndir.is/upcoming';
    return fetch(url, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'x-access-token': token,
            'Accept-Charset': 'utf-8',
        },
    }).then((response) => {
        if (response.status >= 200 && response.status < 300) {
            return response.json();
        }
        throw new Error('error ', response);
    }).catch((error) => { console.log(error); });
}

/**
 * Function that gets all movies from API
 *
 * @export
 * @param {string} token - access token
 * @returns
 */
export function getAllMovies(token) {
    const url = 'http://api.kvikmyndir.is/movies';
    return fetch(url, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'x-access-token': token,
        },
    }).then((response) => {
        if (response.status >= 200 && response.status < 300) {
            return response.json();
        }
        throw new Error('error', response);
    }).catch((error) => { console.log(error); });
}
