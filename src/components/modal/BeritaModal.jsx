import PropTypes from 'prop-types';

const Modal = ({ berita, closeModal }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
      <div className="relative w-auto max-w-3xl mx-auto my-6">
        <div className="relative bg-white rounded-lg shadow-lg outline-none focus:outline-none">
          <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
            <h3 className="text-2xl font-semibold">{berita.judul_berita}</h3>
            <button
              className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              onClick={closeModal}
            >
              <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">×</span>
            </button>
          </div>

          <div className="relative p-6">
            <p className="text-gray-700 mb-2">{berita.deskripsi}</p>
            <p className="text-gray-600 mb-2">{berita.tanggal}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  berita: PropTypes.shape({
    id: PropTypes.number.isRequired,
    judul_berita: PropTypes.string.isRequired,
    deskripsi: PropTypes.string.isRequired,
    tanggal: PropTypes.string.isRequired,
  }).isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default Modal;
