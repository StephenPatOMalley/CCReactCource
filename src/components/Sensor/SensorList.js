import SensorItem from './SensorItem';

function SensorList(props) {
  return (
    <ul>
      {props.rooms.map((sensor) => (
        <SensorItem
          key={sensor.id}
          id={sensor.id}
          temp={sensor.temp}
        />
      ))}
    </ul>
  );
}

export default SensorList;
