---
title: "Understanding JavaScript Array Reduce Method"
date: "2020-05-03"
author: "Manindu Wijewickrama"
description: "In this post you will learn how to use the JavaScript reduce method"
tags: ["javascript"]
meta:
  [
    {
      name: "javascript array methods",
      content: "Understanding JavaScript Array Reduce Method",
    },
  ]
---

The **reduce()** method is one of the array methods available in JavaScript. Most people seem to have trouble how it really works. However the functionality it provides is pretty simple. The array.reduce() method can reduce an array of values into a single value. Let's have a look at an example.
<br />
<br />
The code below calculates the sum of numbers inside an array which is named **points**. The for loop goes through each number in the array and add it to the variable which is called **sum**. Then it prints out the result.

```javascript
const points = [89, 78, 92, 72];

let sum = 0;

for (let i = 0; i < points.length; i += 1) {
  sum += points[i];
}

console.log(`Sum is ${sum}`);
```

<br />
We can achieve the same result using the **reduce()** method with less code.
<br />
The **reduce** method accepts two arguments. The first argument is a function and the second argument is the default value. The function we pass into reduce will be executed for each item in the array. This is how it looks.

```javascript
const sum = points.reduce((accumulator, current, source, index) => {}, 0);
```

The function we pass into the reduce method gets four arguments. The default value is an optional argument.

1. accumulator - This is simply the return value of this function in the previous iteration. So what would happen in the first iteration where there is no previous iteration?. This where the default value comes in. If we pass in a default value, in the first iteration, the accumulator will be equal to the default value that we set. In every iteration after that, the accumulator will be the return value of the function in the previous iteration. If we don't pass in the default value, the first item in the array will be the accumulator in the first iteration.

2. current - This is the current value.
3. source - This is simply the source array we're using with the reduce() method. In this case it's the **points** array. This argument is optional. So we can remove it.
4. index - This is the array index number of the current item. This is also an optional argument.

We can use this behavior to calculate the sum of points as below. In each iteration, we add the current number to the accumulator.

```javascript
const points = [89, 78, 92, 72];

const sum = points.reduce((accumulator, current) => {
  console.log(accumulator, current);
  return accumulator + current;
}, 0);

console.log(`Sum is ${sum}`);
```

<br />
You will see the following logs in the console.

```
0 89
89 78
167 92
259 72
Sum is 331
```

As you can see in the first iteration, we get 0, which is the default value as the accumulator. In each iteration, we add the accumulator to the current item. When we are done with the whole array we get the sum(331) in the end.

Try removing the default value. Still, You will get the same answer for the sum.

```
89 78
167 92
259 72
Sum is 331
```

<br />
That's all about the **reduce()** method. If you have any questions, feel free to ask them in the comment section below.
