const postFetch = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/posts",
    headers: {
        Accept: "application/json",
        Authorization: "meunovotoken",
    },
})
