const {getSuccessMakefile, getFailureMakefile} = require('test-utils')

const {run} = require('../make')

test('should run a Makefile', async () => {
  const successMakefile = getSuccessMakefile()
  const failureMakefile = getFailureMakefile()
  const {exitCode: successExitCode} = await run(successMakefile)
  const {exitCode: failureExitCode} = await run(failureMakefile)

  expect(successExitCode).toBe(0)
  expect(failureExitCode).toBe(1)
});