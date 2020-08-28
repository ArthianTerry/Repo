import React from 'react';
import List from './List';

function App() {
  return (
    <div className="Container">
      <div className="row">
        <div className="col-md-6  mx-auto">
          <h1 className="text-center">To-do List</h1>
          <List/>
        </div>
      </div>
    </div>
  );
}

export default App;
