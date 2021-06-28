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
            arr = item.contentDocument.querySelectorAll(elStr);
         });
         return arr;
         
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
      },
      next: function() {
         let elements = document.querySelectorAll(element);
         let next;
         elements.forEach(item => {
            next = item.nextElementSibling;
         });
         return next;
      },
      prev: function() {
         let elements = document.querySelectorAll(element);
         let prev;
         elements.forEach(item => {
            prev = item.previousElementSibling;
         });
         return prev;
      },
      nextAll: function() {
         let elements = document.querySelectorAll(element);
         let nextAll = [];
         elements.forEach(item => {
            nextAll.push()
         });
      },
      remove: function(el) {
         let elements = document.querySelectorAll(element);
         elements.forEach(item => {
            item.removeChild(el);
         });
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
//! next()
//! prev()
//? nextAll()

//? .css(),

find, eq, parent, parents, next, prev, nextAll, 

prevAll, remove, empty 

append, prepend, after, before
\
*/