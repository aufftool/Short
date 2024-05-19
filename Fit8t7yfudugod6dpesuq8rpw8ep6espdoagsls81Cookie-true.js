 //<![CDATA[
        // Function to set a cookie
        function setCookie(name, value, hours) {
            var date = new Date();
            date.setTime(date.getTime() + (hours * 60 * 60 * 1000));
            var expires = "expires=" + date.toUTCString();
            document.cookie = name + "=" + value + ";" + expires + ";path=/";
        }

        function checkYuthraCookie(path) {
            var yuthra = document.cookie.replace(/(?:(?:^|.*;\s*)yuthra\s*\=\s*([^;]*).*$)|^.*$/, "$1");
            if (!yuthra) {
                update(path);
                setCookie("yuthra", "true", 24);
            }
        }

   
        //window.onload = checkYuthraCookie;//]]>
   
  //<![CDATA[
 const usss = document.cookie.replace(/(?:(?:^|.*;\s*)user\s*\=\s*([^;]*).*$)|^.*$/, "$1");
const cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)safelock\s*\=\s*([^;]*).*$)|^.*$/, "$1");
const clinkx = document.cookie.replace(/(?:(?:^|.*;\s*)clink\s*\=\s*([^;]*).*$)|^.*$/, "$1");
if (cookieValue == "true") {
//alert("Cookie value: " + usss);
        setTimeout(function() {
               window.onload =  checkYuthraCookie("/shortlinkview/"+usss)
                window.location.href = "https://xabc.page.link/" + clinkx;
        }, 10000);

}//]]>
   
