function hitungBil() {
    let bil1 = document.getElementById('bil1').value;
    let bil2 = document.getElementById('bil2').value;
    console.log(bil1,bil2);
    
    document.getElementById('hasil').value = parseInt(bil1) + parseInt(bil2)
}