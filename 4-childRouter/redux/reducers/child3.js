const initState={width:1200,height:500}
export default function c3reducer(pre=initState,obj){
    switch(obj.type){
        case 'increment':
            pre.height+=50
            pre.width+=100
            return pre
        case 'decrement':
            pre.height-=50
            pre.width-=100
            
            return pre
        default:
            return pre
    }
}