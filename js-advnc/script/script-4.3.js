//latihan filter, map, reduce menggunakan DOM

//algoritmanya
//-------------------------------------------
//ambil semua elemen video
//filter yang hanya judul Javascript lanjutan
//ambil dursai masing masing video <-- map
//ubah durasi dari menit ke detik agar bisa dijumlahkan lalu parse ke float
//jumlahkan semua detik
//ubah formatnya jadi jam menit detik
//simpan kedalam dom

const video = Array.from(document.querySelectorAll('.vds'))
    .filter(v => v.textContent.includes('JAVA SCRIPT LANJUTAN'))

    .map(item => item.getAttribute('data-duration'))
    
    .map(time => time.split(':'))

    .map(parse => parseFloat(parse[0] * 60 ) + parseFloat(parse[1]))

const videos = video.length
const result = video.reduce((acc, curr) => acc + curr)

//mencari nilai jam
const hour = Math.floor(result / 3600) //pembulatan ke bawah

//sisa dari result dikurang jam(yang di format ke detik)
const min = result - (hour * 3600) // sisa

//mencari nilai menit
const minute = Math.floor(min / 60)

//mencari detik
const second = min - minute * 60

//save di dom
//
const jmlh = document.querySelector('.jumlah-video')
jmlh.textContent = `${videos} judul`

//
const durasi = document.querySelector('.total-durasi')
durasi.textContent = `${hour} Jam ${minute} menit ${second} detik`

// console.log(videos);
// console.log(result)
// console.log(minute);
// console.log(hour);
// console.log(second);


