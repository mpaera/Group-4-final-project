import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AddEvent from "./pages/AddEvent";
import EventDetails from "./pages/EventDetails";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-event" element={<AddEvent />} />
          <Route path="/events/:id" element={<EventDetails />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;