import { useState, useEffect } from 'react';

import MeetupList from '../components/meetups/MeetupList';
import classes from './AllMeetups.module.css';

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      'https://react-project-71ae0-default-rtdb.europe-west1.firebasedatabase.app/meetups.json'
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key]
          };

          meetups.push(meetup);
        }

        setIsLoading(false);
        setLoadedMeetups(meetups);
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
    <section className={classes.AllMeetupsPage}>
      <table className ={classes.table}>
        <tr>
          <th>Name</th>
          <th>Student Number</th>
          <th>Room Number</th>
          <th>Class Duration(Hours)</th>
        </tr>
      </table>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
}

export default AllMeetupsPage;
