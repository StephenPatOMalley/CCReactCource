import Card from '../ui/Card';
import classes from './MeetupItem.module.css';

function MeetupItem(props) {

  return (
    <li className={classes.MeetupItem}>
      <Card>
        <div>
        <table className ={classes.table}>
          <tr key = {props.key}>
            <td>{props.name}</td>
            <td>{props.student}</td>
            <td>{props.room}</td>
            <td>{props.duration}</td>
          </tr>
        </table>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
