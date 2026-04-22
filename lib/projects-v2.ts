import type { ProjectMeta } from "./types"

export const projects: ProjectMeta[] = [
  // ═══ BOOKEE ═══ 6 sections: problem → strategy(3-col) → process(flow) → decisions(cards) → results(before-after) → insights(numbered)
  {
    slug:"bookee",title:"Bookee",subtitle:"Open-source AI receptionist for lead qualification and routing.",
    category:"ai-software",categoryLabel:"AI Automation",color:"#7C3AED",year:"2025",role:"AI Product Designer & Builder",client:"Self-initiated",timeline:"2025 — Ongoing",tools:"n8n, Vapi, ElevenLabs, Notion, Make",
    tags:["AI","Automation","n8n","Voice AI","Lead Qualification","Open Source"],featured:true,badges:["Open Source"],
    thumbnail:"/projects/bookee/thumb.jpg",heroImage:"System architecture — intake form → lead research → three-path routing diagram",
    tldr:"Built an open-source AI receptionist that handles intake, researches leads, and routes them to the right experience — turning 18 hours of weekly discovery calls into 5, with a 100% qualified lead rate. Then gave the entire system away as a free n8n template.",
    tldrStats:[{value:"5 hrs",label:"Weekly call time, down from 18"},{value:"100%",label:"Qualified lead rate, up from 33%"},{value:"2",label:"Learners returned as paying clients"}],
    ctaBox:{title:"The Bookee template is live and free.",desc:"Published on n8n creators platform — clone it, customize it, make it yours.",label:"View on n8n creators",url:"https://creators.n8n.io/workflows/9803"},
    nextBox:{text:"Every solo operator, consultant, and small service business faces this bottleneck. What I want to build next: AI systems that help teams make better decisions, not just move faster. Systems that show their work, admit uncertainty, and scale by being generous."},
    sections:[
      {num:"01",label:"problem",headline:"Building in public attracts attention. Attention isn't opportunity.",type:"text",
        body:"LinkedIn posts drove hundreds of DMs and calendar requests. The content was working — too well. But four calls would yield three hours of conversation and one actual client. Designers wanted to learn. Students wanted mentorship. Founders were 'just exploring.'\n\nEvery one of them was a real person with a real reason for reaching out. But I couldn't keep spending 15 hours a week on calls that would never convert — and I didn't want to become a gatekeeper.",
        quote:"I didn't need better content. I needed a better front desk."},
      {num:"02",label:"strategy",headline:"Three paths, one system. Nobody gets brushed off.",type:"three-col",
        body:"The system respects everyone's intent. Based on your intake answers and the Lead Brief, you're routed to the experience that actually serves you.",
        columns:[
          {title:"Path 1: Qualified",color:"#22C55E",text:"AI voice call within 15 min. Strategy session auto-scheduled. Lead Brief waiting for the call."},
          {title:"Path 2: Future",color:"#F59E0B",text:"Open-source template + resources sent. Nurture sequence keeps the door open for when they're ready."},
          {title:"Path 3: Learning",color:"#3B82F6",text:"Full blueprint, tutorials, community links. Generous and real — not a brush-off."}
        ]},
      {num:"03",label:"process",headline:"What happens in 60 seconds after you hit submit.",type:"flow",
        steps:[{title:"Intake",desc:"6 routing questions + AI call consent"},{title:"Research",desc:"Website scraped, Lead Brief generated"},{title:"Route",desc:"Three paths based on fit assessment"},{title:"Act",desc:"AI call, email, or resources sent"}]},
      {num:"04",label:"decisions",headline:"The design choices that defined the system.",type:"cards",
        cards:[
          {title:"Consent as a product feature",desc:"The AI call opt-in isn't legal fine print — it's a trust-building moment. When you know what's happening and choose it, the AI call becomes a live demo of what I can build."},
          {title:"Artifacts over automation",desc:"The Lead Brief shows its work. Source links. Confidence levels. 'Questions to confirm.' Most AI systems hide uncertainty. Bookee embraces it."},
          {title:"Open-source the blueprint",desc:"Published as a free n8n template. People who can build it themselves aren't my clients. People who try and struggle come back ready to pay."},
          {title:"Fallbacks define quality",desc:"What happens when no response? Wrong data? Reschedule three times? Those edge cases aren't bugs — they're the entire experience for most users."}
        ]},
      {num:"05",label:"results",headline:"From 18 hours to 5. From 33% to 100%.",type:"before-after",
        beforeAfter:[{label:"Calls/week",before:"12",after:"5"},{label:"Qualified",before:"4 (33%)",after:"5 (100%)"},{label:"Time spent",before:"18 hours",after:"5 hours"}]},
      {num:"06",label:"insights",headline:"Five principles for AI product work.",type:"numbered-list",
        items:[
          "AI must be legible — show sources, admit uncertainty, let users verify. The Lead Brief's confidence level is its most important feature.",
          "Fallbacks define quality — edge cases aren't bugs, they're the experience for most users. Design for the unhappy path first.",
          "Open-source as positioning — giving away the 'how' proves expertise. The blueprint is free; the judgment costs money.",
          "Speed only matters if it improves decisions — the Lead Brief is more valuable than the automated email.",
          "Consent is a product feature — not legal fine print. When the AI call is opt-in and transparent, it becomes a demo, not an intrusion."
        ]}
    ]
  },

  // ═══ PLAYDATES ═══ 5 sections: problem → research(callout) → insight(two-col) → process(flow) → decisions(cards) → launch(stats)
  {
    slug:"playdates",title:"Playdates",subtitle:"Consumer social app from research to App Store launch.",
    category:"ai-software",categoryLabel:"App Design",color:"#F59E0B",year:"2025",role:"Founder & Product Designer",client:"Self-founded startup",timeline:"Oct 2025 — Present",tools:"Figma, React Native, TestFlight, App Store Connect",
    tags:["Mobile App","UX Research","Social","Family","App Store"],featured:true,badges:["Founder"],
    thumbnail:"/projects/playdates/thumb.jpg",heroImage:"App screens — discovery feed with proximity cards + event creation + family profile",
    tldr:"Led full product lifecycle from strategy and user research through UI design to App Store launch. Built a social app helping parents coordinate playdates — discovering that the hard design problem wasn't scheduling, it was trust.",
    tldrStats:[{value:"Launched",label:"Live on iOS App Store"},{value:"15+",label:"Parent interviews conducted"},{value:"3x",label:"Onboarding completion improvement"}],
    nextBox:{text:"Expanding to Android, exploring AI-powered activity suggestions based on children's ages and local weather, and building community partnerships with parks and recreation departments."},
    sections:[
      {num:"01",label:"problem",headline:"Parents want their kids to socialize. Coordinating it is surprisingly hard.",type:"text",
        body:"Group texts get buried. School directories are outdated. Social apps parents already use — Instagram, Facebook groups, Nextdoor — aren't designed for family-level interactions. They're built for individuals.\n\nThe scheduling problem is real, but it's not the core friction. The core friction is trust. Before a parent will bring their kid to someone's home, they need to know: who is this family? Do our kids' ages overlap? Are they nearby?",
        quote:"The scheduling wasn't the hard part. The trust was."},
      {num:"02",label:"research",headline:"15 parents told me the same thing, differently.",type:"callout",
        body:"Talked to parents across Berkeley and Oakland about how they currently coordinate play. The patterns were clear within the first five interviews.",
        callout:{icon:"🎤",title:"The three things that mattered most",desc:"Trust verification ('who is this family?'), proximity ('are they walkable?'), and low-commitment first interactions ('can I just show up without DMing a stranger?'). Features and social graphs ranked last."}},
      {num:"03",label:"key insight",headline:"The unit of the app is the family, not the individual.",type:"two-col",
        body:"This insight changed everything about how profiles, matching, and events work. A playdate isn't two adults meeting — it's two families deciding if their kids are compatible.",
        columns:[
          {title:"Individual-first social apps",text:"Profile = one person. Matching = interests and demographics. First interaction = friend request or DM. High social cost. Built for adults."},
          {title:"Family-first social (Playdates)",text:"Profile = the family unit with children's ages. Matching = proximity + age overlap. First interaction = join a public event. Near-zero social cost."}
        ]},
      {num:"04",label:"process",headline:"From interviews to App Store in four phases.",type:"flow",
        steps:[{title:"Research",desc:"15+ parent interviews, workflow mapping"},{title:"IA restructure",desc:"Family discovery before scheduling"},{title:"UI design",desc:"Proximity-first feed, event cards"},{title:"Launch",desc:"TestFlight beta → App Store"}]},
      {num:"05",label:"decisions",headline:"Four choices that shaped the product.",type:"cards",
        cards:[
          {title:"Family profiles, not individual profiles",desc:"Parents create a family profile with children's ages, interests, and neighborhood. You're not swiping on people — you're finding compatible families."},
          {title:"Proximity over popularity",desc:"Discovery prioritizes walking distance, not follower counts. The most useful connection is the family three blocks away whose kid is the same age."},
          {title:"Low-commitment first interactions",desc:"Join a public playdate instead of sending a friend request. The social cost of participation is near-zero."},
          {title:"Onboarding as trust-building",desc:"Parents see nearby families immediately and experience value before being asked to commit to anything."}
        ]},
      {num:"06",label:"insights",headline:"What family-level social products taught me.",type:"numbered-list",
        items:[
          "Family-level social products need fundamentally different interaction models than individual social apps. The 'unit' changes every downstream decision.",
          "Trust isn't a feature — it's the foundation. Every design decision either builds or erodes it.",
          "For local social apps, the geographic radius IS the product constraint. A family 20 miles away is irrelevant; 3 blocks away is life-changing.",
          "Low-commitment entry points dramatically reduce the barrier to first interaction — which is where social products live or die."
        ]}
    ]
  },

  // ═══ PETCARD ═══ 4 sections: challenge → the build(two-col: speed vs polish) → ship → the gap(callout: 70/30)
  {
    slug:"petcard",title:"PetCard",subtitle:"Shipping a real product with AI as a design collaborator.",
    category:"ai-software",categoryLabel:"App Design",color:"#10B981",year:"2025",role:"Product Designer & Builder",client:"Hackathon → Self-published",timeline:"2 weeks → ongoing",tools:"Anything (AI app builder), TestFlight, App Store Connect",
    tags:["Mobile App","Pet Tech","Health Records","AI-Built","App Store"],featured:true,badges:["Anything Expert"],
    thumbnail:"/projects/petcard/thumb.jpg",heroImage:"Pet profile hub — vaccines, medications, vet contacts all on one scrollable screen",
    tldr:"Built a pet information app during a hackathon and pushed it from prototype to App Store submission. Recognized by the Anything team as a platform expert for demonstrating strong product thinking through the build.",
    tldrStats:[{value:"App Store",label:"Submitted to Apple"},{value:"Expert",label:"Recognized by Anything team"},{value:"70/30",label:"AI build vs. human design judgment"}],
    nextBox:{text:"Exploring what it takes to move from AI-generated builds toward production-ready workflows — including custom code layers and the question every designer building with AI tools faces: when does the tool end and the craft begin?"},
    sections:[
      {num:"01",label:"problem",headline:"The information existed. It just wasn't organized for the moment you needed it.",type:"text",
        body:"Pet owners juggle vaccination records, vet contacts, medication schedules, and emergency info across paper files, phone photos, and scattered apps. When you need your dog's vaccine record at the boarding facility, you're scrolling through months of camera roll.\n\nThe information isn't missing — it's just never organized for the moment you actually need it. And that moment is usually stressful.",
        quote:"The information existed. It just wasn't organized for the moment you needed it."},
      {num:"02",label:"the build",headline:"Speed vs. polish — two phases, two skill sets.",type:"two-col",
        body:"The hackathon rewarded speed. The App Store rewarded quality. The project required both.",
        columns:[
          {title:"Phase 1: Speed (Anything)",text:"AI app builder for concept to prototype in hackathon timeframe. Core value proven: one place for all pet info. Screens, navigation, data structure — all generated."},
          {title:"Phase 2: Polish (Design judgment)",text:"Multiple rounds of UX refinement: navigation cleanup, visual consistency, accessibility fixes, information hierarchy. Made it feel like a product, not a demo."}
        ]},
      {num:"03",label:"shipping",headline:"The App Store doesn't care that your prototype is impressive.",type:"text",
        body:"Metadata consistency. Privacy disclosures. Screenshot specifications. Review guidelines. Accessibility requirements. Every one of these surfaced UX issues that internal testing missed.\n\nThe shipping process taught more about product quality than the building process. It's easy to build something that works in a demo. It's hard to build something that survives real-world requirements.",
        images:["App Store submission — metadata, privacy disclosures, screenshot specs"]},
      {num:"04",label:"the 70/30 split",headline:"AI-built is not AI-quality.",type:"callout",
        body:"This is the design story worth telling. The AI tool got the app 70% there — screens, navigation, basic interactions. But the last 30% required human judgment: readable typography, consistent spacing, accessible contrast, intuitive information hierarchy, and the kind of visual polish that makes users trust an app with their pet's health data.",
        callout:{icon:"⭐",title:"Recognized as Anything expert",desc:"The Anything team recognized this work for pushing the platform further than a basic prototype — demonstrating that product thinking matters more than build speed. Expertise shows in how you handle the edges, not the happy path."}},
      {num:"05",label:"insights",headline:"What building with AI tools actually teaches you.",type:"numbered-list",
        items:[
          "AI app builders are powerful for speed but still need human design judgment for the last mile of quality. Knowing where that line falls is a design skill.",
          "Shipping a real product — with all its metadata, privacy, and review requirements — teaches more than any prototype ever could.",
          "Being recognized as a platform expert came from pushing the tool further than expected, not from using it the expected way.",
          "For health-adjacent data (even pet health), trust is the primary design requirement. Simplicity and predictability build more trust than features."
        ]}
    ]
  },

  // ═══ CLIENT INTAKE AGENT ═══ 3 sections: problem → architecture(flow) → what it creates(image-grid) → impact(stats)
  {
    slug:"notion-client-intake",title:"Client Intake Agent",subtitle:"AI system that turns a form submission into a fully built Notion project.",
    category:"ai-software",categoryLabel:"AI Automation",color:"#2563EB",year:"2025",role:"AI Product Designer & Builder",timeline:"2025 — Ongoing",tools:"Notion, n8n, Gmail, Telegram",
    tags:["AI","Notion","n8n","Workflow Design","Client Ops"],featured:true,badges:[],
    thumbnail:"/projects/notion-client-intake/thumb.jpg",heroImage:"System diagram — intake form → n8n automation pipeline → Notion project page + Gmail welcome + Telegram notification",
    tldr:"Designed and built an AI-powered client onboarding system that turns a simple intake form into automated project pages, client communication, and CRM tracking — all inside Notion with n8n handling the automation layer.",
    tldrStats:[{value:"0 min",label:"Manual onboarding time per client"},{value:"Published",label:"Live on n8n creators platform"},{value:"A&M",label:"Lead designer recognized the work"}],
    nextBox:{text:"Exploring how to add AI-powered triage — automatically assessing project fit and suggesting pricing based on scope signals in the form submission."},
    sections:[
      {num:"01",label:"problem",headline:"The bottleneck wasn't finding clients. It was onboarding them.",type:"text",
        body:"Freelancers spend hours on repetitive client onboarding: copying intake form data into project docs, sending welcome emails, creating task lists, updating spreadsheets. The work isn't hard — it's just time-consuming enough to create a bottleneck when business picks up.\n\nEvery manual step is a place where things get dropped. A welcome email sent late. A project page missing key details. A client record not updated. The friction compounds."},
      {num:"02",label:"architecture",headline:"Form submitted. Everything else is automatic.",type:"flow",
        body:"The entire system fires from a single trigger: form submission. No manual steps between the client filling out a form and the project being fully set up.",
        steps:[{title:"Intake form",desc:"Client submits project details"},{title:"n8n parses",desc:"Data extracted and validated"},{title:"Notion creates",desc:"Project page with service-specific checklist"},{title:"Comms fire",desc:"Gmail welcome + Telegram alert"}]},
      {num:"03",label:"what it creates",headline:"One form submission generates four outputs.",type:"image-grid",
        body:"Each output is tailored to the service type. A brand project gets a different checklist than a website project. The automation is smart enough to match.",
        images:["Notion project page with pre-filled checklists","Client record in CRM database","Personalized Gmail welcome email","Telegram notification to freelancer"]},
      {num:"04",label:"decisions",headline:"Two architecture choices that made it work.",type:"cards",
        cards:[
          {title:"Notion as single source of truth",desc:"Instead of splitting across tools, everything lives in Notion. Clients, projects, tasks, notes — all connected through linked databases. One place to check, one place to update."},
          {title:"Service-type-aware templates",desc:"Different services automatically generate different project templates. A brand project gets brand-specific checklists. A website project gets website-specific tasks. The system knows the difference."}
        ]}
    ]
  },

  // ═══ PIG FARM TRANSLATOR ═══ 6 sections: problem → research(callout) → scenarios(cards) → product(image-grid) → system(cards) → impact(numbered)
  {
    slug:"pig-farm-translator",title:"豬場翻譯 · Pig Farm Translator",subtitle:"Research-driven multilingual farm app — built from real LINE data so a Taiwan pig farm can coordinate with migrant workers without the screenshot-translate-paste loop.",
    category:"ai-software",categoryLabel:"AI Communication Tool",color:"#0F7669",year:"2026",role:"Researcher, Product Designer & Builder",client:"Hong Long Farm (鴻隆牧場) — family",timeline:"Apr 2026",tools:"Claude (Anthropic), Claude API, OpenAI TTS, Vercel serverless, GitHub, HTML/CSS/JavaScript",
    tags:["AI","Multilingual UX","Agriculture","LINE","Taiwan","Migrant Workers"],featured:false,badges:["Live"],
    thumbnail:"/projects/pig-farm-translator/thumb.jpg",heroImage:"Mobile-first UI — mint field, four tabs (Home / 翻譯 / 片語庫 / 術語), dual-language copy and language chips for Thai, Indonesian, Vietnamese",
    tldr:"Collected real LINE threads between a farm manager and workers, mapped patterns and terminology gaps, then designed and shipped a mobile-first web app: farm-context translation, 44 saved phrases from actual messages, 80+ glossary terms with Mandarin TTS, dual-audience copy (Chinese + worker language in one tap), PIN + 90-day sessions, keys secured in Vercel functions. Live on Vercel; expanded from Thai to Indonesian and Vietnamese after conversations with other Taiwanese pig farmers.",
    tldrStats:[{value:"44",label:"Phrase library entries from real LINE text"},{value:"80+",label:"Glossary terms with TTS across 15 categories"},{value:"$2–3",label:"Est. monthly cost for the whole team"}],
    ctaBox:{title:"Try the live app.",desc:"Mobile-first — open on a phone. PIN-protected; APIs proxied server-side.",label:"Open Pig Farm Translator",url:"https://pig-farm-translator.vercel.app"},
    nextBox:{text:"Roadmap: shared cloud phrase database so the library compounds across devices and farms; role-based verification; additional Southeast Asian languages as Taiwan's agricultural labor mix shifts."},
    sections:[
      {num:"01",label:"why this exists",headline:"The farm didn't pause for grief — but every instruction was still slow and fragile.",type:"text",
        body:"After my brother passed away, my sister-in-law Kiki took over 鴻隆牧場 in Taiwan: animals, workers, sales, health decisions — every day. Workers and managers coordinate on LINE, but the language barrier turned routine updates into a grind: type Chinese, paste into Google Translate, screenshot the result, switch to LINE, paste an image workers couldn't copy, search, or learn from.\n\nFarm vocabulary (weaning, holding pens, nursery routes) broke generic translation — mistakes had real welfare and money consequences. This project started as one practical way to remove friction for someone already carrying more than her share.",
        quote:"I wanted fewer errors, faster communication, and less cognitive load — not another generic translator."},
      {num:"02",label:"research",headline:"Real LINE screenshots before a single line of code.",type:"callout",
        body:"I studied how Kiki and workers actually talk: what gets sent (cleaning, feeding, health, moves, staffing, sales), where translation fails, which phrases repeat, and what workers need over time (pronunciation, copyable text, not bitmaps). That work became 15 operational categories and the evidence base for every screen.",
        callout:{icon:"💬",title:"What the screenshots exposed",desc:"The old workflow wasn't just slow — it produced messages only one audience could use. Workers received images they couldn't reuse; managers re-translated the same ideas all day. The product had to serve dual-audience messaging and worker learning, not 'translate a paragraph' in isolation."}},
      {num:"03",label:"use scenarios",headline:"Four scenarios, mapped directly from the data.",type:"cards",
        cards:[
          {title:"Daily task instructions",desc:"5–10 messages/day, repetitive but detailed. A phrase library of 44 entries from real LINE text — searchable across 15 categories — so Kiki taps, copies, and sends in seconds."},
          {title:"Urgent or unique situations",desc:"Sick animal, burst pipe, sale in two hours. Live Translate uses Claude with a farm-loaded system prompt so domain terms render accurately, not as generic nonsense."},
          {title:"Worker vocabulary learning",desc:"Glossary of 80+ terms with OpenAI TTS — hear Mandarin for the words that show up on the job. A trainer built from operational language, not a random dictionary."},
          {title:"Dual-audience messaging",desc:"Copy outputs Chinese on line one and the worker's language on line two — one paste into LINE for managers and workers. Replaces copy → translate → screenshot → switch apps."}
        ]},
      {num:"04",label:"product",headline:"Four screens. Everything ties to a scenario.",type:"image-grid",
        body:"Mobile-first web app (no store install): mint field, white cards, bilingual labels, flag chips for Thai / Indonesian / Vietnamese. Built through iterative work with Claude, deployed on Vercel via GitHub in one working session.",
        images:["Home — quick tiles, recents, fast paths to translate, phrases, and glossary","Translate — Claude-backed farm context + dual-language copy to LINE","Phrase library & glossary — 15 categories, saved phrases, TTS playback for terms"]},
      {num:"05",label:"system design",headline:"Security and adoption choices for real farm conditions.",type:"cards",
        cards:[
          {title:"Serverless API proxy",desc:"Anthropic + OpenAI keys live in Vercel functions — never shipped to the browser."},
          {title:"Shared PIN, 90-day session",desc:"No corporate email, no password maze. First unlock on a device holds for 90 days — low friction for non-technical users, appropriate for this context."},
          {title:"Phrase library as compounding asset",desc:"New translations save back into the library, cutting repeat API calls and preserving operational language."},
          {title:"Three languages by demand",desc:"Started Thai-first; added Indonesian and Vietnamese after other Taiwanese pig farmers reported the same hiring mix."}
        ]},
      {num:"06",label:"scale",headline:"One farm — a pattern for Taiwan's agricultural labor reality.",type:"numbered-list",
        body:"Taiwan employs hundreds of thousands of migrant workers; labor surveys consistently cite language barriers as a top management challenge. Agriculture needs dynamic, high-stakes instructions — consumer translation tools weren't built for biosecurity, animal health, or shift-to-shift coordination.",
        items:[
          "Purpose-built beats generic: domain prompts + saved operational phrases beat one-off Google Translate for specialized vocabulary.",
          "Dual-language copy is the efficiency unlock — both audiences read the same paste; screenshots become unnecessary.",
          "Collective phrase data is the strategic asset — per-device today, cloud-backed tomorrow for shared intelligence across teams and farms.",
          "Low monthly run cost (~$2–3) makes sustained deployment realistic for small operators — proof that narrow AI tools can ship without enterprise overhead."
        ]}
    ]
  },

  // ═══ REELWISH ═══ 6 sections: problem → tension(callout) → gesture map(flow) → process(flow) → prototype(image-grid) → decisions(cards)
  {
    slug:"reelwish",title:"Reelwish: What if a gesture said more than a word?",subtitle:"Figma Make Hackathon concept — hand movements trigger real-time emotional reactions so digital connection feels present, not archived.",
    category:"digital-product",categoryLabel:"Interaction Design",color:"#C026D3",year:"2026",role:"Interaction Designer",client:"Figma Make-a-thon (powered by Contra)",timeline:"Feb — Mar 2026",tools:"Figma, Figma Make",
    tags:["Gesture UX","Hackathon","Emotional Design","Prototype","Speculative"],featured:false,badges:["Concept"],
    thumbnail:"/projects/reelwish/thumb.jpg",heroImage:"Front-camera gesture capture — joy / surprise / support / connection reactions animating in real time for viewer and creator",
    tldr:"Designed Reelwish for the Figma Make Hackathon: a gesture-driven layer on top of digital communication where movements (raised hands, hands-to-face, open palm, wave) trigger joy, surprise, support, and connection — built as a working interactive prototype in Figma Make, not static mocks. Focused on immediacy (<0.5s), no extra hardware, and reactions visible to both sides of the screen.",
    tldrStats:[{value:"4",label:"Core emotions + gesture mappings"},{value:"<0.5s",label:"Target recognition / response window"},{value:"Live",label:"Concept prototype on Figma Site"}],
    ctaBox:{title:"Experience the prototype.",desc:"Best on mobile — front-camera gesture framing and micro-interactions as shipped for the hackathon.",label:"Open reelwish.figma.site",url:"https://reelwish.figma.site/"},
    nextBox:{text:"Next: expand gesture library with cross-cultural validation; map failure states (low light, misreads, accessibility); explore integration surfaces — live stream, video call, or social feed."},
    sections:[
      {num:"01",label:"problem",headline:"We've optimized networks for content — and almost nothing for feeling.",type:"text",
        body:"Digital communication defaulted to text and static emoji. Neither carries the nuance of in-person warmth — the reassuring hand on a shoulder, the burst of joy you want to share in the moment. People feel less connected online not because they lack tools, but because tools strip immediacy and presence.\n\nReactions exist — likes, emoji, GIFs — but they read as passive, delayed checkboxes. The gap isn't 'what to send.' It's latency and embodiment: what you feel vs. what you can express before the moment passes.",
        quote:"Text strips tone. Emojis flatten nuance."},
      {num:"02",label:"tension",headline:"Viewers and creators are both emotionally underserved.",type:"callout",
        body:"The spark: you watch something that moves you — a friend's announcement, a funny beat — and you tap a heart or type 'omg.' It lands flat. The gap between felt response and expressible response is what Reelwish targets.\n\nViewers feel in real time but lack a natural channel beyond a tap. Creators broadcast into metrics that say nothing about emotional quality. Reelwish was framed to close that loop with presence, not aggregates.",
        callout:{icon:"✋",title:"What if your hands could say what your keyboard can't?",desc:"A speculative question — not a bigger emoji picker. The reframe: from selecting content to expressing in the moment, with the body visible to a front camera everyone already has."}},
      {num:"03",label:"gesture map",headline:"Four gestures — readable, low-learning, under half a second.",type:"flow",
        body:"Every gesture had to read on a front camera without calibration, in variable lighting, fast enough that emotion still felt real.",
        steps:[
          {title:"Joy",desc:"Open hands raised — celebratory, cross-context"},
          {title:"Surprise",desc:"Hands to face — instinctive, recognizable"},
          {title:"Support",desc:"Open palm toward screen — offering, presence"},
          {title:"Connection",desc:"Wave or point — acknowledgment of shared space"}
        ]},
      {num:"04",label:"process",headline:"From emoji-picker instinct to Figma Make prototype.",type:"flow",
        body:"Hackathon constraints (time + Figma Make as the build surface) forced scope discipline — one idea, fully demonstrated.",
        steps:[
          {title:"Reframe",desc:"Not a content problem — a latency / embodiment problem"},
          {title:"Map gestures",desc:"Cross-context gestures vs. learned choreography"},
          {title:"Build in Make",desc:"Full loop: detect → categorize → animate reaction → both sides see it"},
          {title:"Frame narrative",desc:"Prototype site built to be experienced, not only screenshotted"}
        ]},
      {num:"05",label:"prototype",headline:"Interaction loop in Figma Make.",type:"image-grid",
        body:"The prototype demonstrates viewer gesture → system recognition → shared reaction surface — emotional signal for the creator, not only a count.",
        images:["Gesture capture state — camera framing + affordance hints","Reaction layer — joy / surprise / support / connection micro-animations","Presentation shell — reelwish.figma.site narrative and walkthrough"]},
      {num:"06",label:"decisions",headline:"Four choices that kept the concept sharp.",type:"cards",
        cards:[
          {title:"Four emotions, not unlimited",desc:"Breadth creates paralysis and kills immediacy. Four states, four gestures, learnable in seconds."},
          {title:"Visible on both sides",desc:"Reactions are simultaneous for viewer and creator — presence in the moment, not delayed aggregation."},
          {title:"Gesture over tap",desc:"A tap is binary; a gesture carries its own body language beyond the label it triggers."},
          {title:"Clarity over feature creep",desc:"Prove one thesis completely: gesture-triggered real-time reactions can feel natural — not five half-built ideas."}
        ]}
    ]
  },

  // ═══ HOMEWORKS ═══ 2 sections: problem → concept(callout: health score)
  {
    slug:"homeworks",title:"HomeWorks: Your home's AI sidekick.",subtitle:"Turning maintenance chaos into a health score — so homeowners know what to fix and when.",
    category:"digital-product",categoryLabel:"App Design",color:"#0891B2",year:"2024",role:"Product Designer",tools:"Figma, AI prototyping",
    tags:["Mobile App","AI","Home Maintenance","Product Design"],featured:false,badges:[],
    thumbnail:"/projects/homeworks/thumb.jpg",heroImage:"Home health scorecard — 85% score with prioritized maintenance items and monthly action plan",
    tldr:"Designed a home maintenance app that uses AI to turn scattered repair needs into a prioritized health scorecard — helping homeowners understand what needs attention and when.",
    tldrStats:[{value:"85%",label:"Health score concept validated"},{value:"0→100",label:"Single score for home condition"}],
    sections:[
      {num:"01",label:"problem",headline:"Every homeowner has a mental list. Nobody has a system.",type:"text",
        body:"Homeowners know things need fixing but don't know what's urgent vs. what can wait. Maintenance information is scattered across paper warranties, contractor texts, and mental notes. By the time something breaks, it's already an emergency.\n\nThe question isn't 'what needs fixing?' — it's 'what should I fix this month?'",
        quote:"Every homeowner has a mental list of things that need fixing. Nobody has a system for prioritizing them."},
      {num:"02",label:"concept",headline:"One number that tells you how your home is doing.",type:"callout",
        body:"A home health score (0-100) aggregates the condition of major systems — HVAC, plumbing, electrical, roof, appliances — into a single number. Monthly action plans turn the score into 'fix these 3 things this month' instead of a paralyzing 50-item checklist.\n\nThe insight: AI is most useful when it prioritizes, not just informs. Telling someone '47 things need fixing' is paralyzing. Telling them 'fix these 3 this month' is actionable.",
        callout:{icon:"🏠",title:"Score over checklist",desc:"A single health score is more motivating than a 50-item list. It answers 'how is my home doing?' in one number — then breaks down into monthly actions when you're ready to dig in."}}
    ]
  },

  // ═══ REKEEPIT ═══ 4 sections: problem → reframe(callout) → visual system(image-grid) → impact(stats)
  {
    slug:"rekeepit",title:"ReKeepIt: Data storytelling for sustainability.",subtitle:"Turning abstract sustainability claims into visual stories that merchants actually care about — by leading with money.",
    category:"ai-software",categoryLabel:"Shopify Plugin",color:"#059669",year:"2024",role:"Product Designer",timeline:"3 months",tools:"Figma, Shopify, Icon design",
    tags:["Shopify","Sustainability","Data Viz","E-Commerce","Icon Design"],featured:false,badges:[],
    thumbnail:"/projects/rekeepit/thumb.jpg",heroImage:"Landing page — before/after with sustainability impact metrics: $12K saved, -40% returns, CO₂ reduced",
    tldr:"Redesigned merchant onboarding and landing page for a Shopify returns platform. Turned abstract sustainability claims into concrete visual stories — dollars saved, carbon reduced, returns prevented.",
    tldrStats:[{value:"↑ 40%",label:"Rewards program engagement"},{value:"3 sec",label:"Target comprehension time"},{value:"New",label:"Icon system delivered"}],
    nextBox:{text:"Exploring how this data storytelling approach could extend to other Shopify merchants — making environmental impact a competitive advantage, not just compliance."},
    sections:[
      {num:"01",label:"problem",headline:"'Reduce your carbon footprint' doesn't change behavior.",type:"text",
        body:"Returns are expensive and wasteful — extra shipping, handling friction, unnecessary carbon emissions. But merchants see returns as a backend operations problem, not a design opportunity.\n\nThe sustainability pitch wasn't landing. Generic claims like 'reduce your footprint' are too abstract to drive action. Merchants needed to see what return reduction actually looks like in their bottom line.",
        quote:"The data existed. The story didn't."},
      {num:"02",label:"reframe",headline:"Lead with dollars. Follow with carbon.",type:"callout",
        body:"The core design decision was sequencing. Sustainability is real and important — but it's not what makes merchants install a Shopify plugin. Money is. So the landing page opens with '$12K saved' and the onboarding leads with projected ROI. The environmental impact comes second, as the bonus that makes merchants feel good about a decision they'd make anyway.",
        callout:{icon:"💰",title:"The 3-second comprehension test",desc:"Every visualization was designed to answer 'what does this save me?' in under 3 seconds. If a merchant had to read a paragraph to understand the value, the design failed. Icons, numbers with context, and before/after comparisons do the heavy lifting."}},
      {num:"03",label:"visual system",headline:"An icon language for sustainability metrics.",type:"image-grid",
        body:"Created an iconography system that supports quick comprehension of sustainability metrics without requiring reading. Each icon tells a micro-story: saved money, prevented shipments, reduced carbon. The system works across the landing page, merchant dashboard, and onboarding flow.",
        images:["Icon system — money saved, carbon reduced, returns prevented","Merchant onboarding — projected savings based on store data","Rewards program UI — customer-facing incentive"]},
      {num:"04",label:"decisions",headline:"Four choices that shaped the communication design.",type:"cards",
        cards:[
          {title:"Business value before sustainability",desc:"Opening with financial impact ('$12K saved') and following with environmental impact. Merchants care about cost first."},
          {title:"Visual proof over claims",desc:"A dashboard with real numbers beats a sustainability badge. Numbers with context — not percentages without baselines."},
          {title:"Two-sided incentive design",desc:"Customers earn points for keeping products. Merchants reduce costs. Both sides win — creating durable behavior change."},
          {title:"Icon system for cognitive load",desc:"Sustainability data is abstract. Icons reduce the cognitive load by turning numbers into recognizable patterns."}
        ]}
    ]
  },

  // ═══ CLIENT OPS KIT ═══ 4 sections: problem → system(two-col) → three tiers(three-col) → publishing(cta)
  {
    slug:"client-ops-kit",title:"Client Ops Kit: Systems that match how freelancers actually work.",subtitle:"A Notion + n8n client management system — published as an open template, recognized by industry designers.",
    category:"ai-software",categoryLabel:"Workflow System",color:"#8B5CF6",year:"2024",role:"Designer & Builder",timeline:"2024",tools:"Notion, n8n, Gmail, Telegram",
    tags:["Notion","n8n","Automation","Freelance","Published Template"],featured:false,badges:["Open Source"],
    thumbnail:"/projects/client-ops-kit/thumb.jpg",heroImage:"System overview — Notion project database + n8n automation workflow canvas side by side",
    tldr:"Designed and published a complete client management system for freelancers — combining Notion for project tracking with n8n for automation. Recognized by an A&M lead designer. Published as an open template.",
    tldrStats:[{value:"Published",label:"Live on n8n creators"},{value:"A&M",label:"Lead designer recognized"},{value:"0 min",label:"Manual onboarding per client"}],
    nextBox:{text:"Exploring AI-powered features: automatic scope assessment from intake form text, suggested pricing based on project type, and smart follow-up scheduling."},
    sections:[
      {num:"01",label:"problem",headline:"Freelancers don't need a bigger CRM. They need a system that fits.",type:"text",
        body:"Freelancers are great at the work but often drown in the operations around the work — tracking leads, sending follow-ups, creating project pages, managing invoices. Most either over-engineer with expensive tools or under-engineer with scattered spreadsheets.\n\nThe gap isn't tools — it's systems designed for how solo operators actually work.",
        quote:"They don't need a bigger CRM. They need a system that matches how they actually work."},
      {num:"02",label:"system design",headline:"Notion as the visible layer. n8n as the invisible layer.",type:"two-col",
        body:"The system splits into two layers: what the freelancer sees and interacts with daily (Notion), and what runs silently in the background (n8n automation).",
        columns:[
          {title:"Notion: The visible system",text:"Linked databases for clients, projects, and deliverables. Pipeline views for tracking status. Project pages with service-specific checklists. One place to check, one place to update."},
          {title:"n8n: The invisible system",text:"Intake forms trigger Notion page creation. Gmail sends automated responses. Telegram delivers real-time notifications. Error handling for missing fields and edge cases."}
        ]},
      {num:"03",label:"product ladder",headline:"Three tiers, three entry points.",type:"three-col",
        body:"Different freelancers have different technical comfort levels. Instead of one product for everyone, the system offers three entry points.",
        columns:[
          {title:"Notion template",color:"#8B5CF6",text:"Free. Clone the database structure. Set up your own pipeline views and project templates. No automation required."},
          {title:"n8n automation",color:"#8B5CF6",text:"Free. Clone the workflow. Connect your own Gmail and Notion. Requires n8n account and basic setup."},
          {title:"Full Kit + guide",color:"#8B5CF6",text:"Both systems together with documentation. For freelancers who want the complete system without piecing it together."}
        ]},
      {num:"04",label:"insights",headline:"What publishing internal tools teaches you.",type:"numbered-list",
        items:[
          "The best freelancer tools are invisible — they run in the background so you can focus on the actual work.",
          "Publishing internal systems as templates is both generous and strategic — it proves expertise while building audience.",
          "Matching the tool to the workflow (not the other way around) is what makes systems stick long-term.",
          "Open-source as positioning: people who can build it themselves aren't your clients. People who see the complexity and hire you are."
        ]}
    ]
  },

  // ═══ ALACRITY ═══ 4 sections: challenge → audit(callout) → system(three-col) → impact(stats)
  {
    slug:"alacrity",title:"Alacrity: The 10-day design system sprint.",subtitle:"Auditing an existing system, making the keep-or-rebuild call, and delivering a token-based Figma system that made the team 40% faster.",
    category:"digital-product",categoryLabel:"Design System",color:"#6366F1",year:"2025",role:"Design System Lead",client:"Alacrity / R2/FA Insured Portal",timeline:"10-day sprint",tools:"Figma, Design Tokens, Scale.DS v2.9.0 audit",
    tags:["Design System","Figma","Insurance","Cross-Platform","Tokens"],featured:false,badges:[],
    thumbnail:"/projects/alacrity/thumb.jpg",heroImage:"Design system overview — tokens → components → patterns, with light/dark mode and desktop/mobile breakpoints",
    tldr:"Built a scalable, token-based Figma design system for a home insurance portal across desktop and mobile — collaborating with two designers in a 10-day sprint. Reduced design-to-development time by approximately 40%.",
    tldrStats:[{value:"~40%",label:"Design-to-dev time reduction"},{value:"10 days",label:"Full system delivered"},{value:"2",label:"Platforms (desktop + mobile)"}],
    nextBox:{text:"The system is designed to scale. Next phase: integrating with a coded component library and establishing a contribution model for the broader team."},
    sections:[
      {num:"01",label:"challenge",headline:"No consistent foundation. Every screen built from scratch.",type:"text",
        body:"The design team lacked reusable components. Every new sprint meant rebuilding patterns that should have existed. Handoff to engineering was slow and inconsistent.\n\nAn existing WIP system (Scale.DS v2.9.0) existed but needed evaluation — a decision that required judgment before touching a single component. Insurance products have dense, form-heavy interfaces with complex state logic that generic component libraries don't handle."},
      {num:"02",label:"the audit",headline:"The decision no one talks about in design system work.",type:"callout",
        body:"The first task wasn't to design anything. It was to audit what already existed and make a call: is Scale.DS v2.9.0 worth refining, or does rebuilding produce better results faster?\n\nThat decision — made before touching a component — shaped everything. Taking two days to audit before building is what made the 10-day timeline achievable without cutting scope.",
        callout:{icon:"🔍",title:"Audit before build",desc:"A bad call in either direction would cost the project either time (rebuilding something salvageable) or quality (patching something that couldn't scale). This judgment call is what separates senior design system work from junior design system work."}},
      {num:"03",label:"system architecture",headline:"Foundations, components, documentation — all inline.",type:"three-col",
        body:"The system was built in three layers, each inheriting from the one below.",
        columns:[
          {title:"Foundations",color:"#6366F1",text:"Design tokens: color, typography, spacing, elevation, border radius. The DNA that every component inherits."},
          {title:"Components",color:"#6366F1",text:"Modular with full state coverage: active, error, disabled, read-only, loading. Built for insurance complexity — forms, claims, policies."},
          {title:"Documentation",color:"#6366F1",text:"Inline in every component. Usage cases, behavior specs, accessibility guidelines. The system IS the documentation — no separate wiki."}
        ]},
      {num:"04",label:"insights",headline:"What a 10-day sprint teaches about design systems.",type:"numbered-list",
        items:[
          "The audit decision is the most senior moment in design system work — knowing what to keep vs. rebuild requires experience, not just skill.",
          "Insurance interfaces need component systems designed for complexity, not simplicity. Full state logic across forms and claims flows.",
          "Inline documentation is the only documentation that survives. Separate wikis get stale by week two.",
          "Collaborative builds (3 designers) require a shared token foundation before anyone touches components."
        ]}
    ]
  },

  // ═══ MINA ═══ 3 sections: problem → signal framework(three-col) → pivot + award(callout)
  {
    slug:"mina",title:"MINA",subtitle:"AI startup research dashboard. 1st place at You.com Hackathon.",
    category:"digital-product",categoryLabel:"AI Dashboard",color:"#0EA5E9",year:"2025",role:"Product Designer & Builder",timeline:"Hackathon",tools:"You.com API, React, Figma",
    tags:["AI","Hackathon","You.com API","Startup Research","1st Place"],featured:true,badges:["1st Place"],
    thumbnail:"/projects/mina/thumb.jpg",heroImage:"Dashboard — funding + hiring + launch signals feeding into a single momentum score",
    tldr:"Built a startup research assistant that combines funding, product-launch, and hiring signals into one momentum dashboard. Won 1st place at the You.com Agentic Hackathon.",
    tldrStats:[{value:"1st",label:"Place at You.com Hackathon"},{value:"3",label:"Signal types synthesized"},{value:"Live",label:"Working prototype delivered"}],
    sections:[
      {num:"01",label:"problem",headline:"Startup research is fragmented. Nobody has a single view of momentum.",type:"text",
        body:"Funding announcements live on Crunchbase. Product launches on Product Hunt. Hiring signals on LinkedIn. By the time you've checked all three, the momentum signal is stale.\n\nThe data exists — it's just scattered across platforms that don't talk to each other.",
        quote:"The signals existed. They just weren't combined."},
      {num:"02",label:"signal framework",headline:"Three signals, one score.",type:"three-col",
        body:"MINA synthesizes three signal types — each weighted differently — into a single momentum score.",
        columns:[
          {title:"Funding signals",color:"#0EA5E9",text:"Rounds, amounts, investor quality. Weighted for recency — a Series A this month matters more than a seed round last year."},
          {title:"Product signals",color:"#0EA5E9",text:"Launches, updates, feature announcements. Weighted for velocity — shipping frequency indicates operational health."},
          {title:"Hiring signals",color:"#0EA5E9",text:"Job postings, team growth, role types. Engineering-heavy hiring signals building mode; sales-heavy signals scaling mode."}
        ]},
      {num:"03",label:"the pivot",headline:"Built for investors. Shipped for job seekers.",type:"callout",
        body:"Originally designed for investors tracking startup deal flow. Mid-hackathon, I recognized the tool was more useful for job seekers evaluating which startups to join and BD professionals identifying partnership opportunities. Pivoted the framing without rebuilding the core — the architecture supported it because signal synthesis is audience-agnostic.",
        callout:{icon:"🏆",title:"1st place — product thinking over technical execution",desc:"The win came from recognizing the audience pivot mid-build and shipping a reframed product within the deadline. Hackathon judges valued the judgment call as much as the working prototype."}}
    ]
  },

  // ═══ TCA ALLIANCE ═══ 4 sections: challenge → IA(three-col) → stakeholders(callout) → decisions(cards)
  {
    slug:"tca",title:"TCA Alliance",subtitle:"Brand and web for a 17-member biopharmaceutical alliance.",
    category:"digital-product",categoryLabel:"Brand & Web",color:"#0D9488",year:"2024",role:"Brand & Web Designer",client:"Taiwan CDMO Alliance",timeline:"2024",tools:"Figma, Web design, Brand identity",
    tags:["Brand","Website","Biopharmaceutical","Information Architecture","Identity"],featured:true,badges:[],
    thumbnail:"/projects/tca/thumb.jpg",heroImage:"TCA Alliance website — homepage with member directory and capability navigation",
    tldr:"Designed the brand website and full visual identity for Taiwan CDMO Alliance — a biopharmaceutical network of 17 contract development and manufacturing organizations. The core challenge was information architecture: making 17 distinct companies and their overlapping capabilities navigable for potential pharma partners.",
    tldrStats:[{value:"17",label:"CDMO members organized"},{value:"Full",label:"Brand identity delivered"},{value:"Live",label:"Website launched"}],
    nextBox:{text:"The TCA model — designing information architecture for multi-member alliances — applies to any industry where a group of independent organizations needs to present a unified front while maintaining individual identity."},
    sections:[
      {num:"01",label:"challenge",headline:"17 companies. Overlapping capabilities. One website.",type:"text",
        body:"Taiwan CDMO Alliance brings together 17 contract development and manufacturing organizations — each with its own specialties, facilities, and capabilities. Potential pharma partners need to find the right CDMO for their specific needs, but 17 companies with overlapping services is overwhelming without clear navigation.\n\nThe design challenge wasn't visual — it was structural. How do you organize 17 members so a visitor can find what they need in under 30 seconds?",
        quote:"The design challenge wasn't visual. It was structural."},
      {num:"02",label:"information architecture",headline:"Three ways in: by capability, by member, by need.",type:"three-col",
        body:"Instead of forcing visitors into one navigation path, the IA offers three entry points depending on what the visitor already knows.",
        columns:[
          {title:"Browse by capability",color:"#0D9488",text:"Filter CDMOs by what they do: API manufacturing, formulation, fill-finish, packaging, etc. For visitors who know what service they need."},
          {title:"Browse by member",color:"#0D9488",text:"Directory of all 17 members with individual profiles, facilities, and certifications. For visitors who know which company they want."},
          {title:"Browse by need",color:"#0D9488",text:"Guided flow: 'I need help with ___' → matched to relevant CDMOs. For visitors who are early in their search."}
        ]},
      {num:"03",label:"stakeholder alignment",headline:"17 members means 17 opinions on what matters most.",type:"callout",
        body:"Every member wanted their company prominently featured. The design had to balance equal representation with useful hierarchy — showing all 17 without overwhelming the visitor. The solution: a capability-first architecture where members surface based on relevance, not politics.",
        callout:{icon:"🤝",title:"Equal representation through relevance",desc:"Instead of ordering members by size or alphabetically, the site surfaces them through capability filters. Every member gets equal treatment in the directory, but visitors find them through what they actually need — creating useful hierarchy without political hierarchy."}},
      {num:"04",label:"decisions",headline:"Design choices for multi-member platforms.",type:"cards",
        cards:[
          {title:"Capability-first, not member-first",desc:"Visitors care about what they need, not who provides it. The IA leads with capabilities and surfaces members as results."},
          {title:"Consistent member profiles",desc:"Every CDMO gets the same profile template: capabilities, facilities, certifications, contact. No member gets a bigger page than another."},
          {title:"Alliance brand over individual brands",desc:"The visual identity positions TCA as a unified alliance with a coherent brand, not a loose collection of logos. Individual brands live within a shared system."}
        ]}
    ]
  },

  // ═══ CAFÉ NOIR ═══ 4 sections: starting point → model(three-col) → build(flow) → results(stats)
  {
    slug:"cafe-noir",title:"Café Noir: Four businesses inside one kitchen.",subtitle:"Launching a ghost kitchen from zero — brand, tech, operations, and a $300K government contract.",
    category:"digital-product",categoryLabel:"Brand & Product Launch",color:"#78350F",year:"2024",role:"Strategy, Content, Email Marketing, Web Development",client:"Café Noir, East Oakland",timeline:"6+ months",tools:"OrderOut, QuickBooks, WordPress, Mailchimp, YouTube",
    tags:["Brand","Ghost Kitchen","Operations","Food & Bev","Launch Strategy"],featured:false,badges:[],
    thumbnail:"/projects/cafe-noir/thumb.jpg",heroImage:"Café Noir — kitchen operations, community events, and digital presence overview",
    tldr:"Launched a ghost kitchen in East Oakland from zero. Built the full digital presence, POS stack, marketing infrastructure, and event programming. Grew email list to 1,000+ subscribers in 6 months and secured a $300K+ Oakland summer lunch program contract.",
    tldrStats:[{value:"8+",label:"Events per month (15-600 guests)"},{value:"1,000+",label:"Email subscribers in 6 months"},{value:"$300K+",label:"Oakland summer lunch contract"}],
    sections:[
      {num:"01",label:"starting point",headline:"No tech. No audience. No systems. Already open.",type:"text",
        body:"Café Noir had a kitchen and a vision — but no technology, no online presence, no customer base, and no operational systems. Everything needed to be built simultaneously while the restaurant was already open and serving customers.",
        quote:"We weren't designing a restaurant. We were designing four businesses inside one kitchen."},
      {num:"02",label:"model",headline:"One kitchen, four revenue streams.",type:"three-col",
        body:"Café Noir wasn't designed as a traditional restaurant. It was designed as a multi-stream operation where no single channel is the whole business.",
        columns:[
          {title:"Dine-in + Delivery",text:"Physical location plus DoorDash and Uber Eats via OrderOut integration. Daily revenue from foot traffic and digital orders."},
          {title:"Catering events",text:"8+ events per month, 15 to 600 guests. The kitchen doubles as a production base during the restaurant's off-peak hours."},
          {title:"Government contracts",text:"Secured the Oakland summer lunch program — $300K+ providing school lunches for 10 weeks. Required high-volume production systems."}
        ]},
      {num:"03",label:"build",headline:"Technology, marketing, and events — built in parallel.",type:"flow",
        steps:[{title:"POS stack",desc:"OrderOut, QuickBooks, Samsung kiosks"},{title:"Marketing",desc:"Email, YouTube, SEO, direct mail"},{title:"Events",desc:"8+/month, 15-600 guests"},{title:"Government",desc:"$300K+ lunch contract"}]},
      {num:"04",label:"insights",headline:"What launching a ghost kitchen teaches about design.",type:"numbered-list",
        items:[
          "Operations systems are a design problem. A restaurant with beautiful branding and broken operations doesn't succeed.",
          "Multi-stream revenue models create resilience — no single channel is the whole business.",
          "Email lists are the most underrated marketing asset for small businesses. Social reach is rented; email is owned.",
          "Earned media (CitySide feature) provides credibility that paid advertising can't replicate — especially for unfamiliar concepts like ghost kitchens."
        ]}
    ]
  },

  // ═══ COOK AND RUN ═══ 3 sections: problem → discovery(callout: errors=UX) → results(before-after)
  {
    slug:"cook-and-run",title:"Cook and Run: $400K to $1M in one year.",subtitle:"Most operational errors are UX problems in disguise. Fix the interface before blaming the staff.",
    category:"digital-product",categoryLabel:"Operations Design",color:"#DC2626",year:"2024",role:"Strategy, Email Marketing, Web Development, Business Operations",client:"Cook and Run",timeline:"May 2023 — June 2024",tools:"Web development, Email marketing, Operations systems",
    tags:["Operations","Systems Design","Catering","Workflow","Revenue Growth"],featured:false,badges:[],
    thumbnail:"/projects/cook-and-run/thumb.jpg",heroImage:"Revenue growth trajectory — $400K to $1M with 85% error reduction overlay",
    tldr:"Redesigned UX and operations systems for a catering company, driving revenue from $400K to $1M in one year. Reduced ordering error rates by 85% and increased guest count and event budget by 22%.",
    tldrStats:[{value:"$400K→$1M",label:"Revenue in one year"},{value:"↓ 85%",label:"Ordering error reduction"},{value:"↑ 22%",label:"Guest count increase"}],
    sections:[
      {num:"01",label:"problem",headline:"The food was excellent. The systems serving it weren't.",type:"text",
        body:"The catering business was growing but the systems weren't keeping up. Ordering errors were creating waste and client friction. Event management was manual and error-prone. The operations couldn't scale without breaking."},
      {num:"02",label:"discovery",headline:"85% of errors came from UX friction — not staff mistakes.",type:"callout",
        body:"The instinct was to train staff better. The data said otherwise. When I mapped every ordering error to its root cause, 85% traced back to UX friction in the ordering flow and menu navigation — confusing layouts, ambiguous options, and confirmation steps that didn't confirm anything.",
        callout:{icon:"🔍",title:"Fix the interface, not the people",desc:"The 85% error reduction came from redesigning existing flows, not building new tools and not retraining staff. The problem was UX friction, not missing functionality. This is the lesson that transfers directly to software: most user errors are design errors."}},
      {num:"03",label:"results",headline:"Revenue doubled. Errors nearly eliminated.",type:"before-after",
        beforeAfter:[{label:"Annual revenue",before:"$400K",after:"$1M"},{label:"Ordering errors",before:"Baseline",after:"↓ 85%"},{label:"Guest count",before:"Baseline",after:"↑ 22%"}]}
    ]
  },

  // ═══ BENTGO ═══ 4 sections: challenge → research → CMF(image-grid) → retail(stats)
  {
    slug:"bentgo-backpack",title:"Bentgo: Designing for tiny humans and the parents who buy for them.",subtitle:"From ideation to top-selling Amazon product — a preschool backpack that earned its way onto Target shelves.",
    category:"physical-product",categoryLabel:"Consumer Product",color:"#1E3A5F",year:"2022",role:"Product Designer",client:"Bentgo (via Bill Burns Design)",timeline:"8 months",tools:"SolidWorks, KeyShot, Adobe Illustrator",
    tags:["Industrial Design","CMF","Kids","Manufacturing","Amazon","Retail"],featured:false,badges:[],
    thumbnail:"/projects/bentgo-backpack/thumb.jpg",heroImage:"Bentgo Confetti Edition backpack — hero product shot with feature callouts",
    tldr:"Developed the Bentgo preschool backpack product line from ideation through CMF to manufacturing. The Confetti Edition became a top-selling Amazon backpack. Pitch materials secured projects with Target and Hape.",
    tldrStats:[{value:"#1",label:"Top-selling Amazon backpack"},{value:"Target",label:"Pitch materials secured retail deal"},{value:"Full line",label:"Multiple colorways developed"}],
    sections:[
      {num:"01",label:"challenge",headline:"The gap was in details that matter to a 4-year-old's routine.",type:"text",
        body:"Kids' backpacks are either overbuilt for older students or flimsy novelty items for toddlers. Parents of preschoolers need something in between: durable enough for daily use, sized for small bodies, and designed with features that matter at that age.\n\nCan they open it themselves? Does the chest strap stay put? Can they find their water bottle without help?"},
      {num:"02",label:"two customers",headline:"Designing for children means designing for two customers.",type:"two-col",
        body:"Every feature decision had to satisfy two audiences with different priorities.",
        columns:[
          {title:"The child (user)",text:"Can I open it myself? Is it fun to carry? Can I find my things? Does the strap stay on my shoulder? Oversized zipper pulls, magnetic closures, labeled compartments."},
          {title:"The parent (buyer)",text:"Is it durable? Will it last the school year? Is it age-appropriate without being babyish? Does it justify the price? Quality materials, sophisticated patterns, practical features."}
        ]},
      {num:"03",label:"CMF",headline:"Confetti: playful for kids, sophisticated for parents.",type:"image-grid",
        body:"The Confetti Edition colorway was the breakthrough — a scattered confetti pattern that appeals to children (playful, colorful) while satisfying parents (not character-licensed, more sophisticated than cartoon prints).",
        images:["CMF exploration — color and material swatches","Feature callout diagram — padded straps, chest strap, lunch loop, water pockets","Size comparison with child model"]},
      {num:"04",label:"insights",headline:"What physical product design teaches about software.",type:"numbered-list",
        items:[
          "Designing for children means designing for two customers — the child who uses it and the parent who buys it. The same dual-audience thinking applies to B2B software.",
          "CMF decisions drive retail success as much as feature design. The right colorway at the right price point wins — just like the right visual design at the right interaction cost.",
          "Physical product design teaches constraint management that transfers directly to software — you can't patch a shipped backpack."
        ]}
    ]
  },

  // ═══ GOOGLE FIBER ═══ 2 sections: challenge → design language(image-grid)
  {
    slug:"google-fiber",title:"Google Fiber: Living room-worthy networking hardware.",subtitle:"Establishing the visual and form language for a product family that earns its place on the shelf.",
    category:"physical-product",categoryLabel:"Design System",color:"#4285F4",year:"2018",role:"Industrial Designer",client:"Google (via Bill Burns Design)",tools:"SolidWorks, KeyShot",
    tags:["Hardware","Design Language","Google","Systems"],featured:false,badges:[],
    thumbnail:"/projects/google-fiber/thumb.jpg",heroImage:"Google Fiber device family — routers, network boxes, and accessories in a cohesive design language",
    tldr:"Contributed to the hardware design language system for Google Fiber network devices — establishing visual and form coherence across routers, network boxes, and accessories.",
    sections:[
      {num:"01",label:"challenge",headline:"Consumer networking hardware is typically ugly and hidden.",type:"text",
        body:"Routers and network boxes are usually utilitarian objects that people hide behind furniture or in closets. Google Fiber needed devices that people would be comfortable displaying in their living spaces — friendly, approachable, and visually cohesive across the product family."},
      {num:"02",label:"design language",headline:"Family resemblance across different devices.",type:"image-grid",
        body:"Different device sizes and functions still needed to look like they belonged together. Soft curves, clean surfaces, and subtle material transitions established shared design DNA while allowing each device its own proportions.",
        images:["Design language exploration — form studies","Product family lineup — wall-mount to base station","CMF specifications for manufacturing"]}
    ]
  },

  // ═══ ROVER CONCEPT ═══ 6 sections: problem → discovery(callout) → framework(flow) → ideation(image-grid) → decisions(cards) → insights(numbered)
  {
    slug:"rover",title:"Rover: Sitter-side communication for stable income.",subtitle:"UX research and design concept for dog sitters — messaging, scheduling, and care updates that reduce admin time and strengthen client relationships.",
    category:"digital-product",categoryLabel:"UX Research & Design",color:"#0D9488",year:"2022",role:"UX Researcher & UX Designer",client:"Google UX Design Professional Certificate (concept)",timeline:"Mar — Jun 2022 · 3 months",tools:"Figma, usability testing (unmoderated), affinity mapping, competitive analysis",
    tags:["UX Research","Mobile App","Usability Testing","Journey Mapping","Rover"],featured:false,badges:["Certificate Project"],
    thumbnail:"/projects/rover/thumb.jpg",heroImage:"Sitter messaging hub — new vs recurring clients, template replies, calendar sync, and Walking Highlights care summary",
    tldr:"A three-month certificate project designing additive features for Rover's sitter-side experience. Competitive audits across Rover, Fetch, and Wag; journey mapping from inbox to booking; six-stage operational framework; six wireframe directions for messaging home; low- through high-fidelity prototypes across three flows; unmoderated usability testing with iteration.",
    tldrStats:[{value:"3",label:"Platforms audited (Rover, Fetch, Wag)"},{value:"6",label:"Messaging layout directions explored"},{value:"3",label:"Core flows prototyped & tested"}],
    nextBox:{text:"This is a personal concept project for coursework — not affiliated with Rover or other dog-sitting companies. Next steps could include moderated tests with real sitters and handoff specs for engineering."},
    sections:[
      {num:"01",label:"problem",headline:"Income stability depends on communication — but the tools create friction.",type:"text",
        body:"Dog sitters on marketplace apps need to retain clients and win new ones. In practice they spend excessive time on repetitive messaging, manual calendar entry, and fragmented updates — slower responses, missed opportunities, and inconsistent experiences.\n\nThe tension isn't 'more features.' It's operational: how might we help sitters receive, reply, schedule, document care, and send updates without living in their inbox?",
        quote:"Sitters weren't failing at dog care. They were drowning in admin."},
      {num:"02",label:"discovery",headline:"Competitive audits plus an emotional journey map — from inbox to confirmation.",type:"callout",
        body:"Compared Rover, Fetch, and Wag on navigation, visual identity, tone, and content clarity. Mapped the sitter path from first inbox check through booking confirmation, tagging emotional states at each step — confusion at the inbox, excitement when replying, annoyance at manual calendar work, ambiguity after confirmation.",
        callout:{icon:"🔎",title:"What the journey revealed",desc:"Pain clustered around messaging overload (no categorization), manual scheduling (no calendar merge), and fragmented updates (no structured way to share care). All three competitors showed gaps in sitter-side communication — suggesting a category blind spot, not a one-off product miss."}},
      {num:"03",label:"framework",headline:"Six stages: Receive → Reply → Add → Save → Update → Send.",type:"flow",
        body:"Instead of a flat feature list, the sitter workflow became a progressive model — each stage maps to tasks, pain points, and design opportunities.",
        steps:[
          {title:"Receive",desc:"Notifications, categorized messages (new vs recurring), notes, quick actions"},
          {title:"Reply",desc:"Templates, keyword-aware suggestions, editable fields, light automation"},
          {title:"Add",desc:"Events, activity ideas, group albums, person tagging"},
          {title:"Save",desc:"Calendar preview, one-tap sync to preferred calendar, share via app or text"},
          {title:"Update",desc:"Summary, health brief, activities, shared albums"},
          {title:"Send",desc:"Care summary for multiple stakeholders — one structured package"}
        ]},
      {num:"04",label:"ideation",headline:"Six messaging home explorations — then commit to one direction.",type:"image-grid",
        body:"Explored layouts A–F varying client categorization, search placement, preview density, notes, and calendar cues. Prioritized a direction that combined new vs recurring segmentation with search, readable previews, and a dedicated notes region.",
        images:["Wireframe matrix — six messaging home directions (A–F) with annotation","Prioritized layout — categorized inbox + search + notes + calendar indicators","Low-fi → mid-fi → hi-fi progression for Receive/Reply, Add/Save, Update/Send"]},
      {num:"05",label:"decisions",headline:"Four choices that anchored the concept.",type:"cards",
        cards:[
          {title:"Categorize clients, not just chronology",desc:"New vs recurring buckets so sitters can prioritize first-time inquiries (conversion) without losing rhythm with regulars."},
          {title:"Template-driven replies with keyword hooks",desc:"Detect intents like drop-off, location, and time — suggest structured responses sitters can edit instead of retyping."},
          {title:"Integrated calendar with sync",desc:"Booking confirmations generate rich events (time, place, travel buffer, price) with one-tap export to the sitter's preferred calendar."},
          {title:"Walking Highlights as the care artifact",desc:"One structured view: activity summary, park context, shared album, and notes — shareable as a single update instead of scattered photos and texts."}
        ]},
      {num:"06",label:"testing & synthesis",headline:"Unmoderated sessions, affinity themes, iteration.",type:"numbered-list",
        body:"Low-fi prototypes covered three flows (Receive/Reply, Add/Save, Update/Send). Ran unmoderated usability testing with screen recording (May 2022), then synthesized findings with affinity diagrams — Messaging/Reply, Scheduling, Provide Updates, and Other.",
        items:[
          "Testing validated information architecture: in the iterated prototype, sitters completed tasks as intended — a signal the flows were learnable, not just pretty.",
          "Early quantity beats early polish — six wireframe directions surfaced patterns no single concept would have exposed.",
          "Emotional journey mapping prioritized interventions: inbox frustration and calendar annoyance became the two highest-leverage design targets.",
          "Competitive gaps compounded — weak sitter-side comms across Rover, Fetch, and Wag pointed to an industry-wide opportunity space."
        ]}
    ]
  },

  // ═══ GOLAB ═══ 2 sections: challenge → story-first(callout: cultural framework)
  {
    slug:"golab",title:"GoLab: Science disguised as adventure.",subtitle:"An award-winning toy that teaches circuitry through a Chinese folktale — because the best education doesn't feel educational.",
    category:"physical-product",categoryLabel:"Toy Design",color:"#EF4444",year:"2015",role:"Industrial Designer",client:"Speck Design",tools:"SolidWorks, Prototyping",
    tags:["Toy","STEM","Award-Winning","IDEA Award","Education"],featured:false,badges:["IDEA Award"],
    thumbnail:"/projects/golab/thumb.jpg",heroImage:"GoLab — child playing with circuit-building blocks inspired by 'Monkey: Journey to The West'",
    tldr:"Designed an award-winning science toy that inspires young girls to discover circuitry through hands-on play. Won the 2013 IDEA Award for Concept Design.",
    sections:[
      {num:"01",label:"challenge",headline:"STEM toys feel like homework. This one needed to feel like play.",type:"text",
        body:"STEM toys often feel clinical and intimidating — especially for young girls who may not see themselves in science. The challenge was designing a toy that teaches electrical circuits while feeling like an adventure, not a lesson.\n\nThe solution: embed the learning inside a story kids already want to explore.",
        quote:"The best educational toys don't feel educational. They feel like an adventure."},
      {num:"02",label:"cultural framework",headline:"Story-first, science-second.",type:"callout",
        body:"The toy incorporates learning circuitry with the traditional Chinese story 'Monkey: The Journey to The West.' Kids don't think they're learning about circuits — they think they're completing a quest. Problem-solving skills and circuit concepts are embedded in the narrative mechanics.\n\nThis approach — using cultural storytelling as a vehicle for technical learning — made STEM feel universal and accessible rather than clinical and exclusive.",
        callout:{icon:"🏆",title:"2013 IDEA Award — Concept Design",desc:"Recognized for demonstrating how cultural storytelling can make STEM education accessible to audiences who don't see themselves in traditional science toys. Story-first design as a framework for learning."}}
    ]
  },

  // ═══ GOOGLE INTERACTIVE BOOK ═══ 5 sections: problem → tension(callout) → exploration(image-grid) → decisions(cards) → insights(numbered)
  {
    slug:"google-interactive-book",title:"Google Interactive Book",subtitle:"Industrial design for a physical–digital hybrid — form, materials, and electronics integration so interactivity reads as part of the book, not a gadget bolted on.",
    category:"physical-product",categoryLabel:"Interactive Hardware",color:"#1A73E8",year:"2016",role:"Industrial Designer",client:"Google (via Speck Design)",timeline:"May 2015 — Dec 2016",tools:"Sketch, CAD, prototyping, material research, electronics integration exploration",
    tags:["Google","Consumer Electronics","Physical-Digital","Prototyping","Speck Design"],featured:false,badges:[],
    thumbnail:"/projects/google-interactive-book/thumb.jpg",heroImage:"Hybrid book object — spread, edge integration, and hand-scale prototype studies",
    tldr:"Full-time industrial design at Speck Design (Palo Alto) included this R&D exploration for Google: concept directions for an interactive book — how electronic elements live in the object, how it still feels like a book in the hand, and how prototypes validate interaction at the physical–digital boundary. Delivered concepts, prototypes, and factory specifications.",
    tldrStats:[{value:"~19 mo",label:"Engagement on Google book work"},{value:"3",label:"Pillars: form, interaction, prototype"},{value:"R&D",label:"Exploration alongside Ford, Target, Apple work"}],
    ctaBox:{title:"Extended write-up on my portfolio site.",desc:"Photos and context from the physical-products archive.",label:"View on summerchang.co",url:"https://summerchang.co/physical-products/google-interactive-book"},
    nextBox:{text:"Physical–digital hybrids keep showing up in new categories — the lesson transfers: form and electronics have to be designed as one experience, with prototypes as the source of truth."},
    sections:[
      {num:"01",label:"situation",headline:"Digital reading was rising — but books still set the bar for focus and tactility.",type:"text",
        body:"As more content moved on-screen, the open design question was how a physical book could gain interactive, digital capability without losing what makes reading on paper feel grounded — weight, texture, quiet focus.\n\nGoogle engaged Speck Design for an industrial design exploration: what an interactive book could look, feel, and behave like as a manufactured object — not a tablet in a book jacket.",
        quote:"Where does the interactivity live — and how does it still feel like a book?"},
      {num:"02",label:"tension",headline:"Centuries of book craft meet electronics that want space, seams, and seams.",type:"callout",
        body:"Books are among the most refined physical objects we use — form largely solved for the job. Adding sensors, circuits, and feedback loops adds complexity. The risk is obvious: the object stops reading as a book and starts reading as hardware with pages.",
        callout:{icon:"📖",title:"The hybrid boundary",desc:"Industrial design and electronics usually ship in separate lanes. Here they had to read as one coherent thing in the hand — interaction, manufacturing, and emotional expectation aligned."}},
      {num:"03",label:"exploration",headline:"Form studies, materials, and integration paths.",type:"image-grid",
        body:"Work spanned sketch exploration, CAD development, material combinations, and build approaches that could survive factory realities — always checked back against how the object felt at reading scale.",
        images:["Early form languages — book proportions vs. electronics volume","CAD and stack-up studies — cover, spine, and internal layout","Physical prototypes — hand feel, balance, and interaction checkpoints"]},
      {num:"04",label:"decisions",headline:"Three decisions that held the concept together.",type:"cards",
        cards:[
          {title:"Form language that honors the book",desc:"Started from weight, cover material, page texture, and how the object sits in the hand — then layered electronics without breaking the primary reading experience."},
          {title:"Interaction through physical form",desc:"Integration choices were driven by what using the object should feel like — not 'where can we put a sensor' first, but what form produces the intended gesture and feedback."},
          {title:"Prototype as the design tool",desc:"At the physical–digital edge, paper and CAD show shape; only prototypes reveal whether the interaction lands. Builds were the honest review loop."}
        ]},
      {num:"05",label:"insights",headline:"What consulting on Google-scale R&D reinforced.",type:"numbered-list",
        items:[
          "Physical–digital work needs both disciplines in the room — form without electronics awareness (or the reverse) yields objects where the two fight instead of cooperate.",
          "The strongest hybrids feel inevitable — as if interaction and enclosure were one brief, not two handoffs.",
          "Large-company exploration through a firm like Speck clarified how R&D gets scoped, how decisions ladder, and how intent survives the jump from concept to specification."
        ]}
    ]
  },

  // ═══ PROCLAMATION GOODS (external) ═══ Card links to brand site — no internal case study
  {
    slug:"proclamation-goods",title:"Proclamation Goods — The Duo",subtitle:"The last cookware you'll ever need — a pot, a skillet, and a lid that combine into dozens of functions.",
    category:"physical-product",categoryLabel:"Cookware",color:"#92400E",year:"2026",role:"Industrial Designer",client:"Proclamation Goods Co.",tools:"Product design",
    tags:["Cookware","Sustainability","DTC","Made in USA"],featured:false,badges:["Product"],
    thumbnail:"/projects/proclamation-goods/thumb.jpg",heroImage:"—",
    externalUrl:"https://www.proclamationgoods.com/",
    tldr:"Award-winning stainless cookware designed as a modern heirloom, not landfill. The Proclamation Duo is made in the USA with no chemical coatings; induction compatible, oven and dishwasher safe, with a 30-day trial and lifetime warranty. Positioned against disposable cookware trends — versatile enough to work as a skillet, stock pot, Dutch oven, saucier, deep-fryer, wok, cloche, baking dish, and more — with three streamlined pieces that stack or nest for storage.",
    sections:[]
  },

  // ═══ OMIEBOX / OMIELIFE (external) ═══ Card links to brand site — no internal case study
  {
    slug:"omiebox",title:"OmieBox®",subtitle:"Hot & cold bento lunch box for kids — pack a balanced lunch in one leakproof, kid-openable container.",
    category:"physical-product",categoryLabel:"Kids Product",color:"#0284C7",year:"2026",role:"Industrial Designer",client:"OmieLife",tools:"Product design",
    tags:["Kids","Food","Consumer Product","Lunch"],featured:false,badges:["Product"],
    thumbnail:"/projects/omiebox/thumb.jpg",heroImage:"—",
    externalUrl:"https://www.omielife.com/products/omiebox",
    tldr:"The first insulated bento that lets you pack hot and cold foods together in one compact container — built-in thermos plus separate cold compartments, leakproof seals, and multiple sections for variety. Thoughtfully designed by a mom for ages 3–7 so kids can open and close it themselves. BPA- and phthalate-free materials (18/8 stainless steel with food-grade plastic and silicone), dishwasher-friendly care guidance, and accessories to customize. Recognized as an innovative hot/cold lunch solution for families who want nutritious meals kids will actually finish.",
    sections:[]
  },

  // ═══ REFLEXION MEDICAL (external) ═══ Card links to brand site — no internal case study
  {
    slug:"reflexion",title:"RefleXion Medical",subtitle:"SCINTIX® biology-guided radiotherapy — PET signals from the tumor steer autonomous treatment in real time.",
    category:"digital-product",categoryLabel:"MedTech",color:"#0369A1",year:"2026",role:"Industrial Designer",client:"RefleXion Medical",tools:"Product design",
    tags:["Oncology","Radiotherapy","SCINTIX","PET-CT"],featured:false,badges:["Product"],
    thumbnail:"/projects/reflexion/thumb.jpg",heroImage:"—",
    externalUrl:"https://reflexion.com/",
    tldr:"RefleXion combines PET-CT with radiotherapy so SCINTIX therapy can detect emissions from cancer cells and use them as a biological beacon — managing motion and delivering high doses to tumors in the lung or bone from primary or metastatic disease. The platform targets solid tumors autonomously with live tracking, aiming for more dose to tumor and potentially less to surrounding tissue. The company also advances access through cancer centers, clinical evidence, and payer coverage expansion for freestanding centers.",
    sections:[]
  },
]

// Helper functions
export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug)
}

export function getFeaturedProjects() {
  return projects.filter((p) => p.featured)
}

export function getProjectsByCategory(category: "ai-software" | "digital-product" | "physical-product") {
  return projects.filter((p) => p.category === category)
}
