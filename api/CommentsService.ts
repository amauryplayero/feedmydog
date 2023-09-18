import {instance} from './index'
import {CommentsModel} from '../src/app/Models/Comments'

function getComments():Promise<CommentsModel[]>{
    return instance.get('/comments').then(response=>response.data)
}

function postComment(name:string, content:string):Promise<void>{
    const data = {
        name:name,
        content:content
    }
    return instance.post('/comments', data).then(response=>response.data)
}

export {getComments, postComment}