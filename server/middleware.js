import express from 'express'


//takes in a change and response object and alters it by the  
export const resObjSwitch = (change, resObj) => {
	var newRes = Object.create(resObj)
	const type = typeof change 
	
	switch type
		case 'number':	return Object.assign(newRes, {status:change})
		case 'object':  return Object.assign(newRes, change)
		default: return newRes	
}

export const increaseServerCalls = () => {
	
}
