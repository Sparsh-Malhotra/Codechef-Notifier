chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  let pcode = document.querySelectorAll('.value>a')[1].href.slice(34);
  let status = document.querySelectorAll('.value')[2].textContent;
  //   if (request.greeting === "hello")
  sendResponse({ Problemcode: pcode, status: status });
});
