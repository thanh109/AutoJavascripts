
console.log("### Create Histories - Google Search");

var url = 'https://raw.githubusercontent.com/thanh109/AutoJavascripts/main/ads.txt';
var xhr = new XMLHttpRequest();
xhr.open('GET', url, false);
xhr.send();
lines = (xhr.responseText).split('\n');
var urlList=[]
for(var i = 0;i < lines.length; i++){
  urlList.push(lines[i]);
}
// console.log(urlList);
async function GoogleSearch(kw) {
  openWindow = window.open("https://www.google.com/search?q=" + kw, "_blank");

}
async function CreateHistories() {
  var shuffled = urlList.sort(function(){ return 0.5 - Math.random() });
  var urls = shuffled.slice(0,10);
  for (var url of urls) {
    await openGooGoogleSearchgle(url);
    await sleep(10000);
  }   
}
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
CreateHistories();
