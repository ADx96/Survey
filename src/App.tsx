import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import SurveyForm from "./Components/SurveyForm";
import { Routes, Route } from "react-router-dom";
import ThankYouPage from "./Pages/ThankYouPage";
const App: React.FC = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<SurveyForm />} />
        <Route path="/ThankYouPage" element={<ThankYouPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
