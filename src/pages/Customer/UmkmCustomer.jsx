import { useState, useEffect } from 'react';
import { indexUmkm } from '../../api/apiUmkm';
import UmkmModal from '../../components/modal/UmkmModal';
import batikJeruk from '../../assets/img/batikJeruk2.png';

function UmkmCustomer() {
  const [umkms, setUmkms] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedUmkm, setSelectedUmkm] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchUmkms();
  }, []);

  const fetchUmkms = async (query = '') => {
    try {
      const data = await indexUmkm(query);
      setUmkms(data);
    } catch (error) {
      console.error('Error fetching UMKM:', error);
    }
  };

  const handleSearch = () => {
    fetchUmkms(searchQuery);
  };

  const handleUmkmClick = (umkm) => {
    setSelectedUmkm(umkm);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedUmkm(null);
    setIsModalOpen(false);
  };

  return (
    <div className="pt-16 px-8 pb-16">
      <h1 className="text-5xl text-customcp17 uppercase font-roboto-slab font-bold mb-8 text-center pt-8">UMKM</h1>

      <div className="mb-8 flex justify-center">
        <input
          type="text"
          className="border border-gray-300 rounded-l-lg p-2 w-1/2"
          placeholder="Cari UMKM . . ."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className="bg-customcp17 text-white rounded-r-lg p-2"
        >
          Search
        </button>
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-semibold font-poppins mb-6">Baru Ditambahkan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {umkms.slice(0, 3).map((umkm) => (
            <div
              key={umkm.id}
              className="bg-white rounded-lg shadow-md p-4 cursor-pointer transition-transform duration-500 hover:scale-105"
              onClick={() => handleUmkmClick(umkm)}
              style={{
                backgroundImage: `url(${batikJeruk})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <img
                src={`http://127.0.0.1:8000/storage/${umkm.foto_umkm}`}
                alt={umkm.nama_umkm}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h4 className="text-xl font-bold mb-2">{umkm.nama_umkm}</h4>
              <p className="text-gray-700 mb-2">{umkm.deskripsi_umkm}</p>
              <p className="text-gray-600">{umkm.pemilik}</p>
              <p className="text-gray-600">{umkm.status_umkm}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 font-poppins">Semua UMKM</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {umkms
            .slice()
            .sort((a, b) => a.nama_umkm.localeCompare(b.nama_umkm))
            .map((umkm) => (
              <div
                key={umkm.id}
                className="bg-white rounded-lg shadow-md p-4 cursor-pointer transition-transform duration-500 hover:scale-105"
                onClick={() => handleUmkmClick(umkm)}
                style={{
                  backgroundImage: `url(${batikJeruk})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <img
                  src={`http://127.0.0.1:8000/storage/${umkm.foto_umkm}`}
                  alt={umkm.nama_umkm}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h4 className="text-xl font-bold mb-2">{umkm.nama_umkm}</h4>
                <p className="text-gray-700 mb-2">{umkm.deskripsi_umkm}</p>
                <p className="text-gray-600">{umkm.pemilik}</p>
                <p className="text-gray-600">{umkm.status_umkm}</p>
              </div>
            ))}
        </div>
      </div>

      {isModalOpen && selectedUmkm && (
        <UmkmModal umkm={selectedUmkm} closeModal={closeModal} />
      )}
    </div>
  );
}

export default UmkmCustomer;
