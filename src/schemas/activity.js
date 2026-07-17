export default {
  name: "activity",
  title: "Aktifitas Organisasi",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Judul Aktifitas",
      type: "string",
      validation: (Rule) => Rule.required().error("Judul harus diisi."),
    },
    {
      name: "date",
      title: "Tanggal Kegiatan",
      type: "date",
      options: {
        dateFormat: "DD MMMM YYYY",
        calendarTodayLabel: "Hari ini",
      },
      validation: (Rule) =>
        Rule.required().error("Tanggal kegiatan harus ditentukan."),
    },
    {
      name: "image",
      title: "Foto Kegiatan",
      type: "image",
      options: {
        hotspot: true, // Mengaktifkan fitur UX cropping/focus gambar di dashboard
      },
      validation: (Rule) =>
        Rule.required().error("Foto kegiatan wajib diunggah."),
    },
    {
      name: "desc",
      title: "Deskripsi Detail",
      type: "text", // Menggunakan tipe 'text' untuk textarea input panjang
      validation: (Rule) =>
        Rule.required().min(10).error("Deskripsi minimal berisi 10 karakter."),
    },
  ],
};
