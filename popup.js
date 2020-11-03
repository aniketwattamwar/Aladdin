 
// var links = [];

//  function link() {
//   l = document.getElementById('addLinks').value;
//   links.push(l);  
//   console.log(l);
//   console.log(links);
//   return false;
// }

var fruits, text, fLen, i;
var message;
var links = [];
var store = [];
let show = document.getElementById('show');
let add = document.getElementById('add');
let open = document.getElementById('open');
let save = document.getElementById('save');

open.onclick = () => {
	// for(let i = 0;i<items.length;i++){
	// 	// console.log(items.length)
		
	// 	var win = window.open(items[i],'_blank');
	// 	//openInNewTab(items[i]);
	// }

	// for(let i =0;i<items.data.length;i++){
 //      	  // window.open(store[i]);
 //      	  chrome.tabs.create({"active":false, url: store[i]}); 
 //      	 // console.log(items.data[i] + "showing items.data " );
 //       }


	chrome.storage.sync.get("data", function(items) {
    if (!chrome.runtime.error) {
      console.log(items.data.length );

      // document.getElementById("data").innerText = items.data;
       
      for(let i =0;i<items.data.length;i++){
      	  // windows.open(store[i]);
      	 chrome.tabs.create({"active":false, url: store[i]}); 
      	 console.log(items.data[i] + "showing items.data " );
       }
 
 
    }
  });

}

// add.onclick = () => {
//  boxvalue = document.getElementById('link').value;
//   links.push(boxvalue); 
//   chrome.storage.sync.set({'key': links}, function() {
//           // Notify that we saved.
           
//         });
//  chrome.storage.sync.get(['key'], function(result) {
//           console.log('Value currently is ' + result.key);

//         });
// }


// save.onclick = () => {
//         // Get a value saved in a form.
//          var theValue = document.getElementById("text").value;
//         // Check that there's some code there.
//         if (!theValue) {
//           message('Error: No value specified');
//           return;
//         }
//         // Save it using the Chrome extension storage API.
//         chrome.storage.sync.set({'value': theValue}, function() {
//           // Notify that we saved.
//           message('Settings saved');
//         });
//       }


// function add() {
//   boxvalue = document.getElementById('link').value;
//   items.push(boxvalue);
//   console.log(items);

//   return false; // stop submission
// }

// show.onclick = () => {
// 	 links.forEach(function(el){
//      document.getElementById('demo').innerHTML+='<br>' +el;
//    })
// }

// function printnumbers(){
//    items.forEach(function(el){
//      document.getElementById('demo').innerHTML+='<br>' +el;
//    })
// }

// function openInNewTab(url){
// 	 window.open(url,'_blank');
// 	//win.focus();
// }

// function Open(){
// 	for(let i = 0;i<items.length;i++){
// 		console.log(items.length)
// 		var win = window.open(items[i],'_blank');
// 		//openInNewTab(items[i]);
// 	}

// }
 
document.body.onload = function() {
  chrome.storage.sync.get("data", function(items) {
    if (!chrome.runtime.error) {
    	for(let i =0;i<items.data.length;i++){
    		console.log(items.data[i]);
    		store.push(items.data[i])
    		// console.log("value in store array " + store[i])
    	}
       
      document.getElementById("data").innerText = items.data;
    }
  });
}

document.getElementById("set").onclick = function() {
  var d = document.getElementById("text").value;
  links.push(d); 
  chrome.storage.sync.set({ "data" : links }, function() {
    if (chrome.runtime.error) {
      console.log("Runtime error.");
    }
  });
  // window.close();
}



