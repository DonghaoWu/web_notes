7/30:

1. what you should do in your after you land you job?

- Understand the policies, privacy, and security rules of the company.
- Set up all environments, including .env variables, VPN, SSH keys, or something related to account setting.
- Communicate with and know each member in the team, figure out everyone’s role and how the team works. Also, need to be more clear about my own role and responsibility.
- Familiar with the team task management tools, like Jira, Trello, and others, and understand the team task management pattern like agile.
- Understand the project’s business concept.
- After getting access to the code base, read the Readme file carefully, also check the package.json file to know the scripts and library info about the project, set up linter, and learn more about other developers’ coding habits such as naming and formatting.
- Get my tickets, develop the code then follow the CI/CD pattern to make commit to the project, never commit to the master branch.

---

8/2:

1. woking on interview questions.

2. 12:30

3. context-api, build context api hook

4. vender call intro. context pros and cons.

5. react interview helper.

6. answer yes and have opinion.

7. build a demo about graphQL

8. GraphQL API vs REST API vs SOAP, api design pattern

9. write down all the notes

10. remote protocol, RESTful API

11. disadvantage about RESTful API, `overfetching`

12. one endpoint and query what data exactly you want

13. http support caching, GraphQL only one endpoint, can not cache data, hard to handle nested and complicated query.

14. authentication, let server who I am, authorisation, what is my role.

15. how jwt work flow in the whole application? From front-end to backend.

16. statusCode 400 can be regard as an error in the frontend.

17. cookies vs localStorage, cookies can be remove, localStorage and cookie is in the local drive brower. cookies is send by http, cookie is for a super long string, localStorage is for a dictnary or map. cookie is automatically. localStorage need to be manually use, but cookie is automatically. xss quiting.

18. axios, simplify fetch. Why axios, axios is for json, axios intersetor, axios promise cancel token.

19. `two videos, evaluation project.`

20. offer, us bank

---

8/2:

1. chanllege, scratch, project detail

2. Helen, project experice, Ellen Liang

3. single page application, webpack, redux, express, rest, typeScript, jest, enzemy, recent project, customer to design their home, bootstrap, search component, user can chose their material, sort , data tables. fully charging this model, utility function. prefecent & confidence. yes, there is a sub-project.

4. CRA, webpack, own boilerplate. I use webpack to config some part.

5. accessibility and performance, customers facing app, production issue solved before. Have some problem I remember that when ...

6. use I instead we.

7. pictures will loading slower. Improve the loading pattern.

8. previous project. education project. What I have done there. speech translation.

9. cannot freeze, comflit time, how to solve the problem.

10. show your confident, english part and logic. challenge/ confilt.

---

8/3:

1. about resume.

2. vender call, updated resume like this.

3. own project

4. resume template

5. upload and approve

6. this week, ssn, ead

7. zhaolin ding is in company

8. review everything, try to not remove.

9. next.js, graphQL, machine, get some keywords, 5 years experience.

10. everything make sense.

11. check working experience, personal project, open source project.

12. person project, company should have a website, professional project.

13. talk with people before change resume.

14. google the company in the resume.

15. `build a dashboad, Highcharts, play with it.`

16. charts, responsibilities, styled component.

17. material UI / own internal library

18. check errors, double check the timeline.

19. macketing name, maketing phone number.

20. portfolio website, put something there, no more than one week, mock interview for anyone.

21. react is one way binding right? if the data change, view change

22. in the react, input part, update the state when the event change. either one way or two ways.

23. one way data flow, always from parent to child.

24. `watch performance & Agile-scrum, please write them down everything.`

25. for introduction and experience. talk about diffent industries, never talk anything in the university

26. context API mainly solves props-drilling.

27. `what is the pros and cons between Context API vs Redux?`

---

8/4:

1. agile/scrum

2. Flux/MVC

3. agile

4. redux / context-API / MobX / custom hooks

<!-- 8/16 meeting nodes -->

1. debounce

```js
const debounce = (cb, delayTime) => {
  return () => {
    setTimeout(cb, delayTime);
  };
};

const newApi = debounce(mockAPiCall, 2000);
```

2. throttle.

- resize
- window.resize
- trigger resize function

3. domino.

- old tech. es5, backbone.
- react, react native, spa
- spa benefits
- react-router to control the pages
- we are using js to control all.
- what can cause your application loading slow, spa, first time loading problem, lazy loading, server-side rendering.
- server location, CDN
- react itself
- react is the fastest one.
- build a website without react
- not virtual dom
- what do you think about react.
- react vs MVC pattern
- update the UI one time.
- homedepo technology, material UI, moment js handle time, angularJS
- Jquery training
- interview at 4, global payment.
- story and chanllenging.

---

8/18:

- share the screen

1. download java jdk.
2. download the app.
3. nohup java -Dapple.awt.UIElement=true Client YourName &
4. enabel the terminal

- share your voice
- use mobile to join the google meeting.
- download the app call google doc

1. how to react batch

- yes, I used it before.
- never say a little bit.

2. what kind of compoennt did you create?

3. most chanllenging component?

4. somthing like google calender

5. how could you share between components?

6. share the data from child component to the parent component? What is `render props`?

7. mounting, updating, unmounting, example

8. I have use lazy loading in my project.

9. webpack is helping with the lazy loading.

10. use webpack to do the library lazy loading.

11. obserable???

12. talk about authentication. give me some time to organize it.

13. web-component, how could we create a web-component?

14. May I have some hint?

15. show your attitude

16. 80%

17. let them like you, coworker

18. this is pretty simple.

19. what is debounce?

20. How can you know the device browser?

21. broswer duckType

22. display/opacity/visibility.

23. fill the gap and make it smooth

---

8/19

1. Grunt and Gulp are tools you want to look at when you have many developers working on a large project with different operation systems where there are several 'tasks' involved in doing everyday things with the project.

2. They are perfect fro when you have a lot of 'task' but you also need to abstract away the operation system so you `can avoid using shell specific commands.`

3. If you work as a single developer using NPM script is more than enough most of the time. Because Gulp and Grunt are ofter just wrapping another tool you can run directly in your shell.(`handle different shell commands`).

4. Webpack is a bundler that can do many different things but you should use it primarily for bundling JS and try to keep away from using too many plugins as it starts to slow down the bundling process a lot when the project grows.

5. Ideally you want to use Webpack for what it was made for and use Npm scripe, Grunt and Gulp for anything that can be done outside of the bunding process.

6. Gulp ia handling more than bundling, webpack is focuing on bundling.

7. Both of them can help you monitor files just added or modifications to existing files in specific directories. Furthermore, they give an opportunity to create tasks to process those files.

---

8/20:

1. project: a todo app mock up.

8/22:

1. make a questions summary.

---

8/23:

1. html: semantic Html, example, readabel for screen reader, A semantic Web allows data to be shared and reused across applications, enterprises, and communities.

2. css: flexbox vs grid,

- position
- css box model
- em vs rem

3. callback function, `why & example`

- callback function
- high order function
- promise
- closure
- ES6
- var let and const
- hoisting: move the declaration to the top.
- arrow function vs normal function
- constructor function vs class function
- call, bind ,apply
- rest vs spead operator
- string template

4. react

- class vs function component,
- state vs props
- hooks, useState, useReducer, useEffect, useRef, useCallback, useMemo, useLayoutEffect
- pass data between component
- Why react, what is virtual dom, what is JSX?
- virtual DOM, js representation of the real dom, dom manipulation is expensive, repaint the whold dom.
- virtual dom is just update the real dom with one time.

- `virtual dom advantage?`

- lifecycle method,
- HOC & render props

5. DOM

- what is dom?
- what is event bubbling?
- event bubbling goes from the buttom to the top of the class. When you have event in a element, the event goes from the buttom to the top elment.
- For example, you click

```html
<div id="main">
  <div id="parent">
    <div id="child">child</div>
    <div id="other">other</div>
  </div>
</div>
```

```js
$('parent').click(function () {
  console.log(`parent clicked.`);
});
$('child').click(function () {
  console.log(`child clicked.`);
});
```

```js
const parent = document.getElementById('parent');
const child = document.getElementById('child');

parent.addEventListener('click', function () {
  console.log('parent clicked.');
});

child.addEventListener('click', function () {
  console.log('child clicked.');
});
```

- when you click on the child element, you will get child and parent click function involved, this means bubbling.

```js
const parent = document.getElementById('parent');
const child = document.getElementById('child');

parent.addEventListener(
  'click',
  function () {
    console.log('parent clicked.');
  },
  true
);

child.addEventListener('click', function () {
  console.log('child clicked.');
});
```

- third element in addEventListener - true means enable capturing, by default is false, which means using bubbling.
- bubbling means involved the buttom event first, and the top event last. Event capturing is the the order reversed.

- How to stop bubbling? (event.stopProagation)

```html
<div id="parent">
  <button id="child" onclick="event.stopPropagation()">Child</button>
</div>
```

- what is event capturing? (addEventListener, third parameter.)
-

- what is event delegation?

```js
const myList = document.getElementById('myList');

myList.addEventListener('click', function (e) {
  const target = e.target;

  if (target.matches('li')) {
    target.style.backgroundColor = 'red';
  }
});

const newLi = document.createElement('li');
newLi.textContent = 'hello';
myList.appendChild(newLi);
```

6. root - window - document - html - body - div - p

---

8/24

1. RESTful api:

- client and server are totally seperated.

- Using Http/Https with stateless communication

- server will not remember your info, just return the response instead.

- endpoint can self explained.
- api/users, every api can handle a resource.

- get/post/put/delete

- put/patch, put is updating `the whole thing`, and patch is `updating part of the target`. check if updating the whole row.

- you can use post to do anything, theroically.

- we can use get request to `send message / create a resouce` to the server. With url query parameters.

- we do not want to delete any data, instead we add a new key name 'isDeleted'.

2. status code:

- 200, get success
- 201, create success
- 200/204, delete success
- 401, authorized failed
- 403, forbidden, no permission to visit.
- 400, bad request, `The request could not be understood by the server due to malformed syntax. The client SHOULD NOT repeat the request without modifications.`
- 404, page not found, DNS is availabel, but page is not found.
- the site cannot be reach.(DNS thing), no related IP address.
- 500, server crash/ internal error
- 503, server is not available.

- you cannot do anything in the client side during the server side error, just try again.

---

8/25:

1. what is the difference?

2. es5 prototype method,

3. press a, press b, calculate total,

4. single responsibility principle

5. tab bootstrap, navagation tab

6. if you have a big gap, what will you do?

- good learner
- learn new techonology every week,
- If you are willing to spend extra time to learn more to fill the gap.

7. why do you use gitlab?

---

8/26:

1. What is a good test?

- the percentage is not very important.
- It is about testing all sceinario.
-

2. how do yu organize your css file?

- global css file ( index.css/styles.css )
- css-reset/variables/css-normalize/css-module
- BEM naming

3. selectAll fucntion

- demo component
- ignore id
- do not use ... in this.setState
- ***

8/31:

1. What is the difference between double equal and triple equals?
2. What is the difference between let, const and var?
3. Could you explain event bublling and event delegation? Example.
4. What is hoisting?
5. What is the prototype design pattern?
6. share your sceent in chat.
7. Can you explain closure?

8. codesandbox

9. Do you know css specity?
10. How to calculate css specity?
11. Do you know the concept pf Tweening?
12. What is css flexbox?
13. Do you know the display: none and visibility:hidden
14. What is the difference between inline and block?
15. Do you know Css box model?
16. Can you explain the latest HTML feature?
17. Have you used localStorage and sessionStorage?
18. What is Virtual dom and real dom?
19. Do you know promise? expample.
20. What is distructoring? Example.
21. Do you know controlled and uncontrolled component?
22. What is the different between function component and class component?
23. Do you know any else framwork? What is the diffrence between Angular and React?
24. What is the pros and cons about React?
25. difference between state and props?
26. stateful component and stateless component?
27. explain react lifecycle phase and methods?
28.

```js
//  What will the following code output?
// Q1
console.log(0.1 + 0.2 === 0.3);

// Q2
const arr = [1, 22, 33, 4444];
for (var i = 0; i < arr.length; i++) {
  setTimeout(() => {
    console.log('Index: ' + i + ' ' + arr[i]);
  }, 1000);
}

// Q3
// can youwrite dowm the example for closure?

// Q4
// remove the duplicate items in an array and sort the array in ascending order.
let arr = [1, 1, 2, , 5, 10, 6, 5, 2];

// input: 'Words'
// output: 'WordsWords'
```

```js
// technical question part two
// Test : add unit test for `<User />`
// Using the provide endpoint, 
```
