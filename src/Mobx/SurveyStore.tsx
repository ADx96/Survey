import { makeAutoObservable, runInAction } from "mobx";
import instance from "./Instance";

export interface Questions {
  Questions: [];
}

class SurveyStore {
  Questions: any[] = [];
  isLoading = true;
  constructor() {
    makeAutoObservable(this);
  }

  GetQuestion = async () => {
    try {
      const response: any = await instance.get("/questions");
      runInAction(() => {
        this.Questions = response.data;
        this.isLoading = false;
      });
    } catch (error) {
      console.error(error);
    }
  };

  SubmitQ1 = async (QuestionData: any) => {
    try {
      const response = await instance.post(
        "/TransactionInsertFirst",
        QuestionData
      );
      runInAction(() => {
        this.Questions = response.data;
        this.isLoading = false;
      });
    } catch (error) {
      console.error(error);
    }
  };

  SubmitOther = async (QuestionData: any) => {
    try {
      const response: any = await instance.post(
        `/TransactionInsertOther`,
        QuestionData
      );
      runInAction(() => {
        this.Questions = response.data;
        this.isLoading = false;
      });
    } catch (error) {
      console.error(error);
    }
  };

  SendRemarks = async (QuestionData: any) => {
    try {
      const response: any = await instance.post(
        `/TransactionRemarksInsert`,
        QuestionData
      );
      runInAction(() => {
        this.Questions = response.data;
        this.isLoading = false;
      });
    } catch (error) {
      console.error(error);
    }
  };
}

const surveyStore = new SurveyStore();

export default surveyStore;
