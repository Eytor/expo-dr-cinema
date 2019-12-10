/**
 * Function that gets all cinemas from API
 *
 * @export
 * @param {string} token - access token
 * @returns
 */
export default function getAllCinemas(token) {
    const url = 'http://api.kvikmyndir.is/theaters';
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
