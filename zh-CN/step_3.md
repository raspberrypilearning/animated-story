## 懒加载图像

在此步骤中，你将通过仅在需要时加载图像来提高浏览器性能。

<iframe src="https://editor.raspberrypi.org/zh-CN/embed/viewer/animated-story-step3" width="100%" height="800" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen> </iframe>

### 为什么要懒加载？

图像文件可能很大，并且在你访问网页时会使用大量数据。

当你打开网页时，页面上的**所有**图像都会被加载。 这会占用大量带宽。

<p style="border-left: solid; border-width:10px; border-color: #0faeb0; background-color: aliceblue; padding: 10px;">
通过计算机连接可以传输的数据量（bits）称为 <span style="color: #0faeb0">**带宽**</span>。 对于网络连接较差的用户来说，使用大量带宽可能会使页面加载速度变慢，或者花费更多钱。 减少带宽的使用使得网站更易于访问和用户友好。
</p>

### 为每个图像元素添加新属性

`index.html` 中所有图像元素的 `src` 属性都设置为 `spinner.gif`。

这意味着当页面加载时，唯一需要加载的图像是 `spinner.gif`。

--- task ---

打开 `index.html` 文件。

在每个 `<img>` 元素中，添加一个 `data-src` 属性并将其值设置为相关图像。

--- code ---
---
language: html
filename: index.html
line_numbers: true
line_number_start: 11
line_highlights: 19, 23, 27, 31, 35
---

  <body>
    <main>
      <section class="garden">
        <div id="bounce">向下滚动</div>
      </section>
      <p id="hideBounce">
        萨米缓慢而稳定地滑行，在探索花园奇观的过程中留下了闪亮的痕迹。
      </p>
      <img src="spinner.gif" data-src="snail.svg" />
      <p>
        来认识一下嗡嗡蜂吧，它是一只身穿黄黑条纹的小探险家，喜欢在花丛中嗡嗡飞舞，采集甜蜜的花蜜来酿造美味的蜂蜜。
      </p>
      <img src="spinner.gif" data-src="bee.png" />
      <p>
        贝拉在附近飞舞，她鲜艳的翅膀涂上了美丽的色彩，她在花丛间翩翩起舞，所到之处都带来欢乐。
      </p>
      <img src="spinner.gif" data-src="butterfly.png" />
      <p>
        还有露西，一只身上有黑色斑点的小红瓢虫，喜欢在花园里玩捉迷藏。
      </p>
      <img src="spinner.gif" data-src="ladybug.png" />
      <p>
        最后，同样重要的是，还有伊吉，一个随时准备迎接新冒险的神秘朋友。
      </p>
      <img src="spinner.gif" data-src="insect.png" />
      <p>
        他们一起组成了一群令人愉快的朋友，准备踏上激动人心的旅程！
      </p>
    </main>
  </body>

--- /code ---

**点击运行**

- 向下滚动。 你看到你添加的图像了吗？

你将看不到你添加的图像。 所有图像仍然是 `spinner.gif`。 这是因为 `src` 属性设置了要显示的图像。

--- /task ---

### 观察每个图像元素

你可以使用 JavaScript 观察页面上的每个图像。

--- task ---

打开 `scripts.js` 文件。

创建一个名为 `lazyImages` 的常量（`const`）。

--- code ---
---
language: js
filename: scripts.js
line_numbers: true
line_number_start: 10
line_highlights: 11
---

// 图像观察者
const lazyImages = document.querySelectorAll("img");

--- /code ---

常量 `lazyImages` 保存页面中所有 `<img>` 元素的数组。

在代码中，该页面被称为 `文档`。

**提示：**使用换行符分隔不同的观察者（在本例中为第 12 行）。

--- /task ---

### 创建一个名为 imageObserver 的新交叉观察器

`imageObserver` 用于监视（'观察'）元素数组（`entries`）。

--- task ---

打开 `scripts.js` 文件。

创建一个名为 `imageObsever` 的观察者。

--- code ---
---
language: js
filename: scripts.js
line_numbers: true
line_number_start: 10
line_highlights: 12-14
---

// 图像观察器
const lazyImages = document.querySelectorAll("img");
const imageObserver = new IntersectionObserver((entries) => {

});

--- /code ---

**提示**：第 13 行的换行符将包含回调。

--- /task ---

### 告诉 imageObserver j进行观察

调用 `imageObserver` 来 `观察` `document` 中的每个 `<img>` 元素。

--- task ---

使用 `forEach` 循环观察每个图像元素（保存在 `lazyImages` 数组中）。

--- code ---
---
language: js
filename: scripts.js
line_numbers: true
line_number_start: 10
line_highlights: 15
---

// 图像观察器
const lazyImages = document.querySelectorAll("img");
const imageObserver = new IntersectionObserver((entries) => {

});
lazyImages.forEach((lazyImage) => imageObserver.observe(lazyImage));

--- /code ---

--- /task ---

--- collapse ---

---
title: 什么是 forEach 循环？
---

在 JavaScript 中，使用 `forEach` 循环来遍历数组中的每个项目并对每个项目执行某些操作。

--- /collapse ---

### 创建回调

回调需要检查它观察到的每个图像。

--- task ---

使用 `forEach` 循环来调用与观察者“观察到”的每个图像相关的动作。

--- code ---
---
language: js
filename: scripts.js
line_numbers: true
line_number_start: 10
line_highlights: 13-17
---

// 图像观察器
const lazyImages = document.querySelectorAll("img");
const imageObserver = new IntersectionObserver((entries) => {
  entries.forEach(
    (entry) => {
      
    }
  );
});
lazyImages.forEach((lazyImage) => imageObserver.observe(lazyImage));

--- /code ---

**提示**：与 bounceObserver 不同，imageObserver 需要检查数组中的每个条目，因此需要一个 `forEach` 循环。

**提示**：第 15 行的换行符将包含对每个观察到的图像（`entry`）执行的操作。

--- /task ---

`isIntersecting` 方法用于检查 `<img>` 元素（`entry`）是否已进入视口。

--- task ---

创建一个条件语句来检查数组中观察到的条目是否在视口中。

--- code ---
---
language: js
filename: scripts.js
line_numbers: true
line_number_start: 10
line_highlights: 15-17
---

// 图像观察器
const lazyImages = document.querySelectorAll("img");
const imageObserver = new IntersectionObserver((entries) => {
  entries.forEach(
    (entry) => {
      if (entry.isIntersecting) {
        
      }
    }
  );
});
lazyImages.forEach((lazyImage) => imageObserver.observe(lazyImage));

--- /code ---

**提示**：第 16 行的换行符将包含对进入视口的图像（`entry`）执行的操作。

--- /task ---

如果数组中的图像位于视口中，则其 `src` 属性的值（当前为 `spinner.gif`）将更改为其 `data-src` 属性的值（要加载的图像文件）。

--- task ---

创建将 `src` 的值更改为 `data-src` 的值的操作。

--- code ---
---
language: js
filename: scripts.js
line_numbers: true
line_number_start: 10
line_highlights: 16-19
---

// 图像观察者
const lazyImages = document.querySelectorAll("img");
const imageObserver = new IntersectionObserver((entries) => {
  entries.forEach(
    (entry) => {
      if (entry.isIntersecting) {
        setTimeout(
          () => (entry.target.src = entry.target.getAttribute("data-src")),
          1000
        );
      }
    }
  );
});
lazyImages.forEach((lazyImage) => imageObserver.observe(lazyImage));

--- /code ---

--- collapse ---

---
title: 为什么会有setTimeout？
---

imageObserver 使用 `setTimeout`，其值为 `1000`（毫秒）。 这会在 `src` 属性的值与 `data-src` 属性的值交换之前添加一秒钟的暂停。

如果没有这个，那么交换可能会发生得太快而你看不到！

--- /collapse ---

**点击运行**

- 向下滚动并观察每个图像进入视口时的加载情况（暂停一秒钟后）。

--- /task ---

--- collapse ---

---
title: 图像未加载
---
- 确保第 11 行括号中的是 `img`，而不是 `<img>`。
- 检查第 17 行后是否有逗号 `,` 。
- 检查第 19、22、23 和 24 行末尾是否有分号 `;`。

--- /collapse ---

### 停止观察

当图像元素的 `src` 属性更改为其 `data-src` 属性的值后，你应该停止观察图像元素。

这避免了内存或性能问题。

--- task ---

将 `unobserve()` 方法添加到回调中。

--- code ---
---
language: js
filename: scripts.js
line_numbers: true
line_number_start: 10
line_highlights: 20
---

// 图像观察器
const lazyImages = document.querySelectorAll("img");
const imageObserver = new IntersectionObserver((entries) => {
  entries.forEach(
    (entry) => {
      if (entry.isIntersecting) {
        setTimeout(
          () => (entry.target.src = entry.target.getAttribute("data-src")),
          1000
        );
        imageObserver.unobserve(entry.target);
      }
    }
  );
});
lazyImages.forEach((lazyImage) => imageObserver.observe(lazyImage));

--- /code ---

**提示**：在第 20 行，`entry` 的 `.target` 属性指的是被观察的元素。 它是进入或退出视口的元素，也是你想要停止跟踪的元素。

--- /task ---

接下来，你将向你的网站添加一个新的网页和导航栏。
