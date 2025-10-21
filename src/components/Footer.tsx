export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-8 mb-8">
          {/* Agent Info Section - Left */}
          <div className="flex flex-col items-center sm:flex-row sm:items-start gap-6 w-full lg:w-auto">
            <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-white mx-auto sm:mx-0">
              <img src="/images/merci.webp" alt="Marci Metzger" className="w-full h-full object-cover" />
            </div>
            <div className="text-center sm:text-left">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">MARCI METZGER</h3>
              <p className="text-sm sm:text-base text-white mb-1">REALTOR FOR NEARLY 3 DECADES!</p>
              <p className="text-sm sm:text-base text-white">206-919-6886</p>
              <div className="flex justify-center sm:justify-start space-x-4 mt-4">
                {/* Facebook */}
                <a href="https://www.facebook.com/MarciHomes/" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity">
                  <img src="/images/facebook.png" alt="Facebook" className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
                {/* Instagram */}
                <a href="https://www.instagram.com/marciandlauren_nvrealtors/" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity">
                  <img src="/images/instagram.png" alt="Instagram" className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
                {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/marci-metzger-30642496/" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity">
                  <img src="/images/linkedIn.png" alt="LinkedIn" className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
                {/* Yelp */}
                <a href="https://www.yelp.com/biz/marci-metzger-the-ridge-realty-pahrump" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity">
                  <img src="/images/yelp.webp" alt="Yelp" className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Partners Section - Right */}
          <div className="text-center lg:text-right w-full lg:w-auto">
            <h4 className="text-lg font-semibold text-white mb-6">Our Partners</h4>
            <div className="flex justify-center lg:justify-end items-center space-x-4 sm:space-x-8 flex-wrap">
              <img src="/images/lg1.webp" alt="Partner 1" className="h-8 sm:h-12 object-contain" />
              <img src="/images/lg2.webp" alt="Partner 2" className="h-8 sm:h-12 object-contain" />
              <img src="/images/lg3.webp" alt="Partner 3" className="h-8 sm:h-12 object-contain" />
              <img src="/images/lg4.webp" alt="Partner 4" className="h-8 sm:h-12 object-contain" />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-400 pt-8 text-center">
          <p className="text-white">COPYRIGHT © 2023 MARCI METZGER HOMES - ALL RIGHTS RESERVED</p>
        </div>
      </div>
    </footer>
  );
}
