import React from "react";
import { useDispatch } from 'react-redux';
import { setSort } from '../features/sorting';

const SortDropDown = () => {
    const dispatch = useDispatch();

    const handleSortSelect = (event) => {
        const type = event?.target?.value;
        dispatch(setSort({ type: type }))
    }

    return (
        <div className="sort-select-container row">
            <div className='select-section'>
                <span className="sort-by">SORT BY</span>
                <select onChange={handleSortSelect} className="custom-select form-select">
                    <option value='R'>Top Rated</option>
                    <option value='A'>A-Z</option>
                    <option value='Z'>Z-A</option>
                </select>
            </div>
        </div>
    );
};

export default SortDropDown;