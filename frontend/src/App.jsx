import { useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
} from "react-router-dom";

import RecipeList from "./components/RecipeList";
import RecipeDetail from "./components/RecipeDetail";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<RecipeList />} />
        <Route path="/recipes:id" element={<RecipeDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
