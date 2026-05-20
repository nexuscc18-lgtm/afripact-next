export interface Post {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  category: 'Bathroom' | 'Kitchen' | 'Home' | 'Commercial' | 'General';
  body: string;
}

export const posts: Post[] = [
  {
    id: 'bathroom-renovation-cost-durban',
    title: 'Bathroom Renovation Cost in Durban: What to Expect',
    date: '2026-03-10',
    excerpt:
      'Bathroom renovation costs in Durban vary widely depending on scope, fixture quality, and who you hire. Understanding what drives the price helps you plan a realistic budget before you start.',
    category: 'Bathroom',
    body: `<p>A basic bathroom refresh in Durban, covering new tiling, a replaced vanity, and updated fixtures, will typically cost between R25,000 and R60,000. A mid-range renovation that includes replumbing, waterproofing, a new shower enclosure, and quality fittings will sit between R60,000 and R150,000. Full overhauls with premium finishes, structural changes, and underfloor heating can run well above R150,000.</p>
<p>The biggest cost driver is not the materials. It is the scope of the plumbing and waterproofing work. Bathrooms that require drainage repositioning, new waste pipes, or full waterproofing membranes on multiple surfaces add significant labour time and material cost. Getting this right at the start protects you from costly repairs later.</p>
<p>When budgeting, include a contingency of at least 10 to 15 percent. Older homes in Durban and the surrounding areas frequently reveal hidden issues once walls and floors are opened up. A contractor who quotes you clearly on scope and flags potential variations upfront is worth more than the cheapest number on a page.</p>`,
  },
  {
    id: 'kitchen-renovation-pietermaritzburg-guide',
    title: 'Kitchen Renovation in Pietermaritzburg: A Complete Guide',
    date: '2026-03-24',
    excerpt:
      'A kitchen renovation in Pietermaritzburg is one of the highest-return investments you can make in a residential property. This guide covers what to plan for, what to avoid, and how to get the best result from your contractor.',
    category: 'Kitchen',
    body: `<p>The first decision in any kitchen renovation is whether you are working within the existing footprint or reconfiguring the layout. Staying within the current layout keeps plumbing and electrical costs down significantly. If you want to move the sink, the stove, or open up a wall, budget for additional trades and a longer programme. In Pietermaritzburg, access to skilled kitchen joiners and tilers is good, but lead times on custom cabinetry can stretch to four to six weeks, so plan accordingly.</p>
<p>Cabinetry, countertops, and appliances will account for the bulk of your spend. Local suppliers in Pietermaritzburg carry a solid range of melamine and solid timber cabinet options. For countertops, engineered stone offers the best balance of durability and cost. Granite is available locally and can be a cost-effective premium option when sourced through a contractor with established supplier relationships.</p>
<p>The most common mistake in kitchen renovations is starting on site without finalising the design. Changes made during construction cost two to three times more than changes made on paper. Spend the time upfront, agree on every detail before the first tile is cut, and your project will run smoothly from start to finish.</p>`,
  },
  {
    id: 'how-to-choose-renovation-contractor-kzn',
    title: 'How to Choose a Renovation Contractor in KZN',
    date: '2026-04-07',
    excerpt:
      'Choosing the right renovation contractor in KwaZulu-Natal is the single most important decision you will make on any building project. The wrong choice costs you time, money, and peace of mind.',
    category: 'General',
    body: `<p>Start with registration. A legitimate contractor operating in KZN should hold a CIDB registration appropriate to the scale of your project. For residential renovations and general building work, look for a Grade 2GB or higher. For civil works such as drainage, earthworks, or site preparation, a 2CE registration is the relevant credential. These registrations are verifiable on the CIDB website using the contractor's CRS number. If a contractor cannot provide their CRS number, that is a clear warning sign.</p>
<p>Ask for a fixed-price quote, not a rate card. A detailed, itemised quote protects both parties. It gives you a clear picture of what is included, what is excluded, and what will trigger a variation. Contractors who only quote per square metre or per day without a defined scope are leaving you exposed to cost overruns. A professional contractor will walk the job, ask questions, and come back with a written scope before pricing.</p>
<p>Check references and look at completed work. Ask the contractor for two or three completed projects you can contact directly. A short phone call with a previous client will tell you more than any marketing material. In KZN, where the renovation market is active across Durban, Pietermaritzburg, and the surrounding areas, a contractor with a solid track record will have no hesitation providing references.</p>`,
  },
];
