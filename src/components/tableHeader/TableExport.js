import React from "react";
import {
  ButtonGroup,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap";

export default function () {
  return (
    <div className="table-export">
      <ButtonGroup>
        <UncontrolledDropdown>
          <DropdownToggle caret>Export</DropdownToggle>
          <DropdownMenu>
            <DropdownItem>Export as.csv</DropdownItem>
            <DropdownItem>Export as.excl</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </ButtonGroup>
    </div>
  );
}
