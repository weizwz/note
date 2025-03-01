---
title: 前端术语解读 - 底层运行类
description: 前端名词解释大全，主要介绍了前端底层运行原理中的关键概念，如V8引擎及其特点、I/O操作的定义和种类、事件驱动编程的核心概念及应用、JavaScript运行机制等，并通过代码示例详细解读各概念及其应用，包括异步编程模型和垃圾回收机制等。
tags:
  - 底层运行原理
  - 术语
---

# 前端术语解读 - 底层运行类

>前端名词解读，本篇是底层运行类。

## 前端运行简易图示

浏览器作为客户端，为用户提供图形界面，内嵌的JS引擎、渲染引擎、网络模块等为此服务；而服务器作为服务端，提供服务运行的软硬件，包括提供服务运行环境、数据库、负载均衡等。

![image-20250301155813077](https://www.helloimg.com/i/2025/03/01/67c2beed2323e.png)

## V8 引擎

### 解读

在前端开发中，**V8 指的是 Google 开发的一个开源的高性能 JavaScript 和 WebAssembly（Web 程序集）引擎，它用于编译和执行 JavaScript 代码**。V8 主要用于 Chrome 浏览器和 Node.js 环境，此外也有部分框架和工具也使用了 V8 引擎，例如：**Electron**（用于开发跨平台桌面应用程序的框架，结合了 Chromium 渲染引擎和 Node.js 运行时）、**Deno**（一个新的 JavaScript 和 TypeScript 运行时，由 Node.js 的原作者 Ryan Dahl 创建，旨在解决 Node.js 的一些设计缺陷）、**Bun**（这是一个相对较新的 JavaScript 运行时，旨在提供比 Node.js 更快的速度）等。

### 特点

主要特点如下：

- **即时编译（JIT）**：V8 不仅解释 JavaScript 代码，还会将频繁执行的代码编译成本地机器码，以提高执行效率。
- **垃圾回收机制**：自动管理内存，通过识别并回收不再使用的对象来释放内存。
- **高效性能**：由于采用了多种优化技术，如隐藏类、内联缓存等，使得 JavaScript 代码运行得更快。
- **支持 ES6+标准**：V8 持续更新以支持最新的 ECMAScript 标准，让开发者能够使用现代 JavaScript 的新特性。

### 优化技术

V8 引擎采用了一系列优化技术来提升 JavaScript 代码的执行性能。以下是其中一些关键技术：

1. **即时编译（Just-In-Time Compilation, JIT）**：

   - V8 首先解释执行 JavaScript 代码，然后对频繁执行的“热点”代码进行编译和优化，生成高效的机器码。

2. **TurboFan**：

   - TurboFan 是 V8 的现代优化编译器，它能对代码进行深层次的分析，并生成高度优化的机器码。

3. **隐藏类（Hidden Classes）**：

   - 为了加速对象属性的访问，V8 为对象创建了隐式的类结构，这类似于其他语言中的类概念，但更高效。

4. **内联缓存（Inline Caching）**：

   - 当访问对象的属性或调用方法时，V8 会记住上次查找的结果，并在下次访问时直接使用该结果，从而减少重复查找的时间。

5. **垃圾回收（Garbage Collection, GC）**：

   - 分代垃圾回收：将堆内存分为新生代和老生代，针对不同生命周期的对象采用不同的回收策略。
   - 增量垃圾回收：将垃圾回收过程分成多个小步骤，以减少应用暂停时间。
   - 并行垃圾回收：利用多核 CPU 并行处理垃圾回收任务，提高效率。

6. **逃逸分析（Escape Analysis）**：

   - 通过分析确定对象是否可能被外部引用，决定是否将对象分配到堆上，减少不必要的内存分配。

7. **函数内联（Inlining）**：

   - 将简单的函数调用替换为其实际的函数体，减少函数调用开销。

8. **代码拆分与懒加载（Code Splitting and Lazy Loading）**：

   - 在大型应用中，只加载当前需要的部分代码，延迟加载其他部分，以加快初始页面加载速度。

9. **常量池（Constant Pool）**：

   - 编译器优化的一部分，帮助减少运行时的内存访问次数，提高执行效率。

10. **抽象解释器（Abstract Interpreter）**：

    - 用于分析代码路径和类型信息，以便更好地优化代码。

## I/O （Input/Output）操作

### 解读

在计算机科学和编程中，I/O 操作指的是输入（Input）和输出（Output）操作。这些操作涉及与外部系统或设备进行数据交换，例如文件系统、网络连接、数据库、用户界面等。对于前端来说，**I/O 并不是由 JavaScript 本身直接处理的，而是由 浏览器（在浏览器环境中）或 Node.js（在服务器环境中）的底层实现的**。JavaScript 只是在调用这些平台提供的 API，实际的 I/O 操作 是由平台的多线程机制处理的。

### 种类

#### 1. 网络请求（如 fetch、XMLHttpRequest、Node.js 中的 http 模块）

- **定义**：通过 HTTP 或 HTTPS 协议从服务器获取数据或发送数据。

- **示例**：

  ```js
  fetch('https://api.example.com/data')
    .then((response) => response.json())
    .then((data) => console.log(data))
  ```

  `fetch` API 发起一个异步的网络请求，并在请求完成后执行回调函数处理返回的数据。

#### 2. 文件系统访问（如 FileReader、Node.js 中的 fs 模块）

- **定义**：读取或写入文件系统中的数据。

- **注意**：在浏览器环境中，JavaScript 直接访问本地文件系统的能力是受限的，但可以通过 `<input type="file">` 元素让用户选择文件，并使用 `FileReader` API 来读取文件内容。

- **示例**：

  ```js
  const input = document.querySelector('input[type="file"]')
  input.addEventListener('change', (event) => {
    const file = event.target.files[0]
    const reader = new FileReader()
    reader.onload = (e) => console.log(e.target.result)
    reader.readAsText(file)
  })
  ```

#### 3. 定时器（如 setTimeout、setInterval）

- **定义**：设置定时器来延迟执行某些代码或定期执行某些任务。

- **示例**：

  ```js
  setTimeout(() => {
    console.log('This will run after 1 second')
  }, 1000)

  setInterval(() => {
    console.log('This will run every second')
  }, 1000)
  ```

  `setTimeout` 和 `setInterval` 是用于安排代码在未来某个时间点执行的异步操作。

### 注意

#### DOM 操作不属于 I/O 操作

尽管 DOM 操作看起来像是与外部环境（如浏览器渲染引擎）进行交互，但它们实际上是在同一个进程中执行的，即浏览器的 JavaScript 引擎和渲染引擎紧密协作来处理这些操作。因此，DOM 操作不涉及跨进程通信或网络请求等典型的 I/O 操作特征。

#### WebSockets 也不属于 I/O 操作

从技术角度讲，WebSocket 通信确实涉及到了网络 I/O，因为它包括了通过网络接口发送和接收数据的过程。然而，在 JavaScript 和前端开发的语境下，“I/O 操作”这个术语更多地被用来描述那些可能阻塞主线程的操作，如文件系统访问或传统的 HTTP 请求。

WebSocket 通信在 JavaScript 中通常是通过事件驱动的方式实现的，这意味着它们不会阻塞主线程。当有新消息到达或者连接状态发生变化时，相应的事件处理器会被触发，从而执行相应的回调函数。因此，尽管 WebSocket 本质上是一个网络 I/O 操作，但它更常被视为一种异步通信机制，类似于其他基于事件的非阻塞操作。

## 事件驱动

### 解读

**事件驱动编程**是一种编程范式，其中程序的流程由事件触发。这些事件可以是用户操作（如点击按钮、输入文本）、传感器输出、消息或来自其他程序/线程的通知等。在事件驱动模型中，程序通常包含一个事件循环，等待并响应发生的事件。

在前端开发中，尤其是使用 JavaScript 和浏览器环境时，事件驱动编程是非常常见的，因为用户交互（例如点击、键盘输入）和异步操作（例如网络请求完成、定时器到期）都是通过事件机制来处理的。

### 核心概念

1. **事件（Event）**：表示某种已经发生的事情。它可以是由用户触发（如鼠标点击、按键按下），也可以是由系统或其他软件组件触发（如计时器超时、网络响应到达）。
2. **事件监听器/处理器（Event Listener/Handler）**：一段代码，当特定类型的事件发生时会被执行。开发者可以通过注册事件监听器来定义对特定事件的响应逻辑。
3. **事件循环（Event Loop）**：负责监控事件队列，并在事件发生时调用相应的事件处理器。这是实现非阻塞 I/O 的关键机制之一。
4. **事件传播（Event Propagation）**：描述了事件如何在 DOM 树中传播的过程，包括捕获阶段和冒泡阶段。这意味着事件不仅可以在目标元素上触发，还可以在其父级元素上触发。

### 应用

JavaScript，尤其是在浏览器环境中，广泛采用了事件驱动编程模型。以下是一些具体的例子来说明如何在 JavaScript 中应用事件驱动编程。

**示例 1：响应用户点击事件**

```js
document.getElementById('myButton').addEventListener('click', function (event) {
  console.log('Button clicked!')
})
```

这段代码为具有 `id="myButton"` 的 HTML 元素添加了一个点击事件监听器。当用户点击该按钮时，会触发事件处理器，控制台将输出 "Button clicked!"。

**示例 2：处理窗口大小变化**

```js
window.addEventListener('resize', function (event) {
  console.log(`Window resized to: ${window.innerWidth}x${window.innerHeight}`)
})
```

每当窗口大小发生变化时，都会触发 `resize` 事件，对应的事件处理器会在控制台上打印新的窗口尺寸。

**示例 3：WebSocket 通信中的事件处理**

```js
const socket = new WebSocket('ws://example.com/socket')

socket.addEventListener('open', function (event) {
  console.log('WebSocket connection opened')
})

socket.addEventListener('message', function (event) {
  console.log('Message from server:', event.data)
})

socket.addEventListener('close', function (event) {
  console.log('WebSocket connection closed')
})
```

这里展示了如何使用 WebSocket API 并为其不同状态的变化（连接打开、接收到消息、连接关闭）设置事件监听器。

### 事件驱动的优势

1. **非阻塞操作**：由于事件驱动架构基于回调函数或 Promise 来处理异步任务，因此它允许程序在等待某些操作完成的同时继续执行其他任务，从而提高了效率和响应速度。
2. **简化并发处理**：对于需要处理大量并发任务的应用来说，事件驱动模型提供了一种自然的方式来管理这些任务，而无需复杂的多线程编程。
3. **易于扩展**：由于应用程序的行为主要由事件触发，因此很容易根据需要添加新的功能或修改现有功能，只需增加或更改相应的事件处理器即可。

总之，事件驱动编程提供了一种强大的方式来构建响应式和动态的应用程序。通过事件驱动模型，JavaScript 能够有效地处理用户交互、异步网络请求和其他各种异步事件，同时保持界面的流畅性和响应性。

## JS 的运行机制

JavaScript 的运行机制涵盖了从代码执行到内存管理的各个方面，它的主要核心机制包括调用栈、内存堆、执行上下文、事件循环、消息队列、作用域与闭包、原型继承、异步编程模型、垃圾回收、模块系统、严格模式、代理与反射等概念。

### 调用栈（Call Stack）

- **定义**：**调用栈是一个后进先出的数据结构**，用于跟踪当前正在执行的函数以及它们的调用顺序。

- **工作原理**：每当一个函数被调用时，它就会被添加到调用栈的顶部，并在函数执行完毕后从栈顶移除。如果出现错误，比如无限递归，会导致“栈溢出”错误。

- **示例**：

  ```js
  function foo() {
    console.log('foo')
  }

  function bar() {
    foo()
    console.log('bar')
  }

  console.log('start')
  bar()
  console.log('end')
  ```

  输出顺序为：`start`, `foo`, `bar`, `end`。每个函数调用都会被添加到调用栈中，并在执行完毕后移除。

### 内存堆（Memory Heap）

- **定义**：与调用栈不同，**内存堆是一个非结构化的区域**，主要用于动态分配内存空间，例如对象的创建和销毁。

- **工作原理**：当需要为变量或对象分配内存时，会在内存堆中找到一块合适的空闲空间并进行分配。垃圾回收机制会自动释放不再使用的内存。

- **示例**：

  ```js
  let obj = { a: 1 }
  obj = null // 移除对对象的引用
  ```

  当对象不再被任何变量或属性引用时，JavaScript 引擎的垃圾回收机制会自动回收该对象占用的内存

### 执行上下文（Execution Context）

- **定义**：**执行上下文是 JavaScript 代码执行时的环境**，包括全局执行上下文、函数执行上下文以及 eval 函数执行上下文。

- **工作原理**：每个执行上下文都包含变量对象（Variable Object）、作用域链（Scope Chain）和 this 值。全局执行上下文是最外层的执行上下文，而每次调用函数都会创建一个新的函数执行上下文。

- **示例**：

  ```js
  function example() {
    var x = 10
    console.log(x) // 变量 x 在函数执行上下文中
  }
  example() // 输出: 10
  ```

### 事件循环（Event Loop）与消息队列（Message Queue）

- **定义**：

  - **事件循环**：是 JavaScript 实现非阻塞 I/O 操作的核心机制，确保异步回调能够适时地被执行。
  - **消息队列**：存储了待处理的消息（通常是异步操作完成后的回调），如来自 `setTimeout` 或者点击事件的回调。

- **工作原理**：当调用栈为空时，事件循环会检查消息队列是否有待处理的消息。如果有，事件循环将从消息队列中取出一条消息，并将其对应的回调函数放入调用栈执行。微任务（Microtasks，如 Promise 回调）优先于宏任务（Macrotasks，如 `setTimeout` 回调）执行。

- **示例**：

  ```js
  console.log('Start') // 同步任务

  setTimeout(() => {
    // 宏任务
    console.log('Timeout')
  }, 0)

  Promise.resolve().then(() => {
    // 微任务
    console.log('Promise')
  })

  console.log('End') // 同步任务
  ```

  输出顺序为：`Start`, `End`, `Promise`, `Timeout`。首先执行所有同步任务，然后处理微任务，最后处理宏任务。

### 作用域（Scope）与闭包（Closure）

- **作用域**：定义了变量的可访问性。JavaScript 中主要有全局作用域、函数作用域和块作用域（ES6 引入的 `let` 和 `const` 关键字支持）。

- **闭包**：内部函数可以访问其外部函数的作用域中的变量，即使外部函数已经执行完毕。这使得闭包成为一种强大的工具，用于封装逻辑和数据。

- **示例**：

  ```js
  function createCounter() {
    let count = 0 // 局部变量
    return function () {
      count++ // 闭包访问外部函数的局部变量
      return count
    }
  }

  const counter = createCounter()
  console.log(counter()) // 1
  console.log(counter()) // 2
  ```

  `createCounter` 返回了一个匿名函数，该函数形成了一个闭包，能够访问并修改外部函数 `createCounter` 中的 `count` 变量。

### 原型继承（Prototype Inheritance）

- **定义**：JavaScript 使用原型链来实现对象间的继承。每个对象都有一个指向另一个对象（即其原型）的链接。

- **工作原理**：当试图访问一个对象的属性时，如果该对象本身没有这个属性，则会沿着原型链向上查找，直到找到该属性或到达原型链的末端（null）。

- **示例**：

  ```js
  function Person(name) {
    this.name = name
  }

  Person.prototype.sayHello = function () {
    console.log(`Hello, my name is ${this.name}`)
  }

  const person1 = new Person('Alice')
  person1.sayHello() // 输出: Hello, my name is Alice
  ```

  `Person` 构造函数定义了一个 `name` 属性，并在原型上添加了 `sayHello` 方法。当 `person1` 对象被创建时，它不仅获得了 `name` 属性，还能通过原型链访问到 `sayHello` 方法。

### 异步编程模型

- **回调函数**：最基础的异步编程方式，但可能导致“回调地狱”问题。

- **Promise**：提供了一种更清晰的方式来处理异步操作的成功或失败情况。

- **async/await**：基于 Promise 的语法糖，使异步代码看起来像同步代码，提高了代码的可读性和维护性。

- **示例**：

  ```js
  function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Data fetched successfully')
      }, 1000)
    })
  }

  fetchData().then((result) => {
    console.log(result) // 一秒后输出: Data fetched successfully
  })
  console.log('Fetching data...')
  ```

  使用 `Promise` 来处理异步操作。`fetchData` 函数返回一个 `Promise`，在一秒钟后解决并打印结果。`Fetching data...` 是同步代码，会立即执行。

### 垃圾回收（Garbage Collection, GC）

- **定义**：JavaScript 自动管理内存分配和释放，通过垃圾回收机制自动清理不再使用的对象以释放内存。

- **常见算法**：引用计数和标记清除等。

- **示例**：

  ```js
  let obj = { a: 1 }
  obj = null // 移除对对象的引用
  ```

  由于没有其他地方引用 `obj` 这个对象，JavaScript 引擎的垃圾回收器会在适当的时候回收该对象占用的内存。

### 模块系统（Module System）

- **定义**：ES6 引入了原生的模块支持，允许开发者将代码分割成独立的模块进行管理和复用。

- **工作原理**：模块化有助于提高代码的组织性和可维护性，同时也可以减少命名冲突等问题。

- **示例**：

  ```js
  // math.js
  export function add(a, b) {
    return a + b
  }

  // main.js
  import { add } from './math.js'

  console.log(add(2, 3)) // 输出: 5
  ```

  使用 ES6 模块系统，`math.js` 导出了 `add` 函数，而 `main.js` 导入并使用了该函数。

### 严格模式（Strict Mode）

- **定义**：通过 `"use strict";` 声明启用的一种模式，引入了一些限制并禁用了某些不安全的操作。

- **目的**：让代码更加健壮和安全。

- **示例**：

  ```js
  'use strict'
  x = 3.14 // 这会导致错误，因为在严格模式下未声明的变量赋值是不允许的
  ```

### 代理（Proxies）与反射（Reflection）

- **代理**：允许你创建对象的代理，从而拦截并对基本语言操作（如属性查找、赋值、枚举、函数调用等）进行自定义行为。

- **反射**：提供了一系列 API 来获取类的信息以及操作对象，比如获取类的构造函数、检查类是否具有某个属性等。

- **示例**：

  ```js
  let target = {}
  let handler = {
    get: function (obj, prop) {
      return prop in obj ? obj[prop] : 37
    }
  }

  let proxy = new Proxy(target, handler)
  console.log(proxy.a) // 输出: 37 (因为 'a' 属性不存在于 target 对象中)
  ```

## 微任务（Microtasks）和宏任务（Macrotasks）

### 微任务（Microtasks）

微任务队列通常用于更细粒度的任务处理，如 `Promise` 的回调、`MutationObserver` 回调以及 `async/await` 关键字背后的 Promise 处理逻辑。微任务会在当前操作完成后立即执行，即在当前任务结束之后但在浏览器渲染之前执行所有微任务。

**示例**

- `Promise.resolve().then(() => console.log('This is a microtask'));`
- 使用 `async/await` 编写的异步函数本质上也是通过微任务队列来实现其非阻塞行为的。

### 宏任务（Macrotasks）

宏任务包括了整体代码块、`setTimeout`、`setInterval`、I/O、UI 渲染等。每次事件循环迭代都会从宏任务队列中取出一个任务执行，这个过程称为一个“tick”。

**示例**

- `setTimeout(() => console.log('This is a macrotask'), 0);`
- `setInterval(() => console.log('Another macrotask'), 1000);`

### 执行顺序

在一个事件循环的“tick”中，首先会执行一个宏任务，然后执行所有的微任务直到微任务队列为空。之后才会进行页面渲染或其他宏任务的处理。这意味着微任务总是比下一个宏任务先执行完毕，这确保了高优先级的任务可以尽快得到处理。

```js
console.log('Start') // 同步任务

setTimeout(() => {
  console.log('Timeout') // 宏任务
}, 0)

Promise.resolve().then(() => {
  console.log('Promise') // 微任务
})

console.log('End') // 同步任务
```

输出顺序将是：

```js
Start
End
Promise
Timeout
```

这里，“Start” 和 “End” 是同步任务，会最先执行。“Promise” 是微任务，在当前宏任务结束之后立即执行。“Timeout” 是宏任务，将在下一次事件循环迭代中执行。

### 总结

- **宏任务**：适用于较大的、独立的操作，如定时器触发的回调、网络请求完成后的回调等。
- **微任务**：适用于需要更高优先级处理的小型任务，比如基于 `Promise` 的回调，它们提供了更及时的数据响应能力。

## 如何看待 JS 是单线程，却能异步操作

### 解读

**JavaScript 的单线程指的是主线程，但是浏览器或者 Nodejs 的底层是多线程的**。当 JavaScript 调用异步 API（如 setTimeout 或 fetch）时，这些操作会被交给浏览器的其他线程（如定时器线程、网络线程）去执行。一旦这些操作完成，它们会将相应的回调放入任务队列中，等待主线程空闲时执行。因此，JavaScript 的主线程不会被阻塞，可以继续执行其他任务。

### 核心

1. **非阻塞 I/O**：通过事件驱动的方式，JavaScript 可以在等待 I/O 操作（如网络请求或文件读取）完成的同时继续处理其他任务，从而避免了阻塞主线程的情况。
2. **事件循环机制**：事件循环确保了异步操作的回调可以在适当的时候被执行，而不需要阻塞其他代码的执行。
3. **异步编程工具**：JavaScript 提供了多种处理异步操作的方式，包括回调函数、Promise 和 async/await 等，使得编写异步代码变得更加直观和易于管理。
4. **单线程的优势**：单线程避免了多线程编程中常见的并发问题，如死锁和竞态条件，简化了程序的设计和调试过程。
