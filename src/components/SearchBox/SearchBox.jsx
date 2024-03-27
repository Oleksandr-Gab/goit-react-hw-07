import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { changeFilter } from "../../redux/filtersSlice";
import { selectNameFilter } from "../../redux/filtersSlice.js";

import css from "./SearchBox.module.css";

export default function SearchBox() {
    const dispatch = useDispatch();
    const filterValue = useSelector(selectNameFilter);
    return (
        <div className={css.searchBox}>
            <p>Find contacts by name</p>
            <input
                className={css.search}
                type="text"
                value={filterValue}
                onChange={(event) => dispatch(changeFilter(event.target.value))}
            />
        </div>
    );
}
