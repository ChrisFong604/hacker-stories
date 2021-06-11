import './App.css';
import React from 'react';

const App = () => {
  //Methods
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

  const [searchTerm, setSearchTerm] = React.useState('');

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

const Search = ({search, onSearch}) => {

  return (
    <div>
       <label htmlFor="search">Search: </label>
      <input 
        id="search" 
        type="text"
        value={search}
        onChange={onSearch}
      />
    </div>
  )
}

const List = ({ list }) => 
    list.map(({ objectID, ...item }) => <Item key={objectID} item={item} />)


const Item = ({ item }) => (
  <div>
    <span>
      <a href={item.url}>{item.title}</a>
    </span>
    <span>{item.author}</span>
    <span>{item.num_comments}</span>
    <span>{item.points}</span>
  </div>
);

export default App;
