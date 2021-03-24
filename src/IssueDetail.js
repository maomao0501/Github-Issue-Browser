import React, { useState, useEffect} from 'react';
import axios from "axios";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import ReactMarkdown from 'react-markdown';

const IssueDetail = () => {
    const { issueNumber } = useParams();
    const [issue, setIssue] = useState([]);
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchIssueAndComments = async () => {
            setLoading(true);
            //aggregate results from multiple asynchronous operations
            const [issueRes, commentsRes] = await Promise.all([
                axios.get(`https://api.github.com/repos/walmartlabs/thorax/issues/${issueNumber}`),
                axios.get(`https://api.github.com/repos/walmartlabs/thorax/issues/${issueNumber}/comments`)
            ])
            setIssue(issueRes.data);
            setComments(commentsRes.data);
            setLoading(false);
        }
        fetchIssueAndComments();
    }, [issueNumber]) // Only re-run the effect if issueNumber changes

    return (
        <div className="container mt-5">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/">Issues</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">issue {issue.number}</li>
                </ol>
            </nav>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-header">
                            <h5 className="card-title">{issue.title} #{issue.number}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">
                                <span className="badge rounded-pill bg-success text-light">{issue.state}</span>
                                <span className="card-text">
                                {
                                    issue.user &&
                                    <a href={issue.user.html_url} >
                                        <img style={{width: "30px", margin: "0 5px"}} src={issue.user.avatar_url} alt="" className="rounded-circle"/>
                                        {issue.user.login}
                                    </a>
                                }
                                </span>
                                <span> created at: {issue.created_at}</span></h6>
                        </div>
                        <div className="card-body">
                            {
                                loading && <div className="spinner-border" role="status"></div>
                            }
                            <ReactMarkdown escapeHtml={false} className="card-text">{issue.body}</ReactMarkdown>
                        </div>

                    </div>
                    {
                        comments.map(comment =>
                            <div key={comment.id} className="card" style={{margin: "20px 0"}}>
                                <div className="card-header">
                                    <h6 className="text-muted">
                                <span className="card-text">
                                    <a href={comment.user.html_url} >
                                        <img style={{width: "30px", margin: "0 5px"}} src={comment.user.avatar_url} alt="" className="rounded-circle"/>
                                        {comment.user.login}
                                    </a>
                                </span>
                                        <span> {comment.created_at}</span></h6>
                                </div>
                                <div className="card-body">
                                    <ReactMarkdown escapeHtml={false} className="card-text">{comment.body}</ReactMarkdown>
                                </div>
                            </div>
                        )}
                </div>
                {/*<div className="col">*/}
                {/*    <div className="card">*/}
                {/*    <div className="card-header">*/}
                {/*            <h5 className="card-title">Labels</h5>*/}
                {/*        </div>*/}
                {/*        <div className="card-body">*/}
                {/*            {*/}
                {/*                issue.labels&&*/}
                {/*                issue.labels.map(label => */}
                {/*                    <span key={label.name} className="badge rounded-pill text-light" style={{backgroundColor: "#"+label.color, marginRight: "5px"}}>{label.name}</span>*/}
                {/*                )*/}
                {/*            }*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </div>
    )
}

export default IssueDetail;
