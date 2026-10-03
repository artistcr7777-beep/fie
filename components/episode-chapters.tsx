'use client'

import { ArrowRight, Check, Flower2, Heart, Mail, Play, Ribbon, RotateCcw, Sparkles, Star, Sun, Swords, Trophy } from 'lucide-react'
import { birthday, hopes, number, routes, wishes } from '@/lib/birthday-content'
import { Celebration, Typewriter } from './episode-effects'

const symbols = { flower: Flower2, sun: Sun, sparkles: Sparkles, heart: Heart, ribbon: Ribbon, swords: Swords }

export type EpisodeState = {
  cards: number[]
  route: number | null
  capsules: number[]
  capsule: number | null
  wishes: number[]
  wish: number | null
}

export const emptyEpisode: EpisodeState = { cards: [], route: null, capsules: [], capsule: null, wishes: [], wish: null }

type Props = {
  chapter: number
  state: EpisodeState
  update: (patch: Partial<EpisodeState>) => void
  next: () => void
  replay: () => void
  reduced: boolean
  secret: (message: string) => void
}

function Continue({ onClick, children = 'The next chapter' }: { onClick: () => void; children?: React.ReactNode }) {
  return <button className="primary-button" onClick={onClick}>{children}<ArrowRight aria-hidden="true" size={17} /></button>
}

function Heading({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return <div className="chapter-heading"><span className="eyebrow">{eyebrow}</span><h1 tabIndex={-1} id="chapter-title">{title}</h1>{subtitle && <p>{subtitle}</p>}</div>
}

export function EpisodeChapter({ chapter, state, update, next, replay, reduced, secret }: Props) {
  if (chapter === 0) return <div className="opening-layout">
    <div className="opening-copy">
      <div className="special-label"><span className="label-line" /><span>「 A SPECIAL EPISODE 」</span><span className="label-line" /></div>
      <div className="episode-tag"><span /> A BIRTHDAY ORIGINAL <span className="tag-divider">/</span> EP. 18</div>
      <h1 tabIndex={-1} id="chapter-title">Some stories<br />deserve a <em>special<br className="desktop-break" /> episode.</em><Sparkles className="title-sparkle" aria-hidden="true" /></h1>
      <p className="birthday-line">Happy 18th Birthday, <strong>{birthday.name}</strong> <Heart aria-label="with affection" size={19} /></p>
      <p className="opening-description">A little something for someone<br className="mobile-break" /> I&apos;m really glad I met.</p>
      <button className="primary-button start-button" onClick={next}><Play size={16} fill="currentColor" aria-hidden="true" />Start the Episode<ArrowRight size={17} aria-hidden="true" /></button>
      <span className="start-footnote">Made for you. Best enjoyed at your own pace.</span>
    </div>
    <div className="episode-ticket" aria-label="Episode 18: Your Birthday, a new chapter begins">
      <div className="ticket-top"><Flower2 size={19} aria-hidden="true" /><span>A DAY JUST FOR YOU</span><span>特別編</span></div>
      <div className="ticket-number">18<span>th</span><Star className="ticket-star" aria-hidden="true" /></div>
      <div className="ticket-title">Your Birthday</div><div className="ticket-subtitle">a new chapter begins.</div>
      <div className="ticket-bottom"><span>ONE OF A KIND</span><Heart size={15} aria-hidden="true" /><span>∞ POSSIBILITIES</span></div>
    </div>
    <div className="scene-caption"><span className="caption-line" /><span>EPISODE 18: YOUR BIRTHDAY</span><span className="caption-dot">·</span><span>A new season of you.</span></div>
  </div>

  if (chapter === 1) return <div className="chapter-content welcome-content">
    <span className="large-sun"><Sun aria-hidden="true" /></span>
    <Heading eyebrow="THE FIRST DAY OF A NEW CHAPTER" title="You’re officially 18!" />
    <p className="handwritten welcome-subtitle">Welcome to a new arc ✨</p>
    <p className="scene-description"><Typewriter text="Same wonderful you. A whole world of possibilities." reduced={reduced} /></p>
    <Continue onClick={next}>Begin Your Birthday Arc</Continue>
    <p className="small-note">{birthday.animeReference}</p>
    <Celebration />
  </div>

  if (chapter === 2) return <div className="chapter-content">
    <Heading eyebrow="A LITTLE GOOD FORTUNE" title="Things I hope this year gives you" subtitle="Five little hopes. Pick a card and turn it into a possibility." />
    <div className="hope-grid">{hopes.map((hope, index) => {
      const Icon = symbols[hope.symbol as keyof typeof symbols]
      const open = state.cards.includes(index)
      return <button key={hope.title} className={`hope-card ${open ? 'is-flipped' : ''}`} aria-expanded={open} aria-label={`${hope.title}${open ? ': ' + hope.text : ' — reveal card'}`} onClick={() => update({ cards: open ? state.cards.filter(value => value !== index) : [...state.cards, index] })}>
        <span className="hope-card-inner"><span className="hope-front" aria-hidden={open}><span className="card-number">0{index + 1}</span><Icon className="hope-icon" aria-hidden="true" /><strong>{hope.title}</strong><span className="card-hint">A LITTLE WISH FOR YOU <span>↗</span></span></span><span className="hope-back" aria-hidden={!open}><Sparkles aria-hidden="true" /><strong>{hope.title}</strong><span>{hope.text}</span><span className="card-hint">TAP TO TURN BACK</span></span></span>
      </button>
    })}</div>
    <p className="small-note" aria-live="polite">{state.cards.length ? `${state.cards.length} little ${state.cards.length === 1 ? 'hope' : 'hopes'} turned into ${state.cards.length === 1 ? 'a possibility' : 'possibilities'}.` : 'A little pink. A little sunshine. A lot to look forward to.'}</p>
    <Continue onClick={next} />
  </div>

  if (chapter === 3) return <div className="chapter-content destiny-content">
    <Heading eyebrow="YOUR STORY. YOUR CHOICE." title="Every anime protagonist needs a route…" subtitle="No wrong answers. Just very different kinds of plot development." />
    <div className="route-grid">{routes.map((route, index) => {
      const Icon = symbols[route.symbol as keyof typeof symbols]
      return <button className={`route-card ${state.route === index ? 'selected' : ''}`} key={route.title} aria-pressed={state.route === index} onClick={() => update({ route: index })}><Icon aria-hidden="true" /><span>{route.title}</span>{state.route === index ? <Check aria-hidden="true" /> : <ArrowRight aria-hidden="true" />}</button>
    })}</div>
    <div className="route-result" aria-live="polite">{state.route !== null ? <div key={state.route} className="reveal-message"><span className="eyebrow">ROUTE UNLOCKED</span><h2>{routes[state.route].text}</h2><p>{routes[state.route].detail}</p></div> : <p className="small-note">Your next adventure is one choice away.</p>}</div>
    <Continue onClick={next} />
  </div>

  if (chapter === 4) return <div className="chapter-content story-content">
    <Heading eyebrow="A FRIENDSHIP ORIGINAL" title="The Story So Far…" subtitle="Only a month in, and already an awesome chapter." />
    {birthday.memories.length > 0 ? (
      <ol className="timeline">{birthday.memories.map((memory, index) => <li key={memory.title}><span className="timeline-node">{number(index + 1)}</span><div><span className="eyebrow">EPISODE {number(index + 1)}</span><h2>{memory.title}</h2><p>{memory.message}</p>{memory.photo && <img className="memory-photo" src={memory.photo} alt={`Memory: ${memory.title}`} loading="lazy" onError={event => { event.currentTarget.hidden = true }} />}</div></li>)}</ol>
    ) : (
      <div className="reveal-message" style={{ maxWidth: 520, margin: '20px auto 10px', padding: '28px 24px', background: '#fffcf7', border: '1px solid #e7d0cc', borderRadius: 9, textAlign: 'center' }}>
        <p style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontSize: 20, color: '#513a47', marginBottom: 12 }}>Season 1: Just Getting Started</p>
        <p style={{ fontSize: 13, lineHeight: 1.8, color: '#735b61' }}>We literally met only about a month ago, so the lore is still in its prologue arc. The best episodes haven&apos;t even been written yet!</p>
      </div>
    )}
    <div className="continued-note"><span className="handwritten">To be continued…</span><p>Because one month is only the beginning.</p></div><Continue onClick={next} />
  </div>

  if (chapter === 5) return <div className="chapter-content capsule-content">
    <Heading eyebrow="SMALL MOMENTS. GOOD PEOPLE." title="A little time capsule" subtitle="Some things are too nice to leave unsaid. Open a capsule ✨" />
    <div className="capsule-grid">{birthday.capsules.map((message, index) => <button key={index} className={`capsule-button ${state.capsules.includes(index) ? 'opened' : ''}`} aria-label={`Open capsule ${number(index + 1)}${state.capsules.includes(index) ? ', previously opened' : ''}`} aria-pressed={state.capsule === index} onClick={() => update({ capsule: index, capsules: [...new Set([...state.capsules, index])] })}><span className="capsule-globe"><Star aria-hidden="true" /><span className="capsule-glint" /><span className="capsule-seam" /></span><span>CAPSULE {number(index + 1)}</span><span className="capsule-status">{state.capsules.includes(index) ? 'A memory unlocked' : 'Something worth keeping'}</span></button>)}</div>
    <div className="capsule-result" aria-live="polite">{state.capsule !== null ? <p className="reveal-message" key={state.capsule}>{birthday.capsules[state.capsule]}</p> : <p className="small-note">A tiny universe of good things, waiting for you.</p>}</div><Continue onClick={next} />
  </div>

  if (chapter === 6) return <div className="chapter-content wishes-content">
    <Heading eyebrow="A SKY FULL OF GOOD THINGS" title="18 Wishes for 18" subtitle="Every star has a wish with your name on it. Make the whole sky yours." />
    <div className="wish-layout"><div className="wish-grid">{wishes.map((wish, index) => <button key={index} className={`wish-star ${state.wishes.includes(index) ? 'unlocked' : ''} ${state.wish === index ? 'active-wish' : ''}`} aria-label={`Wish ${index + 1}${state.wishes.includes(index) ? ', unlocked' : ', open'}`} aria-pressed={state.wish === index} onClick={() => update({ wish: index, wishes: [...new Set([...state.wishes, index])] })}><Star aria-hidden="true" /><span>{number(index + 1)}</span>{state.wishes.includes(index) && <Check className="wish-check" aria-hidden="true" />}</button>)}</div>
    <div className="wish-message" aria-live="polite">{state.wish !== null ? <div key={state.wish} className="reveal-message"><Sparkles aria-hidden="true" /><span className="eyebrow">WISH {number(state.wish + 1)} OF 18</span><p>{wishes[state.wish]}</p><span className="handwritten">a little wish, just for you.</span></div> : <div><Star aria-hidden="true" /><p>Your first wish is waiting.</p><span>Go on, pick a star.</span></div>}</div></div>
    <div className="wish-progress"><span aria-live="polite">{state.wishes.length}/18 Wishes {state.wishes.length === 18 ? 'Unlocked ✨' : 'Unlocked'}</span><progress value={state.wishes.length} max={18} aria-label="Birthday wishes unlocked" /></div>
    {state.wishes.length === 18 && <><div className="achievement" role="status"><Trophy aria-hidden="true" /><div><strong>Secret Achievement Unlocked</strong><span>Birthday Completionist — every wish is yours.</span></div></div><Celebration /></>}
    <Continue onClick={next}>A letter for you</Continue>
  </div>

  if (chapter === 7) return <div className="chapter-content letter-content">
    <Heading eyebrow="FROM ME TO YOU" title="One Last Thing…" subtitle="No plot twist. Just something I wanted to say." />
    <article className="letter"><div className="letter-top"><span className="eyebrow">A LITTLE BIRTHDAY LETTER</span><Mail aria-hidden="true" /></div><h2 className="handwritten">Dear {birthday.name},</h2>{birthday.letter.map((paragraph, index) => <p key={index}>{paragraph}</p>)}<div className="letter-signature"><span className="handwritten">— {birthday.from}</span><button className="letter-seal" aria-label="Look beneath the little flower seal" onClick={() => secret('P.S. You’re cooler than you probably realize.')}><Flower2 aria-hidden="true" /></button></div></article><Continue onClick={next}>One last scene</Continue>
  </div>

  return <div className="chapter-content ending-content"><span className="ending-emblem"><Flower2 aria-hidden="true" /></span><Heading eyebrow="THANK YOU FOR BEING PART OF THE STORY" title="Episode 18 Complete." /><p className="handwritten ending-subtitle">But the story continues…</p><div className="ending-birthday">Happy Birthday, {birthday.name} <span aria-hidden="true">🌸☀️</span></div><p className="scene-description">See you in the next episode.</p><button className="primary-button" onClick={replay}><RotateCcw size={17} aria-hidden="true" />Replay the Episode</button><p className="small-note">The good parts are always worth coming back to.</p><Celebration /></div>
}
