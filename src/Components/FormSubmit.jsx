import { useState } from "react";

function FormSubmit() {
  //შექმნილია ფორმის გამგზავნი button და ასევე onSubmit ივენთი
  const [clickSub, setClickSub] = useState("LLS");
  function handleformSubmit(e) {
    e.preventDefault();
    console.log("FormSubmit called");
    setClickSub("Send");
  }
  return (
    <>
      <h1>Form submission</h1>
      <form onSubmit={handleformSubmit}>
        {/* Button-ზე დაჭერისას იცვლება "LLS"-დან Send-ზე */}
        <button type="submit">Submit Message {clickSub}</button>
      </form>
    </>
  );
}

export default FormSubmit;
