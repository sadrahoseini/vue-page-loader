# ⌛️ Sadrix Vue Page Loader ⏳
Simple customizeable page loader component with self state manager module for Vue.js.
 
> ### github [repository](https://github.com/sadrix/vue-page-loader.git) 
> Please let me know what you think about this package.
> Don't forget to report bugs.

## 🎉 version 1 released 🎈

---

## First steps
### 1. Instalation
Install package in your project with this command

``` shell
npm i -S sadrix-vue-page-loader
```

### 2. Import
Import package inside your Vuejs application config file and let you global **`Vue`** instance use it as a plugin.

>The only **important notice** is this plugin use **`Vuex`** package as state manager and you need to import this package first and config it, then pass you store param as an option property with name of **`store`** (with small `s`) and plugin will automaticaly add needed mutaction, states and actions under namespace of **`pageLoader`**.

``` javascript
import SadrixPageLoader from 'sadrix-page-loader';
import Vue from 'vue';
import store from './store/store';
import router from './core/router';
import Page from './layouts/page';

// Let Vue use our plugin
Vue.use(SadrixPageLoader, { store });

// Create app
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(Page)
});
```

### 3. Component
Your done! Now easily can use `<page-loader/>` component any where inside your application.

* **example: in your `.vue` template file**

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
---
## How to use
For faster and easier usage and control on this loader, We add some custom property to `Vue` main module.
You just need to call `showPageLoader(timeout)` when want loader show and how much it take (timeout) to fill window width in `milisecounds` (optionl). default timeout is `10 secounds` or `10000ms`.
And when you want to hide loader easily type `hidePageLoader()`.

* **example: show/hide page loader for and api request**
``` html
<script>
import axios from 'axios';

export default {
    methods: {
        callApi() {
            // for example before making request we want
            // to show the page loader and max in 6 secounds timeout
            this.$showPageLoader();

            // make request
            axios.get('https://someurl.com')
                // on success
                .then(data => {
                    // here we hide page loader
                    this.$hidePageLoader();
                })
                // on error
                .catch(error => {
                    // here we hide page loader
                    this.$hidePageLoader();
                });
        }
    }
}
</script>
```

---


build your amasing app with a beautiful page loader! 😉

