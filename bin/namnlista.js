const commander = require(`commander`)
const lookupNameday = require(`../`)
const { version } = require(`../package`)

commander.version(version)

commander.command(`today`).action(() => {
  const names = lookupNameday(new Date())
  const { included, alternative } = names.reduce(
    (sorted, { included, name }) =>
      included
        ? Object.assign({}, sorted, { included: [ ...sorted.included, name ] })
        : Object.assign({}, sorted, { alternative: [ ...sorted.alternative, name ] }),
    { included: [], alternative: [] }
  )
  console.log(`Todays names: ${included.join(`, `)}`)
  alternative && console.log(`Alternative names: ${alternative.join(`, `)}`)
})

process.argv.slice(2).length === 0
  ? commander.help()
  : commander.parse(process.argv)
