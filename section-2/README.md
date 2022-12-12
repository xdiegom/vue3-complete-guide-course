
# **Core features**
<picture>
      <source srcset="https://avatars.githubusercontent.com/u/6128107?s=200&v=4" media="(prefers-color-scheme: dark)" alt="VueJS" />
      <svg style="position: absolute; top:2; right: 250px; padding-top: 18px; padding-left: 19px" viewBox="0 0 128 128" width="24" height="24" data-v-e0ef77de=""><path fill="#42b883" d="M78.8,10L64,35.4L49.2,10H0l64,110l64-110C128,10,78.8,10,78.8,10z" data-v-e0ef77de=""></path><path fill="#35495e" d="M78.8,10L64,35.4L49.2,10H25.6L64,76l38.4-66H78.8z" data-v-e0ef77de=""></path></svg>
</picture>

## **Data**

Is a function that is declared inside in a Vue instance and it MUST return an object that contains any kind of attributes, e.g: string, array, boolean, objects, etc.

```js
{
  data() {
    return {
      foo: 'bar',
      isAdmin: true,
      number: [1,2,3,4,5],
      person: {
        name: "Diego Melgar",
        age: 30
      }
    }
  }
}
```

## **Interpolation**

Is a process in which Vue detects and insert the variables, methods, functions that returns a result (string, object, boolean, numbers, arrays) inside HTML code using curly braces `{{ foo }}`

```html
<p>This is an example of inteporalate <strong>foo</strong> variable: {{ foo }}</p>
```

## **Directives**

Is an instruction that tells Vue to do something. There are many built-in directives that Vue has that will be covered in all this notes.

Sometimes you may want to "interpolate" something that highlights a value that is not part of Vue, that is informative. For example, an external link that will be "stored" in a text and for that we can use a directive that is called [`v-bind` ](https://vuejs.org/api/built-in-directives.html#v-bind) like this:

```html
<!-- index.html -->
<div id="app">
  <p>You can learn Vue <a v-bind:href="vueURL">here</a></p>
</div>
```

```js
// app.js
Vue.createApp({
  data() {
    return {
      vueURL: "https://vuejs.org",
    };
  },
});
```

`vueURL` must be declared inside the object that `data()` function returns in a Vue instance and in this case it will be bind into the `hreft` attribute of the `anchor <a>` tag which yields:

```
<p>You can learn Vue <a href="https://vuejs.org">here</a>
```

## Method

Allows you to define functions which should execute when something happens.

In order to declare methods inside a Vue instance, we declare a reserved attribute name called `methods` which is an object that holds as many functions or methods as you want.

⚠️ This attribute is not part of the `data()` function, it is another attribute of the Vue instance.

```html
<!-- index.html  -->
<div id="app">
  <p>The sum of {{ a }} and {{ b }} is: {{ sum() }}</p>
</div>
```

```js
// app.js
Vue.createApp({
  data() {
    return {
      a: 1,
      b: 2,
    };
  },
  methods: {
    sum() {
      return this.a + this.b;
    },
  },
});
```

## Working with data inside Vue app

As you may seen before, when you are working with data inside a Vue instance, you MUST use the keyword `this` inside of methods and all other core concepts that it will be avaialable to work with. 

## HTML directive

Sometimes there are some scenarios where you may received HTML code with data in it from an API response. For that, Vue has an special directive called `v-html` to output raw HTML.

⚠️ As the documentation says, using this directive can be very dangerous because it can easily lead to [XSS](https://owasp.org/www-community/attacks/xss) (Cross Site Scripting) attacks. Thus, we should be aware that if we use this directive inside a Vue App is because we trust the source of content.

On the other hand, if we use inteporlation with HTML content, Vue won't output the content as raw HTML, but instead will treat it as text and escape any special characters to prevent potential cross-site scripting attacks.