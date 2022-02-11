import React from "react";
import { Route } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
const HatsPage = (props) => {
  return (
    <div>
      <h1>Hats Page</h1>
    </div>
  );
};

const TopicList = () => {
  return (
    <div>
      <h1>Topic list page</h1>
    </div>
  );
};

const TopicDetailPage = (props) => {
  return (
    <div>
      <h1>Topic details page : {props.match.params.topicid}</h1>
    </div>
  );
};
function App() {
  return (
    <div>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/hats" component={HatsPage} />
      <Route exact path="/topics" component={TopicList} />
      <Route exact path="/topics/:topicid" component={TopicDetailPage} />
    </div>
  );
}

export default App;
