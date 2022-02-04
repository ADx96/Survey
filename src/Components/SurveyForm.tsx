import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import { observer } from "mobx-react";
import "../Styles/SurveyForm.css";
import Button from "react-bootstrap/Button";
import surveyStore from "../Mobx/SurveyStore";

interface PersonProps {
  QuestionID: number;
  Answer: string;
}

interface RemarksProps {
  Remarks: string;
  MobileNo: string;
  TransactionID: number;
}

const SurveyForm: React.FC = () => {
  const [Q1, setQ1] = useState<PersonProps>({
    QuestionID: 1,
    Answer: "",
  });
  const Q2 = {
    QuestionID: 2,
    Answer: "",
    TransactionID: 0,
  };

  const Q3 = { QuestionID: 3, Answer2: "", TransactionID: 0 };

  const Q4 = { QuestionID: 4, Answer3: "", TransactionID: 0 };

  const [Other, setOther] = useState([Q2, Q3, Q4]);
  const [Remarks, setRemarks] = useState<RemarksProps>({
    Remarks: "",
    MobileNo: "",
    TransactionID: 0,
  });

  const [show, setShow] = useState(false);

  const handleRemarks = (e: { target: { name: any; value: any } }) => {
    setRemarks({ ...Remarks, [e.target.name]: e.target.value });
  };

  const handleQ1 = (e: { target: { name: any; value: any } }) => {
    setQ1({ ...Q1, [e.target.name]: e.target.value });
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

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    // await surveyStore.SubmitQ1(Q1);
    if (show === true || Q1.Answer === "Poor") {
      await surveyStore.SubmitQ1(Q1);
      await surveyStore.SendRemarks(Remarks);
      await surveyStore.SubmitOther(Other);
    } else {
      await surveyStore.SubmitQ1(Q1);
    }
    console.log(Q1);
    console.log(Remarks);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div id="con" className="container">
        <header>
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
                onClick={() => setShow(false)}
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
                onClick={() => setShow(false)}
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
                onClick={() => setShow(false)}
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
                onClick={() => setShow(true)}
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
                value="Excellent"
                onClick={() => setShow(false)}
                name="flexRadioDefault2"
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
                name="flexRadioDefault2"
                onClick={() => setShow(false)}
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
                name="flexRadioDefault2"
                onClick={() => setShow(false)}
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
                onClick={() => setShow(true)}
                value="Poor"
                name="flexRadioDefault2"
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
                onClick={() => setShow(false)}
                name="flexRadioDefault3"
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
                onClick={() => setShow(false)}
                name="flexRadioDefault3"
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
                name="flexRadioDefault3"
                onClick={() => setShow(false)}
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
                onClick={() => setShow(true)}
                name="flexRadioDefault3"
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
                onClick={() => setShow(false)}
                name="flexRadioDefault4"
                value="Excellent"
                id="flexRadioDefault11"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault11">
                Excellent
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                onClick={() => setShow(false)}
                value="Good"
                name="flexRadioDefault4"
                id="flexRadioDefault12"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault12">
                Good
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                value="Average"
                onClick={() => setShow(false)}
                name="flexRadioDefault4"
                id="flexRadioDefault13"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault13">
                Average
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                value="Poor"
                onClick={() => setShow(true)}
                name="flexRadioDefault4"
                id="flexRadioDefault14"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault14">
                Poor
              </label>
            </div>
          </div>
        </section>
      </div>
      {show === true || Q1.Answer === "Poor" ? (
        <div className="container" id="div134">
          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">Remarks</label>
            <textarea
              onChange={handleRemarks}
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
    </Form>
  );
};

export default observer(SurveyForm);
