import * as path from 'node:path'
import { Client, Intents } from 'discord.js'
import { createBank } from '@hey-amplify/discord'

export const client = new Client({ intents: [Intents.FLAGS.GUILDS] })
export const bank = await createBank(
  new URL('./commands', import.meta.url).pathname
)

client.once('ready', () => {
  console.log('Ready!')
})

client.on('interactionCreate', async (interaction) => {
  if (!interaction.isCommand()) return
  const { commandName } = interaction
  const command = bank.get(commandName)
  console.log({ commandName, command })
  if (!command) return

  console.log(
    `Handling command "${command?.name}" for user ${interaction.member?.user?.id}`
  )

  let response = 'test'

  await interaction.reply(response)
})
