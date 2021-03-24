const residentsData = [
  {
    id: 41,
    name: "Doris",
    photo:
      "https://erinwritesnow.files.wordpress.com/2017/01/cute-happy-older-lady.jpg",
    age: "87",
    height: "5' 9\"",
    weight: "145 lbs",
    pcp: "Dr. Dolinsky",
    ambulatory: "Yes",
    help_with_medications: "Yes",
    other_impairments: "Visual Impairment",
    previous_career: "Seamstress",
    interests: "Knitting, Cats, Card Games, Unsolved Mysteries",
    pets: "One Cat",
    living_preferences:
      "I would feel most comfortable sharing my home with a female student.",
    semester: "Spring-2021",
    additional_notes:
      "I need help feeding my cat, Mittens. Please don't eat peanuts around me, I am terribly allergic.",
  },
  {
    id: 42,
    name: "Ralph",
    photo:
      "https://previews.123rf.com/images/natakot/natakot1810/natakot181001281/110094284-happy-old-man-showing-thumbs-up-working-out-with-a-dumbbell.jpg",
    age: "75",
    height: "5' 11\"",
    weight: "190 lbs",
    pcp: "Dr. Romo",
    ambulatory: "Yes",
    help_with_medications: "No",
    other_impairments: "Early Stage Memory Loss",
    previous_career: "Small Business Owner",
    interests: "Weightlifting, Billiards, NY Stock Exchange",
    pets: "None",
    living_preferences: "I like to wake up early and stay active.",
    semester: "Fall-2021",
    additional_notes:
      "Once a month, my 12-year-old grandson comes to stay with me. He's a good kid and is fine with sleeping on the couch.",
  },
  {
    id: 43,
    name: "Wendy",
    photo:
      "https://reengage.org.uk/site/assets/files/1068/possible_home_page.750x0.jpg",
    age: "85",
    height: "5' 5\"",
    weight: "125 lbs",
    pcp: "Dr. Green",
    ambulatory: "No",
    help_with_medications: "Yes",
    other_impairments: "Multiple Sclerosis",
    previous_career: "Elementary School Teacher",
    interests: "Ping-pong, Walks Around the Block, and Chinese Chess",
    pets: "One Dog",
    living_preferences:
      "I'm an early riser, and try to get most of my errands done first thing.",
    semester: "Spring-2021",
    additional_notes:
      "It's important for me to keep cooking - it's one of my favorite hobbies. However, I sometimes forget I have stuff on the stove.",
  },
  {
    id: 44,
    name: "Sylvia",
    photo: "https://ak.picdn.net/shutterstock/videos/19998196/thumb/11.jpg",
    age: "78",
    height: "5' 5\"",
    weight: "115 lbs",
    pcp: "Dr. Fitzsimons",
    ambulatory: "Yes",
    help_with_medications: "Yes",
    other_impairments: "Slight Visual Impairment",
    previous_career: "Piano Teacher",
    interests:
      "Playing Piano, Taking Care of My Plants, Playing with My Cats, Watching Movies",
    pets: "Two Cats",
    living_preferences:
      "I like to keep the house clean and let in lots of natural light for the plants during the day.",
    semester: "Fall-2021",
    additional_notes:
      "I love to play piano and am happy to share my knowledge with students if they are interested.",
  },
  {
    id: 45,
    name: "Betty",
    photo:
      "https://ewscripps.brightspotcdn.com/a7/76/13be09e34799b6420c098a372883/download.jpeg",
    age: "82",
    height: "5' 5\"",
    weight: "120 lbs",
    pcp: "Dr. Segura",
    ambulatory: "Yes",
    help_with_medications: "Yes",
    other_impairments: "None",
    previous_career: "Actress, Comedian",
    interests: "Morris Animal Foundation, Musicals, Singing, Fiction Novels",
    pets: "1 Cat, 2 Dogs",
    living_preferences:
      "I join my family on various outings, and would like to have someone who will be around to help feed my cat and dogs when I'm out.",
    semester: "Summer-2021",
    additional_notes:
      "I could use someone who is comfortable changing oxygen tanks when I run out.",
  },
  {
    id: 46,
    name: "Alan",
    photo: "https://ak.picdn.net/shutterstock/videos/3078532/thumb/10.jpg",
    age: "76",
    height: "6' 1\"",
    weight: "165 lbs",
    pcp: "Dr. Morgan",
    ambulatory: "Yes",
    help_with_medications: "No",
    other_impairments: "Minor Visual Impairment, Respiratory Disease",
    previous_career: "Session Musician",
    interests: "Jazz, Trumpet, Cooking, Keeping up with my granddaughters",
    pets: "None",
    living_preferences:
      "I like to keep humidifiers running all the times to help with my breathing",
    semester: "Summer-2021",
    additional_notes:
      "I like to keep up with my girls on FaceTime with the phone or iPad, but sometimes need help setting it up correctly.",
  },
  {
    id: 47,
    name: "Jerry",
    photo:
      "https://www.pngitem.com/pimgs/m/30-307416_profile-icon-png-image-free-download-searchpng-employee.png",
    age: "80",
    height: "6'",
    weight: "220 lbs",
    pcp: "Dr. Dickerson",
    ambulatory: "No",
    help_with_medications: "Yes",
    other_impairments: "high Blood Pressure",
    previous_career: "Restaurant Owner",
    interests: "Cooking, Football, Baseball, Card Games",
    pets: "None",
    living_preferences:
      "I would like to have someone stay in my home who can help me with getting more exercise.",
    semester: "Fall-2021",
    additional_notes:
      "I am the world's best chef. I just need help carrying in the groceries!",
  },
  {
    id: 48,
    name: "Jack",
    photo:
      "https://www.ohioliving.org/uploads/communities/Ohio%20Living%20Westminster-Thurber/old-people-watching-drinks-1024x690.jpg",
    age: "90",
    height: "5' 11\"",
    weight: "160 lbs",
    pcp: "Dr. Keane",
    ambulatory: "Yes",
    help_with_medications: "Yes",
    other_impairments: "Sight, Hearing, and Balance",
    previous_career: "Electrician",
    interests: "Puzzling, Word Search, Trivia, and Gardening",
    pets: "None",
    living_preferences:
      "Prefer to have someone who can help with technical issues on my computer, and assist me with keeping plants watered.",
    semester: "Spring-2021",
    additional_notes:
      "I like to meet friends for coffee on Saturday mornings, and would appreciate someone who I can rely on to get me there.",
  },
  {
    id: 49,
    name: "Bill & Wanda",
    photo:
      "https://jointflex.com/wp-content/uploads/2017/12/elderly-couple-with-arthritis-on-a-run-600x400.jpg",
    age: "72 and 78",
    height: "6' and 5' 8\"",
    weight: "200 lbs and 150 lbs",
    pcp: "Dr. Mitchell",
    ambulatory: "No",
    help_with_medications: "Yes",
    other_impairments: "Sight, and hearing",
    previous_career: "Engineer, and Lawyer",
    interests: "Cardio, Weightlifting, Trivia, and Football",
    pets: "None",
    living_preferences:
      "We try to maintain an active lifestyle, and would like someone who is comfortable around weights if we need support.",
    semester: "Summer-2021",
    additional_notes:
      "We both need some assistance in keeping up with medications, and help with technical issues.",
  },
  {
    id: 50,
    name: "Dorthy",
    photo:
      "https://i.pinimg.com/originals/d6/1d/3c/d61d3c9032a937e96e72e0429d8bcd5e.jpg",
    age: "96",
    height: "5' 6\"",
    weight: "120 lbs",
    pcp: "Dr. O'hera",
    ambulatory: "Yes",
    help_with_medications: "Yes",
    other_impairments: "Sight, Hearing, Dementia, and Frailty",
    previous_career: "Hospital Administrator",
    interests: "BINGO, Board Games, Crochet, and Watching Movies",
    pets: "None",
    living_preferences:
      "I'd like to have someone here who can be around more often than not, as I often need help with mobility around the house.",
    semester: "Fall-2021",
    additional_notes:
      "I experience sundowning in the evenings, and would like to have someone who doesn't mind being close by who is gentle and reassuring.",
  },
  {
    id: 51,
    name: "Martin",
    photo:
      "https://www.incimages.com/uploaded_files/image/1920x1080/getty_626702164_2000133320009280214_363416.jpg",
    age: "84",
    height: "5' 9\"",
    weight: "140 lbs",
    pcp: "Dr. Bosch",
    ambulatory: "Yes",
    help_with_medications: "Yes",
    other_impairments: "Vision",
    previous_career: "Manufacturing",
    interests: "BINGO, Movies, Baseball",
    pets: "2 Birds",
    living_preferences:
      "I'd like to have someone here who can be around more often than not, as I often need help with mobility around the house.",
    semester: "Fall-2021",
    additional_notes:
      "I need some help feeding the birds. They're not too noisy. They like to sing in the mornings.",
  },
  {
    id: 52,
    name: "Masako",
    photo:
      "https://content.fortune.com/wp-content/uploads/2017/06/masako-1.jpg",
    age: "84",
    height: "5' 3\"",
    weight: "100 lbs",
    pcp: "Dr. Bueller",
    ambulatory: "Yes",
    help_with_medications: "No",
    other_impairments: "Vision, Hearing",
    previous_career: "Software Developer",
    interests: "Hobby Programming, Design, and Keeping up with News & Trends",
    pets: "None",
    living_preferences:
      "I prefer to live with someone who is clean, tidy, and has some basic tech know-how.",
    semester: "Fall-2021",
    additional_notes:
      "Believe it or not, Apple still requests my consult on current projects! Sometimes I need help adjusting my accessibility settings on my monitors.",
  },
];

export default residentsData;
