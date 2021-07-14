var convo = {
  // "ice" (as in "breaking the ice") is a required conversation object
  // that maps the first thing the bot will say to the user
  ice: {
  // "says" defines an array of sequential bubbles
  // that the bot will produce
  says: ["Hello there!", "I am Detsutut, Tommaso's AI assistant 🤖", "How can I help you?"],

  // "reply" is an array of possible options the user can pick from
  // as a reply
  reply: [
      {
      question: "🍎", // label for the reply option
      keywords: "apple appel apples",
      answer: "banana" // key for the next conversation object
      }
  ]
  }, // end required "ice" conversation object

  // another conversation object that can be queued from within
  // any other conversation object, including itself
  banana: {
  says: ["Thank you! I'm sure it would be delicious if only I knew how to eat.", "...can I have another one?"],
  reply: [
      {
      question: "🍎🍎",
      keywords: "apples appels",
      answer: "banana"
      },
      {
      question: "❌",
      keywords: "no nope not",
      answer: "no_banana"
      }
  ]
  },

  no_banana: {
  says: ["Oh 😔", "Got it. Back to business.", "What do you want to know about Tommaso?"],
  reply: [
      {
      question: "Brief summary",
      keywords: "summary review description",
      answer: "summary"
      },
      {
      question: "What is he currently working on?",
      keywords: "work working activity recent now",
      answer: "work"
      }
  ]
  },

  summary: {
  says: ["Tommaso is a Biomedical Engineer and AI enthusiast, currently researching NLP solutions to improve healthcare-based prediction tasks leveraging Italian clinical notes.", 
  "He is also a geek, musician and a bicycle lover.", "He embraces social and environmental sustainability to support more fair, responsible and ethical relations with the planet and its inhabitants.",
  "...",
  "...oh! And he hates cinnamon."],
  reply: [
      {
      question: "Brief summary",
      keywords: "summary review description",
      answer: "summary"
      },
      {
      question: "Start over",
      keywords: "start restart back",
      answer: "ice"
      }
  ]
  },

  work: {
  says: ["Tommaso is working on his Ph.D. in Pavia right now.","He previously moved to Amsterdam for a couple of years to work as a ML Engineer, too.",
  "You can find all the details about his work in the Timeline section of this page, though."],
  reply: [
      {
      question: "What is he currently working on?",
      keywords: "work working activity recent now",
      answer: "work"
      },
      {
      question: "Start over",
      keywords: "start restart back",
      answer: "ice"
      }
  ]
  }
  // end conversation object
} // end conversation object