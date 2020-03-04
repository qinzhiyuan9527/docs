---
lang: en-US
---
# 浏览器兼容问题

#### 不同浏览器的标签默认的外补丁和内补丁不同

>即随便写几个标签, 在不加样式控制的情况下, 各自的margin和padding差异较大
``` css
/* 解决办法 */
* {
    margin: 0;
    padding: 0;
}
```

#### 块属性标签float后，又有横行的margin情况下，在IE6显示margin比设置的大会使得ie6后面的一块被顶到下一行
``` tex
解决方案: 在float的标签样式中加入 display: inline; 将其转化为行内属性
```
#### 设置较小高度标签（一般小于10px），在IE6，IE7，遨游中高度超出自己设置高度

``` tex {3}
IE6、7和遨游里这个标签的高度不受控制，超出自己设置的高度

解决方案: 给超出高度的标签设置overflow:hidden;或者设置行高line-height 小于你设置的高度

原因: ie8之前的浏览器都会给标签一个最小默认的行高的高度. 
即使标签是空的,这个标签的高度还是会达到默认的行高.
```

#### 行内属性标签，设置display:block后采用float布局，又有横行的margin的情况，IE6间距bug
``` tex
解决: 在display:block;后面加入display:inline;display:table;
```
#### 图片默认有间距
>几个img标签放在一起的时候，有些浏览器会有默认的间距，加了问题一中提到的通配符也不起作用。
``` tex
解决: 使用float属性为img布局
```
#### 标签最低高度设置min-height不兼容
``` tex
因为min-height本身就是一个不兼容的CSS属性，所以设置min-height时不能很好的被各个浏览器兼容

如果我们要设置一个标签的最小高度200px，需要进行的设置为：
```
#### 透明度的兼容CSS设置

>使用hacker
``` tex
IE6认识的hacker是下划线_和*

IE7,遨游认识的hacker是*
```
#### IE ol的序号全为1, 不递增
``` tex
解决: li设置样式
```
#### ie6,7不支持display:inline-block

>解决方法: 设置inline并触法haslayout
``` css
display:inline-block;
*display:inline;
*zoom:1;
```