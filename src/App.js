import Actions from "./components/Actions";
import Header from "./components/Header";
import Newsletter from "./components/Newsletter";
import Profilecard from "./components/Profilecard";
import Count from "./components/Count";
import Log from "./components/Log";
// import logo from "./logo.svg";

function App() {
  return (
    <div className="bg-slate w-screen flex flex-col items-center gap-6 px-20">
     <Header/>
     <Newsletter/>
     <Log/>
     <Actions/>
     <Profilecard/>
     <Count/>
     
    </div>
  );
}

export default App;
 