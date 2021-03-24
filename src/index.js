import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import IssueDetail from './IssueDetail';
import IssuesPage from './IssuesPage';

const routing = (
    <div className="container">
        <h1 className="text-primary">
            GitHub Issue Browser
        </h1>
        <Router>
            {/* home issue page */}
            <Route exact path="/" component={IssuesPage} />
            {/* issue detail page */}
            <Route path="/issue/:issueNumber" component={IssueDetail} />
        </Router>
    </div>
)

ReactDOM.render(routing, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
