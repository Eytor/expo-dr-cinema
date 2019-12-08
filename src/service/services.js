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
            return response.text();
        }
    });
}


export function getAllCinemas(token) {
    const url = 'http://api.kvikmyndir.is/theaters';
    console.log(url);
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
            return response.text();
        }
    });
}
