import React from "react";
import TableSearch from "./TableSearch";

export default function TableHeader({setSearchValue,searchValue,setCurrentPage}) {
  return (
    <div className="table-header">
      <TableSearch
        setSearchValue={setSearchValue}
        searchValue={searchValue}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}
