import React from "react";
import { Input, Label, FormGroup, Form, FormText, Button } from "reactstrap";

export default function TableFilterDetail() {
  return (
    <div className="table-filter-detail">
      <Form className="filter-form">
        <div>
          <FormGroup>
            <Label for="exampleEmail">Tarixdən</Label>
            <Input
              id="exampleEmail"
              name="email"
              placeholder="with a placeholder"
              type="date"
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Tarixə</Label>
            <Input
              id="examplePassword"
              name="password"
              placeholder="password placeholder"
              type="date"
            />
          </FormGroup>
        </div>
        <div>
          <FormGroup>
            <Label for="exampleSelect">Növ</Label>
            <Input id="exampleSelect" name="select" type="select">
              <option>Tranzaksiya</option>
              <option>Avtorizasiya</option>
            </Input>
          </FormGroup>

          <FormGroup className="filter-div-btn">
            <Button className="filter-btn">Axtar</Button>
            <a href="#" className="reset-link">
              Filterləri sıfırla
            </a>
          </FormGroup>
        </div>
      </Form>
    </div>
  );
}
