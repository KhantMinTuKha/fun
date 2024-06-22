import { useState } from "react";
import "./App.css";
import WelcomePage from "./components/welcomePage";
import MainPage from "./components/mainPage";

function App() {
  const [comfirm, isConfirm] = useState<boolean>(false);
  const realPassword = "May";
  const [password, isPassword] = useState<string>("");

  const clickFunction = (event: any) => {
    const comfirmPassword = event.currentTarget.value;

    isPassword(comfirmPassword);
  };

  const handleClick = () => {
    if (realPassword === password) {
      isConfirm(true);
    }
  };
  return (
    <div>
      {comfirm === false && (
        <WelcomePage handleClick={handleClick} clickFunction={clickFunction} />
      )}
      {comfirm === true && <MainPage />}
    </div>
  );
}

export default App;
