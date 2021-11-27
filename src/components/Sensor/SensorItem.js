import Card from '../ui/Card';
import classes from './SensorItem.module.css';

function SensorItem(props) {

  return (
    <li className={classes.SensorItem}>
      <Card>
        <div>
        <table className ={classes.table}>
          <tr key = {props.key}>
            <td>Room {props.id}: {props.temp} C</td>
          </tr>
        </table>
        </div>
      </Card>
    </li>
  );
}

export default SensorItem;