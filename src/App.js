import Header from "./components/Header";
import Card from "./components/Card";
import AddForm from "./components/AddForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Detail from "./components/Detail";
function App() {
  let [cardData, setCardData] = useState({});

  let formDataHandler = (name, year, img, desc) => {
    let cartData = {
      name: name,
      year: year,
      img: img,
      desc: desc,
    };
    setCardData(cartData);
    return;
  };

  console.log(cardData);

  return (
    <div className="relative">
      <Router>
        <Header />

        <Routes>
          <Route
            path="/"
            element={<Card enteredData={cardData} />}
          />
          <Route
            path="/addForm"
            element={<AddForm sendFormDataHandler={formDataHandler} />}
          />
          <Route
            path="/detail/:id"
            element={<Detail />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
