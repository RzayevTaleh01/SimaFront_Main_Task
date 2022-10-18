import React, { useState } from "react";
import { Input } from "reactstrap";
import App from "../examples/App";
import TableData from "./TableData";


export default function TableSearch({data}) {

  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    setSearch(e.target.value)
  };


  return (
    <div className="table-search">
      <Input onChange={handleSearch} />
    </div>
  );
}
