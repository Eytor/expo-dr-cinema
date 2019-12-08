export function getAuthToken() {
    const url = 'http://api.kvikmyndir.is/authenticate';
    const userinfo = { username: 'jnbjarni', password: '12341234' };
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
    }).then((info) => {
        const { token } = JSON.parse(info);
        return token;
    });
}

export function getAllMovies(token) {
    const url = `http://api.kvikmyndir.is/movies?token=${token}`;
    return fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((response) => {
        if (response.status >= 200 && response.status < 300) {
            return response.json();
        }
    });
}
