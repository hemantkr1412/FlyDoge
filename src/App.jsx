import { useEffect, useState } from 'react'
import './App.css';
import Hero from './componets/Hero';
import Tokenomics from './componets/Tokenomics';
import Howtobuy from './componets/HowToBuy';
import Roadmap from './componets/RoadMap';
import Navbar from './componets/Navbar';
import Footer from './componets/Footer';
import GoogleTagManager from '../googleAnalytics';

function App() {
  const [dogeData, setDogeData] = useState(
    {
      price_in_usdt: "Loading..",
      curr_tokens_burnt: "Loading..",
      current_supply: "Loading..",
      market_cap: "Loading.."
    }
  ); // State to store fetched data
  const [loading, setLoading] = useState(true); // State to track loading
  const [error, setError] = useState(null); // State to track errors

  // Helper function to format numbers
  const formatNumber = (num) => {
    if (num >= 1e6) {
      return (num / 1e6).toFixed(2) + ' M'; // Convert to million
    } else if (num >= 1e3) {
      return (num / 1e3).toFixed(2) + ' K'; // Convert to thousand
    } else {
      return num.toFixed(2); // Keep as it is if smaller
    }
  };

  useEffect(() => {
    // Function to fetch data from the API
    const fetchDogeData = async () => {
      try {
        const response = await fetch('https://airdaomarkets.xyz/api/v1/event/fetch-doge-data/');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();

        // Format the numbers
        data.curr_tokens_burnt = formatNumber(data.curr_tokens_burnt);
        data.current_supply = formatNumber(data.current_supply);
        data.market_cap = formatNumber(data.market_cap);

        setDogeData(data); // Save formatted data to state
      } catch (err) {
        setError(err.message); // Set error state if something goes wrong
      } finally {
        setLoading(false); // Set loading to false once request is done
      }
    };

    fetchDogeData(); // Call the fetch function
  }, []);


  return (
    <div>
      <GoogleTagManager />
      <Navbar />
      <Hero dogeData={dogeData} />
      <Tokenomics />
      {/* <Howtobuy /> */}
      <Roadmap />
      <Footer />
    </div>
  )
}

export default App
