import ReadableAPIWrapper from '../../src/apis/ReadableAPI';

const ReadableAPI = new ReadableAPIWrapper('IntegrationTest');
const reactPost = {
    id: ReadableAPI.generateGuid(),
    timestamp: new Date(),
    title: '[react] Testing post publishing API',
    body: 'Testing post publishing API',
    author: 'Integration tests',
    category: 'react',
};

const reduxPost = {
    id: ReadableAPI.generateGuid(),
    timestamp: new Date(),
    title: '[redux] Testing post publishing API',
    body: 'Testing post publishing API',
    author: 'Integration tests',
    category: 'redux',
};

describe('ReadableAPI', () => {
    it('should be capable to publish a post', (done) => {
        ReadableAPI.publishPost(reactPost).then((response) => {
            const newPostResponse = {
                ...reactPost,
                timestamp: reactPost.timestamp.toJSON(),
                commentCount: 0,
                deleted: false,
                voteScore: 1,
            };
            expect(response).toEqual(newPostResponse);
            done();
        });
    });

    it('should be capable to publish another post with a differente category', (done) => {
        ReadableAPI.publishPost(reduxPost).then((response) => {
            const newPostResponse = {
                ...reduxPost,
                timestamp: reduxPost.timestamp.toJSON(),
                commentCount: 0,
                deleted: false,
                voteScore: 1,
            };
            expect(response).toEqual(newPostResponse);
            done();
        });
    });

    it("should be capable to retreave a post by passing the post's id", (done) => {
        ReadableAPI.getPostById(reactPost.id).then((response) => {
            const getPostByIdResponse = {
                ...reactPost,
                timestamp: reactPost.timestamp.toJSON(),
                commentCount: 0,
                deleted: false,
                voteScore: 1,
            };
            expect(response).toEqual(getPostByIdResponse);
            done();
        });
    });

    it('should be capable of reatriving a list of posts categories', (done) => {
        const defaultCategories = [
            { name: 'react', path: 'react' },
            { name: 'redux', path: 'redux' },
            { name: 'udacity', path: 'udacity' },
        ];
        ReadableAPI.getAllCategories().then((data) => {
            expect(data).toEqual(defaultCategories);
            done();
        });
    });

    it('should be capable of reatriving all posts from one categorie', (done) => {
        ReadableAPI.getPostsByCategory('redux').then((data) => {
            const reduxExpectedPost = {
                ...reduxPost,
                timestamp: reduxPost.timestamp.toJSON(),
                commentCount: 0,
                deleted: false,
                voteScore: 1,
            };
            expect(data).toEqual(expect.arrayContaining([reduxExpectedPost]));
            done();
        });
    });

    it('should be capable of reatriving all posts from all categories', (done) => {
        ReadableAPI.getAllPosts().then((data) => {
            const expectedPosts = [
                {
                    ...reduxPost,
                    timestamp: reduxPost.timestamp.toJSON(),
                    commentCount: 0,
                    deleted: false,
                    voteScore: 1,
                },
                {
                    ...reactPost,
                    timestamp: reduxPost.timestamp.toJSON(),
                    commentCount: 0,
                    deleted: false,
                    voteScore: 1,
                },
            ];
            expect(data).toEqual(expect.arrayContaining(expectedPosts));
            done();
        });
    });

    it('should be capable of upVoting a post by its post Id', (done) => {
        ReadableAPI.upVotePost(reduxPost.id).then((data) => {
            const expectedPost = {
                ...reduxPost,
                timestamp: reduxPost.timestamp.toJSON(),
                commentCount: 0,
                deleted: false,
                voteScore: 2,
            };
            expect(data).toEqual(expectedPost);
            done();
        });
    });

    it('should be capable of downVoting a post by its post Id', (done) => {
        ReadableAPI.downVotePost(reactPost.id).then((data) => {
            const expectedPost = {
                ...reactPost,
                timestamp: reactPost.timestamp.toJSON(),
                commentCount: 0,
                deleted: false,
                voteScore: 0,
            };
            expect(data).toEqual(expectedPost);
            done();
        });
    });
});
