const m = require("mithril");

import MainStage from "./MainStage.jsx";
import NavBar from "./NavBar.jsx";

const App = {
    view: ({ children }) => (
        <div class="App">
        <MainStage>{children}</MainStage>
        <NavBar />
        </div>
    ) 
};

export default App;