// 隐藏弹跳观察器
const bounceObserver = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    console.log("视口中的回弹触发器");
    document.querySelector("#bounce").style.opacity = 0;
    bounceObserver.unobserve(entries[0].target);
  }
});
bounceObserver.observe(document.querySelector("#hideBounce"));

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
