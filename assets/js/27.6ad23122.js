(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{618:function(s,a,t){"use strict";t.r(a);var n=t(23),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"变量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#变量"}},[s._v("#")]),s._v(" 变量")]),s._v(" "),t("p",[s._v("变量其实只不过是程序可操作的存储区的名称。C 中每个变量都有特定的类型，类型决定了变量存储的大小和布局，该范围内的值都可以存储在内存中，运算符可应用于变量上。")]),s._v(" "),t("h2",{attrs:{id:"常量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常量"}},[s._v("#")]),s._v(" 常量")]),s._v(" "),t("p",[s._v("常量是固定值，在程序执行期间不会改变。这些固定的值，又叫做"),t("strong",[s._v("字面量")]),s._v("。")]),s._v(" "),t("p",[s._v("常量可以是任何的基本数据类型，比如整数常量、浮点常量、字符常量，或字符串字面值，也有枚举常量。")]),s._v(" "),t("p",[t("strong",[s._v("常量")]),s._v("就像是常规的变量，只不过常量的值在定义后不能进行修改。")]),s._v(" "),t("h3",{attrs:{id:"整数常量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#整数常量"}},[s._v("#")]),s._v(" 整数常量")]),s._v(" "),t("p",[s._v("数常量可以是十进制、八进制或十六进制的常量。前缀指定基数：0x 或 0X 表示十六进制，0 表示八进制，不带前缀则默认表示十进制。")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("212         /* 合法的 */\n215u        /* 合法的 */\n0xFeeL      /* 合法的 */\n078         /* 非法的：8 不是八进制的数字 */\n032UU       /* 非法的：不能重复后缀 */\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("整数常量的实例")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("85         /* 十进制 */\n0213       /* 八进制 */\n0x4b       /* 十六进制 */\n30         /* 整数 */\n30u        /* 无符号整数 */\n30l        /* 长整数 */\n30ul       /* 无符号长整数 */\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("h3",{attrs:{id:"浮点常量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#浮点常量"}},[s._v("#")]),s._v(" 浮点常量")]),s._v(" "),t("p",[s._v("浮点常量由整数部分、小数点、小数部分和指数部分组成。您可以使用小数形式或者指数形式来表示浮点常量。")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("3.14159       /* 合法的 */\n314159E-5L    /* 合法的 */\n510E          /* 非法的：不完整的指数 */\n210f          /* 非法的：没有小数或指数 */\n.e55          /* 非法的：缺少整数或分数 */\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h3",{attrs:{id:"字符常量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#字符常量"}},[s._v("#")]),s._v(" 字符常量")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("转义序列")]),s._v(" "),t("th",[s._v("含义")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("\\")]),s._v(" "),t("td",[s._v("\\ 字符")])]),s._v(" "),t("tr",[t("td",[s._v("'")]),s._v(" "),t("td",[s._v("' 字符")])]),s._v(" "),t("tr",[t("td",[s._v('"')]),s._v(" "),t("td",[s._v('" 字符')])]),s._v(" "),t("tr",[t("td",[s._v("?")]),s._v(" "),t("td",[s._v("? 字符")])]),s._v(" "),t("tr",[t("td",[s._v("\\a")]),s._v(" "),t("td",[s._v("警报铃声")])]),s._v(" "),t("tr",[t("td",[s._v("\\b")]),s._v(" "),t("td",[s._v("退格键")])]),s._v(" "),t("tr",[t("td",[s._v("\\f")]),s._v(" "),t("td",[s._v("换页符")])]),s._v(" "),t("tr",[t("td",[s._v("\\n")]),s._v(" "),t("td",[s._v("换行符")])]),s._v(" "),t("tr",[t("td",[s._v("\\r")]),s._v(" "),t("td",[s._v("回车")])]),s._v(" "),t("tr",[t("td",[s._v("\\t")]),s._v(" "),t("td",[s._v("水平制表符")])]),s._v(" "),t("tr",[t("td",[s._v("\\v")]),s._v(" "),t("td",[s._v("垂直制表符")])]),s._v(" "),t("tr",[t("td",[s._v("\\ooo")]),s._v(" "),t("td",[s._v("一到三位的八进制数")])]),s._v(" "),t("tr",[t("td",[s._v("\\xhh . . .")]),s._v(" "),t("td",[s._v("一个或多个数字的十六进制数")])])])]),s._v(" "),t("h3",{attrs:{id:"字符串常量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#字符串常量"}},[s._v("#")]),s._v(" 字符串常量")]),s._v(" "),t("p",[s._v("字符串字面值或常量是括在双引号 "),t("strong",[s._v('""')]),s._v(" 中的。一个字符串包含类似于字符常量的字符：普通的字符、转义序列和通用的字符。")]),s._v(" "),t("p",[s._v("下面这三种形式所显示的字符串是相同的。")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('"hello, dear"\n\n"hello, \\\n\ndear"\n\n"hello, " "d" "ear"\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("h3",{attrs:{id:"定义常量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#定义常量"}},[s._v("#")]),s._v(" 定义常量")]),s._v(" "),t("p",[s._v("在 C 中，有两种简单的定义常量的方式：")]),s._v(" "),t("ul",[t("li",[s._v("使用 #define 预处理器。")]),s._v(" "),t("li",[s._v("使用 const 关键字。")])]),s._v(" "),t("h4",{attrs:{id:"define-预处理器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#define-预处理器"}},[s._v("#")]),s._v(" #define 预处理器")]),s._v(" "),t("p",[s._v("下面是使用 #define 预处理器定义常量的形式：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("#define identifier value\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("div",{staticClass:"language-c line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-c"}},[t("code",[t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("include")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("<stdio.h>")])]),s._v("\n \n"),t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("define")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token macro-name"}},[s._v("LENGTH")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token expression"}},[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("   ")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("define")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token macro-name"}},[s._v("WIDTH")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token expression"}},[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")])])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("define")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token macro-name"}},[s._v("NEWLINE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\\n'")])]),s._v("\n \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n \n   "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" area"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  \n  \n   area "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" LENGTH "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" WIDTH"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("printf")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"value of area : %d"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" area"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("printf")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%c"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" NEWLINE"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n \n   "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br")])]),t("p",[s._v("当上面的代码被编译和执行时，它会产生下列结果：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("value of area : 50\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h4",{attrs:{id:"const-关键字"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#const-关键字"}},[s._v("#")]),s._v(" const 关键字")]),s._v(" "),t("div",{staticClass:"language-c line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-c"}},[t("code",[t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("include")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("<stdio.h>")])]),s._v("\n \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v("  LENGTH "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v("  WIDTH  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),s._v(" NEWLINE "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\\n'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" area"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  \n   \n   area "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" LENGTH "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" WIDTH"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("printf")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"value of area : %d"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" area"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("printf")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%c"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" NEWLINE"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n \n   "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br")])]),t("p",[s._v("当上面的代码被编译和执行时，它会产生下列结果：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("value of area : 50\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("请注意，把常量定义为大写字母形式，是一个很好的编程习惯。")])])}),[],!1,null,null,null);a.default=e.exports}}]);