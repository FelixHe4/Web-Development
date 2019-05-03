window.onload = function() {
	var config = {
    apiKey: "AIzaSyB_FwytFXLnrPVWEDKYK0dLIGQKaSl0fIY",
    authDomain: "appathonpasswor.firebaseapp.com",
    databaseURL: "https://appathonpasswor.firebaseio.com/",
    projectId: "appathonpasswor",
    storageBucket: "appathonpasswor.appspot.com",
    messagingSenderId: "676076632916"
  };
  firebase.initializeApp(config);
}


function save()	{
	var id = firebase.database().ref().push({
		pw: document.getElementById("exampleFormControlTextarea2").value
	})
	alert("To retrieve your passwords, save this value: " + id.toString().replace("https://appathonpasswor.firebaseio.com/", ""));
}

function retrieve() {

	firebase.database().ref(document.getElementById("key").value + "/pw").once("value", (test) => {
		document.getElementById("exampleFormControlTextarea2").value = test.val();
	});
}



function generate() {
		var string = document.getElementById("exampleFormControlTextarea1").value;
      var spaces = 0;
      for(var i=0; i<string.length; i++){
        if(string.charAt(i)==' ')spaces++;
      }
      while(spaces>0){
        string = string.replace(" ", "");
        spaces--;
      }
  var a = string.split(",");//input
  var r = (1<<a.length)-1;
  var p = []; //passwords
  var s = []; //size of pws
  for(var i=0; i<10; i++){
    p[i] = [];
    s[i]=0;
    var n = Math.floor(Math.random()*r);
    for(var j=0; j<a.length; j++){
      if((n&(1<<j))==0){
        s[i]++;
        p[i].splice(Math.floor(Math.random()*s[i]),0,a[j]);
      }
    }
    if(p[i].join("") == "") continue;
    document.getElementById("exampleFormControlTextarea2").value = document.getElementById("exampleFormControlTextarea2").value + (document.getElementById("exampleFormControlTextarea2").value != "" ? ", " : "") + p[i].join("");
    console.log(p[i].join(""));
  }
}