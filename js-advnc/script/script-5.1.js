// template literal

const user = [
    {
        nama: 'imron',
        age: 22
    },
    {
        nama: 'aji',
        age: 24
    },
    {
        nama: 'ivan',
        age: 20
    }
]

const ht = `<div class="user">
    ${user.map(u => `
        <ul>
            <li>Nama: ${u.nama}</li>
            <li>Umur: ${u.age}</li>
        </ul>
    `).join('')}
</div>`

document.body.innerHTML = ht


///

