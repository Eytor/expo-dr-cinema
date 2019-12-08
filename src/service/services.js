export async function getAuthToken() {
    const response = await fetch('http://api.kvikmyndir.is/authenticate', {
        method: 'POST',
        body: {
            username: 'jnbjarni',
            password: '12341234',
        },
        headers: {
            'Content-Type': 'application/json',
        },
    });
    console.log(response);
    return response;
}

export async function getAllMovies(token) {
    const url = `http://api.biomynd.is/movies?token=${token}`;
    const movies = await fetch(url);
    return JSON.stringify(movies);
}
