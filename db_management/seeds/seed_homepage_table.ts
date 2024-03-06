import { type Knex } from 'knex'

const homepageSeed = [
  {
    header: 'Hi there! My name is Scott.',
    portfolio_description: 'Welcome to my portfolio. Please feel free to look around if you would like to see what I\'ve been working on.',
    dust_callout: 'Oh, and please don\'t mind the dust, it seems I left a window open while I was away.',
    dust_joke: 'Don\'t worry, though! Our tests have confirmed it is 73% asbestos free!'
  },
  {
    header: 'Howdy, welcome back!',
    portfolio_description: 'You can check out the code for this portfolio along with my other projects in my Github linked below.',
    dust_callout: 'Or if you\'d like to chat, please feel free to reach out anytime on LinkedIn or via email.',
    dust_joke: 'Please let me know if you figured out where this dust is coming from...'
  }
]

export async function seed (knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('homepage').del()

  // Inserts seed entries
  await knex('homepage').insert(homepageSeed)
};
