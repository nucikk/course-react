import { useState } from "react"


function DynamcTextField() {
    const [highlightColor, setHighlightColor] = useState("3px solid red")
// კომპონენტი განსაზღვრავს inputის borderის სტილს onKeyPress გააქტიურებულია ნებისმიერი ღილაკის დაჭერით
    function hendleKeyEvents() {
        console.log("you pressed a key")
        setHighlightColor("3px solid red")
    }
    return (
        <>
         <input type="text" onKeyPress={(e) => hendleKeyEvents(e)} style={{border: highlightColor}} />
        </>
    )
}

export default DynamcTextField