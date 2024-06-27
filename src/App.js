import { useState } from 'react';
import './App.css';
import Table from "./components/table/Table"
import { data } from "./components/table-data/data"
import SearchBox from './components/search-box/search';

function App() {
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [designationFilter, setDesignationFilter] = useState('');

  function onSearchChange(event) {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearch(searchFieldString)
  }

  function handleDesignationFilter(event) {
    setDesignationFilter(event.target.value);
  };

  function handleStatusFilter(event) {
    setStatusFilter(event.target.value);
  };

  const filteredData = data.filter((item) => {
    return (
      item.userName.toLowerCase().includes(search) &&
      (designationFilter === '' || item.designation === designationFilter) &&
      (statusFilter === '' || item.accessStatus === statusFilter)
    );
  });

  return (
    <div className="App">
      <h1>Admin Table</h1>
      <SearchBox
        className="search-box"
        onChangeHandler={onSearchChange}
        placeholder="Search User"
      />

      <Table
        filteredData={filteredData}
        handleStatusFilter={handleStatusFilter}
        handleDesignationFilter={handleDesignationFilter}
      />

    </div>
  );
}

export default App;
