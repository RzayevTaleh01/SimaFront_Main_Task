import React, { useState, useMemo } from "react";
import TableData from "../components/TableData";
import Pagination from "../Pagination";
import data from "./data/mock-data.json";
import "../assets/style/style.scss";
import { Input } from "reactstrap";
import SearchIcon from "../assets/img/Combined-Shape.svg"

let PageSize = 10;

export default function App() {
  const [searchValue, setSearchValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };
  console.log(searchValue);

  const currentTableData = useMemo(() => {
    let filterData = data;

    if (searchValue) {
      filterData = [
        ...filterData.filter((item) => {
          return item.pin
            .toLowerCase()
            .includes(searchValue.toLowerCase());
        }),
      ];
    }
    setTotalCount(filterData.length);

    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return filterData.slice(firstPageIndex, lastPageIndex);
  }, [data, searchValue, currentPage]);

  return (
    <div className="table-body">
      <div className="table-search">
        <Input className="search-input" placeholder="FİN-ə görə axtar..." onChange={handleChange} /> <img className="search-icon" src={SearchIcon} />
      </div>
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
