import {instance} from './index'
import {CommentsModel} from '../src/app/Models/Comments'

function moveServo():Promise<CommentsModel[]>{
    return instance.get('/move-servo').then(response=>response.data)
}



export {moveServo}