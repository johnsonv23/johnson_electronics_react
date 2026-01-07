import { memo } from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
  <div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
    
    <div>     
      <h3 className="text-lg font-semibold text-white mb-4">About Us</h3>
      <p className="text-sm">
        Johnson Electronics is committed to delivering reliable products, exceptional service, and innovative solutions that empower your success.
      </p>
    </div>

    
    <div>
      <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
      <ul className="space-y-2">
        <li><a href="#" className="hover:text-white">Home</a></li>
        <li><a href="#" className="hover:text-white">About</a></li>
        <li><a href="#" className="hover:text-white">Services</a></li>
        <li><a href="#" className="hover:text-white">Contact</a></li>
      </ul>
    </div>

    
    <div>
      <div className='flex justify-center'>
        <img src="src/assets/images/logo.png" alt="" style={{width:"130px"}}/>
      </div>
      <h3 className="text-lg font-semibold text-white mb-4">Subscribe</h3>
      <div className="space-x-4 mt-3 md:mt-0">
        <a href="#" className="hover:text-white"><i className="fa-brands fa-facebook"></i></a>
        <a href="#" className="hover:text-white"><i className="fa-brands fa-twitter"></i></a>
        <a href="#" className="hover:text-white"><i className="fa-brands fa-linkedin"></i></a>
      </div>
    </div>
  </div>

  
  <div className="border-t border-gray-700 mt-8">
    <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
      <p className="text-sm">&copy; 2026 Johnson Electronics. All rights reserved.</p>
      
    </div>
  </div>
</footer>
  );
};

export default memo(Footer);