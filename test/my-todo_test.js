import {MyTodo} from '../my-todo.js';
import {fixture, html} from '@open-wc/testing';

const assert = chai.assert;

suite('my-todo', () => {
  test('is defined', () => {
    const el = document.createElement('my-todo');
    assert.instanceOf(el, MyTodo);
  });

  test('renders with default values', async () => {
    const el = await fixture(html`<my-todo></my-todo>`);
    assert.shadowDom.equal(
      el,
      `
      <h1>Hello, World!</h1>
      <button part="button">Click Count: 0</button>
      <slot></slot>
    `
    );
  });

  test('renders with a set name', async () => {
    const el = await fixture(html`<my-todo name="Test"></my-todo>`);
    assert.shadowDom.equal(
      el,
      `
      <h1>Hello, Test!</h1>
      <button part="button">Click Count: 0</button>
      <slot></slot>
    `
    );
  });

  test('handles a click', async () => {
    const el = await fixture(html`<my-todo></my-todo>`);
    const button = el.shadowRoot.querySelector('button');
    button.click();
    await el.updateComplete;
    assert.shadowDom.equal(
      el,
      `
      <h1>Hello, World!</h1>
      <button part="button">Click Count: 1</button>
      <slot></slot>
    `
    );
  });
});
