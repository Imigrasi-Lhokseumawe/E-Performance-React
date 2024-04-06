import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './components/Sidebar';
import ListLalintalkim from './pages/ListLalintalkim';
import Homepage from './pages/Homepage';
import Kinerja from './pages/Kinerja';
import Dashboard from './pages/Dashboard';
import ListInteldakim from './pages/ListInteldakim';
import ListTikkim from './pages/ListTikkim';
import ListTataUsaha from './pages/ListTataUsaha';
import AddLalintalkim from './pages/AddLalintalkim';
import AddInteldakim from './pages/AddInteldakim';
import AddTikkim from './pages/AddTikkim';
import AddTataUsaha from './pages/AddTataUsaha';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={(
          <>
            <Homepage />
          </>
        )} />
        <Route path="/kinerja" element={(
          <>
            <Kinerja />
          </>
        )} />
        <Route path="/dashboard" element={(
          <>
            <Navbar />
            <Sidebar />
            <Dashboard />
          </>
        )} />
        <Route path="/data-seksi-lalintalkim" element={(
          <>
            <Navbar />
            <Sidebar />
            <ListLalintalkim />
          </>
        )} />
        <Route path="/add-lalintalkim" element={(
          <>
            <Navbar />
            <Sidebar />
            <AddLalintalkim />
          </>
        )} />
        <Route path="/data-seksi-inteldakim" element={(
          <>
            <Navbar />
            <Sidebar />
            <ListInteldakim />
          </>
        )} />
        <Route path="/add-inteldakim" element={(
          <>
            <Navbar />
            <Sidebar />
            <AddInteldakim />
          </>
        )} />
        <Route path="/data-seksi-tikkim" element={(
          <>
            <Navbar />
            <Sidebar />
            <ListTikkim />
          </>
        )} />
        <Route path="/add-tikkim" element={(
          <>
            <Navbar />
            <Sidebar />
            <AddTikkim />
          </>
        )} />
        <Route path="/data-subbag-tata-usaha" element={(
          <>
            <Navbar />
            <Sidebar />
            <ListTataUsaha />
          </>
        )} />
        <Route path="/add-tata-usaha" element={(
          <>
            <Navbar />
            <Sidebar />
            <AddTataUsaha />
          </>
        )} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
