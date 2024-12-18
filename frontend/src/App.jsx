import { Routes, Route } from "react-router-dom";
import AccountList from "./pages/AccountList";
import Transactions from "./pages/Transactions";
import MakeOFP from "./pages/MakeOFP";

const App = () => {
  return (
    <Routes>
      <Route path="/accounts" element={<AccountList />} />
      <Route path="/accounts/:id/transactions" element={<Transactions />} />
      <Route path="/make-ofp" element={<MakeOFP />} />
    </Routes>
  );
};

export default App;
