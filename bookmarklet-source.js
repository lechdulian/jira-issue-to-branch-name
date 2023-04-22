const issueEl        = document.querySelector('[data-testid="issue.views.issue-base.foundation.breadcrumbs.current-issue.item"]')
const issueTitle     = document.querySelector('[data-testid="issue.views.issue-base.foundation.summary.heading"]').innerText
const titleContainer = document.querySelector('[data-testid="issue-field-summary.ui.issue-field-summary-inline-edit--container"]')
const issueId        = issueEl.innerText

// format the branch name - lowercase and no special chars
let branchName = issueId + ' ' + issueTitle.toLowerCase()
branchName = branchName.replace(/\s+/g, '-') // whitespace to dash
branchName = branchName.replace(/[^A-Z0-9\-]+/gi, '') // delete any other special char
branchName = 'feature/' + branchName

// append the feature name to UI
if ( ! document.getElementById('task-branch-name') ) {
    const branchEl   = document.createElement('div');
    branchEl.innerText = branchName
    branchEl.setAttribute('id','task-branch-name')
    branchEl.style.paddingLeft  = '10px'
    branchEl.style.marginBottom = '10px'
    branchEl.style.color        = '#6B778C'
    titleContainer.appendChild(branchEl);
}
issueEl.focus() // we have to focus on document to allow clipboard API in bookmarklet context

// copy to clipboard and display alert
navigator.clipboard.writeText(branchName).then( function() {
  alert("Copied the feature branch name: " + branchName)
})