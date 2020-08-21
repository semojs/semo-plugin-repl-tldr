
import { getTldr } from '../common/tldr'

export = (Utils) => {
  return {
    hook_repl_command: new Utils.Hook('semo', () => {
      return {
        tldr: {
          help: 'Get commands help information from tldr',
          async action(input) {
            if (!input) {
              Utils.warn('keyword is required')
            } else {
              // @ts-ignore
              this.clearBufferedCommand()
              
              await getTldr(input)

               // @ts-ignore
              this.displayPrompt()
            }
          }

        }
      }
    })
  }
}