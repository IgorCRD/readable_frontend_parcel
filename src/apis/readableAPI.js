class ReadableAPI {
    static api = 'http://localhost:3001';
    static instance = null;

    token = null;
    headers = {
        headers: {
            Accept: 'application/json',
        },
    };

    constructor() {
        if (ReadableAPI.instance) {
            return ReadableAPI.instance;
        }
        if (!localStorage.token) {
            localStorage.token = 'igorcrispim';
        }

        this.token = localStorage.token;
        this.headers.headers.Authorization = this.token;
        ReadableAPI.instance = this;
    }

    getAllCategories = () =>
        fetch(`${ReadableAPI.api}/categories`, this.headers)
            .then(res => res.json())
            .then(data => data.categories);

    getPostsByCategory = (category) => {
        const { path } =
            typeof category === 'string' || category instanceof String
                ? { path: category }
                : category;

        return fetch(`${ReadableAPI.api}/${path}/posts`, this.headers)
            .then(res => res.json())
            .then(data => data);
    };
}

export default new ReadableAPI();
