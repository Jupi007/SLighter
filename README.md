<h1 align="center">SLighter</h1>

<p align="center">A lightweight slideshow in pure javscript with css animation</p>
<p align="center">See <a href="https://jupiter007-43.github.io/SLighter/demo.html">Demo</a></p>

## Usage

Firstly include the script and the stylesheet (it is recommended to customize them, you can use the .scss and .ts file) on your HTML page:

```html
<!DOCTYPE html>
<html>
  <head>
    ...
    <link rel="stylesheet" href="src/slighter.css">
    ...
  </head>
  <body>
    ...
    <script src="src/slighter.js"></script>
  </body>
```

Then create a slider container with some slide inside:

```html
<!DOCTYPE html>
<html>
  <head>
    ...
  </head>
  <body>
    ...
    <div class="slider">
        <img src="img1.jpg" alt="...">
        <img src="img2.jpg" alt="...">
        <img src="img3.jpg" alt="...">
    </div>
    ...
  </body>
```

And finally active the slideshow:

```js
let slider = new Slighter(
    document.querySelector('.slider'), // your slideshow container
    5000 // frame duration in ms
);
```

---

<p align="center">All images from this repository are all rights reserved © Paul Kepinski</p>
