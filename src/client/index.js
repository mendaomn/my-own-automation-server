const fs = require('fs')
const path = require('path')

const help = fs.readFileSync(path.join(__dirname, 'utils', 'help.txt'), 'utf8')

module.exports = class CLI {
  static main() {
    const [command, ...args] = process.argv.slice(2)
    
    switch (command) {
      case 'run':
        CLI.run(args)
        break;
      
      case 'upload':
        CLI.upload(args)
        break;
      
      case 'list':
        CLI.list()
        break;
      
      case 'check':
        CLI.check(args)
        break;

      default:
        CLI.help()
        break;
    } 
  }

  /**
   * 
   * @param {string[]} args
   */
  static run([pipelineName]) {
    console.log("Should run pipeline:", pipelineName)
  }

  /**
   * 
   * @param {string[]} args
   */
  static upload([pipelineName, filePath]) {
    console.log("Should upload:", pipelineName, filePath)
  }

  static list() {
    console.log("Should list all pipelines")
  }

  /**
   * 
   * @param {string[]} args
   */
  static check([runID]) {
    console.log("Should display status of run with id:", runID)
  }

  static help() {
    console.log(help)
  }

  // static debug() {
  //   const [command, ...args] =  process.argv.slice(2)
  //   console.log(`Command: ${command}`)
  //   process.stdout.write("Arguments: ")
  //   args.forEach((arg, i) => {
  //     process.stdout.write(`${i + 1}:<${arg}> `)
  //   })
  //   console.log("")
  // }
}