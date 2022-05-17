import ReactDOM from "react-dom/client";
import Homepage from "./components/Homepage";
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const header = ReactDOM.createRoot(document.getElementById("header"));
const main = ReactDOM.createRoot(document.getElementById("main"));
const footer = ReactDOM.createRoot(document.getElementById("footer"));

main.render(<Homepage header={header} main={main}/>);
footer.render(<Footer />);

