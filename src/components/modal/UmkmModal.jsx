import PropTypes from 'prop-types';

const Modal = ({ umkm, closeModal }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
      <div className="relative w-auto max-w-3xl mx-auto my-6">
        {/* Modal content */}
        <div className="relative bg-white rounded-lg shadow-lg outline-none focus:outline-none">
          {/* Header */}
          <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
            <h3 className="text-2xl font-semibold">{umkm.nama_umkm}</h3>
            <button
              className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              onClick={closeModal}
            >
              <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">×</span>
            </button>
          </div>
          {/* Body */}
          <div className="relative p-6">
            <img
              src={`http://127.0.0.1:8000/storage/${umkm.foto_umkm}`}
              alt={umkm.nama_umkm}
              className="w-full h-80 object-cover rounded-md mb-4"
            />
            <p className="text-gray-700 mb-2">{umkm.deskripsi_umkm}</p>
            <p className="text-gray-600 mb-2">{umkm.pemilik}</p>
            <p className="text-gray-600">{umkm.status_umkm}</p>
          </div>
          {/* Footer */}
          <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
            <button
              className="text-customcp17 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={closeModal}
            >
              Close
            </button>
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
    status_umkm: PropTypes.string.isRequired,
  }).isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default Modal;
