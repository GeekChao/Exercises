const blogs = [
    {
        "author_id": 123,
        "author_name": "Kevin",
        "article": "hi, this is a tiny api server"
    },
    {
        "author_id": 456,
        "author_name": "Zou",
        "article": "let us play around with it"
    }
];


const getAuthors = () => {
    return blogs.map(blog => {
        return {author_id: blog.author_id, author_name: blog.author_name};
    })
};

const getAuthor = (name) => {
    return blogs.find(blog => blog.author_name === name);
};

module.exports = {
    getAuthor,
    getAuthors
};