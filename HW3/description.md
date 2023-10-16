# 用 DOM 干更多事
使用Javascript在DOM中新建一个文字内容为`Hello! (click me)`的`p`元素，并为它的父元素`div`添加一个`EventListener`，在点击时弹出对话框。

相关代码如下所示：
```html
<body>
    <div id="div1"></div>
</body>
<script>
    // 新建一个p元素
    var para = document.createElement("p");
    var node = document.createTextNode("Hello! (click me)");
    para.appendChild(node);
    
    // 在DOM中添加这个p元素，添加为div1的子元素
    var element = document.getElementById("div1");
    element.appendChild(para);

    // 在点击时弹出对话框
    element.addEventListener("click", function(){ alert("Hello World!"); });
</script>
</html>
```