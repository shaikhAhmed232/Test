import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EditContact from "./components/EditContact";
import ContactHome from "./components/ContactHome";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<ContactHome />} />
          <Route path="/edit-contact/:contactId" element={<EditContact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
