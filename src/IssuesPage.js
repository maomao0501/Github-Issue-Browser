import Pagination from "./Pagination";
import axios from "axios";
import React, { useState, useEffect} from "react";
import { Link } from "react-router-dom";

const IssuesPage = () => {
    //initial value, function to update
    const [issues, setIssues] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [issuesPerPage] = useState(10);

    useEffect(() => {
        const fetchIssues = async () => {
            setLoading(true);
            const res = await axios.get('https://api.github.com/repos/walmartlabs/thorax/issues');
            setIssues(res.data);
            setLoading(false);
        }
        fetchIssues();
    }, [])

    // Logic for displaying current issues
    const indexOfLastIssue = currentPage * issuesPerPage;
    const indexOfFirstIssue = indexOfLastIssue - issuesPerPage;
    const currentIssues = issues.slice(indexOfFirstIssue, indexOfLastIssue);

    return (
        <div className="container">
            {
                //loading indicator
                loading&&<div className="spinner-border" role="status"></div>
            }
            <ul className="list-group">
                {
                    currentIssues.map(issue => (
                        <li key={issue.number} className="list-group-item">
                            {/* anchor link */}
                            <Link to={`/issue/${issue.number}`} >{issue.title}</Link>
                            <br/> #{issue.number}
                            <span className="badge rounded-pill bg-success text-light">{issue.state}</span>
                            <span className="badge rounded-pill bg-light" style={{float: 'right'}}>{issue.comments}</span>
                        </li>
                    ))}
            </ul>
            <Pagination
                issuesPerPage={issuesPerPage}
                totalIssues={issues.length}
                paginate={setCurrentPage}
            />
        </div>
    )
};

export default IssuesPage;
