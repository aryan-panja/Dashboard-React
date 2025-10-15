import { BrowserRouter, Route, Routes } from "react-router";
import { DashBoard } from "./pages/DashBoard";
import { AppLayout } from "./components/custom/AppLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/dashboard" element={<DashBoard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
