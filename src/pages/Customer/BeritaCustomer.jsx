import { useState, useEffect } from 'react';
import { indexBeritas } from '../../api/apiBerita';
import BeritaModal from '../../components/modal/BeritaModal';

function BeritaCustomer() {
  const [beritas, setBeritas] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBerita, setSelectedBerita] = useState(null);

  useEffect(() => {
    fetchBeritas();
  }, []);

  const fetchBeritas = async (query = '') => {
    try {
      const data = await indexBeritas(query);
      setBeritas(data);
    } catch (error) {
      console.error('Error fetching beritas:', error);
    }
  };

  const handleSearch = () => {
    fetchBeritas(searchQuery);
  };

  const openModal = (berita) => {
    setSelectedBerita(berita);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedBerita(null);
    setIsModalOpen(false);
  };

  return (
    <div className="container mx-auto px-4 pt-16 mb-16">
      <h1 className="text-5xl text-customcp17 uppercase font-roboto-slab font-bold mb-8 text-center pt-8">BERITA TERKINI</h1>
      <div className="flex justify-center">
        <input
          type="text"
          className="border border-gray-300 rounded-l-lg p-2 w-1/2"
          placeholder="Cari Berita . . ."
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
      <div className="flex flex-col gap-6 p-16">
      <h2 className="text-3xl font-bold mb-4">Terbaru dari Dompol:</h2>
        {beritas.map((berita) => (
          <div
            key={berita.id}
            className="bg-white shadow-md rounded-lg overflow-hidden transform transition-transform duration-500 hover:scale-105 cursor-pointer"
            onClick={() => openModal(berita)}
          >
            <div className="px-6 py-4">
              <h4 className="text-xl font-semibold mb-2">{berita.judul_berita}</h4>
              <div className="flex-row justify-between items-center">
                <p className="text-gray-900">{berita.tanggal}</p>
                <p className="text-gray-900">{berita.deskripsi}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && selectedBerita && (
        <BeritaModal berita={selectedBerita} closeModal={closeModal} />
      )}
    </div>
  );
}

export default BeritaCustomer;
