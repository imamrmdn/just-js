//object revisited

const funcMahasiswa = {
  eat:  function (energy) { // () => {} <--- not work
    this.hp += energy;
    console.log(`hp mu bertambah ${this.name}`);
  },
  play: function (hours) {
    this.hp -= hours;
    console.log(`hp mu berkurang ${this.name}`);
  },
};

//
function Mahasiswa(name, hp) {
  let m = Object.create(funcMahasiswa);

  m.name = name;
  m.hp = hp;

  return m;
}

let dody = Mahasiswa("dody", 30);
dody.eat(30)
console.log(dody);
