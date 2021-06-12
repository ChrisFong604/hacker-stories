import './App.css';
import React from 'react';

import Search from './components/Search';
import List from './components/List';
import useSemiPersistentState from './useSemiPersistentState';

const App = () => {
  const stories = [
    {
      title: 'React',
      url: 'https://reactjs.org/',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: 'Redux',
      url: 'https://redux.js.org/',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ];

  const [searchTerm, setSearchTerm] = useSemiPersistentState('search', 'React');


  /*
    useEffect takes the first argument as side-effect; the function. 
    Then the OPTIONAL second argument is a dependency array of variables. 
    Here if searchTerm changes, then the useEffect will trigger the first 
    argumentative function localStorage.getItem()
  */

  //handleSearch is passed down as a callback function through the Search component
  //It will return the search term to this components state
  const handleSearch = event => {
    setSearchTerm(event.target.value);
  };

  //searchedStories is a function passed down to the list component, which will
  //then filter the results and display them through the mapping function
  const searchedStories = stories.filter(story => 
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>My Hacker Stories</h1>

      <Search search={searchTerm} onSearch={handleSearch} />

      <hr />

      <List list={searchedStories} />
    </div>
  );
};

export default App;
