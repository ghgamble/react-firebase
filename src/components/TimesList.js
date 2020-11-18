import React, { useState, useEffect } from 'react';

import db from '../firebase';

const SORT_OPTIONS = {
      'TIME_ASC': {column: 'time_seconds', direction: 'asc'},
      'TIME_DESC': {column: 'time_seconds', direction: 'desc'},
      'TITLE_DESC': {column: 'title', direction: 'desc'},
      'TITLE_ASC': {column: 'title', direction: 'asc'}
}

function GetTimes(sortBy = 'TIME_ASC') {
      const [times, setTimes] = useState([]);
      useEffect(() => {
            const unsubscribe = db.collection('times').orderBy(SORT_OPTIONS[sortBy].column, SORT_OPTIONS[sortBy].direction).onSnapshot(snapshot => {
                  let data = snapshot.docs;
                  let allTimesArr = data.map(time => {
                        let id = time.id;
                        let fullTimeObj = {...time.data(), id};
                        return fullTimeObj;
                  })
                  setTimes(allTimesArr);
            })
            return () => unsubscribe();
      }, [sortBy])

      return times;
}

const TimesList = () => {
      const [sortBy, setSortBy] = useState('TIME_ASC');
      const times = GetTimes(sortBy);

      let timesArray = times.map(time => {
            return <li key={time.id}>{time.title} seconds: {time.time_seconds}</li>;
      })

      return (
            <div>
                  <h2>Times List</h2>
                  <div>
                        <label>Sort By</label>{' '}
                        <select value={sortBy} onChange={e => setSortBy(e.currentTarget.value)}>
                              <option value="TIME_ASC">Time (fastest first)</option>
                              <option value="TIME_DESC">Time (slowest first)</option>
                              <option disabled>-----</option>
                              <option value="TITLE_ASC">Title (a-z)</option>
                              <option value="TITLE_DESC">Title (z-a)</option>
                         </select>
                  </div>
                  <ol>{timesArray}</ol>
            </div>
      );
}

export default TimesList;
