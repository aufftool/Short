
  function update(path) {
  var currentDate = new Date();
  var year = currentDate.getFullYear();
  var month = ("0" + (currentDate.getMonth() + 1)).slice(-2);
  var day = ("0" + currentDate.getDate()).slice(-2);
  var dateString = year + "-" + month + "-" + day;

  var dailyRef = firebase.database().ref(path+'/viewCounts/daily/' + dateString);
  dailyRef.transaction(function(data) {
    if (data === null) {
      return { count: 1, date: year + "-" + month + "-" + day};
    } else {
      data.count++;
      return data;
    }
  });

  var monthlyRef = firebase.database().ref(path+'/viewCounts/monthly/' + year + "-" + month);
  monthlyRef.transaction(function(data) {
    if (data === null) {
      return { count: 1, date: year + "-" + month };
    } else {
      data.count++;
      return data;
    }
  });

  var allTimeRef = firebase.database().ref(path+'/viewCounts/allTime');
  allTimeRef.transaction(function(data) {
    if (data === null) {
      return { count: 1, date: "All-time default title" };
    } else {
      data.count++;
      return data;
    }
  });

};
