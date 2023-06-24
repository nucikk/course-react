function KeyPressEvent() {
  //ღილაკზე დაჭერისას ითვლის რაოდენობას
  function handleKeyPress() {
    console.log("keyPress you ...");
  }
  return (
    <>
      <input
        className="keyPress_input"
        type="text"
        placeholder="send keyPrees --- "
        onKeyPress={(e) => handleKeyPress(e)}
      />
    </>
  );
}

export default KeyPressEvent;
