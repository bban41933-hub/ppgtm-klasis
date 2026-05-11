import { useState } from 'react';
import { 
  Home, Users, Calendar, Phone, Menu, X, ChevronRight, 
  Target, Heart, Activity, Music, Coins, Info, Link as LinkIcon, Mail, MessageSquare 
} from 'lucide-react';

// --- KOMPONEN TOMBOL DIPINDAHKAN KE LUAR SINI ---
// Ini agar React tidak membuat ulang tombolnya berkali-kali
const NavButton = ({ name, id, icon: Icon, activePage, onMenuClick }) => (
  <button
    onClick={() => onMenuClick(id)}
    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors w-full md:w-auto ${
      activePage === id 
        ? 'bg-purple-900 text-white font-semibold' 
        : 'text-purple-100 hover:bg-purple-700 hover:text-white'
    }`}
  >
    <Icon size={18} />
    <span>{name}</span>
  </button>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState('beranda');

  // --- FUNGSI UNTUK MENGKLIK MENU ---
  const handleMenuClick = (id) => {
    setActivePage(id);
    setIsMenuOpen(false); // Otomatis menutup menu di HP setelah diklik
  };

  // --- DATA PENGURUS ---
  const pengurus = [
    { jabatan: "Ketua", nama: "Linus Efendi" },
    { jabatan: "Wakil Ketua", nama: "Mulder Rimanang" },
    { jabatan: "Sekretaris", nama: "Weldis" },
    { jabatan: "Bidang Kerohanian", nama: "Nixen" },
    { jabatan: "Bidang Olahraga", nama: "Alwan" }
  ];

  // --- DATA PROGRAM KERJA ---
  const programKerja = [
    {
      bidang: "Program Umum",
      icon: Target,
      color: "bg-purple-100 text-purple-700",
      items: [
        "Ibadah Rutin sebulan sekali digilirkan ke tiap jemaat, dirangkaikan dengan malam dana (lelang barang).",
        "Pembinaan pemuda setiap HUT PPGTM pada bulan Maret.",
        "Perayaan HUT: 2027 (Ranteberang), 2028 (Kayuberang), 2029 (Bumal), 2030 (Sodangan), 2031 (Cabang Kebaktian).",
        "Program pertemuan tahunan.",
        "Pengumpulan data base (paling lambat 16 Mei 2026).",
        "Pembangunan Sekretariat (menunggu hasil sidang Klasis)."
      ]
    },
    {
      bidang: "Bidang Kerohanian",
      icon: Heart,
      color: "bg-blue-100 text-blue-700",
      items: [
        "Ibadah Penghiburan malam keempat.",
        "Perkunjungan sosial bagi anggota yang sakit parah (berkoordinasi dengan pengurus jemaat).",
        "Pembuatan Jadwal Pelayan Ibadah."
      ]
    },
    {
      bidang: "Bidang Olahraga",
      icon: Activity,
      color: "bg-orange-100 text-orange-700",
      items: [
        "Mengadakan kegiatan olahraga setiap perayaan Klasis.",
        "Pengadaan alat-alat olahraga."
      ]
    },
    {
      bidang: "Bidang Kesenian",
      icon: Music,
      color: "bg-pink-100 text-pink-700",
      items: [
        "Mengadakan latihan kesenian.",
        "Pengadaan alat musik."
      ]
    },
    {
      bidang: "Bidang Dana",
      icon: Coins,
      color: "bg-green-100 text-green-700",
      items: [
        "Jangka Pendek: Menanam sayuran di setiap jemaat.",
        "Jangka Panjang: Menanam tanaman rimpang (kunyit, jahe) di setiap jemaat.",
        "Bazar dan Aksi Seribu.",
        "Lelang setiap hari raya."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      
      {/* --- NAVBAR (Bagian Atas) --- */}
      <nav className="bg-purple-800 text-white shadow-lg sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            
            {/* Logo & Judul */}
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setActivePage('beranda')}>
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center overflow-hidden">
                <img 
                  src="/logo.png" 
                  alt="Logo" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden w-full h-full bg-white items-center justify-center text-purple-800 font-bold text-xl">
                  P
                </div>
              </div>
              <div>
                <h1 className="font-bold text-lg leading-tight tracking-wide">PPGTM</h1>
                <p className="text-xs text-purple-200">Klasis Buntumalangka' I</p>
              </div>
            </div>

            {/* Menu Desktop */}
            <div className="hidden md:flex space-x-1">
              <NavButton name="Beranda" id="beranda" icon={Home} activePage={activePage} onMenuClick={handleMenuClick} />
              <NavButton name="Profil" id="profil" icon={Users} activePage={activePage} onMenuClick={handleMenuClick} />
              <NavButton name="Program" id="program" icon={Target} activePage={activePage} onMenuClick={handleMenuClick} />
              <NavButton name="Info & Arsip" id="info" icon={Info} activePage={activePage} onMenuClick={handleMenuClick} />
              <NavButton name="Kontak" id="kontak" icon={Phone} activePage={activePage} onMenuClick={handleMenuClick} />
            </div>

            {/* Tombol Menu Mobile */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 hover:bg-purple-700 rounded-lg transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <div className="md:hidden bg-purple-800 px-4 pt-2 pb-4 space-y-2 border-t border-purple-700 shadow-inner">
            <NavButton name="Beranda" id="beranda" icon={Home} activePage={activePage} onMenuClick={handleMenuClick} />
            <NavButton name="Profil" id="profil" icon={Users} activePage={activePage} onMenuClick={handleMenuClick} />
            <NavButton name="Program" id="program" icon={Target} activePage={activePage} onMenuClick={handleMenuClick} />
            <NavButton name="Info & Arsip" id="info" icon={Info} activePage={activePage} onMenuClick={handleMenuClick} />
            <NavButton name="Kontak" id="kontak" icon={Phone} activePage={activePage} onMenuClick={handleMenuClick} />
          </div>
        )}
      </nav>

      {/* --- KONTEN UTAMA --- */}
      <main className="flex-grow">
        
        {/* HALAMAN BERANDA */}
        {activePage === 'beranda' && (
          <div className="animate-in fade-in duration-500">
            {/* Hero Section */}
            <div className="bg-gradient-to-b from-purple-800 to-purple-600 text-white py-24 px-4 text-center relative overflow-hidden">
              {/* Ornamen Latar Belakang */}
              <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
                 <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white blur-3xl"></div>
                 <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-purple-300 blur-3xl"></div>
              </div>

              <div className="max-w-4xl mx-auto relative z-10">
                <span className="bg-purple-900 text-purple-100 text-sm font-semibold px-4 py-1.5 rounded-full mb-6 inline-block shadow-sm">
                  Organisasi Intra Gereja Toraja Mamasa
                </span>
                <h2 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                  Persekutuan Pemuda <br/>Gereja Toraja Mamasa
                </h2>
                <p className="text-lg md:text-2xl text-purple-100 mb-10 leading-relaxed font-light">
                  Klasis Buntumalangka' I
                </p>
                
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <button 
                    onClick={() => setActivePage('program')}
                    className="bg-white text-purple-800 px-8 py-3 rounded-full font-bold shadow-lg hover:bg-gray-100 hover:scale-105 transition-all flex items-center justify-center space-x-2"
                  >
                    <span>Lihat Program Kerja</span>
                    <ChevronRight size={20} />
                  </button>
                  <button 
                    onClick={() => setActivePage('info')}
                    className="bg-purple-700 text-white border border-purple-400 px-8 py-3 rounded-full font-bold shadow-lg hover:bg-purple-800 hover:scale-105 transition-all flex items-center justify-center space-x-2"
                  >
                    <span>Informasi Terbaru</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Info Bar */}
            <div className="bg-yellow-500 text-yellow-900 py-4 px-4 shadow-md">
              <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6 text-center font-medium">
                <span className="flex items-center gap-2"><Calendar size={18} /> Ibadah Bulanan : 16 Mei 2026 di Jemaat Ranteberang</span>
                <span className="hidden md:inline">|</span>
                <span className="flex items-center gap-2"><Activity size={18} /> Deadline Pengumpulan Database: 16 Mei 2026</span>
              </div>
            </div>
          </div>
        )}

        {/* HALAMAN PROFIL */}
        {activePage === 'profil' && (
          <div className="max-w-5xl mx-auto px-4 py-12 animate-in fade-in duration-500">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-4">Profil Organisasi</h2>
              <div className="w-24 h-1 bg-purple-500 mx-auto mb-6"></div>
              <p className="text-gray-700 text-lg max-w-2xl mx-auto leading-relaxed">
                PPGTM Klasis Buntumalangka’ I adalah salah satu organisasi Intra Gereja Toraja Mamasa yang menjadi wadah persekutuan, pelayanan, dan kesaksian bagi para pemuda di lingkup klasis.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Struktur Pengurus</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {pengurus.map((person, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md p-6 border-t-4 border-purple-500 hover:shadow-lg transition-shadow text-center group">
                  <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                    <Users size={32} />
                  </div>
                  <h4 className="text-xl font-bold text-gray-800">{person.nama}</h4>
                  <p className="text-purple-600 font-medium mt-1">{person.jabatan}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* HALAMAN PROGRAM KERJA */}
        {activePage === 'program' && (
          <div className="max-w-6xl mx-auto px-4 py-12 animate-in fade-in duration-500">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-4">Program Kerja</h2>
              <div className="w-24 h-1 bg-purple-500 mx-auto mb-6"></div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Rencana kegiatan dan pelayanan PPGTM Klasis Buntumalangka' I yang dibagi ke dalam beberapa bidang.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {programKerja.map((program, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                  <div className={`p-4 flex items-center gap-3 border-b border-gray-100 ${program.color} bg-opacity-20`}>
                    <div className={`p-2 rounded-lg bg-white shadow-sm ${program.color}`}>
                      <program.icon size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">{program.bidang}</h3>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-3">
                      {program.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-gray-700">
                          <span className="text-purple-500 mt-1">•</span>
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* HALAMAN INFORMASI & ARSIP */}
        {activePage === 'info' && (
          <div className="max-w-5xl mx-auto px-4 py-12 animate-in fade-in duration-500">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-4">Informasi & Arsip</h2>
              <div className="w-24 h-1 bg-purple-500 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Papan Informasi */}
              <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100">
                <div className="bg-orange-500 text-white p-4 flex items-center gap-2">
                  <Info size={24} />
                  <h3 className="text-xl font-bold">Pengumuman Penting</h3>
                </div>
                <div className="p-6 space-y-6">
                  <div className="border-l-4 border-orange-500 pl-4">
                    <h4 className="font-bold text-gray-800">Setoran Jemaat</h4>
                    <p className="text-gray-600 mt-1">Setoran ke klasis dari jemaat dilakukan setiap triwulan pada <strong>minggu ke-4</strong>.</p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-bold text-gray-800">Ibadah Bulan Perdana</h4>
                    <p className="text-gray-600 mt-1">Akan dilaksanakan pada tanggal <strong>16 Mei 2026</strong> bertempat di <strong>Jemaat Ranteberang</strong>.</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-bold text-gray-800">Batas Pengumpulan Database</h4>
                    <p className="text-gray-600 mt-1">Pengumpulan data base dikumpul paling lambat tanggal <strong>16 Mei 2026</strong>.</p>
                  </div>
                </div>
              </div>

              {/* Arsip Digital */}
              <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100">
                <div className="bg-blue-600 text-white p-4 flex items-center gap-2">
                  <LinkIcon size={24} />
                  <h3 className="text-xl font-bold">Arsip Digital</h3>
                </div>
                <div className="p-6 flex flex-col justify-center h-full">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.3 3.5l6.5 11.2"/><path d="M19 14.7H5.2"/><path d="M8.5 21.6H2.9l3.3-5.7"/></svg>
                    </div>
                    <h4 className="font-bold text-lg text-gray-800">Dokumentasi Kemah Kerja Wilayah IX</h4>
                    <p className="text-gray-600 mt-2 text-sm">Akses seluruh foto dan dokumen kegiatan Kemah Kerja Wilayah IX di Klasis Buntumalangka' I melalui Google Drive resmi kami.</p>
                  </div>
                  
                  <a 
                    href="https://drive.google.com/drive/folders/1dZz8hE6Vd2aE7QdYvQelzgFH6JT_wf4S" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-3 rounded-xl font-semibold transition-colors shadow-md"
                  >
                    Buka Google Drive
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* HALAMAN KONTAK */}
        {activePage === 'kontak' && (
          <div className="max-w-3xl mx-auto px-4 py-12 animate-in fade-in duration-500">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-4">Hubungi Kami</h2>
              <div className="w-24 h-1 bg-purple-500 mx-auto mb-6"></div>
              <p className="text-gray-600">Jika ada pertanyaan terkait program kerja atau administrasi, silakan hubungi pengurus melalui kontak di bawah ini.</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center shrink-0">
                    <MessageSquare size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-800">WhatsApp Pengurus</h4>
                    <p className="text-gray-600 mb-2">Hubungi kami via pesan WhatsApp untuk respon cepat.</p>
                    <a href="#" className="text-green-600 font-bold hover:underline text-lg">
                      +62 85134033535 (Ketua PPGTM Klasis) {/* Nanti ganti dengan nomor asli */}
                    </a>
                  </div>
                </div>

                <hr className="border-gray-100" />

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-800">Email Resmi</h4>
                    <p className="text-gray-600 mb-2">Untuk keperluan persuratan dan dokumen resmi.</p>
                    <a href="mailto:sekretariat@ppgtm-bumal1.org" className="text-red-600 font-bold hover:underline text-lg">
                      ppgtmklasisbuntumalangka1@gmail.com {/* Nanti ganti dengan email asli */}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      </main>

      {/* --- FOOTER (Bagian Bawah) --- */}
      <footer className="bg-purple-950 text-white py-10 text-center">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-center mb-4">
             <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center overflow-hidden">
              <img
                src="/logo.png"
                alt="Logo PPGTM"
             className="w-full h-full object-cover"
               />
            </div>
          </div>
          <h3 className="text-xl font-bold mb-1">PPGTM Klasis Buntumalangka' I</h3>
          <p className="text-purple-300 mb-6 text-sm">Gereja Toraja Mamasa</p>
          <div className="border-t border-purple-800 pt-6 text-sm text-purple-400">
            &copy; {new Date().getFullYear()} PPGTM Klasis Buntumalangka' I. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}