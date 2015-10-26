## Todo Wrangler

This is a very simple [angular]() application to demonstrate style guidelines
learned from [John Papa](). All in all, it was a fun exercise to relearn
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

Documentation can be viewed [here](https://jbydeley.github.io/todowrangler/) or
generated with [jsdoc](http://usejsdoc.org/index.html).
