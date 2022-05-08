const initState=[{id:Date.parse(new Date())/1000,Name:'超级无敌pro蓝牙耳机',price:15}]

export function shopReduder(preSta=initState,obj){
    switch (obj.type) {
		case 'addShop':
			return [obj.data,...preSta]
		default:
			return preSta
	}

}
export function allPrice(prePrice=0,obj){
    switch(obj.type){
        case 'addPrice':
            return obj.data
        default:
            return prePrice
    }
}