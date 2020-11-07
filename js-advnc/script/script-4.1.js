// Higher Order Function

//----------------------

//homework disebut Higher Order Function
//jika ada function sebagai params/arguments itu disebut callback
function homeWork(matkul, finish) {
    console.log(`Go To Matkul ${matkul}`);
    finish();
}

function finish() {
    alert('Finish to Home Work Yeah')
}

homeWork('DDP', finish) 