import { BrowserRouter, Route, Routes } from "react-router";
import { DashBoard } from "./pages/DashBoard";
import { AppLayout } from "./components/custom/AppLayout";
import { Test } from "./pages/Test";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/test" element={<Test />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
