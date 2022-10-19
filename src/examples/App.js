import React, { useState, useMemo } from "react";
import TableData from "../components/TableData";
import data from "./data/mock-data.json";
import "../assets/style/style.scss";
import Pagination from "../components/Pagination";
import TableHeader from "../components/tableHeader";

let PageSize = 5;

export default function App() {
  const [searchValue, setSearchValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  console.log(searchValue);

  const currentTableData = useMemo(() => {
    let filterData = data;

    if (searchValue) {
      filterData = [
        ...filterData.filter((item) => {
          return item.pin.toLowerCase().includes(searchValue.toLowerCase());
        }),
      ];
    }
    setTotalCount(filterData.length);

    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return filterData.slice(firstPageIndex, lastPageIndex);
  }, [data, searchValue, currentPage]);

  return (
    <div className="table-element">
      <TableHeader
        setSearchValue={setSearchValue}        setCurrentPage={setCurrentPage}
      />
      <TableData currentTableData={currentTableData} />
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={totalCount}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
}
