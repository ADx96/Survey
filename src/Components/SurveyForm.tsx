import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import { observer } from "mobx-react";
import "../Styles/SurveyForm.css";
import Button from "react-bootstrap/Button";
import surveyStore from "../Mobx/SurveyStore";
import { useNavigate } from "react-router-dom";
import Alert from "react-bootstrap/Alert";

interface RemarksProps {
  Remarks: string;
  MobileNo: string;
  TransactionID: number;
}

const SurveyForm: React.FC = () => {
  const navigate = useNavigate();

  const [Q1, setQ1] = useState({
    QuestionID: 1,
    Answer: "",
  });

  const [Q2, setQ2] = useState({
    QuestionID: 2,
    Answer: "",
    TransactionID: 0,
  });

  const [Q3, setQ3] = useState({
    QuestionID: 3,
    Answer: "",
    TransactionID: 0,
  });

  const [Q4, setQ4] = useState({
    QuestionID: 4,
    Answer: "",
    TransactionID: 0,
  });

  const [alert, setAlert] = useState(false);

  const [Remarks, setRemarks] = useState<RemarksProps>({
    Remarks: "",
    MobileNo: "",
    TransactionID: 0,
  });

  const handleRemarks = (e: { target: { name: any; value: any } }) => {
    setRemarks({ ...Remarks, [e.target.name]: e.target.value });
  };

  const handleQ1 = (e: { target: { value: string } }) => {
    setQ1({ ...Q1, Answer: e.target.value });
  };
  const handleQ2 = (e: { target: { value: string } }) => {
    setQ2({ ...Q2, Answer: e.target.value });
  };
  const handleQ3 = (e: { target: { value: string } }) => {
    setQ3({ ...Q3, Answer: e.target.value });
  };
  const handleQ4 = (e: { target: { value: string } }) => {
    setQ4({ ...Q4, Answer: e.target.value });
  };

  useEffect(() => {
    async function fetchData() {
      await surveyStore.GetQuestion();
    }
    fetchData();
  }, []);

  if (surveyStore.isLoading) {
    return <></>;
  }

  Q1.QuestionID = surveyStore.Questions[0].PKID;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (
      Q1.Answer !== "" &&
      Q2.Answer !== "" &&
      Q3.Answer !== "" &&
      Q4.Answer !== ""
    ) {
      if (
        Q1.Answer === "Poor" ||
        Q2.Answer === "Poor" ||
        Q3.Answer === "Poor" ||
        Q4.Answer === "Poor"
      ) {
        await surveyStore.SubmitQ1(Q1);
        const ID = surveyStore.Questions[0].ID;
        Q2.TransactionID = ID;
        Q3.TransactionID = ID;
        Q4.TransactionID = ID;
        Remarks.TransactionID = ID;
        await surveyStore.SubmitOther(Q2);
        await surveyStore.SubmitOther(Q3);
        await surveyStore.SubmitOther(Q4);
        await surveyStore.SendRemarks(Remarks);
      } else {
        await surveyStore.SubmitQ1(Q1);
        const ID = surveyStore.Questions[0].ID;
        Q2.TransactionID = ID;
        Q3.TransactionID = ID;
        Q4.TransactionID = ID;
        await surveyStore.SubmitOther(Q2);
        await surveyStore.SubmitOther(Q3);
        await surveyStore.SubmitOther(Q4);
      }
      navigate("/ThankYouPage");
    } else {
      setAlert(true);
      setTimeout(() => {
        setAlert(false);
      }, 5000);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div id="con" className="container">
          <header className="header-title">
            <h1 className="heading">Customer Satisfaction Survey</h1>
          </header>
          <section>
            <h2 className="title">{surveyStore.Questions[0].Question_En}</h2>
            <div className="flex">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  value="Excellent"
                  onChange={handleQ1}
                  name="Answer"
                  id="flexRadioDefault1"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Excellent
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="Answer"
                  value="Good"
                  onChange={handleQ1}
                  id="flexRadioDefault2"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  Good
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  onChange={handleQ1}
                  type="radio"
                  value="Average"
                  name="Answer"
                  id="flexRadioDefault3"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault3">
                  Average
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  onChange={handleQ1}
                  type="radio"
                  value="Poor"
                  name="Answer"
                  id="flexRadioDefault4"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault4">
                  Poor
                </label>
              </div>
            </div>
            <h2 className="title">{surveyStore.Questions[1].Question_En}</h2>

            <div className="flex">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  onChange={handleQ2}
                  value="Excellent"
                  name="Answer2"
                  id="flexRadioDefault5"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault5">
                  Excellent
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="Answer2"
                  onChange={handleQ2}
                  value="Good"
                  id="flexRadioDefault6"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault6">
                  Good
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="Answer2"
                  onChange={handleQ2}
                  value="Average"
                  id="flexRadioDefault7"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault7">
                  Average
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  value="Poor"
                  name="Answer2"
                  onChange={handleQ2}
                  id="flexRadioDefault8"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault8">
                  Poor
                </label>
              </div>
            </div>
            <h2 className="title">{surveyStore.Questions[2].Question_En}</h2>

            <div className="flex">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  value="Excellent"
                  name="Answer3"
                  onChange={handleQ3}
                  id="flexRadioDefault1"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Excellent
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  value="Good"
                  name="Answer3"
                  onChange={handleQ3}
                  id="flexRadioDefault2"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  Good
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="Answer3"
                  onChange={handleQ3}
                  value="Average"
                  id="flexRadioDefault3"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault3">
                  Average
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  value="Poor"
                  name="Answer3"
                  onChange={handleQ3}
                  id="flexRadioDefault3"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault3">
                  Poor
                </label>
              </div>
            </div>
            <h2 className="title">{surveyStore.Questions[3].Question_En}</h2>

            <div className="flex">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="Answer4"
                  onChange={handleQ4}
                  value="Excellent"
                  id="flexRadioDefault11"
                />
                <label
                  className="form-check-label"
                  htmlFor="flexRadioDefault11"
                >
                  Excellent
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  value="Good"
                  name="Answer4"
                  onChange={handleQ4}
                  id="flexRadioDefault12"
                />
                <label
                  className="form-check-label"
                  htmlFor="flexRadioDefault12"
                >
                  Good
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  value="Average"
                  name="Answer4"
                  onChange={handleQ4}
                  id="flexRadioDefault13"
                />
                <label
                  className="form-check-label"
                  htmlFor="flexRadioDefault13"
                >
                  Average
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  value="Poor"
                  name="Answer4"
                  onChange={handleQ4}
                  id="flexRadioDefault14"
                />
                <label
                  className="form-check-label"
                  htmlFor="flexRadioDefault14"
                >
                  Poor
                </label>
              </div>
            </div>
          </section>
        </div>
        {Q1.Answer === "Poor" ||
        Q2.Answer === "Poor" ||
        Q3.Answer === "Poor" ||
        Q4.Answer === "Poor" ? (
          <div className="container" id="div134">
            <div className="form-group">
              <label htmlFor="exampleFormControlTextarea1">Remarks</label>
              <textarea
                onChange={handleRemarks}
                required
                className="form-control"
                id="exampleFormControlTextarea1"
                name="Remarks"
                rows={3}
              ></textarea>
            </div>
            <div style={{ marginTop: "30px" }}>
              <Form.Label htmlFor="inputPassword5">Mobile</Form.Label>
              <Form.Control
                type="number"
                onChange={handleRemarks}
                name="MobileNo"
                required
                id="inputPassword5"
                aria-describedby="passwordHelpBlock"
              />
            </div>
          </div>
        ) : (
          <></>
        )}
        <div className="sumbit-div">
          <Button type="submit" className="submit" variant="primary">
            Submit Survey
          </Button>
        </div>
      </form>
      {alert === true ? (
        <Alert variant={"danger"}>Please select all fields</Alert>
      ) : (
        <></>
      )}
    </>
  );
};

export default observer(SurveyForm);
