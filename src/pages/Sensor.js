import { useState, useEffect } from 'react';

import SensorList from '../components/Sensor/SensorList';

function SensorPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedRooms, setLoadedMeetups] = useState([]);
  
    useEffect(() => {
      setIsLoading(true);
      fetch(
        'https://react-project-71ae0-default-rtdb.europe-west1.firebasedatabase.app/room.json'
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          const rooms = [];
  
          for (const key in data) {
            const room = {
              id: key,
              ...data[key]
            };
  
            rooms.push(room);
          }
  
          setIsLoading(false);
          setLoadedMeetups(rooms);
        });
    }, []);
  
    if (isLoading) {
      return (
        <section>
          <p>Loading...</p>
        </section>
      );
    }
  
    return (
      <section>
        <SensorList rooms={loadedRooms}/>
      </section>
    );
  }

export default SensorPage;