const initSta=[]
export default function outreducer(preState=initSta,obj){
    switch(obj.type){
        case 'input':
            return [...preState,obj.data]
        default:
            return preState
    }
}