import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CardList from "./pages/CardList";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cards" element={<CardList />} />
      </Routes>
    </>
  );
}

export default App;
