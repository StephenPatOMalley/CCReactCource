import { useRef } from 'react';

import Card from '../ui/Card';
import classes from './NewMeetupForm.module.css';

function NewMeetupForm(props) {
  const nameInputRef = useRef();
  const studentNumInputRef = useRef();
  const roomInputRef = useRef();
  const classDurationInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredStudent = studentNumInputRef.current.value;
    const enteredroom = roomInputRef.current.value;
    const enteredDuration = classDurationInputRef.current.value;

    const meetupData = {
      name: enteredName,
      student: enteredStudent,
      room: enteredroom,
      duration: enteredDuration,
    };

    props.onAddMeetup(meetupData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='name'>Student Name</label>
          <input type='text' required id='name' ref={nameInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='student'>Student Number</label>
          <input type='text' required id='student' ref={studentNumInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='room'>Room Number</label>
          <select required id='student' ref={roomInputRef}>            
            <option value="501">501</option>
            <option value="502">502</option>
            <option value="503">503</option>
            <option value="504">504</option>
            <option value="505">505</option>
            <option value="506">506</option>
            <option value="507">507</option>
            <option value="508">508</option>
            <option value="509">509</option>
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor='duration'>Class Duration</label>
          <input type='text' required id='duration' ref={classDurationInputRef} />
        </div>
        <div className={classes.actions}>
          <button>Add Student</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
