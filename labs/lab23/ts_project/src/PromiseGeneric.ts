const myPromise = new Promise((resolve,reject)=>{
    resolve(1)
})

function usePromise():Promise<number|void> {
    return myPromise.then(d=>console.log(d))
}


