import './SearchBox.css';

function SearchBox({handleSearch}) {
  
  
  return (
    <div id="search-box">
      <div id="icon"></div>
      <input onChange={(event) => handleSearch(event.target.value)} id="text" placeholder="Search" />
    </div>
  );
}

export default SearchBox;