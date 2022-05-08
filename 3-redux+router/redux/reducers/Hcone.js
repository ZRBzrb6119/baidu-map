const initCount=0
export default function countReducer(preCount=initCount,dataObj){
    switch(dataObj.type){
        case 'increment':
            return preCount+dataObj.data
        case 'decrement':
            return preCount-dataObj.data
        case 'multi' :
            return preCount*dataObj.data
        default:
            return preCount
    }

}