import {instance} from './index'
import {CommentsModel} from '../src/app/Models/Comments'

function getComments():Promise<CommentsModel[]>{
    console.log('instance,',instance)
    return instance.get('/comments').then(response=>response.data)
}

export {getComments}