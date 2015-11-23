## Color Variations of Todo Wranger

These color variations have all been built and pushed to DockerHub so you
can use them as fodder various Docker deployment tools.  Each image has a
different color for the nav-wrapper at the top of the page.

|Color|Image(s)|
|---|---|
|red|markriggins/todowrangler:red|
|green|markriggins/todowrangler:green|
|purple|markriggins/todowrangler:purple|
|blue|markriggins/todowrangler:latest|
|blue|markriggins/todowrangler:0.0.1|


## ------------------------------------------------------- ##

## Todo Wrangler

This is a very simple [angular](https://angularjs.org/) application to demonstrate style guidelines
learned from [John Papa](http://www.johnpapa.net/). All in all, it was a fun exercise to relearn
angular, jasmine, and karma.

## Structure

For the structure of this app, I followed
[John Papa's](http://www.johnpapa.net/angular-app-structuring-guidelines/)
guide. The folders match up with sections within the app. This makes it very
easy to find code related to the feature I'm working on.

```
app/
 - about/
   - about.html
 - navigation/
   - nav-controller.js
 - todos/
   - todos-controller.js
   - todos-controller.spec.js
   - ...
```

## Testing

To run the tests, simply type:

```
karma start
```

The specs are located beside the code they test. Yes, it's technically open for
all to see but if I didn't want it viewable, I could just put it in a different
folder outside of app.

## Documentation

Documentation can be viewed [here](https://jbydeley.github.io/todowrangler/docs/) or
generated with [jsdoc](http://usejsdoc.org/index.html).
