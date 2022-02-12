import React, { useEffect } from 'react';
import FilterBox from './components/FilterBox';
import Section from './components/Section';
import "./style/style.css";
import { fetchData, gotData, gotError } from './features/state/stateSlice';
import { useDispatch, useSelector } from 'react-redux'

function App() {

  const dispatch = useDispatch();
  const state = useSelector(state => state.state)
  useEffect(() => {
    dispatch(fetchData())
    fetch("https://assessment-edvora.herokuapp.com/")
      .then(res => res.json())

      .then(data => {
        if (data.length === 0)
          throw "ERROR"
        dispatch(gotData(data))

      }).catch(error => {
        dispatch(gotError())
      })
  }, [dispatch])
  console.log(state)
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
  }
  else if (state.error)
    return <div className='Error'>
      <div>
        <h3>Error while loading the data</h3>
        <br />
        <button onClick={() => window.location.reload()}>
          Reload
        </button>
      </div>
    </div>
  else
    return <div className="Loading"><h3>Loading...</h3></div>

}

export default App;
