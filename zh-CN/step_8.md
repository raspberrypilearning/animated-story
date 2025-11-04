## 升级你的项目

如果你有时间，你可以：

- 从 `index.html` 简介页面添加另一个页面，用于第二个角色
- 从 `imageObserver` 中删除 `setTimeout`
- 使用 `unobserve` 提高浏览器性能

\--- collapse ---

---

## title: 添加贝拉的故事页面

\--- task ---

- **单击**“+ 添加文件”按钮。

![“添加文件”按钮。](images/addFile.png)

- 将新文件命名为 `bella.html` 并单击**添加文件**按钮。

\--- /task ---

\--- task ---

打开文件 `sammy.html`。

选择所有 HTML（Ctrl + A 或 Cmd + A）。

复制选定的 HTML（Ctrl + C 或 Cmd + C）。

打开 `bella.html` 文件并将 HTML 粘贴到其中（Ctrl + V 或 Cmd + V）。

\--- /task ---

\--- task ---

更改页面标题。

## --- code ---

language: html
filename: bella.html
line_numbers: true
line_number_start: 6
line_highlights:
-----------------------------------------------------

```
<title>贝拉</title>
```

\--- /code ---

\--- /task ---

\--- task ---

将新链接添加到所有三个 HTML 页面的导航栏。

## --- code ---

language: html
filename:
line_numbers: true
line_number_start: 13
line_highlights: 15
--------------------------------------------------------

```
  <a href="index.html">简介</a>
  <a href="sammy.html">萨米</a>  
  <a href="bella.html">贝拉</a>
```

\--- /code ---

\--- /task ---

\--- task ---

打开 `bella.html`

更改 `<h1>` 文本：

## --- code ---

language: html
filename: bella.html
line_numbers: true
line_number_start: 22
line_highlights:
-----------------------------------------------------

```
  <h1 id="hideBounce">贝拉<br /><br />蝴蝶</h1>
```

\--- /code ---

\--- /task ---

\--- task ---

添加有关蝴蝶贝拉的故事文本。

## --- code ---

language: html
filename: bella.html
line_numbers: true
line_number_start: 23
line_highlights: 24
--------------------------------------------------------

```
  <p>
  在阳光明媚的花园里，蝴蝶贝拉在花丛间翩翩起舞，她的翅膀涂上了耀眼的蓝色、橙色和粉色。<br /><br />每次优雅的扑扇都带来快乐，她探索着隐秘的角落，发现了充满她小小世界的美丽。<br /><br />遇到其他蝴蝶后，贝拉加入了蝴蝶芭蕾，在天空中创造出一幅活生生的杰作。<br /><br />花园拥抱着她，将每一刻都变成了对生命的庆祝。<br /><br />就像蜗牛萨米一样，贝拉意识到即使在它们世界最小的角落里，也有秘密和奇迹等待着被发掘。<br /><br />在这个阳光明媚的天堂里，萨米和贝拉的花园充满了欢乐。
  </p>
```

\--- /code ---

你可以添加自己的故事，使该页面成为你自己的页面！

\--- /task ---

\--- task ---

更改 `<img>` 元素。

## --- code ---

language: html
filename: bella.html
line_numbers: true
line_number_start: 27
line_highlights:
-----------------------------------------------------

```
    <img id="butterfly" class="butterfly" src="butterfly.png" data-src="butterfly.png" alt="A cartoon butterfly" />
```

\--- /code ---

\--- /task ---

你应该创建一个包含此页面所需脚本的新 JavaScript 文件。

\--- task ---

创建一个新的 JavaScript 文件，其中包含与 `bella.html` 相关的脚本。

- **点击**“+ 添加文件”按钮

![“添加文件”按钮。](images/addFile.png)

- 将新文件命名为 `bella.js` 并单击**添加文件**按钮。

\--- /task ---

\--- task ---

打开 `sammy.js` 文件。

将 `sammy.js` 的内容复制到“bella.js”。

\--- /task ---

\--- task ---

更改 `snailObserver` 来创建 `butterflyObserver`。

## --- code ---

language: js
filename: bella.js
line_numbers: true
line_number_start: 16
line_highlights: 16, 17, 19, 24
--------------------------------------------------------------------

// 蝴蝶观察器
const butterflyObserver = new IntersectionObserver((entries) => {
if (entries[0].isIntersecting) {
entries[0].target.classList.add("startFly");
}
},
{ threshold: 1 }
);
butterflyObserver.observe(document.querySelector("#butterfly"));

\--- /code ---

\--- /task ---

你需要从 `bella.html` 链接 `bella.js` 文件。

\--- task ---

打开 `bella.html` 文件。

将第二个 `<script>` 元素的 `src` 属性从 `src="sammy.js"` 更改为 `src="bella.js"`。

## --- code ---

language: html
filename: bella.html
line_numbers: true
line_number_start: 31
line_highlights: 32
--------------------------------------------------------

  <script type="text/javascript" src="scripts.js"></script>

  <script type="text/javascript" src="bella.js"></script>

\--- /code ---

\--- /task ---

\--- task ---

打开 `style.css` 文件并复制 `.snail` 选择器，然后将其粘贴到 `.startCrawl` 选择器下方。

将其重命名为 `.butterfly`。

添加 `animation`属性。

## --- code ---

language: css
filename: style.css
line_numbers: true
line_number_start: 107
line_highlights: 112, 121
--------------------------------------------------------------

.startCrawl {
opacity: 1;
transform: translateX(25%);
}

.butterfly {
opacity: 0;
transform: translateX(-20%);
transition: all 2s ease-out;
height: 20vh;
width: 20vh;
margin-top: 80vh;
position: relative;
padding-left: 0;
animation: fly 3s infinite;
}

/\* 导航栏 \*/

\--- /code ---

\--- /task ---

\--- task ---

添加一个名为 `.startFly` 的新选择器。

## --- code ---

language: css
filename: style.css
line_numbers: true
line_number_start: 124
line_highlights: 124 - 128
---------------------------------------------------------------

.startFly {
opacity: 1;
animation: fly 2s infinite;
}

/\* 导航栏 \*/

\--- /code ---

\--- /task ---

为贝拉创建一个新的动画。

\--- task ---

找到 `/* 动画 */` 注释。

添加一个名为 `fly` 的新 `@keyframes` 动画以适合蝴蝶角色。

## --- code ---

language: css
filename: style.css
line_numbers: true
line_number_start: 51
line_highlights: 53 - 76
-------------------------------------------------------------

/\* 动画 \*/

@keyframes fly {
0%,
20%,
50%,
80%,
100% {
transform: translateY(-10px);
}
10% {
transform: translateY(-20px);
}
30% {
transform: translateY(-10px);
}
40% {
transform: translateY(-5px);
}
60% {
transform: translateY(-20px);
}
70% {
transform: translateY(-15px);
}
}

\--- /code ---

\--- /task ---

\--- /collapse ---

\--- collapse ---

---

## title: 删除 setTimeout

你可以删除 `imageObserver` 中的 `setTimeout`，因为你不希望人们在没有必要的情况下看到旋转图像。

\--- task ---

打开 `scripts.js` 文件。

删除 `setTimeout`。

## --- code ---

language: js
filename: scripts.js
line_numbers: true
line_number_start: 10
line_highlights: 16
--------------------------------------------------------

// 图像观察器
const lazyImages = document.querySelectorAll("img");
const imageObserver = new IntersectionObserver((entries) => {
entries.forEach(
(entry) => {
if (entry.isIntersecting) {
entry.target.src = entry.target.getAttribute("data-src");
imageObserver.unobserve(entry.target);
}
}
);
});
lazyImages.forEach((lazyImage) => imageObserver.observe(lazyImage));

\--- /code ---

\--- /task ---

\--- /collapse ---

\--- collapse ---

---

## title: 使用 unobserve 提高浏览器性能

你已在 `imageObserver` 中使用了 `unobserve` 方法。

将 `unobserve` 方法添加到其他交叉口观察器回调中。

\--- task ---

打开 `scripts.js` 文件。

将 `unobserve` 方法添加到 `bounceObserver` 的回调方法中。

## --- code ---

language: js
filename: scripts.js
line_numbers: true
line_number_start: 1
line_highlights: 6
-------------------------------------------------------

// 隐藏弹跳观察器
const bounceObserver = new IntersectionObserver((entries) => {
if (entries[0].isIntersecting) {
console.log("视口中的弹跳触发器");
document.querySelector("#bounce").style.opacity = 0;
bounceObserver.unobserve(entries[0].target);
}
});
bounceObserver.observe(document.querySelector("#hideBounce"));

\--- /code---

\--- /task ---

\--- task ---

打开 `sammy.js` 文件。

将 `unobserve` 方法添加到 `riseObserver` 的回调中。

## --- code ---

language: js
filename: sammy.js
line_numbers: true
line_number_start: 1
line_highlights: 5
-------------------------------------------------------

// 上升文本观察器
const riseObserver = new IntersectionObserver((entries) => {
if (entries[0].isIntersecting) {
entries[0].target.classList.add("rise");
riseObserver.unobserve(entries[0].target);
}
});
riseObserver.observe(document.querySelector("p"));

\--- /code---

\--- /task ---

\--- task ---

将 `unobserve` 方法添加到 `snailObserver` 回调中。

## --- code ---

language: js
filename: sammy.js
line_numbers: true
line_number_start: 16
line_highlights: 20
--------------------------------------------------------

// 蜗牛观察器
const snailObserver = new IntersectionObserver((entries) => {
if (entries[0].isIntersecting) {
entries[0].target.classList.add("startCrawl");
snailObserver.unobserve(entries[0].target);
}
},
{ threshold: 1 }
);
snailObserver.observe(document.querySelector("#snail"));

\--- /code---

\--- /task ---

\--- task ---

打开 `bella.js` 文件。

将 `unobserve` 方法添加到 `riseObserver` 的回调中。

## --- code ---

language: js
filename: bella.js
line_numbers: true
line_number_start: 1
line_highlights: 5
-------------------------------------------------------

// 上升文本观察器
const riseObserver = new IntersectionObserver((entries) => {
if (entries[0].isIntersecting) {
entries[0].target.classList.add("rise");
riseObserver.unobserve(entries[0].target);
}
});
riseObserver.observe(document.querySelector("p"));

\--- /code---

\--- /task ---

\--- task ---

将 `unobserve` 方法添加到 `butterflyObserver` 回调中。

## --- code ---

language: js
filename: bella.js
line_numbers: true
line_number_start: 16
line_highlights: 20
--------------------------------------------------------

// 蝴蝶观察器
const butterflyObserver = new IntersectionObserver((entries) => {
if (entries[0].isIntersecting) {
entries[0].target.classList.add("startFly");
butterflyObserver.unobserve(entries[0].target);
}
},
{ threshold: 1 }
);
butterflyObserver.observe(document.querySelector("#butterfly"));

\--- /code---

\--- /task ---

\--- /collapse ---

\--- collapse ---

---

## title: 查看升级后的项目

<iframe src="https://editor.raspberrypi.org/en/embed/viewer/animated-story-upgraded?page=bella.html" width="100%" height="800" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen> </iframe>

你可以在此处查看 [升级后的项目文件](https://editor.raspberrypi.org/en/projects/animated-story-upgraded){:target="_blank"}。

\--- /collapse ---
