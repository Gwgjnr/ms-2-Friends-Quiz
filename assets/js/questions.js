let questionsArray = [
    {
        question: "What is Joeys favourite food?",
        optionA: "Meatball Sub",
        optionB: "Pepperoni pizza",
        optionC: "Roast duck",
        optionD: "Jam",
        answer: "B"
    },
    {
        question: "What is Chandlers middle name?",
        optionA: "Richard",
        optionB: "Rose",
        optionC: "George",
        optionD: "Muriel",
        answer: "D"
    },
    {
        question: "What's the name of the coffee shop used by the characters?",
        optionA: "Central Park",
        optionB: "Central Jerk",
        optionC: "Joes Beans",
        optionD: "Central Perk",
        answer: "D"
    },
    {
        question: "In which city is Friends set?",
        optionA: "Los Angeles",
        optionB: "New York",
        optionC: "Seattle",
        optionD: "San Francisco",
        answer: "B"
    },
    {
        question: "What hangs on Monica's purple door?",
        optionA: "A key hook",
        optionB: "A coat hook",
        optionC: "A cap",
        optionD: "A picture frame",
        answer: "D"
    },
    {
        question: "What was the name of Ross's monkey?",
        optionA: "Michelle",
        optionB: "Marcel",
        optionC: "Michael",
        optionD: "Mufasa",
        answer: "B"
    },
    {
        question: "What is Monica skilled at?",
        optionA: "Bricklaying",
        optionB: "Cooking",
        optionC: "American football",
        optionD: "Massages",
        answer: "B"
    },
    {
        question: "Rachel's prom date Chip ditched her for which girl when they got to the school?",
        optionA: "Sally Roberts",
        optionB: "Amy Welsh",
        optionC: "Valerie Thompson",
        optionD: "Emily Foster",
        answer: "B"
    },
    {
        question: "What’s the name of Joey’s pet penguin in Friends?",
        optionA: "Fluffy",
        optionB: "Channy",
        optionC: "Hugsy",
        optionD: "Ben",
        answer: "C"
    },
    {
        question: "Who was Chandler’s TV magazine always addressed to?",
        optionA: "Chanandler Bong",
        optionB: "Chanandler Bang",
        optionC: "Chanandler Bing",
        optionD: "Chanandler Beng",
        answer: "A"
    },
    {
        question: "What is Janice most likely to say?",
        optionA: "Talk to the hand!",
        optionB: "Get me a coffee!",
        optionC: "Oh… my… God!",
        optionD: "No way!",
        answer: "C"
    },
    {
        question: "What’s the name of Joey’s agent?",
        optionA: "Ruby",
        optionB: "Estelle",
        optionC: "Charlie",
        optionD: "Leanne",
        answer: "B"
    },
    {
        question: "What’s the name of the grumpy person who works at the coffee shop?",
        optionA: "Herman",
        optionB: "Gunther",
        optionC: "Frasier",
        optionD: "Eddie",
        answer: "B"
    },
    {
        question: "Who sang the Friends theme?",
        optionA: "The Banksys",
        optionB: "The Rembrandts",
        optionC: "The Constables",
        optionD: "The Da Vinci Band",
        answer: "B"
    },
    {
        question: "What kind of uniform does Joey wear to Monica and Chandler’s wedding?",
        optionA: "Chef",
        optionB: "Soldier",
        optionC: "Fire fighter",
        optionD: "A baseball player",
        answer: "B"
    },
    {
        question: "What is the name of Phoebe’s alter-ego?",
        optionA: "Phoebe Neeby",
        optionB: "Monica Bing",
        optionC: "Regina Phalange",
        optionD: "Elaine Benes",
        answer: "C"
    },
    {
        question: "What is the name of Rachel’s Sphynx cat?",
        optionA: "Baldy",
        optionB: "Mrs. Whiskerson",
        optionC: "Sid",
        optionD: "Felix",
        answer: "B"
    },
    {
        question: "What film star catches Joey in his shower on set?",
        optionA: "Charlton Heston",
        optionB: "Jack Nicholson",
        optionC: "Al Pacino",
        optionD: "Robert De Niro",
        answer: "A"
    },
    {
        question: "What was Monica's boyfriend Richard's profession",
        optionA: "Eye doctor",
        optionB: "Pediatrician",
        optionC: "Surgeon",
        optionD: "Orthodontist",
        answer: "A"
    },
    {
        question: "What was Pheobe's twin sister's name?",
        optionA: "Regina",
        optionB: "Ursula",
        optionC: "Lisa",
        optionD: "Una",
        answer: "B"
    },
    {
        question: "What instrument does Phoebe Buffay play?",
        optionA: "Piano",
        optionB: "Guitar",
        optionC: "Flute",
        optionD: "Tamberine",
        answer: "B"
    },
    {
        question: "What does Joey never share?",
        optionA: "His books",
        optionB: "DVDs",
        optionC: "Secrets",
        optionD: "Food",
        answer: "D"
    },
    {
        question: "What year did Friends first start?",
        optionA: "1992",
        optionB: "1993",
        optionC: "1994",
        optionD: "1995",
        answer: "C"
    },
    {
        question: "When Ross and Rachel were on a break, Ross slept with Chloe. Where does she work?",
        optionA: "Copy Shop",
        optionB: "Coffee Shop",
        optionC: "Muesum",
        optionD: "The bank",
        answer: "A"
    },
    {
        question: "What plastic surgery did Rachel admit to having?",
        optionA: "Tummy tuck",
        optionB: "Brow lift",
        optionC: "Nose job",
        optionD: "lip fillers",
        answer: "C"
    },
    {
        question: "Monica briefly dates billionaire Pete Becker. Which country does he take her for their first date?",
        optionA: "France",
        optionB: "Greece",
        optionC: "Portugal",
        optionD: "Italy",
        answer: "D"
    },
    {
        question: "How many pages was Rachel’s letter to Ross about the reasons for their break-up?",
        optionA: "4 pages",
        optionB: "8 pages",
        optionC: "14 pages",
        optionD: "18 pages",
        answer: "D"
    },
    {
        question: "Monica and Chandler become an item, after spending the night together in which city?",
        optionA: "London",
        optionB: "Paris",
        optionC: "Rome",
        optionD: "Las Vegas",
        answer: "A"
    },
    {
        question: "Which part of the world does Chandler board a flight to in order to escape Janice in season 4?",
        optionA: "Sudan",
        optionB: "Yemen",
        optionC: "Columbia",
        optionD: "Italy",
        answer: "B"
    },
    {
        question: "What nationality is the girl Chandler and Joey argue over who they meet playing football?",
        optionA: "German",
        optionB: "Belgian",
        optionC: "Dutch",
        optionD: "English",
        answer: "C"
    },
    {
        question: "What is the name of Phoebe’s brother?",
        optionA: "John",
        optionB: "Frank",
        optionC: "Phil",
        optionD: "Greg",
        answer: "B"
    },
    {
        question: "What is the name of Ross and Carol’s baby?",
        optionA: "George",
        optionB: "Jack",
        optionC: "Steve",
        optionD: "Ben",
        answer: "D"
    },
    {
        question: "Which character shares an apartment with Chandler Bing in season one?",
        optionA: "Ross",
        optionB: "Monica",
        optionC: "Joey",
        optionD: "Rachel",
        answer: "C"
    },
    {
        question: "At the beginning of season one, which character has just jilted their fiancé?",
        optionA: "Joey",
        optionB: "Chandler",
        optionC: "Monica",
        optionD: "Rachel",
        answer: "D"
    },
    {
        question: "What is the name of the character played by Tom Selleck?",
        optionA: "Joey",
        optionB: "Chandler",
        optionC: "Richard",
        optionD: "Fun Bobby",
        answer: "C"
    },
    {
        question: "What character does Paul Rudd play?",
        optionA: "Mike",
        optionB: "Gunther",
        optionC: "Ross",
        optionD: "Frank",
        answer: "A"
    },
    {
        question: "Which cast member was the youngest when the show started?",
        optionA: "Jennifer Aniston",
        optionB: "Courteney Cox",
        optionC: "Matt LeBlanc",
        optionD: "Matthew Perry",
        answer: "D"
    },
    {
        question: "What was the name of Chandler’s psycho roommate?",
        optionA: "Joey",
        optionB: "Eddie",
        optionC: "Rachel",
        optionD: "Frank",
        answer: "B"
    },
    {
        question: "What name does Ross say at his wedding?",
        optionA: "Monica",
        optionB: "Pheobe",
        optionC: "Rachel",
        optionD: "Carol",
        answer: "C"
    },
    {
        question: "What does Rachel say is Chandler’s job?",
        optionA: "Telesponder",
        optionB: "Transponster",
        optionC: "Technician",
        optionD: "Analyst",
        answer: "B"
    },
];
