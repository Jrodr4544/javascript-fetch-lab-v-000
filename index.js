var issuesURL = '';

function getIssues() {
<<<<<<< HEAD
	const token = getToken();

	fetch(issuesURL, {
	 method: 'get',
	 headers: {
	 	Authorization: `token ${token}`
	 }
	})
	.then(json => { 
		showIssues(json)
	})
}

function showIssues(json) {
	const result = `<ul>${json.map(
	      issue =>
	      "<li>" +
	      "<strong>" +
	      "<h3>Issue Title: "+ issue.title + "</h3>" +
	      "<p>Issue Body: "+ issue.body + "</p>" +
  	      "<a id='forked-repo' href='"+ issue.html_url +"'>"+ issue.html_url +"</a>" +
	      "</strong>" +
	      "</li>"
	).join("")}</ul>`;

	document.getElementById('issues').innerHTML = result;
}

function createIssue() {
	const token = getToken();
	const issueTitle = document.getElementById('title').value;
	const issueBody = document.getElementById('body').value;
   	const data = {"title": issueTitle, "body": issueBody};
	const repo = 'jrodr4544/javascript-fetch-lab';//document.getElementById("forked-repo").href.split("https://github.com/").pop();
	issuesURL = 'https://api.github.com/repos/'+repo+'/issues';

	fetch(issuesURL ,{
	  method: 'post',
	  body: JSON.stringify(data),
	  headers: {
		Authorization: `token ${token}`
	  }
	})
	  .then(function(){
		  getIssues();
	  })

}

function showResults(json) {
	const forkedResult = "<ul>" +
        "<li><strong>" +
	"<a id='forked-repo' href='"+json.html_url+"'>"+json.html_url+"</a>" +
	"</strong>" +
	"</ul>";
	
	document.getElementById('results').innerHTML = forkedResult;
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab';
  const token = getToken();
   //use fetch to fork it!
  fetch('https://api.github.com/repos/'+repo+'/forks', {
   method: 'post',
   headers: {
    Authorization: `token ${token}`
   }
  })
    .then(json => {
	    console.log(json); 
	    showResults(json);
     }
    )
=======
          const token = getToken();
          console.log(this)
          fetch(issuesURL, {
            method: 'get',
            headers: {
              Authorization: `token ${token}`
                }
          }).then(res => res.json())
          .then(json => {
            showIssues(json)
          })
}

function showIssues(json) {
  const result = `<ul>${json.map(
  issue =>
  "<li>" +"<strong>" +
  "<h3>Issue Title: "+ issue.title + "</h3>" +
  "<p>Issue Body: "+ issue.body + 
  "</p>" +
  "<a id='forked-repo' href='"+ issue.html_url +"'>"+ issue.html_url +  "</a>" +
  "</strong>" +
  "</li>"
  ).join("")}</ul>`;

  document.getElementById('issues').innerHTML = result;
}

function createIssue() {
  const token = getToken();
  const issueTitle = document.getElementById('title').value;
  const issueBody = document.getElementById('body').value;
  const data = {"title": issueTitle, "body": issueBody};
  const repo = 'jrodr4544/javascript-fetch-lab';//document.getElementById("forked-repo").href.split("https://github.com/").pop();
  issuesURL = 'https://api.github.com/repos/'+repo+'/issues';
  fetch(issuesURL ,{
    method: 'post',
    body: JSON.stringify(data),
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => res.json())
  .then(function(){
    getIssues();
  })
}

function showResults(json) {
  const forkedResult = "<ul>" +
  "<li><strong>" +
  "<a id='forked-repo' href='"+json.html_url+"'>"+json.html_url+"</a>" +
  "</strong>" +
  "</ul>";
  
  document.getElementById('results').innerHTML = forkedResult;
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
    const token = getToken();
    //use fetch to fork it!
    fetch('https://api.github.com/repos/'+repo+'/forks', {
      method: 'post',
      headers: {
        Authorization: `token ${token}`
      }
    })
    .then(res => res.json())
    .then(json => {
      console.log(json);
      showResults(json);
      showForkedRepo(json);
    })
>>>>>>> 2ad45e549f0cf72469446daf9009d83500182a36
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
<<<<<<< HEAD
}
=======
}
>>>>>>> 2ad45e549f0cf72469446daf9009d83500182a36
