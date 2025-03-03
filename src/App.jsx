import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Newpage from "./Newpage";
import Settings from "./Settings";
import Subscription from "./Subscription";
import AddCredits from "./Addcredits"; // Corrected import statement
import Password from "./Password";
import PricingTable from "./PricingTable";
import Component from './Component';

export default function App() {
  return (
    <div>
      <Router>
        {/* Navigation Link to Newpage */}
        <Routes>
          <Route path="/Newpage" element={<Newpage />} />
          <Route path="/" element={<Component/>} />
          <Route path="/Settings" element={<Settings/>} />
          <Route path="/Subscription" element={<Subscription/>}/>
          <Route path="/AddCredits" element={<AddCredits/>}/> {/* Corrected route path */}
          <Route path="/Password" element={<Password/>}/>
          <Route path="/PricingTable" element={<PricingTable/>}/>
        </Routes>
      </Router>
    </div>
  );
}