import React from 'react';
import { useState } from 'react';
import { Tour } from './Tour';
import places from './data';

const App = () => {
  const [data, setData] = useState(places);

  const removeTour = (id) => {
    const newData = data.filter((item) => item.id !== id);
    setData(newData);
  };

  if (data.length < 1) {
    return (
      <main>
        <h1>No more tours</h1>
        <button className="refresh-btn" onClick={() => setData(places)}>
          Refresh
        </button>
      </main>
    );
  }

  return (
    <main>
      {data.map((item) => {
        return <Tour key={item.id} item={item} removeTour={removeTour} />;
      })}
    </main>
  );
};

export default App;
