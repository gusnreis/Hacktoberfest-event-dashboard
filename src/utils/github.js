const Octokit = require("@octokit/rest");

const groupItems = (items) =>
  items.reduce((acc, tally) => {
    tally.pull_request ?
      acc['pull_requests'].push(tally) :
      acc['issues'].push(tally)
    return acc;
  }, {
    pull_requests: [],
    issues: []
  });

export const searchIssuesAndPr = () => new Octokit()
  .search.issuesAndPullRequests({
    q: 'label:hacktoberfestDublin'
  })
  .then(res => groupItems(res.data.items))

// items
// state: open, closed
// assignees: []
// labels:[] 
// html_url
// title
// pull_request: []
