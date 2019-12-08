export function getAuthToken() {
    const url = 'http://api.kvikmyndir.is/authenticate';
    const userinfo = { username: 'jnbjarni', password: '12341234' };
    console.log(JSON.stringify(userinfo));
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(userinfo),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    }).then((response) => {
        console.log(response);
        if (response.status >= 200 && response.status < 300) {
            return response.text()
        }
    }).then(info => {
        console.log(info)
        return info;
    })
}

export async function getAllMovies(token) {
    const url = `http://api.biomynd.is/movies?token=${token}`;
    const movies = await fetch(url);
    return JSON.stringify(movies);
}
