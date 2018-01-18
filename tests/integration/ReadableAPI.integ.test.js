import ReadableAPIWrapper from '../../src/apis/ReadableAPI';

const ReadableAPI = new ReadableAPIWrapper();

describe('ReadableAPI should be able to publish a post', () => {
    it('published the post:', (done) => {
        const newPost = {
            id: ReadableAPI.generateGuid(),
            timestamp: new Date(),
            title: 'Testing post publishing API',
            body: 'Testing post publishing API',
            author: 'Integration tests',
            category: '',
        };
        ReadableAPI.publishPost(newPost).then((data) => {
            console.log(data);
            done();
        });
        // done();
    });
});
