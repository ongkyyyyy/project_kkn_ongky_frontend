const Sejarah = () => {
  return (
    <div className="relative text-center bg-white">
      <div className="relative bg-fixed bg-parallaxSejarah bg-cover h-[500px] text-white shadow-md">
        <div className='flex items-center justify-center inset-0 flex-col h-full'>
          <h1 className="text-4xl font-bold text-shadow-outline md:text-3xl sm:text-2xl">Sejarah Dompol</h1>
          <p className="text-xl text-shadow-outline font-bold md:text-lg sm:text-base">Asal muasal Padukuhan Dompol</p>
        </div>
      </div>

      <div className="absolute top-full left-1/2 transform -translate-x-1/2 -translate-y-3/4 w-full p-2">
        <div className="max-w-7xl mx-auto">
          <div className="mt-4 mb-8 relative overflow-hidden">
            <div className="text-center bg-white pb-6 pt-2">
              <p className="mt-4 max-w-6xl mx-auto text-xl text-gray-500 lg:mx-auto tracking-tight md:text-lg sm:text-base">
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
