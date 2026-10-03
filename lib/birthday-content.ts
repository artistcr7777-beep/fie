export const birthday = {
  name: 'fie',
  from: 'jett',
  musicUrl: '',
  animeReference: 'A little slice of life. A brand-new adventure.',
  memories: [] as { title: string; message: string; photo?: string }[],
  capsules: [
    'Remember this moment. We’ll definitely laugh about it in the future.',
    'Some people take years to make an impression, but you became a great friend right away.',
    'Achievement unlocked: having an awesome friend I’m genuinely glad I met.',
    'More fun memories pending… And I’m definitely looking forward to them.',
  ],
  letter: [
    'I know we haven’t known each other for super long, but I’m genuinely glad we became friends.',
    'We’ve only known each other for about a month, but you’ve already become such a great friend and someone I really enjoy having around.',
    'So for your 18th, I just wanted to make something fun and a little different instead of sending a basic “Happy Birthday.”',
    'I hope this year brings you a ridiculous amount of happiness, great memories, new adventures, and plenty of reasons to smile.',
    'Don’t change the things that make you you — stay awesome.',
    'And yeah… Happy 18th Birthday! ✨',
    'Here’s to the next chapter.',
  ],
}

export const chapters = [
  'The opening', 'A new arc', 'A little good fortune', 'Choose your destiny',
  'The story so far', 'Memory capsules', '18 wishes for 18', 'One last thing', 'The ending',
]

export const hopes = [
  { title: 'Happiness', text: 'More moments that make you smile without even realizing it.', symbol: 'flower' },
  { title: 'Good Memories', text: 'More random adventures, ridiculous conversations and stories we’ll laugh about later.', symbol: 'sun' },
  { title: 'New Experiences', text: '18 is the beginning of a whole new arc. Make it a good one.', symbol: 'sparkles' },
  { title: 'People Who Care', text: 'Hopefully you always remember that there are people rooting for you.', symbol: 'heart' },
  { title: 'Confidence', text: 'Keep becoming the version of yourself that makes YOU happy.', symbol: 'ribbon' },
]

export const routes = [
  { title: 'The Soft Arc', text: 'You chose peace. Suspiciously wholesome.', detail: 'Your inventory: warm sunshine, slow mornings, and a truly excellent snack.', symbol: 'flower' },
  { title: 'The Chaos Arc', text: 'Yep. This was predictable.', detail: 'Your inventory: questionable ideas, excellent stories, and absolutely no plan.', symbol: 'sun' },
  { title: 'The Main Character Arc', text: 'Obviously. The plot literally revolves around you today.', detail: 'Your inventory: a dramatic entrance, a theme song, and unlimited potential.', symbol: 'swords' },
  { title: 'The Mystery Arc', text: 'Even I don’t know where this route goes.', detail: 'Your inventory: one mysterious envelope. Open when the plot gets interesting.', symbol: 'sparkles' },
]

export const wishes = [
  'May you have more reasons to smile.',
  'May your bad days become shorter.',
  'May your best memories still be ahead of you.',
  'May you meet amazing people.',
  'May you never lose your weirdness.',
  'May your dreams get a little closer.',
  'May you laugh until your stomach hurts.',
  'May you have more spontaneous adventures.',
  'May you find things you’re genuinely passionate about.',
  'May you become even more confident.',
  'May you have plenty of main-character moments.',
  'May this year surprise you in the best ways.',
  'May you always have someone to talk to.',
  'May you create memories worth keeping.',
  'May you never underestimate yourself.',
  'May 18 treat you kindly.',
  'May this be the start of an amazing chapter.',
  'And most importantly… may you be happy.',
]
export const number = (value: number) => String(value).padStart(2, '0')
