import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

import { ducks } from './demo';
import DuckItem from './DuckItem';
import { Header, List } from 'semantic-ui-react';

function App() {

  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios.get('https://localhost:5001/api/Activities').then(response => {
      console.log(response);
      setActivities(response.data);
    })
  }, [])

  return (
    <div className="App">
        <Header as='h2' icon= 'users' content='Reactivities' />
        <List>
        {activities.map((act: any) => (
          <List.Item key = {act.id}>
            {act.title}
          </List.Item>
        ))}
        </List>
        {ducks.map(duck => (
          <DuckItem duck = {duck} key={duck.name}/>
        ))}
       
      
    </div>
  );
}

export default App;
