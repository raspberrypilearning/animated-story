## 为故事添加动画

在此步骤中，你将为标题和图像制作动画。

<iframe src="https://editor.raspberrypi.org/en/embed/viewer/animated-story-complete?page=sammy.html" width="100%" height="800" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen> </iframe>

### 创建触发器

空的 `<div>` 元素可用于触发动画。

\--- task ---

打开 `sammy.html` 文件。

在 `<h1>` 元素上方添加 `<div>` 元素，并赋予其属性 `id="headingTrigger"`。

## --- code ---

language: html
filename: sammy.html
line_numbers: true
line_number_start: 19
line_highlights: 20
--------------------------------------------------------

```
  </section>
  <div id="headingTrigger"></div>
  <h1 id="hideBounce">萨米 <br /><br />蜗牛</h1>
```

\--- /code ---

\--- /task ---

### 切换动画

可以使用交叉观察器来观察刚刚添加到空的 `<div>` 中的 `id`。

如果 `<div>` **离开**视口，回调会将 `enabled` 类添加到 `<h1>` 元素。

`.enabled` 选择器设置标题字体和背景的颜色样式。 它还设置了 `position: sticky` 属性，因此当添加 `enabled` 类时，标题将停留在其当前位置（顶部）。

当目标元素（空的 `<div>`）离开和进入视口时，使用 toggle 方法打开或关闭效果。

\--- task ---

打开 `sammy.js` 文件。

创建一个名为 `headingObserver` 的交叉观察器。

## --- code ---

language: js
filename: sammy.js
line_numbers: true
line_number_start: 9
line_highlights:
-----------------------------------------------------

// 标题观察器
const headingObserver = new IntersectionObserver((entries) => {
document.querySelector("h1").classList.toggle("enabled", !entries[0].isIntersecting);
});
headingObserver.observe(document.querySelector("#headingTrigger"));

\--- /code ---

**点击运行**

- 向下滚动即可看到标题栏，到达顶部时会改变颜色。

\--- collapse ---

---

## title: 标题到达顶部时不会粘住

- 确保在 `entries[0].isIntersecting` 之前有 `!`。

\--- /collapse ---

\--- collapse ---

---

## title: 为什么文本位于标题后面？

在 CSS 中，`z-index` 是一个控制元素在 z 轴（从屏幕向观看者延伸的轴）上的图层顺序的属性。

![侧放的智能手机，以手机屏幕的宽度为 x 轴，长度为 y 轴，z 轴伸出屏幕。](images/phoneAxes.png)

你可以使用 `z-index` 属性使元素出现在彼此的前面或后面。

在 `style.css` 文件中找到 `h1` 选择器。

## --- code ---

language: css
filename: style.css
line_numbers: true
line_number_start: 18
line_highlights: 27
--------------------------------------------------------

h1 {
margin: 0;
color: var(--main-color);
background-color: var(--background-color);
top: 0;
left: 1rem;
padding-left: 2rem;
line-height: 2;
margin-top: 1px;
z-index: 1;
transition: all 300ms;
}

\--- /code ---

选择器设置标题的样式，使其 z-index 为 `1`，这意味着其 z-index 高于其他元素（默认设置为 `0`）。 这意味着标题出现在顶层的其他元素的前面。

**测试：**

- 将 `h1` 选择器的 `z-index` 属性设置为 `-1`。

**点击运行**

- 向下滚动即可看到标题前面的故事文本。
- 测试完成后，将 z-index 设置回 `1`。

\--- /collapse ---

\--- /task ---

\--- collapse ---

---

## title: 使用逻辑非运算符

逻辑 NOT `!` 运算符与回调中的 `isIntersecting` 方法一起使用，因此仅当 `<div>` 不在视口中时才会添加 `enabled` 类。

\--- /collapse ---

### 为角色添加图像

本页介绍的是故事人物之一：蜗牛萨米。

你可以将 Sammy 的图像添加到页面。

首先你需要了解一下 Sammy 的背景。

\--- task ---

打开 `sammy.html` 文件。

添加一个新的 `<section>` 元素，其属性为 `class="garden"`。

## --- code ---

language: html
filename: sammy.html
line_numbers: true
line_number_start: 24
line_highlights: 25-27
-----------------------------------------------------------

```
  </p>
  <section class="garden">
    
  </section>
```

\--- /code ---

\--- /task ---

添加蜗牛图像。

\--- task ---

添加一个 `<img>` 元素，其属性为 `id="snail"`、`class="snail"` 和 alt text，以提高无障碍性。

## --- code ---

language: html
filename: sammy.html
line_numbers: true
line_number_start: 26
line_highlights: 28
--------------------------------------------------------

```
  </p>
  <section class="garden">
    <img id="snail" class="snail" src="snail.svg" data-src="snail.svg" alt="A cartoon snail" />
  </section>
</main>
```

\--- /code ---

\--- /task ---

\--- collapse ---

---

## title: 为什么 `src` 和 `data-src` 都设置为 `snail.svg`？

`src` 和 `data-src` 属性值相同，因为 `imageObserver` 会作用于这个 `<img>` 元素，但我们不希望图像发生改变。

\--- /collapse ---

### 为角色图像添加样式

萨米 (Sammy) 的图像将从左侧出现并移动到中间。 它也会“淡入”。

\--- task ---

打开 `style.css` 文件。

找到 `/* 蜗牛 */` 注释。

添加 `.snail` 选择器。

## --- code ---

language: css
filename: style.css
line_numbers: true
line_number_start: 95
line_highlights: 97-106
------------------------------------------------------------

/\* 蜗牛 \*/

.snail {
opacity: 0;
transform: translateX(-20%);
transition: all 2s ease-out;
height: 20vh;
margin-top: 80vh;
position: relative;
padding-left: 0;
}

/\* 导航栏 \*/

\--- /code ---

\--- collapse ---

---

## title: 图像的样式如何？

`.snail` 选择器将图像的不透明度设置为 `0`，使其不可见。 它还将图像向左移动到其父元素宽度的 25%。

其高度被设置为视口高度的 20%（`20vh`）。 这意味着它将随着浏览器窗口高度的变化而调整大小。

\--- /collapse ---

\--- /task ---

### 显示和移动角色图像

要使图像动起来，你需要将其不透明度更改为 1，使其完全可见。 它还将向右移动其自身宽度的 25%。

\--- task ---

添加 `.startCrawl` 选择器。

## --- code ---

language: css
filename: style.css
line_numbers: true
line_number_start: 95
line_highlights: 107-111
-------------------------------------------------------------

/\* 蜗牛 \*/

.snail {
opacity: 0;
transform: translateX(-20%);
transition: all 2s ease-out;
height: 20vh;
margin-top: 80vh;
position: relative;
padding-left: 0;
}

.startCrawl {
opacity: 1;
transform: translateX(25%);
}

/\* 导航栏 \*/

\--- /code ---

\--- /task ---

### 触发startCrawl动画

该交叉观察器将观察具有属性 `id="snail"`的元素。

如果元素进入视口（`isIntersecting`），回调会将`startCrawl`类添加到元素。

\--- task ---

打开 `sammy.js` 文件。

创建一个名为 `snailObserver` 的交叉观察器。

## --- code ---

language: js
filename: sammy.js
line_numbers: true
line_number_start: 15
line_highlights:
-----------------------------------------------------

// 蜗牛观察器
const snailObserver = new IntersectionObserver((entries) => {
if (entries[0].isIntersecting) {
entries[0].target.classList.add("startCrawl");
}
});
snailObserver.observe(document.querySelector("#snail"));

\--- /code ---

**点击运行**

- 向下滚动即可看到蜗牛进入视口时的动画。

\--- /task ---

### 设定阈值

可以向观察器添加选项，因此只有当一定比例的元素相交时才会触发。

\--- task ---

向观察器添加一个选项，这样只有当所有蜗牛图像都在视口中时才会触发回调。

## --- code ---

language: js
filename: sammy.js
line_numbers: true
line_number_start: 15
line_highlights: 20-22
-----------------------------------------------------------

// 蜗牛观察器
const snailObserver = new IntersectionObserver((entries) => {
if (entries[0].isIntersecting) {
entries[0].target.classList.add("startCrawl");
}
},
{ threshold: 1 }
);
snailObserver.observe(document.querySelector("#snail"));

\--- /code ---

\--- collapse ---

---

## title: 什么是“阈值”选项？

阈值范围从 `0` 到 `1`。

- `1` 表示元素的每个像素都必须位于视口中才能运行回调
- `0` 是默认值，表示只需一个像素相交即可运行回调

\--- /collapse ---

**点击运行**

- 向下滚动可以看到仅当整个图像位于视口中时才开始播放动画。

\--- /task ---
