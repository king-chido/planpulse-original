
import "./landingpage.css";
import MAP from "../../assets/sportgirls.jpeg"
import logo from "../../assets/gymlogo.png"
import hero from "../../assets/database.svg"
import fitness from "../../assets/fitness.png"
const Landingpage = () => {
  return <div
    style={{ overflow: "hidden" }}
  >
    <div className="header">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="headertext">
        <p className="home">HOME</p>
        <p>ABOUT</p>
        <p>FEATURES</p>
        <p>PRICING</p>
        <p>SERVICE</p>
      </div>
      <div className="started">
        <button className="get">GET STARTED</button>
      </div>
    </div>
    <div className="hero">
      <div className="herotext">
        <div className="maintext">
          <h1 className="workout">Workout with <br /><span className="plan">Plan</span></h1>
        </div>
        <div className="subtext">
          <p className="integrate">We encourage you to integrate the <br /> plan method in your
            organization,<br /> as it is a good means to ensure consistency.</p>
        </div>
        <div className="buttonbox">
          <button className="starting">GET STARTED</button>
          <button className="upgrading">UPGRADE</button>
        </div>
      </div>
      <div className="heroimage">
        <div className="heropic">
          <img src={hero} alt="img" style={{ height: "370px", width: "500px" }} />
        </div>
       

      </div>
    </div>
    <div className="features">
      <div className="unique">
        <h1>Unique Features</h1>
      </div>  
      <div className="featuring">
        <div className="firstcard">
          <div className="top">
            <div className="round">
              <div className="set">🕒</div>
            </div>
          </div>
          <div className="bottom">
            <h3 className="featuretext">Plan Tracker</h3>
            <div
              className="textHolder"
            >            <p className="plantrack"> This is more like a watch that
              will be actively running when
              a client has an active plan. </p>
              <p
                className="plantrack"
              >
                Whenever a client subscribe
                to a particular plan, the plan tracker
                begins to count-down until the plan
                expires.</p> </div>
          </div>
        </div>
        <div className="secondcard">
          <div className="top">
            <div className="round">
            <div className="set">📉</div>
            </div>
          </div>
          <div className="bottom">
            <h3 className="featuretext">Dynamic Database</h3>
            <div
              className="textHolder"
            >            <p className="plantrack">This is a database that enable
              real time modification of the
              database. </p>
              <p
                className="pulsetrack"
              >
                It simple means you can
                add data, <br />query data and delete
                data. This feature  <br />makes it more
                flexible in handling database.</p> </div>
          </div>
        </div>
        <div className="thirdcard">
          <div className="top">
            <div className="round">
            <div className="set">📲</div>
            </div>
          </div>
          <div className="bottom">
            <h3 className="featuretext">Upgrade System</h3>
            <div className="textHolder">
              <p className="plantrack">This is a pay system that gives
                our users unlimited access to
                this product </p>
              <p
                className="pulsetrack"
              >
                This feature gives our user a better efficiency of our application, After making payment to upgrade.</p> </div>
          </div>
        </div>
      </div>
    </div>
    <div className="clients">
      <div className="photo">
        <img src={fitness} alt="fitnesspic" style={{ width: "350px" }} />
      </div>
      <div className="writeup">
        <div className="up">
          <h1 className="online">Keep  Track Of  Your
            Clients  Online</h1>
        </div>
        <div className="center">
          <p>We are your reliable manager that is always <br />
            up to date to help you safe keep and produce <br />
            your clients information when necessary. We <br />
            have provided all that is needed for you to <br />
            find this product very friendly.</p>
        </div>
        <div className="below">
        <button className="starting">GET STARTED</button>
        </div>
      </div>
    </div>
    <div className="offer">
      <div className="ouroffer"> <h1> Our Offer</h1> <br /><p className="choose">Choose any of our offer to enjoy Plan Pulse</p></div>
      <div className="version">
        <div className="versiona">
          <div className="freeversion">
            <div className="topversion">
              <h3 className="Freeversion">Free version</h3><span className="naira">₦0</span>
            </div>
            <div className="bottomversion">
              <div className="group">
                <div className="dot"></div>
                <p>limited Database Storage</p>
              </div>
              <div className="group">
                <div className="dot"></div>
                <p>No access to search CTA</p>
              </div>
              <div className="group">
                <div className="dot"></div>
                <p>7 Days Trial (new client)</p>
              </div>
            </div>
          </div>
        </div>
        <div className="versionb">
          <div className="payedversion">
            <div className="topversion">
              <h3 className="Freeversion">Payed Version</h3><span className="naira">₦50,000</span>
            </div>
            <div className="bottomversion">
              <div className="group">
                <div className="dot"></div>
                <p>Unlimited Database Storage</p>
              </div>
              <div className="group">
                <div className="dot"></div>
                <p>Unlimited  access to  CTA</p>
              </div>
              <div className="accessbtn">
                <button className="paying">PAY</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="service">
      <div className="topservice"><h1> Our Service</h1> <br /><p className="choose">We offer more than just the product</p></div>
      <div className="lowservice">
        <div className="carding">
          <div className="leftcard">
            <div className="top">
              <div className="round">
              <div className="set">📃</div>
              </div>
            </div>
            <div className="bottom">
              <h3 className="featuretext">Partnership</h3>
              <div
                className="textHolder"
              >            <p className="plantrack"> We partner with various gym
                equipment vendors to
                advertise their product. </p>
              </div>
            </div>
          </div>
          <div className="middlecard">
            <div className="top">
              <div className="round">
              <div className="set">⏱</div>
              </div>
            </div>
            <div className="bottom">
              <h3 className="featuretext">Training</h3>
              <div className="textHolder"
              >            <p className="plantrack"> We provide training session
                for gym staff management
                to maximize the utilization
                of the platform </p>
              </div>
            </div>
          </div>
          <div className="rightcard">
            <div className="top">
              <div className="round">
              <div className="set">👨‍💼</div>
              </div>
            </div>
            <div className="bottom">
              <h3 className="featuretext">Refferal Programn</h3>
              <div className="textHolder"
              >            <p className="plantrack"> We create referral programs
                where gym agencies can
                discount </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="footer">
      <div className="all">

        <div className="firstfooter">
          <div className="textwriteup">
            <p className="textinner">
              COMPANY : <span style={{ color : "black" }}> PLAN PULSE</span>
            </p>
            <p className="textinner">
              EMAIL : <span style={{ color : "black" }}> Planpulseapp@gmail.com</span>
            </p>
            <p className="textinner">
              CONTACT : <span style={{ color : "black" }}> +234 813 4565 434</span>
            </p>
          </div>
        </div>
        <div className="secondfooter">
<img className="mapping" src={MAP}/>
        </div>
      </div>
     
    </div>
   
      <p className="ending">
        @2024 Group-fitness All Copyrights reserved
      </p>
    
  </div>;
};

export default Landingpage;
