import { useState, useEffect } from 'react';
import { indexBeritas } from '../../api/apiBerita';

function BeritaCustomer() {
  const [beritas, setBeritas] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

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
        {beritas.map((berita) => (
          <div key={berita.id} className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-500 hover:scale-105">
            <div className="bg-gradient-to-b from-gray-200 to-gray-100  px-6 py-4">
              <h4 className="text-xl font-semibold mb-2">{berita.judul_berita}</h4>
              <div className="flex justify-between items-center">
                <p className="text-gray-900">{berita.deskripsi}</p>
                <p className="text-gray-900">{berita.tanggal}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BeritaCustomer;
