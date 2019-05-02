const m = require("mithril");
const root = document.getElementById("app");

//Components 
import StageBanner from "./components/ui/StageBanner.jsx";
import CardContainer from "./components/layout/CardContainer.jsx";

//..
import ConferenceCard from "./components/cards/ConferenceCard.jsx";

//Styles
import "./index.css";

//Mock data
import getMockData from "./store/data";
const CONFERENCES = getMockData();

//global controller
import App from "./components/layout/App.jsx";


const ConferenceView = conferences => (
    <App>
        <StageBanner
        action={() => console.log(`Logging out!`)}
        title="conferences"
        />
        <CardContainer>
            {conferences.map(conference => (
                <ConferenceCard conference={conference} />
            ))}
            </CardContainer>
    </App>
);


const CFPView = () => (
    <App>
      <StageBanner
        action={() => console.log(`Logging out!`)}
        title="Call for Papers"
      />
      <CardContainer />
    </App>
  );
  
  const FormView = () => (
    <App>
      <StageBanner
        action={() => console.log(`Logging out!`)}
        title="Add Conference"
      />
      <CardContainer />
    </App>
  );
  
  m.route(root, "/conferences", {
    "/conferences": {
      view: () => ConferenceView(CONFERENCES)
    },
    "/cfp": {
      view: () => CFPView(CONFERENCES)
    },
    "/entry": {
      view: () => FormView()
    }
  });