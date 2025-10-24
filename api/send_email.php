<?php
header('Content-Type: application/json');
date_default_timezone_set('Asia/Jakarta');

$response = ['success' => false, 'message' => 'Permintaan tidak valid.'];

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    // Fungsi sanitasi dasar
    function sanitize_input($data) {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }
    
    // Ambil data POST
    $name = sanitize_input($_POST['name'] ?? 'N/A');
    $email = sanitize_input($_POST['email'] ?? 'N/A');
    $phone = sanitize_input($_POST['phone'] ?? 'N/A');
    $project_type = sanitize_input($_POST['project_type'] ?? 'N/A');
    $message = sanitize_input($_POST['message'] ?? 'N/A');
    
    // Validasi email dasar
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $response['message'] = 'Alamat email tidak valid.';
    } elseif (empty($name) || empty($message)) {
        $response['message'] = 'Nama dan Pesan wajib diisi.';
    } else {
        
        // Target penerima email
        $to = "info@senyiur.com"; // Ganti dengan email Anda yang sebenarnya!
        $subject = "Konsultasi Baru: {$name}";
        $headers = "From: {$email}\r\n";
        $headers .= "Reply-To: {$email}\r\n";
        $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

        $email_body = "
        Pesan Konsultasi Baru ({$project_type}):
        -------------------------------------------
        Nama: {$name}
        Email: {$email}
        Telepon: {$phone}
        Tipe Proyek: {$project_type}
        Waktu: " . date("d M Y H:i:s") . "
        
        Pesan:
        {$message}
        ";

        // Coba kirim email
        // CATATAN: Fungsi mail() membutuhkan konfigurasi server SMTP.
        // if (mail($to, $subject, $email_body, $headers)) {
        //     $response['success'] = true;
        //     $response['message'] = 'Pesan Anda berhasil terkirim!';
        // } else {
        //     $response['message'] = 'Gagal mengirim email. Coba lagi nanti.';
        // }
        
        // --- SIMULASI SUKSES (Hapus baris ini jika mail() di atas diaktifkan) ---
        $response['success'] = true;
        $response['message'] = 'Pesan Anda berhasil terkirim!';
        // ------------------------------------------------------------------------
    }
}

echo json_encode($response);
exit;
?>