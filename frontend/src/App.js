import "./App.css";
import {
  BrowserRouter,
  Redirect,
  Route,
  Router,
  Switch,
} from "react-router-dom";
import Homepage from "./Pages/Homepage";
import ChatPage from "./Pages/ChatPage";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

function App() {
  const history = useHistory();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (!user) {
      return history.push("/");
    }
  }, []);
  return (
    <div className="App">
      <Route path="/" component={Homepage} exact />

      <Route path="/chats" component={ChatPage} />
    </div>
  );
}

export default App;
