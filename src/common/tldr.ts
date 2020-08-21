import got from 'got'
import marked from 'marked'
import TerminalRenderer from 'marked-terminal'
marked.setOptions({
  renderer: new TerminalRenderer()
})

export const getTldr = async (input) => {
  try {
    const url = `https://gitee.com/vipzhicheng/tldr/raw/master/pages/common/${input}.md`
    const response: any = await got(url)
    console.log(marked(response.body))

  } catch (e) {
    console.error(e.message)
  }
}