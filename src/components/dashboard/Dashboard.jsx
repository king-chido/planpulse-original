import "./dashboard.css";
import Carddashboard from "../card-dashboard/Carddashboard";
import Button from "../button/Button";
import { useContext } from "react";
import { AppContext } from "../../context";
import groupW from "../../assets/gw.png";

const Dashboard = () => {
  const { cardDatas } = useContext(AppContext);

  return (
    <main className="dashboard-container">
      <div className="btn-dash">
        <Button
          btn="Add New Member"
          wid={120}
          bg="#FF595E"
          hei={40}
          col="white"
          bod={1}
          font={11}
          br={20}
        />
      </div>
      <div className="dashboard-content">
        {cardDatas.map((item) => {
          return (
            <Carddashboard
              key={item.id}
              status={item.status}
              number={5}
              icon={groupW}
            />
          );
        })}
      </div>
    </main>
  );
};

export default Dashboard;
