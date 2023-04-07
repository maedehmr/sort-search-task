import React from "react";
export default function Table({ sortedData }) {
  return (
    <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Birth Date</th>
      </tr>
    </thead>
    <tbody>
      {sortedData.map(({ id, name, email, birthDate }) => (
        <tr key={id}>
          <td>{name}</td>
          <td>{email}</td>
          <td>{birthDate}</td>
        </tr>
      ))}
    </tbody>
  </table>
  );
}
