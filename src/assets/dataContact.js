import { FiPhoneCall, FiMail, FiMapPin, FiClock } from "react-icons/fi";

export const contactDetails = {
  whatsapp: {
    label: "WhatsApp Hotline",
    value: "+62 857-7779-6117",
    link: "https://wa.me/6285777796117?text=Halo%20Tombo%20Ati%20Al%20Mukarramah%2C%20saya%20ingin%20berkonsultasi%20mengenai%20layanan%20rukiah.",
    icon: FiPhoneCall,
  },
  email: {
    label: "Alamat Email Resmi",
    value: "tomboatialmukarromah@gmail.com",
    link: "mailto:tomboatialmukarromah@gmail.com",
    icon: FiMail,
  },
  address: {
    label: "Pusat Rehabilitasi & Konseling",
    value: "JL. Suka Damai VI RT.08/04 NO.7 SERUA INDAH CIPUTAT",
    icon: FiMapPin,
  },
};

export const scheduleDetails = [
  {
    id: "weekday",
    label: "Senin - Jumat",
    time: "Libur (Kecuali Keadaan Darurat)",
    desc: "Hanya melayani penanganan mendesak/darurat.",
  },
  {
    id: "weekend",
    label: "Sabtu - Minggu",
    time: "10.00 - 22.00 WIB",
    desc: "Sesi konsultasi utama, pendaftaran tatap muka, dan tindakan rukiah.",
  },
];
