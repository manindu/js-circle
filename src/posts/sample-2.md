---
title: "JavaScript Promise Chaining"
date: "2019-08-18"
author: "Manindu Wijewickrama"
description: "In this post you will be learning about promise chaining in JavaScript"
tags: ["react"]
meta: [{ name: "javascript promises", content: "JavaScript Promise Chaining" }]
---

In a previous post we discussed how promises work in JavaScript and went through a couple of examples. In this post we're going to talk about chaining multiple promises in JavaScript.

Let's have a look at some code.
<br />
<br />

```javascript
let simplePromise = new Promise((resolve, reject) => {
  const success = true;
  if (success) {
    resolve("Success");
  } else {
    reject("Failure");
  }
});
```
