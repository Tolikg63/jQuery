function $(element){
   return {
      click: function(fn){
         let elements = document.querySelectorAll(element);
         for(let i = 0; i < elements.length; i++){
            elements[i].addEventListener("click", fn)
         }
      },
      html: function(text){
         let elements = document.querySelectorAll(element);
         for(let i = 0; i < elements.length; i++){
            elements[i].innerHTML = text
         }
      },
      val: function(el) {
         let elements = document.querySelectorAll(element);
         for(let i = 0; i < elements.length; i++) {
            elements[i].value = el;
         }
      },
      hide: function(el) {
         let elements = document.querySelectorAll(element);
         for(let i = 0; i < elements.length; i++) {
            setTimeout(() => {
               // elements[i].style.transform = 'translateY(-30px)';
               elements[i].style.transition = `all ${el/1000}s`;
               elements[i].style.display = 'none';
            }, el);
         }
      },
      show: function(el) {
         let elements = document.querySelectorAll(element);
         elements.forEach(item => {
            setTimeout(() => {
               item.style.display = 'block';
            }, el);
         });
      },
      find: function(el) {
         let elStr = el.toString();
         let elements = document.querySelectorAll(element);
         let arr;
         elements.forEach(item => {
            arr = item.children;
         });
         for (let i = 0; i < arr.length; i++) {
            // console.log(arr[i]);
            if (arr[i] === elStr) {
               return arr[i];
            }
         }
         //todo for (let i = 0; i < elements.length; i++) {
         //todo    arr = (elements[i].children);
         //todo }     
         // return arr;
         // elements.forEach(item => {
         //    return item.children;
         // });
         // return element.children;
      },
      eq: function(ind) {
         let elements = document.querySelectorAll(element);
         let index;
         elements.forEach(item => {
            index = item.children;
         });
         return index[ind];
      },
      parent: function() {
         let elements = document.querySelectorAll(element);
         let arr = [];
         elements.forEach(item => {
            arr.push(item);
         });
         return arr;
      }
   }    
}

/*
//! html(),
//! .val(),
//! .click(),
//! .show(),
//! .hide(),
//? find(),
//! eq(),

//? .css(),

find, eq, parent, parents, next, prev, nextAll, 

prevAll, remove, empty 

append, prepend, after, before








*/