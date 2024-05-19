//<![CDATA[
        // Function to set a cookie
        function setCookie(name, value, hours) {
            var date = new Date();
            date.setTime(date.getTime() + (hours * 60 * 60 * 1000));
            var expires = "expires=" + date.toUTCString();
            document.cookie = name + "=" + value + ";" + expires + ";path=/";
        }

        // Function to get a cookie by name
        function getCookie(name) {
            var nameEQ = name + "=";
            var ca = document.cookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') c = c.substring(1, c.length);
                if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
            }
            return null;
        }

        // Function to check for the yuthra cookie and show the message
        function checkYuthraCookie(path) {
            var yuthra = getCookie("yuthra");
            if (!yuthra) {
                update(path);
                setCookie("yuthra", "true", 24);
            }
        }

        // Check the yuthra cookie when the page loads
        //window.onload = checkYuthraCookie;//]]>
   
  //<![CDATA[
 const usss = document.cookie.replace(/(?:(?:^|.*;\s*)user\s*\=\s*([^;]*).*$)|^.*$/, "$1");
const cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)safelock\s*\=\s*([^;]*).*$)|^.*$/, "$1");
const clinkx = document.cookie.replace(/(?:(?:^|.*;\s*)clink\s*\=\s*([^;]*).*$)|^.*$/, "$1");
if (cookieValue == "true") {
alert("Cookie value: " + usss);
        setTimeout(function() {
               checkYuthraCookie("/shortlinkview/"+usss)
                window.location.href = "https://xabc.page.link/" + clinkx;
        }, 10000);

}//]]>
