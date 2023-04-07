import React, { useState } from "react";
import Table from "./table";
import { data } from "./data";
import "./App.css";
function App() {
  const [searchText, setSearchText] = useState("");
  const [sortedData, setSortedData] = useState(data);

  const handleSearch = (event) => {
    const { value } = event.target;
    setSearchText(value);
  
    const filteredData = data.filter(
      (item) =>
        item.name.toLowerCase().includes(value.toLowerCase()) ||
        item.email.toLowerCase().includes(value.toLowerCase()) ||
        new Date(item.birthDate).toLocaleDateString().includes(value.toLowerCase())
    );
    console.log("filteredData: ", filteredData);
    setSortedData(filteredData);
  };
  const handleSortByDate = () => {
    const sorted = [...sortedData].sort(
      (a, b) =>
        new Date(a.birthDate).getTime() - new Date(b.birthDate).getTime()
    );
    setSortedData(sorted);
  };

  const handleSortByName = () => {
    const sorted = [...sortedData].sort((a, b) => a.name.localeCompare(b.name));
    setSortedData(sorted);
  };

  return (
    <div>
      <button onClick={handleSortByName}>Sort by name</button>
      <button onClick={handleSortByDate}>Sort by birth date</button>
      <input
        type="text"
        placeholder="Search by name or email"
        value={searchText}
        onChange={handleSearch}
      />
<Table sortedData={sortedData}/>
    </div>
  );
}

export default App;
