import "./board.css";
import Dashboard from "../dashboard/Dashboard";
import Allmember from "../allmember/Allmember";
import Plancategory from "../plancategory/Plancategory";
import Account from "../account/Account";
import { AppContext } from "../../context";
import { useContext } from "react";

const Board = () => {
  const { title } = useContext(AppContext);
  return (
    <main className="board-container">
      {title === "Dashboard" ? (
        <Dashboard />
      ) : title === "All Member" ? (
        <Allmember />
      ) : title === "Plan Category" ? (
        <Plancategory />
      ) : title === "Account" ? (
        <Account />
      ) : (
        <Dashboard />
      )}
    </main>
  );
};

export default Board;
