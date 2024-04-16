import logo from "./logo.svg";
import "./App.css";
import pic from "./images/pic.png";
import meta from "./images/meta.png";
import x from "./images/x.jpg";
import link from "./images/linked.jpg";
import lock from "./images/lock.jpg";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <div className="card">
          <div className="container">
            <div className="left">
              <img src={pic} className="man" alt="pic" />
              <div className="iconDiv">
                <img src={meta} className="icons" alt="pic" />
                <img src={link} className="icon2" alt="pic" />
                <img src={x} className="icon3" alt="pic" />
              </div>
            </div>
            <div className="right">
              <span className="name">Ashok Kumar</span>
              <span className="desig">Frontend Developer</span>
              <span className="intro">
                Passionate frontend developer with expertise in HTML,
                CSS,JavaScript, and React.
              </span>
              <div className="follow">
                <div className="block1">
                  <span className="content">2423</span>
                  <span className="content">Followers</span>
                </div>
                <div className="block1">
                  <span className="content">324</span>
                  <span className="content">Following</span>
                </div>
                <div className="block3">
                  <span className="content">12</span>
                  <span className="content">Projects</span>
                </div>
              </div>
              <div className="btnDiv">
                <button className="followBtn"> Follow</button>
                <button class="lockBtn">
                  <img src={lock} className="lock" /> Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
