/**
 * Function that gets authentication token from API
 *
 * @export
 * @returns
 */
export default function getAuthToken() {
    const url = 'http://api.kvikmyndir.is/authenticate';
    const userinfo = { username: 'eythoras16', password: 'MappBadBoy' };
    return fetch(url, {
        method: 'POST',
        body: JSON.stringify(userinfo),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    }).then((response) => {
        if (response.status >= 200 && response.status < 300) {
            return response.text();
        }
        throw new Error(response);
    }).then((info) => {
        const { token } = JSON.parse(info);
        return token;
    }).catch((error) => { console.log(error); });
}
