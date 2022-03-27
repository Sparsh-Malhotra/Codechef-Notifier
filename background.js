chrome.webRequest.onBeforeSendHeaders.addListener(
  function (data) {
    if (data.url.includes('https://www.codechef.com/error_status_table/')) {
      let urlstr = data.url;
      let subId = urlstr.slice(-9, -1);
      chrome.tabs.query(
        { url: 'https://www.codechef.com/submit/*' },
        function (tabs) {
          //   console.log(tabs);
          chrome.tabs.sendMessage(tabs[0].id, { greeting: 'Hi' }, (res) => {
            // console.log(res.status);
            // console.log(res.Problemcode);
            chrome.notifications.create('', {
              iconUrl: 'Google_Chrome_Logo.jpg',
              title: res.Problemcode,
              message: res.status,
              type: 'basic',
            });
          });
        }
      );
    }
  },
  {
    //Filter
    urls: ['<all_urls>'], //For testing purposes
  },
  ['requestHeaders']
);
