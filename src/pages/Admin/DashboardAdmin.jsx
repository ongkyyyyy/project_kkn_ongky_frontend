import { useState, useEffect } from 'react';
import { indexUmkm } from '../../api/apiUmkm';
import { indexBeritas } from '../../api/apiBerita';

const DashboardAdmin = () => {
  const [beritas, setBeritas] = useState([]);
  const [umkms, setUmkms] = useState([]);

  useEffect(() => {
    fetchBeritas();
    fetchUmkms();
  }, []);

  const fetchBeritas = async (query = '') => {
    try {
      const data = await indexBeritas(query);
      setBeritas(data);
    } catch (error) {
      console.error('Error fetching beritas:', error);
    }
  };

  const fetchUmkms = async (query = '') => {
    try {
      const data = await indexUmkm(query);
      setUmkms(data);
    } catch (error) {
      console.error('Error fetching UMKM:', error);
    }
  };

  return (
    <div className="flex-1 p-10">
      <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-3xl font-bold mb-4">Dashboard</h2>
        <p className="text-gray-600">Selamat datang di halaman Dashboard Admin.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold mb-2">Total Berita</h3>
          <p className="text-2xl font-bold">{beritas.length}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold mb-2">Total UMKM</h3>
          <p className="text-2xl font-bold">{umkms.length}</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
        <h3 className="text-lg font-semibold mb-4">Berita Terbaru</h3>
        <ul className="divide-y divide-gray-200">
          {beritas.slice(0, 3).map((berita, index) => (
            <li key={index} className="py-2">{berita.judul_berita}</li>
          ))}
        </ul>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
        <h3 className="text-lg font-semibold mb-4">UMKM Terbaru</h3>
        <ul className="divide-y divide-gray-200">
          {umkms.slice(0, 3).map((umkm, index) => (
            <li key={index} className="py-2 flex items-center">
              <img
                src={`https://dompol.info/storage/${umkm.foto_umkm}`}
                alt={umkm.foto_umkm}
                className="w-20 h-20 object-cover mt-2 mr-4"
              />
              <span>{umkm.nama_umkm}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DashboardAdmin;
