import MeetupItem from './MeetupItem';
import classes from './MeetupList.module.css';

function MeetupList(props) {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          name={meetup.name}
          student={meetup.student}
          room={meetup.room}
          duration={meetup.duration}
        />
      ))}
    </ul>
  );
}

export default MeetupList;
