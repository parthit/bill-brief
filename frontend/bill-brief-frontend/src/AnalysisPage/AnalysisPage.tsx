import React from "react";
import SidePanel from "./AnalysisPageComponents/SidePanel";
import SummarySection from "./AnalysisPageComponents/SummarySection";
import BillTable from "./AnalysisPageComponents/BillTable";
import { useLocation } from "react-router";


type llm_response = {
  paper_title: string,
  summary: string,
  main_findings: string,
  benefits: string,
  main_concerns: string
}

const mock_response : llm_response = {
    "paper_title": "Paper Title",
    "summary" : "Cardiomyocytes, the cells responsible for the contraction of the heart, are central to the understanding of various heart conditions. Zamecznik (2014) highlights the case of a 14-year-old boy with restrictive cardiomyopathy, a rare form of the disease characterized by diastolic dysfunction. This case underscores the importance of early diagnosis and treatment, as the condition can be fatal. Emanuel (1972) discusses the association of cardiomyopathy with heredofamilial neuromyopathic disorders, such as Friedreich's disease. Yanjari (2018) provides a comprehensive overview of the symptoms and clinical features of cardiomyopathy in adults, emphasizing the need for early recognition and management. Ижкина (2012) categorizes nonischemic cardiomyopathy into four main types, including dilated, hypertrophic, restrictive, and arrhythmogenic right ventricular, and underscores the high mortality rates in pediatric cases. These studies collectively underscore the importance of understanding and addressing cardiomyocyte-related conditions.",
    "main_findings": "Restrictive cardiomyopathy (RCM) is a rare type of cardiomyopathy, constituting only 2-5% of all cases. Pharmacotherapy helped stabilize the patient's condition, leading to a heart transplantation six months after diagnosis.",
    "benefits": "Restrictive cardiomyopathy (RCM) is a rare type of cardiomyopathy, constituting only 2-5% of all cases. Pharmacotherapy helped stabilize the patient's condition, leading to a heart transplantation six months after diagnosis.",
    "main_concerns": "Restrictive cardiomyopathy (RCM) is a rare type of cardiomyopathy, constituting only 2-5% of all cases. Pharmacotherapy helped stabilize the patient's condition, leading to a heart transplantation six months after diagnosis.",
}

export default function AnalysisPage() {

  const location = useLocation();
  const response = location.state?.data;

  console.log("Recieved a response from the other page", response)

    return (
  <div className="bg-[#f8f9fa] h-screen">
    <div className="flex">
      {/* <SidePanel paper_title={response.paper_title} /> */}
      <div className="flex-1 p-8">
      <SummarySection summary_text={response.summary} />
      <BillTable response={response} />
      </div>
    </div>
  </div>
);
  }

