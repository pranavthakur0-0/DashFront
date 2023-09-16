import DashBoard from "./pages/DashBoard/DashBoard";
import { BrowserRouter,Navigate ,Routes, Route} from 'react-router-dom';
import Login from "./pages/Login/Login";
import { useCookies } from "react-cookie";
function App() {

    const [cookie] = useCookies(['usercredential']);
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={cookie.usercredential ? <DashBoard /> : <Navigate to="/login" />} />
        <Route path="/login" element={!cookie.usercredential ? <Login /> : <Navigate to="/" />} />
    </Routes>
</BrowserRouter>

  );
}

export default App;
