import React, {useState} from "react";
import './style.css';
import data from "./TemplateData.json";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <div className="templateContainer">
        <div className="searchInput_Container">
          <input id="searchInput" type="text" placeholder="Search here..." onChange={(event) => {
            setSearchTerm(event.target.value);
          }} />
        </div>
        <div className="template_Container">
          {
            data 
              .filter((val) => {
                if(searchTerm == ""){
                  return val;
                }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
                  return val;
                }
              })
              .map((val) => {
                return(
                  <div className="template" key={val.id}>
                    <h2>{val.headline}</h2>
                      <img src={val.image} alt="drive image" />
                      <h3>{val.title}</h3>
                      {/* <p className="price">${val.price}</p> */}
                      <h5>{val.Desc}</h5>
                  </div> 
                )
              })
          }
        </div>
      </div>
    </>
  )
}

export default App;
