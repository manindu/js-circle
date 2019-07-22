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

- **pending** - When the promise is created using the Promise constructor, it will get into the **pending** state. The promise will be in the pending state forever unless it is **fullfilled** or **rejected**. The executor function receives two functions as arguements commonly named as **resolve** and **reject**. When we call **resolve()**, the promise will be resolved with the value passed into the resolve function. When we call **reject()**, the promise will be rejected with a reason (an error) that we pass into the reject function.
<br />
<br /> 
- **fulfilled** - The promise will reach the **fulfilled** state when the resolve method is called. In the example above, the promise is fulfilled with the value 'Success'.
<br />
<br />
- **rejected** - If the reject method is called, the promise will reach the **rejected** state. When a promise is rejected, it is rejected with a reason (an error). In the above code snippet, if **success** is false we reject the promise with a reason which is 'Failure'.
<br />
<br />

When a promise is either resolved or rejected, we call it a settled promise. When a Promise is settled, we need to have a way to access the result of the promise. This is where then(), catch() and finally() methods come into play. These methods which are attached to the promise object can be used to register handler functions to retrieve the value that the promise was resolved with or the error that it was rejected with. Let's have a look at these methods.
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

The second function is executed when the promise is rejected. It receives the error that the promise was rejected with. It's important to note that, the error handler is an optional argument. In most cases, we use only the first argument with **then()**. We use **catch()** to handle the rejection.
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
<br />

**finally** is executed whenever the promise is settled. This method accepts a function as an argument. The function which is passed into **finally()** will be executed regardless of how the promise was settled (resolved or rejected). So, **finally** handler can be used to perform common tasks which has to be performed whenever a promise is settled (such as disabling a loading indicator).
<br />
<br />

```javascript
  simplePromise
    .finally(() => { 
      // Perform some tasks after the promise is settled
    })
    .then(result => {})
    .catch(error => {})
```
<br />

Let's take an example where we can use, **finally(), then() and catch()**.

Think of a scenario where you have to make an api call to get data from a server. Typically, this is going to be an async operation. We can use a promise to handle this.
<br />
<br />

```javascript

  let loading = false; // line 1

  getData = () => {
    return new Promise((resolve, reject) => {
      loading = true; // line 2
      const isDataAvailable = true; // line 3

      if (isDataAvailable) {
        resolve('some data')
      } else {
        reject(new Error('Error occured'))
      }
    })
  }
```
<br />

In the above code snippet, we have declared a variable called **loading** to keep track of the loading status. Initially, this variable will have the value **false**. Then, we have a function named **getData** which returns a promise. When the promise is created, the executer fuction will run and set the **loading** to **true** (line 2). If **isDataAvailable** is true, we resolve the promise with the value 'some data'. If it is false, we reject the promise with an error object.

We can call the **getData** function and handle the result of the promise as below.
<br />
<br />

```javascript
  getData()
    .finally(() => loading = false)
    .then(result => console.log(result))
    .catch(error => console.log(error))
```
<br />

Inside the **finally** handler, we set loading to false. Using **then** method, we can get the result of the resolved promise. We can handle any errors using **catch**.

You can checkout an executable version of the code [here](https://repl.it/@maninduw/MidnightblueSleepyFields)

In the next post, we are going to talk about promise chaining which enables us to deal with multiple async operations which occur one after the other.





