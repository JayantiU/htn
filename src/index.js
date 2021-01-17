import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


function handleSelect(ingredient, selection) {
  console.log(ingredient);
  console.log(selection);
}

function showDropdown(selection) {
  console.log("hello");

  //if (getReplacementOptions(selectedText).length === 0) {
      var myobj = document.getElementById("recipely");
      myobj.remove();
      //return;
  //}
  
  var b = document.createElement("div");
  b.id = "recipely";
  b.style.height = 'auto';
  b.style.width = 'auto';
  b.style.position = "absolute"
  console.log("=========positioning rect2==========")
  console.log(rect2.top)
  console.log(rect2.bottom)
  b.style.top = `${((rect2.top + rect2.bottom) / 2) - 22 + window.scrollY}px`;
  b.style.left = `${rect2.right - rect2.width + window.scrollX}px`;
  b.style.zIndex = 9999999;
  document.body.insertBefore(b, document.body.firstChild);

  let replacements = getReplacementOptions(selectedText).map(r => replaceOnScreen(selectedText, r))
  replacements.push(selectedText)
  var ingredient = {name: selectedText, 
                    selected: selection, 
                    replacements: replacements} ;
  

  ReactDOM.render(
    <React.StrictMode>
      <Dropdown ingredient={ingredient} 
                handleSelect={handleSelect}
                />
    </React.StrictMode>,
    document.getElementById("recipely")
  );}

ReactDOM.render(
  <React.StrictMode>
    <HighlightCookie onClick={showDropdown}/>
  </React.StrictMode>,
  document.getElementById("recipely")
);

}

window.addEventListener("mouseup", function(event) {

  console.log("here is an event");
  console.log(event);
  
  var myobj = document.getElementById("recipely");
  var mydropdown = document.getElementById("recipely");
  var sel = window.getSelection();
  var selectedText = sel.toString();
  console.log(getReplacementOptions(selectedText).length)
  if (myobj === null && selectedText !== "" && isRecipeSite() && getReplacementOptions(selectedText).length!=0) {
      console.log("SHITTAKE MUSHROOMS")
      showCookie();

  } else if (myobj !== null && getReplacementOptions(selectedText).length!=0) {
      myobj.remove();
      var sel = window.getSelection();
      var selectedText = sel.toString();
      if (selectedText !== "") {
        console.log("SHITTAKE MUSHROOMS 2")
        showCookie();
      }
  }

});


function isRecipeSite(){
//selects schema
var items = document.querySelectorAll('script[type^="application/ld+json"]')
for (var i=0; i<items.length; i++){
  //check type
  if (items[i].innerText.replace(/ /g, "").includes("\"@type\":\"Recipe\"")){
    return true
  }
}
return false
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
