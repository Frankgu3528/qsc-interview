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
### Reflection

> 心得体会&想说的

**首先感谢qsc给我这次面试机会，我也真的很想进入qsc~**

这一周可以说是非常忙碌的一周，我的通核课pre，专业课ddl，qsc二面都堆积在一起。我清楚的记得连吃饭都是跑着走，一有空就掏出电脑写点什么东西下来，凌晨还在对着电脑，可以说是有种回到高中的感觉……

但很幸运，我坚持下来了，而且我对自己的表现还不算失望！

首先我此前在前端方面可以说是零基础小白，对html的了解局限于在typora中可以用html控制字体大小，css，js对我来说可以说是一门全新的语言。通过这次二面，我很惊喜地发现我居然能在一周之内上手这三门language。

在写项目中我也遇到了很多问题。中间有好几次我都想放弃，~~怀疑为什么要花一周时间折磨自己~~，但我如今可以自豪地对自己说：**我坚持下来了**。比如如何操作每一个格子，我想了很多方法去实现，代码写了又删，删了又写，最终选用一个二维的数组去实现。在让格子下落的时候，我想了很久这些格子内部要怎么移动，然后某个瞬间突然顿悟想到了一个新方法最终解决了问题，让我欣喜若狂。

最后，引用一句诗句：**高通荆门路,阔会沧海潮**

荆棘路已在身后，沧海潮现于眼前

与诸君共勉~

> 这篇文章打几分？

9分吧~感觉写的指导挺详细的……而且给了很多网站链接可以自学。

扣分扣在那个demo.gif有点不那么容易理解吧，当时一开始想错了QAQ~
