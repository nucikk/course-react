import { useState } from "react";

function ChangeEvent() {
    // inputში ჩაწერილი ინფორმაცია ლაივ რეჯიმში გამოჩნდება ეკრანზე
  const [userName, setUserName] = useState();

  function handleChangeEvent(e) {
    e.preventDefault();
    setUserName(e.target.value);
  }
  return (
    <>
      <h3>Change event</h3>
      <input
        className="change_input"
        type="text"
        name="userName"
        value={userName}
        onChange={handleChangeEvent}
      />
      <p>{userName}</p>
    </>
  );
}

export default ChangeEvent;
