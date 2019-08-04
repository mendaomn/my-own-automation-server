const fs = require('fs')
const path = require('path')

const helpText = fs.readFileSync(path.join(__dirname, '..', 'help.txt'), 'utf8')

test('should contain help text for the CLI', () => {
  expect(helpText).toMatchSnapshot()
});
