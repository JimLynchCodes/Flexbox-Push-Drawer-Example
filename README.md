

# Flexbox-Push-Drawer-Example
An AngularJS 1.5 example of a basic Flexbox layout with a "push drawer" side menu.  

Live Demo: [https://JimTheMan.github.io/Flexbox-Push-Drawer-Example](https://JimTheMan.github.io/Flexbox-Push-Drawer-Example)

This project is a simple example of a "push drawer", which is a slide of menu that *pushes* and squishes the content in the center panel as it expands. Then when the drawer closes the center panel stretches to fill the given space. Here, we're using a Flexbox layout to stretch the center panel and GSAP tweens to change the width of the right-side panel.  

To run unit tests:
```
node_modules/karma/bin/karma start karma.conf.js
```
