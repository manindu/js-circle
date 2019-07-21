---
title: "Introduction to JavaScript Promises"
date: "2019-07-17"
author: "Manindu Wijewickrama"
description: "In this post you will be learning the basics of JavaScript promises."
tags: ["javascript"]
meta: [{ name: 'javascript promises', content: 'Introduction to JavsaScript Promises' }]
---

Promises are one of the ways we can handle asynchronous operations is JavaScript. Before promises, we used callbacks to deal with async code. But the usage of callbacks can lead to callback hell, if the code is not managed properly. This can make the code hard to maintain and less readable. Promises in JavaScript solves this problem for a certain extent.
<br />
<br />

In JavaScript, a promise is an object which includes information about the completion or the failure of an asynchronous operation. Let's create our first promise.
<br />
<br />

```javascript
  let simplePromise = new Promise((resolve, reject) => {
    const success = true;
    if (success) {
      resolve('Success')
    } else {
      reject('Failure')
    }
  })
```
<br />

Here, we have created a promise named **simplePromise**. The **Promise** constructor accepts a function as an argument. This function is know as the **executor**. The executer function will be executed right away when we create the promise.
<br />
<br />

A promise can be in one of three states.

- **pending** - When the promise is created using the Promise constructor, it will get into the **pending** state. The promise will be in the pending state forever unless it is **fullfilled** or **rejected**. The executor function receives two functions as arguements commonly named as **resolve** and **reject**. When we call **resolve()**, the promise will be resolved with the value passed into resolve function. When we call **reject()**, the promise will be rejected with a reason (an error) that we pass into the reject function.
<br />
<br /> 
- **fulfilled** - The promise will reach the **fulfilled** state when the resolve method is called. In the example above, the promise is fulfilled with the value 'Success'.
<br />
<br />
- **rejected** - If the reject method is called, the promise will reach the rejected state. When a promise is rejected, it is rejected with a reason (an error). In the above code snippet, if **success** is false we reject the promise with a reason which is 'Failure'.
<br />
<br />

When a promise is either resolved or rejected, we call it a settled promise. When a Promise is settled, we need to have a way to access the result of the promise. This is where then(), catch() and finally() methods comes into play. These methods which are attached to the promise object can be used to register handler functions to retrieve the value that the promise was resolved with or the error that it was rejected with. Let's have a look at these methods.
<br />
<br />

### then
<br />
This is the most useful one. This method accepts two functions as arguments.
<br />
<br />

```javascript
  simplePromise.then(
    (result) => {}, // Executed when the promise is resolved
    (error) => {}   // Executed when the promise is rejected. This argument is optional
  )
```
<br />

The first function is executed when the promise is resolved. That function receives the result of the resolved promise. We can do whatever we want with the result inside that function. 

The second function is executed when the promise is rejected. It receives the error that the promise was rejected with. It's important to note that, the error handler is an optional argument. In most cases, we use then() method, only with the first argument to handle the result of the resolved promise. We use catch() to handle the rejection.
<br />
<br />

```javascript
  then(onResolved, onRejected: optional)
```
<br />

### catch
<br />

**catch** method is used to handle promise rejections. It receives a function as an argument. That function receives the error that the promise was rejected with.
<br />
<br />

```javascript
  simplePromise
    .then(result => {})
    .catch(
      err => {} // This function is executed when the promise is rejected
    )
```
<br />

### finally



