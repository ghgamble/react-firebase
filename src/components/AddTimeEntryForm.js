import React, { useState  } from 'react';

import db from '../firebase';

const AddTimeEntryForm = () => {
      const [title, setTitle] = useState('');
      const [time, setTime] = useState('');

      const onSubmit = (e) => {
            e.preventDefault();
            db.collection('times').add({
                  title: title,
                  time_seconds: parseInt(time)
            })
            .then(() => {
                  setTitle('');
                  setTime('');
            })
      }

      return (
            <form onSubmit={onSubmit} >
                  <h4>Add Time Entry</h4>
                  <div>
                        <label>Title</label>
                        <input type="text" value={title} onChange={e => setTitle(e.currentTarget.value)} />
                  </div>
                  <div>
                        <label>Time</label>
                        <input type="number" value={time} onChange={e => setTime(e.currentTarget.value)} />
                  </div>
                  <button>Add Time Entry</button>
            </form>
      );
}

export default AddTimeEntryForm;
