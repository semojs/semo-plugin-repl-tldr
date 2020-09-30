import { Utils } from '@semo/core'

import got from 'got'
import marked from 'marked'
import TerminalRenderer from 'marked-terminal'
marked.setOptions({
  renderer: new TerminalRenderer()
})



export const getTldr = async (input, opts) => {
  try {
    const type = 'common'
    const langPage = 'pages'
    const url = `https://gitee.com/vipzhicheng/tldr/raw/master/${langPage}/${type}/${input}.md`
    const response: any = await got(url, {
      headers: {
        'User-Agent': 'firefox'
      }
    })

    Utils.consoleReader(marked(response.body), {
      plugin: 'semo-plugin-repl-tldr',
      identifier: input
    })

  } catch (e) {
    console.error(e.message)
  }
}