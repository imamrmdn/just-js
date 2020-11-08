//Promise
//Obj yang mereprsentasikan keberhasilan atau kegagalan sebuah event atau request yang asynchronous di masa yang akan datang/future

//memakai fetch
fetch('http://www.omdbapi.com/?apikey=dca61bcc&s=avengers')
    .then(res => res.json())
    .then(res => console.log(res))

//memakai jquery
$.ajax({
    url: 'http://www.omdbapi.com/?apikey=dca61bcc&s=starwars',
    success: (res)=>{
        console.log(res);
    },
    error: (err)=>{
        console.log(err);
    },
})

//contoh promise
let rslv = false
const prom1 = new Promise((resolve, reject) => {
    if(rslv){
        resolve('Done!!!')
    }else{
        reject('Failed!!!')
    }
})

//ambil value/response dr resolve dan reject
//resolve akan masuk ke then dan reject akan masuk ke catch
prom1
    .then(res => console.log(`OK!: ${res}`))
    .catch(res => console.log(`NOT OK: ${res}`))

//contoh promise all

const user = new Promise(resolve => {
    setTimeout(() =>{
        resolve([{
            "name": "imam",
            "age": 23,
            "nim": "1644190065"            
        }])
    }, 1000)
})

const mhs = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            "name": "sefi",
            "age": 22,
            "nim": "1644190067"
        }])
    }, 600)
})

// Promise.all([user, mhs])
//     .then(res => console.log(res))

Promise.all([user, mhs])
    .then(res => {
        const [user, mhs] = res

        console.log(user);
        console.log(mhs);
    })





