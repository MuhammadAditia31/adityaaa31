let kursRupiah = 15831;

function hitungKursRupiah() {
    let rupiah = document.getElementById('rupiah').value;
    document.getElementById('dollar').innerHTML = rupiah / kursRupiah;
}

function hitungKursDollar() {
    let dollarNumber = document.getElementById('dollarNumber').value;
    document.getElementById('rupiahNumber').innerHTML = dollarNumber * kursRupiah;
}