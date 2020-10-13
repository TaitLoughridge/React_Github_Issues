import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Issue from './Issue';

class IssueList extends Component {
    state = {
        issueData: [],
    };

        loadData = async () => {
            const response = await fetch('https://api.github.com/repos/facebook/create-react-app/issues');
            const data = await response.json();
            return data;
        }
    
    async componentDidMount() {
        const issues = await this.loadData();
        
        this.setState({
            issues,
        });
    }

    render() {
        const { issues } = this.state;
        return (
            <>
            {!!issues ? (
                <>  
                    <h1>Github Issues List</h1>
                    <Route exact path='/'>
                        <ul>
                            {issues.map((issue) => {
                                return (
                                    <li key={issue.id}> 
                                        {issue.title}
                                        <Link to={`/issue/${issue.number}`}><p>View Details</p></Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </Route>
                    <Route path={`/issue/:issue_number`}>
                        <Link to='/'>Return to List</Link>
                        <Issue issues={issues}/>
                    </Route>
                </>
            ) : (
                <p>Fetching issues...</p>
            )}
        </>
        );
    }
}
export default IssueList;