const Lokasi = () => {
  const dompolStadium = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2792.7841906373687!2d110.77415424386724!3d-8.142820700225228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7bc755e1064611%3A0xb3fb99704276e705!2sDompol%20Stadium!5e0!3m2!1sid!2sid!4v1721469965580!5m2!1sid!2sid";
  const balaiPadukuhan = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d493.69946063058615!2d110.77266023741069!3d-8.142576774397316!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7bc70575e85701%3A0xa50a501b5a83eb1b!2sResan%20Dompol!5e0!3m2!1sid!2sid!4v1721470556824!5m2!1sid!2sid";
  const masjid = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d698.1950113989266!2d110.77217958745854!3d-8.143415003852436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7bc7a99f155d49%3A0x670cc1cf15f40e6b!2sMasjid%20Ar-Rofiah!5e0!3m2!1sid!2sid!4v1721470391126!5m2!1sid!2sid";

  return (
    <div className="relative text-center bg-customcp14">
      <div className="relative bg-fixed bg-parallaxLokasi bg-cover h-[500px] text-white shadow-md">
        <div className='flex items-center justify-center inset-0 flex-col h-full'>
          <h1 className="text-4xl font-bold text-shadow-outline md:text-3xl sm:text-2xl">Lokasi penting di Dompol</h1>
          <p className="text-xl text-shadow-outline font-bold md:text-lg sm:text-base">Titik penting di Padukuhan</p>
        </div>
      </div>

      <div className="absolute top-full md:left-[890px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full p-2">
        <div className="max-w-7xl mx-auto">
          <div className="mt-16 mb-10 relative overflow-hidden">
            <div className="flex space-x-4 overflow-x-auto pb-2 items-center">
              <div className="relative z-10 p-4 flex-shrink-0">
                <div className="bg-customcp12 border-4 border-customcp12 shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:z-20 max-w-xs">
                  <iframe
                    src={dompolStadium}
                    className="w-80 h-60 md:w-72 md:h-60 sm:w-56 sm:h-44 xs:w-48 xs:h-36"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
                <p className="mt-2 text-lg font-bold text-customcp17">Stadion Dompol</p>
              </div>
              <div className="relative z-10 p-4 flex-shrink-0">
                <div className="bg-customcp12 border-4 border-customcp12 shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:z-20 max-w-xs">
                  <iframe
                    src={balaiPadukuhan}
                    className="w-80 h-60 md:w-72 md:h-60 sm:w-56 sm:h-44 xs:w-48 xs:h-36"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
                <p className="mt-2 text-lg font-bold text-customcp17">Resan Dompol</p>
              </div>
              <div className="relative z-10 p-4 flex-shrink-0">
                <div className="bg-customcp12 border-4 border-customcp12 shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:z-20 max-w-xs">
                  <iframe
                    src={masjid}
                    className="w-80 h-60 md:w-72 md:h-60 sm:w-56 sm:h-44 xs:w-48 xs:h-36"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
                <p className="mt-2 text-lg font-bold text-customcp17">Masjid Ar-Rofiah</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lokasi;
