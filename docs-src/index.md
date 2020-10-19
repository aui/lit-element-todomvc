---
layout: page.11ty.cjs
title: <my-todo> ⌲ Home
---

# &lt;my-todo>

`<my-todo>` is an awesome element. It's a great introduction to building web components with LitElement, with nice documentation site as well.

## As easy as HTML

<section class="columns">
  <div>

`<my-todo>` is just an HTML element. You can it anywhere you can use HTML!

```html
<my-todo></my-todo>
```

  </div>
  <div>

<my-todo></my-todo>

  </div>
</section>

## Configure with attributes

<section class="columns">
  <div>

`<my-todo>` can be configured with attributed in plain HTML.

```html
<my-todo name="HTML"></my-todo>
```

  </div>
  <div>

<my-todo name="HTML"></my-todo>

  </div>
</section>

## Declarative rendering

<section class="columns">
  <div>

`<my-todo>` can be used with declarative rendering libraries like Angular, React, Vue, and lit-html

```js
import {html, render} from 'lit-html';

const name="lit-html";

render(html`
  <h2>This is a &lt;my-todo&gt;</h2>
  <my-todo .name=${name}></my-todo>
`, document.body);
```

  </div>
  <div>

<h2>This is a &lt;my-todo&gt;</h2>
<my-todo name="lit-html"></my-todo>

  </div>
</section>
