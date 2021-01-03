# Profiling Middy

## Profiler hooks on core

Inside of `@middy/core` we've added some hook before and after every middleware called, the handler and from start to end of it's execution.

Let's take a look at a simple time profiler example:

```javascript

// Profiler, simplified version of /profiler/time.js
const store = {}
const before = (id) => {
    store[id] = process.hrtime()
}
const after = (id) => {
    console.log(id, process.hrtime(store[id])[1] / 1000000, 'ms')
}

// one off hooks
const start = () => before('total')
const beforeHandler = () => before('handler')
const afterHandler = () => after('handler')
const end = () => after('total')

const profiler = { start, before, beforeHandler, afterHandler, after, end }

middy(originalHandler, profiler)
  .use(eventLogger())
  .use(errorLogger())
  .use(httpEventNormalizer())
  .use(httpHeaderNormalizer())
  .use(httpUrlencodePathParametersParser())
  .use(httpUrlencodeBodyParser())
  .use(httpJsonBodyParser())
  .use(httpCors())
  .use(httpSecurityHeaders())
  .use(validator({inputSchema}))
  
await handler()
```

This will log out something this:

```shell
inputOutputLoggerMiddlewareBefore 0.156033 ms
httpEventNormalizerMiddlewareBefore 0.073921 ms
httpHeaderNormalizerMiddlewareBefore 0.095098 ms
httpUrlencodePathParserMiddlewareBefore 0.036255 ms
httpUrlencodeBodyParserMiddlewareBefore 0.038809 ms
httpJsonBodyParserMiddlewareBefore 0.048383 ms
httpContentNegotiationMiddlewareBefore 0.042311 ms
validatorMiddlewareBefore 0.083366 ms
handler 0.094875 ms
validatorMiddlewareAfter 0.083601 ms
httpSecurityHeadersMiddlewareAfter 0.19702 ms
httpCorsMiddlewareAfter 0.080532 ms
inputOutputLoggerMiddlewareAfter 0.066886 ms
lambda 66.141835 ms
```

From this everything looks good. Sub 1ms for every middleware and the handler. But wait, that `total` doesn't look right.
You're correct, `total` includes the initial setup time (or cold start time) for all middlewares. In this case `validator` is the culprit.
The Ajv constructor and compiler do a lot of magic when they first run to get ready for later schema validations.
This is why in the `validator` middleware we now support passing in complied schema and expose the default compiler in 
case you want to use it in a build step. We hope this feature will help to you in identify slow middlewares and improve your development experience.

There is also an `initStart` and `initEnd` hook, but were left out of the example for dramatic effect.

Additionally, you'll notice that each middleware shows a descriptive name. This is printing out the function name passed into middy core.
If you've looked at the code for some the supported middlewares, you'll see these long descriptive variable names being set, then returned.
This is why.

## Profiling with other tools
**TODO**
- link to clinicjs and add example