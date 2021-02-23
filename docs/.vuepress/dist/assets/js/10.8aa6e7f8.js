(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{176:function(s,a,t){"use strict";t.r(a);var n=t(0),e=Object(n.a)({},(function(){var s=this.$createElement;this._self._c;return this._m(0)}),[function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"编写命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#编写命令"}},[s._v("#")]),s._v(" 编写命令")]),s._v(" "),t("p",[s._v("本章将带你编写一个简单的群聊指令，以一个天气查询插件为例，教你如何编写自己的命令。")]),s._v(" "),t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),t("p",[s._v("如果遇到困难，请反复阅读并参考其他Controller文件")])]),s._v(" "),t("h2",{attrs:{id:"新建文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#新建文件"}},[s._v("#")]),s._v(" 新建文件")]),s._v(" "),t("p",[s._v("一切从新建Java文件开始，在"),t("code",[s._v("Controller")]),s._v("路径下，新建文件"),t("code",[s._v("WeatherController.java")]),s._v("，并先在文件内的ClassName上添加"),t("code",[s._v("@GroupController")]),s._v("注解。同时注入"),t("code",[s._v("MessageItemFactory")]),s._v("。"),t("br"),s._v("\n此时文件如下")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("div",{staticClass:"highlight-lines"},[t("br"),t("br"),t("div",{staticClass:"highlighted"},[s._v(" ")]),t("div",{staticClass:"highlighted"},[s._v(" ")]),t("div",{staticClass:"highlighted"},[s._v(" ")]),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br")]),t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("wiki"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")])]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("IceCream")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("yuq"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("demo"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("controller"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("com"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("icecreamqaq"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("yuq"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("annotation"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")])]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("GroupController")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("com"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("icecreamqaq"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("yuq"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("message"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")])]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("MessageItemFactory")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("javax"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("inject"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")])]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Inject")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@GroupController")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("WeatherController")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Inject")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("MessageItemFactory")]),s._v(" mif"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("div",{staticClass:"warning custom-block"},[t("p",{staticClass:"custom-block-title"},[s._v("警告")]),s._v(" "),t("p",[s._v("请务必确认导入包的正确性，导入错误的内容将导致后续操作无法继续进行。")])]),s._v(" "),t("h2",{attrs:{id:"编写内容"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#编写内容"}},[s._v("#")]),s._v(" 编写内容")]),s._v(" "),t("p",[s._v("此时的"),t("code",[s._v("WeatherController")]),s._v("已经可以被视为一个群聊插件了，但是我们并没有向其中添加任何的内容，所以他并不会有任何的反应。接下来我们先为他写一个命令。")]),s._v(" "),t("h3",{attrs:{id:"action"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#action"}},[s._v("#")]),s._v(" Action")]),s._v(" "),t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),t("p",[s._v("在这里开始，对于Java基础的有了简单要求，如果有使用过任何MVC框架，比如Spring，那么这里以及之后的部分将会更容易理解")])]),s._v(" "),t("div",{staticClass:"language-java{} line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('    /**\n     * 此处使用@Action将函数变成指令的响应器\n     * 指令格式应该是 ”weather 南京“\n     * 使用@Synonym使命令拥有别名\n     * 所以”天气 南京“ 和 ”天气预报 南京“ 同样会触发命令\n     */\n    @Action("weather {city}")\n    @Synonym({"天气 {city}","天气预报 {city}"})\n    public Message weather(String city){\n        if(city.equals("")){\n            //使用mif将String变成Message\n            return mif.text("要查询的城市名称不能为空").toMessage();\n        }\n        //使用伴生方法将String变成Message\n        return Message.Companion.toMessage(city+"的天气是。。。。");\n    }\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br")])]),t("p",[s._v("命令的核心应该是"),t("code",[s._v("@Action")]),s._v("，同时可以使用"),t("code",[s._v("@Synonym")]),s._v("来为命令设计别名，除此之外的每一行基本都有注释，仔细阅读即可。")]),s._v(" "),t("h3",{attrs:{id:"before"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#before"}},[s._v("#")]),s._v(" Before")]),s._v(" "),t("p",[s._v("在编写完成一个命令以后，我们可能还想要对命令进行更多的处理，比如我只想要群号为"),t("code",[s._v("12345")]),s._v("的群中的"),t("code",[s._v("122222")]),s._v("才可以触发这个命令。那么我们可以为他添加一个"),t("code",[s._v("@Before")]),s._v("。")]),s._v(" "),t("div",{staticClass:"language-java{} line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('    /**\n     * @param group 信息发送者所在群 YuQ会自动注入\n     * @param qq 信息发送者的ID YuQ会自动注入\n     * @throws DoNone 不做任何事情的异常\n     */\n    @Before\n    public void WeatherBefore(long group,long qq) throws DoNone, Exception{\n        if(group != 12345L) {\n            //通过抛出异常来停止信息前往Action，这个异常只会抛出，但是不会做任何处理。\n            throw new DoNone();\n        }\n        if(qq != 122222L){\n            //将一条Message.toThrowable()会让这个信息返回到信息来源处。可以起到提示的作用。\n            throw mif.text("你无权使用这个类里面的命令").toMessage().toThrowable();\n        }\n    }\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br")])]),t("h3",{attrs:{id:"after"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#after"}},[s._v("#")]),s._v(" After")]),s._v(" "),t("p",[s._v("又或者，我们不对信息的来源进行限制，但是我们想让命令返回的时候增添一个自动@的效果，这样每个人都能看到自己所发出的指令的回馈。我们可以使用"),t("code",[s._v("@After")]),s._v("。")]),s._v(" "),t("div",{staticClass:"language-java{} line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("    /**\n     * After与 Before极其类似，除了出现的时间点不同，使用和逻辑上基本一致\n     * @param reMessage 这是由Action处理完发送的信息，目前还没有交给服务器\n     * @param qq 同Before\n     * @return\n     */\n    @After\n    public Message addNotice(Message reMessage,long qq){\n        //使用mif添加At效果，同理可使用mif添加图片等。\n         return reMessage.plus(mif.at(qq));\n    }\n\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),t("p",[s._v("这只是对于"),t("code",[s._v("@After")]),s._v("使用的介绍，其实在"),t("code",[s._v("@Action")]),s._v("下面增加另外一个注解"),t("code",[s._v("@Qmsg")]),s._v("即可实现这个功能。")])]),s._v(" "),t("h3",{attrs:{id:"catch"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#catch"}},[s._v("#")]),s._v(" Catch")]),s._v(" "),t("p",[s._v("这是在路由中的最后一个注解，主要功能是用于捕获异常，可以帮助我们省去大量重复的try/catch代码。")]),s._v(" "),t("div",{staticClass:"language-java{} line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("    /**\n     * 直接使用注入来获取YuQ对象，对象内存储着Bot的各种信息，包括群列表，好友列表等。\n     */\n    @Inject\n    private YuQ yuq;\n    \n    /**\n     * Catch 与 Before 、 After 类似，但是必须要求参数来捕获指定异常\n     * @param e 这里捕获空指针异常\n     * @return 也并非返回信息来源，而是留给后续使用\n     */\n    @Catch(error = NullPointerException.class)\n    public void reportNullPoint(NullPointerException e){\n        //从YuQ（此时的YuQ是你的Bot）中获取指定对象并且发送信息。\n        yuq.getFriends().get(12345L).sendMessage(mif.text(e.toString()).toMessage());\n    }\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br")])]),t("p",[s._v("在上面的代码中我们最简化的实现了一个错误报告的模块，他会把捕捉到的空指针异常全部发送给ID为12345的对象。")]),s._v(" "),t("h3",{attrs:{id:"结语"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#结语"}},[s._v("#")]),s._v(" 结语")]),s._v(" "),t("p",[s._v("到此为止，一个天气插件基本完成，尽管为了模拟，我们并没有接入真实的API接口，但是其接入也并非难事，善用搜索引擎即可完成。除此之外我在很多地方也用随意的数字指代了具体的号码，在书写时请务必注意。")]),s._v(" "),t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),t("p",[s._v("本章节代码可以点击"),t("a",{attrs:{href:"./code/WeatherController.java"}},[s._v("这里")]),s._v("进行查看。如果有任何问题欢迎加入QQ聊天群（号码：696129128）获取帮助。")])])])}],!1,null,null,null);a.default=e.exports}}]);