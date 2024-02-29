import { type Knex } from 'knex'

const gallerySeed = [
  {
    id: 'c8f04de4-11ea-4891-aa47-93fa90383b6e',
    title: 'PS Audio Burn-in',
    img_link: 'Burnin-monitor.png',
    tagline: 'The final gatekeeper certifying each and every PowerPlant produced',
    stack: 'React, TypeScript, PostgreSQL, Node.js, Express.js, JWT',
    description: `In the realm of high-end audio, power matters - so much so that some people install dedicated power lines just for their stereos.

At PS Audio, we had a different approach - rebuild the sine wave right when we needed it using our PowerPlants. The Burn-in system I created was our final system test for each and every Power Plant produced at PS Audio. 
      
After the techs assemble each PowerPlant, the Burn-in system monitors each unit under load to certify it was ready before it left our warehouse. If a unit fails, detailed troubleshooting steps are provided covering the failure and necessary fix. 
      
And for our engineering team, detailed diagnostics were provided from each test in an Excel format so that our Manufacturing Engineer could monitor the efficiency of our production process and make adjustments to the testing parameters if needed.
`
  },
  {
    id: 'c60541eb-3596-4a7f-a70c-54a4f99250a3',
    title: 'PS Audio PowerPlay API',
    img_link: 'PowerPlayAPI.png',
    tagline: 'Connecting users to their data',
    stack: 'JavaScript, PostgreSQL, Node.js, Express.js',
    description: `PowerPlay is feature built-in to most Power Plants produced by PS Audio that allows them to report power data to our servers. One of the first projects for me at PS Audio was to build a new PowerPlay API to connect our users with their data. 
      
This presented several unique challenges. 
      
The first was configuring the code to accommodate the wide array of standards our Power Plants used over the 20 years they've had access to the internet. This was done by shaping all data received into a standardized format, and also structuring the code to correctly handle some of the more... interesting design choices of decades past. 
      
For instance, a GET request from a Power Plant might be it asking what it should be reporting, or a GET request might be that unit reporting its power data. Some data would get reported in a human readable format, and some would come through in hexadecimal that needed to be converted.
      
It was also imperative that the API handle a high static load from the thousands of Power Plants we sold as well as the spikes from users interacting with their power data.`
  },
  {
    id: '2716c52e-3f34-449d-9b2b-174c3f4cf042',
    title: 'Sort Viz',
    img_link: 'sort-viz',
    tagline: 'Building a path to understanding',
    stack: 'React, JavaScript',
    description: `This application is here primarily because it sheds light on who I am as a developer. 
      
Plus it's pretty to watch.

It's a simple app built in a weekend that uses React to animate several different sorting algorithms, built for the sole sake of learning how to animate something with React without using any libraries.
      
The solution ended up being straightforward, though still quite satisfying to implement. To do this, the sequence of moves a sort would make was determined and recorded. Then, using setTimeout and updating the state of the randomized array the sequence could be played out. 

Note, though, that the animation displays only the characteristics of the sort, not it's realtime speed. Selection sort appears the fastest in the animations, though it is of course massively inferior to quick sort in the real world.

At this point my original mission statement to animate something using only React was done, but I wasn't. I added an undo option to animate the sequence in reverse. I added handling for screen resizing, and I learned the importance of adding debounce when doing that resizing.
      
This, I feel, sums me up well as a developer - I love tackling interesting problems, pushing my own limits. However, even when building something for just myself accessibility and the user experience are core to my approach.
`
  }
]

export async function seed (knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('gallery').del()

  // Inserts seed entries
  await knex('gallery').insert(gallerySeed)
};
