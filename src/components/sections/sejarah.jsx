const Sejarah = () => {
  return (
    <div className="relative text-center bg-white">
      <div className="relative bg-fixed bg-parallaxSejarah bg-cover h-[500px] text-white shadow-md">
        <div className='flex items-center justify-center inset-0 flex-col h-full'>
          <h1 className="text-4xl font-bold text-shadow-outline md:text-3xl sm:text-xl">Sejarah Dompol</h1>
          <p className="text-xl text-shadow-outline font-bold md:text-lg sm:text-sm">Asal muasal Padukuhan Dompol</p>
        </div>
      </div>

      <div className="sm:mt-16 mt-8">
        <div className="w-7xl mx-auto">
          <div className="mt-4 mb-4 relative overflow-hidden">
            <div className="text-center bg-white pb-6 pt-2 sm:pb-8 sm:pt-4 sm:px-4">
              <p className="px-10 mt-4 w-6xl mx-auto text-xl text-gray-500 lg:mx-auto tracking-tight md:text-lg sm:text-sm sm:px-4">
                Padukuhan Dompol memiliki sejarah yang kaya dan berakar dalam kehidupan masyarakat. Pada awalnya, sebelum 
                kedatangan Belanda, Dompol masih disebut dengan dusun. Dengan perkembangan waktu, dusun ini tumbuh menjadi salah satu 
                dusun tertua di wilayah Jerukwudel. Mata pencaharian utama penduduk Dompol adalah bertani dan berternak. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sejarah;
