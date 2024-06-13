import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import {Component as Navbar}  from './components/navbar/Navbar'
import CheerUp from "./components/cheer/CheerUp";
import Gallery from "./components/gallery/Gallery";
import Reminder from "./components/reminder/Reminder";
import Songs from "./components/songs/Songs"

function App() {
  return (
   <>
   <Router>
    <Navbar />
    <Routes>
      <Route path="" element={<> 
        <Header/>
        <CheerUp />
        <Gallery />
        <Reminder />
        </> } />
        <Route path="/songs" element={<Songs />} />

    </Routes>
   </Router>
  </>
  )
}

export default App;
