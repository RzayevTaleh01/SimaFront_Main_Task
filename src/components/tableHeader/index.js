import React from "react";
import TableExport from "./TableExport";
import TableFilter from "./TableFilter";
import TableSearch from "./TableSearch";

export default function TableHeader({
  setSearchValue, setCurrentPage,
}) {
  return (
    <div className="table-header">
      <TableSearch
        setSearchValue={setSearchValue}
        setCurrentPage={setCurrentPage}
      />
      <TableFilter />
      <TableExport/>
    </div>
  );
}
