import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { selectPage } from '../features/pagination';
import ReactPaginate from 'react-paginate';
import FuneralHomeCard from './FuneralHomeCard';
import SortDropDown from './SortDropDown';

const Body = () => {

    const dispatch = useDispatch();
    const homeState = useSelector((state) => state.funeralHomes.value)
    const paginationState = useSelector((state) => state.pagination.value);

    const { pages } = paginationState;
    const { homes, nextPage } = homeState;
    

   const handlePageClick = (event) => {
        let page = event.selected + 1;
       dispatch(selectPage({ selectPage: page}))
    }

    return (
        <div className="app-body container">
            <SortDropDown />
            <FuneralHomeCard homeList={homes}/>
            {nextPage ? (
                <ReactPaginate
                    pageRangeDisplayed={3}
                    previousLabel={'<'}
                    nextLabel={'>'}
                    pageCount={pages}
                    onPageChange={handlePageClick}
                    containerClassName={'pagination'}
                    activeClassName={'active'}
                />
            ): null}
        </div>
    )
}

export default Body;