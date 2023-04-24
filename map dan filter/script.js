const siswa = [
    {
        nama : "andi",
        nilai : 80
    },
    {
        nama : "zidni",
        nilai : 70
    },
    {
        nama : "wibi",
        nilai :100
    }
];

const namaSiswa = siswa.map((siswa)=> siswa.nama);
console.log(namaSiswa);

const nilaiTertinggi = siswa.filter((siswa)=> siswa.nilai > 80);
console.log(nilaiTertinggi);