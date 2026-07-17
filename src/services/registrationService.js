import { supabase } from "../supabaseClient";
import { contactDetails } from "../assets/dataContact";

/**
 * Handle proses pendaftaran: Simpan ke Supabase, lalu arahkan ke WhatsApp Hotline
 * @param {Object} formData - Data dari state form input (termasuk alamat/share loc)
 */
export const handlePendaftaranClient = async (formData) => {
  try {
    // 1. Validasi Input Dasar (Menambahkan alamat sebagai field wajib diisi)
    if (
      !formData.name ||
      !formData.phone ||
      !formData.gender ||
      !formData.address ||
      !formData.complaint
    ) {
      throw new Error("Semua baris formulir wajib diisi demi validasi.");
    }

    // 2. INTEGRASI SUPABASE: Simpan data pendaftaran ke PostgreSQL (Termasuk Kolom Alamat)
    const { error: supabaseError } = await supabase
      .from("registrations")
      .insert([
        {
          name: formData.name,
          age: formData.age ? parseInt(formData.age, 10) : null,
          phone: formData.phone,
          gender: formData.gender,
          address: formData.address, // Menyimpan data teks alamat / link share loc ke database
          complaint: formData.complaint,
          status: "process", // Mengirimkan status 'process' secara eksplisit
        },
      ]);

    // Jika terjadi error saat menyimpan ke Supabase, langsung hentikan proses
    if (supabaseError) {
      throw new Error(`Gagal menyimpan ke database: ${supabaseError.message}`);
    }

    // 3. GENERATE PESAN WHATSAPP: Menyertakan Alamat/Link Share Loc ke dalam teks chat
    const messageText = `*FORMULIR PERMOHONAN PENDAMPINGAN*
--------------------------------------------
*Nama Lengkap:* ${formData.name}
*Usia:* ${formData.age ? formData.age + " Tahun" : "-"}
*Jenis Kelamin:* ${formData.gender}
*No. WhatsApp:* ${formData.phone}
*Alamat Rumah:* ${formData.address}
*Detail Keluhan:* ${formData.complaint}
--------------------------------------------
Data pendaftaran telah tersimpan di sistem dengan status [Process]. Mohon tunggu respon dari kami untuk menentukan jadwal pendampingan. Terima kasih.`;

    const waBaseUrl = "https://wa.me/";
    const cleanNumber = contactDetails.whatsapp.value.replace(/[^0-9]/g, "");

    const whatsappRedirectUrl = `${waBaseUrl}${cleanNumber}?text=${encodeURIComponent(messageText)}`;

    return {
      success: true,
      redirectUrl: whatsappRedirectUrl,
    };
  } catch (error) {
    console.error("Error pada Registration Service:", error.message);
    return {
      success: false,
      error: error.message,
    };
  }
};
