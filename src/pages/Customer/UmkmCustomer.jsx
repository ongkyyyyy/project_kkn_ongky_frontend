import "react-multi-carousel/lib/styles.css";
import { useState, useEffect } from 'react';
import { indexUmkm } from '../../api/apiUmkm';

function UmkmCustomer() {
  const [umkms, setUmkms] = useState([]);

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

  return (
    <>
      <div className="pt-16">
      <h1 className='text-5xl text-customcp17 uppercase font-poppins'>Dompol</h1>
        <div>
          {umkms.map((umkm) => (
            <div key={umkm.id}>
              <h4>{umkm.nama_umkm}</h4>
              <p>{umkm.deskripsi}</p>
              <p>{umkm.alamat}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default UmkmCustomer;
