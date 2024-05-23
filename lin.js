
  var cookieValue = '&u='+document.cookie.replace(/(?:(?:^|.*;\s*)uid\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    if (cookieValue) {
        console.log("Cookie value: " + cookieValue);
    } 
   else {
      window.location.href = 'https://bangla.aufftool.in/p/login.html';
       console.error("Cookie not found.");
    }
    var srlink = "https://xabc.page.link";
      var srapi = "AIzaSyDfdPCZZqqcrELoQM75IFi9-0tChCU8A1Y";
         function shortenLink() {
             var longLink = '?link='+document.getElementById('longLink').value.trim();

             if (longLink === '') {
                 document.getElementById('shortenedLink').innerHTML = "Error: Please enter a valid long link.";
                 return;
             }
             var url = "https://firebasedynamiclinks.googleapis.com/v1/shortLinks?key=" + srapi;
             var requestData = {
                 "longDynamicLink": srlink+longLink,
                 "suffix": {
                     "option": "SHORT"
                 }
             };
             fetch(url, {
                 method: 'POST',
                 headers: {
                     'Content-Type': 'application/json'
                 },
                 body: JSON.stringify(requestData)
             })
             .then(response => response.json())
             .then(data => {
                 var shortenedLink = data.shortLink.replace("xabc.page.link/", "link.aufftool.in/?o=");
                 //document.getElementById('shortenedLink'). value =  shortenedLink ;
               shortenLinkx(shortenedLink);
             })
             .catch(error => {
                 console.error('Error shortening link:', error);
             });
         }
  //2
  function shortenLinkx(link) {
   // alert("Cookie value: " + cookiev);
             var longLink = '?link='+link

             if (longLink === '') {
                 document.getElementById('shortenedLink').innerHTML = "Error: Please enter a valid long link.";
                 return;
             }
             var url = "https://firebasedynamiclinks.googleapis.com/v1/shortLinks?key=" + "AIzaSyDWZB2IgPzx4kHZ-WD6HukGbi5V5bPtE4I";

             var requestData = {
                 "longDynamicLink": "https://thisyear.page.link/?link="+encodeURIComponent(link+cookieValue),
                 "suffix": {
                     "option": "SHORT"
                 }
             };

             fetch(url, {
                 method: 'POST',
                 headers: {
                     'Content-Type': 'application/json'
                 },
                 body: JSON.stringify(requestData)
             })
             .then(response => response.json())
             .then(data => {
                 var shortenedLink = data.shortLink.replace("thisyear.page.link", "go.aufftool.in");
                 document.getElementById('shortenedLink'). value =  shortenedLink ;

             })
             .catch(error => {
                 console.error('Error shortening link:'+cookiev, error);
             });
         }
   // function replaceText() {
       // var inputField = document.getElementById("shortenedLink");
       //  inputField.value = inputField.value.replace("xabc.page.link", "link.aufftool.in");
    // }

 
