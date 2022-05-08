const initState=['']
export default function c2reducer(preSta=initState,obj){
    switch(obj.type){
        case 'input':
            return obj.data
        default:
            return preSta
    }
}