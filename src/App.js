import logo from "./logo.svg";
import "./App.scss";
import { vardata } from './data';
import { Row } from "./row.js";
import { Header } from "./Header.js";
import {useState , useEffect} from "react";

function App() {
  var [data, setData] = useState(null);
  
  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
    )
      .then((res) => res.json())
      .then((xata) => {
       setData(xata);
      }).catch((error) => alert("exhausted Limit , spend some money accio guys"));
  }, [data]);

  // var data = vardata;


  return (
    <div className="App">
      {data ? (
        <table>
          <Header />
          {data.map((ele, index) => {
            return <Row className="row" data={ele} index={index} />;
          })}
        </table>
      ) : (
        <h1>Loading....</h1>
      )}
    </div>
  );
}

export default App;
