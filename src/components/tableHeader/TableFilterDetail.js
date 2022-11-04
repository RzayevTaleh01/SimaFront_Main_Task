import React from "react";
import { useState } from "react";
import { Input, Label, FormGroup, Form, Button } from "reactstrap";

export default function TableFilterDetail({
  handleFilter,
}) {
  const [filters, setFilters] = useState({
    transaction: "",
    from: "",
    to: "",
  });

  const handleInput = (field) => (e) => {
    const { value } = e.target;
    setFilters({
      ...filters,
      [field]: value,
    });
  };

  const resetFilter = () => {
    setFilters({
      transaction: "",
      from: "",
      to: "",
    });
    console.log(filters);
  };

  const handleBtn = () => {
    console.log(filters);
    handleFilter(filters.from, filters.to, filters.transaction);
  };

  return (
    <div className="table-filter-detail">
      <Form className="filter-form">
        <div>
          <FormGroup>
            <Label for="exampleEmail">Tarixdən</Label>
            <Input
              value={filters.from}
              id="exampleEmail"
              name="email"
              placeholder="with a placeholder"
              type="date"
              onChange={handleInput("from")}
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Tarixə</Label>
            <Input
              value={filters.to}
              id="examplePassword"
              name="password"
              placeholder="password placeholder"
              type="date"
              onChange={handleInput("to")}
            />
          </FormGroup>
        </div>
        <div>
          <FormGroup>
            <Label for="exampleSelect">Növ</Label>
            <Input
              value={filters.transaction}
              id="exampleSelect"
              name="select"
              type="select"
              onChange={handleInput("transaction")}
            >
              <option>Tranzaksiya</option>
              <option>Avtorizasiya</option>
              <option>Avtorizasiya 1</option>
              <option>Avtorizasiya 2</option>
            </Input>
          </FormGroup>

          <FormGroup className="filter-div-btn">
            <Button className="filter-btn" onClick={(e) => handleBtn(e)}>
              Axtar
            </Button>
            <a href="#" className="reset-link" onClick={() => resetFilter()}>
              Filterləri sıfırla
            </a>
          </FormGroup>
        </div>
      </Form>
    </div>
  );
}
