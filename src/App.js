import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './views/home/Home';
import Create from './views/create/Create';
import Read from './views/read/Read';
import PatchOperation from './views/patchOperation/PatchOperation';
import PutOperation from './views/putOperation/PutOperation';
import Delete from './views/delete/Delete';


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/read" element={<Read />} />
        <Route path="/patchOperation" element={<PatchOperation />} />
        <Route path="/putOperation" element={<PutOperation />} />
        <Route path="/delete" element={<Delete />} />
      </Routes>
    </Router>
  )
}

export default App