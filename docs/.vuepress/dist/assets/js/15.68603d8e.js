(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{182:function(n,r,v){"use strict";v.r(r);var _=v(0),e=Object(_.a)({},(function(){var n=this.$createElement;this._self._c;return this._m(0)}),[function(){var n=this,r=n.$createElement,v=n._self._c||r;return v("div",{staticClass:"content"},[v("h2",{attrs:{id:"yuq-是啥"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#yuq-是啥"}},[n._v("#")]),n._v(" YuQ 是啥")]),n._v(" "),v("p",[n._v("一个 Java 程序的开发框架吧。"),v("br"),n._v("\n虽然不是很想承认，但是我可能还是把它写成了类 Spring 的框架。"),v("br"),n._v("\n我个人不是很喜欢 Spring，他对我而言太大了。"),v("br"),n._v("\n而且说实话，Spring 的运行时性能并不优秀，我虽然不能写出来比 Spring 更优秀的框架，但是我能写出来比 Spring 更适合我的框架，也更贴近我心里的那个优秀的框架。")]),n._v(" "),v("h2",{attrs:{id:"为什么要造轮子"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#为什么要造轮子"}},[n._v("#")]),n._v(" 为什么要造轮子")]),n._v(" "),v("p",[n._v("YuQ 本身只是当时想写一个 QQ 机器人，无奈由于当时的开发环境过于繁琐，就想造个轮子降低工作量。"),v("br"),n._v("\n写过 Web 的同学应该能理解，接触到现代 MVC 之后，就很难再有当年那种抄起 Request，Response 直接上的心情了。")]),n._v(" "),v("p",[n._v("当时的 QQ 机器人开发就是那么的严峻，收到消息，开始一步一步的处理，大量的指令重复的判断，这会浪费掉一个人所有的耐心。"),v("br"),n._v('\n当你仅凭爱好而去做一个枯燥重复的劳动的时候，耐心很快就会被消磨干净，最后剩下的只有"我到底为什么要写这个玩意？"')]),n._v(" "),v("p",[n._v("当初我想做的东西很简单，就是一个简单的路由映射，帮我把具体的消息映射到指定的方法。"),v("br"),n._v("\n后来想着想着，既然方法都映射了，消息需要的参数也一并映射过来吧。")]),n._v(" "),v("p",[n._v("于是，我的工作就开始了。"),v("br"),n._v("\n搞着搞着路由部分，我就在想既然 Class 都由框架来加载并管理了，就顺手写一个依赖注入吧。"),v("br"),n._v("\n然后在测试的途中，发现一遍遍的打包，重启，测试太麻烦了，于是我又引入了运行时重载的特性。"),v("br"),n._v("\n于是最开始版本的雏形出来了。"),v("br"),n._v("\n一个带有路由映射，依赖注入，运行时重载的 QQ 机器人开发框架就出来了。")]),n._v(" "),v("p",[n._v("到后来，脑子一抽，忽然想，既然我的脏活累活都由框架来做了，那我只要替换掉底层的转换层，将插件在各个 QQ 机器人中平移应该也没有什么难度。"),v("br"),n._v("\n从最开始我就已经开始布局跨各个 QQ 机器人平台的插件。"),v("br"),n._v("\n只不过这件事我到现在还没做好。（不过快了）")]),n._v(" "),v("p",[n._v("当时的主要目标在于完善框架的工作。"),v("br"),n._v("\n为了满足复杂的需求，我又搞了一套 EventBus，来实现各个事件的响应，以及某些应用的自定义事件的需求。"),v("br"),n._v("\n这也是为了以后制作带有 Session 的机器人所准备的。")]),n._v(" "),v("p",[n._v("直到最近。"),v("br"),n._v("\n我完成了 Web MVC 部分的开发，当然，View 层不是目前的主力。"),v("br"),n._v("\n这个 Web 出现的意义主要是为了接下来基于 Xposed 的机器人 Runtime 所做的准备。\n毕竟我不想改一两个字就打包扔到 Android 上测试。\n通过 Web 调用的开发还是很需要的。")]),n._v(" "),v("p",[n._v("与此同时，我将原本的 YuQ Framework 拆分为 Core - API - Runtime 几份。"),v("br"),n._v("\n为了接下来框架可以承载微信机器人而做准备。"),v("br"),n._v("\n同时，YuQ-Core 也将成为之后所有后续开发的基石。"),v("br"),n._v("\n毕竟，把机器人的东西扒出去，这个东西剩下来的功能可以很完美的适用于接下来的开发，并能可观的降低开发成本。")])])}],!1,null,null,null);r.default=e.exports}}]);