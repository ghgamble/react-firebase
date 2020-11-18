import React from 'react';

import TimesList from './TimesList';
import AddTimeEntryForm from './AddTimeEntryForm';

const App = () => {
      return (
            <div>
                  <h1>Just Clock It</h1>
                  <TimesList />
                  <AddTimeEntryForm />
            </div>
      );
}

export default App;
