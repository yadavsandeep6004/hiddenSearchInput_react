import "./style.css";
import { useState } from "react";

const Search = () => {
  const [flag, setFlag] = useState(false);
  const [value, setValue] = useState(0);

  const whidthHadler = () => {
    setFlag(!flag);
    flag ? setValue(200) : setValue(0);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        style={{ width: `${value}px ` }}
      />
      <button onClick={whidthHadler}>
        <i class="fa-solid fa-magnifying-glass"></i>
      </button>
    </div>
  );
};

export default Search;
