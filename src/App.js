import { useState } from 'react';
import './App.css';
import SkylineDropdown from './SkylineDropdown';
import WaterfrontDropdown from './WaterfrontDropdown';
import CastleDropdown from './CastleDropdown';
import SloganList from './SloganList';
import SloganForm from './SloganForm';
import CityNameInput from './CityNameInput';
import City from './City';

function App() {
  // track some state here.
  const [skylineId, setSkylineId] = useState(1);
  const [waterfrontId, setWaterfrontId] = useState(1);
  const [castleId, setCastleId] = useState(1);
  const [cityName, setCityName] = useState('Portland');
  const [slogans, setSlogans] = useState([]);
  // You'll need to keep track of a skylineId, waterfrontId, and castleId. All these start out as 1
  // you'll need to track a city name, which starts as the city name of your choice.
  // finally, you'll need an array of slogans, which could start out as ['The City of Excellence'] for example


  return (
    <div className="App">
      {/* here, the City component takes in skylineId, waterfrontId, castleId as props. It'll use those ids to render pictures correctly. */}
      <City skylineId={ skylineId } waterfrontId={ waterfrontId }
        castleId={ castleId }/>
      <h1>
        Welcome to beautiful {cityName}!
      </h1>
      <div className='bottom'>
        <CityNameInput setCityName={ setCityName }/>
        <section className='dropdowns'>
          <SkylineDropdown setSkylineId={ setSkylineId }/>
          <WaterfrontDropdown setWaterfrontId={ setWaterfrontId }/>
          <CastleDropdown setCastleId={ setCastleId }/>
        </section>
        {/* here, the SloganForm component takes in the setSlogans state handler function and the slogans array that live in state */}
        <SloganForm slogans={ slogans } setSlogans={ setSlogans }/>
        {/* here, the SloganList component takes the array of slogans that lives in state */}
        <SloganList slogans={ slogans }/>

      </div>
    </div>
  );
}

export default App;
