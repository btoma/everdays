import React, { useEffect } from 'react';
import './styles/styles.scss';
import Body from './components/Body';
import Header from './components/Header';
import axios from 'axios';
import { useSelector, useDispatch } from "react-redux";
import { setFuneralHomes } from './features/funeralHomes';
import { setPages } from './features/pagination';

function App() {

  const paginationState = useSelector((state) => state.pagination.value);
  const sortState = useSelector((state) => state.sort.value);
  const { page } = paginationState;
  const { type } = sortState;
  
  
  const dispatch = useDispatch();
  const getFuneralHomes = async () => {
    const res = await axios.get(`https://dev.everdays.com/v2/public/providers?state=mi&page=${page}&sort=${type}`).catch(err => alert(err));
    const { homes, nextPage, totalCount } = res?.data?.data;
   
    dispatch(setFuneralHomes({ homes, nextPage }));
    dispatch(setPages({ setPages: totalCount }))
  }


  useEffect(() => {
    getFuneralHomes();
  }, [page, type])



  return (
    <div className="App">
      <Header />
      <Body/>
    </div>
  );
}

export default App;
