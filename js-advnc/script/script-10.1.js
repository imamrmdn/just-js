//Callback
//-----------------

//- Synchronous Callback
//- Pemanggilannya bisa menggunakan anonymous function

// function say(name){
//     alert(`Hi There, ${name}`)
// }

// function getMessage(value){
//     const name = prompt('Masukan Nama Anda: ')
//     value(name)
// }

// getMessage(name => alert(`Hi There, ${name}`));

//- Asynchronous Callback

// const user = [
//     {
//         "name": "imam",
//         "age": 23,
//         "nik": "019210291012",
//         "pilihan": [
//             'kucing',
//             'badak',
//         ]
//     },
//     {
//         "name": "reja",
//         "age": 22,
//         "nik": "01242291012",
//         "pilihan": [
//             'harimau',
//             'monyet',
//         ]
//     },
//     {
//         "name": "aji",
//         "age": 20,
//         "nik": "0109870291012",
//         "pilihan": [
//             'anjing',
//             'singa',
//         ]
//     },
// ];

// user.forEach(e => console.log(`Nama: ${e.name}, Pilihan: ${[...e.pilihan].join(' ')}`));

//memakai vanilla js atau js murni
//contoh Asyncronous Callback
function getDataUser(url, succes, error) {
    let xml = new XMLHttpRequest();

    //request secaran asnyc menggunakan ajax
    xml.onreadystatechange = () => {
        if(xml.readyState === 4){
            //
            if(xml.status === 200){
                //
                succes(xml.response)
            }else if( xml.status === 404){
                error()
            }
        }        
    }

    xml.open('get', url)
    xml.send()
}


console.log('start');
getDataUser('data/user.json', (response) => {

    const user = JSON.parse(response)

    user.forEach(e => {
        console.log(`Nama:${e.name}, Pilihan: ${[...e.pilihan]}`);
    });
}, (err) => {
    console.log(err);
})
console.log('end');

//pemanggilan menggunak jquery
// console.log('start');
// //
// $.ajax({
//     url: 'data/user.json',
//     succes: (response)=>{
//         console.log(response);
//     },
//     error: ()=>{}
// })
// console.log('mulai');








