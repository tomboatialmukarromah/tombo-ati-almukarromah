import { useState } from "react";
import { FiUser, FiPhone, FiMessageSquare, FiMapPin } from "react-icons/fi";
import InputField from "../../components/UI/Fields/InputField";
import RadioField from "../../components/UI/Fields/RadioField";
import TextAreaField from "../../components/UI/Fields/TextAreaField";
import Button from "../../components/UI/Button";

export default function RegistrationForm({ onSubmit, loading, errorMessage }) {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    phone: "",
    gender: "",
    address: "", // Tambahan field alamat baru
    complaint: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name !== "age") {
      setFormData((prev) => ({ ...prev, [name]: value }));
      return;
    }

    if (value >= 0) {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const genderOptions = [
    { value: "Laki-laki", label: "Laki-laki" },
    { value: "Perempuan", label: "Perempuan" },
  ];

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 md:p-10 rounded-2xl border border-secondary/20 shadow-md space-y-5 w-full"
    >
      {errorMessage && (
        <div className="bg-red-50 border border-red-200 text-red-600 text-xs md:text-sm p-4 rounded-xl font-body">
          {errorMessage}
        </div>
      )}

      {/* NAMA LENGKAP */}
      <InputField
        label="Nama Lengkap"
        id="name"
        name="name"
        required
        value={formData.name}
        onChange={handleChange}
        placeholder="Masukkan nama sesuai KTP"
        icon={FiUser}
      />

      {/* GRID KOLOM: USIA & NO TELEPON */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <InputField
          label="Usia (Tahun)"
          id="age"
          name="age"
          type="number"
          value={formData.age}
          onChange={handleChange}
          placeholder="Contoh: 25"
        />

        <InputField
          label="No. WhatsApp Aktif"
          id="phone"
          name="phone"
          type="tel"
          required
          value={formData.phone}
          onChange={handleChange}
          placeholder="Contoh: 081234567890"
          icon={FiPhone}
        />
      </div>

      {/* JENIS KELAMIN */}
      <RadioField
        label="Jenis Kelamin"
        name="gender"
        required
        value={formData.gender}
        onChange={handleChange}
        options={genderOptions}
      />

      {/* INPUT ALAMAT DENGAN UX COGNITIVE FIX */}
      <div className="space-y-1">
        <TextAreaField
          label="Alamat Rumah Lengkap"
          id="address"
          name="address"
          required
          value={formData.address}
          onChange={handleChange}
          placeholder="Masukkan nama jalan, RT/RW, nomor rumah, atau tempelkan (paste) link Share Location Google Maps Anda di sini..."
          icon={FiMapPin}
          rows={3}
        />
        {/* Micro-copy khusus untuk mereduksi beban kognitif pengguna share-loc */}
        <p className="text-[11px] text-muted font-body leading-relaxed px-1">
          💡 <span className="font-semibold text-primary">Tips:</span> Jika Anda
          bingung nama jalan formal rumah Anda, Anda boleh membuka WhatsApp /
          Google Maps, lalu{" "}
          <span className="underline">
            salin tautan (copy link) Share Location
          </span>{" "}
          tempat tinggal Anda dan tempelkan di kotak atas.
        </p>
      </div>

      {/* DETAIL KELUHAN */}
      <TextAreaField
        label="Detail Keluhan / Kondisi Saat Ini"
        id="complaint"
        name="complaint"
        required
        value={formData.complaint}
        onChange={handleChange}
        placeholder="Ceritakan secara singkat gangguan atau cemas berlebih yang Anda rasakan..."
        icon={FiMessageSquare}
      />

      {/* TOMBOL SUBMIT */}
      <div className="pt-2">
        <Button
          type="submit"
          variant="primary"
          className="w-full py-4 flex items-center justify-center gap-2"
          disabled={loading}
        >
          {loading ? "Memproses Permohonan..." : "Kirim Formulir Pendaftaran"}
        </Button>
      </div>
    </form>
  );
}
