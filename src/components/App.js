
import React from "react";
import './../styles/App.css';
 import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLorem } from "./redux/actions";


const App = () => {
  return (
    <div>
        {


         
export default function App() {
  const dispatch = useDispatch();

  const { loading, data, error } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchLorem());
  }, [dispatch]);

  return (
    <div>
      <h2>Lorem Redux</h2>

      {loading && <p>Loading...</p>}

      {error && <p>{error}</p>}

      {data && (
        <p>
          <strong>{data.title}</strong> <br />
          {data.body}
        </p>
      )}
    </div>
  );
}

          
        }
    </div>
  )
}

export default App
