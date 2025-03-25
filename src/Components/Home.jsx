import first from '../images/First.png';
import Second from '../images/Circles.png';
import advanced from '../images/Advanced.png';
import retail from '../images/Retail.png';
import wallet from '../images/Wallet.png';
import prime from '../images/Prime.png';
import smallone from '../images/small1.png';
import smalltwo from '../images/small2.png';
import smallthree from '../images/small3.png';
import smallfour from '../images/small4.png';
import one from '../images/8.png';
import two from '../images/9.png';
import three from '../images/10.png';
import four from '../images/11.png';

function Home() {
  return (
    <div>
      <div>
        <div className="flex flex-col md:flex-row items-center min-h-screen bg-gray-100">
          <div className="w-full md:w-1/2 flex justify-center">
            <img src={first} alt="Crypto Dashboard" className="w-full max-w rounded-lg" />
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center p-6 text-center md:text-left">
            <h1 className="text-4xl font-bold text-gray-900">The future of money is here</h1>
            <p className="mt-4 text-lg text-gray-600">
              We're the most trusted place for people and businesses to buy, sell, and manage crypto.
            </p>
            
            <div className="mt-6 flex flex-col md:flex-row gap-4">
              <input 
                type="email" 
                placeholder="satoshi@nakamoto.com" 
                className="w-full md:w-2/3 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="w-full md:w-1/3 bg-blue-600 text-white py-3 rounded-full font-semibold hover:bg-blue-700 transition">
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col md:flex-row items-center min-h-screen p-10 bg-gray-100">
          <div className="w-full md:w-1/2 flex flex-col justify-center p-6 text-center md:text-left">
            <p className="mt-4 text-lg text-gray-600">
              Take control of your money.
            </p> 
            <h1 className="text-4xl font-bold text-gray-900">Start your portfolio today and rediscover crypto</h1>       
            <div className="mt-6 flex flex-col md:flex-row gap-4">
              <input 
                type="email" 
                placeholder="satoshi@nakamoto.com" 
                className="w-full md:w-2/3 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="w-full md:w-1/3 bg-blue-600 text-white py-3 rounded-full font-semibold hover:bg-blue-700 transition">
                Sign up
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <img src={Second} alt="Crypto Dashboard" className="w-full max-w rounded-lg" />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-col items-center min-h bg-gray-900 text-white">
        <div className="w-full md:w-1/2 flex flex-col justify-center p-6 text-center md:text-left">
          <h1 className="text-4xl font-bold">USDC is the dollar for the digital age</h1>
          <p className="mt-4 text-lg">
            USDC gives you 24/7 access to payments and financial services. Trade, spend, and send faster and more efficiently.
          </p>       
          <button className="mt-6 bg-white text-gray-900 py-3 px-6 rounded-full font-semibold hover:bg-gray-200 transition">
            Learn more
          </button>
        </div>
        <div className="w-full">
          <img src='https://images.ctfassets.net/c5bd0wqjc7v0/7lnIVE5wVhBAd9IWdjPPhW/f3fa7b084a26d884f20634293e020aaa/cb-banner.jpeg?fl=progressive&q=100&w=560' alt="Trading Dashboard" className="w-full w-full rounded-lg shadow-lg h-60" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center min-h-screen p-10 bg-white">
        <div className="w-80 flex justify-center">
          <img src={retail} alt="Trading Dashboard" className="w-full max-w-md rounded-lg" />
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center p-6 text-center md:text-left">
          <div className="flex items-center gap-2">
            <svg aria-label="Coinbase logo" class="cds-iconStyles-irtngcj" height="32" role="img" viewBox="0 0 48 48" width="32" xmlns="http://www.w3.org/2000/svg"><title>Coinbase logo</title><path d="M24,36c-6.63,0-12-5.37-12-12s5.37-12,12-12c5.94,0,10.87,4.33,11.82,10h12.09C46.89,9.68,36.58,0,24,0 C10.75,0,0,10.75,0,24s10.75,24,24,24c12.58,0,22.89-9.68,23.91-22H35.82C34.87,31.67,29.94,36,24,36z" fill="#0052FF"></path></svg>
            <span className="text-lg font-semibold text-blue-600 uppercase">COINBASE</span>
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mt-2">Buy, sell, and store hundreds of cryptocurrencies</h1>
          <p className="mt-4 text-lg text-gray-600">
            From Bitcoin to Dogecoin, we make it easy to buy and sell cryptocurrency. Protect your crypto with best in class cold storage.
          </p>       

          <button className="mt-6 bg-blue-600 text-white py-3 px-6 rounded-full font-semibold hover:bg-blue-700 transition">
            Sign up now
          </button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center min-h-screen p-10 bg-white">
        <div className="w-80 flex justify-center">
          <img src={advanced} alt="Trading Dashboard" className="w-full max-w-md rounded-lg" />
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center p-6 text-center md:text-left">
          <div className="flex items-center gap-2">
            <svg aria-label="Coinbase logo" class="cds-iconStyles-irtngcj" height="32" role="img" viewBox="0 0 48 48" width="32" xmlns="http://www.w3.org/2000/svg"><title>Coinbase logo</title><path d="M24,36c-6.63,0-12-5.37-12-12s5.37-12,12-12c5.94,0,10.87,4.33,11.82,10h12.09C46.89,9.68,36.58,0,24,0 C10.75,0,0,10.75,0,24s10.75,24,24,24c12.58,0,22.89-9.68,23.91-22H35.82C34.87,31.67,29.94,36,24,36z" fill="#0052FF"></path></svg>
            <span className="text-lg font-semibold text-blue-600 uppercase">ADVANCED</span>
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mt-2">Powerful tools, designed for the advanced trader</h1>
          <p className="mt-4 text-lg text-gray-600">
            Powerful analytical tools with the safety and security of our platform deliver the ultimate trading experience. Tap into sophisticated charting capabilities, real-time order books, and deep liquidity across hundreds of markets.
          </p>       

          <button className="mt-6 bg-blue-600 text-white py-3 px-6 rounded-full font-semibold hover:bg-blue-700 transition">
            Start trading
          </button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center min-h-screen p-10 bg-white">
        <div className="w-80 flex justify-center">
          <img src={wallet} alt="Trading Dashboard" className="w-full max-w-md rounded-lg" />
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center p-6 text-center md:text-left">
          <div className="flex items-center gap-2">
            <svg aria-label="Coinbase logo" class="cds-iconStyles-irtngcj" height="32" role="img" viewBox="0 0 48 48" width="32" xmlns="http://www.w3.org/2000/svg"><title>Coinbase logo</title><path d="M24,36c-6.63,0-12-5.37-12-12s5.37-12,12-12c5.94,0,10.87,4.33,11.82,10h12.09C46.89,9.68,36.58,0,24,0 C10.75,0,0,10.75,0,24s10.75,24,24,24c12.58,0,22.89-9.68,23.91-22H35.82C34.87,31.67,29.94,36,24,36z" fill="#0052FF"></path></svg>
            <span className="text-lg font-semibold text-blue-600 uppercase">WALLET</span>
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mt-2">Do more with your crypto with Coinbase Wallet</h1>
          <p className="mt-4 text-lg text-gray-600">
            Store your crypto in your own personal crypto wallet and explore decentralized finance (DeFi), buy and sell NFTs, and more.
          </p>       

          <button className="mt-6 bg-blue-600 text-white py-3 px-6 rounded-full font-semibold hover:bg-blue-700 transition">
            Learn more
          </button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center min-h-screen p-10 bg-white">
        <div className=" w-90 flex justify-center">
          <img src={prime} alt="Trading Dashboard" className="w-full max-w-md rounded-lg" />
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center p-6 text-center md:text-left">
          <div className="flex items-center gap-2">
            <svg aria-label="Coinbase logo" class="cds-iconStyles-irtngcj" height="32" role="img" viewBox="0 0 48 48" width="32" xmlns="http://www.w3.org/2000/svg"><title>Coinbase logo</title><path d="M24,36c-6.63,0-12-5.37-12-12s5.37-12,12-12c5.94,0,10.87,4.33,11.82,10h12.09C46.89,9.68,36.58,0,24,0 C10.75,0,0,10.75,0,24s10.75,24,24,24c12.58,0,22.89-9.68,23.91-22H35.82C34.87,31.67,29.94,36,24,36z" fill="#0052FF"></path></svg>
            <span className="text-lg font-semibold text-blue-600 uppercase">PRIME</span>
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mt-2">The financial institution for a digital asset future</h1>
          <p className="mt-4 text-lg text-gray-600">
            Coinbase Prime is the first choice for sophisticated investors and institutions that want to invest in digital assets.
          </p>       

          <button className="mt-6 bg-blue-600 text-white py-3 px-6 rounded-full font-semibold hover:bg-blue-700 transition">
            Learn more
          </button>
        </div>
      </div>
      <div class="bg-blue-600 text-white text-center py-16">
        <h2 class="text-3xl font-semibold">Get started in a few minutes</h2>
        <p class="text-lg mt-2">Create an account, link your bank account, and start buying & selling.</p>
        
        <button class="bg-white text-black font-semibold px-6 py-2 rounded-lg mt-6 shadow-md">
          Create account
        </button>

        <div class="flex justify-center mt-12 space-x-12">
          <div class="text-center">
            <p class="text-4xl font-bold">$145B</p>
            <p class="text-sm uppercase">Quarterly Volume Traded</p>
          </div>
          <div class="text-center">
            <p class="text-4xl font-bold">100+</p>
            <p class="text-sm uppercase">Countries Supported</p>
          </div>
          <div class="text-center">
            <p class="text-4xl font-bold">$130B</p>
            <p class="text-sm uppercase">Assets on Platform</p>
          </div>
        </div>
      </div>
      <section class="py-16 bg-gray-100">
        <h2 class="text-3xl text-center font-bold text-gray-900">The most trusted cryptocurrency exchange</h2>
        <p class="text-lg text-center p-4 text-gray-600 mt-2">
          We're the most trusted place for people and businesses to buy, sell, and manage crypto.
        </p>

        <div class="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto p-6">
          <div class="bg-white p-6 shadow-md rounded-xl">
            <div class="flex">
              <img src={smallone} alt="Icon 1" class="w-20 h-20"/>
            </div>
            <h2 class="flex text-left text-2xl font-semibold text-gray-900 mt-4">The largest public crypto company</h2>
            <p class="flex text-left text-lg text-gray-600 mt-2">We operate with financial transparency.</p>
          </div>

          <div class="bg-white p-6 shadow-md rounded-xl">
            <div class="flex">
              <img src={smalltwo} alt="Icon 2" class="w-20 h-20"/>
            </div>
            <h2 class="flex text-left text-2xl font-semibold text-gray-900 mt-4">Your assets are protected</h2>
            <p class="flex text-left text-lg text-gray-600 mt-2">Our risk management measures are designed to protect your assets.</p>
          </div>

          <div class="bg-white p-6 shadow-md rounded-xl">
            <div class="flex">
              <img src={smallthree} alt="Icon 3" class="w-20 h-20"/>
            </div>
            <h2 class="flex text-left text-2xl font-semibold text-gray-900 mt-4">Get the help you need, when you need it</h2>
            <p class="flex text-left text-lg text-gray-600 mt-2">You can always contact our support team for quick solutions.</p>
          </div>

          <div class="bg-white p-6 shadow-md rounded-xl">
            <div class="flex">
              <img src={smallfour} alt="Icon 4" class="w-20 h-20"/>
            </div>
            <h2 class="flex text-left text-2xl font-semibold text-gray-900 mt-4">Industry best practices</h2>
            <p class="flex text-left text-lg text-gray-600 mt-2">Coinbase supports a variety of the most popular digital currencies.</p>
          </div>
        </div>
      </section>

      <section class="py-12 px-6 bg-gray-100">
        <div class="max-w-6xl mx-auto">
        <div class="flex flex-row justify-between items-center">
          <h2 class="text-3xl font-bold text-gray-900">
            New to crypto? Learn some crypto basics
          </h2>
          <button class="px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700">
            Read more
          </button>
        </div>
          <p class="mt-4 text-left text-lg text-gray-600 max-w-2xl">
            Beginner guides, practical tips, and market updates for first-timers, experienced investors, and everyone in between.
          </p>
        </div>

        <div class="mt-10 grid md:grid-cols-3 gap-6 bg-gray-100">
          <div class="rounded-lg p-6 bg-gray-100">
            <img src={one} alt="USDC" class="w-full h-48 object-cover rounded-md"/>
            <h3 class="mt-4 text-2xl text-justify font-semibold text-gray-900">
              USDC: The digital dollar for the global crypto economy
            </h3>
            <p class="mt-2 text-lg text-justify text-gray-600">
              Coinbase believes crypto will be part of the solution for creating an open financial system...
            </p>
          </div>

          <div class="rounded-lg p-6 bg-gray-100">
            <img src={two} alt="Crypto and banks" class="w-full h-48 object-cover rounded-md"/>
            <h3 class="mt-4 text-2xl font-semibold text-justify text-gray-900">
              Can crypto really replace your bank account?
            </h3>
            <p class="mt-2 text-gray-600 text-justify text-lg">
              If you’ve heard the phrase “bank on your own bank” or “bankless”...
            </p>
          </div>

          <div class="rounded-lg p-6 bg-gray-100">
            <img src={three} alt="Crypto investment" class="w-full h-48 object-cover rounded-md"/>
            <h3 class="mt-4 text-2xl font-semibold text-justify text-gray-900">
              When is the best time to invest in crypto?
            </h3>
            <p class="mt-2 text-gray-600 text-justify text-lg">
              Cryptocurrencies like Bitcoin can experience daily (or even hourly) price volatility...
            </p>
          </div>
        </div>
      </section>
      <div class="flex flex-col md:flex-row items-center justify-between p-10 bg-white">
        <div class="md:w-1/2 text-left">
          <h2 class="text-4xl font-bold text-gray-900">
            The freedom of crypto for everyone, everywhere
          </h2>
          <p class="mt-4 text-gray-700">
            We’re committed to creating more economic freedom through accessible, safe, and secure financial tools for everyone.
          </p>
          <button class="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700">
            Learn more
          </button>
        </div>

        <div class="md:w-1/2">
          <img src={four} alt="People in a public space" class="w-full rounded-lg"/>
        </div>
      </div>
      <div className="bg-gray-900 text-white py-16 px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-semibold">
              Start your portfolio today
            </h2>
          </div>
          <div className="mt-6 md:mt-0 max-w-md text-center md:text-left">
            <p className="text-gray-300 text-lg">
              Sign up for a Coinbase account today and see what the world of decentralized finance can do for you.
            </p>
            <button className="mt-4 px-6 py-3 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-200">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
