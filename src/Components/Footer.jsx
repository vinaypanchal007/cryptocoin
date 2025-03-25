const Footer = () => {
    return (
      <footer className="bg-white py-10 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-6">
          <div>
            <h2 className="text-blue-600 text-xl font-bold">coinbase</h2>
            <p className="text-gray-600 mt-2">© 2025 Coinbase</p>
            <p className="text-gray-600 flex flex-row text-center justify-center mt-2">
              <p className="text-blue-500 hover:underline mx-2">Blog</p>
              <p className="text-blue-500 hover:underline mx-2">X</p>
              <p className="text-blue-500 hover:underline mx-2">Facebook</p>
            </p>
            <p className="mt-2 text-gray-600">🌎 Global | English</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">Company</h3>
            <ul className="text-gray-600 space-y-1 mt-2">
              <li>About</li>
              <li>Careers</li>
              <li>Affiliates</li>
              <li>Blog</li>
              <li>Press</li>
              <li>Security</li>
              <li>Investors</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">Individuals</h3>
            <ul className="text-gray-600 space-y-1 mt-2">
              <li>Buy & sell</li>
              <li>Earn free crypto</li>
              <li>Wallet</li>
              <li>Card</li>
              <li>Coinbase One</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">Businesses</h3>
            <ul className="text-gray-600 space-y-1 mt-2">
              <li>Institutional</li>
              <li>Prime</li>
              <li>Listings</li>
              <li>Commerce</li>
              <li>Derivatives Exchange</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">Support</h3>
            <ul className="text-gray-600 space-y-1 mt-2">
              <li>Help center</li>
              <li>Contact us</li>
              <li>Create account</li>
              <li>ID verification</li>
              <li>Payment methods</li>
              <li>Account access</li>
            </ul>
          </div>
        </div>
      </footer>
    );
  };
  
export default Footer;
  