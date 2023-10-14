
console.log("### Create Histories - Google Search");

async function dl(kw) {
  var url = 'https://raw.githubusercontent.com/thanh109/AutoJavascripts/main/' + kw;
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, false);
  xhr.send();
  lines = (xhr.responseText).split('\n');
  var kwList=[]
  for(var i = 0;i < lines.length; i++){
      kwList.push(lines[i]);
  }
  return kwList;
}

// console.log(urlList);
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function open_url(url) {
  openWindow = window.open(url, "_blank");
}

async function openUrls(urlList) {
  var urls = await dl(urlList);
  for (var url of urls) {
   await open_url(url);
     await sleep(10000);
  }
 }

 async function openUrls_random(urlList) {
  var urls = await dl(urlList);
  var shuffled = urls.sort(function(){ return 0.5 - Math.random() });
  var urls = shuffled.slice(0,10);
  for (var url of urls) {
   await open_url(url);
     await sleep(10000);
  }
 }

async function google_search(kw) {
  openWindow = window.open("https://www.google.com/search?q=" + kw, "_blank");

}
async function GoogleSearch(kw) {
  var kwList = await dl(kw);
  // random
  var shuffled = kwList.sort(function(){ return 0.5 - Math.random() });
  var kws = shuffled.slice(0,10);
  for (var kw of kws) {
    await google_search(kw);
    await sleep(10000);
  }
}
