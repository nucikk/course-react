import { useState } from "react";

function VisibilityToggle() {
    //! ტექსტის განყოფილების დამალვა და ჩვენება button-ის გამოყენებით onClick ივენთით

  const [showText, setShowText] = useState(false);
  return (
    <>
      <h3>Hide / Show and Toggle</h3>
      {showText ? (
        <p className="technolgy_text">
          The key trend around AI in 2023, Deloitte suggests, will involve
          trust. Specifically, “Learning to trust our robot colleagues.” This
          will see organizations addressing key questions as machines move from
          “number crunching” tasks like running spreadsheets towards a new field
          of cognitive decision-making tasks.
        </p>
      ) : (
        <h3>NOT FOUND</h3>
      )}
       {/* Button to show the text */}
      <button className="technolgy_button" onClick={() => setShowText(true)}>
        Show Text
      </button>
      {/* Button to hide the text */}
      <button className="technolgy_button" onClick={() => setShowText(false)}>
        Hide Text
      </button>
      <button
        className="technolgy_button"
        onClick={() => setShowText(!showText)}
      >
        Toggle
      </button>
    </>
  );
}

export default VisibilityToggle;
