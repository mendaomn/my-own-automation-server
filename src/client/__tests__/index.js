const CLI = require('../index.js')

beforeEach(() => process.argv = [])

const setupArgv = (...args) => {
  process.argv.push('bin', 'path', ...args)
}

it('should run', () => {
  setupArgv()
  CLI.main()
})

it('should run specified pipeline', () => {
  setupArgv('run', 'pipelineName')
  CLI.main()
})

it('should upload a pipeline', () => {
  setupArgv('upload', 'pipelineName', 'filePath')
  CLI.main()
})

it('should list all pipelines', () => {
  setupArgv('list')
  CLI.main()
})

it('should display status of specified run', () => {
  setupArgv('check', 'runID')
  CLI.main()
})