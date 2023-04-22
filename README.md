# jira-issue-to-branch-name
Simple Chrome bookmarklet to generate feature branch name from Jira issue

Are you tired of remembering and rewriting the project code, task name and task number when creating a feature branch in you git tools?

This simple bookmarklet for Chrome will create a feature branch name for you and copy it to clipboard.

## Installation

1. Right Click on your bookmarks bar in Chrome
2. Select "Add Page..."
3. Fill in the fields:  
   **Name:**  
   ```
   Task2Branch
   ```  
   **URL:**  
   ```
   javascript:var%20e%3Ddocument.querySelector('%5Bdata-testid%3D%22issue.views.issue-base.foundation.breadcrumbs.current-issue.item%22%5D')%2Ct%3Ddocument.querySelector('%5Bdata-testid%3D%22issue.views.issue-base.foundation.summary.heading%22%5D').innerText%2Ci%3Ddocument.querySelector('%5Bdata-testid%3D%22issue-field-summary.ui.issue-field-summary-inline-edit--container%22%5D')%2Cn%3De.innerText%2B%22%20%22%2Bt.toLowerCase()%3Bif(n%3Dn.replace(%2F%5Cs%2B%2Fg%2C%22-%22)%2Cn%3Dn.replace(%2F%5B%5EA-Z0-9%5C-%5D%2B%2Fgi%2C%22%22)%2Cn%3D%22feature%2F%22%2Bn%2C!document.getElementById(%22task-branch-name%22))%7Bvar%20e%240%3Ddocument.createElement(%22div%22)%3Be%240.innerText%3Dn%3Be%240.setAttribute(%22id%22%2C%22task-branch-name%22)%3Be%240.style.paddingLeft%3D%2210px%22%3Be%240.style.marginBottom%3D%2210px%22%3Be%240.style.color%3D%22%236B778C%22%3Bi.appendChild(e%240)%7De.focus()%3Bnavigator.clipboard.writeText(n).then(function()%7Balert(%22Copied%20the%20feature%20branch%20name%3A%20%22%2Bn)%7D)%3Bvoid+0
   ```
4. Click "Save". Done!

## How to use?

When visiting a JIRA issue page, just click this bookmark. It will generate the feature branch name and copy it to the clipboard.

