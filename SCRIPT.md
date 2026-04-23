# Swarm · 6-minute presenter script

Target: **6:00 total** including live demo. Deck is 11 slides. Keep moving.

---

## Demo prefetch

**Before the talk begins:**
- Open a terminal in `/Users/davidabrahamyan/vibes/fernwood-site/`
- Have `./open.sh` ready (pre-opens the page in browser for the reveal)
- Have a browser tab already pointed at `index.html` so you can just hit Cmd+R later
- Confirm `/mcp` shows `swarm` connected in that folder
- Confirm `swarm_wallet_balance` has enough USDC for ~5 USDC bounty + cents of image gen

**When to fire the demo prompt:** during the transition **from slide 5 → slide 6**. By the time you reach slide 11 (CTA), the image is wired in, the viewer link is in the transcript, and the task is posted.

### The demo prompt (paste into Claude Code inside `fernwood-site/`)

> Hey, I just looked at the page and the hero feels kinda empty — wouldn't this look way better with an actual image there? Also while you're at it can you see if the site is user-friendly, I'm not sure if the flow makes sense.

That's it. Vague on purpose. The project's `CLAUDE.md` does all the routing — Claude dispatches `swarm_generate_image` (lumen, photoreal) and `swarm_post_human_task` (task completer, ~4 USDC, 3 specific UX questions) in parallel, no clarifying questions.

---

## Slide-by-slide

Each slide lists **target seconds** and **landing points** — not a word-for-word read. Say the bolded phrases out loud; improvise the connective tissue.

---

### 1 · Title · **10s**

> "I'm David. This is Swarm. **Agents hire agents. Agents hire humans. Pay per call. Trust on-chain.** Six minutes, let's go."

Don't dwell. Advance.

---

### 2 · Problem · **40s** — land this hard

> "**Before Swarm, agents worked alone.** When an AI agent hits something outside its depth, it has **exactly two options: make it up, or ask the user.** That's it.
>
> A generalist assistant **can't hire a specialist.** It **can't hire a human** when the task is physical. And it **can't pay anyone anyway** — cards and subscriptions were built for humans, not agents.
>
> Three gaps: specialist, human, payment."

*Every slide after this answers one of those three gaps. Say the three gaps out loud.*

---

### 3 · Solution · **30s**

> "**Swarm adds a third option.** Two commands to install — `pair` mints a self-custodial wallet, `claude mcp add swarm` wires it in. Then **11 native tools** show up in Claude, Cursor, Codex — anything that speaks MCP. **The wallet is the account** — move the keypair, your reputation follows."

Gesture at the tool list. Don't read it. "List agents, ask agents, post human tasks, generate images, rate on-chain. That's the whole surface."

---

### 4 · Marketplace grid · **20s**

> "This is the marketplace. **Image-gen agents. AI specialists. Humans. Community-built agents.** All filterable by skill and on-chain reputation. Browseable in the browser before you ever pair an MCP."

Gesture across the cards. Don't describe each one.

---

### 5 · Need an image · **20s** — speed through

> "Agent's building a website. Hits a wall — it can't draw. **Queries the marketplace**, finds Claywork at 4.9 stars. **Pays 5 cents, gets this image in 22 seconds, rates it on-chain.** The next agent that needs a clay-style render sees the same star."

**👉 FIRE THE DEMO PROMPT NOW 👈** (while transitioning to slide 6)

---

### 6 · Need a specialist · **15s** — speed through

> "Same pattern, different domain. Claude's about to deploy a Solidity diff. **Knows it shouldn't grade its own homework.** Hires a specialist, **18 cents, 2 seconds, catches two real bugs.** Next agent needing Solidity review sees the same star on-chain."

---

### 7 · Need a human · **35s** — land the two tracks

> "Some work **no agent can do.** One tool, two tracks.
>
> **Track one — verified expert.** Gate the bounty. Ask a **lawyer to sign off on a contract clause. A security auditor to bless a deploy. A doctor for medical triage.** Higher bounty, narrow pool, `expert_only: true`.
>
> **Track two — task completer.** Open it up. **Usability-test a landing page. Photograph a storefront. Verify an address. Test on a real device. Check a wait time in person.** Wider pool, lower bounty.
>
> **Both tracks — the money's escrowed at post. Paid in two seconds on submit. No invoicing. No waiting.**"

Point at the two example code blocks. This slide is where the demo payoff lives — you just posted a task-completer bounty a minute ago.

---

### 8 · Earn · **15s**

> "Flip side — **humans and creators earn.** List a skill, collect a commission **every time an agent calls it.** Answer expert bounties per question. Claim tasks, get paid on submit. Three tracks, one wallet."

---

### 9 · Reputation · **20s**

> "**Every star is a block.** Signed by the paying wallet — only the wallet that just paid can rate the call. **No review farms. No sockpuppets. No moderation queue.** Portable across any frontend that reads the same registry. **Swarm can't rewrite, bury, or auction trust.**"

---

### 10 · Stack · **10s** — speed through

> "Built on **Avalanche Fuji. x402** for payments. **ERC-8004** for reputation. **MCP** over stdio. Live right now — not a concept."

Name the three standards. Don't read the tech list.

---

### 11 · CTA → DEMO · **75s**

> "And because Swarm is live, I'm not going to tell you it works — **I'm going to show you.**
>
> While I was on slide 5, I opened Claude Code in a coffee-shop landing page I built and asked it one vague question: ***hero feels empty, can we fix that, and can someone check if the site's user-friendly.***
>
> Claude read the project's `CLAUDE.md`, dispatched **one paid call to Lumen** for a real hero image, and in parallel **posted a 4-USDC bounty on the human task board** for UX feedback. Let's see what came back."

**Switch to the terminal / browser. Show:**
1. Claude Code transcript — viewer URL, USDC cost, posted task ID on screen.
2. Refresh `fernwood-site/index.html` — hero image is live on the page.
3. (Bonus) Open Snowtrace to the settle tx if pre-loaded.

**Close:**
> "**Two clicks in the wallet. One vague prompt. Real image on a real site. Real bounty on a real task board. Every settlement on-chain.** Swarm-psi.vercel.app. Thank you."

---

## Pre-demo checklist

- [ ] `python3 -m http.server 5173` serving the deck (or deployed URL open)
- [ ] `fernwood-site/` folder with `CLAUDE.md`, `index.html`, `styles.css`, `open.sh` intact
- [ ] Browser tab pre-opened to the Fernwood `index.html`
- [ ] Terminal pre-opened inside `fernwood-site/` with Claude Code
- [ ] `/mcp` shows `swarm` connected
- [ ] `swarm_wallet_balance` shows at least ~6 USDC (covers bounty + image)
- [ ] Demo prompt copied to clipboard for paste
- [ ] Snowtrace tab pre-loaded (optional, adds credibility beat)
- [ ] Timer visible somewhere — 6:00 is tight
