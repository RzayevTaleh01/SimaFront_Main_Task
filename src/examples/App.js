import React, { useState, useMemo } from "react";
import TableData from "../components/TableData";
import data from "./data/mock-data.json";
import "../assets/style/style.scss";
import Pagination from "../components/Pagination";
import TableHeader from "../components/tableHeader";
import { useSelector } from "react-redux";
import TableFilterDetail from "../components/tableHeader/TableFilterDetail";
import dayjs from "dayjs";

let PageSize = 5;

export default function App() {

  const isBetween = require("dayjs/plugin/isBetween");
  dayjs.extend(isBetween);


  const [searchValue, setSearchValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [nData, setNData] = useState(data);

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

  const { filterMode } = useSelector((state) => state.filter);

  const generateTransactionDataForDropdown = () => {
    return [...new Set(data.map((item) => item.gender))];
  };

  const handleFilter = (from, to, transaction) => {
    const filteredData = data.filter((item) => {
      if (
        dayjs(item.date).isBetween(dayjs(from), dayjs(to)) &&
        item.transaction === transaction
      ) {
        console.log(dayjs(from) + "    " + from);
        return item;
      }
    });

    setNData(filteredData);
  };



  return (
    <div className="table-element">
      <TableHeader
        setSearchValue={setSearchValue}
        setCurrentPage={setCurrentPage}
      />

      {filterMode ? (
        <TableFilterDetail
          handleFilter={handleFilter}
          transactions={generateTransactionDataForDropdown}
        />
      ) : (
        <> </>
      )}

      <TableData currentTableData={nData} />
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
