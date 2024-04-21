import { useState } from "react";
import { useDebounce } from "../hooks/useDebounce";

export default function AutoComplete({ onSearch, onSelection, onInputValue }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [list, setList] = useState([]);
  const debounce = useDebounce();
  const onInputChange = debounce(getData, 1000);

  function handleChange(e) {
    setSearchTerm(e.target.value);
    onInputChange(e.target.value);
  }

  async function getData(value) {
    const data = await onSearch(value);
    setList(data);
    setShowDropdown(true);
  }

  function handleClick(item) {
    setShowDropdown(false);
    setSearchTerm(onInputValue(item));
    onSelection(item);
  }

  return (
    <>
      <label htmlFor="search">Search Your Thing...</label>
      <input
        type="text"
        value={searchTerm}
        id="search"
        onChange={handleChange}
      />

      {showDropdown && (
        <div className="dropdown">
          <div className="dropdown__menu">
            {list.map((item) => (
              <div
                className="dropdown__item"
                key={item.imdbID}
                onClick={() => handleClick(item)}
              >
                <img src={`${item.Poster}`} alt="item" />
                <p>{item.Title}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
