import React, { useContext } from 'react';
import './LiveStockDisplay.css';
import { StoreContext } from '../../context/StoreContext'; 
import LiveStockItem from '../LiveStockItem/LiveStockItem'; 

const LiveStockDisplay = ({ category }) => {
  const { LiveStock_list } = useContext(StoreContext);

  if (!LiveStock_list) {
    return <p>Loading LiveStock data...</p>; 
  }

  return (
    <div className='LiveStock-display' id='LiveStock-display'>
      <h1>Our Product available in market</h1>
      <div className="LiveStock-display-list">
        {LiveStock_list.map((item, index) => (
          <LiveStockItem
            // key={index}
            id={item._id}
            name={item.name}
            description={item.description}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default LiveStockDisplay;