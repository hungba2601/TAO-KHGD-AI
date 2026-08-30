import { RawPrimaryLesson, getPrimaryLessonYccd } from './curriculumPrimary';

interface PrimaryUpperUnit {
  unitNum: number;
  title: string;
  topic: string;
  l1_part1: string;
  l1_part2: string;
  l2_part1: string;
  l2_part2: string;
  l3_part1: string;
  l3_part2: string;
}

const primary12Units: Record<number, { title: string; topic: string; l1: string; l2: string; l3: string }[]> = {
  1: [
    { title: 'Unit 1: In the school playground', topic: 'School Playground', l1: 'Letter B, b (ball, bike, book, boy)', l2: 'Point and say (Hi, I am Bill/Ba)', l3: 'Listen and chant & Fun Game' },
    { title: 'Unit 2: In the dining room', topic: 'Dining Room', l1: 'Letter C, c (cake, car, cat, cup)', l2: 'Listen and chant (I have a cake/cup)', l3: 'Look and trace & Song' },
    { title: 'Unit 3: At the street market', topic: 'Street Market', l1: 'Letter A, a (apple, bag, can, hat)', l2: 'Trace and say (Point to the apple)', l3: 'Read and match & Project' },
    { title: 'Unit 4: In the bedroom', topic: 'Bedroom', l1: 'Letter D, d (desk, dog, door, duck)', l2: 'Listen and number (This is a desk)', l3: 'Sing and act & Review 1' },
    { title: 'Unit 5: At the fish and chip shop', topic: 'Fish and Chip Shop', l1: 'Letter F, f (fish, chips, flag, fox)', l2: 'Song (I like fish and chips)', l3: 'Look, match and chant' },
    { title: 'Unit 6: In the classroom', topic: 'Classroom', l1: 'Letter G, g (gate, girl, goat, guitar)', l2: 'Game (There is a girl with a guitar)', l3: 'Project: My Classroom things' },
    { title: 'Unit 7: In the garden', topic: 'Garden', l1: 'Letter H, h (hair, hand, head, horse)', l2: 'Chant and act (Touch your hair/hand)', l3: 'Look and circle & Song' },
    { title: 'Unit 8: In the park', topic: 'Park', l1: 'Letter I, i (insect, igloo, ink)', l2: 'Review Units 5-8 & Fun Quiz', l3: 'Project: Nature in the Park' },
    { title: 'Unit 9: In the shop', topic: 'Shop', l1: 'Letter J, j (jam, jacket, jelly, juice)', l2: 'Look and say (Do you want some juice?)', l3: 'Listen and repeat & Game' },
    { title: 'Unit 10: At the zoo', topic: 'Zoo', l1: 'Letter L, l (lemon, lion, lock, log)', l2: 'Chant and act (The lion is in the zoo)', l3: 'Sing and trace & Fun time' },
    { title: 'Unit 11: At the bus stop', topic: 'Bus Stop', l1: 'Letter M, m (man, mango, monkey, mop)', l2: 'Song (I can see a monkey)', l3: 'Look and match & Project' },
    { title: 'Unit 12: In the lake', topic: 'Lake', l1: 'Letter E, e (egg, elephant, exit)', l2: 'Review Units 9-12 & Phonics Fun', l3: 'Game: Zoo animals' },
    { title: 'Unit 13: In the school canteen', topic: 'School Canteen', l1: 'Letter N, n (nest, net, nut, noodle)', l2: 'Chant (Pass me the noodles, please)', l3: 'Listen and trace & Song' },
    { title: 'Unit 14: In the toy shop', topic: 'Toy Shop', l1: 'Letter O, o (octopus, orange, otter, ox)', l2: 'Numbers 1-10 counting (How many toys?)', l3: 'Read and complete & Project' },
    { title: 'Unit 15: At the seaside', topic: 'Seaside', l1: 'Letter P, p (pen, pencil, pig, pot)', l2: 'Game time (Let us go to the sea)', l3: 'Sing and act & Review 4' },
    { title: 'Unit 16: At home', topic: 'Home', l1: 'Letters Q, q & R, r (queen, quilt, rabbit, ring)', l2: 'Phonics synthesis & Story time', l3: 'Final Project: English Festival Exhibition' }
  ],
  2: [
    { title: 'Unit 1: At my birthday party', topic: 'Birthday Party', l1: 'Letter B & Numbers 1-10', l2: 'How old are you? I am seven', l3: 'Happy Birthday song & Project' },
    { title: 'Unit 2: In the backyard', topic: 'Backyard', l1: 'Letter K (kite, kitten, bike)', l2: 'What is he/she doing? He is playing with a kite', l3: 'Chant and play & Fun game' },
    { title: 'Unit 3: At the seaside', topic: 'Seaside', l1: 'Letter S (sail, sand, sea, sun)', l2: 'Let us look at the sea / sun', l3: 'Trace and say & Project: Sea Poster' },
    { title: 'Unit 4: In the countryside', topic: 'Countryside', l1: 'Letter R (river, road, rainbow, rock)', l2: 'There is a river / road', l3: 'Sing and act & Review 1' },
    { title: 'Unit 5: In the classroom', topic: 'Classroom', l1: 'Letter T (table, teacher, tiger)', l2: 'Point to the table / teacher', l3: 'Classroom instructions & Game' },
    { title: 'Unit 6: On the farm', topic: 'Farm', l1: 'Letter U (umbrella, uncle, sun)', l2: 'What can you see? I can see an umbrella', l3: 'Look, match and chant' },
    { title: 'Unit 7: In the kitchen', topic: 'Kitchen', l1: 'Letter V (vase, van, village)', l2: 'Draw a vase / Look at the van', l3: 'Song & Project: My House' },
    { title: 'Unit 8: In the village', topic: 'Village', l1: 'Letter W (water, window, woman)', l2: 'Look out of the window', l3: 'Review Units 5-8 & Story time' },
    { title: 'Unit 9: In the grocery store', topic: 'Grocery Store', l1: 'Letter Y (yogurt, yo-yo, yellow)', l2: 'Do you like yogurt? Yes, I do', l3: 'Chant and trace & Fun quiz' },
    { title: 'Unit 10: At the zoo', topic: 'Zoo', l1: 'Letter Z (zebra, zoo, zero)', l2: 'Look at the zebra in the zoo', l3: 'Sing and act & Animal masks' },
    { title: 'Unit 11: In the playground', topic: 'Playground', l1: 'Action verbs (run, skip, jump, walk)', l2: 'I can run / skip / jump', l3: 'Playground game & Song' },
    { title: 'Unit 12: At the cafe', topic: 'Cafe', l1: 'Food and drinks (tea, milk, coffee)', l2: 'Would you like some milk? Yes, please', l3: 'Review Units 9-12 & Menu Project' },
    { title: 'Unit 13: In the maths class', topic: 'Maths Class', l1: 'Numbers 11-20 counting', l2: 'How many books are there? There are fifteen', l3: 'Maths fun with English & Game' },
    { title: 'Unit 14: At home', topic: 'Home', l1: 'Rooms (living room, bedroom, kitchen)', l2: 'Where is the cat? It is in the bedroom', l3: 'Draw your bedroom & Project' },
    { title: 'Unit 15: In the clothes shop', topic: 'Clothes Shop', l1: 'Clothes (shirt, dress, hat, shoes)', l2: 'I want a red dress / blue shirt', l3: 'Fashion show game & Chant' },
    { title: 'Unit 16: At the bookshop', topic: 'Bookshop', l1: 'School things (pencil case, ruler, notebook)', l2: 'What is this? It is a ruler', l3: 'Final Exhibition: My English Journey' }
  ]
};

const primary345Units: Record<number, { term1: PrimaryUpperUnit[]; term2: PrimaryUpperUnit[] }> = {
  3: {
    term1: [
      { unitNum: 1, title: 'Unit 1: Hello', topic: 'Greetings', l1_part1: 'Look, listen and repeat (Hello, Hi)', l1_part2: 'Listen, point and say & Let\'s talk', l2_part1: 'Look, listen and repeat (How are you? I\'m fine)', l2_part2: 'Listen and number & Let\'s sing', l3_part1: 'Listen and repeat (/h/, /b/ phonics)', l3_part2: 'Read and complete & Project: Name badges' },
      { unitNum: 2, title: 'Unit 2: Our names', topic: 'Names', l1_part1: 'Look, listen and repeat (What\'s your name?)', l1_part2: 'Point and say (My name is...) & Let\'s talk', l2_part1: 'Look, listen and repeat (How do you spell your name?)', l2_part2: 'Listen and tick & Let\'s play (Spelling Bee)', l3_part1: 'Listen and repeat (Alphabet sounds /m/, /n/)', l3_part2: 'Read and match & Project: Identity Card' },
      { unitNum: 3, title: 'Unit 3: Our friends', topic: 'Friends', l1_part1: 'Look, listen and repeat (This is my friend...)', l1_part2: 'Listen, point and say (This is / That is...)', l2_part1: 'Look, listen and repeat (Are they your friends? Yes/No)', l2_part2: 'Listen and circle & Let\'s chant', l3_part1: 'Phonics practice (/th/, /t/ sounds)', l3_part2: 'Read and complete & Project: Friend Album' },
      { unitNum: 4, title: 'Unit 4: Our bodies', topic: 'Body Parts', l1_part1: 'Look, listen and repeat (Body parts: eye, ear, nose, mouth)', l1_part2: 'Touch your eyes/ears & Let\'s talk', l2_part1: 'Look, listen and repeat (Open your mouth / Wash your face)', l2_part2: 'Listen and number & Let\'s play', l3_part1: 'Phonics practice (/e/, /o/ sounds)', l3_part2: 'Read and match & Project: Body Parts Poster' },
      { unitNum: 5, title: 'Unit 5: My hobbies', topic: 'Hobbies', l1_part1: 'Look, listen and repeat (Hobbies: singing, dancing, drawing)', l1_part2: 'Listen, point and say (I like singing/drawing)', l2_part1: 'Look, listen and repeat (What\'s your hobby?)', l2_part2: 'Listen and tick & Let\'s sing (My Favourite Hobby)', l3_part1: 'Phonics practice (/s/, /d/ sounds)', l3_part2: 'Read and write & Project: My Hobby Drawing' },
      { unitNum: 6, title: 'Unit 6: Our school', topic: 'School Facilities', l1_part1: 'Look, listen and repeat (School places: classroom, library, gym)', l1_part2: 'Listen, point and say (Is this our library?)', l2_part1: 'Look, listen and repeat (Let\'s go to the playground)', l2_part2: 'Listen and number & Let\'s play', l3_part1: 'Phonics practice (/l/, /p/ sounds)', l3_part2: 'Read and complete & Project: School Map' },
      { unitNum: 7, title: 'Unit 7: Classroom things', topic: 'School Things', l1_part1: 'Look, listen and repeat (Classroom objects: pen, ruler, book, bag)', l1_part2: 'Listen, point and say (I have a pen/ruler)', l2_part1: 'Look, listen and repeat (Do you have an eraser/pencil?)', l2_part2: 'Listen and circle & Let\'s chant', l3_part1: 'Phonics practice (/r/, /p/ sounds)', l3_part2: 'Read and write & Project: My School Bag' },
      { unitNum: 8, title: 'Unit 8: Age', topic: 'Age & Numbers', l1_part1: 'Look, listen and repeat (Numbers 1-10 counting)', l1_part2: 'Listen, point and say (How old are you? I\'m eight)', l2_part1: 'Look, listen and repeat (How old is he/she? He/She is nine)', l2_part2: 'Listen and number & Let\'s play (Bingo)', l3_part1: 'Phonics practice (/eɪ/, /aɪ/ sounds)', l3_part2: 'Read and match & Project: Birthday Chart' },
      { unitNum: 9, title: 'Unit 9: Colours', topic: 'Colours', l1_part1: 'Look, listen and repeat (Colours: red, blue, yellow, green)', l1_part2: 'Listen, point and say (What colour is it? It\'s red)', l2_part1: 'Look, listen and repeat (What colour are they? They\'re blue)', l2_part2: 'Listen and tick & Let\'s chant', l3_part1: 'Phonics practice (/b/, /g/ sounds)', l3_part2: 'Read and complete & Project: Rainbow Art' },
      { unitNum: 10, title: 'Unit 10: Break time activities', topic: 'Break Time', l1_part1: 'Look, listen and repeat (Games: football, chess, badminton)', l1_part2: 'Listen, point and say (What do you do at break time?)', l2_part1: 'Look, listen and repeat (I play football/chess with my friends)', l2_part2: 'Listen and number & Let\'s play', l3_part1: 'Phonics practice (/f/, /t/ sounds)', l3_part2: 'Read and write & Project: Break Time Survey' }
    ],
    term2: [
      { unitNum: 11, title: 'Unit 11: My family', topic: 'Family Members', l1_part1: 'Look, listen and repeat (Father, mother, brother, sister)', l1_part2: 'Listen, point and say (Who\'s that? He\'s my father)', l2_part1: 'Look, listen and repeat (How old is your grandfather?)', l2_part2: 'Listen and tick & Let\'s sing (My Happy Family)', l3_part1: 'Phonics practice (/f/, /m/ sounds)', l3_part2: 'Read and complete & Project: Family Tree' },
      { unitNum: 12, title: 'Unit 12: Jobs', topic: 'Professions', l1_part1: 'Look, listen and repeat (Jobs: teacher, doctor, driver, nurse)', l1_part2: 'Listen, point and say (What\'s his/her job? He\'s a doctor)', l2_part1: 'Look, listen and repeat (Is he a teacher? Yes, he is)', l2_part2: 'Listen and number & Let\'s play', l3_part1: 'Phonics practice (/d/, /tʃ/ sounds)', l3_part2: 'Read and match & Project: Dream Job Poster' },
      { unitNum: 13, title: 'Unit 13: My house', topic: 'House & Rooms', l1_part1: 'Look, listen and repeat (Living room, bedroom, kitchen, bathroom)', l1_part2: 'Listen, point and say (Where\'s the living room? Here it is)', l2_part1: 'Look, listen and repeat (There\'s a garden in front of the house)', l2_part2: 'Listen and circle & Let\'s chant', l3_part1: 'Phonics practice (/h/, /k/ sounds)', l3_part2: 'Read and complete & Project: My Dream House' },
      { unitNum: 14, title: 'Unit 14: My bedroom', topic: 'Bedroom Furniture', l1_part1: 'Look, listen and repeat (Bed, desk, chair, door, window)', l1_part2: 'Listen, point and say (There is a bed in the room)', l2_part1: 'Look, listen and repeat (Where are the chairs? They are near the desk)', l2_part2: 'Listen and number & Let\'s play', l3_part1: 'Phonics practice (/b/, /d/ sounds)', l3_part2: 'Read and write & Project: Bedroom Layout' },
      { unitNum: 15, title: 'Unit 15: At the dining table', topic: 'Food and Drinks', l1_part1: 'Look, listen and repeat (Food: rice, fish, chicken, bread, milk)', l1_part2: 'Listen, point and say (Do you like chicken? Yes, I do)', l2_part1: 'Look, listen and repeat (Would you like some milk? Yes, please)', l2_part2: 'Listen and tick & Let\'s sing', l3_part1: 'Phonics practice (/ch/, /sh/ sounds)', l3_part2: 'Read and complete & Project: Restaurant Menu' },
      { unitNum: 16, title: 'Unit 16: My pets', topic: 'Pets', l1_part1: 'Look, listen and repeat (Pets: dog, cat, bird, rabbit, goldfish)', l1_part2: 'Listen, point and say (Do you have a cat? Yes, I do)', l2_part1: 'Look, listen and repeat (Where is the dog? It is under the table)', l2_part2: 'Listen and number & Let\'s play', l3_part1: 'Phonics practice (/d/, /p/ sounds)', l3_part2: 'Read and match & Project: Pet Care Poster' },
      { unitNum: 17, title: 'Unit 17: Our toys', topic: 'Toys', l1_part1: 'Look, listen and repeat (Toys: car, doll, robot, ball, kite)', l1_part2: 'Listen, point and say (I have a robot and a car)', l2_part1: 'Look, listen and repeat (How many robots do you have? I have three)', l2_part2: 'Listen and circle & Let\'s chant', l3_part1: 'Phonics practice (/r/, /k/ sounds)', l3_part2: 'Read and write & Project: Toy Box' },
      { unitNum: 18, title: 'Unit 18: Playing with friends', topic: 'Games and Activities', l1_part1: 'Look, listen and repeat (Activities: skipping, cycling, running)', l1_part2: 'Listen, point and say (What are you doing? I am cycling)', l2_part1: 'Look, listen and repeat (What is he doing? He is skipping)', l2_part2: 'Listen and number & Let\'s play', l3_part1: 'Phonics practice (/sk/, /sp/ sounds)', l3_part2: 'Read and complete & Project: Active Games' },
      { unitNum: 19, title: 'Unit 19: Outdoor activities', topic: 'Outdoor Adventures', l1_part1: 'Look, listen and repeat (Park, zoo, beach, swimming pool)', l1_part2: 'Listen, point and say (Where are you? I am at the park)', l2_part1: 'Look, listen and repeat (What can you see? I can see a big tree)', l2_part2: 'Listen and tick & Let\'s sing', l3_part1: 'Phonics practice (/p/, /z/ sounds)', l3_part2: 'Read and match & Project: Outdoor Guide' },
      { unitNum: 20, title: 'Unit 20: At the zoo', topic: 'Zoo Animals', l1_part1: 'Look, listen and repeat (Tiger, monkey, elephant, giraffe)', l1_part2: 'Listen, point and say (What animal is that? It\'s a tiger)', l2_part1: 'Look, listen and repeat (What is the monkey doing? It\'s swinging)', l2_part2: 'Listen and number & Let\'s play', l3_part1: 'Phonics practice (/t/, /m/ sounds)', l3_part2: 'Read and complete & Project: Zoo Animal Masks' }
    ]
  },
  4: {
    term1: [
      { unitNum: 1, title: 'Unit 1: My friends', topic: 'Friends & Greetings', l1_part1: 'Look, listen and repeat (Where are you from? I\'m from Viet Nam)', l1_part2: 'Point and say & Let\'s talk (Nationalities)', l2_part1: 'Look, listen and repeat (What nationality are you?)', l2_part2: 'Listen and number & Let\'s sing', l3_part1: 'Phonics (/v/, /m/ sounds)', l3_part2: 'Read and write & Project: International Friends' },
      { unitNum: 2, title: 'Unit 2: Time and daily routines', topic: 'Time & Schedules', l1_part1: 'Look, listen and repeat (What time is it? It\'s seven o\'clock)', l1_part2: 'Point and say & Let\'s talk (Daily routines)', l2_part1: 'Look, listen and repeat (What time do you get up? I get up at six)', l2_part2: 'Listen and tick & Let\'s chant', l3_part1: 'Phonics (/s/, /z/ sounds)', l3_part2: 'Read and complete & Project: My Daily Schedule' },
      { unitNum: 3, title: 'Unit 3: My week', topic: 'Days of the Week', l1_part1: 'Look, listen and repeat (What day is it today? It\'s Monday)', l1_part2: 'Point and say & Let\'s talk (Weekly activities)', l2_part1: 'Look, listen and repeat (What do you do on Fridays?)', l2_part2: 'Listen and number & Let\'s play', l3_part1: 'Phonics (/d/, /w/ sounds)', l3_part2: 'Read and match & Project: Weekly Timetable' },
      { unitNum: 4, title: 'Unit 4: My birthday party', topic: 'Birthdays & Dates', l1_part1: 'Look, listen and repeat (When is your birthday? It\'s in May)', l1_part2: 'Point and say (Months of the year)', l2_part1: 'Look, listen and repeat (What do you want to eat/drink?)', l2_part2: 'Listen and circle & Let\'s sing', l3_part1: 'Phonics (/th/, /m/ sounds)', l3_part2: 'Read and complete & Project: Birthday Calendar' },
      { unitNum: 5, title: 'Unit 5: Things we can do', topic: 'Abilities', l1_part1: 'Look, listen and repeat (Can you swim? Yes, I can / No, I can\'t)', l1_part2: 'Point and say (Ride a bike, play the piano)', l2_part1: 'Look, listen and repeat (What can he/she do? He can play chess)', l2_part2: 'Listen and number & Let\'s play', l3_part1: 'Phonics (/sw/, /pl/ sounds)', l3_part2: 'Read and write & Project: Talent Showcase' },
      { unitNum: 6, title: 'Unit 6: Our school subjects', topic: 'Subjects', l1_part1: 'Look, listen and repeat (Subjects: Maths, English, Science, Music, Art)', l1_part2: 'Point and say (What subjects do you have today?)', l2_part1: 'Look, listen and repeat (When do you have English? On Tuesdays)', l2_part2: 'Listen and tick & Let\'s chant', l3_part1: 'Phonics (/m/, /s/ sounds)', l3_part2: 'Read and complete & Project: Favourite Subject' },
      { unitNum: 7, title: 'Unit 7: Our timetables', topic: 'School Timetable', l1_part1: 'Look, listen and repeat (What\'s your favourite subject? I like Science)', l1_part2: 'Point and say & Let\'s talk (Why do you like it?)', l2_part1: 'Look, listen and repeat (How often do you have Maths?)', l2_part2: 'Listen and number & Let\'s play', l3_part1: 'Phonics (/t/, /b/ sounds)', l3_part2: 'Read and match & Project: Class Timetable' },
      { unitNum: 8, title: 'Unit 8: My favourite subjects', topic: 'Subject Preferences', l1_part1: 'Look, listen and repeat (Why do you like English? Because I want to be a guide)', l1_part2: 'Point and say & Let\'s talk (Future ambitions)', l2_part1: 'Look, listen and repeat (Who is your English teacher?)', l2_part2: 'Listen and circle & Let\'s sing', l3_part1: 'Phonics (/tʃ/, /dʒ/ sounds)', l3_part2: 'Read and write & Project: Subject Interview' },
      { unitNum: 9, title: 'Unit 9: Our sports day', topic: 'Sports Day', l1_part1: 'Look, listen and repeat (When will Sports Day be? It\'ll be in November)', l1_part2: 'Point and say (Sports events: running, table tennis)', l2_part1: 'Look, listen and repeat (What are you going to do on Sports Day?)', l2_part2: 'Listen and number & Let\'s play', l3_part1: 'Phonics (/sp/, /st/ sounds)', l3_part2: 'Read and complete & Project: Sports Day Poster' },
      { unitNum: 10, title: 'Unit 10: Our school trip', topic: 'School Trips', l1_part1: 'Look, listen and repeat (Where were you yesterday? I was at the zoo)', l1_part2: 'Point and say & Let\'s talk (Past locations)', l2_part1: 'Look, listen and repeat (What did you do there? I saw the animals)', l2_part2: 'Listen and tick & Let\'s chant', l3_part1: 'Phonics (/w/, /z/ sounds)', l3_part2: 'Read and write & Project: Trip Diary' }
    ],
    term2: [
      { unitNum: 11, title: 'Unit 11: My home', topic: 'Homes & Locations', l1_part1: 'Look, listen and repeat (Where do you live? I live in a flat/house)', l1_part2: 'Point and say (Address and street names)', l2_part1: 'Look, listen and repeat (What\'s your address? It\'s 105 Hoa Binh Street)', l2_part2: 'Listen and number & Let\'s sing', l3_part1: 'Phonics (/fl/, /str/ sounds)', l3_part2: 'Read and complete & Project: My Address Card' },
      { unitNum: 12, title: 'Unit 12: Jobs in the neighbourhood', topic: 'Community Jobs', l1_part1: 'Look, listen and repeat (What does your mother do? She is a teacher)', l1_part2: 'Point and say (Farmer, worker, clerk, nurse)', l2_part1: 'Look, listen and repeat (Where does she work? In a school)', l2_part2: 'Listen and tick & Let\'s chant', l3_part1: 'Phonics (/k/, /f/ sounds)', l3_part2: 'Read and match & Project: Community Workers' },
      { unitNum: 13, title: 'Unit 13: Appearance', topic: 'Appearance & Clothes', l1_part1: 'Look, listen and repeat (What does he look like? He is tall and slim)', l1_part2: 'Point and say (Adjectives: tall, short, slim, strong)', l2_part1: 'Look, listen and repeat (Who is taller? My brother is taller)', l2_part2: 'Listen and number & Let\'s play', l3_part1: 'Phonics (/t/, /ʃ/ sounds)', l3_part2: 'Read and complete & Project: Fashion Drawing' },
      { unitNum: 14, title: 'Unit 14: Daily food and drink', topic: 'Food & Menus', l1_part1: 'Look, listen and repeat (What\'s your favourite food? Beef / Noodles)', l1_part2: 'Point and say (Orange juice, lemonade, mineral water)', l2_part1: 'Look, listen and repeat (What would you like to eat? Some rice and fish)', l2_part2: 'Listen and circle & Let\'s sing', l3_part1: 'Phonics (/b/, /f/ sounds)', l3_part2: 'Read and write & Project: Healthy Meal Plan' },
      { unitNum: 15, title: 'Unit 15: Animal world', topic: 'Wild Animals', l1_part1: 'Look, listen and repeat (What animal do you want to see? I want to see monkeys)', l1_part2: 'Point and say (Tigers, elephants, bears, kangaroos)', l2_part1: 'Look, listen and repeat (Why do you like monkeys? Because they are funny)', l2_part2: 'Listen and number & Let\'s play', l3_part1: 'Phonics (/m/, /k/ sounds)', l3_part2: 'Read and complete & Project: Animal Fact File' },
      { unitNum: 16, title: 'Unit 16: Weather', topic: 'Weather & Seasons', l1_part1: 'Look, listen and repeat (What\'s the weather like today? It\'s sunny and warm)', l1_part2: 'Point and say (Rainy, windy, cloudy, snowy, foggy)', l2_part1: 'Look, listen and repeat (What will the weather be like tomorrow?)', l2_part2: 'Listen and tick & Let\'s chant', l3_part1: 'Phonics (/w/, /s/ sounds)', l3_part2: 'Read and match & Project: Weather Forecast' },
      { unitNum: 17, title: 'Unit 17: In the city', topic: 'City Places & Directions', l1_part1: 'Look, listen and repeat (Where is the bookshop? It\'s next to the cinema)', l1_part2: 'Point and say (Opposite, between, on the corner)', l2_part1: 'Look, listen and repeat (How can I get to the post office? Go straight ahead)', l2_part2: 'Listen and number & Let\'s play', l3_part1: 'Phonics (/b/, /p/ sounds)', l3_part2: 'Read and complete & Project: City Map Directions' },
      { unitNum: 18, title: 'Unit 18: At the shopping mall', topic: 'Shopping & Prices', l1_part1: 'Look, listen and repeat (How much is this T-shirt? It\'s 80,000 dong)', l1_part2: 'Point and say (Jacket, skirt, jeans, shoes)', l2_part1: 'Look, listen and repeat (How much are these shoes? They\'re 150,000 dong)', l2_part2: 'Listen and circle & Let\'s sing', l3_part1: 'Phonics (/ʃ/, /tʃ/ sounds)', l3_part2: 'Read and write & Project: Shopping Role-play' },
      { unitNum: 19, title: 'Unit 19: Special days', topic: 'Holidays & Festivals', l1_part1: 'Look, listen and repeat (When is Children\'s Day? It\'s on the first of June)', l1_part2: 'Point and say (Teachers\' Day, Christmas, New Year)', l2_part1: 'Look, listen and repeat (What do you do on New Year\'s Day? I visit grandparents)', l2_part2: 'Listen and number & Let\'s play', l3_part1: 'Phonics (/d/, /n/ sounds)', l3_part2: 'Read and complete & Project: Festival Greeting Card' },
      { unitNum: 20, title: 'Unit 20: Our summer holidays', topic: 'Summer Vacation', l1_part1: 'Look, listen and repeat (Where are you going this summer? I\'m going to Da Nang)', l1_part2: 'Point and say (Ha Long Bay, Phu Quoc, Nha Trang)', l2_part1: 'Look, listen and repeat (What are you going to do there? I\'m going to swim in the sea)', l2_part2: 'Listen and tick & Let\'s chant', l3_part1: 'Phonics (/s/, /d/ sounds)', l3_part2: 'Read and match & Project: Summer Vacation Plan' }
    ]
  },
  5: {
    term1: [
      { unitNum: 1, title: 'Unit 1: All about me', topic: 'Personal Profiles', l1_part1: 'Look, listen and repeat (Address, hometown and living environment)', l1_part2: 'Point and say & Let\'s talk (What\'s your city/village like?)', l2_part1: 'Look, listen and repeat (What\'s your hometown like? It\'s quiet and peaceful)', l2_part2: 'Listen and number & Let\'s sing', l3_part1: 'Phonics (Word stress in two-syllable adjectives)', l3_part2: 'Read and write & Project: My Hometown Profile' },
      { unitNum: 2, title: 'Unit 2: Our routines', topic: 'Routines & Frequencies', l1_part1: 'Look, listen and repeat (What do you do in the morning? I always do morning exercise)', l1_part2: 'Point and say (Always, usually, often, sometimes, never)', l2_part1: 'Look, listen and repeat (How often do you go to the library? Once a week)', l2_part2: 'Listen and tick & Let\'s chant', l3_part1: 'Phonics (Sentence stress in adverbs)', l3_part2: 'Read and complete & Project: Routine Survey' },
      { unitNum: 3, title: 'Unit 3: My foreign friends', topic: 'Global Friends', l1_part1: 'Look, listen and repeat (Where did you go on holiday? I went to Ancient Town)', l1_part2: 'Point and say & Let\'s talk (Imperial City, Bay, Island)', l2_part1: 'Look, listen and repeat (How did you get there? I went by plane/train)', l2_part2: 'Listen and number & Let\'s play', l3_part1: 'Phonics (Past tense regular endings /t/, /d/, /ɪd/)', l3_part2: 'Read and write & Project: Travel Postcard' },
      { unitNum: 4, title: 'Unit 4: Our free-time activities', topic: 'Leisure Activities', l1_part1: 'Look, listen and repeat (What do you do in your free time? I surf the Internet)', l1_part2: 'Point and say (Read comics, clean the house, do karate)', l2_part1: 'Look, listen and repeat (What does your father/mother do in his/her free time?)', l2_part2: 'Listen and circle & Let\'s sing', l3_part1: 'Phonics (Sentence rhythm in questions)', l3_part2: 'Read and complete & Project: Free-Time Club' },
      { unitNum: 5, title: 'Unit 5: My future job', topic: 'Career Dreams', l1_part1: 'Look, listen and repeat (What would you like to be in the future? An architect / A writer)', l1_part2: 'Point and say (Pilot, doctor, engineer, astronaut)', l2_part1: 'Look, listen and repeat (Why would you like to be a doctor? Because I\'d like to look after patients)', l2_part2: 'Listen and number & Let\'s play', l3_part1: 'Phonics (Stress in job nouns)', l3_part2: 'Read and write & Project: Dream Career Poster' },
      { unitNum: 6, title: 'Unit 6: Our school festival', topic: 'School Events', l1_part1: 'Look, listen and repeat (Where were you on Teachers\' Day? I was at school)', l1_part2: 'Point and say (Singing contest, sports festival, book fair)', l2_part1: 'Look, listen and repeat (What did you do at the festival? We sang songs and danced)', l2_part2: 'Listen and tick & Let\'s chant', l3_part1: 'Phonics (Intonation in yes/no questions)', l3_part2: 'Read and match & Project: Festival Memory Album' },
      { unitNum: 7, title: 'Unit 7: Stories for children', topic: 'Folk Tales & Fables', l1_part1: 'Look, listen and repeat (What are you reading? I\'m reading The Fox and the Crow)', l1_part2: 'Point and say (Aladdin, Snow White, The Story of Mai An Tiem)', l2_part1: 'Look, listen and repeat (What\'s the main character like? He\'s clever and hard-working)', l2_part2: 'Listen and number & Let\'s play', l3_part1: 'Phonics (Expressive sentence intonation)', l3_part2: 'Read and complete & Project: Story Book Cover' },
      { unitNum: 8, title: 'Unit 8: Life in the past', topic: 'Past vs Present Life', l1_part1: 'Look, listen and repeat (What did you see at the zoo? I saw peacocks and tigers)', l1_part2: 'Point and say & Let\'s talk (What did the animals do when you were there?)', l2_part1: 'Look, listen and repeat (The tigers roared loudly / The python moved quietly)', l2_part2: 'Listen and circle & Let\'s sing', l3_part1: 'Phonics (Adverbs ending in -ly)', l3_part2: 'Read and write & Project: Zoo Animal Diary' },
      { unitNum: 9, title: 'Unit 9: Our outdoor activities', topic: 'Sports & Camping', l1_part1: 'Look, listen and repeat (What are you going to do this weekend? I\'m going to go camping)', l1_part2: 'Point and say (Build a campfire, put up a tent, sing songs)', l2_part1: 'Look, listen and repeat (Who are you going with? I\'m going with my classmates)', l2_part2: 'Listen and number & Let\'s play', l3_part1: 'Phonics (Rhythm in compound verbs)', l3_part2: 'Read and complete & Project: Camping Safety Plan' },
      { unitNum: 10, title: 'Unit 10: Our health', topic: 'Health & Common Illnesses', l1_part1: 'Look, listen and repeat (What\'s the matter with you? I have a headache/toothache/fever)', l1_part2: 'Point and say & Let\'s talk (Giving health advice: You should/shouldn\'t...)', l2_part1: 'Look, listen and repeat (You should go to the doctor / You shouldn\'t eat sweet candies)', l2_part2: 'Listen and tick & Let\'s chant', l3_part1: 'Phonics (Stress in health terms)', l3_part2: 'Read and match & Project: First Aid Guide Poster' }
    ],
    term2: [
      { unitNum: 11, title: 'Unit 11: Safety at home', topic: 'Safety & Accident Prevention', l1_part1: 'Look, listen and repeat (Don\'t ride your bike too fast! / Don\'t play with matches!)', l1_part2: 'Point and say (Cut yourself, touch the stove, get a burn)', l2_part1: 'Look, listen and repeat (Why shouldn\'t I climb the tree? Because you may fall and break your leg)', l2_part2: 'Listen and number & Let\'s play', l3_part1: 'Phonics (Imperative sentence stress)', l3_part2: 'Read and complete & Project: Home Safety Rules' },
      { unitNum: 12, title: 'Unit 12: Our favourite stories', topic: 'Literature & Legends', l1_part1: 'Look, listen and repeat (What do you think of the older brother? He is greedy)', l1_part2: 'Point and say & Let\'s talk (Generous, kind, brave, intelligent)', l2_part1: 'Look, listen and repeat (What happened in the story? First... Then... Next... In the end...)', l2_part2: 'Listen and circle & Let\'s sing', l3_part1: 'Phonics (Story narrative connectors)', l3_part2: 'Read and write & Project: Retell a Folktale' },
      { unitNum: 13, title: 'Unit 13: Special occasions', topic: 'Cultural Celebrations', l1_part1: 'Look, listen and repeat (What did you do on Women\'s Day? I made a card for my mother)', l1_part2: 'Point and say (Give flowers, sing songs, visit teachers)', l2_part1: 'Look, listen and repeat (How was the party? It was wonderful and lively)', l2_part2: 'Listen and number & Let\'s play', l3_part1: 'Phonics (Past tense conversational intonation)', l3_part2: 'Read and match & Project: Special Occasion Card' },
      { unitNum: 14, title: 'Unit 14: Stay safe online', topic: 'Cyber Safety & Digital World', l1_part1: 'Look, listen and repeat (What do you use the computer for? For studying English and games)', l1_part2: 'Point and say (Protect personal information, don\'t share passwords)', l2_part1: 'Look, listen and repeat (You should ask your parents before downloading files online)', l2_part2: 'Listen and tick & Let\'s chant', l3_part1: 'Phonics (Connected speech in computer terms)', l3_part2: 'Read and complete & Project: Digital Safety Guide' },
      { unitNum: 15, title: 'Unit 15: Transport', topic: 'Transport & Landmarks', l1_part1: 'Look, listen and repeat (Which place would you like to visit? Trang An or Bai Dinh Pagoda?)', l1_part2: 'Point and say (Museum of History, Temple of Literature, Suoi Tien Park)', l2_part1: 'Look, listen and repeat (What do you think of Dam Sen Park? It is more exciting than I expected)', l2_part2: 'Listen and number & Let\'s play', l3_part1: 'Phonics (Comparative intonation in questions)', l3_part2: 'Read and write & Project: City Travel Itinerary' },
      { unitNum: 16, title: 'Unit 16: Seasons and the weather', topic: 'Climate & Geography', l1_part1: 'Look, listen and repeat (How many seasons are there in your area? There are two/four seasons)', l1_part2: 'Point and say (Spring, summer, autumn, winter / Dry season, rainy season)', l2_part1: 'Look, listen and repeat (What\'s winter like in your hometown? It\'s usually cold and foggy)', l2_part2: 'Listen and circle & Let\'s sing', l3_part1: 'Phonics (Stress in weather compound nouns)', l3_part2: 'Read and match & Project: Seasonal Weather Chart' },
      { unitNum: 17, title: 'Unit 17: In the mountains', topic: 'Highland Nature & Culture', l1_part1: 'Look, listen and repeat (What did you do in Sa Pa? I visited Cat Cat village)', l1_part2: 'Point and say (Climb Fansipan mountain, admire terraced fields)', l2_part1: 'Look, listen and repeat (What is life in the mountains like? It is peaceful and fresh)', l2_part2: 'Listen and number & Let\'s play', l3_part1: 'Phonics (Descriptive sentence rhythm)', l3_part2: 'Read and complete & Project: Highland Travel Brochure' },
      { unitNum: 18, title: 'Unit 18: In the countryside', topic: 'Rural Life & Agriculture', l1_part1: 'Look, listen and repeat (What will you do in the countryside? I will help my grandparents harvest rice)', l1_part2: 'Point and say (Feed chickens, water vegetables, pick fruit)', l2_part1: 'Look, listen and repeat (Where is your village? It\'s by the river/in the valley)', l2_part2: 'Listen and tick & Let\'s chant', l3_part1: 'Phonics (Future will sentence stress)', l3_part2: 'Read and write & Project: Countryside Farm Model' },
      { unitNum: 19, title: 'Unit 19: Exploring the world', topic: 'World Wonders & Capital Cities', l1_part1: 'Look, listen and repeat (Which country would you like to visit? I\'d like to visit Australia)', l1_part2: 'Point and say (Sydney Opera House, Big Ben, Eiffel Tower, Statue of Liberty)', l2_part1: 'Look, listen and repeat (Why would you like to visit France? Because I want to see the Eiffel Tower)', l2_part2: 'Listen and number & Let\'s play', l3_part1: 'Phonics (Proper nouns intonation)', l3_part2: 'Read and complete & Project: World Tour Passport' },
      { unitNum: 20, title: 'Unit 20: Our summer holiday plans', topic: 'Summer Holiday & Secondary Transition', l1_part1: 'Look, listen and repeat (Where are you going for summer vacation? I\'m going to visit my grandparents)', l1_part2: 'Point and say (Learn swimming, read English books, prepare for Grade 6)', l2_part1: 'Look, listen and repeat (What are you looking forward to in secondary school?)', l2_part2: 'Listen and circle & Let\'s sing', l3_part1: 'Phonics (Farewell speech and graduation intonation)', l3_part2: 'Read and write & Project: Primary English Graduation Portfolio' }
    ]
  }
};

/**
 * TIẾNG ANH TIỂU HỌC (LỚP 1 - 5) - GLOBAL SUCCESS (NXB GIÁO DỤC VIỆT NAM)
 * - Lớp 3, 4, 5: Chuẩn 140 tiết / năm học (4 tiết/tuần x 35 tuần)
 * - Lớp 1, 2: Chuẩn 70 tiết / năm học (2 tiết/tuần x 35 tuần)
 * Mỗi hàng là 1 tiết riêng biệt theo đúng PPCT thực tế của giáo viên tiểu học.
 */
export function getEnglishPrimaryCurriculum(grade: string): RawPrimaryLesson[] {
  const g = parseInt(grade, 10) || 3;
  const list: RawPrimaryLesson[] = [];

  // 1. CẤP TIỂU HỌC LỚP 1 & 2 (70 tiết = 35 tuần x 2 tiết/tuần)
  if (g <= 2) {
    const units = primary12Units[g] || primary12Units[1];
    const items: { topic: string; name: string; isGK?: boolean; isCK?: boolean; isProject?: boolean }[] = [];

    // Term 1: 36 lessons (Weeks 1 - 18)
    for (let uIdx = 0; uIdx < 4; uIdx++) {
      const u = units[uIdx];
      items.push({ topic: u.title, name: `Lesson 1: ${u.l1}` });
      items.push({ topic: u.title, name: `Lesson 2: ${u.l2}` });
      items.push({ topic: u.title, name: `Lesson 3: ${u.l3}`, isProject: true });
    }
    // 12 lessons (Weeks 1 - 6)
    items.push({ topic: 'Review 1', name: 'Review 1: Letters, Vocabulary & Phonics (Units 1-4)' });
    items.push({ topic: 'Review 1', name: 'Review 1: Fun English Games & Song Presentation' });
    // Week 8 (lessons 15-16)
    const u5 = units[4];
    items.push({ topic: u5.title, name: `Lesson 1: ${u5.l1}` });
    items.push({ topic: u5.title, name: `Lesson 2: ${u5.l2}` });
    // Week 9 (lessons 17-18): Mid-term Test 1
    items.push({ topic: 'Assessment', name: `Mid-term Test 1 (Grade ${g})`, isGK: true });
    items.push({ topic: 'Assessment', name: `Mid-term Test 1 Feedback & Oral Practice` });

    // Weeks 10 - 15 (lessons 19-30)
    items.push({ topic: u5.title, name: `Lesson 3: ${u5.l3}`, isProject: true });
    for (let uIdx = 5; uIdx < 8; uIdx++) {
      const u = units[uIdx];
      items.push({ topic: u.title, name: `Lesson 1: ${u.l1}` });
      items.push({ topic: u.title, name: `Lesson 2: ${u.l2}` });
      items.push({ topic: u.title, name: `Lesson 3: ${u.l3}`, isProject: true });
    }
    items.push({ topic: 'Review 2', name: 'Review 2: Language Synthesis (Units 5-8)' });
    items.push({ topic: 'Review 2', name: 'Review 2: Interactive Language Practice' });

    // Week 16 (lessons 31-32): End-of-Term 1 Test
    items.push({ topic: 'Assessment', name: `End-of-Term 1 Test (Grade ${g})`, isCK: true });
    items.push({ topic: 'Assessment', name: `End-of-Term 1 Test: Speaking & Interaction` });

    // Week 17 (lessons 33-34)
    items.push({ topic: 'Assessment', name: `End-of-Term 1 Test Feedback & Story Telling` });
    items.push({ topic: 'Language Activity', name: `Term 1 English Fun Club & Speaking Showcase`, isProject: true });

    // Week 18 (lessons 35-36)
    items.push({ topic: 'Language Activity', name: `Term 1 Primary English Exhibition & Awarding`, isProject: true });
    items.push({ topic: 'Consolidation', name: `Term 1 Language Consolidation & Winter Break Prep` });

    // Term 2: 34 lessons (Weeks 19 - 35)
    for (let uIdx = 8; uIdx < 12; uIdx++) {
      const u = units[uIdx];
      items.push({ topic: u.title, name: `Lesson 1: ${u.l1}` });
      items.push({ topic: u.title, name: `Lesson 2: ${u.l2}` });
      items.push({ topic: u.title, name: `Lesson 3: ${u.l3}`, isProject: true });
    }
    // 12 lessons (Weeks 19 - 24)
    items.push({ topic: 'Review 3', name: 'Review 3: Letters, Vocabulary & Phonics (Units 9-12)' });
    items.push({ topic: 'Review 3', name: 'Review 3: Song Presentation & Fun Quiz' });

    // Week 26 (lessons 51-52): Mid-term Test 2
    items.push({ topic: 'Assessment', name: `Mid-term Test 2 (Grade ${g})`, isGK: true });
    items.push({ topic: 'Assessment', name: `Mid-term Test 2 Feedback & Diagnostic Practice` });

    // Weeks 27 - 30 (lessons 53-60)
    for (let uIdx = 12; uIdx < 15; uIdx++) {
      const u = units[uIdx];
      items.push({ topic: u.title, name: `Lesson 1: ${u.l1}` });
      items.push({ topic: u.title, name: `Lesson 2: ${u.l2}` });
      items.push({ topic: u.title, name: `Lesson 3: ${u.l3}`, isProject: true });
    }
    items.push({ topic: 'Review 4', name: 'Review 4: Comprehensive Language Revision (Units 13-15)' });
    items.push({ topic: 'Review 4', name: 'Review 4: Integrated 4 Skills Practice' });

    // Week 31 (lessons 61-62): End-of-Year Test
    items.push({ topic: 'Assessment', name: `End-of-Year Test (Grade ${g})`, isCK: true });
    items.push({ topic: 'Assessment', name: `End-of-Year Test: Speaking & Interaction` });

    // Week 32 (lessons 63-64)
    items.push({ topic: 'Assessment', name: `End-of-Year Test Feedback & Remedial Practice` });
    const u16 = units[15];
    items.push({ topic: u16.title, name: `Lesson 1: ${u16.l1}` });

    // Week 33 (lessons 65-66)
    items.push({ topic: u16.title, name: `Lesson 2: ${u16.l2}` });
    items.push({ topic: u16.title, name: `Lesson 3: ${u16.l3}`, isProject: true });

    // Week 34 (lessons 67-68)
    items.push({ topic: 'Language Activity', name: `English Song Festival & Summer Vacation Guide`, isProject: true });
    items.push({ topic: 'Consolidation', name: `Comprehensive Revision & Story Telling Showcase` });

    // Week 35 (lessons 69-70)
    items.push({ topic: 'English Festival', name: `School Year English Festival Exhibition & Certificate Awarding`, isProject: true });
    items.push({ topic: 'English Festival', name: `Academic Year Summary & Farewell Celebration`, isProject: true });

    items.slice(0, 70).forEach((item, idx) => {
      const weekNum = Math.min(35, Math.floor(idx / 2) + 1);
      list.push({
        week: weekNum,
        topic: item.topic,
        name: item.name,
        periods: 1,
        yccd: getPrimaryLessonYccd('Tiếng Anh', String(g), item.name, weekNum),
        equipment: 'Audio CD/MP3 Global Success, flashcards, puppets, smartboard, student book',
        location: 'English Language Lab / Classroom',
        notes: item.isGK ? 'Mid-term Assessment (GK)' : item.isCK ? 'End-of-term Assessment (CK)' : item.isProject ? 'Project Presentation' : ''
      });
    });

    return list;
  }

  // 2. CẤP TIỂU HỌC LỚP 3, 4, 5 (140 tiết = 35 tuần x 4 tiết/tuần)
  const currentUnits = primary345Units[g] || primary345Units[3];
  const items: { topic: string; name: string; isGK?: boolean; isCK?: boolean; isProject?: boolean }[] = [];

  // Term 1: 72 lessons (Weeks 1 - 18)
  for (let uIdx = 0; uIdx < 5; uIdx++) {
    const u = currentUnits.term1[uIdx];
    items.push({ topic: u.title, name: `Lesson 1 (Period 1): ${u.l1_part1}` });
    items.push({ topic: u.title, name: `Lesson 1 (Period 2): ${u.l1_part2}` });
    items.push({ topic: u.title, name: `Lesson 2 (Period 3): ${u.l2_part1}` });
    items.push({ topic: u.title, name: `Lesson 2 (Period 4): ${u.l2_part2}` });
    items.push({ topic: u.title, name: `Lesson 3 (Period 5): ${u.l3_part1}` });
    items.push({ topic: u.title, name: `Lesson 3 (Period 6): ${u.l3_part2}`, isProject: true });
  }
  // 30 lessons (Weeks 1 - 7.5) -> indices 0..29

  // Week 8 (indices 30-31) + Week 9 (indices 32-35): Mid-Term 1 Block
  items.push({ topic: 'Review 1', name: 'Review 1: Language Synthesis (Units 1-5)' });
  items.push({ topic: 'Review 1', name: 'Review 1: 4 Skills Practice (Listening & Speaking)' });
  items.push({ topic: 'Assessment', name: `Mid-term Test 1 (Grade ${g})`, isGK: true });
  items.push({ topic: 'Assessment', name: `Mid-term Test 1: Speaking & Communication Test (Grade ${g})`, isGK: true });
  items.push({ topic: 'Assessment', name: `Mid-term Test 1 Feedback & Diagnostic Correction` });
  items.push({ topic: 'Review 1', name: 'Review 1: Language Extension & Diagnostic Practice' });

  // Weeks 10 - 15 (indices 36-59): Units 6, 7, 8, 9 (4 units x 6 periods = 24 periods)
  for (let uIdx = 5; uIdx < 9; uIdx++) {
    const u = currentUnits.term1[uIdx];
    items.push({ topic: u.title, name: `Lesson 1 (Period 1): ${u.l1_part1}` });
    items.push({ topic: u.title, name: `Lesson 1 (Period 2): ${u.l1_part2}` });
    items.push({ topic: u.title, name: `Lesson 2 (Period 3): ${u.l2_part1}` });
    items.push({ topic: u.title, name: `Lesson 2 (Period 4): ${u.l2_part2}` });
    items.push({ topic: u.title, name: `Lesson 3 (Period 5): ${u.l3_part1}` });
    items.push({ topic: u.title, name: `Lesson 3 (Period 6): ${u.l3_part2}`, isProject: true });
  }

  // Week 16 (indices 60-63): End-of-Term 1 Assessment Block
  items.push({ topic: 'Review 2', name: 'Review 2: Language Synthesis (Units 6-9)' });
  items.push({ topic: 'Review 2', name: 'Review 2: 4 Skills Practice (Reading & Writing)' });
  items.push({ topic: 'Assessment', name: `End-of-Term 1 Test (Grade ${g})`, isCK: true });
  items.push({ topic: 'Assessment', name: `End-of-Term 1 Test: Speaking & Interaction (Grade ${g})`, isCK: true });

  // Week 17 (indices 64-67): Feedback & Unit 10 Intro
  const u10 = currentUnits.term1[9];
  items.push({ topic: 'Assessment', name: `End-of-Term 1 Test Feedback & Diagnostic Correction` });
  items.push({ topic: 'Assessment', name: `Term 1 Remedial & Extension Language Practice` });
  items.push({ topic: u10.title, name: `Lesson 1 (Period 1): ${u10.l1_part1}` });
  items.push({ topic: u10.title, name: `Lesson 1 (Period 2): ${u10.l1_part2}` });

  // Week 18 (indices 68-71): Unit 10 Completion & Term 1 Showcase
  items.push({ topic: u10.title, name: `Lesson 2 (Period 3): ${u10.l2_part1}` });
  items.push({ topic: u10.title, name: `Lesson 2 (Period 4): ${u10.l2_part2}` });
  items.push({ topic: u10.title, name: `Lesson 3 (Period 5): ${u10.l3_part1}` });
  items.push({ topic: 'Language Activity', name: `Term 1 Primary English Fun Fair & Digital Portfolio Show`, isProject: true });

  // Term 2: 68 lessons (Weeks 19 - 35)
  // Weeks 19 - 25: Units 11, 12, 13, 14, 15 (5 units x 6 periods = 30 periods: indices 72-101)
  for (let uIdx = 0; uIdx < 5; uIdx++) {
    const u = currentUnits.term2[uIdx];
    items.push({ topic: u.title, name: `Lesson 1 (Period 1): ${u.l1_part1}` });
    items.push({ topic: u.title, name: `Lesson 1 (Period 2): ${u.l1_part2}` });
    items.push({ topic: u.title, name: `Lesson 2 (Period 3): ${u.l2_part1}` });
    items.push({ topic: u.title, name: `Lesson 2 (Period 4): ${u.l2_part2}` });
    items.push({ topic: u.title, name: `Lesson 3 (Period 5): ${u.l3_part1}` });
    items.push({ topic: u.title, name: `Lesson 3 (Period 6): ${u.l3_part2}`, isProject: true });
  }

  // Week 26 (indices 102-105): Mid-Term 2 Assessment Block
  items.push({ topic: 'Review 3', name: 'Review 3: Language Synthesis (Units 11-15)' });
  items.push({ topic: 'Review 3', name: 'Review 3: 4 Skills Practice (Listening & Speaking)' });
  items.push({ topic: 'Assessment', name: `Mid-term Test 2 (Grade ${g})`, isGK: true });
  items.push({ topic: 'Assessment', name: `Mid-term Test 2: Speaking & Oral Interaction (Grade ${g})`, isGK: true });

  // Weeks 27 - 30 (indices 106-119): Units 16, 17, 18 (3 units x 6 = 18 periods: indices 106-123, let's distribute evenly)
  items.push({ topic: 'Assessment', name: `Mid-term Test 2 Feedback & Diagnostic Correction` });
  items.push({ topic: 'Review 3', name: 'Mid-term 2 Language Consolidation & Extension' });

  for (let uIdx = 5; uIdx < 8; uIdx++) {
    const u = currentUnits.term2[uIdx];
    items.push({ topic: u.title, name: `Lesson 1 (Period 1): ${u.l1_part1}` });
    items.push({ topic: u.title, name: `Lesson 1 (Period 2): ${u.l1_part2}` });
    items.push({ topic: u.title, name: `Lesson 2 (Period 3): ${u.l2_part1}` });
    items.push({ topic: u.title, name: `Lesson 2 (Period 4): ${u.l2_part2}` });
    items.push({ topic: u.title, name: `Lesson 3 (Period 5): ${u.l3_part1}` });
    items.push({ topic: u.title, name: `Lesson 3 (Period 6): ${u.l3_part2}`, isProject: true });
  }
  // Units 19 (indices 126-129)
  const u19 = currentUnits.term2[8];
  items.push({ topic: u19.title, name: `Lesson 1 (Period 1): ${u19.l1_part1}` });
  items.push({ topic: u19.title, name: `Lesson 1 (Period 2): ${u19.l1_part2}` });

  // Week 31 (indices 120-123): End-of-Year Assessment Block
  // Let's adjust index to align Week 31 perfectly
  items.push({ topic: 'Review 4', name: 'Review 4: Comprehensive Language Revision (Units 16-19)' });
  items.push({ topic: 'Review 4', name: 'Review 4: Integrated 4 Skills Practice & Exam Format' });
  items.push({ topic: 'Assessment', name: `End-of-Year Test (Grade ${g})`, isCK: true });
  items.push({ topic: 'Assessment', name: `End-of-Year Test: Speaking & Competency Assessment (Grade ${g})`, isCK: true });

  // Week 32 (indices 124-127): Feedback & Unit 20 Intro
  const u20 = currentUnits.term2[9];
  items.push({ topic: 'Assessment', name: `End-of-Year Test Feedback & Diagnostic Correction` });
  items.push({ topic: 'Assessment', name: `Language Remediation & Skills Enhancement` });
  items.push({ topic: u20.title, name: `Lesson 1 (Period 1): ${u20.l1_part1}` });
  items.push({ topic: u20.title, name: `Lesson 1 (Period 2): ${u20.l1_part2}` });

  // Week 33 (indices 128-131): Unit 20 completion & STEM English Project
  items.push({ topic: u20.title, name: `Lesson 2 (Period 3): ${u20.l2_part1}` });
  items.push({ topic: u20.title, name: `Lesson 2 (Period 4): ${u20.l2_part2}` });
  items.push({ topic: u20.title, name: `Lesson 3 (Period 5): ${u20.l3_part1}` });
  items.push({ topic: 'Project', name: `English Drama & Creative Storytelling Showcase`, isProject: true });

  // Week 34 (indices 132-135): Comprehensive Revision & Summer Preparation
  items.push({ topic: 'Revision', name: `Comprehensive Primary English Revision: Grammar & Vocabulary` });
  items.push({ topic: 'Revision', name: `Comprehensive Primary English Revision: Communication & Phonics` });
  items.push({ topic: 'Summer Prep', name: `Summer English Self-Study Guide & Digital Learning Resources` });
  items.push({ topic: 'Summer Prep', name: `Transition to Secondary English: Essential Study Skills` });

  // Week 35 (indices 136-139): English Festival & Graduation Showcase
  items.push({ topic: 'English Festival', name: `School Year English Festival: Exhibition & Interactive Booths`, isProject: true });
  items.push({ topic: 'English Festival', name: `English Talent Contest & Public Speaking Gala`, isProject: true });
  items.push({ topic: 'English Festival', name: `Primary English Graduation Showcase & Portfolio Presentation`, isProject: true });
  items.push({ topic: 'English Festival', name: `Academic Year Summary & Certificate Awarding Ceremony`, isProject: true });

  items.slice(0, 140).forEach((item, idx) => {
    const weekNum = Math.min(35, Math.floor(idx / 4) + 1);
    list.push({
      week: weekNum,
      topic: item.topic,
      name: item.name,
      periods: 1,
      yccd: getPrimaryLessonYccd('Tiếng Anh', String(g), item.name, weekNum),
      equipment: 'Audio CD/MP3 Global Success, flashcards, smartboard, student book & activity book',
      location: 'English Language Lab / Classroom',
      notes: item.isGK ? 'Mid-term Assessment (GK)' : item.isCK ? 'End-of-term Assessment (CK)' : item.isProject ? 'Project Presentation' : ''
    });
  });

  return list;
}
