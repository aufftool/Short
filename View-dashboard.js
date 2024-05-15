   const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = ("0" + (currentDate.getMonth() + 1)).slice(-2);
    const day = ("0" + currentDate.getDate()).slice(-2);
    const dateString = year + "-" + month + "-" + day;
    const thismonth = year + "-" + month;
    
   function displayItems(id, write) {
  	var firebaseRef = firebase.database().ref(id);
       firebaseRef.on('value', function(snapshot) {
         var itemsList = document.getElementById(write);
         itemsList.innerHTML = ''; // Clear existing items
         snapshot.forEach(function(childSnapshot) {
           var item = childSnapshot.val();
           var listItem = document.createElement('div');
           listItem.innerHTML = `
           
           <div class="view-count-item">
           	<span class="view-count-title">${item.date} Views:</span>
           	<span id="day" class="view-count-number">${item.count||0}</span>
           		<span id="day" class="view-count-number">= $ ${item.count*0.007}</span>
           </div>
           
           `;
           itemsList.appendChild(listItem);
         });
       });
     }
   function custom_path(path,write,text){
	var allTimeRef = firebase.database().ref(path);
	allTimeRef.on('value', function(snapshot) {
		var data = snapshot.val();
		if (data) {
			document.getElementById(write).innerHTML = `
			           <div class="view-count-item">
			           	<span class="view-count-title">${text||'Total'} Views:</span>
			           	<span id="day" class="view-count-number">${data.count||0}</span>
			           	<span id="day" class="view-count-number">= $ ${data.count*0.007}</span>
			           </div>
			`;
		}
	});
}
