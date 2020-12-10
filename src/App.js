function App() {
  return (
    <div className="container">
      <div className="header">
        <img className="img logo" src="logo.png" alt="logo" />
      </div>
      <div className="main">
        <div className="hands">
          <img class="img" src="1.png" alt="img" />
        </div>
        <div className="content">
          <div>
            <h4>
              {" "}
              C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
              the 4th time.
            </h4>
            <ul>
              <li>
                C.R.I.'s energy efficient products are well recognized by
                various Government Institutions, as trustworthy products for
                various projects across the globe to save energy.
              </li>
              <li>
                C.R.I. is the highest contributor in the country for the
                projects of EESL (Energy Efficiency Services Limited) to replace
                the old inefficient pumps with 5 Star rated energy efficient
                smart pumps with IoT enabled control panel.
              </li>
            </ul>
          </div>
          <div>
            <img src="2.png" alt="img" className="img 2png" />
          </div>
          <p>
            Government of India has awarded the "National Energy Conservation
            Award 2018". Mr. G. Selvaraj, Joint Managing Director of C.R.I.
            Group received the award from Smt. Sumitra Mahajan, Speaker of Lok
            Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.
          </p>
        </div>
      </div>
      <h5>
        INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING
        IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE
        NATION.
      </h5>
      <img src="3.png" className="pumps" alt="pumps" />
      <h6>
        Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
        Solar Systems - Motors{" "}
      </h6>
      <div className="line"></div>
      <h4 style={{ fontWeight: "700" }}>
        C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
      </h4>
      <h4 style={{ textAlign: "center", fontWeight: "500" }}>
        CHEMICALS <span className="break">|</span> PROCESS POWER WATER{" "}
        <span className="break">|</span> WASTE WATER OILS{" "}
        <span className="break">|</span> GAS PHARMA SUGARS{" "}
        <span className="break">|</span> DISTILLERIES PAPER{" "}
        <span className="break">|</span> PULP MARINE{" "}
        <span className="break">|</span>
        DEFENCE METAL <span className="break">|</span> MINING FOOD{" "}
        <span className="break">|</span> BEVERAGE PETROCHEMICAL{" "}
        <span className="break">|</span> REFINERIES SOLAR BUILDING HVAC FIRE
        FIGHTING AGRICULTURE <span className="break">|</span> RESIDENTIAL
      </h4>
      <div className="footer">
        <div>
          <i className="fas fa-phone-square-alt" />
          <h6>toll free 1800 200 1234</h6>
        </div>
        <div>
          <i className="fab fa-facebook" />
          <a href="#">
            <h6>www.facebook.com/cripumps</h6>
          </a>
        </div>
        <div>
          <i className="fas fa-globe" />
          <a href="#">
            <h6>www.crigroups.com</h6>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
