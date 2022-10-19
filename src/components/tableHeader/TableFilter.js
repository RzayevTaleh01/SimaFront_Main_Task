import React from "react";
import FilterIcon from "../../assets/img/Filter.svg";

export default function TableFilter() {
  return (
    <div className="table-filter">
      <button><img src={FilterIcon} />
      </button>
    </div>
  );
}
