import React from 'react';
import './App.css';

import Stories from './Story/Stories';

const App = ({ stories, onArchive }) =>
    <div className="app">
        <Stories
            stories={stories}
            onArchive={{onArchive}}
        />
    </div>;

export default  App;
