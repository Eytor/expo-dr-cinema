export async function getAuthToken() {
    const url = 'http://api.kvikmyndir.is/authenticate';
    const userinfo = { username: 'jnbjarni', password: '12341234' };
    console.log(JSON.stringify(userinfo));
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({ userinfo }),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const json = await response.json();
    console.log(JSON.stringify(json));
    return response;
}

export async function getAllMovies(token) {
    const url = `http://api.biomynd.is/movies?token=${token}`;
    const movies = await fetch(url);
    return JSON.stringify(movies);
}
