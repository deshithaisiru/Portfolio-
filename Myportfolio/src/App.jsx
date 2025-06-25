import { Home } from "lucide-react";
import { BrowserRouter, Routes } from "react-router-dom";
import { NotFound } from "./Pages/NotFound";

function App() {
  return(
   <>
  <BrowserRouter>
  <Routes>
    <route index element={<Home />} />
    <route path="*" element={<NotFound />} />

  </Routes>
  </BrowserRouter>
  </>

  );
  
}

export default App
