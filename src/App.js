import React, { useEffect } from 'react';
import FilterBox from './components/FilterBox';
import Section from './components/Section';
import "./style/style.css";
import { fetchData, gotData } from './features/state/stateSlice';
import { useDispatch, useSelector } from 'react-redux'

function App() {

  const dispatch = useDispatch();
  const state = useSelector(state => state.state)
  useEffect(() => {
    dispatch(fetchData())
    fetch("https://assessment-edvora.herokuapp.com/")
      .then(res => res.json())
      .then(data => {
        dispatch(gotData(data))
      })
  }, [dispatch])

  if (!state.isLoading && state.currentData.length) {
    const data = [...new Set(state.currentData.map(item => item.brand_name))]
    return (
      <div className='App'>
        <FilterBox />
        <div className="container">
          <h1>
            Edvora
          </h1>
          <h2>
            Products
          </h2>
          {data && data.map(item => <Section key={item} item={item} data={[]} />)}


        </div>
      </div>);
  } else
    return <div>Loading...</div>

}

export default App;
