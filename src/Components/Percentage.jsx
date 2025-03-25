function Percentage({ coin }) {
    function percentageColor() {
      return coin <= 0 ? 'text-red-500' : 'text-green-500';
    }
  
    return (
      <td className={`p-2 text-center font-medium ${percentageColor()}`}>{coin.toFixed(1)}%</td>
    );
  }
  
  export default Percentage;