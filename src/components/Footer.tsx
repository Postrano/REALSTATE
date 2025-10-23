import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white" style={{ fontFamily: 'Arial, Helvetica, sans-serif', backgroundColor: 'oklch(21% .034 264.665)' }}>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-8 mb-8">
          {/* Agent Info Section - Left */}
          <div className="flex flex-col items-center sm:flex-row sm:items-start gap-6 w-full lg:w-auto">
            <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden mx-auto sm:mx-0" style={{ border: '4px solid #ffffff' }}>
              <Image src="/images/merci.webp" alt="Marci Metzger" width={128} height={128} className="w-full h-full object-cover" />
            </div>
            <div className="text-center sm:text-left">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2" style={{ color: '#ffffff' }}>MARCI METZGER</h3>
              <p className="text-sm sm:text-base text-white mb-1" style={{ color: '#ffffff' }}>REALTOR FOR NEARLY 3 DECADES!</p>
              <p className="text-sm sm:text-base text-white" style={{ color: '#ffffff' }}>206-919-6886</p>
              <div className="flex justify-center sm:justify-start space-x-4 mt-4">
                {/* Facebook */}
                <a href="https://www.facebook.com/MarciHomes/" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity">
                  <Image src="/images/facebook.png" alt="Facebook" width={24} height={24} className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
                {/* Instagram */}
                <a href="https://www.instagram.com/marciandlauren_nvrealtors/" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity">
                  <Image src="/images/instagram.png" alt="Instagram" width={24} height={24} className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
                {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/marci-metzger-30642496/" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity">
                  <Image src="/images/linkedIn.png" alt="LinkedIn" width={24} height={24} className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
                {/* Yelp */}
                <a href="https://www.yelp.com/biz/marci-metzger-the-ridge-realty-pahrump" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity">
                  <Image src="/images/yelp.webp" alt="Yelp" width={24} height={24} className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Partners Section - Right */}
          <div className="text-center lg:text-right w-full lg:w-auto">
            <h4 className="text-lg font-semibold text-white mb-6" style={{ color: '#ffffff' }}>Our Partners</h4>
            <div className="flex justify-center lg:justify-end items-center space-x-4 sm:space-x-8 flex-wrap">
              <Image src="/images/lg1.webp" alt="Partner 1" width={48} height={48} className="h-8 sm:h-12 object-contain" />
              <Image src="/images/lg2.webp" alt="Partner 2" width={48} height={48} className="h-8 sm:h-12 object-contain" />
              <Image src="/images/lg3.webp" alt="Partner 3" width={48} height={48} className="h-8 sm:h-12 object-contain" />
              <Image src="/images/lg4.webp" alt="Partner 4" width={48} height={48} className="h-8 sm:h-12 object-contain" />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-400 pt-8 text-center">
          <p className="text-white" style={{ color: '#ffffff' }}>COPYRIGHT © 2023 MARCI METZGER HOMES - ALL RIGHTS RESERVED</p>
        </div>
      </div>
    </footer>
  );
}
