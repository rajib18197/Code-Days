import { useState } from "react";
import { useDebounce } from "../hooks/useDebounce";
import { getMoviesData } from "../../../Plain-JS/statsEffect/js/services/apiMovies";

export default function AutoComplete() {
  const [showDropdown, setShowDropdown] = useState(false);
  // const [value, setValue] = useState("");
  const [list, setList] = useState([]);
  const debounce = useDebounce(handleChange, 1000);

  async function handleChange(e) {
    const data = await getMoviesData({ searchTerm: value });
    setList(data);
  }

  return (
    <>
      <label htmlFor="search">Search Your Thing...</label>
      <input type="text" id="search" onChange={debounce(handleChange)} />

      {showDropdown && (
        <div class="dropdown dropdown__hidden">
          <div className="dropdown__menu">
            {list.map((item) => (
              <div className="dropdown__item">
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
