import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import SurveyForm from "./Components/SurveyForm";
import ThankYouPage from "./Pages/ThankYouPage";
const App: React.FC = () => {
  return (
    <>
      <NavBar />
      <ThankYouPage />
      {/* <SurveyForm /> */}
      <Footer />
    </>
  );
};

export default App;
