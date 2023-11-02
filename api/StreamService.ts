import {instance} from './index'

function checkStream(url:string):Promise<boolean>{
    return instance.get(url+'/stream').then(response=>response.data)
} 

export {checkStream}