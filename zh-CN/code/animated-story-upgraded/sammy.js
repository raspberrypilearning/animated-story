// 上升文本观察器
const riseObserver = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    entries[0].target.classList.add("rise");
    riseObserver.unobserve(entries[0].target);
  }
});
riseObserver.observe(document.querySelector("p"));

// 页首观察器
const headingObserver = new IntersectionObserver((entries) => {
  document.querySelector("h1").classList.toggle("enabled", !entries[0].isIntersecting);
});
headingObserver.observe(document.querySelector("#headingTrigger"));

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