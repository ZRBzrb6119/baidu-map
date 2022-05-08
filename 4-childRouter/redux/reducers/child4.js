const initState=0
export default function c4reducer(pre=initState,action){
    switch(action.type){
        case 'password':
            return action.data
        default:
            return pre
    }
}