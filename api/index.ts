import axios from 'axios';
import * as CommentsService from './CommentsService'
const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

console.log(instance)
console.log('processENV,',process.env.NEXT_PUBLIC_BASE_URL);

export {CommentsService, instance}