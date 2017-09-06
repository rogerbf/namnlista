const commander = require(`commander`)
const lookupNameday = require(`../`)
const { version } = require(`../package`)
const log = console.log

commander.version(version)

commander
  .command(`today`)
  .option(`-a, --all,`, `Include deprecated names`)
  .action(command => {
    const names = lookupNameday(new Date())
    const { included, alternative } = names.reduce(
      (sorted, { included, name }) =>
        included
          ? Object.assign({}, sorted, { included: [ ...sorted.included, name ] })
          : Object.assign({}, sorted, {
            alternative: [ ...sorted.alternative, name ]
          }),
      { included: [], alternative: [] }
    )

    const defaultOutput = `Todays names: ${included.join(`, `)}`

    command.all
      ? log(defaultOutput.concat(` (Alternative: ${alternative.join(`, `)})`))
      : log(defaultOutput)
  })

process.argv.slice(2).length === 0
  ? commander.help()
  : commander.parse(process.argv)
