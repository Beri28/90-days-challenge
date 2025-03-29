type F = (...args: number[]) => void

function debounce(fn: F, t: number): F {
    let timeOutId:number=0
    return function(...args) {
        clearTimeout(timeOutId)
        timeOutId=setTimeout(() => {
            fn(...args)
        }, t) as unknown as number
    }
};