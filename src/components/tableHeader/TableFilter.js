import React from "react";
import { useDispatch, useSelector } from "react-redux";
import FilterIcon from "../../assets/img/Filter.svg";
import { setFilterMode } from "../../stores/slices/filterSlice";
import TableFilterDetail from "./TableFilterDetail";

export default function TableFilter() {
  const dispatch = useDispatch();

  const { filterMode } = useSelector((state) => state.filter);


  return (
    <div className="table-filter">
      <button onClick={() => dispatch(setFilterMode())}>
        <img src={FilterIcon} />
      </button>
  
    </div>
  );
}
