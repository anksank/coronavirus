var previousState = null;
var checkNewCases = function() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var newStatus = JSON.parse(xhttp.responseText).statewise;
            if (previousState != null) {
                for (var i = 1; i < previousState.length; i++) {
                    if (parseInt(newStatus[i].confirmed) > parseInt(previousState[i].confirmed)) {
                        console.log("found new case in " + previousState[i].state + ": " + (parseInt(newStatus[i].confirmed) - parseInt(previousState[i].confirmed)));
                    }
                }
            }
            previousState = JSON.parse(xhttp.responseText).statewise;
        }
    };
    xhttp.open("GET", "https://api.covid19india.org/data.json", true);
    xhttp.send();
}

setInterval(checkNewCases, 60000);



// post call
var checkNewCasesPost = function() {
    var xhttp = new XMLHttpRequest();
    var authorizationBasic = window.btoa("aHKROhwx7rk7fjdLkXQJpmepg:h69mOoLRAKXhwkS7J0LLdXaZdmgMcO5ndvmGk8bKSmV8gEXVxz");
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            debugger;
            alert(request.responseText);
        }
    };
    xhttp.open("POST", "https://api.twitter.com/oauth2/token?grant_type=client_credentials", true);
    xhttp.setRequestHeader('Authorization', 'Basic ' + authorizationBasic);
    xhttp.setRequestHeader('Accept', 'application/json');
    xhttp.send();
}
