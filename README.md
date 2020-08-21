# semo-plugin-repl-tldr

A Semo plugin to provide ability to get tldr for common commands

## Installation & Usage

```
npm i -g @semo/cli semo-plugin-repl-tldr
semo repl --hook
>>> .tldr tar
>>> .tldr vue --lang=zh
>>> .tldr w --type=osx
```

## TODOs

- [x] support tldr type, `--type`
- [x] support tldr translation `--lang`

## Source

Because the original [repo](https://github.com/tldr-pages/tldr) has access problem, I created a clone repo at [gitee](https://gitee.com/vipzhicheng/tldr/).

## Licence

MIT