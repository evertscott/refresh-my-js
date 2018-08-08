import './styles.scss';

setTimeout(function() {
    var el = document.getElementsByTagName("body").item(0);
    var elChild = document.createElement('h2');
    elChild.innerHTML = 'Time Flies';
    el.insertBefore(elChild, el.firstChild);
  }, 5000);


  function getElement(id){
    return (document.getElementById(id));
  }

  function ElementGetter(){
    this.currentElement = null;
  }

ElementGetter.prototype = {
  logElement: function(values){
    if((typeof values[Symbol.iterator] === 'function') && typeof values !== "string"){
      Array.from(values, element => {
        console.log(element)
      });
    } else {
      console.log(values)
    };
  },

  bindClick: function(selector, callback){
    let elements = document.querySelectorAll(selector);
    Array.from(elements, element => {
      element.onclick = callback;
    });
  },

  byClass: function(className){
    return document.querySelectorAll("."+className)
  }
}

let elementGetter = new ElementGetter();
let byClassValues = elementGetter.byClass("clickable");
elementGetter.logElement(byClassValues);
elementGetter.bindClick(".clickable", function(){elementGetter.logElement("Hello")});

function changeButton(value){
  let elements = document.querySelectorAll(value);
    Array.from(elements, element => {
      element.innerText = "clicked";
      element.style.cursor = "not-allowed";
      element.onclick = false;
      element.style.backgroundColor = "red";
    });
}

function saySomething(value){
    console.log(value)
}

const saySomethingEs6 = value => console.log(value);

saySomething("Hello");
saySomethingEs6("Hello");