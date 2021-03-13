import axios from 'axios';

export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer XbQOZHWFGNdFnNfLwt4_r2ouivEneynvz2_SIY5oocD8RNF5irwKjLQ--qYvWXgc77JYSyXHgLMHcw0BVKzhjXCk8H1bbOb5O7HG13BAK6asTs1P3q2q-cZzrWxMYHYx'
    }
});