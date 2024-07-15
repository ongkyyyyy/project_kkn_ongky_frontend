import { useState, useEffect } from 'react';
import { format, parse } from 'date-fns';
import { toast } from 'react-toastify';
import { 
  indexBeritas, 
  createBeritas, 
  updateBeritas, 
  deleteBeritas 
} from '../../api/apiBerita';

const BeritaManagement = () => {
  const [beritas, setBeritas] = useState([]);
  const [newBerita, setNewBerita] = useState({
      judul_berita: '',
      deskripsi: '',
      tanggal: format(new Date(), 'dd-MM-yyyy')
  });
  const [editingBerita, setEditingBerita] = useState(null);
  const [editedBerita, setEditedBerita] = useState({
      judul_berita: '',
      deskripsi: '',
      tanggal: format(new Date(), 'dd-MM-yyyy')
  });
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

  const handleCreateBerita = async () => {
    const formattedDate = format(parse(newBerita.tanggal, 'dd-MM-yyyy', new Date()), 'yyyy-MM-dd');

    const beritaToCreate = { ...newBerita, tanggal: formattedDate };

    if (!beritaToCreate.judul_berita || !beritaToCreate.deskripsi || !beritaToCreate.tanggal) {
        toast.error('Semua atribut perlu diisi!');
        return;
    }

    try {
        await createBeritas(beritaToCreate);
        setNewBerita({ judul_berita: '', deskripsi: '', tanggal: format(new Date(), 'dd-MM-yyyy') });
        fetchBeritas();
        toast.success('Berita berhasil dibuat!');
    } catch (error) {
        toast.error('Error dalam membuat berita.');
        console.error('Error creating berita:', error);
    }
};


const handleUpdateBerita = async (id) => {
    const formattedDate = format(parse(editedBerita.tanggal, 'dd-MM-yyyy', new Date()), 'yyyy-MM-dd');
    try {
        await updateBeritas(id, { ...editedBerita, tanggal: formattedDate });
        setEditingBerita(null);
        setEditedBerita({ judul_berita: '', deskripsi: '', tanggal: format(new Date(), 'dd-MM-yyyy') });
        fetchBeritas();
        toast.success('Berita berhasil diupdate!');
    } catch (error) {
        toast.error('Error dalam mengupdate berita.');
        console.error('Error updating berita:', error);
    }
};


  const handleDeleteBerita = async (id) => {
      try {
          await deleteBeritas(id);
          setBeritas(prevBeritas => prevBeritas.filter(berita => berita.id_berita !== id));
          toast.success('Berita berhasiil dihapus!');
      } catch (error) {
          toast.error('Error dalam menghapus berita.');
          console.error('Error deleting berita:', error);
      }
  };

  const handleSearch = () => {
      fetchBeritas(searchQuery);
  };

  return (
      <div className="container mx-auto p-10 max-w-5xl">
          <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
              <h2 className="text-3xl font-bold mb-4">Berita</h2>
              <p className="text-gray-600">Selamat datang di halaman pengelolaan Berita.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
              <h3 className="text-lg font-semibold mb-4">List Berita</h3>
              <div className="flex items-center mb-4">
                  <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search Berita..."
                      className="mr-4 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                  <button onClick={handleSearch} className="bg-customcp15 hover:bg-customcp16 text-white p-2 rounded-lg transition duration-300">Search</button>
              </div>
              <ul className="divide-y divide-gray-200">
                  {beritas.map(berita => (
                      <li key={berita.id_berita} className="py-4 flex justify-between items-start">
                          {editingBerita === berita.id_berita ? (
                              <div className="flex-grow flex flex-col items-start space-y-2">
                                  <input
                                      type="text"
                                      value={editedBerita.judul_berita}
                                      onChange={(e) => setEditedBerita({ ...editedBerita, judul_berita: e.target.value })}
                                      placeholder="Judul Berita"
                                      className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
                                  />
                                  <textarea
                                      value={editedBerita.deskripsi}
                                      onChange={(e) => setEditedBerita({ ...editedBerita, deskripsi: e.target.value })}
                                      placeholder="Deskripsi"
                                      className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none w-full"
                                      rows={4}
                                      cols={40}
                                  />
                                  <input
                                      type="text"
                                      value={editedBerita.tanggal}
                                      onChange={(e) => setEditedBerita({ ...editedBerita, tanggal: e.target.value })}
                                      placeholder="dd-MM-yyyy"
                                      className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                  />
                                  <button onClick={() => handleUpdateBerita(berita.id_berita)} className="bg-customcp15 hover:bg-customcp16 text-white p-2 rounded-lg transition duration-300">Save</button>
                              </div>
                          ) : (
                              <div className="flex-grow flex items-center justify-between">
                                  <div>
                                      <div className="font-semibold">{berita.judul_berita}</div>
                                      <div className="text-gray-600">{berita.deskripsi}</div>
                                      <div className="text-gray-400 text-sm">{format(new Date(berita.tanggal), 'dd-MM-yyyy')}</div>
                                  </div>
                                  <div className="space-x-2">
                                      <button onClick={() => {
                                          setEditingBerita(berita.id_berita);
                                          setEditedBerita({
                                              judul_berita: berita.judul_berita,
                                              deskripsi: berita.deskripsi,
                                              tanggal: format(new Date(berita.tanggal), 'dd-MM-yyyy')
                                          });
                                      }} className="bg-yellow-600 hover:bg-yellow-800 text-white p-2 rounded-lg transition duration-300">Edit</button>
                                      <button onClick={() => handleDeleteBerita(berita.id_berita)} className="bg-customcp17 hover:bg-red-700 text-white p-2 rounded-lg transition duration-300">Delete</button>
                                  </div>
                              </div>
                          )}
                      </li>
                  ))}
              </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
              <h3 className="text-lg font-semibold mb-4">Buat Berita Baru</h3>
              <div className="space-y-2">
                  <input
                      type="text"
                      value={newBerita.judul_berita}
                      onChange={(e) => setNewBerita({ ...newBerita, judul_berita: e.target.value })}
                      placeholder="Judul Berita"
                      className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                  <textarea
                      value={newBerita.deskripsi}
                      onChange={(e) => setNewBerita({ ...newBerita, deskripsi: e.target.value })}
                      placeholder="Deskripsi"
                      className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
                      rows={4}
                      cols={40}
                  />
                  <input
                      type="text"
                      value={newBerita.tanggal}
                      onChange={(e) => setNewBerita({ ...newBerita, tanggal: e.target.value })}
                      placeholder="dd-MM-yyyy"
                      className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                  <button onClick={handleCreateBerita} className="w-full bg-customcp15 hover:bg-customcp16 text-white p-2 rounded-lg transition duration-300">Create</button>
              </div>
          </div>
      </div>
  );
}

export default BeritaManagement;
