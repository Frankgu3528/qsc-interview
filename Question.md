> Question 可能写的有点急，sorry~

### Question 0

>通过常识/查阅相关资料可以知道, canvas 标签是有`width`和`height`属性的, 而 css 中, 我们也可以给 canvas 设置`width`和`height`, 那么它们有什么不同呢? 如果把它们设置了不一样的值又会发生甚么呢? 请谈谈你的理解

1：Canvas 默认的画布宽高是 300 * 150，当你设置标签的 width，height 属性值时，控制的是 Canvas 的元素**本身的宽高**，和 Canvas **画布的宽高**大小。同时设置定了两个值。

2：而 Css 设置 width，height 时，只仅仅控制了 Canvas 元素自身的宽高，而**不会改变 Canvas 画布大小**。

### Question 1

> `const myCanvas = document.getElementById('canvas')` 这条语句执行了什么操作?

getElementById() 方法可返回对拥有指定 ID 的第一个对象的引用。

这里通过传入`canvas`这个ID，返回一个常量元素对象。

> myCanvas是什么类型的变量?

一个常量元素对象。

> `getContext`是什么类型的方法?

DOM类型的方法？

> `myCanvas.getContext()`返回值可能有哪些?

一个 CanvasRenderingContext2D 对象,该对象提供了用于在画布上绘图的方法。

或许在未来还会有"3d"之类的。

#### Question3

> requestAnimationFrame渲染帧的速度与什么有关？你知道 setInterval 函数吗? 使用setInterval函数渲染动画与requestAnimation有何不同?可能会有怎样的问题?谈谈你的理解 

requestAnimationFrame的执行步伐与浏览器的刷新频率一致。知道。setinterval函数一般可以setinterval(function,100)，后面是隔着多少时间调用一次，个人感觉写起来比较直观……

可是setinterval他和显示器的刷新频率无法对应。所以setInterval制作动画的时候会出现丢帧和动画效果生硬不连贯等情况。但requestAnimationFrame就可以更加完美的适配。

## 参考

[倒计时实现](https://zhuanlan.zhihu.com/p/408634143)

[c语言移动格子](https://blog.csdn.net/qq_42366672/article/details/121381172?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522166443817616782427410402%2522%252C%2522scm%2522%253A%252220140713.130102334..%2522%257D&request_id=166443817616782427410402&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~top_positive~default-1-121381172-null-null.142)

[canvas]([(72条消息) 别踩白块-用H5中的Canvas和JavaScript实现。_上海张江拾荒人的博客-CSDN博客](https://blog.csdn.net/SoWhatWorld/article/details/77623211?ops_request_misc=%7B%22request%5Fid%22%3A%22166455074016782417018413%22%2C%22scm%22%3A%2220140713.130102334..%22%7D&request_id=166455074016782417018413&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~sobaiduend~default-1-77623211-null-null.142^v51^control,201^v3^control_1&utm_term=canvas 敲白块&spm=1018.2226.3001.4187))