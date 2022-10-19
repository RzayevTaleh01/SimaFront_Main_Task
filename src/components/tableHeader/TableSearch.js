import { Input } from "reactstrap";
import SearchIcon from "../../assets/img/Combined-Shape.svg";

export default function TableSearch({
  setSearchValue,  setCurrentPage,
}) {
  return (
    <div className="table-search">
      <Input
        className="search-input"
        placeholder="FİN-ə görə axtar..."
        onChange={(e) => {
          setSearchValue(e.target.value);
          setCurrentPage(1);
        }}
      />
      <img className="search-icon" src={SearchIcon} />
    </div>
  );
}
