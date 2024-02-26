import "./userdashboard.css";
import Menu from "../../components/menu/Menu";
import Header from "../../components/header/Header";
import Board from "../../components/board/Board";
import Headermedia from "../../components/media-header/Headermedia";
import Bodymedia from "../../components/media-body/Bodymedia";
import Categorymedia from "../../components/media-category/Categorymedia";

const Userdashboard = () => {
  return (
    <main className="user-dashboard-container">
      <section className="left-section-userdashboard-container">
        <Menu />
      </section>
      <section className="right-section-userdashboard-container">
        <div className="right-section-userdashboard-container-top">
          <article className="right-section-userdashboard-container-top-in">
            <Header />
          </article>
        </div>
        <div className="right-section-userdashboard-container-down">
          <Board />
        </div>
      </section>
      <article className="media-query">
        <section className="media-query-head">
          <Headermedia />
        </section>
        <section className="media-query-body">
          <Bodymedia />
        </section>
        <section className="media-query-category">
          <Categorymedia />
        </section>
      </article>
    </main>
  );
};

export default Userdashboard;
