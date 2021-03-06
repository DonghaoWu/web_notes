// function $$(element){
//     return{
//         html:function(content){
//             const el = document.querySelector(element);
//             console.log(el, '====>')
//             el.innerHTML = content;
//             return;
//         }
//     }
// }

// the benifit of using the class method, instead of new object function.
// const a = $$('button.test').html;
// const b = $$('button.test').html;
// console.log(a === b);

// var hiddenBox = $('#banner-message');
// hiddenBox.hide();
// $('#button-container button').on('click', function (event) {
//   console.log('hello');
//   hiddenBox.show();
// });

class MyQuery {
  constructor(selector) {
    const el = document.querySelector(selector);
    this.el = el;
    this.originalDisplay = this.element.style.display;
  }

  html(content) {
    this.el.innerHTML = content;
  }

  hide() {
    this.el.style.display = 'none';
  }

  show() {
    this.el.style.display = 'block';
  }

  on(event, cb) {
    this.el.addEventListener(event, cb);
  }
}

const $$ = function (selector) {
  return new MyQuery(selector);
};

$$.ajax = function ({ url, success }) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      success(data);
    });
};

// innerHTML method
$$('button.test').html('Next step');

//-------- event listener
let hiddenBox = $$('#banner-message');
hiddenBox.hide();

$$('#button-container button').on('click', function (event) {
  hiddenBox.show();
});

// ajax
$$.ajax({
  url: 'https://jsonplaceholder.typicode.com/todos/1',
  success: function (result) {
    console.log(result);
  },
});
