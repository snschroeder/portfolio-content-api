import { type Knex } from 'knex'

const aboutSeed = [
  {
    id: '84e649dd-bdf1-45d5-a35e-c855752716cd',
    img_link: 'http://placekitten.com/g/300/300',
    header: 'About me',
    body: `I have been working professionally as a full stack developer since 2019, with a focus on React, TypeScript, Node.js, Express.js, and both PostgreSQL and MySQL. I'm also experienced with AWS, Wordpress and PHP, and Shopify and Liquid.
    
Most recently at PS Audio, I had many opportunities unique to a small company. I was often responsible for owning the entirety of projects I worked. It was up to me to meet with stakeholders, define the requirements for the project, and determine the right tech stack and tools for the job. 
        
Plus, I got to write a LOT of code.
        
The projects I worked fulfilled several important roles, ranging from driving sales to improving product reliability and connecting users and our engineering team to diagnostics and product data. 
        
PS Audio also gave me the chance to expand my knowledge base rapidly. Initially, this meant learning WooCommerce and PHP, which I used to create a subscription app for PS Audio’s recording studio Octave Records. Later, we moved our e-commerce site to Shopify, giving me the chance to pick up both Shopify and Liquid.
        
Prior to working at PS Audio, I attended Thinkful’s full time coding boot camp, working closely with peers and mentors to to learn modern best practices for developing with React, Node, and JavaScript.
        
In my free time, you’ll likely find me learning Godot, hiking with my dog, reading, or gaming.`
  }
]

export async function seed (knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('about').del()

  // Inserts seed entries
  await knex('about').insert(aboutSeed)
};
