# Swarm · 6-minute presenter script

Sub-5-minute speaking arc (slides 1–10 plus walk-over), ~60s demo reveal. Totals ~4:42, leaving a minute of slack.

This is a **crypto hackathon** — the crypto angle is the story. Every paid call signs an **EIP-3009 USDC transfer** from a **self-custodial wallet minted at pair time**, settles on **Avalanche Fuji** in ~2 seconds, and writes ratings to **ERC-8004**. Name those things out loud.

Read the lines in your own voice. They're written as flowing speech, not bullets. Use them as the shape of what you'd say.

---

## The demo prompt

Paste this into Claude Code inside `/Users/davidabrahamyan/vibes/fernwood-site/`:

> Hey, I just looked at the page and the hero feels kinda empty — wouldn't this look way better with an actual image there? Also while you're at it can you see if the site is user-friendly, I'm not sure if the flow makes sense.

**Copy to clipboard before you start.**

---

## Slide 1 · Title · ~10s

> "Hey everyone, I'm David. What I built is Swarm — a marketplace where AI agents can hire other AI agents, and actually hire real humans on demand. Every call is pay-per-use in **USDC on Avalanche**, every rating is on-chain. Six minutes, let's go."

---

## Slide 2 · Problem · ~35s — LAND THIS

> "Here's the thing. Right now, when your AI agent — Claude, Cursor, whatever you use — when it hits something outside its depth, it only has two options. It can either make something up, or it can stop and ask you. That's it. Those are the only two moves it has.
>
> A generalist assistant can't turn around and hire a specialist. It can't hire a real person when the task is physical. And even if it wanted to, it **can't pay anyone at all** — because credit cards, Stripe, subscriptions — every single payment rail we have was built around a human signer clicking approve. No agent has ever had a wallet of its own.
>
> Three gaps: specialist, human, and **payment**. Everything I'm about to show you is an answer to one of those three."

*This is your anchor. Pause after "make it up or ask the user" — that's the line judges remember.*

---

## Slide 3 · Solution · ~32s — CRYPTO INNOVATION LIVES HERE

> "Swarm closes all three with one move. Install is two commands.
>
> The first one is `pair`. This is the interesting part — it **mints a brand-new self-custodial wallet for the agent itself**, funds it from your main wallet, and binds the two on-chain through a registry contract. That's the innovation. The agent now has its *own* wallet. A wallet you own, but one the agent can actually spend from.
>
> The second command wires it into Claude, or Cursor, or Codex. And from that point, every paid call the agent makes **signs an EIP-3009 USDC transfer from its own key**. No approval dialog. No 'can I spend eighteen cents on this' question. The agent just acts — fully autonomous, on-chain, in about two seconds on Avalanche Fuji. And if you want to revoke it, you drain the wallet. That's it."

*Let "the agent has its own wallet" land. That's what separates this from any normal LLM-plus-API pitch.*

---

## Slide 4 · Marketplace · ~18s

> "Here's the marketplace. Image-gen agents, AI specialists, real humans, community-built agents. You can filter by skill, by price, by on-chain reputation. All of this is also browseable in the browser before you ever pair your MCP — same x402 rails, same wallet pops a signature prompt instead of the agent signing."

---

## Slide 5 · Need an image · ~22s

> "Walk through how this actually plays out. Say your agent is building a travel blog and it needs a hero image — it can't draw. So it queries the marketplace, finds a clay-diorama agent at 4.9 stars, makes the call. The endpoint returns an HTTP **402 Payment Required** — that's the **x402 protocol** — and the agent's wallet signs the transfer on its own. Settles on Avalanche in about two seconds. Five cents, image back, rating written to chain. Next agent that needs clay-style sees the same star."

---

## 👉 Between 5 and 6 · walk over + type the prompt · ~12s

*Step to the laptop. Keep it casual.*

> "Actually — before I get any deeper, let me kick off a live demo right now so the network has a minute to do its thing. *[paste, enter]* Alright, we'll come back to this."

*Walk back. The audience just watched you trigger a real, paid, on-chain action. Now they're waiting for the payoff.*

---

## Slide 6 · Need a specialist · ~15s

> "Same pattern, different work. Claude's about to deploy a Solidity contract and knows it shouldn't grade its own homework. So it hires an auditor — eighteen cents, two seconds, settles on Avalanche, catches two real bugs. And that auditor's score is on-chain — the next agent that needs a Solidity review sees it."

---

## Slide 7 · Need a human · ~35s — the two-track payoff

> "But what about work where no agent can help — where you actually need a real person? Two tracks, same tool.
>
> Track one is expert-only. You flag the bounty and now only verified humans in that domain can claim it. A lawyer signing off on a contract clause. A security auditor blessing a deploy. A doctor doing triage. A CPA reviewing your taxes. Higher bounty, narrow pool.
>
> Track two is task-completer. Open to anyone. Usability-test a landing page. Photograph a storefront. Verify an address. Deliver an item. Test on a real device.
>
> Either way, the bounty is **escrowed on-chain the second you post it** — x402 locks the USDC up front, so the human who claims it knows the money is already there. They submit the work, the treasury pushes USDC to their wallet in about two seconds. No invoicing. No waiting. No disputes."

*Point at the two code blocks as you say "gate" vs "open." The `expert_only: true/false` contrast is the whole slide.*

---

## Slide 8 · Earn · ~15s

> "Flip side — humans and creators earn from the other side of this. You can list a skill and collect a commission in USDC every time any agent calls it. You can answer expert bounties per question. Or you can claim real-world tasks and get paid on submit. Three earn tracks, one wallet."

---

## Slide 9 · Reputation · ~22s

> "Every rating on Swarm is a block on-chain. Specifically, it's an **ERC-8004 reputation entry**, signed by the wallet that actually paid for the call. Which means only someone who paid can rate. That kills review farms, sockpuppets, moderation queues — all of it. And because the registry is public, any marketplace reading it sees the same score. An agent's reputation is **portable** — Swarm literally can't rewrite it, bury it, or auction it."

---

## Slide 10 · Stack · ~10s

> "Quick on the stack — **Avalanche Fuji** for the chain, **x402** for payments, **ERC-8004** for reputation, **MCP** over stdio. Live right now, settling on-chain every call."

---

## Slide 11 · Demo reveal · ~60s

> "And the cleanest way to close is to just show it.
>
> About two minutes ago, I pasted one deliberately vague prompt into Claude Code — *'the hero feels empty, can we fix that, and can someone check if the site's user-friendly.'* And with that one instruction, Claude dispatched a paid call to a photoreal image agent — **x402 settled the payment on Avalanche** — the image came back. And in parallel, Claude **posted a 4-USDC bounty on the human task board, escrowed on-chain**, asking for UX feedback. All without me signing anything. Let's see."

*Switch to the laptop. Show, in order:*

1. **Claude Code transcript** — viewer URL, USDC cost, posted task ID.
2. **Refresh the Fernwood tab** — the ☕ emoji is now a real hero image.
3. *(Optional flex: Snowtrace tab showing the settle tx — if you pre-loaded one, this is where it pays off.)*

**Close:**

> "One vague prompt. A real image on a real site. A real bounty on a real task board. **Every settlement visible on Snowtrace, right now.** That's Swarm — live at swarm-psi.vercel.app. Thank you."

---

## Crypto terms to drop out loud

If the judges only hear half your talk, make sure these land:

- **Self-custodial wallet, minted on `pair`** (slide 3)
- **EIP-3009 transferWithAuthorization** — the actual signature the agent signs (slide 3)
- **x402** — HTTP 402, the payment protocol (slides 5, 7, 11)
- **Avalanche Fuji** — the chain, ~2s settle (slides 1, 3, 5, 6, 10, 11)
- **ERC-8004 reputation registry** — the portable rating layer (slides 9, 10)
- **Escrowed on-chain at post time** — for human tasks (slides 7, 11)
- **Snowtrace** — mention at the end to tie it all to a real block explorer

---

## Pre-demo checklist

- [ ] Deck open (localhost:5173 or deployed)
- [ ] Fernwood `index.html` **already open** in a browser tab, ready to refresh
- [ ] Terminal open inside `fernwood-site/` with Claude Code running
- [ ] `/mcp` shows `swarm` connected
- [ ] `swarm_wallet_balance` ≥ ~6 USDC
- [ ] Demo prompt on clipboard — one paste, one enter
- [ ] Snowtrace tab pre-loaded on a recent settle tx (**strongest crypto flex**)
- [ ] Timer visible

---

## Benefit check — every slide lands one

| # | Slide | Benefit |
|---|---|---|
| 1 | Title | — intro |
| 2 | Problem | agents stop hitting walls |
| 3 | Solution | **agent gets its own wallet — fully autonomous spend** |
| 4 | Marketplace | browsable before install |
| 5 | Image | agents unlock capabilities they don't have |
| 6 | Specialist | real second opinions mid-run |
| 7 | Human | a rail to the physical world, x402-escrowed |
| 8 | Earn | creators and humans earn too |
| 9 | Reputation | ERC-8004 trust, portable and unfakeable |
| 10 | Stack | live right now, on-chain every call |
| 11 | Demo | one vague prompt → real on-chain result |

---

## Time math

```
10 + 35 + 32 + 18 + 22 + 12 + 15 + 35 + 15 + 22 + 10  =  226s  (3:46 speaking)
                                                     + 60s  (demo reveal)
                                                     ──────
                                                       4:46 total
                                                     + ~14s buffer to 5:00
                                                     + ~60s buffer to 6:00
```

Slide 3 grew by 4 seconds — it's now the slide where the crypto innovation actually lands, so it's earning the extra time.
