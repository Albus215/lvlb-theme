import $ from 'jquery'

export default class ElementClickOnlyActive {
   constructor(selector, activeClass) {
       this.element = $(selector);
       const elementActiveClass = activeClass;
       if (this.element.length) {
           this.element.on('click', function (event) {
               $(this).addClass(elementActiveClass);
           });
       }
   }
}