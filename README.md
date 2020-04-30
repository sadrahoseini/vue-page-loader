# ⌛️ Sadrix Vue Page Loader ⏳
Simple customizeable page loader component with self state manager module for Vue.js.
 
> ### github [repository](https://github.com/sadrix/vue-page-loader.git) 
> Please let me know what you think about this package.
> Don't forget to report bugs.

## 🎉 version 1 released 🎈

## How to use
### 1. Instalation
Install package in your project with this command

``` shell
npm i -S sadrix-vue-page-loader
```

### 2. Import
Import package inside your Vuejs application config file and let you global `Vue` instance use it as a plugin:

``` javascript
import SadrixPageLoader from 'sadrix-page-loader';
import Vue from 'vue';

Vue.use(SadrixPageLoader);
```

### 3. Component
Your done! Now easily can use `<page-loader/>` component any where inside your application.

**example: in your `.vue` template file**

``` html
<div>
    <page-loader/>
</div>
```

### 4. customization
Yes! you can easily customize your page loader from your components attributes and passing props to component.

* **example: change color of loader**

``` html
<div>
    <page-loader color="#ff5252"/>
</div>
```
> ### 🎨 Sadrix Vue Color
> For faster and easier use of colors in js project we also publish an amasing `Vue.js` plugin. you can use it to pass colors in your project easily.
> **[Github](https://github.com/sadrix/vue-color.git)**
> **[npm](https://www.npmjs.com/package/sadrix-vue-color)**

* **example: change height of page loader**
Please note you need to pass height prop as a `Number` (Don't forget `:` of height attr).

``` html
<div>
    <page-loader :height="3"/>
</div>
```

* **example: wow!😯 RTL support 😍**
Its easy! just pass `:rtl="true"`.

``` html
<div>
    <page-loader :rtl="true"/>
</div>
```


build your amasing app with a beautiful page loader! 😉

