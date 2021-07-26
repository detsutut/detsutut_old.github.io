var convo = {
  // "ice" (as in "breaking the ice") is a required conversation object
  // that maps the first thing the bot will say to the user
  ice: {
    // "says" defines an array of sequential bubbles
    // that the bot will produce
    says: ["Hello there! 👋 Thanks for visiting my web space.", "How can I help you?"],

    // "reply" is an array of possible options the user can pick from
    // as a reply
    reply: [
      {
        question: "Tell me something about you",
        keywords: "summary review description about",
        answer: "summary"
      },
      {
        question: "What are you currently working on?",
        keywords: "work working activity recent now",
        answer: "work"
      },
      {
        question: "🍎", // label for the reply option
        keywords: "apple appel apples fruit",
        answer: "apple" // key for the next conversation object
      }
    ]
  }, // end required "ice" conversation object

  // another conversation object that can be queued from within
  // any other conversation object, including itself
  apple: {
    says: ["Thanks for the apple! I was starving.", "...can I have another one?"],
    reply: [
      {
        question: "🍎🍎",
        keywords: "apples appels",
        answer: "apple"
      },
      {
        question: "❌",
        keywords: "no nope not",
        answer: "no_apple"
      }
    ]
  },

  no_apple: {
    says: ["Oh 😔", "Got it. Back to business.", "How can I help you?"],
    reply: [
      {
        question: "Tell me something about you",
        keywords: "summary review description about",
        answer: "summary"
      },
      {
        question: "What are you currently working on?",
        keywords: "work working activity recent now",
        answer: "work"
      }
    ]
  },

  summary: {
    says: ["Ok! Something about me.","I am a Biomedical Engineer and AI enthusiast 👨‍💻", "and I'm currently researching NLP solutions to improve healthcare processes.",
      "Besides work, I consider myself a geek, a musician and a bicycle lover.", "I embrace social and environmental sustainability trying to do as much as I can to be a responsible hinabitant of planet Earth.",
      "...",
      "...oh! And I hate cinnamon.",
      "... ",
      "Everybody should hate cinnamon."],
    reply: [
      {
        question: "What are you currently working on?",
        keywords: "work working activity recent now",
        answer: "work"
      },
      {
        question: "Start over",
        keywords: "start restart back",
        answer: "ice"
      }
    ]
  },

  work: {
    says: ["I am currently working on my Ph.D. in Big Data and Biomedical Informatics in Pavia 👓",
    "In the meantime, I also collaborate with Biomeris as a Software Engineer and NLP Consultant 👨‍💻",
    "I do like academia, but I don't want to lose the grip on industry!", "Before starting my Ph.D. in Pavia, I have been in Amsterdam for a couple of years to work as a Machine Learning Engineer, too",
    "An amazing experience that made me grow so much! I'm missing those beautiful canals! 🚲🌷",
    "Feel free to ask more! You can find all the details about his work in the Timeline section of this page, though."],
    reply: [
      {
        question: "Brief summary",
        keywords: "summary review description",
        answer: "summary"
      },
      {
        question: "More about Amsterdam",
        keywords: "amsterdam amc hospital medical",
        answer: "amsterdamFunction"
      },
      {
        question: "Start over",
        keywords: "start restart back",
        answer: "ice"
      }
    ]
  },

  amsterdam: {
    says: ["What can I say?", "I didn't see that coming, but the Dutch experience has given me a terrific professional and personal boost!",
      "I rolled the time back for you. You should see the details of my latest activity in Amsterdam on the timeline now."],
    reply: [
      {
        question: "Tell me something about you",
        keywords: "summary review description about",
        answer: "summary"
      },
      {
        question: "Start over",
        keywords: "start restart back",
        answer: "ice"
      }
    ]
  },

  thanks: {
    says: ["You are welcome!"],
    keywords: ["thank", "thanks"],
    confidence: 1,
    reply: [{
      question: "Start over",
      keywords: "start restart back",
      answer: "ice"
    }]
  },

  how_are_you: {
    says: ["I am fine, thanks!"],
    keywords: ["how","are","you","doing"],
    confidence: 3,
    reply: [{
      question: "Start over",
      keywords: "start restart back",
      answer: "ice"
    }]
  },

  rickroll: {
    says: ["<img src='https://media1.tenor.com/images/4324d537dbc06f422b34ae131c7b3e14/tenor.gif?itemid=7755460'/>","Never gonna let you down", "Never gonna run around and desert you", "Never gonna make you cry","Never gonna say goodbye","Never gonna tell a lie and hurt you"],
    keywords: ["never","gonna","give","you","up"],
    confidence: 5,
    reply: [{
      question: "Start over",
      keywords: "start restart back",
      answer: "ice"
    }]
  },

  programming: {
    says: ["I am proficient with R, Python, Javascript, Java, and C. I'm a quick learner, tho!"],
    keywords: ["programming", "languages", "language", "skills"],
    confidence: 2,
    reply: [{
      question: "Start over",
      keywords: "start restart back",
      answer: "ice"
    }]
  }
}

amsterdamFunction = function () {
  chatWindow.talk(convo, "amsterdam") // the conversation can be easily restarted from here.
  setTimeout(function () {
    document.getElementById("amsterdam").scrollIntoView(
    {
      behavior: 'auto',
      block: 'center',
      inline: 'center'
    })}, 3000)
}