import PropTypes from 'prop-types';

const Modal = ({ umkm, closeModal }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
      <div className="relative w-auto max-w-3xl mx-auto my-6">
        <div className="relative bg-white rounded-lg shadow-lg outline-none focus:outline-none">
          <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
            <h3 className="text-2xl font-semibold">{umkm.nama_umkm}</h3>
            <button
              className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              onClick={closeModal}
            >
              <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">×</span>
            </button>
          </div>

          <div className="relative p-6">
            <img
              src={`https://dompol.info/storage/${umkm.foto_umkm}`}
              alt={umkm.nama_umkm}
              className="w-full h-80 object-cover rounded-md mb-4"
            />
            <p className="text-gray-700 mb-2">{umkm.deskripsi_umkm}</p>
            <p className="text-gray-600 mb-2">{umkm.pemilik}</p>
            <p className={`mb-2 ${umkm.status_umkm === 1 ? 'text-green-500' : 'text-red-500'}`}>
              {umkm.status_umkm === 1 ? 'Aktif' : 'Nonaktif'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  umkm: PropTypes.shape({
    id: PropTypes.number.isRequired,
    nama_umkm: PropTypes.string.isRequired,
    foto_umkm: PropTypes.string.isRequired,
    deskripsi_umkm: PropTypes.string.isRequired,
    pemilik: PropTypes.string.isRequired,
    status_umkm: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  }).isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default Modal;
