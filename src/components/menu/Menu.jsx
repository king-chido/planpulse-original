import "./menu.css";
import Category from "../category/Category";
import LightandDark from "../ligtdark/LightandDark";
import Logout from "../logout/Logout";
import logout from "../../assets/logout.png";
import { useContext } from "react";
import { data } from "../../localdata";
import userColor from "../../assets/user-color.png";
import { AppContext } from "../../context";

const Menu = () => {
  const { datas, setDatas, setTitle } = useContext(AppContext);

  const handleChange = (num) => {
    const newData = data.map((item) => {
      if (item.id === num) {
        setTitle(item.title);
        return { ...item, clicked: true };
      } else {
        return { ...item, clicked: false };
      }
    });
    setDatas(newData);
  };

  return (
    <main className="menu-container">
      <section className="menu-company-logo">
        <img src={userColor} alt="logo" className="menu-company-logo-img" />
      </section>
      <section className="menu-category">
        {datas.map((item) => {
          return (
            <div
              className="menu-category-box"
              key={item.id}
              onClick={() => handleChange(item.id)}
            >
              <Category
                icon={item.img}
                text={item.title}
                id={item.id}
                col={item.clicked}
              />
            </div>
          );
        })}
      </section>
      <section className="menu-light-dark">
        <LightandDark />
      </section>
      <section className="menu-logout">
        <Logout text="Logout" logout={logout} />
      </section>
    </main>
  );
};

export default Menu;
