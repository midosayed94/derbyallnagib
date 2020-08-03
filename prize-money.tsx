import React from "react";
import "App.scss";
import "./TermsAndConditions.scss";

const TermsAndConditionsPage = () => {
  const terms: string[] = [
    
    "First race prizes El Dabaa 300 km: ",                                                                                                                                                                                                                                                                                      
"1st        1450 euro",
"2nd       870 euro",
"3rd        550 euro",
"4th        450 euro",
"5th        290 euro",
"6th to 10th   145 euro",
"11th to 40th 60 euro",

"Second race prizes Fouka 35o km: ",
"1st       1750 euro",
"2nd      1450 euro",
"3rd       870   euro",
"4th       550 euro",
"5th       450 euro",
"6th to 10th 260 euro",
"11th to 20th   100 euro",
"21th to 50th   60 euro",

"Third race prizes Marsa Matrouh 420 km: ",
"1st       2300 euro",
"2nd      1750 euro",
"3rd       1450 euro",
"4th        870 euro",
"5th        550 euro",
"6th to 10th   290 euro",
"11th to 20th   200 euro",
"21th to 50th   60 euro",
"Semifinal race Zawyet Zhemas 500 km: ",
"1st        2800 euro",
"2nd        2300 euro",
"3rd        1750 euro",
"4th         1450 euro",
"5th        870 euro",
"6th to 10th    350 euro",
"11th to 20th    200 euro",
"21st to 50th     60 euro",

"Final race prizes Salloum 620 km: ",
"1st      2800 euro",
"2nd      2300 euro",
"3rd       1750 euro",
"4th       1450 euro",
"5th        870 euro",
"6th to 10th    580 euro",
"11th to 20th   290 euro ",
"21st to 50th    100 euro ",

"Ace pigeon: ",
"1st      2800 euro",
"2nd      2300 euro",
"3rd      1750 euro",
"4th      1450 euro ",
"5th      870 euro",
"6th to 10th   350 euro ",
"11th to 20th   200 euro ",
"21st to 50th     60 euro",

"Teams:",
"1st       1750 euro",
"2nd      1159 euro",
"3rd       875 euro",
"4th       580 euro",
"5th       290 euro",
"6th to 10th     175 euro",
"11th to 20th     150 euro",



  ];
  return (
    <div className={"terms-and-conditions-top-container page-body-container"}>
      <h3>Prize Money</h3>
      <ol>
        {terms.map((term, termIndex) => (
          <li key={termIndex}>{term}</li>
        ))}
      </ol>
     
    </div>
  );
};
export { TermsAndConditionsPage };
