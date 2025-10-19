import { BrowserRouter, Route, Routes } from "react-router";
import { AppLayout } from "./components/custom/AppLayout";
import { Test } from "./pages/Test";
import { DashBoard } from "./pages/dashboard/DashBoard";
import { Default } from "./pages/dashboard/Default";
import { OrderList } from "./pages/dashboard/OrderList";
import { ThemeProvider } from "./context/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Default />} />
            <Route path="/dashboard" element={<DashBoard />} />
            <Route path="/dashboard/default" element={<Default />} />
            <Route path="/dashboard/order-list" element={<OrderList />} />
            <Route path="/test" element={<Test />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
