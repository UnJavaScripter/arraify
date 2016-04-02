## Wut?

A simple tool to turn **strings** into **arrays**.

[![demo](https://cloud.githubusercontent.com/assets/7959823/14229365/986aea3a-f8f7-11e5-843e-d8b18117d5c9.png)](http://unjavascripter.github.io/arraify/)

## Yeah but why?

I created this tool when I was making [AngularJS directives](https://docs.angularjs.org/guide/directive, you can define an HTML template string inside the directive definition like:

```javascript
...

.directive('aDirective', function() {
  return {
    template: '<div><h1>The Header!!</h1><ul><li><a href="#"><span class="icon-thing"></span>Option<span></span></a></li></ul></div>'
  };
});

...
```

Luckily you can make this more readable by concatenating strings:

```javascript
...
    template: '<div>' +
        '<h1>The Header!!</h1>' +
        '<ul>' +
            '<li>' +
                '<a href="#">' +
                    '<span class="icon-thing"></span>Option<span></span>' +
                '</a>' +
            '</li>' +
        '</ul>' +
    '</div>'
...
```

Or even more readable and manageable by using an array:

```javascript
...
    template: [
'<div>',
    '<h1>The Header!!</h1>',
    '<ul>',
        '<li>',
            '<a href="#">',
                '<span class="icon-thing"></span>Option<span></span>',
            '</a>',
        '</li>',
    '</ul>',
'</div>'
].join('');

...
```

## Cool! How does it work?

Visit the [demo here](http://unjavascripter.github.io/arraify/), paste your text and hit **Arraify it!**. You'll have your array in the text area in the right with the **original indentation** and Ermm... that's it.


