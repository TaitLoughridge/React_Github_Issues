import React, { Component } from 'react';
import Issue from './Issue'

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
        const issueData = await this.loadData();
        
        this.setState({
            issueData: issueData,
        });
    }

    render() {
        const { issueData } = this.state;
        return (
            <>
                {issueData.map((issue, index) => (<Issue issue={issue} key={issue.id}/>))}
            </>
        );
    }
}
export default IssueList;