import { useState, useEffect, useRef } from 'react';
import { 
  indexUmkm, 
  createUmkm, 
  updateUmkm, 
  deleteUmkm, 
  updateStatusUmkm 
} from '../../api/apiUmkm';
import { toast } from 'react-toastify';

const UmkmManagement = () => {
  const [umkms, setUmkms] = useState([]);
  const [newUmkm, setNewUmkm] = useState({
    nama_umkm: '',
    deskripsi_umkm: '',
    pemilik: '',
    foto_umkm: null,
  });
  const [editingUmkm, setEditingUmkm] = useState(null);
  const [editedUmkm, setEditedUmkm] = useState({
    nama_umkm: '',
    deskripsi_umkm: '',
    pemilik: '',
    foto_umkm: null,
  });
  const [searchQuery, setSearchQuery] = useState('');
  const fileInputRef = useRef(null);

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

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  };

  const handleCreateUmkm = async () => {
    const { nama_umkm, deskripsi_umkm, pemilik, foto_umkm } = newUmkm;
    const base64Foto = foto_umkm ? await convertToBase64(foto_umkm) : null;

    const data = { nama_umkm, deskripsi_umkm, pemilik, foto_umkm: base64Foto };

    try {
      await createUmkm(data);
      setNewUmkm({ nama_umkm: '', deskripsi_umkm: '', pemilik: '', foto_umkm: null });
      if (fileInputRef.current) {
        fileInputRef.current.value = null;
      }
      fetchUmkms();
      toast.success('UMKM berhasil dibuat!');
    } catch (error) {
      console.error('Error creating UMKM:', error);
      toast.error('Error dalam membuat UMKM.');
    }
  };

  const handleUpdateUmkm = async (id) => {
    const { nama_umkm, deskripsi_umkm, pemilik, foto_umkm } = editedUmkm;
    let base64Foto = null;
    if (foto_umkm instanceof File) {
      base64Foto = await convertToBase64(foto_umkm);
    } else if (typeof foto_umkm === 'string') {
      base64Foto = foto_umkm;
    }
  
    const data = { nama_umkm, deskripsi_umkm, pemilik, foto_umkm: base64Foto };
  
    try {
      await updateUmkm(id, data);
      setEditingUmkm(null);
      setEditedUmkm({ nama_umkm: '', deskripsi_umkm: '', pemilik: '', foto_umkm: null });
      fetchUmkms();
      toast.success('UMKM berhasil diupdate!');
    } catch (error) {
      console.error('Error updating UMKM:', error);
      toast.error('Error dalam mengupdate UMKM!');
    }
  };

  const handleDeleteUmkm = async (id) => {
    try {
      await deleteUmkm(id);
      setUmkms(prevUmkms => prevUmkms.filter(umkm => umkm.id_umkm !== id));
      toast.success('UMKM berhasil dihapus!');
    } catch (error) {
      console.error('Error deleting UMKM:', error);
      toast.error('Error dalam menghapus UMKM!');
    }
  };

  const handleSearch = () => {
    fetchUmkms(searchQuery);
  };

  const handleUpdateStatusUmkm = async (id) => {
    try {
      await updateStatusUmkm(id);
      fetchUmkms();
      toast.success('Berita mengubah status UMKM!');
    } catch (error) {
      console.error('Error changing UMKM status:', error);
      toast.error('Error mengupdate status UMKM!');
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setEditedUmkm({ ...editedUmkm, foto_umkm: file });
  };

  return (
    <div className="container mx-auto p-10 max-w-5xl">
      <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-3xl font-bold mb-4">UMKM</h2>
        <p className="text-gray-600">Selamat datang di halaman pengelolaan UMKM.</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
        <h3 className="text-lg font-semibold mb-4">List UMKM</h3>
        <div className="flex items-center mb-4">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search UMKM..."
            className="mr-4 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button onClick={handleSearch} className="bg-customcp15 hover:bg-customcp16 text-white p-2 rounded-lg transition duration-300">Search</button>
        </div>
        <ul className="divide-y divide-gray-200">
          {umkms.map(umkm => (
            <li key={umkm.id_umkm} className="py-4 flex justify-between items-start"> 
              {editingUmkm === umkm.id_umkm ? (
                <div className="flex-grow flex flex-col items-start space-y-2">
                  <input
                    type="text"
                    value={editedUmkm.nama_umkm}
                    onChange={(e) => setEditedUmkm({ ...editedUmkm, nama_umkm: e.target.value })}
                    placeholder="Nama UMKM"
                    className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 w-full" 
                  />
                  <textarea
                    value={editedUmkm.deskripsi_umkm}
                    onChange={(e) => setEditedUmkm({ ...editedUmkm, deskripsi_umkm: e.target.value })}
                    placeholder="Deskripsi"
                    className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none w-full" 
                    rows={4}
                    cols={40} 
                  />
                  <input
                    type="text"
                    value={editedUmkm.pemilik}
                    onChange={(e) => setEditedUmkm({ ...editedUmkm, pemilik: e.target.value })}
                    placeholder="Pemilik"
                    className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
                  />
                  <input
                    type="file"
                    onChange={handleFileChange}
                    className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                  {editedUmkm.foto_umkm && (
                    <img
                      src={typeof editedUmkm.foto_umkm === 'string' ? `public/storage/${editedUmkm.foto_umkm}` : URL.createObjectURL(editedUmkm.foto_umkm)}
                      className="w-20 h-20 object-cover mt-2"
                    />
                  )}
                  <button onClick={() => handleUpdateUmkm(umkm.id_umkm)} className="bg-customcp15 hover:bg-customcp16 text-white p-2 rounded-lg transition duration-300">Save</button>
                </div>
              ) : (
                <div className="flex-grow flex items-center justify-between">
                  <div>
                    <div className="font-semibold">{umkm.nama_umkm}</div>
                    <div className="text-gray-600">{umkm.deskripsi_umkm}</div>
                    <div className="text-gray-600">{umkm.pemilik}</div>
                    <div className="text-gray-600">{umkm.status_umkm === 1 ? 'Aktif' : 'Tidak Aktif'}</div>
                    <img
                      src={`http://127.0.0.1:8000/storage/${umkm.foto_umkm}`}
                      alt={umkm.foto_umkm}
                      className="w-20 h-20 object-cover mt-2"
                    />
                  </div>
                  <div className="space-x-2">
                    <button onClick={() => {
                      setEditingUmkm(umkm.id_umkm);
                      setEditedUmkm({ 
                        nama_umkm: umkm.nama_umkm, 
                        deskripsi_umkm: umkm.deskripsi_umkm, 
                        pemilik: umkm.pemilik,
                        foto_umkm: umkm.foto_umkm
                      });
                    }} className="bg-yellow-600 hover:bg-yellow-800 text-white p-2 rounded-lg transition duration-300">Edit</button>
                    <button onClick={() => handleDeleteUmkm(umkm.id_umkm)} className="bg-customcp17 hover:bg-red-700 text-white p-2 rounded-lg transition duration-300">Delete</button>
                    <button onClick={() => handleUpdateStatusUmkm(umkm.id_umkm)} className="bg-customcp15 hover:bg-customcp16 text-white p-2 rounded-lg transition duration-300">
                      {umkm.status_umkm ? 'Nonaktifkan' : 'Aktifkan'}
                    </button>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
        <h3 className="text-lg font-semibold mb-4">Buat UMKM Baru</h3>
        <div className="space-y-2">
          <input
            type="text"
            value={newUmkm.nama_umkm}
            onChange={(e) => setNewUmkm({ ...newUmkm, nama_umkm: e.target.value })}
            placeholder="Nama UMKM"
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <textarea
            value={newUmkm.deskripsi_umkm}
            onChange={(e) => setNewUmkm({ ...newUmkm, deskripsi_umkm: e.target.value })}
            placeholder="Deskripsi"
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
            rows={4}
          />
          <input
            type="text"
            value={newUmkm.pemilik}
            onChange={(e) => setNewUmkm({ ...newUmkm, pemilik: e.target.value })}
            placeholder="Pemilik"
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="file"
            ref={fileInputRef}
            onChange={(e) => setNewUmkm({ ...newUmkm, foto_umkm: e.target.files[0] })}
            className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {newUmkm.foto_umkm && (
            <img
              src={URL.createObjectURL(newUmkm.foto_umkm)}
              alt={newUmkm.foto_umkm.name}
              className="w-20 h-20 object-cover mt-2"
            />
          )}
          <button onClick={handleCreateUmkm} className="w-full bg-customcp15 hover:bg-customcp16 text-white p-2 rounded-lg transition duration-300">Create UMKM</button>
        </div>
      </div>
    </div>
  );
};

export default UmkmManagement;
