// Menambahkan event listener ke form saat pengguna mengklik tombol submit
document.getElementById('ageForm').addEventListener('submit', function(event) {
    // Mencegah halaman untuk refresh secara default ketika tombol submit diklik
    event.preventDefault();
    
    // Mendapatkan nilai input tanggal lahir dari form
    const birthdateInput = document.getElementById('birthdate').value;
    // Mengonversi input tanggal lahir menjadi objek Date
    const birthdate = new Date(birthdateInput);
    // Mendapatkan tanggal hari ini
    const today = new Date();

    // Validasi: Jika input tanggal lahir kosong, tampilkan pesan error
    if (birthdateInput === "") {
        alert("Silakan masukkan tanggal lahir yang valid.");
        return; // Menghentikan eksekusi lebih lanjut jika input tidak valid
    }

    // Validasi: Jika tanggal lahir yang dimasukkan berada di masa depan, tampilkan pesan error
    if (birthdate > today) {
        alert("Tanggal lahir tidak boleh di masa depan.");
        return; // Menghentikan eksekusi lebih lanjut jika input tidak valid
    }

    // Menghitung usia dengan memanggil fungsi calculateAge
    const age = calculateAge(birthdate, today);

    // Menampilkan hasil perhitungan usia di elemen <p> dengan id 'result'
    document.getElementById('result').textContent = `Usia Anda adalah ${age} tahun.`;

    // Menampilkan pesan sukses setelah perhitungan berhasil
    alert("Perhitungan berhasil!");
});

// Fungsi untuk menghitung usia berdasarkan tanggal lahir dan tanggal hari ini
function calculateAge(birthdate, today) {
    // Menghitung usia dengan mengurangi tahun lahir dari tahun saat ini
    let age = today.getFullYear() - birthdate.getFullYear();
    
    // Menghitung perbedaan bulan dan hari antara hari ini dan tanggal lahir
    const monthDiff = today.getMonth() - birthdate.getMonth();
    const dayDiff = today.getDate() - birthdate.getDate();

    // Jika bulan saat ini lebih kecil dari bulan lahir, atau jika sama tapi hari saat ini lebih kecil,
    // maka usia dikurangi 1, karena ulang tahun belum terjadi tahun ini
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--; // Mengurangi usia 1 tahun jika ulang tahun belum lewat
    }

    // Mengembalikan nilai usia yang sudah dihitung
    return age;
}
