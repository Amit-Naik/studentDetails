import React from "react";
import "./search.css";

export default function Search({ setValue }) {
  return (
    <div className="search">
      <input
        className="searchInput"
        type="search"
        placeholder="Search by name"
        onChange={(e) => setValue(e.target.value)}
      ></input>
    </div>
  );
}
