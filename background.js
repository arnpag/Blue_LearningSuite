const COLOR = '#e8f6ff'
function addCSS() {
  var css = '.navItem { background-color: ' + COLOR +
  '; } .bg-left-nav { background-color: ' + COLOR + ' }';

  browser.tabs.insertCSS({code: css});
}

browser.tabs.onUpdated.addListener((id, changeInfo, tab) => {
  browser.tabs.query({currentWindow: true, active: true})
    .then((tabs) => {
      console.log(tabs[0].url);
      url = tabs[0].url;
      if (url.includes('learningsuite.byu.edu')){
      	addCSS();
      }
  })
});