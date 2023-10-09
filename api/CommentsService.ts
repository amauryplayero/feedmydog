import {instance} from './index'
import {CommentsModel} from '../src/app/Models/Comments'

function getComments():Promise<CommentsModel[]>{
    return instance.get('/comments').then(response=>response.data)

    // const testComment = new Promise<CommentsModel[]>((resolve)=>{
    //     const comment:CommentsModel[] = [{
    //         name: "amaury",
    //         content: "hi eat this please!",
    //         date: '2023-09-27T08:50:51.630Z',
    //         isNewComment: false
    //     },
    //     {
    //         name: "amaury",
    //         content: "hi eat this please!",
    //         date: '2023-09-27T08:50:51.630Z',
    //         isNewComment: false
    //     },
    //     {
    //         name: "amaury",
    //         content: "hi eat this please!",
    //         date: '2023-09-27T08:50:51.630Z',
    //         isNewComment: false
    //     },
    //     {
    //         name: "amaury last one",
    //         content: "hi eat this please!",
    //         date: '2023-09-27T08:50:51.630Z',
    //         isNewComment: false
    //     },
    //     {
    //         name: "amaury last one",
    //         content: "hi eat this please!",
    //         date: '2023-09-27T08:50:51.630Z',
    //         isNewComment: false
    //     },
    //     {
    //         name: "amaury last one",
    //         content: "hi eat this please!",
    //         date: '2023-09-27T08:50:51.630Z',
    //         isNewComment: false
    //     },
    //     {
    //         name: "amaury last one",
    //         content: "hi eat this please!",
    //         date: '2023-09-27T08:50:51.630Z',
    //         isNewComment: false
    //     }
    // ]
    //     resolve(comment)
    // })
    // return testComment
}

function postComment(name:string, content:string):Promise<void>{
    const data = {
        name:name,
        content:content
    }
    return instance.post('/comments', data).then(response=>response.data)
} 

export {getComments, postComment}