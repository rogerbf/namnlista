const commander = require(`commander`)
const lookupNameday = require(`../`)
const { version } = require(`../package`)
const log = console.log

const logNames = ({ names, all }) => {
  const { included, alternative } = names.reduce(
    (sorted, { included, name }) =>
      included
        ? Object.assign({}, sorted, { included: [ ...sorted.included, name ] })
        : Object.assign({}, sorted, {
          alternative: [ ...sorted.alternative, name ]
        }),
    { included: [], alternative: [] }
  )

  const defaultOutput = `Names: ${included.join(`, `)}`

  all && alternative.length > 0
    ? log(defaultOutput.concat(` (Alternative: ${alternative.join(`, `)})`))
    : log(defaultOutput)
}

commander.version(version)

commander
  .command(`today`)
  .option(`-a, --all`, `Include deprecated names`)
  .action(({ all }) => {
    logNames({
      names: lookupNameday(new Date()),
      all
    })
  })

commander
  .command(`date <month> <date>`)
  .option(`-a, --all`, `Include deprecated names`)
  .action((month, date, { all }) => {
    if (month < 1 || month > 12) {
      log(`<month> is out of range`)
      return
    }
    if (date < 1 || date > 31) {
      log(`<date> is out of range`)
      return
    }
    if ((new Date(`${month}-1`)).getMonth() !== (new Date(`${month}-${date}`)).getMonth()) {
      log(`<date> is out of range`)
    } else {
      logNames({
        names: lookupNameday(new Date(`${month}-${date}`)),
        all
      })
    }
  })

process.argv.slice(2).length === 0
  ? commander.help()
  : commander.parse(process.argv)
