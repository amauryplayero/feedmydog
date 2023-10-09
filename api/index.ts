import axios from 'axios';
import * as CommentsService from './CommentsService'
import * as InteractionService from './InteractionService'
const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});
export {CommentsService, InteractionService, instance}