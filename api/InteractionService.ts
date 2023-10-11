import {instance} from './index'
import {CommentsModel} from '../src/app/Models/Comments'

function moveServo():Promise<CommentsModel[]>{
    return instance.get('/move-servo').then(response=>response.data)
}

function isItFeedingTime():Promise<boolean>{
    // const isItFeedingTime = new Promise(resolve, reject){
        
    // }
    return instance.get('/feeding-time').then(response=>response.data)
}



export {moveServo, isItFeedingTime}