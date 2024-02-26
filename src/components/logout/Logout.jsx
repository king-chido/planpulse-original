/* eslint-disable react/prop-types */
import "./logout.css";

const Logout = (props) => {
  return (
    <main className="logout-container">
      <div className="logout-div">
        <img src={props.logout} alt="logout" className="logout-img" />
      </div>
      <div className="logout-text">{props.text}</div>
    </main>
  );
};

export default Logout;
