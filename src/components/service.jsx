import { memo } from 'react';

const Service = () => {
  return (
   
<section className="bg-gray-50 py-16">
  <div className="max-w-4xl mx-auto px-4 text-center">
    <h2 className="text-3xl font-bold text-gray-800">Our Services</h2>
    <p className="mt-4 text-gray-600">
      We provide a wide range of services to help your business grow and succeed.
    </p>
  </div>

  
  <div className="mt-10 max-w-6xl mx-auto px-4 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
    
    <div className="bg-white rounded-lg shadow p-6 text-center">
      <h3 className="text-lg font-semibold text-gray-800">Product Range</h3>
      <p className="mt-2 text-gray-600">Explore a wide selection of electronics including laptops, smartphones, accessories, and smart devices. Every product is carefully curated to deliver quality, performance, and value.</p>
    </div>

    
    <div className="bg-white rounded-lg shadow p-6 text-center">
      <h3 className="text-lg font-semibold text-gray-800">Secure Online Shopping</h3>
      <p className="mt-2 text-gray-600">Shop with confidence through our safe and reliable e‑commerce platform. We provide multiple payment options, encrypted transactions, and hassle‑free checkout for a smooth experience.</p>
    </div>

    
    <div className="bg-white rounded-lg shadow p-6 text-center">
      <h3 className="text-lg font-semibold text-gray-800">Fast Delivery & Easy Returns</h3>
      <p className="mt-2 text-gray-600">Get your electronics delivered quickly to your doorstep. With flexible return policies and responsive support, we ensure your shopping experience is worry‑free.</p>
    </div>
  </div>

  
  <div className="mt-16 text-center">
    <a href="products" className="px-6 py-3 bg-amber-600 text-white rounded-md hover:bg-amber-500">
      Shop Now
    </a>
  </div>
</section>
  );
};

export default memo(Service);