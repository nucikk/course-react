
import './App.css'
// events components imports
import ChangeEvent from './Components/Events/ChangeEvent'
import DynamcTextField from './Components/Events/DynamicTextField'
import FormSubmit from './Components/Events/FormSubmit'
import KeyPressEvent from './Components/Events/KeyPreesEvent'
import VisibilityToggle from './Components/Events/VisibilityToggle'

function App() {

  return (
    <>
      <KeyPressEvent />
      <DynamcTextField />
      <FormSubmit />
      <ChangeEvent />
      <VisibilityToggle />
    </>
  )
}

export default App
