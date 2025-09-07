const categories = [
  "Present Simple",
  "Present Continuous",
  "Future Will",
  "WH Questions",
  "Question Formation",
  "JavaScript Vocabulary"
];

const questions = {
  "Present Simple": [
    {
      question: "Select all correct uses of Present Simple.",
      options: [
        "For habits and routines.",
        "For actions happening right now.",
        "For general truths.",
        "For temporary situations."
      ],
      correct: [0, 2]
    },
    {
      question: "Select all correct sentences in Present Simple.",
      options: [
        "She plays tennis every day.",
        "She is playing tennis now.",
        "Water boils at 100 degrees.",
        "I am boil water."
      ],
      correct: [0, 2]
    },
    {
      question: "Select the correct form for third person singular.",
      options: [
        "He go to work.",
        "He goes to work.",
        "They goes to work.",
        "She go to school."
      ],
      correct: [1]
    }
  ],
  "Present Continuous": [
    {
      question: "Select all correct uses of Present Continuous.",
      options: [
        "For actions happening now.",
        "For permanent states.",
        "For changing situations.",
        "For future arrangements."
      ],
      correct: [0, 2, 3]
    },
    {
      question: "Select all correct sentences in Present Continuous.",
      options: [
        "I am eating lunch now.",
        "I eat lunch every day.",
        "They are building a house.",
        "They build houses."
      ],
      correct: [0, 2]
    },
    {
      question: "Select the verbs that are usually not used in continuous form.",
      options: [
        "Run",
        "Know",
        "Play",
        "Believe"
      ],
      correct: [1, 3]
    }
  ],
  "Future Will": [
    {
      question: "Select all correct uses of 'will' for future.",
      options: [
        "For predictions.",
        "For scheduled events.",
        "For spontaneous decisions.",
        "For promises."
      ],
      correct: [0, 2, 3]
    },
    {
      question: "Select all correct sentences with 'will'.",
      options: [
        "I will help you tomorrow.",
        "The train leaves at 5 PM.",
        "It will rain soon.",
        "I am going to the store."
      ],
      correct: [0, 2]
    }
  ],
  "WH Questions": [
    {
      question: "Select all WH words used for questions.",
      options: [
        "What",
        "Where",
        "Will",
        "Who"
      ],
      correct: [0, 1, 3]
    },
    {
      question: "Select the correct WH question for 'The book is on the table.'",
      options: [
        "What is on the table?",
        "Where is the book?",
        "Who is the book?",
        "When is the book?"
      ],
      correct: [1]
    }
  ],
  "Question Formation": [
    {
      question: "Select all elements needed for question formation in English.",
      options: [
        "Invert subject and verb.",
        "Always use 'do/does/did'.",
        "For yes/no questions, use auxiliary.",
        "WH word at the beginning for information questions."
      ],
      correct: [0, 2, 3]
    },
    {
      question: "Select the correct question form for 'She lives in London.'",
      options: [
        "Does she lives in London?",
        "Where does she live?",
        "She lives where?",
        "Live she in London?"
      ],
      correct: [1]
    }
  ],
  "JavaScript Vocabulary": [
    {
      question: "Select all correct definitions for 'let' in JavaScript.",
      options: [
        "Declares a block-scoped variable.",
        "Declares a global variable.",
        "Can be redeclared in the same scope.",
        "Cannot be reassigned."
      ],
      correct: [0]
    },
    {
      question: "What does 'const' do in JavaScript? Select all that apply.",
      options: [
        "Declares a constant variable.",
        "Cannot be reassigned.",
        "Block-scoped.",
        "Can be redeclared."
      ],
      correct: [0, 1, 2]
    },
    {
      question: "Select the term for functions without a name.",
      options: [
        "Arrow functions",
        "Anonymous functions",
        "Named functions",
        "Generator functions"
      ],
      correct: [1]
    },
    {
      question: "What is 'this' in JavaScript?",
      options: [
        "Refers to the current object.",
        "A keyword for loops.",
        "A type of variable.",
        "An error handler."
      ],
      correct: [0]
    },
    {
      question: "Select all array methods that modify the array.",
      options: [
        "map()",
        "push()",
        "filter()",
        "pop()"
      ],
      correct: [1, 3]
    },
    {
      question: "What does 'async' do?",
      options: [
        "Makes a function return a Promise.",
        "Runs code synchronously.",
        "Defines a class.",
        "Handles errors."
      ],
      correct: [0]
    },
    {
      question: "Select the correct term for spreading elements.",
      options: [
        "Spread operator (...)",
        "Rest parameter",
        "Destructuring",
        "All of the above"
      ],
      correct: [3]
    },
    {
      question: "What is 'hoisting'?",
      options: [
        "Declarations moved to the top.",
        "A type of error.",
        "A loop mechanism.",
        "Variable assignment."
      ],
      correct: [0]
    },
    {
      question: "Select all primitive types in JavaScript.",
      options: [
        "String",
        "Object",
        "Number",
        "Boolean"
      ],
      correct: [0, 2, 3]
    },
    {
      question: "What does 'DOM' stand for?",
      options: [
        "Document Object Model",
        "Data Object Model",
        "Dynamic Object Method",
        "Document Oriented Markup"
      ],
      correct: [0]
    }
  ]
};