import uuidv4 from 'uuid/v4';

class ReadableAPIWrapper {
    static defaults = {
        apiURL: 'http://localhost:3001',
        token: 'igorcrispim',
    };

    headers = {
        Accept: 'application/json',
    };

    constructor(authToken, apiURL) {
        if (!localStorage.token) {
            localStorage.token = authToken || ReadableAPIWrapper.defaults.token;
        }

        this.apiURL = apiURL || ReadableAPIWrapper.defaults.apiURL;
        this.token = localStorage.token;
        this.headers.Authorization = this.token;
    }

    generateGuid = uuidv4;

    getAllCategories = () =>
        fetch(`${this.apiURL}/categories`, {
            headers: { ...this.headers },
        })
            .then(res => res.json())
            .then(data => data.categories);

    getPostsByCategory = (category) => {
        const { path } =
            typeof category === 'string' || category instanceof String
                ? { path: category }
                : category;

        return fetch(`${this.apiURL}/${path}/posts`, {
            headers: { ...this.headers },
        })
            .then(res => res.json())
            .then(data => data);
    };

    getAllPosts = () =>
        fetch(`${this.apiURL}/posts`, {
            headers: { ...this.headers },
        })
            .then(res => res.json())
            .then(data => data);

    getPostById = id =>
        fetch(`${this.apiURL}/posts/${id}`, {
            headers: { ...this.headers },
        })
            .then(res => res.json())
            .then(data => data);

    publishPost = newPost =>
        fetch(`${this.apiURL}/posts`, {
            headers: {
                ...this.headers,
                'content-type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify({ ...newPost }),
        })
            .then(res => res.json())
            .then(data => data);
}

export const ReadableAPI = new ReadableAPIWrapper();
export default ReadableAPIWrapper;
