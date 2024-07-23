import dompol from '../../assets/img/pemandangan.jpg';

const Landing2 = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <div className="max-w-4xl p-6 rounded-lg shadow-lg bg-customcp13">
        <div className="flex flex-col items-center md:flex-row">
          <div className="md:w-1/2">
            <h1 className="text-4xl text-white mb-4 font-poppins font-extrabold">
              Padukuhan Dompol
            </h1>
            <p className="text-white mb-6">
              Merupakan padukuhan yang terletak di wilayah Jerukwudel, Kecamatan Girisubo, Kabupaten Gunung Kidul.
            </p>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 ml-4">
            <img src={dompol} alt="Landing Page Illustration" className="w-96 h-96" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing2;
