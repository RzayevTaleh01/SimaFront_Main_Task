import React from "react";

export default function TableData({ currentTableData }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Adı</th>
          <th>Soyad</th>
          <th>Fin</th>
          <th>Tranzaksiya</th>
          <th>Tarix</th>
        </tr>
      </thead>
      <tbody>
        {currentTableData.map((item, index) => {
          return (
            <tr key={index}>
              <td>{item.first_name}</td>
              <td>{item.last_name}</td>
              <td>{item.pin}</td>
              <td>{item.transaction}</td>
              <td>{item.date}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
