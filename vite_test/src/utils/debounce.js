 // 防抖
export function debounce(func){
    let timeID = 0
    return function(){
        if(timeID){
            clearTimeout(timeID)
        }
        timeID = setTimeout(()=>{
            func()
            console.log('qqqqqq')
        },300)
    }

}

// 节流
export function throttle(func, delay) {
    let start = 0 
    return function() {
        const time = Date.now()
        if(time - start > delay){
            func()
            start = time
        }
    }
}