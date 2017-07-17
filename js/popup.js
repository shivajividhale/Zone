$(document).ready(function() {
  $('#add-zone').click(function() {
  	var term = $('#zone-name').val();
    console.log(term)
    chrome.tabs.query({'active': true, 'currentWindow': true}, function (tabs) {
      var url = tabs[0].url;
      console.log(url);
    });
  });
});