// CARA MENGGUNAKAN SCRIPT INI:
// 1. Buka Google Sheets baru di browser Anda (sheets.new).
// 2. Beri nama Sheet tersebut (misal: "Buku Tamu Pernikahan").
// 3. Di baris pertama (A1, B1, C1), tuliskan header: "Nama", "Ucapan", "Tanggal".
// 4. Klik menu 'Ekstensi' (Extensions) > 'Apps Script'.
// 5. Hapus semua kode yang ada, lalu paste semua kode di bawah ini.
// 6. Klik tombol Save (logo disket).
// 7. Klik tombol 'Terapkan' (Deploy) di pojok kanan atas > 'Deployment baru' (New deployment).
// 8. Pilih jenis: 'Aplikasi Web' (Web App).
// 9. Akses: Ubah menjadi "Siapa saja" (Anyone).
// 10. Klik 'Terapkan' (Deploy). 
//     (Jika diminta otorisasi, klik 'Izinkan' / 'Review permissions' -> pilih akun Google Anda -> 'Advanced' -> 'Go to Untitled project').
// 11. Salin "URL Aplikasi Web" yang diberikan. Paste URL tersebut ke file RSVPSection.tsx di kode Anda!

function doPost(e) {
  // Buka Sheet yang sedang aktif
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  
  // Ambil data JSON yang dikirim dari website
  var data = JSON.parse(e.postData.contents);
  
  // Buat format tanggal (contoh: 12/10/2026 14:30:00)
  var date = new Date();
  var dateString = date.toLocaleDateString('id-ID') + ' ' + date.toLocaleTimeString('id-ID');
  
  // Tambahkan baris baru ke Google Sheet: [Nama, Pesan, Tanggal]
  sheet.appendRow([data.name, data.message, dateString]);
  
  // Berikan balasan sukses ke website
  return ContentService.createTextOutput(JSON.stringify({ "status": "success" })).setMimeType(ContentService.MimeType.JSON);
}

function doGet(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = sheet.getDataRange().getValues();
  
  var result = [];
  
  // Mulai dari baris ke-2 (index 1), karena baris 1 adalah header tabel
  for (var i = 1; i < data.length; i++) {
    if(data[i][0] && data[i][1]) { // Pastikan tidak kosong
      result.push({
        name: data[i][0],
        message: data[i][1],
        date: data[i][2]
      });
    }
  }
  
  // Return data secara terbalik agar ucapan terbaru berada di paling atas
  return ContentService.createTextOutput(JSON.stringify(result.reverse())).setMimeType(ContentService.MimeType.JSON);
}
