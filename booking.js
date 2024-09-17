document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Menghentikan form dari submit biasa
    var destination = document.getElementById('destination').value;
    var date = document.getElementById('date').value;
    var guests = document.getElementById('guests').value;

    alert('Anda telah memesan perjalanan ke ' + destination + ' pada tanggal ' + date + ' untuk ' + guests + ' orang.');

});