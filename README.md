## 在页面中引入js

```html
<script src="../dist/log-sdk.js"></script>
```

## 向后端发送日志数据

```javascript
$(document).ready(function () {
    $('button').click(function () {
        logSDk.sendLog({test:'test'});
    });
});
```
