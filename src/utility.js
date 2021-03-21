export const toggleState = (time, callback, secondAction = null)=>{
    callback(true)
    setTimeout(() => {
        callback(false)
        if(secondAction){
            secondAction()
        }
    }, time)   
}