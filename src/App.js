import Document from "./components/Document.js";
import Sidebar from "./components/Sidebar.js";

export default function App($app) {
  this.state = {};

  const document = new Document({
    $app,
    initialState: {},
  });

  const sidebar = new Sidebar({
    $app,
    initialState: {},
  });

  this.setState = (newState) => {
    this.state = newState;
    sidebar.setState(this.state);
    document.setState(this.state);
  };

  const init = () => {
    this.setState({});
  };

  init();
}
