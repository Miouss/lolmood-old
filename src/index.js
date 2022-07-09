import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const header = ReactDOM.createRoot(document.getElementById("header"));
const main = ReactDOM.createRoot(document.getElementById("main"));
const footer = ReactDOM.createRoot(document.getElementById("footer"));

header.render(<Header main={main} />);
footer.render(<Footer />);
