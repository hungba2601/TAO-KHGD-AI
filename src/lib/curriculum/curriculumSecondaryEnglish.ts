import { RawSecondaryLesson } from './curriculumSecondary';

export interface SecondaryEnglishLessonDef {
  week: number;
  period: number;
  unit: string;
  lesson: string;
  objectives: string;
  isTest?: boolean;
}

// =========================================================================
// 1. KẾ HOẠCH DẠY HỌC MÔN TIẾNG ANH - LỚP 6 (GLOBAL SUCCESS - 105 TIẾT)
// =========================================================================
export const SECONDARY_ENGLISH_GRADE_6_LESSONS: SecondaryEnglishLessonDef[] = [
  // Week 1
  {
    week: 1,
    period: 1,
    unit: 'UNIT 1',
    lesson: 'Getting started',
    objectives: `By the end of this unit, students will be able to:\n- use the words related to the topic “My New School”`
  },
  {
    week: 1,
    period: 2,
    unit: 'UNIT 1',
    lesson: 'A closer look 1',
    objectives: `By the end of this unit, students will be able to:\n- use the combinations: to play, to do, to have, to study + Noun;\n- pronounce the sounds /ɑ:/ and /ʌ/ correctly.`
  },
  {
    week: 1,
    period: 3,
    unit: 'UNIT 1',
    lesson: 'A closer look 2',
    objectives: `By the end of this unit, students will be able to:\n- use the present simple;\n- use the adverbs of frequency.`
  },
  // Week 2
  {
    week: 2,
    period: 4,
    unit: 'UNIT 1',
    lesson: 'Communication',
    objectives: `By the end of this unit, students will be able to:\n- introduce someone to someone else`
  },
  {
    week: 2,
    period: 5,
    unit: 'UNIT 1',
    lesson: 'Skills 1',
    objectives: `By the end of this unit, students will be able to:\n- read for general and specific information about schools;\n- talk about the type of school one would like to go to;`
  },
  {
    week: 2,
    period: 6,
    unit: 'UNIT 1',
    lesson: 'Skills 2',
    objectives: `By the end of this unit, students will be able to:\n- listen for specific information about school activities;\n- write a paragraph about one’s school.`
  },
  // Week 3
  {
    week: 3,
    period: 7,
    unit: 'UNIT 1',
    lesson: 'Looking back & Project',
    objectives: `By the end of this unit, students will be able to:\n- review vocabulary and grammar\n- design a dream school`
  },
  {
    week: 3,
    period: 8,
    unit: 'UNIT 2',
    lesson: 'Getting started',
    objectives: `By the end of this unit, students will be able to:\n- use the words for types of house, rooms, and furniture`
  },
  {
    week: 3,
    period: 9,
    unit: 'UNIT 2',
    lesson: 'A closer look 1',
    objectives: `By the end of this unit, students will be able to:\n- use the words for types of house, rooms, and furniture;\n- pronounce the final sounds /s/ and /z/ correctly.`
  },
  // Week 4
  {
    week: 4,
    period: 10,
    unit: 'UNIT 2',
    lesson: 'A closer look 2',
    objectives: `By the end of this unit, students will be able to:\n- use possessive case to describe possession;\n- use prepositions of place to describe where people or things are`
  },
  {
    week: 4,
    period: 11,
    unit: 'UNIT 2',
    lesson: 'Communication',
    objectives: `By the end of this unit, students will be able to:\n- give suggestions`
  },
  {
    week: 4,
    period: 12,
    unit: 'UNIT 2',
    lesson: 'Skills 1',
    objectives: `By the end of this unit, students will be able to:\n- read for specific information about rooms and furniture;\n- describe houses, rooms, and furniture.`
  },
  // Week 5
  {
    week: 5,
    period: 13,
    unit: 'UNIT 2',
    lesson: 'Skills 2',
    objectives: `By the end of this unit, students will be able to:\n- listen for specific information about someone’s house;\n- write an email to a friend describing a house.`
  },
  {
    week: 5,
    period: 14,
    unit: 'UNIT 2',
    lesson: 'Looking back & Project',
    objectives: `By the end of this unit, students will be able to:\n- review vocabulary and grammar\n- design your strange house`
  },
  {
    week: 5,
    period: 15,
    unit: 'UNIT 3',
    lesson: 'Getting started',
    objectives: `By the end of this unit, students will be able to:\n- use the words for body parts, appearance, and personality.`
  },
  // Week 6
  {
    week: 6,
    period: 16,
    unit: 'UNIT 3',
    lesson: 'A closer look 1',
    objectives: `By the end of this unit, students will be able to:\n- use the words for body parts, appearance, and personality;\n- pronounce the sounds /b/ and /p/ correctly.`
  },
  {
    week: 6,
    period: 17,
    unit: 'UNIT 3',
    lesson: 'A closer look 2',
    objectives: `By the end of this unit, students will be able to:\n- use the present continuous to talk about things happening now`
  },
  {
    week: 6,
    period: 18,
    unit: 'UNIT 3',
    lesson: 'Communication',
    objectives: `By the end of this unit, students will be able to:\n- ask about appearance and personality.`
  },
  // Week 7
  {
    week: 7,
    period: 19,
    unit: 'UNIT 3',
    lesson: 'Skills 1',
    objectives: `By the end of this unit, students will be able to:\n- read for specific information about friends and a summer camp;\n- talk about friends and summer camps.`
  },
  {
    week: 7,
    period: 20,
    unit: 'UNIT 3',
    lesson: 'Skills 2',
    objectives: `By the end of this unit, students will be able to:\n- listen for specific information about best friends;\n- write a diary entry about best friends.`
  },
  {
    week: 7,
    period: 21,
    unit: 'UNIT 3',
    lesson: 'Looking back & Project',
    objectives: `By the end of this unit, students will be able to:\n- review vocabulary and grammar\n- make a class yearbook.`
  },
  // Week 8
  {
    week: 8,
    period: 22,
    unit: 'REVIEW 1',
    lesson: 'Language',
    objectives: `By the end of this review, students will have revised the language they have learned and the skills they have practised in Units 1-3.`
  },
  {
    week: 8,
    period: 23,
    unit: 'REVIEW 1',
    lesson: 'Skills',
    objectives: `By the end of this review, students will have revised the language they have learned and the skills they have practised in Units 1-3.`
  },
  {
    week: 8,
    period: 24,
    unit: '',
    lesson: '45-minute test',
    objectives: `- To assess students’ English knowledge and their ability to apply the language skills learned during the first half of the first semester.`,
    isTest: true
  },
  // Week 9
  {
    week: 9,
    period: 25,
    unit: '',
    lesson: 'Feedback on 45-minute test',
    objectives: `- Correction of the test`
  },
  {
    week: 9,
    period: 26,
    unit: 'UNIT 4',
    lesson: 'Getting started',
    objectives: `By the end of this unit, students will be able to:\n- use the words for places in a neighbourhood.`
  },
  {
    week: 9,
    period: 27,
    unit: 'UNIT 4',
    lesson: 'A closer look 1',
    objectives: `By the end of this unit, students will be able to:\n- use the words for places in a neighbourhood;\n- pronounce the sounds /ɪ/ and /i:/ correctly.`
  },
  // Week 10
  {
    week: 10,
    period: 28,
    unit: 'UNIT 4',
    lesson: 'A closer look 2',
    objectives: `By the end of this unit, students will be able to:\n- compare two people or things using comparative adjectives`
  },
  {
    week: 10,
    period: 29,
    unit: 'UNIT 4',
    lesson: 'Communication',
    objectives: `By the end of this unit, students will be able to:\n- ask for and give directions to some places`
  },
  {
    week: 10,
    period: 30,
    unit: 'UNIT 4',
    lesson: 'Skills 1',
    objectives: `By the end of this unit, students will be able to:\n- read for specific information about a neighbourhood;\n- talk about a neighbourhood.`
  },
  // Week 11
  {
    week: 11,
    period: 31,
    unit: 'UNIT 4',
    lesson: 'Skills 2',
    objectives: `By the end of this unit, students will be able to:\n- listen for specific information about a neighbourhood;\n- write a paragraph to describe a neighbourhood.`
  },
  {
    week: 11,
    period: 32,
    unit: 'UNIT 4',
    lesson: 'Looking back & Project',
    objectives: `By the end of this unit, students will be able to:\n- review vocabulary and grammar\n- draw a map of a neighbourhood`
  },
  {
    week: 11,
    period: 33,
    unit: 'UNIT 5',
    lesson: 'Getting started',
    objectives: `By the end of this unit, students will be able to:\n- use the words related to things in nature and travel items.`
  },
  // Week 12
  {
    week: 12,
    period: 34,
    unit: 'UNIT 5',
    lesson: 'A closer look 1',
    objectives: `By the end of this unit, students will be able to:\n- use the words related to things in nature and travel items;\n- pronounce the sounds /t/ and /d/ correctly.`
  },
  {
    week: 12,
    period: 35,
    unit: 'UNIT 5',
    lesson: 'A closer look 2',
    objectives: `By the end of this unit, students will be able to:\n- use countable and uncountable nouns;\n- use the modal verb must / mustn’t to give orders.`
  },
  {
    week: 12,
    period: 36,
    unit: 'UNIT 5',
    lesson: 'Communication',
    objectives: `By the end of this unit, students will be able to:\n- make and accept appointments.`
  },
  // Week 13
  {
    week: 13,
    period: 37,
    unit: 'UNIT 5',
    lesson: 'Skills 1',
    objectives: `By the end of this unit, students will be able to:\n- read for specific information about natural wonders;\n- talk about famous places and what you must / mustn’t do there.`
  },
  {
    week: 13,
    period: 38,
    unit: 'UNIT 5',
    lesson: 'Skills 2',
    objectives: `By the end of this unit, students will be able to:\n- listen for specific information about a natural wonder;\n- Write a paragraph about a natural wonder.`
  },
  {
    week: 13,
    period: 39,
    unit: 'UNIT 5',
    lesson: 'Looking back & Project',
    objectives: `By the end of this unit, students will be able to:\n- review vocabulary and grammar\n- make a poster about a natural wonder.`
  },
  // Week 14
  {
    week: 14,
    period: 40,
    unit: 'UNIT 6',
    lesson: 'Getting started',
    objectives: `By the end of this unit, students will be able to:\n- use the words related to things and activities at Tet.`
  },
  {
    week: 14,
    period: 41,
    unit: 'UNIT 6',
    lesson: 'A closer look 1',
    objectives: `By the end of this unit, students will be able to:\n- use the words related to things and activities at Tet;\n- pronounce the sounds /s/ and /∫/ correctly.`
  },
  {
    week: 14,
    period: 42,
    unit: 'UNIT 6',
    lesson: 'A closer look 2',
    objectives: `By the end of this unit, students will be able to:\n- use should / shouldn’t for advice;\n- use some / any for amount.`
  },
  // Week 15
  {
    week: 15,
    period: 43,
    unit: 'UNIT 6',
    lesson: 'Communication',
    objectives: `By the end of this unit, students will be able to:\n- say New Year’s wishes`
  },
  {
    week: 15,
    period: 44,
    unit: 'UNIT 6',
    lesson: 'Skills 1',
    objectives: `By the end of this unit, students will be able to:\n- read for specific information about New Year’s practices;\n- talk about what children should / shouldn’t do at Tet.`
  },
  {
    week: 15,
    period: 45,
    unit: 'UNIT 6',
    lesson: 'Skills 2',
    objectives: `By the end of this unit, students will be able to:\n- listen for general and specific information about preparations for Tet;\n- Write an email about what children should / shouldn’t do at Tet.`
  },
  // Week 16
  {
    week: 16,
    period: 46,
    unit: 'UNIT 6',
    lesson: 'Looking back & Project',
    objectives: `By the end of this unit, students will be able to:\n- review vocabulary and grammar\n- design a wishing tree.`
  },
  {
    week: 16,
    period: 47,
    unit: 'REVIEW 2',
    lesson: 'Language',
    objectives: `By the end of this review, students will have revised the language they have learned and the skills they have practised in Units 4-6.`
  },
  {
    week: 16,
    period: 48,
    unit: 'REVIEW 2',
    lesson: 'Skills',
    objectives: `By the end of this review, students will have revised the language they have learned and the skills they have practised in Units 4-6.`
  },
  // Week 17
  {
    week: 17,
    period: 49,
    unit: '',
    lesson: '1st term exam',
    objectives: `- To assess students’ English knowledge and their ability to apply the language skills learned throughout the first semester.`,
    isTest: true
  },
  {
    week: 17,
    period: 50,
    unit: '',
    lesson: '1st term exam (Speaking)',
    objectives: `- To assess students’ English knowledge and their ability to apply the language skills learned throughout the first semester.`,
    isTest: true
  },
  {
    week: 17,
    period: 51,
    unit: '',
    lesson: 'In reserve',
    objectives: `- Optional`
  },
  // Week 18
  {
    week: 18,
    period: 52,
    unit: 'UNIT 7',
    lesson: 'Getting started',
    objectives: `By the end of this unit, students will be able to:\n- use the words related to TV programs and people`
  },
  {
    week: 18,
    period: 53,
    unit: 'UNIT 7',
    lesson: 'A closer look 1',
    objectives: `By the end of this unit, students will be able to:\n- use the words related to TV programs and people;\n- pronounce the sounds /θ/ and /ð/ correctly.`
  },
  {
    week: 18,
    period: 54,
    unit: 'UNIT 7',
    lesson: 'A closer look 2',
    objectives: `By the end of this unit, students will be able to:\n- use wh-question words to make questions;\n- use conjunctions to connect clauses in compound sentences.`
  },
  // Week 19
  {
    week: 19,
    period: 55,
    unit: 'UNIT 7',
    lesson: 'Communication',
    objectives: `By the end of this unit, students will be able to:\n- ask for and give information about TV programs.`
  },
  {
    week: 19,
    period: 56,
    unit: 'UNIT 7',
    lesson: 'Skills 1',
    objectives: `By the end of this unit, students will be able to:\n- read for general and specific information about a TV guide;\n- talk about a favourite TV program.`
  },
  {
    week: 19,
    period: 57,
    unit: 'UNIT 7',
    lesson: 'Skills 2',
    objectives: `By the end of this unit, students will be able to:\n- listen for specific information about different TV programs;\n- write a paragraph about TV-viewing habits.`
  },
  // Week 20
  {
    week: 20,
    period: 58,
    unit: 'UNIT 7',
    lesson: 'Looking back & Project',
    objectives: `By the end of this unit, students will be able to:\n- review vocabulary and grammar\n- interview their friends and then report the results.`
  },
  {
    week: 20,
    period: 59,
    unit: 'UNIT 8',
    lesson: 'Getting started',
    objectives: `By the end of this unit, students will be able to:\n- Use the words related to the topic Sports and Games`
  },
  {
    week: 20,
    period: 60,
    unit: 'UNIT 8',
    lesson: 'A closer look 1',
    objectives: `By the end of this unit, students will be able to:\n- use the words related to the topic Sports and Games;\n- pronounce the sounds /e/ and /æ/ correctly.`
  },
  // Week 21
  {
    week: 21,
    period: 61,
    unit: 'UNIT 8',
    lesson: 'A closer look 2',
    objectives: `By the end of this unit, students will be able to:\n- use the past simple;\n- use imperatives to tell someone to do something.`
  },
  {
    week: 21,
    period: 62,
    unit: 'UNIT 8',
    lesson: 'Communication',
    objectives: `By the end of this unit, students will be able to:\n- express and respond to congratulations.`
  },
  {
    week: 21,
    period: 63,
    unit: 'UNIT 8',
    lesson: 'Skills 1',
    objectives: `By the end of this unit, students will be able to:\n- read for general and specific information about a sports star;\n- talk about famous sportspeople.`
  },
  // Week 22
  {
    week: 22,
    period: 64,
    unit: 'UNIT 8',
    lesson: 'Skills 2',
    objectives: `By the end of this unit, students will be able to:\n- listen for general and specific information about sports and games;\n- write a paragraph about a sport/game.`
  },
  {
    week: 22,
    period: 65,
    unit: 'UNIT 8',
    lesson: 'Looking back & Project',
    objectives: `By the end of this unit, students will be able to:\n- review vocabulary and grammar\n- give a presentation about a game`
  },
  {
    week: 22,
    period: 66,
    unit: 'UNIT 9',
    lesson: 'Getting started',
    objectives: `By the end of this unit, students will be able to:\n- use the words related to cities and landmarks`
  },
  // Week 23
  {
    week: 23,
    period: 67,
    unit: 'UNIT 9',
    lesson: 'A closer look 1',
    objectives: `By the end of this unit, students will be able to:\n- use the words related to cities and landmarks;\n- pronounce the sounds /əʊ/ and /aʊ/ correctly.`
  },
  {
    week: 23,
    period: 68,
    unit: 'UNIT 9',
    lesson: 'A closer look 2',
    objectives: `By the end of this unit, students will be able to:\n- use possessive adjectives and possessive pronouns.`
  },
  {
    week: 23,
    period: 69,
    unit: 'UNIT 9',
    lesson: 'Communication',
    objectives: `By the end of this unit, students will be able to:\n- express exclamations with “What”`
  },
  // Week 24
  {
    week: 24,
    period: 70,
    unit: 'UNIT 9',
    lesson: 'Skills 1',
    objectives: `By the end of this unit, students will be able to:\n- read for general and specific information about a holiday postcard;\n- talk about a city.`
  },
  {
    week: 24,
    period: 71,
    unit: 'UNIT 9',
    lesson: 'Skills 2',
    objectives: `By the end of this unit, students will be able to:\n- listen for specific information about a description of a city;\n- Write a holiday postcard.`
  },
  {
    week: 24,
    period: 72,
    unit: 'UNIT 9',
    lesson: 'Looking back & Project',
    objectives: `By the end of this unit, students will be able to:\n- review vocabulary and grammar\n- make a report of their findings`
  },
  // Week 25
  {
    week: 25,
    period: 73,
    unit: 'REVIEW 3',
    lesson: 'Language',
    objectives: `By the end of this review, students will have revised the language they have learned and the skills they have practised in Units 7-9.`
  },
  {
    week: 25,
    period: 74,
    unit: 'REVIEW 3',
    lesson: 'Skills',
    objectives: `By the end of this review, students will have revised the language they have learned and the skills they have practised in Units 7-9.`
  },
  {
    week: 25,
    period: 75,
    unit: '',
    lesson: '45-minute test',
    objectives: `- To assess students’ English knowledge and their ability to apply the language skills learned during the first half of the second semester.`,
    isTest: true
  },
  // Week 26
  {
    week: 26,
    period: 76,
    unit: '',
    lesson: 'Feedback on 45-minute test',
    objectives: `- Correction of the test`
  },
  {
    week: 26,
    period: 77,
    unit: 'UNIT 10',
    lesson: 'Getting started',
    objectives: `By the end of this unit, students will be able to:\n- use the words related to types of houses and appliances in the house`
  },
  {
    week: 26,
    period: 78,
    unit: 'UNIT 10',
    lesson: 'A closer look 1',
    objectives: `By the end of this unit, students will be able to:\n- use the words related to types of houses and appliances in the house;\n- pronounce the two-syllable words correctly.`
  },
  // Week 27
  {
    week: 27,
    period: 79,
    unit: 'UNIT 10',
    lesson: 'A closer look 2',
    objectives: `By the end of this unit, students will be able to:\n- use future simple and might for future possibility`
  },
  {
    week: 27,
    period: 80,
    unit: 'UNIT 10',
    lesson: 'Communication',
    objectives: `By the end of this unit, students will be able to:\n- express surprise`
  },
  {
    week: 27,
    period: 81,
    unit: 'UNIT 10',
    lesson: 'Skills 1',
    objectives: `By the end of this unit, students will be able to:\n- read for specific information about houses and appliances in the future;\n- talk about different houses in the future.`
  },
  // Week 28
  {
    week: 28,
    period: 82,
    unit: 'UNIT 10',
    lesson: 'Skills 2',
    objectives: `By the end of this unit, students will be able to:\n- listen for specific information about dream houses;\n- write a paragraph about a dream house.`
  },
  {
    week: 28,
    period: 83,
    unit: 'UNIT 10',
    lesson: 'Looking back & Project',
    objectives: `By the end of this unit, students will be able to:\n- review vocabulary and grammar\n- make a poster for their future appliance and then share their poster with their class.`
  },
  {
    week: 28,
    period: 84,
    unit: 'UNIT 11',
    lesson: 'Getting started',
    objectives: `By the end of this unit, students will be able to:\n- use the words for things that can be reduced, reused, and recycled.`
  },
  // Week 29
  {
    week: 29,
    period: 85,
    unit: 'UNIT 11',
    lesson: 'A closer look 1',
    objectives: `By the end of this unit, students will be able to:\n- use the words for things that can be reduced, reused, and recycled;\n- say sentences with correct rhythm.`
  },
  {
    week: 29,
    period: 86,
    unit: 'UNIT 11',
    lesson: 'A closer look 2',
    objectives: `By the end of this unit, students will be able to:\n- use the articles correctly;\n- use the first conditional to talk about possibilities.`
  },
  {
    week: 29,
    period: 87,
    unit: 'UNIT 11',
    lesson: 'Communication',
    objectives: `By the end of this unit, students will be able to:\n- give warnings`
  },
  // Week 30
  {
    week: 30,
    period: 88,
    unit: 'UNIT 11',
    lesson: 'Skills 1',
    objectives: `By the end of this unit, students will be able to:\n- read for general and specific information about ways to go green at school;\n- talk about tips for going green.`
  },
  {
    week: 30,
    period: 89,
    unit: 'UNIT 11',
    lesson: 'Skills 2',
    objectives: `By the end of this unit, students will be able to:\n- listen for details about ideas for a green club;\n- write a paragraph about ideas for a green club.`
  },
  {
    week: 30,
    period: 90,
    unit: 'UNIT 11',
    lesson: 'Looking back & Project',
    objectives: `By the end of this unit, students will be able to:\n- review vocabulary and grammar\n- complete a project and then do a “ show and tell” about it`
  },
  // Week 31
  {
    week: 31,
    period: 91,
    unit: 'UNIT 12',
    lesson: 'Getting started',
    objectives: `By the end of this unit, students will be able to:\n- use the words for daily activities`
  },
  {
    week: 31,
    period: 92,
    unit: 'UNIT 12',
    lesson: 'A closer look 1',
    objectives: `By the end of this unit, students will be able to:\n- use the words for daily activities;\n- say statements with correct tones.`
  },
  {
    week: 31,
    period: 93,
    unit: 'UNIT 12',
    lesson: 'A closer look 2',
    objectives: `By the end of this unit, students will be able to:\n- compare people and things using superlative adjectives.`
  },
  // Week 32
  {
    week: 32,
    period: 94,
    unit: 'UNIT 12',
    lesson: 'Communication',
    objectives: `By the end of this unit, students will be able to:\n- express agreement and disagreement about something.`
  },
  {
    week: 32,
    period: 95,
    unit: 'UNIT 12',
    lesson: 'Skills 1',
    objectives: `By the end of this unit, students will be able to:\n- read for specific information about an international robot show;\n- talk about what robots can do.`
  },
  {
    week: 32,
    period: 96,
    unit: 'UNIT 12',
    lesson: 'Skills 2',
    objectives: `By the end of this unit, students will be able to:\n- listen for specific information about what robots can do;\n- write a paragraph about a robot one would like to have.`
  },
  // Week 33
  {
    week: 33,
    period: 97,
    unit: 'UNIT 12',
    lesson: 'Looking back & Project',
    objectives: `By the end of this unit, students will be able to:\n- review vocabulary and grammar\n- draw their robot`
  },
  {
    week: 33,
    period: 98,
    unit: 'REVIEW 4',
    lesson: 'Language',
    objectives: `By the end of this review, Ss will have revised the language they have learned and the skills they have practised in Units 10-12.`
  },
  // Week 34
  {
    week: 34,
    period: 99,
    unit: 'REVIEW 4',
    lesson: 'Skills',
    objectives: `By the end of this review, Ss will have revised the language they have learned and the skills they have practised in Units 10-12.`
  },
  {
    week: 34,
    period: 100,
    unit: '',
    lesson: '2nd term exam',
    objectives: `- To assess students’ English knowledge and their ability to apply the language skills learned throughout the second semester.`,
    isTest: true
  },
  {
    week: 34,
    period: 101,
    unit: '',
    lesson: '2nd term exam (Speaking)',
    objectives: `- To assess students’ English knowledge and their ability to apply the language skills learned throughout the second semester.`,
    isTest: true
  },
  {
    week: 34,
    period: 102,
    unit: '',
    lesson: 'In reserve',
    objectives: `- Optional`
  },
  // Week 35
  {
    week: 35,
    period: 103,
    unit: '',
    lesson: 'In reserve',
    objectives: `- Optional`
  },
  {
    week: 35,
    period: 104,
    unit: '',
    lesson: 'In reserve',
    objectives: `- Optional`
  },
  {
    week: 35,
    period: 105,
    unit: '',
    lesson: 'In reserve',
    objectives: `- Optional`
  }
];

// =========================================================================
// 2. KẾ HOẠCH DẠY HỌC MÔN TIẾNG ANH - LỚP 7 (GLOBAL SUCCESS - 105 TIẾT)
// =========================================================================
export const SECONDARY_ENGLISH_GRADE_7_LESSONS: SecondaryEnglishLessonDef[] = [
  // Week 1
  {
    week: 1,
    period: 1,
    unit: 'UNIT 1',
    lesson: 'Getting started',
    objectives: `By the end of this unit, students will be able to:\n- use the words related to hobbies and verbs of liking and disliking to talk about different hobbies.`
  },
  {
    week: 1,
    period: 2,
    unit: 'UNIT 1',
    lesson: 'A closer look 1',
    objectives: `By the end of this unit, students will be able to:\n- use the words related to hobbies and verbs of liking and disliking to talk about different hobbies;\n- pronounce the sounds /ə/ and /ɜ: / correctly.`
  },
  {
    week: 1,
    period: 3,
    unit: 'UNIT 1',
    lesson: 'A closer look 2',
    objectives: `By the end of this unit, students will be able to:\n- use the present simple tense.`
  },
  // Week 2
  {
    week: 2,
    period: 4,
    unit: 'UNIT 1',
    lesson: 'Communication',
    objectives: `By the end of this unit, students will be able to:\n- talk about likes and dislikes.`
  },
  {
    week: 2,
    period: 5,
    unit: 'UNIT 1',
    lesson: 'Skills 1',
    objectives: `By the end of this unit, students will be able to:\n- read for specific information about a hobby;\n- talk about the benefits of hobbies.`
  },
  {
    week: 2,
    period: 6,
    unit: 'UNIT 1',
    lesson: 'Skills 2',
    objectives: `By the end of this unit, students will be able to:\n- listen for specific information about one’s hobby;\n- write a paragraph about one’s hobby.`
  },
  // Week 3
  {
    week: 3,
    period: 7,
    unit: 'UNIT 1',
    lesson: 'Looking back & Project',
    objectives: `By the end of this unit, students will be able to:\n- review vocabulary and grammar;\n- present the hobby to the class.`
  },
  {
    week: 3,
    period: 8,
    unit: 'UNIT 2',
    lesson: 'Getting started',
    objectives: `By the end of this unit, students will be able to:\n- use the words about healthy activities and health problems.`
  },
  {
    week: 3,
    period: 9,
    unit: 'UNIT 2',
    lesson: 'A closer look 1',
    objectives: `By the end of this unit, students will be able to:\n- use the words about healthy activities and health problems;\n- pronounce the sounds /f/ and /v/ correctly.`
  },
  // Week 4
  {
    week: 4,
    period: 10,
    unit: 'UNIT 2',
    lesson: 'A closer look 2',
    objectives: `By the end of this unit, students will be able to:\n- recognise and write simple sentences.`
  },
  {
    week: 4,
    period: 11,
    unit: 'UNIT 2',
    lesson: 'Communication',
    objectives: `By the end of this unit, students will be able to:\n- ask for and give health tips.`
  },
  {
    week: 4,
    period: 12,
    unit: 'UNIT 2',
    lesson: 'Skills 1',
    objectives: `By the end of this unit, students will be able to:\n- read for general and specific information about acne;\n- talk about how to deal with some health problems.`
  },
  // Week 5
  {
    week: 5,
    period: 13,
    unit: 'UNIT 2',
    lesson: 'Skills 2',
    objectives: `By the end of this unit, students will be able to:\n- listen for specific information about healthy habits;\n- write a paragraph of some advice to avoid viruses.`
  },
  {
    week: 5,
    period: 14,
    unit: 'UNIT 2',
    lesson: 'Looking back & Project',
    objectives: `By the end of this unit, students will be able to:\n- review vocabulary and grammar;\n- make a poster about a bad habit and give some tips to change that habit and then present it to the class.`
  },
  {
    week: 5,
    period: 15,
    unit: 'UNIT 3',
    lesson: 'Getting started',
    objectives: `By the end of this unit, students will be able to:\n- use the words related to community activities.`
  },
  // Week 6
  {
    week: 6,
    period: 16,
    unit: 'UNIT 3',
    lesson: 'A closer look 1',
    objectives: `By the end of this unit, students will be able to:\n- use the words related to community activities;\n- pronounce the sounds /t/, /d/ and /ɪd/ correctly.`
  },
  {
    week: 6,
    period: 17,
    unit: 'UNIT 3',
    lesson: 'A closer look 2',
    objectives: `By the end of this unit, students will be able to:\n- use the past simple to talk about past activities.`
  },
  {
    week: 6,
    period: 18,
    unit: 'UNIT 3',
    lesson: 'Communication',
    objectives: `By the end of this unit, students will be able to:\n- give compliments.`
  },
  // Week 7
  {
    week: 7,
    period: 19,
    unit: 'UNIT 3',
    lesson: 'Skills 1',
    objectives: `By the end of this unit, students will be able to:\n- read for specific information about community activities at a school;\n- talk about the reasons why students join different community activities.`
  },
  {
    week: 20,
    period: 20,
    unit: 'UNIT 3',
    lesson: 'Skills 2',
    objectives: `By the end of this unit, students will be able to:\n- listen for specific information about some community activities and their benefits;\n- write an email about the community activities you did last summer.`
  },
  {
    week: 7,
    period: 21,
    unit: 'UNIT 3',
    lesson: 'Looking back & Project',
    objectives: `By the end of this unit, students will be able to:\n- review vocabulary and grammar;\n- present some environmental problems in their neighbourhood.`
  },
  // Week 8
  {
    week: 8,
    period: 22,
    unit: 'REVIEW 1',
    lesson: 'Language',
    objectives: `By the end of this review, students will have revised the language they have learnt and the skills they have practised in Units 1-3.`
  },
  {
    week: 8,
    period: 23,
    unit: 'REVIEW 1',
    lesson: 'Skills',
    objectives: `By the end of this review, students will have revised the language they have learnt and the skills they have practised in Units 1-3.`
  },
  {
    week: 8,
    period: 24,
    unit: '',
    lesson: '45-minute test',
    objectives: `- To assess students’ English knowledge and their ability to apply the language skills learned during the first half of the first semester.`,
    isTest: true
  },
  // Week 9
  {
    week: 9,
    period: 25,
    unit: '',
    lesson: 'Feedback on 45-minute test',
    objectives: `- Correction of the test`
  },
  {
    week: 9,
    period: 26,
    unit: 'UNIT 4',
    lesson: 'Getting started',
    objectives: `By the end of this unit, students will be able to:\n- Use the words related to the topic Music and Arts.`
  },
  {
    week: 9,
    period: 27,
    unit: 'UNIT 4',
    lesson: 'A closer look 1',
    objectives: `By the end of this unit, students will be able to:\n- use the words related to the topic Music and Arts;\n- pronounce the sounds /ʃ/ and /ʒ/ correctly.`
  },
  // Week 10
  {
    week: 10,
    period: 28,
    unit: 'UNIT 4',
    lesson: 'A closer look 2',
    objectives: `By the end of this unit, students will be able to:\n- use like, different from, (not) as ... as to compare people and things.`
  },
  {
    week: 10,
    period: 29,
    unit: 'UNIT 4',
    lesson: 'Communication',
    objectives: `By the end of this unit, students will be able to:\n- express preferences.`
  },
  {
    week: 10,
    period: 30,
    unit: 'UNIT 4',
    lesson: 'Skills 1',
    objectives: `By the end of this unit, students will be able to:\n- read for specific information about a traditional art form;\n- talk about a musical performance at their school.`
  },
  // Week 11
  {
    week: 11,
    period: 31,
    unit: 'UNIT 4',
    lesson: 'Skills 2',
    objectives: `By the end of this unit, students will be able to:\n- listen for specific information about street painting;\n- write an informal letter of invitation.`
  },
  {
    week: 11,
    period: 32,
    unit: 'UNIT 4',
    lesson: 'Looking back & Project',
    objectives: `By the end of this unit, students will be able to:\n- review vocabulary and grammar;\n- talk about the event and then organise a music show.`
  },
  {
    week: 11,
    period: 33,
    unit: 'UNIT 5',
    lesson: 'Getting started',
    objectives: `By the end of this unit, students will be able to:\n- use the words related to the topic Food and Drink.`
  },
  // Week 12
  {
    week: 12,
    period: 34,
    unit: 'UNIT 5',
    lesson: 'A closer look 1',
    objectives: `By the end of this unit, students will be able to:\n- use the words related to the topic Food and Drink;\n- pronounce the sounds /ɒ/ and /ɔ:/ correctly.`
  },
  {
    week: 12,
    period: 35,
    unit: 'UNIT 5',
    lesson: 'A closer look 2',
    objectives: `By the end of this unit, students will be able to:\n- use some, a lot of, and lots of to talk about quantity.`
  },
  {
    week: 12,
    period: 36,
    unit: 'UNIT 5',
    lesson: 'Communication',
    objectives: `By the end of this unit, students will be able to:\n- ask and answer about prices.`
  },
  // Week 13
  {
    week: 13,
    period: 37,
    unit: 'UNIT 5',
    lesson: 'Skills 1',
    objectives: `By the end of this unit, students will be able to:\n- read for general and specific information about a typical traditional food;\n- talk about a popular food or drink.`
  },
  {
    week: 13,
    period: 38,
    unit: 'UNIT 5',
    lesson: 'Skills 2',
    objectives: `By the end of this unit, students will be able to:\n- listen for specific information about eating habits;\n- write a paragraph describing eating habits.`
  },
  {
    week: 13,
    period: 39,
    unit: 'UNIT 5',
    lesson: 'Looking back & Project',
    objectives: `By the end of this unit, students will be able to:\n- review vocabulary and grammar;\n- design a poster about eating habits and organise an exhibition of all the posters in the class.`
  },
  // Week 14
  {
    week: 14,
    period: 40,
    unit: 'UNIT 6',
    lesson: 'Getting started',
    objectives: `By the end of this unit, students will be able to:\n- use the words related to the topic A Visit to a School.`
  },
  {
    week: 14,
    period: 41,
    unit: 'UNIT 6',
    lesson: 'A closer look 1',
    objectives: `By the end of this unit, students will be able to:\n- use the words related to the topic A Visit to a School;\n- pronounce the sounds /tʃ/ and /dʒ/ correctly.`
  },
  {
    week: 14,
    period: 42,
    unit: 'UNIT 6',
    lesson: 'A closer look 2',
    objectives: `By the end of this unit, students will be able to:\n- use the prepositions of time and place.`
  },
  // Week 15
  {
    week: 15,
    period: 43,
    unit: 'UNIT 6',
    lesson: 'Communication',
    objectives: `By the end of this unit, students will be able to:\n- ask for details.`
  },
  {
    week: 15,
    period: 44,
    unit: 'UNIT 6',
    lesson: 'Skills 1',
    objectives: `By the end of this unit, students will be able to:\n- read for specific information about a famous school;\n- talk about one’s school.`
  },
  {
    week: 15,
    period: 45,
    unit: 'UNIT 6',
    lesson: 'Skills 2',
    objectives: `By the end of this unit, students will be able to:\n- listen for general and specific information about school activities;\n- write a paragraph about an outdoor activity at one’s school.`
  },
  // Week 16
  {
    week: 16,
    period: 46,
    unit: 'UNIT 6',
    lesson: 'Looking back & Project',
    objectives: `By the end of this unit, students will be able to:\n- review vocabulary and grammar;\n- tell the class about their favourite school.`
  },
  {
    week: 16,
    period: 47,
    unit: 'REVIEW 2',
    lesson: 'Language',
    objectives: `By the end of this review, students will have revised the language they have learnt and the skills they have practised in Units 4-6.`
  },
  {
    week: 16,
    period: 48,
    unit: 'REVIEW 2',
    lesson: 'Skills',
    objectives: `By the end of this review, students will have revised the language they have learnt and the skills they have practised in Units 4-6.`
  },
  // Week 17
  {
    week: 17,
    period: 49,
    unit: '',
    lesson: '1st term exam',
    objectives: `- To assess students’ English knowledge and their ability to apply the language skills learned throughout the first semester.`,
    isTest: true
  },
  {
    week: 17,
    period: 50,
    unit: '',
    lesson: '1st term exam (Speaking)',
    objectives: `- To assess students’ English knowledge and their ability to apply the language skills learned throughout the first semester.`,
    isTest: true
  },
  {
    week: 17,
    period: 51,
    unit: '',
    lesson: 'In reserve',
    objectives: `- Optional`
  },
  // Week 18
  {
    week: 18,
    period: 52,
    unit: 'UNIT 7',
    lesson: 'Getting started',
    objectives: `By the end of this unit, students will be able to:\n- use the words related to the topic Traffic.`
  },
  {
    week: 18,
    period: 53,
    unit: 'UNIT 7',
    lesson: 'A closer look 1',
    objectives: `By the end of this unit, students will be able to:\n- use the words related to the topic Traffic;\n- pronounce the sounds /aɪ/ and /eɪ/ correctly.`
  },
  {
    week: 18,
    period: 54,
    unit: 'UNIT 7',
    lesson: 'A closer look 2',
    objectives: `By the end of this unit, students will be able to:\n- use it to indicate distance;\n- use should / shouldn’t.`
  },
  // Week 19
  {
    week: 19,
    period: 55,
    unit: 'UNIT 7',
    lesson: 'Communication',
    objectives: `By the end of this unit, students will be able to:\n- ask and answer questions about means of transport.`
  },
  {
    week: 19,
    period: 56,
    unit: 'UNIT 7',
    lesson: 'Skills 1',
    objectives: `By the end of this unit, students will be able to:\n- read for general and specific information about traffic rules;\n- talk about obeying traffic rules.`
  },
  {
    week: 19,
    period: 57,
    unit: 'UNIT 7',
    lesson: 'Skills 2',
    objectives: `By the end of this unit, students will be able to:\n- listen for general and specific information about traffic problems in a city;\n- write a paragraph about traffic problems.`
  },
  // Week 20
  {
    week: 20,
    period: 58,
    unit: 'UNIT 7',
    lesson: 'Looking back & Project',
    objectives: `By the end of this unit, students will be able to:\n- review vocabulary and grammar;\n- make traffic signs and then show them to the class.`
  },
  {
    week: 20,
    period: 59,
    unit: 'UNIT 8',
    lesson: 'Getting started',
    objectives: `By the end of this unit, students will be able to:\n- use the words related to the topic Films.`
  },
  {
    week: 20,
    period: 60,
    unit: 'UNIT 8',
    lesson: 'A closer look 1',
    objectives: `By the end of this unit, students will be able to:\n- use the words related to the topic Films;\n- pronounce the sounds /ɪə/ and /eə/ correctly.`
  },
  // Week 21
  {
    week: 21,
    period: 61,
    unit: 'UNIT 8',
    lesson: 'A closer look 2',
    objectives: `By the end of this unit, students will be able to:\n- use " although / though to express contrasting ideas between two pieces of information in the same sentence;\n- use however to contrast ideas in two sentences.`
  },
  {
    week: 21,
    period: 62,
    unit: 'UNIT 8',
    lesson: 'Communication',
    objectives: `By the end of this unit, students will be able to:\n- accept and decline suggestions.`
  },
  {
    week: 21,
    period: 63,
    unit: 'UNIT 8',
    lesson: 'Skills 1',
    objectives: `By the end of this unit, students will be able to:\n- read for specific information about a film review;\n- talk about a film.`
  },
  // Week 22
  {
    week: 22,
    period: 64,
    unit: 'UNIT 8',
    lesson: 'Skills 2',
    objectives: `By the end of this unit, students will be able to:\n- listen for specific information about a film;\n- write a paragraph about one’s favourite film.`
  },
  {
    week: 22,
    period: 65,
    unit: 'UNIT 8',
    lesson: 'Looking back & Project',
    objectives: `By the end of this unit, students will be able to:\n- review vocabulary and grammar;\n- design a poster about their favourite film and then organise it into an exhibition.`
  },
  {
    week: 22,
    period: 66,
    unit: 'UNIT 9',
    lesson: 'Getting started',
    objectives: `By the end of this unit, students will be able to:\n- use the words related to types of festivals and festival activities.`
  },
  // Week 23
  {
    week: 23,
    period: 67,
    unit: 'UNIT 9',
    lesson: 'A closer look 1',
    objectives: `By the end of this unit, students will be able to:\n- use the words related to types of festivals and festival activities;\n- pronounce two-syllable words with correct stress.`
  },
  {
    week: 23,
    period: 68,
    unit: 'UNIT 9',
    lesson: 'A closer look 2',
    objectives: `By the end of this unit, students will be able to:\n- use Yes / No questions.`
  },
  {
    week: 23,
    period: 69,
    unit: 'UNIT 9',
    lesson: 'Communication',
    objectives: `By the end of this unit, students will be able to:\n- express disappointment.`
  },
  // Week 24
  {
    week: 24,
    period: 70,
    unit: 'UNIT 9',
    lesson: 'Skills 1',
    objectives: `By the end of this unit, students will be able to:\n- read for specific information about an unusual festival;\n- talk about a festival that someone joined.`
  },
  {
    week: 24,
    period: 71,
    unit: 'UNIT 9',
    lesson: 'Skills 2',
    objectives: `By the end of this unit, students will be able to:\n- listen for specific information about a festival;\n- write an email to describe a festival.`
  },
  {
    week: 24,
    period: 72,
    unit: 'UNIT 9',
    lesson: 'Looking back & Project',
    objectives: `By the end of this unit, students will be able to:\n- review vocabulary and grammar;\n- present their festival to the class.`
  },
  // Week 25
  {
    week: 25,
    period: 73,
    unit: 'REVIEW 3',
    lesson: 'Language',
    objectives: `By the end of this review, students will have revised the language they have learnt and the skills they have practised in Units 7-9.`
  },
  {
    week: 25,
    period: 74,
    unit: 'REVIEW 3',
    lesson: 'Skills',
    objectives: `By the end of this review, students will have revised the language they have learnt and the skills they have practised in Units 7-9.`
  },
  {
    week: 25,
    period: 75,
    unit: '',
    lesson: '45-minute test',
    objectives: `- To assess students’ English knowledge and their ability to apply the language skills learned during the first half of the second semester.`,
    isTest: true
  },
  // Week 26
  {
    week: 26,
    period: 76,
    unit: '',
    lesson: 'Feedback on 45-minute test',
    objectives: `- Correction of the test`
  },
  {
    week: 26,
    period: 77,
    unit: 'UNIT 10',
    lesson: 'Getting started',
    objectives: `By the end of this unit, students will be able to:\n- use the words related to types of energy sources.`
  },
  {
    week: 26,
    period: 78,
    unit: 'UNIT 10',
    lesson: 'A closer look 1',
    objectives: `By the end of this unit, students will be able to:\n- use the words related to types of energy sources;\n- pronounce three-syllable words with correct stress.`
  },
  // Week 27
  {
    week: 27,
    period: 79,
    unit: 'UNIT 10',
    lesson: 'A closer look 2',
    objectives: `By the end of this unit, students will be able to:\n- use the present continuous.`
  },
  {
    week: 27,
    period: 80,
    unit: 'UNIT 10',
    lesson: 'Communication',
    objectives: `By the end of this unit, students will be able to:\n- ask for explanations.`
  },
  {
    week: 27,
    period: 81,
    unit: 'UNIT 10',
    lesson: 'Skills 1',
    objectives: `By the end of this unit, students will be able to:\n- read for specific information about types of energy sources;\n- talk about the advantages and disadvantages of different energy sources.`
  },
  // Week 28
  {
    week: 28,
    period: 82,
    unit: 'UNIT 10',
    lesson: 'Skills 2',
    objectives: `By the end of this unit, students will be able to:\n- listen for specific information about how to save energy at home;\n- write a paragraph about how to save energy at home.`
  },
  {
    week: 28,
    period: 83,
    unit: 'UNIT 10',
    lesson: 'Looking back & Project',
    objectives: `By the end of this unit, students will be able to:\n- review vocabulary and grammar;\n- make a poster about saving energy at school, then present it to class.`
  },
  {
    week: 28,
    period: 84,
    unit: 'UNIT 11',
    lesson: 'Getting started',
    objectives: `By the end of this unit, students will be able to:\n- use the words related to future means of transport.`
  },
  // Week 29
  {
    week: 29,
    period: 85,
    unit: 'UNIT 11',
    lesson: 'A closer look 1',
    objectives: `By the end of this unit, students will be able to:\n- use the words related to future means of transport;\n- say sentences with correct stress.`
  },
  {
    week: 29,
    period: 86,
    unit: 'UNIT 11',
    lesson: 'A closer look 2',
    objectives: `By the end of this unit, students will be able to:\n- use the future simple to talk about future activities and make predictions;\n- use possessive pronouns correctly.`
  },
  {
    week: 29,
    period: 87,
    unit: 'UNIT 11',
    lesson: 'Communication',
    objectives: `By the end of this unit, students will be able to:\n- make predictions.`
  },
  // Week 30
  {
    week: 30,
    period: 88,
    unit: 'UNIT 11',
    lesson: 'Skills 1',
    objectives: `By the end of this unit, students will be able to:\n- read for general and specific information about cars;\n- talk about why a means of transport will / won’t be popular.`
  },
  {
    week: 30,
    period: 89,
    unit: 'UNIT 11',
    lesson: 'Skills 2',
    objectives: `By the end of this unit, students will be able to:\n- listen for general and specific information about some future means of transport;\n- write a paragraph about the advantages of a future means of transport.`
  },
  {
    week: 30,
    period: 90,
    unit: 'UNIT 11',
    lesson: 'Looking back & Project',
    objectives: `By the end of this unit, students will be able to:\n- review vocabulary and grammar;\n- draw their means of transport and then present it to the class.`
  },
  // Week 31
  {
    week: 31,
    period: 91,
    unit: 'UNIT 12',
    lesson: 'Getting started',
    objectives: `By the end of this unit, students will be able to:\n- use words about the people and places in English-speaking countries.`
  },
  {
    week: 31,
    period: 92,
    unit: 'UNIT 12',
    lesson: 'A closer look 1',
    objectives: `By the end of this unit, students will be able to:\n- use words about the people and places in English-speaking countries;\n- ask questions with the correct rising and falling intonation.`
  },
  {
    week: 31,
    period: 93,
    unit: 'UNIT 12',
    lesson: 'A closer look 2',
    objectives: `By the end of this unit, students will be able to:\n- use articles correctly.`
  },
  // Week 32
  {
    week: 32,
    period: 94,
    unit: 'UNIT 12',
    lesson: 'Communication',
    objectives: `By the end of this unit, students will be able to:\n- express amazement.`
  },
  {
    week: 32,
    period: 95,
    unit: 'UNIT 12',
    lesson: 'Skills 1',
    objectives: `By the end of this unit, students will be able to:\n- read for specific information about New Zealand;\n- talk about Scotland.`
  },
  {
    week: 32,
    period: 96,
    unit: 'UNIT 12',
    lesson: 'Skills 2',
    objectives: `By the end of this unit, students will be able to:\n- listen for specific information about a tour of a city;\n- write a diary entry about a tour of a city.`
  },
  // Week 33
  {
    week: 33,
    period: 97,
    unit: 'UNIT 12',
    lesson: 'Looking back & Project',
    objectives: `By the end of this unit, students will be able to:\n- review vocabulary and grammar;\n- design a poster to introduce English-speaking countries and then present it to the class.`
  },
  {
    week: 33,
    period: 98,
    unit: 'REVIEW 4',
    lesson: 'Language',
    objectives: `By the end of this review, Ss will have revised the language they have learnt and the skills they have practised in Units 10-12.`
  },
  // Week 34
  {
    week: 34,
    period: 99,
    unit: 'REVIEW 4',
    lesson: 'Skills',
    objectives: `By the end of this review, Ss will have revised the language they have learnt and the skills they have practised in Units 10-12.`
  },
  {
    week: 34,
    period: 100,
    unit: '',
    lesson: '2nd term exam',
    objectives: `- To assess students’ English knowledge and their ability to apply the language skills learned throughout the second semester.`,
    isTest: true
  },
  {
    week: 34,
    period: 101,
    unit: '',
    lesson: '2nd term exam (Speaking)',
    objectives: `- To assess students’ English knowledge and their ability to apply the language skills learned throughout the second semester.`,
    isTest: true
  },
  {
    week: 34,
    period: 102,
    unit: '',
    lesson: 'In reserve',
    objectives: `- Optional`
  },
  // Week 35
  {
    week: 35,
    period: 103,
    unit: '',
    lesson: 'In reserve',
    objectives: `- Optional`
  },
  {
    week: 35,
    period: 104,
    unit: '',
    lesson: 'In reserve',
    objectives: `- Optional`
  },
  {
    week: 35,
    period: 105,
    unit: '',
    lesson: 'In reserve',
    objectives: `- Optional`
  }
];

// =========================================================================
// 3. KẾ HOẠCH DẠY HỌC MÔN TIẾNG ANH - LỚP 8 (GLOBAL SUCCESS - 105 TIẾT)
// =========================================================================
export const SECONDARY_ENGLISH_GRADE_8_LESSONS: SecondaryEnglishLessonDef[] = [
  // Week 1
  {
    week: 1,
    period: 1,
    unit: 'UNIT 1',
    lesson: 'Getting started',
    objectives: `By the end of this unit, students will be able to:\n- use the words related to leisure activities and expressions about likes and dislikes.`
  },
  {
    week: 1,
    period: 2,
    unit: 'UNIT 1',
    lesson: 'A closer look 1',
    objectives: `By the end of this unit, students will be able to:\n- use the words related to leisure activities and expressions about likes and dislikes;\n- pronounce the sounds /Ʊ/ and /u:/ correctly in words and sentences.`
  },
  {
    week: 1,
    period: 3,
    unit: 'UNIT 1',
    lesson: 'A closer look 2',
    objectives: `By the end of this unit, students will be able to:\n- use verbs of liking/disliking followed by gerunds and/or to-infinitives to talk about likes and dislikes.`
  },
  // Week 2
  {
    week: 2,
    period: 4,
    unit: 'UNIT 1',
    lesson: 'Communication',
    objectives: `By the end of this unit, students will be able to:\n- invite and accept invitations.`
  },
  {
    week: 2,
    period: 5,
    unit: 'UNIT 1',
    lesson: 'Skills 1',
    objectives: `By the end of this unit, students will be able to:\n- read for general and specific information about leisure activities with family;\n- talk about leisure activities with family.`
  },
  {
    week: 2,
    period: 6,
    unit: 'UNIT 1',
    lesson: 'Skills 2',
    objectives: `By the end of this unit, students will be able to:\n- listen for specific information about leisure activities with friends;\n- write an email about leisure activities with friends.`
  },
  // Week 3
  {
    week: 3,
    period: 7,
    unit: 'UNIT 1',
    lesson: 'Looking back & Project',
    objectives: `By the end of this unit, students will be able to:\n- review vocabulary and grammar;\n- interview their friends about leisure time and then report.`
  },
  {
    week: 3,
    period: 8,
    unit: 'UNIT 2',
    lesson: 'Getting started',
    objectives: `By the end of this unit, students will be able to:\n- use the words related to life in the countryside.`
  },
  {
    week: 3,
    period: 9,
    unit: 'UNIT 2',
    lesson: 'A closer look 1',
    objectives: `By the end of this unit, students will be able to:\n- use the words related to life in the countryside;\n- pronounce the sounds /ə/ and /ɪ/ correctly in words and sentences.`
  },
  // Week 4
  {
    week: 4,
    period: 10,
    unit: 'UNIT 2',
    lesson: 'A closer look 2',
    objectives: `By the end of this unit, students will be able to:\n- use comparative forms of adverbs.`
  },
  {
    week: 4,
    period: 11,
    unit: 'UNIT 2',
    lesson: 'Communication',
    objectives: `By the end of this unit, students will be able to:\n- give and respond to compliments.`
  },
  {
    week: 4,
    period: 12,
    unit: 'UNIT 2',
    lesson: 'Skills 1',
    objectives: `By the end of this unit, students will be able to:\n- read for specific information about different aspects of a Vietnamese village;\n- talk about the village or town where someone lives.`
  },
  // Week 5
  {
    week: 5,
    period: 13,
    unit: 'UNIT 2',
    lesson: 'Skills 2',
    objectives: `By the end of this unit, students will be able to:\n- listen for specific information about someone’s opinion about life in the countryside;\n- write a paragraph about what someone likes or dislikes about life in the countryside.`
  },
  {
    week: 5,
    period: 14,
    unit: 'UNIT 2',
    lesson: 'Looking back & Project',
    objectives: `By the end of this unit, students will be able to:\n- review vocabulary and grammar;\n- design a poster about their favourite village.`
  },
  {
    week: 5,
    period: 15,
    unit: 'UNIT 3',
    lesson: 'Getting started',
    objectives: `By the end of this unit, students will be able to:\n- use the words related to teen school clubs, teens’ use of social media, and teen stress.`
  },
  // Week 6
  {
    week: 6,
    period: 16,
    unit: 'UNIT 3',
    lesson: 'A closer look 1',
    objectives: `By the end of this unit, students will be able to:\n- use the words related to teen school clubs, teens’ use of social media, and teen stress;\n- pronounce the sounds /ʊə/ and /ɔɪ/ correctly in words and sentences.`
  },
  {
    week: 6,
    period: 17,
    unit: 'UNIT 3',
    lesson: 'A closer look 2',
    objectives: `By the end of this unit, students will be able to:\n- use simple sentences and compound sentences.`
  },
  {
    week: 6,
    period: 18,
    unit: 'UNIT 3',
    lesson: 'Communication',
    objectives: `By the end of this unit, students will be able to:\n- make requests.`
  },
  // Week 7
  {
    week: 7,
    period: 19,
    unit: 'UNIT 3',
    lesson: 'Skills 1',
    objectives: `By the end of this unit, students will be able to:\n- read for general and specific information about school club activities;\n- ask and answer questions about school clubs.`
  },
  {
    week: 7,
    period: 20,
    unit: 'UNIT 3',
    lesson: 'Skills 2',
    objectives: `By the end of this unit, students will be able to:\n- listen for general and specific information about teen stress;\n- write a paragraph about the cause(s) of one’s stress and solutions to deal with it.`
  },
  {
    week: 7,
    period: 21,
    unit: 'UNIT 3',
    lesson: 'Looking back & Project',
    objectives: `By the end of this unit, students will be able to:\n- review vocabulary and grammar;\n- create a poster about the club and then present it to the class.`
  },
  // Week 8
  {
    week: 8,
    period: 22,
    unit: 'REVIEW 1',
    lesson: 'Language',
    objectives: `By the end of this review, students will have revised the language they have learnt and the skills they have practised in Units 1-3.`
  },
  {
    week: 8,
    period: 23,
    unit: 'REVIEW 1',
    lesson: 'Skills',
    objectives: `By the end of this review, students will have revised the language they have learnt and the skills they have practised in Units 1-3.`
  },
  {
    week: 8,
    period: 24,
    unit: '',
    lesson: '45-minute test',
    objectives: `- To assess students’ English knowledge and their ability to apply the language skills learned during the first half of the first semester.`,
    isTest: true
  },
  // Week 9
  {
    week: 9,
    period: 25,
    unit: '',
    lesson: 'Feedback on 45-minute test',
    objectives: `- Correction of the test`
  },
  {
    week: 9,
    period: 26,
    unit: 'UNIT 4',
    lesson: 'Getting started',
    objectives: `By the end of this unit, students will be able to:\n- use the words related to the lifestyle of ethnic groups.`
  },
  {
    week: 9,
    period: 27,
    unit: 'UNIT 4',
    lesson: 'A closer look 1',
    objectives: `By the end of this unit, students will be able to:\n- use the words related to the lifestyle of ethnic groups;\n- pronounce the sounds /k/ and /g/ correctly in words and sentences.`
  },
  // Week 10
  {
    week: 10,
    period: 28,
    unit: 'UNIT 4',
    lesson: 'A closer look 2',
    objectives: `By the end of this unit, students will be able to:\n- recognise and use Yes / No questions and Wh-questions, and countable and uncountable nouns.`
  },
  {
    week: 10,
    period: 29,
    unit: 'UNIT 4',
    lesson: 'Communication',
    objectives: `By the end of this unit, students will be able to:\n- give opinions.`
  },
  {
    week: 10,
    period: 30,
    unit: 'UNIT 4',
    lesson: 'Skills 1',
    objectives: `By the end of this unit, students will be able to:\n- read for specific information about stilt houses;\n- talk about the type of home they live in.`
  },
  // Week 11
  {
    week: 11,
    period: 31,
    unit: 'UNIT 4',
    lesson: 'Skills 2',
    objectives: `By the end of this unit, students will be able to:\n- listen for specific information about the life of minority children;\n- write a paragraph about the things they do to help their family.`
  },
  {
    week: 11,
    period: 32,
    unit: 'UNIT 4',
    lesson: 'Looking back & Project',
    objectives: `By the end of this unit, students will be able to:\n- review vocabulary and grammar;\n- make a poster to introduce the ethnic groups.`
  },
  {
    week: 11,
    period: 33,
    unit: 'UNIT 5',
    lesson: 'Getting started',
    objectives: `By the end of this unit, students will be able to:\n- use the words and expressions related to customs and traditions.`
  },
  // Week 12
  {
    week: 12,
    period: 34,
    unit: 'UNIT 5',
    lesson: 'A closer look 1',
    objectives: `By the end of this unit, students will be able to:\n- use the words and expressions related to customs and traditions;\n- pronounce the sounds /n/ and /ŋ/ correctly in words and sentences.`
  },
  {
    week: 12,
    period: 35,
    unit: 'UNIT 5',
    lesson: 'A closer look 2',
    objectives: `By the end of this unit, students will be able to:\n- recognise and use the zero article.`
  },
  {
    week: 12,
    period: 36,
    unit: 'UNIT 5',
    lesson: 'Communication',
    objectives: `By the end of this unit, students will be able to:\n- give advice.`
  },
  // Week 13
  {
    week: 13,
    period: 37,
    unit: 'UNIT 5',
    lesson: 'Skills 1',
    objectives: `By the end of this unit, students will be able to:\n- read for general and specific information about a local festival;\n- talk about a normal family event that they take part in.`
  },
  {
    week: 13,
    period: 38,
    unit: 'UNIT 5',
    lesson: 'Skills 2',
    objectives: `By the end of this unit, students will be able to:\n- listen for specific information about a festival;\n- write an email to advise on taking part in a festival.`
  },
  {
    week: 13,
    period: 39,
    unit: 'UNIT 5',
    lesson: 'Looking back & Project',
    objectives: `By the end of this unit, students will be able to:\n- review vocabulary and grammar;\n- report on their local customs and traditions.`
  },
  // Week 14
  {
    week: 14,
    period: 40,
    unit: 'UNIT 6',
    lesson: 'Getting started',
    objectives: `By the end of this unit, students will be able to:\n- use the words related to the topic Lifestyles.`
  },
  {
    week: 14,
    period: 41,
    unit: 'UNIT 6',
    lesson: 'A closer look 1',
    objectives: `By the end of this unit, students will be able to:\n- use the words related to the topic Lifestyles;\n- pronounce the sounds /br/ and /pr/ correctly in words and sentences.`
  },
  {
    week: 14,
    period: 42,
    unit: 'UNIT 6',
    lesson: 'A closer look 2',
    objectives: `By the end of this unit, students will be able to:\n- use the future simple and the first conditional.`
  },
  // Week 15
  {
    week: 15,
    period: 43,
    unit: 'UNIT 6',
    lesson: 'Communication',
    objectives: `By the end of this unit, students will be able to:\n- express certainty.`
  },
  {
    week: 15,
    period: 44,
    unit: 'UNIT 6',
    lesson: 'Skills 1',
    objectives: `By the end of this unit, students will be able to:\n- read for specific information about an interesting lifestyle and ways to maintain a traditional lifestyle;\n- talk about maintaining traditional lifestyles.`
  },
  {
    week: 15,
    period: 45,
    unit: 'UNIT 6',
    lesson: 'Skills 2',
    objectives: `By the end of this unit, students will be able to:\n- listen for general and specific information about the impact of modern technology on lifestyles;\n- write a paragraph about the advantages or disadvantages of online learning.`
  },
  // Week 16
  {
    week: 16,
    period: 46,
    unit: 'UNIT 6',
    lesson: 'Looking back & Project',
    objectives: `By the end of this unit, students will be able to:\n- review vocabulary and grammar;\n- make a poster to introduce interesting lifestyles.`
  },
  {
    week: 16,
    period: 47,
    unit: 'REVIEW 2',
    lesson: 'Language',
    objectives: `By the end of this review, students will have revised the language they have learnt and the skills they have practised in Units 4-6.`
  },
  {
    week: 16,
    period: 48,
    unit: 'REVIEW 2',
    lesson: 'Skills',
    objectives: `By the end of this review, students will have revised the language they have learnt and the skills they have practised in Units 4-6.`
  },
  // Week 17
  {
    week: 17,
    period: 49,
    unit: '',
    lesson: '1st term exam',
    objectives: `- To assess students’ English knowledge and their ability to apply the language skills learned throughout the first semester.`,
    isTest: true
  },
  {
    week: 17,
    period: 50,
    unit: '',
    lesson: '1st term exam (Speaking)',
    objectives: `- To assess students’ English knowledge and their ability to apply the language skills learned throughout the first semester.`,
    isTest: true
  },
  {
    week: 17,
    period: 51,
    unit: '',
    lesson: 'In reserve',
    objectives: `- Optional`
  },
  // Week 18
  {
    week: 18,
    period: 52,
    unit: 'UNIT 7',
    lesson: 'Getting started',
    objectives: `By the end of this unit, students will be able to:\n- use the words related to the topic Environmental protection.`
  },
  {
    week: 18,
    period: 53,
    unit: 'UNIT 7',
    lesson: 'A closer look 1',
    objectives: `By the end of this unit, students will be able to:\n- use the words related to the topic Environmental protection;\n- pronounce the sounds /bl/ and /kl/ correctly in words and sentences.`
  },
  {
    week: 18,
    period: 54,
    unit: 'UNIT 7',
    lesson: 'A closer look 2',
    objectives: `By the end of this unit, students will be able to:\n- use complex sentences with adverb clauses of time.`
  },
  // Week 19
  {
    week: 19,
    period: 55,
    unit: 'UNIT 7',
    lesson: 'Communication',
    objectives: `By the end of this unit, students will be able to:\n- ask for clarification.`
  },
  {
    week: 19,
    period: 56,
    unit: 'UNIT 7',
    lesson: 'Skills 1',
    objectives: `By the end of this unit, students will be able to:\n- read for general and specific information about Con Dao National Park;\n- talk about Vu Quang National Park.`
  },
  {
    week: 19,
    period: 57,
    unit: 'UNIT 7',
    lesson: 'Skills 2',
    objectives: `By the end of this unit, students will be able to:\n- listen for general and specific information about water pollution;\n- write a notice.`
  },
  // Week 20
  {
    week: 20,
    period: 58,
    unit: 'UNIT 7',
    lesson: 'Looking back & Project',
    objectives: `By the end of this unit, students will be able to:\n- review vocabulary and grammar;\n- make a poster about a serious problem in their area and their solutions, then present it to the class.`
  },
  {
    week: 20,
    period: 59,
    unit: 'UNIT 8',
    lesson: 'Getting started',
    objectives: `By the end of this unit, students will be able to:\n- use the words related to shopping.`
  },
  {
    week: 20,
    period: 60,
    unit: 'UNIT 8',
    lesson: 'A closer look 1',
    objectives: `By the end of this unit, students will be able to:\n- use the words related to shopping;\n- pronounce the sounds /sp/ and /st/ correctly in words and sentences.`
  },
  // Week 21
  {
    week: 21,
    period: 61,
    unit: 'UNIT 8',
    lesson: 'A closer look 2',
    objectives: `By the end of this unit, students will be able to:\n- recognise and use adverbs of frequency and the present simple for future events.`
  },
  {
    week: 21,
    period: 62,
    unit: 'UNIT 8',
    lesson: 'Communication',
    objectives: `By the end of this unit, students will be able to:\n- make complaints.`
  },
  {
    week: 21,
    period: 63,
    unit: 'UNIT 8',
    lesson: 'Skills 1',
    objectives: `By the end of this unit, students will be able to:\n- read for specific information about the reasons people go to shopping centres;\n- talk about a shopping place.`
  },
  // Week 22
  {
    week: 22,
    period: 64,
    unit: 'UNIT 8',
    lesson: 'Skills 2',
    objectives: `By the end of this unit, students will be able to:\n- listen to a talk for general and specific information about online shopping;\n- write a paragraph about the advantages and disadvantages of a type of shopping.`
  },
  {
    week: 22,
    period: 65,
    unit: 'UNIT 8',
    lesson: 'Looking back & Project',
    objectives: `By the end of this unit, students will be able to:\n- review vocabulary and grammar;\n- present their dream shopping place.`
  },
  {
    week: 22,
    period: 66,
    unit: 'UNIT 9',
    lesson: 'Getting started',
    objectives: `By the end of this unit, students will be able to:\n- use the words related to types of natural disasters and words describing natural disasters.`
  },
  // Week 23
  {
    week: 23,
    period: 67,
    unit: 'UNIT 9',
    lesson: 'A closer look 1',
    objectives: `By the end of this unit, students will be able to:\n- use the words related to types of natural disasters and words describing natural disasters;\n- pronounce the words ending in -al and -ous with correct stress.`
  },
  {
    week: 23,
    period: 68,
    unit: 'UNIT 9',
    lesson: 'A closer look 2',
    objectives: `By the end of this unit, students will be able to:\n- use the past continuous.`
  },
  {
    week: 23,
    period: 69,
    unit: 'UNIT 9',
    lesson: 'Communication',
    objectives: `By the end of this unit, students will be able to:\n- give and respond to bad news.`
  },
  // Week 24
  {
    week: 24,
    period: 70,
    unit: 'UNIT 9',
    lesson: 'Skills 1',
    objectives: `By the end of this unit, students will be able to:\n- read for specific information about natural disasters;\n- talk about a natural disaster.`
  },
  {
    week: 24,
    period: 71,
    unit: 'UNIT 9',
    lesson: 'Skills 2',
    objectives: `By the end of this unit, students will be able to:\n- listen for specific information about things to do before, during, and after a natural disaster;\n- write instructions about things to do before, during, and after a natural disaster.`
  },
  {
    week: 24,
    period: 72,
    unit: 'UNIT 9',
    lesson: 'Looking back & Project',
    objectives: `By the end of this unit, students will be able to:\n- review vocabulary and grammar;\n- create a poster about the natural disaster and present it to the class.`
  },
  // Week 25
  {
    week: 25,
    period: 73,
    unit: 'REVIEW 3',
    lesson: 'Language',
    objectives: `By the end of this review, students will have revised the language they have learnt and the skills they have practised in Units 7-9.`
  },
  {
    week: 25,
    period: 74,
    unit: 'REVIEW 3',
    lesson: 'Skills',
    objectives: `By the end of this review, students will have revised the language they have learnt and the skills they have practised in Units 7-9.`
  },
  {
    week: 25,
    period: 75,
    unit: '',
    lesson: '45-minute test',
    objectives: `- To assess students’ English knowledge and their ability to apply the language skills learned during the first half of the second semester.`,
    isTest: true
  },
  // Week 26
  {
    week: 26,
    period: 76,
    unit: '',
    lesson: 'Feedback on 45-minute test',
    objectives: `- Correction of the test`
  },
  {
    week: 26,
    period: 77,
    unit: 'UNIT 10',
    lesson: 'Getting started',
    objectives: `By the end of this unit, students will be able to:\n- use the words related to communication technology.`
  },
  {
    week: 26,
    period: 78,
    unit: 'UNIT 10',
    lesson: 'A closer look 1',
    objectives: `By the end of this unit, students will be able to:\n- use the words related to communication technology;\n- pronounce words ending in -ese and -ee with correct stress.`
  },
  // Week 27
  {
    week: 27,
    period: 79,
    unit: 'UNIT 10',
    lesson: 'A closer look 2',
    objectives: `By the end of this unit, students will be able to:\n- recognise and use prepositions of place and time and possessive pronouns.`
  },
  {
    week: 27,
    period: 80,
    unit: 'UNIT 10',
    lesson: 'Communication',
    objectives: `By the end of this unit, students will be able to:\n- interrupt politely.`
  },
  {
    week: 27,
    period: 81,
    unit: 'UNIT 10',
    lesson: 'Skills 1',
    objectives: `By the end of this unit, students will be able to:\n- read for general and specific information about a way of communicating in the future;\n- talk about the advantages and disadvantages of a way of communicating.`
  },
  // Week 28
  {
    week: 28,
    period: 82,
    unit: 'UNIT 10',
    lesson: 'Skills 2',
    objectives: `By the end of this unit, students will be able to:\n- listen for general and specific information about a communication exhibition;\n- write a paragraph to describe a way of modern communication.`
  },
  {
    week: 28,
    period: 83,
    unit: 'UNIT 10',
    lesson: 'Looking back & Project',
    objectives: `By the end of this unit, students will be able to:\n- review vocabulary and grammar;\n- imagine a means of communication in 2025 then present their idea to the class.`
  },
  {
    week: 28,
    period: 84,
    unit: 'UNIT 11',
    lesson: 'Getting started',
    objectives: `By the end of this unit, students will be able to:\n- use the words related to science and technology in the future.`
  },
  // Week 29
  {
    week: 29,
    period: 85,
    unit: 'UNIT 11',
    lesson: 'A closer look 1',
    objectives: `By the end of this unit, students will be able to:\n- use the words related to science and technology in the future;\n- say sentences with correct stress.`
  },
  {
    week: 29,
    period: 86,
    unit: 'UNIT 11',
    lesson: 'A closer look 2',
    objectives: `By the end of this unit, students will be able to:\n- use reported speech for statements.`
  },
  {
    week: 29,
    period: 87,
    unit: 'UNIT 11',
    lesson: 'Communication',
    objectives: `By the end of this unit, students will be able to:\n- give and respond to good news.`
  },
  // Week 30
  {
    week: 30,
    period: 88,
    unit: 'UNIT 11',
    lesson: 'Skills 1',
    objectives: `By the end of this unit, students will be able to:\n- read advertisements for specific information about new technologies;\n- talk about a technology or an invention.`
  },
  {
    week: 30,
    period: 89,
    unit: 'UNIT 11',
    lesson: 'Skills 2',
    objectives: `By the end of this unit, students will be able to:\n- listen for specific information about a robot teacher;\n- write an opinion paragraph about whether robots will replace teachers at school.`
  },
  {
    week: 30,
    period: 90,
    unit: 'UNIT 11',
    lesson: 'Looking back & Project',
    objectives: `By the end of this unit, students will be able to:\n- review vocabulary and grammar;\n- imagine an invention, then make a poster presentation with pictures and present it to the class.`
  },
  // Week 31
  {
    week: 31,
    period: 91,
    unit: 'UNIT 12',
    lesson: 'Getting started',
    objectives: `By the end of this unit, students will be able to:\n- use the words related to the topic Life on other planets.`
  },
  {
    week: 31,
    period: 92,
    unit: 'UNIT 12',
    lesson: 'A closer look 1',
    objectives: `By the end of this unit, students will be able to:\n- use the words related to the topic Life on other planets;\n- use intonation for making lists correctly.`
  },
  {
    week: 31,
    period: 93,
    unit: 'UNIT 12',
    lesson: 'A closer look 2',
    objectives: `By the end of this unit, students will be able to:\n- use reported speech to report questions.`
  },
  // Week 32
  {
    week: 32,
    period: 94,
    unit: 'UNIT 12',
    lesson: 'Communication',
    objectives: `By the end of this unit, students will be able to:\n- express uncertainty.`
  },
  {
    week: 32,
    period: 95,
    unit: 'UNIT 12',
    lesson: 'Skills 1',
    objectives: `By the end of this unit, students will be able to:\n- read for specific information about the possibility of life on other planets;\n- talk about the conditions needed for planets to support human life.`
  },
  {
    week: 32,
    period: 96,
    unit: 'UNIT 12',
    lesson: 'Skills 2',
    objectives: `By the end of this unit, students will be able to:\n- listen for specific information about an imaginary planet and its creatures;\n- write a paragraph to describe imaginary creatures living on another planet.`
  },
  // Week 33
  {
    week: 33,
    period: 97,
    unit: 'UNIT 12',
    lesson: 'Looking back & Project',
    objectives: `By the end of this unit, students will be able to:\n- review vocabulary and grammar;\n- design a poster about their favourite planet then present it to the class.`
  },
  {
    week: 33,
    period: 98,
    unit: 'REVIEW 4',
    lesson: 'Language',
    objectives: `By the end of this review, Ss will have revised the language they have learnt and the skills they have practised in Units 10-12.`
  },
  // Week 34
  {
    week: 34,
    period: 99,
    unit: 'REVIEW 4',
    lesson: 'Skills',
    objectives: `By the end of this review, Ss will have revised the language they have learnt and the skills they have practised in Units 10-12.`
  },
  {
    week: 34,
    period: 100,
    unit: '',
    lesson: '2nd term exam',
    objectives: `- To assess students’ English knowledge and their ability to apply the language skills learned throughout the second semester.`,
    isTest: true
  },
  {
    week: 34,
    period: 101,
    unit: '',
    lesson: '2nd term exam (Speaking)',
    objectives: `- To assess students’ English knowledge and their ability to apply the language skills learned throughout the second semester.`,
    isTest: true
  },
  {
    week: 34,
    period: 102,
    unit: '',
    lesson: 'In reserve',
    objectives: `- Optional`
  },
  // Week 35
  {
    week: 35,
    period: 103,
    unit: '',
    lesson: 'In reserve',
    objectives: `- Optional`
  },
  {
    week: 35,
    period: 104,
    unit: '',
    lesson: 'In reserve',
    objectives: `- Optional`
  },
  {
    week: 35,
    period: 105,
    unit: '',
    lesson: 'In reserve',
    objectives: `- Optional`
  }
];

// =========================================================================
// 4. KẾ HOẠCH DẠY HỌC MÔN TIẾNG ANH - LỚP 9 (GLOBAL SUCCESS - 105 TIẾT)
// =========================================================================
export const SECONDARY_ENGLISH_GRADE_9_LESSONS: SecondaryEnglishLessonDef[] = [
  // Week 1
  {
    week: 1,
    period: 1,
    unit: 'UNIT 1',
    lesson: 'Getting started',
    objectives: `By the end of this unit, students will be able to:\n- use the words related to the topic Local community.`
  },
  {
    week: 1,
    period: 2,
    unit: 'UNIT 1',
    lesson: 'A closer look 1',
    objectives: `By the end of this unit, students will be able to:\n- use the words related to the topic Local community;\n- pronounce the vowel sounds /æ/, /ɑ:/, and /e/ correctly in words and sentences.`
  },
  {
    week: 1,
    period: 3,
    unit: 'UNIT 1',
    lesson: 'A closer look 2',
    objectives: `By the end of this unit, students will be able to:\n- use question words before to-infinitives and some phrasal verbs.`
  },
  // Week 2
  {
    week: 2,
    period: 4,
    unit: 'UNIT 1',
    lesson: 'Communication',
    objectives: `By the end of this unit, students will be able to:\n- seek help and respond.`
  },
  {
    week: 2,
    period: 5,
    unit: 'UNIT 1',
    lesson: 'Skills 1',
    objectives: `By the end of this unit, students will be able to:\n- guess the meaning of unknown words in context;\n- read for specific information about special products in some areas;\n- give a short presentation about a speciality;`
  },
  {
    week: 2,
    period: 6,
    unit: 'UNIT 1',
    lesson: 'Skills 2',
    objectives: `By the end of this unit, students will be able to:\n- listen for specific information about a community helper;\n- write a paragraph about a community helper.`
  },
  // Week 3
  {
    week: 3,
    period: 7,
    unit: 'UNIT 1',
    lesson: 'Looking back & Project',
    objectives: `By the end of this unit, students will be able to:\n- review vocabulary and grammar;\n- interview some students about the changes they want to make in their community, then report.`
  },
  {
    week: 3,
    period: 8,
    unit: 'UNIT 2',
    lesson: 'Getting started',
    objectives: `By the end of this unit, students will be able to:\n- use the words related to city life.`
  },
  {
    week: 3,
    period: 9,
    unit: 'UNIT 2',
    lesson: 'A closer look 1',
    objectives: `By the end of this unit, students will be able to:\n- use the words related to city life;\n- pronounce the diphthong sounds /aʊ/, /əʊ/, and /eə/ correctly in words and sentences.`
  },
  // Week 4
  {
    week: 4,
    period: 10,
    unit: 'UNIT 2',
    lesson: 'A closer look 2',
    objectives: `By the end of this unit, students will be able to:\n- recognise and use double comparatives and some phrasal verbs.`
  },
  {
    week: 4,
    period: 11,
    unit: 'UNIT 2',
    lesson: 'Communication',
    objectives: `By the end of this unit, students will be able to:\n- offer help and respond.`
  },
  {
    week: 4,
    period: 12,
    unit: 'UNIT 2',
    lesson: 'Skills 1',
    objectives: `By the end of this unit, students will be able to:\n- read for general and specific information in an announcement about a competition to find solutions to city problems;\n- talk about city problems and their solutions.`
  },
  // Week 5
  {
    week: 5,
    period: 13,
    unit: 'UNIT 2',
    lesson: 'Skills 2',
    objectives: `By the end of this unit, students will be able to:\n- listen for specific information in an interview about life in some cities;\n- write a paragraph about what they like or dislike about city life.`
  },
  {
    week: 5,
    period: 14,
    unit: 'UNIT 2',
    lesson: 'Looking back & Project',
    objectives: `By the end of this unit, students will be able to:\n- review vocabulary and grammar;\n- prepare a poster presentation on their future city and then present it to the class.`
  },
  {
    week: 5,
    period: 15,
    unit: 'UNIT 3',
    lesson: 'Getting started',
    objectives: `By the end of this unit, students will be able to:\n- use the words related to students’ life and schoolwork.`
  },
  // Week 6
  {
    week: 6,
    period: 16,
    unit: 'UNIT 3',
    lesson: 'A closer look 1',
    objectives: `By the end of this unit, students will be able to:\n- use the words related to students’ life and schoolwork;\n- correctly pronounce the sounds /h/ and /r/ in words and sentences.`
  },
  {
    week: 6,
    period: 17,
    unit: 'UNIT 3',
    lesson: 'A closer look 2',
    objectives: `By the end of this unit, students will be able to:\n- use modal verbs in first conditional sentences.`
  },
  {
    week: 6,
    period: 18,
    unit: 'UNIT 3',
    lesson: 'Communication',
    objectives: `By the end of this unit, students will be able to:\n- ask for repetition and respond.`
  },
  // Week 7
  {
    week: 7,
    period: 19,
    unit: 'UNIT 3',
    lesson: 'Skills 1',
    objectives: `By the end of this unit, students will be able to:\n- read for specific information about how someone could have a well-balanced life when they were at school;\n- talk about how to have a well-balanced life as a secondary student.`
  },
  {
    week: 7,
    period: 20,
    unit: 'UNIT 3',
    lesson: 'Skills 2',
    objectives: `By the end of this unit, students will be able to:\n- listen for specific information about how some students manage their time;\n- write a paragraph about how to manage our time effectively.`
  },
  {
    week: 7,
    period: 21,
    unit: 'UNIT 3',
    lesson: 'Looking back & Project',
    objectives: `By the end of this unit, students will be able to:\n- review vocabulary and grammar;\n- ask their classmate about how good they are at time management, then present it to the class.`
  },
  // Week 8
  {
    week: 8,
    period: 22,
    unit: 'REVIEW 1',
    lesson: 'Language',
    objectives: `By the end of this review, students will have revised the language they have learnt and the skills they have practised in Units 1-3.`
  },
  {
    week: 8,
    period: 23,
    unit: 'REVIEW 1',
    lesson: 'Skills',
    objectives: `By the end of this review, students will have revised the language they have learnt and the skills they have practised in Units 1-3.`
  },
  {
    week: 8,
    period: 24,
    unit: '',
    lesson: '45-minute test',
    objectives: `- To assess students’ English knowledge and their ability to apply the language skills learned during the first half of the first semester.`,
    isTest: true
  },
  // Week 9
  {
    week: 9,
    period: 25,
    unit: '',
    lesson: 'Feedback on 45-minute test',
    objectives: `- Correction of the test`
  },
  {
    week: 9,
    period: 26,
    unit: 'UNIT 4',
    lesson: 'Getting started',
    objectives: `By the end of this unit, students will be able to:\n- use the words related to the topic Remembering the past.`
  },
  {
    week: 9,
    period: 27,
    unit: 'UNIT 4',
    lesson: 'A closer look 1',
    objectives: `By the end of this unit, students will be able to:\n- use the words related to the topic Remembering the past;\n- pronounce the sounds /m/ and /l/ correctly in words and sentences.`
  },
  // Week 10
  {
    week: 10,
    period: 28,
    unit: 'UNIT 4',
    lesson: 'A closer look 2',
    objectives: `By the end of this unit, students will be able to:\n- use the past continuous and wish + past simple.`
  },
  {
    week: 10,
    period: 29,
    unit: 'UNIT 4',
    lesson: 'Communication',
    objectives: `By the end of this unit, students will be able to:\n- know how to thank and respond.`
  },
  {
    week: 10,
    period: 30,
    unit: 'UNIT 4',
    lesson: 'Skills 1',
    objectives: `By the end of this unit, students will be able to:\n- read for specific information about how English people keep their cuisine alive;\n- talk about a typical traditional Vietnamese dish.`
  },
  // Week 11
  {
    week: 11,
    period: 31,
    unit: 'UNIT 4',
    lesson: 'Skills 2',
    objectives: `By the end of this unit, students will be able to:\n- listen for general and specific information about old school days;\n- write a paragraph about old school days.`
  },
  {
    week: 11,
    period: 32,
    unit: 'UNIT 4',
    lesson: 'Looking back & Project',
    objectives: `By the end of this unit, students will be able to:\n- review vocabulary and grammar;\n- collect information and pictures about 40 years ago, then make a poster.`
  },
  {
    week: 11,
    period: 33,
    unit: 'UNIT 5',
    lesson: 'Getting started',
    objectives: `By the end of this unit, students will be able to:\n- use the words related to experiences and adjectives describing experiences.`
  },
  // Week 12
  {
    week: 12,
    period: 34,
    unit: 'UNIT 5',
    lesson: 'A closer look 1',
    objectives: `By the end of this unit, students will be able to:\n- use the words related to experiences and adjectives describing experiences;\n- pronounce the sounds /j/ and /w/ correctly in words and sentences.`
  },
  {
    week: 12,
    period: 35,
    unit: 'UNIT 5',
    lesson: 'A closer look 2',
    objectives: `By the end of this unit, students will be able to:\n- use the present perfect correctly.`
  },
  {
    week: 12,
    period: 36,
    unit: 'UNIT 5',
    lesson: 'Communication',
    objectives: `By the end of this unit, students will be able to:\n- apologise and respond.`
  },
  // Week 13
  {
    week: 13,
    period: 37,
    unit: 'UNIT 5',
    lesson: 'Skills 1',
    objectives: `By the end of this unit, students will be able to:\n- read for general and specific information about different summer course experiences;\n- talk about a friend’s experiences of a course.`
  },
  {
    week: 13,
    period: 38,
    unit: 'UNIT 5',
    lesson: 'Skills 2',
    objectives: `By the end of this unit, students will be able to:\n- listen for general and specific information about bad experiences at school;\n- write a paragraph about the most pleasant/unpleasant experience at school.`
  },
  {
    week: 13,
    period: 39,
    unit: 'UNIT 5',
    lesson: 'Looking back & Project',
    objectives: `By the end of this unit, students will be able to:\n- review vocabulary and grammar;\n- make a poster of their experience with pictures or photos, then present it to class.`
  },
  // Week 14
  {
    week: 14,
    period: 40,
    unit: 'UNIT 6',
    lesson: 'Getting started',
    objectives: `By the end of this unit, students will be able to:\n- use the words related to changes in lifestyle.`
  },
  {
    week: 14,
    period: 41,
    unit: 'UNIT 6',
    lesson: 'A closer look 1',
    objectives: `By the end of this unit, students will be able to:\n- use the words related to changes in lifestyle;\n- pronounce the sounds /fl/ and /fr/ correctly in words and sentences.`
  },
  {
    week: 14,
    period: 42,
    unit: 'UNIT 6',
    lesson: 'A closer look 2',
    objectives: `By the end of this unit, students will be able to:\n- use the to-infinitive and V-ing after a verb correctly.`
  },
  // Week 15
  {
    week: 15,
    period: 43,
    unit: 'UNIT 6',
    lesson: 'Communication',
    objectives: `By the end of this unit, students will be able to:\n- make promises.`
  },
  {
    week: 15,
    period: 44,
    unit: 'UNIT 6',
    lesson: 'Skills 1',
    objectives: `By the end of this unit, students will be able to:\n- read for specific information about learning styles in the past and at present;\n- talk about changes in one’s learning style.`
  },
  {
    week: 15,
    period: 45,
    unit: 'UNIT 6',
    lesson: 'Skills 2',
    objectives: `By the end of this unit, students will be able to:\n- listen for specific information about changes in family life;\n- write an email about changes in one’s family.`
  },
  // Week 16
  {
    week: 16,
    period: 46,
    unit: 'UNIT 6',
    lesson: 'Looking back & Project',
    objectives: `By the end of this unit, students will be able to:\n- review vocabulary and grammar;\n- make a poster, including his/her photo and the information and present it to the class.`
  },
  {
    week: 16,
    period: 47,
    unit: 'REVIEW 2',
    lesson: 'Language',
    objectives: `By the end of this review, students will have revised the language they have learnt and the skills they have practised in Units 4-6.`
  },
  {
    week: 16,
    period: 48,
    unit: 'REVIEW 2',
    lesson: 'Skills',
    objectives: `By the end of this review, students will have revised the language they have learnt and the skills they have practised in Units 4-6.`
  },
  // Week 17
  {
    week: 17,
    period: 49,
    unit: '',
    lesson: '1st term exam',
    objectives: `- To assess students’ English knowledge and their ability to apply the language skills learned throughout the first semester.`,
    isTest: true
  },
  {
    week: 17,
    period: 50,
    unit: '',
    lesson: '1st term exam (Speaking)',
    objectives: `- To assess students’ English knowledge and their ability to apply the language skills learned throughout the first semester.`,
    isTest: true
  },
  {
    week: 17,
    period: 51,
    unit: '',
    lesson: 'In reserve',
    objectives: `- Optional`
  },
  // Week 18
  {
    week: 18,
    period: 52,
    unit: 'UNIT 7',
    lesson: 'Getting started',
    objectives: `By the end of this unit, students will be able to:\n- use the words related to the topic Natural wonders of the world.`
  },
  {
    week: 18,
    period: 53,
    unit: 'UNIT 7',
    lesson: 'A closer look 1',
    objectives: `By the end of this unit, students will be able to:\n- use the words related to the topic Natural wonders of the world;\n- pronounce the sounds /sl/ and /sn/ correctly in words and sentences.`
  },
  {
    week: 18,
    period: 54,
    unit: 'UNIT 7',
    lesson: 'A closer look 2',
    objectives: `By the end of this unit, students will be able to:\n- use the reported Yes / No questions.`
  },
  // Week 19
  {
    week: 19,
    period: 55,
    unit: 'UNIT 7',
    lesson: 'Communication',
    objectives: `By the end of this unit, students will be able to:\n- ask for permission and respond.`
  },
  {
    week: 19,
    period: 56,
    unit: 'UNIT 7',
    lesson: 'Skills 1',
    objectives: `By the end of this unit, students will be able to:\n- read for specific information about the Dolomites - a travel destination;\n- talk about the Great Barrier Reef.`
  },
  {
    week: 19,
    period: 57,
    unit: 'UNIT 7',
    lesson: 'Skills 2',
    objectives: `By the end of this unit, students will be able to:\n- listen for specific information about the Amazon Rainforest;\n- write a paragraph about a natural wonder/landscape in their area.`
  },
  // Week 20
  {
    week: 20,
    period: 58,
    unit: 'UNIT 7',
    lesson: 'Looking back & Project',
    objectives: `By the end of this unit, students will be able to:\n- review vocabulary and grammar;\n- make a poster about natural wonders of the world, then present it to the class.`
  },
  {
    week: 20,
    period: 59,
    unit: 'UNIT 8',
    lesson: 'Getting started',
    objectives: `By the end of this unit, students will be able to:\n- use the words and phrases related to tourism.`
  },
  {
    week: 20,
    period: 60,
    unit: 'UNIT 8',
    lesson: 'A closer look 1',
    objectives: `By the end of this unit, students will be able to:\n- use the words and phrases related to tourism;\n- use stress in words ending in –ic and –ious correctly.`
  },
  // Week 21
  {
    week: 21,
    period: 61,
    unit: 'UNIT 8',
    lesson: 'A closer look 2',
    objectives: `By the end of this unit, students will be able to:\n- recognise and use relative pronouns correctly.`
  },
  {
    week: 21,
    period: 62,
    unit: 'UNIT 8',
    lesson: 'Communication',
    objectives: `By the end of this unit, students will be able to:\n- express obligations.`
  },
  {
    week: 21,
    period: 63,
    unit: 'UNIT 8',
    lesson: 'Skills 1',
    objectives: `By the end of this unit, students will be able to:\n- read for specific information about different types of tours;\n- talk about their travel experience.`
  },
  // Week 22
  {
    week: 22,
    period: 64,
    unit: 'UNIT 8',
    lesson: 'Skills 2',
    objectives: `By the end of this unit, students will be able to:\n- listen for general and specific information about a tour announcement;\n- write a paragraph introducing a tour.`
  },
  {
    week: 22,
    period: 65,
    unit: 'UNIT 8',
    lesson: 'Looking back & Project',
    objectives: `By the end of this unit, students will be able to:\n- review vocabulary and grammar;\n- make a plan for two-day trip.`
  },
  {
    week: 22,
    period: 66,
    unit: 'UNIT 9',
    lesson: 'Getting started',
    objectives: `By the end of this unit, students will be able to:\n- use the words related to the topic World Englishes.`
  },
  // Week 23
  {
    week: 23,
    period: 67,
    unit: 'UNIT 9',
    lesson: 'A closer look 1',
    objectives: `By the end of this unit, students will be able to:\n- use the words related to the topic World Englishes;\n- pronounce the words ending in -ion and -ity with correct stress.`
  },
  {
    week: 23,
    period: 68,
    unit: 'UNIT 9',
    lesson: 'A closer look 2',
    objectives: `By the end of this unit, students will be able to:\n- use defining relative clauses.`
  },
  {
    week: 23,
    period: 69,
    unit: 'UNIT 9',
    lesson: 'Communication',
    objectives: `By the end of this unit, students will be able to:\n- say good luck and respond.`
  },
  // Week 24
  {
    week: 24,
    period: 70,
    unit: 'UNIT 9',
    lesson: 'Skills 1',
    objectives: `By the end of this unit, students will be able to:\n- read for general and specific information about the three circles of English;\n- talk about borrowed words.`
  },
  {
    week: 24,
    period: 71,
    unit: 'UNIT 9',
    lesson: 'Skills 2',
    objectives: `By the end of this unit, students will be able to:\n- listen for specific information about ways to improve one’s English vocabulary;\n- write a paragraph about ways to improve an area of English learning.`
  },
  {
    week: 24,
    period: 72,
    unit: 'UNIT 9',
    lesson: 'Looking back & Project',
    objectives: `By the end of this unit, students will be able to:\n- review vocabulary and grammar;\n- make a poster about the country that uses English as a second or an official language.`
  },
  // Week 25
  {
    week: 25,
    period: 73,
    unit: 'REVIEW 3',
    lesson: 'Language',
    objectives: `By the end of this review, students will have revised the language they have learnt and the skills they have practised in Units 7-9.`
  },
  {
    week: 25,
    period: 74,
    unit: 'REVIEW 3',
    lesson: 'Skills',
    objectives: `By the end of this review, students will have revised the language they have learnt and the skills they have practised in Units 7-9.`
  },
  {
    week: 25,
    period: 75,
    unit: '',
    lesson: '45-minute test',
    objectives: `- To assess students’ English knowledge and their ability to apply the language skills learned during the first half of the second semester.`,
    isTest: true
  },
  // Week 26
  {
    week: 26,
    period: 76,
    unit: '',
    lesson: 'Feedback on 45-minute test',
    objectives: `- Correction of the test.`
  },
  {
    week: 26,
    period: 77,
    unit: 'UNIT 10',
    lesson: 'Getting started',
    objectives: `By the end of this unit, students will be able to:\n- use the words and phrases related to planet Earth, habitats, and flora and fauna.`
  },
  {
    week: 26,
    period: 78,
    unit: 'UNIT 10',
    lesson: 'A closer look 1',
    objectives: `By the end of this unit, students will be able to:\n- use the words and phrases related to planet Earth, habitats, and flora and fauna;\n- say sentences with correct rhythm.`
  },
  // Week 27
  {
    week: 27,
    period: 79,
    unit: 'UNIT 10',
    lesson: 'A closer look 2',
    objectives: `By the end of this unit, students will be able to:\n- use non-defining relative clauses.`
  },
  {
    week: 27,
    period: 80,
    unit: 'UNIT 10',
    lesson: 'Communication',
    objectives: `By the end of this unit, students will be able to:\n- persuade someone to do something and respond.`
  },
  {
    week: 27,
    period: 81,
    unit: 'UNIT 10',
    lesson: 'Skills 1',
    objectives: `By the end of this unit, students will be able to:\n- read for general and specific information about flora and fauna;\n- talk about threats to flora and fauna and how to protect them.`
  },
  // Week 28
  {
    week: 28,
    period: 82,
    unit: 'UNIT 10',
    lesson: 'Skills 2',
    objectives: `By the end of this unit, students will be able to:\n- listen for general and specific information about the effects of living things on the environment;\n- write a summary.`
  },
  {
    week: 28,
    period: 83,
    unit: 'UNIT 10',
    lesson: 'Looking back & Project',
    objectives: `By the end of this unit, students will be able to:\n- review vocabulary and grammar;\n- collect pictures of some flora or fauna, then create a poster.`
  },
  {
    week: 28,
    period: 84,
    unit: 'UNIT 11',
    lesson: 'Getting started',
    objectives: `By the end of this unit, students will be able to:\n- use the words and phrases about electronic devices.`
  },
  // Week 29
  {
    week: 29,
    period: 85,
    unit: 'UNIT 11',
    lesson: 'A closer look 1',
    objectives: `By the end of this unit, students will be able to:\n- use the words and phrases about electronic devices;\n- stress all words in sentences correctly.`
  },
  {
    week: 29,
    period: 86,
    unit: 'UNIT 11',
    lesson: 'A closer look 2',
    objectives: `By the end of this unit, students will be able to:\n- use the verb suggest / advise / recommend + V-ing / a clause with should.`
  },
  {
    week: 29,
    period: 87,
    unit: 'UNIT 11',
    lesson: 'Communication',
    objectives: `By the end of this unit, students will be able to:\n- check someone’s understanding and respond.`
  },
  // Week 30
  {
    week: 30,
    period: 88,
    unit: 'UNIT 11',
    lesson: 'Skills 1',
    objectives: `By the end of this unit, students will be able to:\n- read for specific information about electronic devices;\n- talk about an electronic device which is important to them.`
  },
  {
    week: 30,
    period: 89,
    unit: 'UNIT 11',
    lesson: 'Skills 2',
    objectives: `By the end of this unit, students will be able to:\n- listen for specific information about the current and future uses of one’s favourite electronic device;\n- write a passage about the current and future capabilities of one’s favourite electronic device.`
  },
  {
    week: 30,
    period: 90,
    unit: 'UNIT 11',
    lesson: 'Looking back & Project',
    objectives: `By the end of this unit, students will be able to:\n- review vocabulary and grammar;\n- present their leaflet.`
  },
  // Week 31
  {
    week: 31,
    period: 91,
    unit: 'UNIT 12',
    lesson: 'Getting started',
    objectives: `By the end of this unit, students will be able to:\n- use the words and phrases related to jobs.`
  },
  {
    week: 31,
    period: 92,
    unit: 'UNIT 12',
    lesson: 'A closer look 1',
    objectives: `By the end of this unit, students will be able to:\n- use the words and phrases related to jobs;\n- say statements used as questions with correct intonation.`
  },
  {
    week: 31,
    period: 93,
    unit: 'UNIT 12',
    lesson: 'A closer look 2',
    objectives: `By the end of this unit, students will be able to:\n- use adverbial clauses of concession, result, and reason.`
  },
  // Week 32
  {
    week: 32,
    period: 94,
    unit: 'UNIT 12',
    lesson: 'Communication',
    objectives: `By the end of this unit, students will be able to:\n- express hope and respond.`
  },
  {
    week: 32,
    period: 95,
    unit: 'UNIT 12',
    lesson: 'Skills 1',
    objectives: `By the end of this unit, students will be able to:\n- read for general and specific information about the future world of work;\n- talk about the job they want to do in the future.`
  },
  {
    week: 32,
    period: 96,
    unit: 'UNIT 12',
    lesson: 'Skills 2',
    objectives: `By the end of this unit, students will be able to:\n- listen for specific information about people’s career paths;\n- write an email about their future favourite job.`
  },
  // Week 33
  {
    week: 33,
    period: 97,
    unit: 'UNIT 12',
    lesson: 'Looking back & Project',
    objectives: `By the end of this unit, students will be able to:\n- review vocabulary and grammar;\n- present a poster about their future jobs to the class.`
  },
  {
    week: 33,
    period: 98,
    unit: 'REVIEW 4',
    lesson: 'Language',
    objectives: `By the end of this review, Ss will have revised the language they have learnt and the skills they have practised in Units 10-12.`
  },
  // Week 34
  {
    week: 34,
    period: 99,
    unit: 'REVIEW 4',
    lesson: 'Skills',
    objectives: `By the end of this review, Ss will have revised the language they have learnt and the skills they have practised in Units 10-12.`
  },
  {
    week: 34,
    period: 100,
    unit: '',
    lesson: '2nd term exam',
    objectives: `- To assess students’ English knowledge and their ability to apply the language skills learned throughout the second semester.`,
    isTest: true
  },
  {
    week: 34,
    period: 101,
    unit: '',
    lesson: '2nd term exam (Speaking)',
    objectives: `- To assess students’ English knowledge and their ability to apply the language skills learned throughout the second semester.`,
    isTest: true
  },
  {
    week: 34,
    period: 102,
    unit: '',
    lesson: 'In reserve',
    objectives: `- Optional`
  },
  // Week 35
  {
    week: 35,
    period: 103,
    unit: '',
    lesson: 'In reserve',
    objectives: `- Optional`
  },
  {
    week: 35,
    period: 104,
    unit: '',
    lesson: 'In reserve',
    objectives: `- Optional`
  },
  {
    week: 35,
    period: 105,
    unit: '',
    lesson: 'In reserve',
    objectives: `- Optional`
  }
];

// =========================================================================
// TÍCH HỢP NĂNG LỰC SỐ (NLS - CV 3456) & TRÍ TUỆ NHÂN TẠO (AI - QĐ 2422)
// Mỗi tiết học bám sát chính xác YCCĐ cụ thể và rút gọn đúng 2 mục: 1 NLS + 1 AI
// =========================================================================
export function getEnglishLessonNlsAndAi(
  grade: number,
  lessonName: string,
  unitName: string,
  lessonObjectives: string = ''
): {
  nlsCode: string;
  nlsRequirement: string;
  aiCode: string;
  aiRequirement: string;
  digitalCompetency: string;
} {
  const l = lessonName.toLowerCase().trim();
  const u = unitName.toLowerCase().trim();
  const isLower = grade <= 7; // Lớp 6, 7 -> TC1; Lớp 8, 9 -> TC2

  // Trích xuất các dòng mục tiêu sạch (loại bỏ header "By the end...")
  const cleanObjLines = (lessonObjectives || '')
    .split('\n')
    .map((s) => s.trim().replace(/^[-–•*]\s*/, ''))
    .filter((s) => s.length > 0 && !s.toLowerCase().startsWith('by the end of'));

  const primaryObjective = cleanObjLines[0] || '';
  const secondaryObjective = cleanObjLines[1] || '';

  // Trích xuất chi tiết nội dung từ YCCĐ để đưa vào mô tả NLS / AI
  const vocabTarget = primaryObjective;
  const pronunciationTarget = cleanObjLines.find((l) => l.toLowerCase().includes('pronounce') || l.toLowerCase().includes('sound') || l.toLowerCase().includes('stress') || l.toLowerCase().includes('intonation') || l.toLowerCase().includes('rhythm') || l.toLowerCase().includes('tone')) || '';
  const grammarTarget = cleanObjLines.find((l) => l.toLowerCase().startsWith('use ') || l.toLowerCase().startsWith('recognise') || l.toLowerCase().startsWith('compare')) || primaryObjective;
  const commTarget = cleanObjLines.find((l) => l.toLowerCase().startsWith('give') || l.toLowerCase().startsWith('ask') || l.toLowerCase().startsWith('express') || l.toLowerCase().startsWith('say') || l.toLowerCase().startsWith('seek') || l.toLowerCase().startsWith('offer') || l.toLowerCase().startsWith('apologise') || l.toLowerCase().startsWith('persuade') || l.toLowerCase().startsWith('check') || l.toLowerCase().startsWith('interrupt') || l.toLowerCase().startsWith('introduce') || l.toLowerCase().startsWith('talk about likes') || l.toLowerCase().startsWith('invite') || l.toLowerCase().startsWith('make')) || primaryObjective;
  const readingTarget = cleanObjLines.find((l) => l.toLowerCase().startsWith('read') || l.toLowerCase().startsWith('guess')) || primaryObjective;
  const speakingTarget = cleanObjLines.find((l) => l.toLowerCase().startsWith('talk') || l.toLowerCase().startsWith('give a short presentation')) || secondaryObjective || primaryObjective;
  const listeningTarget = cleanObjLines.find((l) => l.toLowerCase().startsWith('listen')) || primaryObjective;
  const writingTarget = cleanObjLines.find((l) => l.toLowerCase().startsWith('write') || l.toLowerCase().startsWith('make a poster')) || secondaryObjective || primaryObjective;
  const projectTarget = cleanObjLines.find((l) => l.toLowerCase().includes('project') || l.toLowerCase().includes('design') || l.toLowerCase().includes('poster') || l.toLowerCase().includes('yearbook') || l.toLowerCase().includes('interview') || l.toLowerCase().includes('report') || l.toLowerCase().includes('map') || l.toLowerCase().includes('presentation') || l.toLowerCase().includes('show and tell') || l.toLowerCase().includes('draw') || l.toLowerCase().includes('present')) || primaryObjective;

  let nlsCode = '';
  let nlsReq = '';
  let aiCode = '';
  let aiReq = '';

  if (l.includes('getting started')) {
    nlsCode = isLower ? '1.1.TC1a' : '1.1.TC2a';
    nlsReq = `Search, access and organize digital multimodal flashcards and introductory videos for: ${vocabTarget}`;
    aiCode = grade === 6 ? '6.C2.2' : grade === 7 ? '7.C2.1' : grade === 8 ? '8.C1.1' : '9.C2.1';
    aiReq = grade === 6
      ? `Utilize AI speech synthesis tools to listen to introductory dialogues and explore vocabulary on: ${vocabTarget}`
      : grade === 7
      ? `Use AI conversational assistants to practice introductory vocabulary and dialogue models for: ${vocabTarget}`
      : grade === 8
      ? `Apply NLP text processing tools to analyze dialogue structures and vocabulary on: ${vocabTarget}`
      : `Explore generative AI tools to discover topical information and situational models for: ${vocabTarget}`;
  } else if (l.includes('closer look 1')) {
    nlsCode = isLower ? '1.2.TC1a' : '1.2.TC2a';
    nlsReq = pronunciationTarget
      ? `Utilize online phonetic databases and audio dictionaries (Oxford/Cambridge) to practice: ${pronunciationTarget}`
      : `Search and classify lexical items using interactive digital word maps for: ${vocabTarget}`;
    aiCode = grade === 6 ? '6.C3.1' : grade === 7 ? '7.C1.1' : grade === 8 ? '8.C1.1' : '9.C1.1';
    aiReq = grade === 6
      ? `Use AI speech recognition (ASR) to analyze and correct individual pronunciation of: ${pronunciationTarget || vocabTarget}`
      : grade === 7
      ? `Apply AI speech tools to assess acoustic stress and intonation patterns for: ${pronunciationTarget || vocabTarget}`
      : grade === 8
      ? `Describe how AI executes speech recognition to provide real-time phonetic feedback on: ${pronunciationTarget || vocabTarget}`
      : `Utilize AI acoustic speech scoring models to refine stress patterns and connected speech for: ${pronunciationTarget || vocabTarget}`;
  } else if (l.includes('closer look 2')) {
    nlsCode = isLower ? '1.3.TC1a' : '1.3.TC2a';
    nlsReq = `Practice interactive grammar drills and quizzes on digital platforms (LMS/Quizizz) for: ${grammarTarget}`;
    aiCode = grade === 6 ? '6.C1.1' : grade === 7 ? '7.C5.1' : grade === 8 ? '8.A1.1' : '9.A3.1';
    aiReq = grade === 6
      ? `Observe how AI algorithms analyze sentence patterns and provide automated feedback for: ${grammarTarget}`
      : grade === 7
      ? `Describe how AI language models identify syntactic rules and suggest sentence corrections for: ${grammarTarget}`
      : grade === 8
      ? `Utilize AI language models to generate adaptive sentence examples and grammar explanations for: ${grammarTarget}`
      : `Leverage AI grammar assistants for self-assessment while maintaining human critical evaluation of: ${grammarTarget}`;
  } else if (l.includes('communication')) {
    nlsCode = isLower ? '2.1.TC1a' : '2.1.TC2a';
    nlsReq = `Interact through digital communication channels and simulated dialogue rooms to: ${commTarget}`;
    aiCode = grade === 6 ? '6.C2.2' : grade === 7 ? '7.A3.1' : grade === 8 ? '8.D2.1' : '9.C2.1';
    aiReq = grade === 6
      ? `Engage in conversational roleplay with AI dialogue agents to practice: ${commTarget}`
      : grade === 7
      ? `Participate in interactive dialogue simulations with conversational AI to: ${commTarget}`
      : grade === 8
      ? `Formulate a dialogue script for an AI conversational agent and practice roleplay to: ${commTarget}`
      : `Direct situational communicative scenarios with advanced conversational AI partners to: ${commTarget}`;
  } else if (l.includes('skills 1')) {
    nlsCode = isLower ? '1.2.TC1a' : '1.2.TC2a';
    nlsReq = `Read authentic digital multimodal texts and prepare digital presentation cue cards to: ${speakingTarget || readingTarget}`;
    aiCode = grade === 6 ? '6.A1.3' : grade === 7 ? '7.C2.1' : grade === 8 ? '8.C1.1' : '9.A3.1';
    aiReq = grade === 6
      ? `Verify AI-generated reading summaries against textbook passages before oral presentation on: ${readingTarget}`
      : grade === 7
      ? `Use AI reading comprehension assistants to generate targeted inquiry questions for: ${readingTarget}`
      : grade === 8
      ? `Use AI text analysis tools to extract key concepts and outline spoken arguments to: ${speakingTarget || readingTarget}`
      : `Employ AI text synthesis to evaluate viewpoints and present balanced oral perspectives to: ${speakingTarget || readingTarget}`;
  } else if (l.includes('skills 2')) {
    nlsCode = isLower ? '3.1.TC1a' : '3.1.TC2a';
    nlsReq = `Type, format and refine digital written texts using word processing tools: ${writingTarget || listeningTarget}`;
    aiCode = grade === 6 ? '6.A1.3' : grade === 7 ? '7.B3.1' : grade === 8 ? '8.A1.2' : '9.C2.1';
    aiReq = grade === 6
      ? `Use AI speech tools to support listening verification and check sentence drafts to: ${writingTarget}`
      : grade === 7
      ? `Demonstrate responsible AI usage when seeking vocabulary and structural feedback to: ${writingTarget}`
      : grade === 8
      ? `Use AI writing checkers to receive feedback on lexical diversity and coherence to: ${writingTarget}`
      : `Collaborate with AI writing assistants for structural editing while preserving personal voice in: ${writingTarget}`;
  } else if (l.includes('looking back') || l.includes('project')) {
    nlsCode = isLower ? '2.4.TC1a' : '2.4.TC2a';
    nlsReq = `Collaborate online in teams to design multimedia project posters and slides (Canva/PowerPoint) to: ${projectTarget}`;
    aiCode = grade === 6 ? '6.D1.1' : grade === 7 ? '7.D1.1' : grade === 8 ? '8.D1.1' : '9.D1.1';
    aiReq = grade === 6
      ? `Apply AI generative tools for visual brainstorming and graphic design to: ${projectTarget}`
      : grade === 7
      ? `Identify creative solutions with AI support and present multimedia project findings to: ${projectTarget}`
      : grade === 8
      ? `Plan a collaborative multimedia project utilizing generative AI for infographic design on: ${projectTarget}`
      : `Lead AI-assisted collaborative project design and multimedia storytelling for: ${projectTarget}`;
  } else if (l.includes('language') && (u.includes('review') || l.includes('review'))) {
    nlsCode = isLower ? '5.2.TC1a' : '5.2.TC2a';
    nlsReq = 'Identify individual learning needs and complete digital self-assessment quizzes to consolidate language knowledge';
    aiCode = grade === 6 ? '6.C1.1' : grade === 7 ? '7.C5.1' : grade === 8 ? '8.A3.3' : '9.A3.1';
    aiReq = grade === 6
      ? 'Use AI-based quiz systems to detect grammatical and lexical gaps for targeted revision'
      : grade === 7
      ? 'Utilize adaptive AI learning tools for customized language review and self-directed practice'
      : grade === 8
      ? 'Track personal error logs and diagnostic improvement metrics through AI-assisted revision'
      : 'Employ AI adaptive review systems to strengthen comprehensive high-school entrance competencies';
  } else if (l.includes('skills') && (u.includes('review') || l.includes('review'))) {
    nlsCode = isLower ? '3.2.TC1a' : '3.2.TC2a';
    nlsReq = 'Integrate and reconstruct digital learning content from previous units into a comprehensive review portfolio';
    aiCode = grade === 6 ? '6.C3.1' : grade === 7 ? '7.C2.1' : grade === 8 ? '8.C1.1' : '9.C2.1';
    aiReq = grade === 6
      ? 'Practice integrated reading and listening skills using AI interactive comprehension tools'
      : grade === 7
      ? 'Engage with AI skill simulators for multifaceted language proficiency evaluation'
      : grade === 8
      ? 'Synthesize four language skills using AI multimodal comprehension and response platforms'
      : 'Simulate comprehensive communicative tasks with AI multi-skill examination interfaces';
  } else if (l.includes('test') || l.includes('exam')) {
    nlsCode = isLower ? '4.2.TC1a' : '4.2.TC2a';
    nlsReq = 'Protect personal test credentials, secure digital examination accounts, and ensure privacy during testing';
    aiCode = grade === 6 ? '6.A3.3' : grade === 7 ? '7.B3.1' : grade === 8 ? '8.B1.1' : '9.B2.3';
    aiReq = grade === 6
      ? 'Maintain digital integrity and adhere strictly to regulations regarding unauthorized AI assistance during exams'
      : grade === 7
      ? 'Demonstrate academic honesty and ethics by completing language assessments independently without unauthorized AI'
      : grade === 8
      ? 'Recognize the importance of academic integrity and the risks of generative AI plagiarism during assessments'
      : 'Uphold rigorous academic ethics and personal accountability in formal standardized language evaluations';
  } else if (l.includes('feedback')) {
    nlsCode = isLower ? '5.1.TC1a' : '5.1.TC2a';
    nlsReq = 'Analyze digital test results and error analytics to troubleshoot conceptual and technical learning challenges';
    aiCode = grade === 6 ? '6.A1.1' : grade === 7 ? '7.A1.1' : grade === 8 ? '8.A1.2' : '9.A2.2';
    aiReq = grade === 6
      ? 'Review AI-assisted test analytics to understand error patterns and apply teacher-guided corrective strategies'
      : grade === 7
      ? 'Evaluate automated feedback on test performance to formulate personal remediation plans'
      : grade === 8
      ? 'Examine diagnostic AI feedback on common grammar and vocabulary errors for targeted remediation'
      : 'Analyze algorithmic performance diagnostics to correct misconceptions and refine exam strategies';
  } else {
    // In reserve or optional
    nlsCode = isLower ? '6.2.TC1a' : '6.2.TC2a';
    nlsReq = 'Explore digital language libraries, educational software, and interactive games for self-directed enrichment';
    aiCode = grade === 6 ? '6.C2.2' : grade === 7 ? '7.D1.1' : grade === 8 ? '8.D2.1' : '9.C2.1';
    aiReq = grade === 6
      ? 'Engage in creative English games and conversational practice with interactive AI tools'
      : grade === 7
      ? 'Explore open-ended AI language challenges and intercultural storytelling simulations'
      : grade === 8
      ? 'Develop personalized English conversational scenarios using AI chatbot prompts'
      : 'Pursue autonomous English projects and creative multimedia storytelling powered by generative AI';
  }

  // Đúng 2 dòng rút gọn (1 NLS + 1 AI)
  const digitalCompetency = `• [NLS Code: ${nlsCode}] ${nlsReq}\n• [AI Code: ${aiCode}] ${aiReq}`;

  return {
    nlsCode,
    nlsRequirement: nlsReq,
    aiCode,
    aiRequirement: aiReq,
    digitalCompetency
  };
}

// =========================================================================
// MASTER RESOLVER CHO TIẾNG ANH THCS LỚP 6, 7, 8, 9
// =========================================================================
export function getEnglishSecondaryCurriculum(grade: string): RawSecondaryLesson[] {
  const g = parseInt(grade, 10) || 6;
  const lessonDefs: SecondaryEnglishLessonDef[] =
    g === 6
      ? SECONDARY_ENGLISH_GRADE_6_LESSONS
      : g === 7
      ? SECONDARY_ENGLISH_GRADE_7_LESSONS
      : g === 8
      ? SECONDARY_ENGLISH_GRADE_8_LESSONS
      : SECONDARY_ENGLISH_GRADE_9_LESSONS;

  return lessonDefs.map((def) => {
    const isTestOrExam =
      def.isTest ||
      def.unit.toLowerCase().includes('test') ||
      def.unit.toLowerCase().includes('exam') ||
      def.unit.toLowerCase().includes('reserve') ||
      def.lesson.toLowerCase().includes('test') ||
      def.lesson.toLowerCase().includes('exam') ||
      def.lesson.toLowerCase().includes('feedback') ||
      def.lesson.toLowerCase().includes('reserve') ||
      def.lesson.toLowerCase().includes('in reserve');

    const cleanTopic = isTestOrExam ? '' : def.unit;
    const comp = isTestOrExam
      ? { nlsCode: '', aiCode: '', digitalCompetency: '' }
      : getEnglishLessonNlsAndAi(g, def.lesson, cleanTopic, def.objectives);

    return {
      week: def.week,
      topic: cleanTopic,
      name: def.lesson,
      periods: 1,
      yccd: def.objectives,
      equipment: isTestOrExam ? '' : 'Audio CD/MP3 Global Success, Smart TV/Projector, Loudspeaker, Flashcards, LMS',
      location: isTestOrExam ? 'Classroom' : 'English Language Lab / Classroom',
      nlsCode: comp.nlsCode,
      aiCode: comp.aiCode,
      digitalCompetency: comp.digitalCompetency,
      notes: isTestOrExam ? 'Assessment (Test / Exam)' : ''
    };
  });
}
