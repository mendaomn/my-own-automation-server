const generate = require('../generate')

const {run} = require('../make')

test('should run a Makefile', async () => {
  const successMakefile = generate.successMakefile()
  const failureMakefile = generate.failureMakefile()
  const {exitCode: successExitCode} = await run(successMakefile)
  const {exitCode: failureExitCode} = await run(failureMakefile)

  expect(successExitCode).toBe(0)
  expect(failureExitCode).toBe(1)
});