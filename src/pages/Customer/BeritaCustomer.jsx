import "react-multi-carousel/lib/styles.css";
import { useState, useEffect } from 'react';
import { indexBeritas } from '../../api/apiBerita';

function BeritaCustomer() {
  const [beritas, setBeritas] = useState([]);

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

  return (
    <>
      <div className="pt-16">
        <h3>
          List Berita Dompol
        </h3>
        <div>
          {beritas.map((berita) => (
            <div key={berita.id}>
              <h4>{berita.judul_berita}</h4>
              <p>{berita.deskripsi}</p>
              <p>{berita.tanggal}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default BeritaCustomer;
