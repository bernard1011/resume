import HeaderSection from "./components/HeaderSection"
import Technologies from "./components/Technologies"
import MyProj from "./components/MyProj"
function App() {

  return (
    <>
        <div className="relative flex flex-col gap-12">

        <HeaderSection/>
        <Technologies/>
        <MyProj />
        </div>
    </>
  )
}

export default App
