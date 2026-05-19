import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import ServicePage from "./pages/ServicePage";
import PgwpOptionsPage from "./pages/PgwpOptionsPage";

const basename = import.meta.env.BASE_URL.replace(/\/$/, "");

export default function App() {
  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/pgwp-options" element={<PgwpOptionsPage />} />
        <Route path="/:slug" element={<ServicePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
