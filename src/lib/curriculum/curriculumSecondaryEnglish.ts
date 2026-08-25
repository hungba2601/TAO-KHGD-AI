import { RawSecondaryLesson } from './curriculumSecondary';

export interface SecondaryEnglishLessonDef {
  week: number;
  period: number;
  unit: string;
  lesson: string;
  objectives: string;
  isTest?: boolean;
}

export const SECONDARY_ENGLISH_GRADE_6_LESSONS: SecondaryEnglishLessonDef[] = (() => {
  const u1Obj = `By the end of this unit, students will be able to:
- Use the words related to the topic My New School;
- use the combinations: to play, to do, to have, to study + Noun;
- pronounce the sounds /ɑ:/ and /ʌ/ correctly;
- use the present simple;
- use the adverbs of frequency;
- introduce someone to someone else;
- read for general and specific information about schools;
- talk about the type of school one would like to go to;
- listen for specific information about school activities;
- Write a paragraph about one’s school.`;

  const u2Obj = `By the end of this unit, students will be able to:
- use the words for types of house, rooms, and furniture;
- pronounce the final sounds /s/ and /z/ correctly;
- use possessive case to describe possession;
- use prepositions of place to describe where people or things are;
- give suggestions;
- read for specific information about rooms and furniture;
- describe houses, rooms, and furniture;
- listen for specific information about someone’s house;
- Write an email to a friend describing a house.`;

  const u3Obj = `By the end of this unit, students will be able to:
- use the words for body parts, appearance, and personality;
- pronounce the sounds /b/ and /p/ correctly;
- use the present continuous to talk about things happening now;
- ask about appearance and personality;
- read for specific information about friends and a summer camp;
- talk about friends and summer camps;
- listen for specific information about best friends;
- Write a diary entry about best friends.`;

  const rev1Obj = `By the end of this review, students will have revised the language they have learned and the skills they have practised in Units 1-3.`;
  const test1Obj = '';
  const fb1Obj = '';

  const u4Obj = `By the end of this unit, students will be able to:
- use the words for places in a neighbourhood;
- pronounce the sounds /ɪ/ and /i:/ correctly;
- compare two people or things using comparative adjectives;
- ask for and give directions to some places;
- read for specific information about a neighbourhood;
- talk about a neighbourhood;
- listen for specific information about a neighbourhood;
- Write a paragraph to describe a neighbourhood.`;

  const u5Obj = `By the end of this unit, students will be able to:
- use the words related to things in nature and travel items;
- pronounce the sounds /t/ and /d/ correctly;
- use countable and uncountable nouns;
- use the modal verb must / mustn’t to give orders;
- make and accept appointments;
- read for specific information about natural wonders;
- talk about famous places, and what you must / mustn’t do there;
- listen for specific information about a natural wonder;
- Write a paragraph about a natural wonder.`;

  const u6Obj = `By the end of this unit, students will be able to:
- use the words related to things and activities at Tet;
- pronounce the sounds /s/ and /∫/ correctly;
- use should / shouldn’t for advice;
- use some / any for amount;
- say New Year’s wishes;
- read for specific information about New Year’s practices;
- talk about what children should / shouldn’t do at Tet;
- listen for general and specific information about preparations for Tet;
- Write an email about what children should / shouldn’t do at Tet.`;

  const rev2Obj = `By the end of this review, students will have revised the language they have learned and the skills they have practised in Units 4-6.`;
  const term1ExamObj = '';
  const reserveObj = '';

  const u7Obj = `By the end of this unit, students will be able to:
- use the words related to TV programs and people;
- pronounce the sounds /θ/ and /ð/ correctly;
- use wh-question words to make questions;
- use conjunctions to connect clauses in compound sentences;
- ask for and give information about TV programs;
- read for general and specific information about a TV guide;
- talk about a favourite TV program;
- listen for specific information about different TV programs;
- Write a paragraph about TV-viewing habits.`;

  const u8Obj = `By the end of this unit, students will be able to:
- Use the words related to the topic Sports and Games;
- pronounce the sounds /e/ and /æ/ correctly;
- use the past simple;
- use imperatives to tell someone to do something;
- express and respond to congratulations;
- read for general and specific information about a sports star;
- talk about famous sportspeople;
- listen for general and specific information about sports and games;
- Write a paragraph about a sport/game.`;

  const u9Obj = `By the end of this unit, students will be able to:
- use the words related to cities and landmarks;
- pronounce the sounds /əʊ/ and /aʊ/ correctly;
- use possessive adjectives and possessive pronouns;
- express exclamations with What;
- read for general and specific information about a holiday postcard;
- talk about a city;
- listen for specific information about a description of a city;
- Write a holiday postcard.`;

  const rev3Obj = `By the end of this review, students will have revised the language they have learned and the skills they have practised in Units 7-9.`;
  const test2Obj = '';
  const fb2Obj = '';

  const u10Obj = `By the end of this unit, students will be able to:
- use the words related to types of houses and appliances in the house;
- pronounce the two-syllable words correctly;
- use future simple and might for future possibility;
- express surprise;
- read for specific information about houses and appliances in the future;
- talk about different houses in the future;
- listen for specific information about dream houses;
- Write a paragraph about a dream house.`;

  const u11Obj = `By the end of this unit, students will be able to:
- use the words for things that can be reduced, reused, and recycled;
- say sentences with correct rhythm;
- use the articles correctly;
- use the first conditional to talk about possibilities;
- give warnings;
- read for general and specific information about ways to go green at school;
- talk about tips for going green;
- listen for details about ideas for a green club;
- Write a paragraph about ideas for a green club.`;

  const u12Obj = `By the end of this unit, students will be able to:
- use the words for daily activities;
- say statements with correct tones;
- compare people and things using superlative adjectives;
- express agreement and disagreement about something;
- read for specific information about an international robot show;
- talk about what robots can do;
- listen for specific information about what robots can do;
- Write a paragraph about a robot one would like to have.`;

  const rev4Obj = `By the end of this review, Ss will have revised the language they have learned and the skills they have practised in Units 10-12.`;
  const term2ExamObj = '';

  return [
    // Week 1
    { week: 1, period: 1, unit: 'UNIT 1', lesson: 'Getting started', objectives: u1Obj },
    { week: 1, period: 2, unit: 'UNIT 1', lesson: 'A closer look 1', objectives: u1Obj },
    { week: 1, period: 3, unit: 'UNIT 1', lesson: 'A closer look 2', objectives: u1Obj },
    // Week 2
    { week: 2, period: 4, unit: 'UNIT 1', lesson: 'Communication', objectives: u1Obj },
    { week: 2, period: 5, unit: 'UNIT 1', lesson: 'Skills 1', objectives: u1Obj },
    { week: 2, period: 6, unit: 'UNIT 1', lesson: 'Skills 2', objectives: u1Obj },
    // Week 3
    { week: 3, period: 7, unit: 'UNIT 1', lesson: 'Looking back & Project', objectives: u1Obj },
    { week: 3, period: 8, unit: 'UNIT 2', lesson: 'Getting started', objectives: u2Obj },
    { week: 3, period: 9, unit: 'UNIT 2', lesson: 'A closer look 1', objectives: u2Obj },
    // Week 4
    { week: 4, period: 10, unit: 'UNIT 2', lesson: 'A closer look 2', objectives: u2Obj },
    { week: 4, period: 11, unit: 'UNIT 2', lesson: 'Communication', objectives: u2Obj },
    { week: 4, period: 12, unit: 'UNIT 2', lesson: 'Skills 1', objectives: u2Obj },
    // Week 5
    { week: 5, period: 13, unit: 'UNIT 2', lesson: 'Skills 2', objectives: u2Obj },
    { week: 5, period: 14, unit: 'UNIT 2', lesson: 'Looking back & Project', objectives: u2Obj },
    { week: 5, period: 15, unit: 'UNIT 3', lesson: 'Getting started', objectives: u3Obj },
    // Week 6
    { week: 6, period: 16, unit: 'UNIT 3', lesson: 'A closer look 1', objectives: u3Obj },
    { week: 6, period: 17, unit: 'UNIT 3', lesson: 'A closer look 2', objectives: u3Obj },
    { week: 6, period: 18, unit: 'UNIT 3', lesson: 'Communication', objectives: u3Obj },
    // Week 7
    { week: 7, period: 19, unit: 'UNIT 3', lesson: 'Skills 1', objectives: u3Obj },
    { week: 7, period: 20, unit: 'UNIT 3', lesson: 'Skills 2', objectives: u3Obj },
    { week: 7, period: 21, unit: 'UNIT 3', lesson: 'Looking back & Project', objectives: u3Obj },
    // Week 8
    { week: 8, period: 22, unit: 'REVIEW 1', lesson: 'Language', objectives: rev1Obj },
    { week: 8, period: 23, unit: 'REVIEW 1', lesson: 'Skills', objectives: rev1Obj },
    { week: 8, period: 24, unit: 'REVIEW 1', lesson: '45-minute test', objectives: test1Obj, isTest: true },
    // Week 9
    { week: 9, period: 25, unit: 'REVIEW 1', lesson: 'Feedback on 45-minute test', objectives: fb1Obj },
    { week: 9, period: 26, unit: 'UNIT 4', lesson: 'Getting started', objectives: u4Obj },
    { week: 9, period: 27, unit: 'UNIT 4', lesson: 'A closer look 1', objectives: u4Obj },
    // Week 10
    { week: 10, period: 28, unit: 'UNIT 4', lesson: 'A closer look 2', objectives: u4Obj },
    { week: 10, period: 29, unit: 'UNIT 4', lesson: 'Communication', objectives: u4Obj },
    { week: 10, period: 30, unit: 'UNIT 4', lesson: 'Skills 1', objectives: u4Obj },
    // Week 11
    { week: 11, period: 31, unit: 'UNIT 4', lesson: 'Skills 2', objectives: u4Obj },
    { week: 11, period: 32, unit: 'UNIT 4', lesson: 'Looking back & Project', objectives: u4Obj },
    { week: 11, period: 33, unit: 'UNIT 5', lesson: 'Getting started', objectives: u5Obj },
    // Week 12
    { week: 12, period: 34, unit: 'UNIT 5', lesson: 'A closer look 1', objectives: u5Obj },
    { week: 12, period: 35, unit: 'UNIT 5', lesson: 'A closer look 2', objectives: u5Obj },
    { week: 12, period: 36, unit: 'UNIT 5', lesson: 'Communication', objectives: u5Obj },
    // Week 13
    { week: 13, period: 37, unit: 'UNIT 5', lesson: 'Skills 1', objectives: u5Obj },
    { week: 13, period: 38, unit: 'UNIT 5', lesson: 'Skills 2', objectives: u5Obj },
    { week: 13, period: 39, unit: 'UNIT 5', lesson: 'Looking back & Project', objectives: u5Obj },
    // Week 14
    { week: 14, period: 40, unit: 'UNIT 6', lesson: 'Getting started', objectives: u6Obj },
    { week: 14, period: 41, unit: 'UNIT 6', lesson: 'A closer look 1', objectives: u6Obj },
    { week: 14, period: 42, unit: 'UNIT 6', lesson: 'A closer look 2', objectives: u6Obj },
    // Week 15
    { week: 15, period: 43, unit: 'UNIT 6', lesson: 'Communication', objectives: u6Obj },
    { week: 15, period: 44, unit: 'UNIT 6', lesson: 'Skills 1', objectives: u6Obj },
    { week: 15, period: 45, unit: 'UNIT 6', lesson: 'Skills 2', objectives: u6Obj },
    // Week 16
    { week: 16, period: 46, unit: 'UNIT 6', lesson: 'Looking back & Project', objectives: u6Obj },
    { week: 16, period: 47, unit: 'REVIEW 2', lesson: 'Language', objectives: rev2Obj },
    { week: 16, period: 48, unit: 'REVIEW 2', lesson: 'Skills', objectives: rev2Obj },
    // Week 17
    { week: 17, period: 49, unit: 'TERM 1 EXAM', lesson: '1st term exam', objectives: term1ExamObj, isTest: true },
    { week: 17, period: 50, unit: 'TERM 1 EXAM', lesson: '1st term exam (Speaking)', objectives: term1ExamObj, isTest: true },
    { week: 17, period: 51, unit: 'RESERVE', lesson: 'In reserve', objectives: reserveObj },
    // Week 18
    { week: 18, period: 52, unit: 'UNIT 7', lesson: 'Getting started', objectives: u7Obj },
    { week: 18, period: 53, unit: 'UNIT 7', lesson: 'A closer look 1', objectives: u7Obj },
    { week: 18, period: 54, unit: 'UNIT 7', lesson: 'A closer look 2', objectives: u7Obj },
    // Week 19
    { week: 19, period: 55, unit: 'UNIT 7', lesson: 'Communication', objectives: u7Obj },
    { week: 19, period: 56, unit: 'UNIT 7', lesson: 'Skills 1', objectives: u7Obj },
    { week: 19, period: 57, unit: 'UNIT 7', lesson: 'Skills 2', objectives: u7Obj },
    // Week 20
    { week: 20, period: 58, unit: 'UNIT 7', lesson: 'Looking back & Project', objectives: u7Obj },
    { week: 20, period: 59, unit: 'UNIT 8', lesson: 'Getting started', objectives: u8Obj },
    { week: 20, period: 60, unit: 'UNIT 8', lesson: 'A closer look 1', objectives: u8Obj },
    // Week 21
    { week: 21, period: 61, unit: 'UNIT 8', lesson: 'A closer look 2', objectives: u8Obj },
    { week: 21, period: 62, unit: 'UNIT 8', lesson: 'Communication', objectives: u8Obj },
    { week: 21, period: 63, unit: 'UNIT 8', lesson: 'Skills 1', objectives: u8Obj },
    // Week 22
    { week: 22, period: 64, unit: 'UNIT 8', lesson: 'Skills 2', objectives: u8Obj },
    { week: 22, period: 65, unit: 'UNIT 8', lesson: 'Looking back & Project', objectives: u8Obj },
    { week: 22, period: 66, unit: 'UNIT 9', lesson: 'Getting started', objectives: u9Obj },
    // Week 23
    { week: 23, period: 67, unit: 'UNIT 9', lesson: 'A closer look 1', objectives: u9Obj },
    { week: 23, period: 68, unit: 'UNIT 9', lesson: 'A closer look 2', objectives: u9Obj },
    { week: 23, period: 69, unit: 'UNIT 9', lesson: 'Communication', objectives: u9Obj },
    // Week 24
    { week: 24, period: 70, unit: 'UNIT 9', lesson: 'Skills 1', objectives: u9Obj },
    { week: 24, period: 71, unit: 'UNIT 9', lesson: 'Skills 2', objectives: u9Obj },
    { week: 24, period: 72, unit: 'UNIT 9', lesson: 'Looking back & Project', objectives: u9Obj },
    // Week 25
    { week: 25, period: 73, unit: 'REVIEW 3', lesson: 'Language', objectives: rev3Obj },
    { week: 25, period: 74, unit: 'REVIEW 3', lesson: 'Skills', objectives: rev3Obj },
    { week: 25, period: 75, unit: 'REVIEW 3', lesson: '45-minute test', objectives: test2Obj, isTest: true },
    // Week 26
    { week: 26, period: 76, unit: 'REVIEW 3', lesson: 'Feedback on 45-minute test', objectives: fb2Obj },
    { week: 26, period: 77, unit: 'UNIT 10', lesson: 'Getting started', objectives: u10Obj },
    { week: 26, period: 78, unit: 'UNIT 10', lesson: 'A closer look 1', objectives: u10Obj },
    // Week 27
    { week: 27, period: 79, unit: 'UNIT 10', lesson: 'A closer look 2', objectives: u10Obj },
    { week: 27, period: 80, unit: 'UNIT 10', lesson: 'Communication', objectives: u10Obj },
    { week: 27, period: 81, unit: 'UNIT 10', lesson: 'Skills 1', objectives: u10Obj },
    // Week 28
    { week: 28, period: 82, unit: 'UNIT 10', lesson: 'Skills 2', objectives: u10Obj },
    { week: 28, period: 83, unit: 'UNIT 10', lesson: 'Looking back & Project', objectives: u10Obj },
    { week: 28, period: 84, unit: 'UNIT 11', lesson: 'Getting started', objectives: u11Obj },
    // Week 29
    { week: 29, period: 85, unit: 'UNIT 11', lesson: 'A closer look 1', objectives: u11Obj },
    { week: 29, period: 86, unit: 'UNIT 11', lesson: 'A closer look 2', objectives: u11Obj },
    { week: 29, period: 87, unit: 'UNIT 11', lesson: 'Communication', objectives: u11Obj },
    // Week 30
    { week: 30, period: 88, unit: 'UNIT 11', lesson: 'Skills 1', objectives: u11Obj },
    { week: 30, period: 89, unit: 'UNIT 11', lesson: 'Skills 2', objectives: u11Obj },
    { week: 30, period: 90, unit: 'UNIT 11', lesson: 'Looking back & Project', objectives: u11Obj },
    // Week 31
    { week: 31, period: 91, unit: 'UNIT 12', lesson: 'Getting started', objectives: u12Obj },
    { week: 31, period: 92, unit: 'UNIT 12', lesson: 'A closer look 1', objectives: u12Obj },
    { week: 31, period: 93, unit: 'UNIT 12', lesson: 'A closer look 2', objectives: u12Obj },
    // Week 32
    { week: 32, period: 94, unit: 'UNIT 12', lesson: 'Communication', objectives: u12Obj },
    { week: 32, period: 95, unit: 'UNIT 12', lesson: 'Skills 1', objectives: u12Obj },
    { week: 32, period: 96, unit: 'UNIT 12', lesson: 'Skills 2', objectives: u12Obj },
    // Week 33
    { week: 33, period: 97, unit: 'UNIT 12', lesson: 'Looking back & Project', objectives: u12Obj },
    { week: 33, period: 98, unit: 'REVIEW 4', lesson: 'Language', objectives: rev4Obj },
    // Week 34
    { week: 34, period: 99, unit: 'REVIEW 4', lesson: 'Skills', objectives: rev4Obj },
    { week: 34, period: 100, unit: 'TERM 2 EXAM', lesson: '2nd term exam', objectives: term2ExamObj, isTest: true },
    { week: 34, period: 101, unit: 'TERM 2 EXAM', lesson: '2nd term exam (Speaking)', objectives: term2ExamObj, isTest: true },
    // Week 34 (period 102) & Week 35 (periods 103-105)
    { week: 34, period: 102, unit: 'RESERVE', lesson: 'In reserve', objectives: reserveObj },
    { week: 35, period: 103, unit: 'RESERVE', lesson: 'In reserve', objectives: reserveObj },
    { week: 35, period: 104, unit: 'RESERVE', lesson: 'In reserve', objectives: reserveObj },
    { week: 35, period: 105, unit: 'RESERVE', lesson: 'In reserve', objectives: reserveObj }
  ];
})();

export const SECONDARY_ENGLISH_GRADE_7_LESSONS: SecondaryEnglishLessonDef[] = (() => {
  const u1Obj = `By the end of this unit, students will be able to:
- Use the words related to hobbies and verbs of liking and disliking to talk about different hobbies;
- pronounce the sounds /ə/ and /ɜ: / correctly;
- use the present simple tense;
- talk about likes and dislikes;
- read for specific information about a hobby;
- talk about the benefits of hobbies;
- listen for specific information about one’s hobby;
- Write a paragraph about one’s hobby.`;

  const u2Obj = `By the end of this unit, students will be able to:
- use the words about healthy activities and health problems;
- pronounce the sounds /f/ and /v/ correctly;
- recognise and write simple sentences;
- ask for and give health tips;
- read for general and specific information about acne;
- talk about how to deal with some health problems;
- listen for specific information about healthy habits;
- Write a paragraph of some advice to avoid viruses.`;

  const u3Obj = `By the end of this unit, students will be able to:
- use the words related to community activities;
- pronounce the sounds /t/, /d/ and /ɪd/ correctly;
- use the past simple to talk about past activities;
- give compliments;
- read for specific information about community activities at a school;
- talk about the reasons why students join different community activities;
- listen for specific information about some community activities and their benefits;
- Write an email about the community activities you did last summer.`;

  const rev1Obj = `By the end of this review, students will have revised the language they have learnt and the skills they have practised in Units 1-3.`;
  const test1Obj = '';
  const fb1Obj = '';

  const u4Obj = `By the end of this unit, students will be able to:
- Use the words related to the topic Music and Arts;
- pronounce the sounds /ʃ/ and /ʒ/ correctly;
- use like, different from, (not) as ... as to compare people and things;
- express preferences;
- read for specific information about a traditional art form;
- talk about a musical performance at their school;
- listen for specific information about street painting;
- Write an informal letter of invitation.`;

  const u5Obj = `By the end of this unit, students will be able to:
- Use the words related to the topic Food and Drink;
- pronounce the sounds /ɒ/ and /ɔ:/ correctly;
- use some, a lot of, and lots of to talk about quantity;
- ask and answer about prices;
- read for general and specific information about a typical traditional food;
- talk about a popular food or drink;
- listen for specific information about eating habits;
- Write a paragraph describing eating habits.`;

  const u6Obj = `By the end of this unit, students will be able to:
- Use the words related to the topic A Visit to a School;
- pronounce the sounds /tʃ/ and /dʒ/ correctly;
- use the prepositions of time and place;
- ask for details;
- read for specific information about a famous school;
- talk about one’s school;
- listen for general and specific information about school activities;
- Write a paragraph about an outdoor activity at one’s school.`;

  const rev2Obj = `By the end of this review, students will have revised the language they have learnt and the skills they have practised in Units 4-6.`;
  const term1ExamObj = '';
  const reserveObj = '';

  const u7Obj = `By the end of this unit, students will be able to:
- Use the words related to the topic Traffic;
- pronounce the sounds /aɪ/ and /eɪ/ correctly;
- use it to indicate distance;
- use should / shouldn’t;
- ask and answer questions about means of transport;
- read for general and specific information about traffic rules;
- talk about obeying traffic rules;
- listen for general and specific information about traffic problems in a city;
- Write a paragraph about traffic problems.`;

  const u8Obj = `By the end of this unit, students will be able to:
- Use the words related to the topic Films;
- pronounce the sounds /ɪə/ and /eə/ correctly;
- Use " although / though to express contrasting ideas between two pieces of information in the same sentence;
- use however to contrast ideas in two sentences;
- accept and decline suggestions;
- read for specific information about a film review;
- talk about a film;
- listen for specific information about a film;
- Write a paragraph about one’s favourite film.`;

  const u9Obj = `By the end of this unit, students will be able to:
- use the words related to types of festivals and festival activities;
- pronounce two-syllable words with correct stress;
- use Yes / No questions;
- express disappointment;
- read for specific information about an unusual festival;
- talk about a festival that someone joined;
- listen for specific information about a festival;
- Write an email to describe a festival.`;

  const rev3Obj = `By the end of this review, students will have revised the language they have learnt and the skills they have practised in Units 7-9.`;
  const test2Obj = '';
  const fb2Obj = '';

  const u10Obj = `By the end of this unit, students will be able to:
- use the words related to types of energy sources;
- pronounce three-syllable words with correct stress;
- use the present continuous;
- ask for explanations;
- read for specific information about types of energy sources;
- talk about the advantages and disadvantages of different energy sources;
- listen for specific information about how to save energy at home;
- Write a paragraph about how to save energy at home.`;

  const u11Obj = `By the end of this unit, students will be able to:
- use the words related to future means of transport;
- say sentences with correct stress;
- Use the future simple to talk about future activities and make predictions;
- use possessive pronouns correctly;
- make predictions;
- read for general and specific information about cars;
- talk about why a means of transport will / won’t be popular;
- listen for general and specific information about some future means of transport;
- Write a paragraph about the advantages of a future means of transport.`;

  const u12Obj = `By the end of this unit, students will be able to:
- use words about the people and places in English-speaking countries;
- ask questions with the correct rising and falling intonation;
- use articles correctly;
- express amazement;
- read for specific information about New Zealand;
- talk about Scotland;
- listen for specific information about a tour of a city;
- Write a diary entry about a tour of a city.`;

  const rev4Obj = `By the end of this review, Ss will have revised the language they have learnt and the skills they have practised in Units 10-12.`;
  const term2ExamObj = '';

  return [
    // Week 1
    { week: 1, period: 1, unit: 'UNIT 1', lesson: 'Getting started', objectives: u1Obj },
    { week: 1, period: 2, unit: 'UNIT 1', lesson: 'A closer look 1', objectives: u1Obj },
    { week: 1, period: 3, unit: 'UNIT 1', lesson: 'A closer look 2', objectives: u1Obj },
    // Week 2
    { week: 2, period: 4, unit: 'UNIT 1', lesson: 'Communication', objectives: u1Obj },
    { week: 2, period: 5, unit: 'UNIT 1', lesson: 'Skills 1', objectives: u1Obj },
    { week: 2, period: 6, unit: 'UNIT 1', lesson: 'Skills 2', objectives: u1Obj },
    // Week 3
    { week: 3, period: 7, unit: 'UNIT 1', lesson: 'Looking back & Project', objectives: u1Obj },
    { week: 3, period: 8, unit: 'UNIT 2', lesson: 'Getting started', objectives: u2Obj },
    { week: 3, period: 9, unit: 'UNIT 2', lesson: 'A closer look 1', objectives: u2Obj },
    // Week 4
    { week: 4, period: 10, unit: 'UNIT 2', lesson: 'A closer look 2', objectives: u2Obj },
    { week: 4, period: 11, unit: 'UNIT 2', lesson: 'Communication', objectives: u2Obj },
    { week: 4, period: 12, unit: 'UNIT 2', lesson: 'Skills 1', objectives: u2Obj },
    // Week 5
    { week: 5, period: 13, unit: 'UNIT 2', lesson: 'Skills 2', objectives: u2Obj },
    { week: 5, period: 14, unit: 'UNIT 2', lesson: 'Looking back & Project', objectives: u2Obj },
    { week: 5, period: 15, unit: 'UNIT 3', lesson: 'Getting started', objectives: u3Obj },
    // Week 6
    { week: 6, period: 16, unit: 'UNIT 3', lesson: 'A closer look 1', objectives: u3Obj },
    { week: 6, period: 17, unit: 'UNIT 3', lesson: 'A closer look 2', objectives: u3Obj },
    { week: 6, period: 18, unit: 'UNIT 3', lesson: 'Communication', objectives: u3Obj },
    // Week 7
    { week: 7, period: 19, unit: 'UNIT 3', lesson: 'Skills 1', objectives: u3Obj },
    { week: 7, period: 20, unit: 'UNIT 3', lesson: 'Skills 2', objectives: u3Obj },
    { week: 7, period: 21, unit: 'UNIT 3', lesson: 'Looking back & Project', objectives: u3Obj },
    // Week 8
    { week: 8, period: 22, unit: 'REVIEW 1', lesson: 'Language', objectives: rev1Obj },
    { week: 8, period: 23, unit: 'REVIEW 1', lesson: 'Skills', objectives: rev1Obj },
    { week: 8, period: 24, unit: 'REVIEW 1', lesson: '45-minute test', objectives: test1Obj, isTest: true },
    // Week 9
    { week: 9, period: 25, unit: 'REVIEW 1', lesson: 'Feedback on 45-minute test', objectives: fb1Obj },
    { week: 9, period: 26, unit: 'UNIT 4', lesson: 'Getting started', objectives: u4Obj },
    { week: 9, period: 27, unit: 'UNIT 4', lesson: 'A closer look 1', objectives: u4Obj },
    // Week 10
    { week: 10, period: 28, unit: 'UNIT 4', lesson: 'A closer look 2', objectives: u4Obj },
    { week: 10, period: 29, unit: 'UNIT 4', lesson: 'Communication', objectives: u4Obj },
    { week: 10, period: 30, unit: 'UNIT 4', lesson: 'Skills 1', objectives: u4Obj },
    // Week 11
    { week: 11, period: 31, unit: 'UNIT 4', lesson: 'Skills 2', objectives: u4Obj },
    { week: 11, period: 32, unit: 'UNIT 4', lesson: 'Looking back & Project', objectives: u4Obj },
    { week: 11, period: 33, unit: 'UNIT 5', lesson: 'Getting started', objectives: u5Obj },
    // Week 12
    { week: 12, period: 34, unit: 'UNIT 5', lesson: 'A closer look 1', objectives: u5Obj },
    { week: 12, period: 35, unit: 'UNIT 5', lesson: 'A closer look 2', objectives: u5Obj },
    { week: 12, period: 36, unit: 'UNIT 5', lesson: 'Communication', objectives: u5Obj },
    // Week 13
    { week: 13, period: 37, unit: 'UNIT 5', lesson: 'Skills 1', objectives: u5Obj },
    { week: 13, period: 38, unit: 'UNIT 5', lesson: 'Skills 2', objectives: u5Obj },
    { week: 13, period: 39, unit: 'UNIT 5', lesson: 'Looking back & Project', objectives: u5Obj },
    // Week 14
    { week: 14, period: 40, unit: 'UNIT 6', lesson: 'Getting started', objectives: u6Obj },
    { week: 14, period: 41, unit: 'UNIT 6', lesson: 'A closer look 1', objectives: u6Obj },
    { week: 14, period: 42, unit: 'UNIT 6', lesson: 'A closer look 2', objectives: u6Obj },
    // Week 15
    { week: 15, period: 43, unit: 'UNIT 6', lesson: 'Communication', objectives: u6Obj },
    { week: 15, period: 44, unit: 'UNIT 6', lesson: 'Skills 1', objectives: u6Obj },
    { week: 15, period: 45, unit: 'UNIT 6', lesson: 'Skills 2', objectives: u6Obj },
    // Week 16
    { week: 16, period: 46, unit: 'UNIT 6', lesson: 'Looking back & Project', objectives: u6Obj },
    { week: 16, period: 47, unit: 'REVIEW 2', lesson: 'Language', objectives: rev2Obj },
    { week: 16, period: 48, unit: 'REVIEW 2', lesson: 'Skills', objectives: rev2Obj },
    // Week 17
    { week: 17, period: 49, unit: 'TERM 1 EXAM', lesson: '1st term exam', objectives: term1ExamObj, isTest: true },
    { week: 17, period: 50, unit: 'TERM 1 EXAM', lesson: '1st term exam (Speaking)', objectives: term1ExamObj, isTest: true },
    { week: 17, period: 51, unit: 'RESERVE', lesson: 'In reserve', objectives: reserveObj },
    // Week 18
    { week: 18, period: 52, unit: 'UNIT 7', lesson: 'Getting started', objectives: u7Obj },
    { week: 18, period: 53, unit: 'UNIT 7', lesson: 'A closer look 1', objectives: u7Obj },
    { week: 18, period: 54, unit: 'UNIT 7', lesson: 'A closer look 2', objectives: u7Obj },
    // Week 19
    { week: 19, period: 55, unit: 'UNIT 7', lesson: 'Communication', objectives: u7Obj },
    { week: 19, period: 56, unit: 'UNIT 7', lesson: 'Skills 1', objectives: u7Obj },
    { week: 19, period: 57, unit: 'UNIT 7', lesson: 'Skills 2', objectives: u7Obj },
    // Week 20
    { week: 20, period: 58, unit: 'UNIT 7', lesson: 'Looking back & Project', objectives: u7Obj },
    { week: 20, period: 59, unit: 'UNIT 8', lesson: 'Getting started', objectives: u8Obj },
    { week: 20, period: 60, unit: 'UNIT 8', lesson: 'A closer look 1', objectives: u8Obj },
    // Week 21
    { week: 21, period: 61, unit: 'UNIT 8', lesson: 'A closer look 2', objectives: u8Obj },
    { week: 21, period: 62, unit: 'UNIT 8', lesson: 'Communication', objectives: u8Obj },
    { week: 21, period: 63, unit: 'UNIT 8', lesson: 'Skills 1', objectives: u8Obj },
    // Week 22
    { week: 22, period: 64, unit: 'UNIT 8', lesson: 'Skills 2', objectives: u8Obj },
    { week: 22, period: 65, unit: 'UNIT 8', lesson: 'Looking back & Project', objectives: u8Obj },
    { week: 22, period: 66, unit: 'UNIT 9', lesson: 'Getting started', objectives: u9Obj },
    // Week 23
    { week: 23, period: 67, unit: 'UNIT 9', lesson: 'A closer look 1', objectives: u9Obj },
    { week: 23, period: 68, unit: 'UNIT 9', lesson: 'A closer look 2', objectives: u9Obj },
    { week: 23, period: 69, unit: 'UNIT 9', lesson: 'Communication', objectives: u9Obj },
    // Week 24
    { week: 24, period: 70, unit: 'UNIT 9', lesson: 'Skills 1', objectives: u9Obj },
    { week: 24, period: 71, unit: 'UNIT 9', lesson: 'Skills 2', objectives: u9Obj },
    { week: 24, period: 72, unit: 'UNIT 9', lesson: 'Looking back & Project', objectives: u9Obj },
    // Week 25
    { week: 25, period: 73, unit: 'REVIEW 3', lesson: 'Language', objectives: rev3Obj },
    { week: 25, period: 74, unit: 'REVIEW 3', lesson: 'Skills', objectives: rev3Obj },
    { week: 25, period: 75, unit: 'REVIEW 3', lesson: '45-minute test', objectives: test2Obj, isTest: true },
    // Week 26
    { week: 26, period: 76, unit: 'REVIEW 3', lesson: 'Feedback on 45-minute test', objectives: fb2Obj },
    { week: 26, period: 77, unit: 'UNIT 10', lesson: 'Getting started', objectives: u10Obj },
    { week: 26, period: 78, unit: 'UNIT 10', lesson: 'A closer look 1', objectives: u10Obj },
    // Week 27
    { week: 27, period: 79, unit: 'UNIT 10', lesson: 'A closer look 2', objectives: u10Obj },
    { week: 27, period: 80, unit: 'UNIT 10', lesson: 'Communication', objectives: u10Obj },
    { week: 27, period: 81, unit: 'UNIT 10', lesson: 'Skills 1', objectives: u10Obj },
    // Week 28
    { week: 28, period: 82, unit: 'UNIT 10', lesson: 'Skills 2', objectives: u10Obj },
    { week: 28, period: 83, unit: 'UNIT 10', lesson: 'Looking back & Project', objectives: u10Obj },
    { week: 28, period: 84, unit: 'UNIT 11', lesson: 'Getting started', objectives: u11Obj },
    // Week 29
    { week: 29, period: 85, unit: 'UNIT 11', lesson: 'A closer look 1', objectives: u11Obj },
    { week: 29, period: 86, unit: 'UNIT 11', lesson: 'A closer look 2', objectives: u11Obj },
    { week: 29, period: 87, unit: 'UNIT 11', lesson: 'Communication', objectives: u11Obj },
    // Week 30
    { week: 30, period: 88, unit: 'UNIT 11', lesson: 'Skills 1', objectives: u11Obj },
    { week: 30, period: 89, unit: 'UNIT 11', lesson: 'Skills 2', objectives: u11Obj },
    { week: 30, period: 90, unit: 'UNIT 11', lesson: 'Looking back & Project', objectives: u11Obj },
    // Week 31
    { week: 31, period: 91, unit: 'UNIT 12', lesson: 'Getting started', objectives: u12Obj },
    { week: 31, period: 92, unit: 'UNIT 12', lesson: 'A closer look 1', objectives: u12Obj },
    { week: 31, period: 93, unit: 'UNIT 12', lesson: 'A closer look 2', objectives: u12Obj },
    // Week 32
    { week: 32, period: 94, unit: 'UNIT 12', lesson: 'Communication', objectives: u12Obj },
    { week: 32, period: 95, unit: 'UNIT 12', lesson: 'Skills 1', objectives: u12Obj },
    { week: 32, period: 96, unit: 'UNIT 12', lesson: 'Skills 2', objectives: u12Obj },
    // Week 33
    { week: 33, period: 97, unit: 'UNIT 12', lesson: 'Looking back & Project', objectives: u12Obj },
    { week: 33, period: 98, unit: 'REVIEW 4', lesson: 'Language', objectives: rev4Obj },
    // Week 34
    { week: 34, period: 99, unit: 'REVIEW 4', lesson: 'Skills', objectives: rev4Obj },
    { week: 34, period: 100, unit: 'TERM 2 EXAM', lesson: '2nd term exam', objectives: term2ExamObj, isTest: true },
    { week: 34, period: 101, unit: 'TERM 2 EXAM', lesson: '2nd term exam (Speaking)', objectives: term2ExamObj, isTest: true },
    // Week 34 (period 102) & Week 35 (periods 103-105)
    { week: 34, period: 102, unit: 'RESERVE', lesson: 'In reserve', objectives: reserveObj },
    { week: 35, period: 103, unit: 'RESERVE', lesson: 'In reserve', objectives: reserveObj },
    { week: 35, period: 104, unit: 'RESERVE', lesson: 'In reserve', objectives: reserveObj },
    { week: 35, period: 105, unit: 'RESERVE', lesson: 'In reserve', objectives: reserveObj }
  ];
})();

export const SECONDARY_ENGLISH_GRADE_8_LESSONS: SecondaryEnglishLessonDef[] = (() => {
  const u1Obj = `By the end of this unit, students will be able to:
- use the words related to leisure activities and expressions about likes and dislikes;
- pronounce the sounds /Ʊ/ and /u:/ correctly in words and sentences;
- use verbs of liking/disliking followed by gerunds and/or to-infinitives to talk about likes and dislikes;
- invite and accept invitations;
- read for general and specific information about leisure activities with family;
- talk about leisure activities with family;
- listen for specific information about leisure activities with friends;
- write an email about leisure activities with friends.`;

  const u2Obj = `By the end of this unit, students will be able to:
- use the words related to life in the countryside;
- pronounce the sounds /ə/ and /ɪ/ correctly in words and sentences;
- use comparative forms of adverbs;
- give and respond to compliments;
- read for specific information about different aspects of a Vietnamese village;
- talk about the village or town where someone lives;
- listen for specific information about someone’s opinion about life in the countryside;
- write a paragraph about what someone likes or dislikes about life in the countryside.`;

  const u3Obj = `By the end of this unit, students will be able to:
- use the words related to teen school clubs, teens’ use of social media, and teen stress;
- pronounce the sounds /ʊə/ and /ɔɪ/ correctly in words and sentences;
- use simple sentences and compound sentences;
- make requests;
- read for general and specific information about school club activities;
- ask and answer questions about school clubs;
- listen for general and specific information about teen stress;
- write a paragraph about the cause(s) of one’s stress and solutions to deal with it.`;

  const rev1Obj = `By the end of this review, students will have revised the language they have learnt and the skills they have practised in Units 1-3.`;
  const test1Obj = '';
  const fb1Obj = '';

  const u4Obj = `By the end of this unit, students will be able to:
- use the words related to the lifestyle of ethnic groups;
- pronounce the sounds /k/ and /g/ correctly in words and sentences;
- recognise and use Yes / No questions and Wh-questions, and countable and uncountable nouns;
- give opinions;
- read for specific information about stilt houses;
- talk about the type of home they live in;
- listen for specific information about the life of minority children;
- write a paragraph about the things they do to help their family.`;

  const u5Obj = `By the end of this unit, students will be able to:
- use the words and expressions related to customs and traditions;
- pronounce the sounds /n/ and /ŋ/ correctly in words and sentences;
- recognise and use the zero article;
- give advice;
- read for general and specific information about a local festival;
- talk about a normal family event that they take part in;
- listen for specific information about a festival;
- write an email to advise on taking part in a festival.`;

  const u6Obj = `By the end of this unit, students will be able to:
- use the words related to the topic Lifestyles;
- pronounce the sounds /br/ and /pr/ correctly in words and sentences;
- use the future simple and the first conditional;
- express certainty;
- read for specific information about an interesting lifestyle and ways to maintain a traditional lifestyle;
- talk about maintaining traditional lifestyles;
- listen for general and specific information about the impact of modern technology on lifestyles;
- write a paragraph about the advantages or disadvantages of online learning.`;

  const rev2Obj = `By the end of this review, students will have revised the language they have learnt and the skills they have practised in Units 4-6.`;
  const term1ExamObj = '';
  const reserveObj = '';

  const u7Obj = `By the end of this unit, students will be able to:
- use the words related to the topic Environmental protection;
- pronounce the sounds /bl/ and /kl/ correctly in words and sentences;
- use complex sentences with adverb clauses of time;
- ask for clarification;
- read for general and specific information about Con Dao National Park;
- talk about Vu Quang National Park;
- listen for general and specific information about water pollution;
- write a notice.`;

  const u8Obj = `By the end of this unit, students will be able to:
- use the words related to shopping;
- pronounce the sounds /sp/ and /st/ correctly in words and sentences;
- recognise and use adverbs of frequency and the present simple for future events;
- make complaints;
- read for specific information about the reasons people go to shopping centres;
- talk about a shopping place;
- listen to a talk for general and specific information about online shopping;
- write a paragraph about the advantages and disadvantages of a type of shopping.`;

  const u9Obj = `By the end of this unit, students will be able to:
- use the words related to types of natural disasters and words describing natural disasters;
- pronounce the words ending in -al and -ous with correct stress;
- use the past continuous;
- give and respond to bad news;
- read for specific information about natural disasters;
- talk about a natural disaster;
- listen for specific information about things to do before, during, and after a natural disaster;
- write instructions about things to do before, during, and after a natural disaster.`;

  const rev3Obj = `By the end of this review, students will have revised the language they have learnt and the skills they have practised in Units 7-9.`;
  const test2Obj = '';
  const fb2Obj = '';

  const u10Obj = `By the end of this unit, students will be able to:
- use the words related to communication technology;
- pronounce words ending in -ese and -ee with correct stress;
- recognise and use prepositions of place and time and possessive pronouns;
- interrupt politely;
- read for general and specific information about a way of communicating in the future;
- talk about the advantages and disadvantages of a way of communicating;
- listen for general and specific information about a communication exhibition;
- write a paragraph to describe a way of modern communication.`;

  const u11Obj = `By the end of this unit, students will be able to:
- use the words related to science and technology in the future;
- say sentences with correct stress;
- use reported speech for statements;
- give and respond to good news;
- read advertisements for specific information about new technologies;
- talk about a technology or an invention;
- listen for specific information about a robot teacher;
- write an opinion paragraph about whether robots will replace teachers at school.`;

  const u12Obj = `By the end of this unit, students will be able to:
- use the words related to the topic Life on other planets;
- use intonation for making lists correctly;
- use reported speech to report questions;
- express uncertainty;
- read for specific information about the possibility of life on other planets;
- talk about the conditions needed for planets to support human life;
- listen for specific information about an imaginary planet and its creatures;
- write a paragraph to describe imaginary creatures living on another planet.`;

  const rev4Obj = `By the end of this review, Ss will have revised the language they have learnt and the skills they have practised in Units 10-12.`;
  const term2ExamObj = '';

  return [
    // Week 1
    { week: 1, period: 1, unit: 'UNIT 1', lesson: 'Getting started', objectives: u1Obj },
    { week: 1, period: 2, unit: 'UNIT 1', lesson: 'A closer look 1', objectives: u1Obj },
    { week: 1, period: 3, unit: 'UNIT 1', lesson: 'A closer look 2', objectives: u1Obj },
    // Week 2
    { week: 2, period: 4, unit: 'UNIT 1', lesson: 'Communication', objectives: u1Obj },
    { week: 2, period: 5, unit: 'UNIT 1', lesson: 'Skills 1', objectives: u1Obj },
    { week: 2, period: 6, unit: 'UNIT 1', lesson: 'Skills 2', objectives: u1Obj },
    // Week 3
    { week: 3, period: 7, unit: 'UNIT 1', lesson: 'Looking back & Project', objectives: u1Obj },
    { week: 3, period: 8, unit: 'UNIT 2', lesson: 'Getting started', objectives: u2Obj },
    { week: 3, period: 9, unit: 'UNIT 2', lesson: 'A closer look 1', objectives: u2Obj },
    // Week 4
    { week: 4, period: 10, unit: 'UNIT 2', lesson: 'A closer look 2', objectives: u2Obj },
    { week: 4, period: 11, unit: 'UNIT 2', lesson: 'Communication', objectives: u2Obj },
    { week: 4, period: 12, unit: 'UNIT 2', lesson: 'Skills 1', objectives: u2Obj },
    // Week 5
    { week: 5, period: 13, unit: 'UNIT 2', lesson: 'Skills 2', objectives: u2Obj },
    { week: 5, period: 14, unit: 'UNIT 2', lesson: 'Looking back & Project', objectives: u2Obj },
    { week: 5, period: 15, unit: 'UNIT 3', lesson: 'Getting started', objectives: u3Obj },
    // Week 6
    { week: 6, period: 16, unit: 'UNIT 3', lesson: 'A closer look 1', objectives: u3Obj },
    { week: 6, period: 17, unit: 'UNIT 3', lesson: 'A closer look 2', objectives: u3Obj },
    { week: 6, period: 18, unit: 'UNIT 3', lesson: 'Communication', objectives: u3Obj },
    // Week 7
    { week: 7, period: 19, unit: 'UNIT 3', lesson: 'Skills 1', objectives: u3Obj },
    { week: 7, period: 20, unit: 'UNIT 3', lesson: 'Skills 2', objectives: u3Obj },
    { week: 7, period: 21, unit: 'UNIT 3', lesson: 'Looking back & Project', objectives: u3Obj },
    // Week 8
    { week: 8, period: 22, unit: 'REVIEW 1', lesson: 'Language', objectives: rev1Obj },
    { week: 8, period: 23, unit: 'REVIEW 1', lesson: 'Skills', objectives: rev1Obj },
    { week: 8, period: 24, unit: 'REVIEW 1', lesson: '45-minute test', objectives: test1Obj, isTest: true },
    // Week 9
    { week: 9, period: 25, unit: 'REVIEW 1', lesson: 'Feedback on 45-minute test', objectives: fb1Obj },
    { week: 9, period: 26, unit: 'UNIT 4', lesson: 'Getting started', objectives: u4Obj },
    { week: 9, period: 27, unit: 'UNIT 4', lesson: 'A closer look 1', objectives: u4Obj },
    // Week 10
    { week: 10, period: 28, unit: 'UNIT 4', lesson: 'A closer look 2', objectives: u4Obj },
    { week: 10, period: 29, unit: 'UNIT 4', lesson: 'Communication', objectives: u4Obj },
    { week: 10, period: 30, unit: 'UNIT 4', lesson: 'Skills 1', objectives: u4Obj },
    // Week 11
    { week: 11, period: 31, unit: 'UNIT 4', lesson: 'Skills 2', objectives: u4Obj },
    { week: 11, period: 32, unit: 'UNIT 4', lesson: 'Looking back & Project', objectives: u4Obj },
    { week: 11, period: 33, unit: 'UNIT 5', lesson: 'Getting started', objectives: u5Obj },
    // Week 12
    { week: 12, period: 34, unit: 'UNIT 5', lesson: 'A closer look 1', objectives: u5Obj },
    { week: 12, period: 35, unit: 'UNIT 5', lesson: 'A closer look 2', objectives: u5Obj },
    { week: 12, period: 36, unit: 'UNIT 5', lesson: 'Communication', objectives: u5Obj },
    // Week 13
    { week: 13, period: 37, unit: 'UNIT 5', lesson: 'Skills 1', objectives: u5Obj },
    { week: 13, period: 38, unit: 'UNIT 5', lesson: 'Skills 2', objectives: u5Obj },
    { week: 13, period: 39, unit: 'UNIT 5', lesson: 'Looking back & Project', objectives: u5Obj },
    // Week 14
    { week: 14, period: 40, unit: 'UNIT 6', lesson: 'Getting started', objectives: u6Obj },
    { week: 14, period: 41, unit: 'UNIT 6', lesson: 'A closer look 1', objectives: u6Obj },
    { week: 14, period: 42, unit: 'UNIT 6', lesson: 'A closer look 2', objectives: u6Obj },
    // Week 15
    { week: 15, period: 43, unit: 'UNIT 6', lesson: 'Communication', objectives: u6Obj },
    { week: 15, period: 44, unit: 'UNIT 6', lesson: 'Skills 1', objectives: u6Obj },
    { week: 15, period: 45, unit: 'UNIT 6', lesson: 'Skills 2', objectives: u6Obj },
    // Week 16
    { week: 16, period: 46, unit: 'UNIT 6', lesson: 'Looking back & Project', objectives: u6Obj },
    { week: 16, period: 47, unit: 'REVIEW 2', lesson: 'Language', objectives: rev2Obj },
    { week: 16, period: 48, unit: 'REVIEW 2', lesson: 'Skills', objectives: rev2Obj },
    // Week 17
    { week: 17, period: 49, unit: 'TERM 1 EXAM', lesson: '1st term exam', objectives: term1ExamObj, isTest: true },
    { week: 17, period: 50, unit: 'TERM 1 EXAM', lesson: '1st term exam (Speaking)', objectives: term1ExamObj, isTest: true },
    { week: 17, period: 51, unit: 'RESERVE', lesson: 'In reserve', objectives: reserveObj },
    // Week 18
    { week: 18, period: 52, unit: 'UNIT 7', lesson: 'Getting started', objectives: u7Obj },
    { week: 18, period: 53, unit: 'UNIT 7', lesson: 'A closer look 1', objectives: u7Obj },
    { week: 18, period: 54, unit: 'UNIT 7', lesson: 'A closer look 2', objectives: u7Obj },
    // Week 19
    { week: 19, period: 55, unit: 'UNIT 7', lesson: 'Communication', objectives: u7Obj },
    { week: 19, period: 56, unit: 'UNIT 7', lesson: 'Skills 1', objectives: u7Obj },
    { week: 19, period: 57, unit: 'UNIT 7', lesson: 'Skills 2', objectives: u7Obj },
    // Week 20
    { week: 20, period: 58, unit: 'UNIT 7', lesson: 'Looking back & Project', objectives: u7Obj },
    { week: 20, period: 59, unit: 'UNIT 8', lesson: 'Getting started', objectives: u8Obj },
    { week: 20, period: 60, unit: 'UNIT 8', lesson: 'A closer look 1', objectives: u8Obj },
    // Week 21
    { week: 21, period: 61, unit: 'UNIT 8', lesson: 'A closer look 2', objectives: u8Obj },
    { week: 21, period: 62, unit: 'UNIT 8', lesson: 'Communication', objectives: u8Obj },
    { week: 21, period: 63, unit: 'UNIT 8', lesson: 'Skills 1', objectives: u8Obj },
    // Week 22
    { week: 22, period: 64, unit: 'UNIT 8', lesson: 'Skills 2', objectives: u8Obj },
    { week: 22, period: 65, unit: 'UNIT 8', lesson: 'Looking back & Project', objectives: u8Obj },
    { week: 22, period: 66, unit: 'UNIT 9', lesson: 'Getting started', objectives: u9Obj },
    // Week 23
    { week: 23, period: 67, unit: 'UNIT 9', lesson: 'A closer look 1', objectives: u9Obj },
    { week: 23, period: 68, unit: 'UNIT 9', lesson: 'A closer look 2', objectives: u9Obj },
    { week: 23, period: 69, unit: 'UNIT 9', lesson: 'Communication', objectives: u9Obj },
    // Week 24
    { week: 24, period: 70, unit: 'UNIT 9', lesson: 'Skills 1', objectives: u9Obj },
    { week: 24, period: 71, unit: 'UNIT 9', lesson: 'Skills 2', objectives: u9Obj },
    { week: 24, period: 72, unit: 'UNIT 9', lesson: 'Looking back & Project', objectives: u9Obj },
    // Week 25
    { week: 25, period: 73, unit: 'REVIEW 3', lesson: 'Language', objectives: rev3Obj },
    { week: 25, period: 74, unit: 'REVIEW 3', lesson: 'Skills', objectives: rev3Obj },
    { week: 25, period: 75, unit: 'REVIEW 3', lesson: '45-minute test', objectives: test2Obj, isTest: true },
    // Week 26
    { week: 26, period: 76, unit: 'REVIEW 3', lesson: 'Feedback on 45-minute test', objectives: fb2Obj },
    { week: 26, period: 77, unit: 'UNIT 10', lesson: 'Getting started', objectives: u10Obj },
    { week: 26, period: 78, unit: 'UNIT 10', lesson: 'A closer look 1', objectives: u10Obj },
    // Week 27
    { week: 27, period: 79, unit: 'UNIT 10', lesson: 'A closer look 2', objectives: u10Obj },
    { week: 27, period: 80, unit: 'UNIT 10', lesson: 'Communication', objectives: u10Obj },
    { week: 27, period: 81, unit: 'UNIT 10', lesson: 'Skills 1', objectives: u10Obj },
    // Week 28
    { week: 28, period: 82, unit: 'UNIT 10', lesson: 'Skills 2', objectives: u10Obj },
    { week: 28, period: 83, unit: 'UNIT 10', lesson: 'Looking back & Project', objectives: u10Obj },
    { week: 28, period: 84, unit: 'UNIT 11', lesson: 'Getting started', objectives: u11Obj },
    // Week 29
    { week: 29, period: 85, unit: 'UNIT 11', lesson: 'A closer look 1', objectives: u11Obj },
    { week: 29, period: 86, unit: 'UNIT 11', lesson: 'A closer look 2', objectives: u11Obj },
    { week: 29, period: 87, unit: 'UNIT 11', lesson: 'Communication', objectives: u11Obj },
    // Week 30
    { week: 30, period: 88, unit: 'UNIT 11', lesson: 'Skills 1', objectives: u11Obj },
    { week: 30, period: 89, unit: 'UNIT 11', lesson: 'Skills 2', objectives: u11Obj },
    { week: 30, period: 90, unit: 'UNIT 11', lesson: 'Looking back & Project', objectives: u11Obj },
    // Week 31
    { week: 31, period: 91, unit: 'UNIT 12', lesson: 'Getting started', objectives: u12Obj },
    { week: 31, period: 92, unit: 'UNIT 12', lesson: 'A closer look 1', objectives: u12Obj },
    { week: 31, period: 93, unit: 'UNIT 12', lesson: 'A closer look 2', objectives: u12Obj },
    // Week 32
    { week: 32, period: 94, unit: 'UNIT 12', lesson: 'Communication', objectives: u12Obj },
    { week: 32, period: 95, unit: 'UNIT 12', lesson: 'Skills 1', objectives: u12Obj },
    { week: 32, period: 96, unit: 'UNIT 12', lesson: 'Skills 2', objectives: u12Obj },
    // Week 33
    { week: 33, period: 97, unit: 'UNIT 12', lesson: 'Looking back & Project', objectives: u12Obj },
    { week: 33, period: 98, unit: 'REVIEW 4', lesson: 'Language', objectives: rev4Obj },
    // Week 34
    { week: 34, period: 99, unit: 'REVIEW 4', lesson: 'Skills', objectives: rev4Obj },
    { week: 34, period: 100, unit: 'TERM 2 EXAM', lesson: '2nd term exam', objectives: term2ExamObj, isTest: true },
    { week: 34, period: 101, unit: 'TERM 2 EXAM', lesson: '2nd term exam (Speaking)', objectives: term2ExamObj, isTest: true },
    // Week 34 (period 102) & Week 35 (periods 103-105)
    { week: 34, period: 102, unit: 'RESERVE', lesson: 'In reserve', objectives: reserveObj },
    { week: 35, period: 103, unit: 'RESERVE', lesson: 'In reserve', objectives: reserveObj },
    { week: 35, period: 104, unit: 'RESERVE', lesson: 'In reserve', objectives: reserveObj },
    { week: 35, period: 105, unit: 'RESERVE', lesson: 'In reserve', objectives: reserveObj }
  ];
})();

export const SECONDARY_ENGLISH_GRADE_9_LESSONS: SecondaryEnglishLessonDef[] = (() => {
  const u1Obj = `By the end of this unit, students will be able to:
- use the words related to the topic Local community;
- pronounce the vowel sounds /æ/, /ɑ:/, and /e/ correctly in words and sentences;
- use question words before to-infinitives and some phrasal verbs;
- seek help and respond;
- guess the meaning of unknown words in context;
- read for specific information about special products in some areas;
- give a short presentation about a speciality;
- listen for specific information about a community helper;
- write a paragraph about a community helper.`;

  const u2Obj = `By the end of this unit, students will be able to:
- use the words related to city life;
- pronounce the diphthong sounds /aʊ/, /əʊ/, and /eə/ correctly in words and sentences;
- recognise and use double comparatives and some phrasal verbs;
- offer help and respond;
- read for general and specific information in an announcement about a competition to find solutions to city problems;
- talk about city problems and their solutions;
- listen for specific information in an interview about life in some cities;
- write a paragraph about what they like or dislike about city life.`;

  const u3Obj = `By the end of this unit, students will be able to:
- use the words related to students’ life and schoolwork;
- correctly pronounce the sounds /h/ and /r/ in words and sentences;
- use modal verbs in first conditional sentences;
- ask for repetition and respond;
- read for specific information about how someone could have a well-balanced life when they were at school;
- talk about how to have a well-balanced life as a secondary student;
- listen for specific information about how some students manage their time;
- write a paragraph about how to manage our time effectively.`;

  const rev1Obj = `By the end of this review, students will have revised the language they have learnt and the skills they have practised in Units 1-3.`;
  const test1Obj = '';
  const fb1Obj = '';

  const u4Obj = `By the end of this unit, students will be able to:
- use the words related to the topic Remembering the past;
- pronounce the sounds /m/ and /l/ correctly in words and sentences;
- use the past continuous and wish + past simple;
- know how to thank and respond;
- read for specific information about how English people keep their cuisine alive;
- talk about a typical traditional Vietnamese dish;
- listen for general and specific information about old school days;
- write a paragraph about old school days.`;

  const u5Obj = `By the end of this unit, students will be able to:
- use the words related to experiences and adjectives describing experiences;
- pronounce the sounds /j/ and /w/ correctly in words and sentences;
- use the present perfect correctly;
- apologise and respond;
- read for general and specific information about different summer course experiences;
- talk about a friend’s experiences of a course;
- listen for general and specific information about bad experiences at school;
- write a paragraph about the most pleasant/unpleasant experience at school.`;

  const u6Obj = `By the end of this unit, students will be able to:
- use the words related to changes in lifestyle;
- pronounce the sounds /fl/ and /fr/ correctly in words and sentences;
- use the to-infinitive and V-ing after a verb correctly;
- make promises;
- read for specific information about learning styles in the past and at present;
- talk about changes in one’s learning style;
- listen for specific information about changes in family life;
- write an email about changes in one’s family.`;

  const rev2Obj = `By the end of this review, students will have revised the language they have learnt and the skills they have practised in Units 4-6.`;
  const term1ExamObj = '';
  const reserveObj = '';

  const u7Obj = `By the end of this unit, students will be able to:
- use the words related to the topic Natural wonders of the world;
- pronounce the sounds /sl/ and /sn/ correctly in words and sentences;
- use the reported Yes / No questions;
- ask for permission and respond;
- read for specific information about the Dolomites - a travel destination;
- talk about the Great Barrier Reef;
- listen for specific information about the Amazon Rainforest;
- write a paragraph about a natural wonder/landscape in their area.`;

  const u8Obj = `By the end of this unit, students will be able to:
- use the words and phrases related to tourism;
- use stress in words ending in –ic and –ious correctly;
- recognise and use relative pronouns correctly;
- express obligations;
- read for specific information about different types of tours;
- talk about their travel experience;
- listen for general and specific information about a tour announcement;
- write a paragraph introducing a tour.`;

  const u9Obj = `By the end of this unit, students will be able to:
- use the words related to the topic World Englishes;
- pronounce the words ending in -ion and -ity with correct stress;
- use defining relative clauses;
- say good luck and respond;
- read for general and specific information about the three circles of English;
- talk about borrowed words;
- listen for specific information about ways to improve one’s English vocabulary;
- write a paragraph about ways to improve an area of English learning.`;

  const rev3Obj = `By the end of this review, students will have revised the language they have learnt and the skills they have practised in Units 7-9.`;
  const test2Obj = '';
  const fb2Obj = '';

  const u10Obj = `By the end of this unit, students will be able to:
- use the words and phrases related to planet Earth, habitats, and flora and fauna;
- say sentences with correct rhythm;
- use non-defining relative clauses;
- persuade someone to do something and respond;
- read for general and specific information about flora and fauna;
- talk about threats to flora and fauna and how to protect them;
- listen for general and specific information about the effects of living things on the environment;
- write a summary.`;

  const u11Obj = `By the end of this unit, students will be able to:
- use the words and phrases about electronic devices;
- stress all words in sentences correctly;
- use the verb suggest / advise / recommend + V-ing / a clause with should;
- check someone’s understanding and respond;
- guess the meaning of words in context;
- read for specific information about electronic devices;
- talk about an electronic device which is important to them;
- listen for specific information about the current and future uses of one’s favourite electronic device;
- write a passage about the current and future capabilities of one’s favourite electronic device.`;

  const u12Obj = `By the end of this unit, students will be able to:
- use the words and phrases related to jobs;
- say statements used as questions with correct intonation;
- use adverbial clauses of concession, result, and reason;
- express hope and respond;
- read for general and specific information about the future world of work;
- talk about the job they want to do in the future;
- listen for specific information about people’s career paths;
- write an email about their future favourite job.`;

  const rev4Obj = `By the end of this review, Ss will have revised the language they have learnt and the skills they have practised in Units 10-12.`;
  const term2ExamObj = '';

  return [
    // Week 1
    { week: 1, period: 1, unit: 'UNIT 1', lesson: 'Getting started', objectives: u1Obj },
    { week: 1, period: 2, unit: 'UNIT 1', lesson: 'A closer look 1', objectives: u1Obj },
    { week: 1, period: 3, unit: 'UNIT 1', lesson: 'A closer look 2', objectives: u1Obj },
    // Week 2
    { week: 2, period: 4, unit: 'UNIT 1', lesson: 'Communication', objectives: u1Obj },
    { week: 2, period: 5, unit: 'UNIT 1', lesson: 'Skills 1', objectives: u1Obj },
    { week: 2, period: 6, unit: 'UNIT 1', lesson: 'Skills 2', objectives: u1Obj },
    // Week 3
    { week: 3, period: 7, unit: 'UNIT 1', lesson: 'Looking back & Project', objectives: u1Obj },
    { week: 3, period: 8, unit: 'UNIT 2', lesson: 'Getting started', objectives: u2Obj },
    { week: 3, period: 9, unit: 'UNIT 2', lesson: 'A closer look 1', objectives: u2Obj },
    // Week 4
    { week: 4, period: 10, unit: 'UNIT 2', lesson: 'A closer look 2', objectives: u2Obj },
    { week: 4, period: 11, unit: 'UNIT 2', lesson: 'Communication', objectives: u2Obj },
    { week: 4, period: 12, unit: 'UNIT 2', lesson: 'Skills 1', objectives: u2Obj },
    // Week 5
    { week: 5, period: 13, unit: 'UNIT 2', lesson: 'Skills 2', objectives: u2Obj },
    { week: 5, period: 14, unit: 'UNIT 2', lesson: 'Looking back & Project', objectives: u2Obj },
    { week: 5, period: 15, unit: 'UNIT 3', lesson: 'Getting started', objectives: u3Obj },
    // Week 6
    { week: 6, period: 16, unit: 'UNIT 3', lesson: 'A closer look 1', objectives: u3Obj },
    { week: 6, period: 17, unit: 'UNIT 3', lesson: 'A closer look 2', objectives: u3Obj },
    { week: 6, period: 18, unit: 'UNIT 3', lesson: 'Communication', objectives: u3Obj },
    // Week 7
    { week: 7, period: 19, unit: 'UNIT 3', lesson: 'Skills 1', objectives: u3Obj },
    { week: 7, period: 20, unit: 'UNIT 3', lesson: 'Skills 2', objectives: u3Obj },
    { week: 7, period: 21, unit: 'UNIT 3', lesson: 'Looking back & Project', objectives: u3Obj },
    // Week 8
    { week: 8, period: 22, unit: 'REVIEW 1', lesson: 'Language', objectives: rev1Obj },
    { week: 8, period: 23, unit: 'REVIEW 1', lesson: 'Skills', objectives: rev1Obj },
    { week: 8, period: 24, unit: 'REVIEW 1', lesson: '45-minute test', objectives: test1Obj, isTest: true },
    // Week 9
    { week: 9, period: 25, unit: 'REVIEW 1', lesson: 'Feedback on 45-minute test', objectives: fb1Obj },
    { week: 9, period: 26, unit: 'UNIT 4', lesson: 'Getting started', objectives: u4Obj },
    { week: 9, period: 27, unit: 'UNIT 4', lesson: 'A closer look 1', objectives: u4Obj },
    // Week 10
    { week: 10, period: 28, unit: 'UNIT 4', lesson: 'A closer look 2', objectives: u4Obj },
    { week: 10, period: 29, unit: 'UNIT 4', lesson: 'Communication', objectives: u4Obj },
    { week: 10, period: 30, unit: 'UNIT 4', lesson: 'Skills 1', objectives: u4Obj },
    // Week 11
    { week: 11, period: 31, unit: 'UNIT 4', lesson: 'Skills 2', objectives: u4Obj },
    { week: 11, period: 32, unit: 'UNIT 4', lesson: 'Looking back & Project', objectives: u4Obj },
    { week: 11, period: 33, unit: 'UNIT 5', lesson: 'Getting started', objectives: u5Obj },
    // Week 12
    { week: 12, period: 34, unit: 'UNIT 5', lesson: 'A closer look 1', objectives: u5Obj },
    { week: 12, period: 35, unit: 'UNIT 5', lesson: 'A closer look 2', objectives: u5Obj },
    { week: 12, period: 36, unit: 'UNIT 5', lesson: 'Communication', objectives: u5Obj },
    // Week 13
    { week: 13, period: 37, unit: 'UNIT 5', lesson: 'Skills 1', objectives: u5Obj },
    { week: 13, period: 38, unit: 'UNIT 5', lesson: 'Skills 2', objectives: u5Obj },
    { week: 13, period: 39, unit: 'UNIT 5', lesson: 'Looking back & Project', objectives: u5Obj },
    // Week 14
    { week: 14, period: 40, unit: 'UNIT 6', lesson: 'Getting started', objectives: u6Obj },
    { week: 14, period: 41, unit: 'UNIT 6', lesson: 'A closer look 1', objectives: u6Obj },
    { week: 14, period: 42, unit: 'UNIT 6', lesson: 'A closer look 2', objectives: u6Obj },
    // Week 15
    { week: 15, period: 43, unit: 'UNIT 6', lesson: 'Communication', objectives: u6Obj },
    { week: 15, period: 44, unit: 'UNIT 6', lesson: 'Skills 1', objectives: u6Obj },
    { week: 15, period: 45, unit: 'UNIT 6', lesson: 'Skills 2', objectives: u6Obj },
    // Week 16
    { week: 16, period: 46, unit: 'UNIT 6', lesson: 'Looking back & Project', objectives: u6Obj },
    { week: 16, period: 47, unit: 'REVIEW 2', lesson: 'Language', objectives: rev2Obj },
    { week: 16, period: 48, unit: 'REVIEW 2', lesson: 'Skills', objectives: rev2Obj },
    // Week 17
    { week: 17, period: 49, unit: 'TERM 1 EXAM', lesson: '1st term exam', objectives: term1ExamObj, isTest: true },
    { week: 17, period: 50, unit: 'TERM 1 EXAM', lesson: '1st term exam (Speaking)', objectives: term1ExamObj, isTest: true },
    { week: 17, period: 51, unit: 'RESERVE', lesson: 'In reserve', objectives: reserveObj },
    // Week 18
    { week: 18, period: 52, unit: 'UNIT 7', lesson: 'Getting started', objectives: u7Obj },
    { week: 18, period: 53, unit: 'UNIT 7', lesson: 'A closer look 1', objectives: u7Obj },
    { week: 18, period: 54, unit: 'UNIT 7', lesson: 'A closer look 2', objectives: u7Obj },
    // Week 19
    { week: 19, period: 55, unit: 'UNIT 7', lesson: 'Communication', objectives: u7Obj },
    { week: 19, period: 56, unit: 'UNIT 7', lesson: 'Skills 1', objectives: u7Obj },
    { week: 19, period: 57, unit: 'UNIT 7', lesson: 'Skills 2', objectives: u7Obj },
    // Week 20
    { week: 20, period: 58, unit: 'UNIT 7', lesson: 'Looking back & Project', objectives: u7Obj },
    { week: 20, period: 59, unit: 'UNIT 8', lesson: 'Getting started', objectives: u8Obj },
    { week: 20, period: 60, unit: 'UNIT 8', lesson: 'A closer look 1', objectives: u8Obj },
    // Week 21
    { week: 21, period: 61, unit: 'UNIT 8', lesson: 'A closer look 2', objectives: u8Obj },
    { week: 21, period: 62, unit: 'UNIT 8', lesson: 'Communication', objectives: u8Obj },
    { week: 21, period: 63, unit: 'UNIT 8', lesson: 'Skills 1', objectives: u8Obj },
    // Week 22
    { week: 22, period: 64, unit: 'UNIT 8', lesson: 'Skills 2', objectives: u8Obj },
    { week: 22, period: 65, unit: 'UNIT 8', lesson: 'Looking back & Project', objectives: u8Obj },
    { week: 22, period: 66, unit: 'UNIT 9', lesson: 'Getting started', objectives: u9Obj },
    // Week 23
    { week: 23, period: 67, unit: 'UNIT 9', lesson: 'A closer look 1', objectives: u9Obj },
    { week: 23, period: 68, unit: 'UNIT 9', lesson: 'A closer look 2', objectives: u9Obj },
    { week: 23, period: 69, unit: 'UNIT 9', lesson: 'Communication', objectives: u9Obj },
    // Week 24
    { week: 24, period: 70, unit: 'UNIT 9', lesson: 'Skills 1', objectives: u9Obj },
    { week: 24, period: 71, unit: 'UNIT 9', lesson: 'Skills 2', objectives: u9Obj },
    { week: 24, period: 72, unit: 'UNIT 9', lesson: 'Looking back & Project', objectives: u9Obj },
    // Week 25
    { week: 25, period: 73, unit: 'REVIEW 3', lesson: 'Language', objectives: rev3Obj },
    { week: 25, period: 74, unit: 'REVIEW 3', lesson: 'Skills', objectives: rev3Obj },
    { week: 25, period: 75, unit: 'REVIEW 3', lesson: '45-minute test', objectives: test2Obj, isTest: true },
    // Week 26
    { week: 26, period: 76, unit: 'REVIEW 3', lesson: 'Feedback on 45-minute test', objectives: fb2Obj },
    { week: 26, period: 77, unit: 'UNIT 10', lesson: 'Getting started', objectives: u10Obj },
    { week: 26, period: 78, unit: 'UNIT 10', lesson: 'A closer look 1', objectives: u10Obj },
    // Week 27
    { week: 27, period: 79, unit: 'UNIT 10', lesson: 'A closer look 2', objectives: u10Obj },
    { week: 27, period: 80, unit: 'UNIT 10', lesson: 'Communication', objectives: u10Obj },
    { week: 27, period: 81, unit: 'UNIT 10', lesson: 'Skills 1', objectives: u10Obj },
    // Week 28
    { week: 28, period: 82, unit: 'UNIT 10', lesson: 'Skills 2', objectives: u10Obj },
    { week: 28, period: 83, unit: 'UNIT 10', lesson: 'Looking back & Project', objectives: u10Obj },
    { week: 28, period: 84, unit: 'UNIT 11', lesson: 'Getting started', objectives: u11Obj },
    // Week 29
    { week: 29, period: 85, unit: 'UNIT 11', lesson: 'A closer look 1', objectives: u11Obj },
    { week: 29, period: 86, unit: 'UNIT 11', lesson: 'A closer look 2', objectives: u11Obj },
    { week: 29, period: 87, unit: 'UNIT 11', lesson: 'Communication', objectives: u11Obj },
    // Week 30
    { week: 30, period: 88, unit: 'UNIT 11', lesson: 'Skills 1', objectives: u11Obj },
    { week: 30, period: 89, unit: 'UNIT 11', lesson: 'Skills 2', objectives: u11Obj },
    { week: 30, period: 90, unit: 'UNIT 11', lesson: 'Looking back & Project', objectives: u11Obj },
    // Week 31
    { week: 31, period: 91, unit: 'UNIT 12', lesson: 'Getting started', objectives: u12Obj },
    { week: 31, period: 92, unit: 'UNIT 12', lesson: 'A closer look 1', objectives: u12Obj },
    { week: 31, period: 93, unit: 'UNIT 12', lesson: 'A closer look 2', objectives: u12Obj },
    // Week 32
    { week: 32, period: 94, unit: 'UNIT 12', lesson: 'Communication', objectives: u12Obj },
    { week: 32, period: 95, unit: 'UNIT 12', lesson: 'Skills 1', objectives: u12Obj },
    { week: 32, period: 96, unit: 'UNIT 12', lesson: 'Skills 2', objectives: u12Obj },
    // Week 33
    { week: 33, period: 97, unit: 'UNIT 12', lesson: 'Looking back & Project', objectives: u12Obj },
    { week: 33, period: 98, unit: 'REVIEW 4', lesson: 'Language', objectives: rev4Obj },
    // Week 34
    { week: 34, period: 99, unit: 'REVIEW 4', lesson: 'Skills', objectives: rev4Obj },
    { week: 34, period: 100, unit: 'TERM 2 EXAM', lesson: '2nd term exam', objectives: term2ExamObj, isTest: true },
    { week: 34, period: 101, unit: 'TERM 2 EXAM', lesson: '2nd term exam (Speaking)', objectives: term2ExamObj, isTest: true },
    // Week 34 (period 102) & Week 35 (periods 103-105)
    { week: 34, period: 102, unit: 'RESERVE', lesson: 'In reserve', objectives: reserveObj },
    { week: 35, period: 103, unit: 'RESERVE', lesson: 'In reserve', objectives: reserveObj },
    { week: 35, period: 104, unit: 'RESERVE', lesson: 'In reserve', objectives: reserveObj },
    { week: 35, period: 105, unit: 'RESERVE', lesson: 'In reserve', objectives: reserveObj }
  ];
})();

export interface ParsedUnitObjectives {
  topicVocab: string;
  pronunciation: string;
  grammar: string;
  communication: string;
  reading: string;
  speaking: string;
  listening: string;
  writing: string;
}

export function parseUnitObjectives(objectives: string, unitName: string): ParsedUnitObjectives {
  const lines = (objectives || '')
    .split('\n')
    .map((l) => l.trim().replace(/^[-–•*]\s*/, ''))
    .filter((l) => l.length > 0 && !l.toLowerCase().startsWith('by the end of'));

  let topicVocab = '';
  let pronunciation = '';
  const grammarPoints: string[] = [];
  let communication = '';
  let reading = '';
  let speaking = '';
  let listening = '';
  let writing = '';

  for (const line of lines) {
    const lower = line.toLowerCase();
    if (lower.includes('word') || lower.includes('vocabulary') || lower.includes('combination') || (lower.includes('adjective') && lower.includes('describing'))) {
      if (!topicVocab) topicVocab = line;
      else topicVocab += `; ${line}`;
    } else if (
      lower.includes('pronounce') ||
      lower.includes('sound') ||
      lower.includes('stress') ||
      lower.includes('intonation') ||
      lower.includes('rhythm') ||
      lower.includes('tone')
    ) {
      pronunciation = line;
    } else if (
      lower.startsWith('use ') ||
      lower.startsWith('recognise and use') ||
      lower.startsWith('compare ') ||
      lower.startsWith('know how to') ||
      lower.startsWith('use "') ||
      lower.startsWith('use the')
    ) {
      grammarPoints.push(line);
    } else if (
      lower.startsWith('introduce') ||
      lower.startsWith('give ') ||
      lower.startsWith('ask ') ||
      lower.startsWith('express') ||
      lower.startsWith('make ') ||
      lower.startsWith('seek') ||
      lower.startsWith('offer') ||
      lower.startsWith('apologise') ||
      lower.startsWith('say ') ||
      lower.startsWith('persuade') ||
      lower.startsWith('check') ||
      lower.startsWith('interrupt')
    ) {
      if (!communication) communication = line;
    } else if (lower.startsWith('read')) {
      reading = line;
    } else if (lower.startsWith('talk')) {
      speaking = line;
    } else if (lower.startsWith('listen')) {
      listening = line;
    } else if (lower.startsWith('write')) {
      writing = line;
    }
  }

  const grammar = grammarPoints.join('; ') || `grammatical structures and sentence patterns in ${unitName}`;
  if (!topicVocab) topicVocab = `vocabulary and lexical items related to ${unitName}`;
  if (!pronunciation) pronunciation = `phonetic sounds, word stress, and pronunciation accuracy for ${unitName}`;
  if (!communication) communication = `everyday communication and situational dialogue tasks in ${unitName}`;
  if (!reading) reading = `reading comprehension texts and authentic digital passages in ${unitName}`;
  if (!speaking) speaking = `oral presentations and spoken interactions for ${unitName}`;
  if (!listening) listening = `listening comprehension passages and audio dialogues for ${unitName}`;
  if (!writing) writing = `written paragraphs, emails, or digital communication texts in ${unitName}`;

  return { topicVocab, pronunciation, grammar, communication, reading, speaking, listening, writing };
}

export function getEnglishLessonNlsAndAi(
  grade: number,
  lessonName: string,
  unitName: string,
  unitObjectives: string = ''
): {
  nlsCode: string;
  nlsRequirement: string;
  aiCode: string;
  aiRequirement: string;
  digitalCompetency: string;
} {
  const l = lessonName.toLowerCase();
  const u = unitName.toLowerCase();
  const isLower = grade <= 7; // Grades 6, 7 -> TC1, Grades 8, 9 -> TC2
  const parsed = parseUnitObjectives(unitObjectives, unitName);

  const nlsList: Array<{ code: string; requirement: string }> = [];
  const aiList: Array<{ code: string; requirement: string }> = [];

  if (l.includes('getting started')) {
    // 3 NLS, 2 AI
    nlsList.push({
      code: isLower ? (grade === 6 ? '1.1.TC1a' : '1.1.TC1b') : (grade === 8 ? '1.1.TC2a' : '1.1.TC2b'),
      requirement: `Search and access digital multimodal materials, topic videos, and dialogues focusing on ${parsed.topicVocab}`
    });
    nlsList.push({
      code: isLower ? (grade === 6 ? '2.1.TC1a' : '2.1.TC1b') : (grade === 8 ? '2.1.TC2a' : '2.1.TC2b'),
      requirement: `Interact through digital communication tools to explore initial thematic concepts and language items in ${unitName}`
    });
    nlsList.push({
      code: isLower ? '6.2.TC1a' : '6.2.TC2a',
      requirement: `Utilize educational software and digital media players to observe interactive topic introductions in ${unitName}`
    });

    aiList.push({
      code: grade === 6 ? '6.C2.2' : grade === 7 ? '7.C2.1' : grade === 8 ? '8.C1.1' : '9.C2.1',
      requirement: grade === 6
        ? `Explore AI-powered language tools and speech synthesis to listen to introductory dialogues about ${parsed.topicVocab}`
        : grade === 7
        ? `Utilize AI conversational tools and educational applications for topic introduction and vocabulary learning in ${unitName}`
        : grade === 8
        ? `Describe how AI executes NLP text processing and speech recognition for introductory dialogues in ${unitName}`
        : `Explore generative AI tools to discover topical information and situational conversation models in ${unitName}`
    });
    aiList.push({
      code: grade === 6 ? '6.A1.3' : grade === 7 ? '7.A1.MR1' : grade === 8 ? '8.A1.1' : '9.A3.1',
      requirement: grade === 6
        ? `Practice verifying AI-generated contextual topic summaries against textbook dialogues and authentic references`
        : grade === 7
        ? `Verify information generated by AI using authoritative reference sources during topic exploration in ${unitName}`
        : grade === 8
        ? `Distinguish between AI-generated conversation examples and authentic human communication about ${unitName}`
        : `Engage in collaborative human-AI topic inquiry while maintaining critical thinking on ${unitName}`
    });
  } else if (l.includes('closer look 1')) {
    // 3 NLS, 2 AI
    nlsList.push({
      code: isLower ? (grade === 6 ? '1.2.TC1a' : '1.2.TC1b') : (grade === 8 ? '1.2.TC2a' : '1.2.TC2b'),
      requirement: `Evaluate and utilize online phonetic databases and Oxford/Cambridge audio dictionaries for: ${parsed.pronunciation}`
    });
    nlsList.push({
      code: isLower ? '1.1.TC1a' : '1.1.TC2a',
      requirement: `Search digital lexicons, interactive word maps, and multimedia flashcards for: ${parsed.topicVocab}`
    });
    nlsList.push({
      code: isLower ? '5.2.TC1a' : '5.2.TC2a',
      requirement: `Select digital repetition and recording tools to practice vocal clarity and correct pronunciation of: ${parsed.pronunciation}`
    });

    aiList.push({
      code: grade === 6 ? '6.C3.1' : grade === 7 ? '7.C1.1' : grade === 8 ? '8.C1.1' : '9.C1.1',
      requirement: grade === 6
        ? `Explore AI speech recognition tools (ASR voice analysis) to evaluate and correct pronunciation of: ${parsed.pronunciation}`
        : grade === 7
        ? `Apply AI speech synthesis and recognition tools to assess intonation and word stress for: ${parsed.pronunciation}`
        : grade === 8
        ? `Describe how AI executes NLP text processing and speech recognition (ASR) to enhance phonetic accuracy for: ${parsed.pronunciation}`
        : `Utilize AI acoustic speech analysis models to refine intonation, stress patterns, and connected speech for: ${parsed.pronunciation}`
    });
    aiList.push({
      code: grade === 6 ? '6.A1.1' : grade === 7 ? '7.A1.1' : grade === 8 ? '8.A3.3' : '9.A2.2',
      requirement: grade === 6
        ? `Recognize that AI pronunciation scoring tools require human teacher supervision and feedback`
        : grade === 7
        ? `Evaluate automated AI pronunciation feedback to adjust individual vocal articulation for: ${parsed.pronunciation}`
        : grade === 8
        ? `Track personal phonological progress using AI error analytics and self-monitoring on: ${parsed.pronunciation}`
        : `Analyze algorithmic speech scoring feedback to overcome regional accent variations in: ${parsed.pronunciation}`
    });
  } else if (l.includes('closer look 2')) {
    // 3 NLS, 2 AI
    nlsList.push({
      code: isLower ? '1.3.TC1a' : '1.3.TC2a',
      requirement: `Organize, process, and practice interactive digital grammar exercises and quizzes on: ${parsed.grammar}`
    });
    nlsList.push({
      code: isLower ? '5.2.TC1a' : '5.2.TC2a',
      requirement: `Identify syntactic errors and reinforce structural rules of ${parsed.grammar} using interactive LMS and quiz platforms (Kahoot, Quizizz)`
    });
    nlsList.push({
      code: isLower ? '2.1.TC1a' : '2.1.TC2a',
      requirement: `Participate in collaborative digital grammar challenge rooms to apply ${parsed.grammar} in contextual sentence drills`
    });

    aiList.push({
      code: grade === 6 ? '6.C1.1' : grade === 7 ? '7.C5.1' : grade === 8 ? '8.A1.1' : '9.A3.1',
      requirement: grade === 6
        ? `Explain how AI algorithms analyze grammatical structures and provide automated feedback for: ${parsed.grammar}`
        : grade === 7
        ? `Describe how AI language models identify syntactic rules and suggest sentence structure improvements for: ${parsed.grammar}`
        : grade === 8
        ? `Utilize AI language models to generate contextual grammar explanations and adaptive drills on: ${parsed.grammar}`
        : `Leverage AI grammar assistants for self-assessment while maintaining human critical evaluation of: ${parsed.grammar}`
    });
    aiList.push({
      code: grade === 6 ? '6.A1.3' : grade === 7 ? '7.A1.MR1' : grade === 8 ? '8.A1.2' : '9.C4.1',
      requirement: grade === 6
        ? `Cross-check AI grammar explanations with official textbook rules to ensure syntactic accuracy for: ${parsed.grammar}`
        : grade === 7
        ? `Verify AI-generated sentence examples against standard grammatical references for: ${parsed.grammar}`
        : grade === 8
        ? `Avoid over-reliance on AI sentence generators and practice independent syntactic construction of: ${parsed.grammar}`
        : `Evaluate training examples provided to AI grammar tools to detect structural ambiguities in: ${parsed.grammar}`
    });
  } else if (l.includes('communication')) {
    // 3 NLS, 2 AI
    nlsList.push({
      code: isLower ? (grade === 6 ? '2.1.TC1a' : '2.1.TC1b') : (grade === 8 ? '2.1.TC2a' : '2.1.TC2b'),
      requirement: `Interact through digital communication channels and simulated dialogue environments to: ${parsed.communication}`
    });
    nlsList.push({
      code: isLower ? '2.5.TC1a' : '2.5.TC2a',
      requirement: `Practice polite digital netiquette and intercultural empathy when engaging in online communication to: ${parsed.communication}`
    });
    nlsList.push({
      code: isLower ? '2.2.TC1a' : '2.2.TC2a',
      requirement: `Record and share digital spoken dialogue clips with peers focusing on: ${parsed.communication}`
    });

    aiList.push({
      code: grade === 6 ? '6.C2.2' : grade === 7 ? '7.A3.1' : grade === 8 ? '8.D2.1' : '9.C2.1',
      requirement: grade === 6
        ? `Engage in interactive conversational roleplay with conversational AI agents to practice: ${parsed.communication}`
        : grade === 7
        ? `Participate in automated dialogue simulations with AI conversational agents while guiding the interaction to: ${parsed.communication}`
        : grade === 8
        ? `Formulate a dialogue script for an AI conversational agent and practice interactive roleplay to: ${parsed.communication}`
        : `Engage with advanced conversational AI partners for real-time situational communication to: ${parsed.communication}`
    });
    aiList.push({
      code: grade === 6 ? '6.B1.1' : grade === 7 ? '7.B3.1' : grade === 8 ? '8.C5.1' : '9.A1.1',
      requirement: grade === 6
        ? `Recognize positive and negative aspects of AI chatbots in interpersonal communication regarding: ${parsed.communication}`
        : grade === 7
        ? `Demonstrate ethical and polite communication when interacting with conversational AI interfaces to: ${parsed.communication}`
        : grade === 8
        ? `Explain how AI detects vocal tone and sentiment in conversational interactions about: ${parsed.communication}`
        : `Direct AI communicative scenarios while retaining authentic human emotional expression to: ${parsed.communication}`
    });
  } else if (l.includes('skills 1')) {
    // 3 NLS, 2 AI
    nlsList.push({
      code: isLower ? '2.2.TC1a' : '2.2.TC2a',
      requirement: `Share digital summaries and deliver oral presentations based on reading tasks: ${parsed.reading}`
    });
    nlsList.push({
      code: isLower ? '1.2.TC1a' : '1.2.TC2a',
      requirement: `Evaluate online reading sources and extract specific informational details related to: ${parsed.reading}`
    });
    nlsList.push({
      code: isLower ? '3.1.TC1a' : '3.1.TC2a',
      requirement: `Design digital speaking notes, visual cue cards, and presentation slides to: ${parsed.speaking}`
    });

    aiList.push({
      code: grade === 6 ? '6.A1.3' : grade === 7 ? '7.A1.MR1' : grade === 8 ? '8.C1.1' : '9.A3.1',
      requirement: grade === 6
        ? `Practice verifying AI-generated reading summaries against textbook passages before presenting: ${parsed.reading}`
        : grade === 7
        ? `Verify information generated by AI using authoritative reference sources during reading research on: ${parsed.reading}`
        : grade === 8
        ? `Use AI natural language processing tools to extract key concepts and summarize reading passages for: ${parsed.reading}`
        : `Use AI text analysis tools to outline speaking presentations and evaluate viewpoints on: ${parsed.reading}`
    });
    aiList.push({
      code: grade === 6 ? '6.C3.1' : grade === 7 ? '7.C2.1' : grade === 8 ? '8.A1.2' : '9.B2.3',
      requirement: grade === 6
        ? `Use AI text-to-speech tools to listen to reading passages and model native-like oral presentation to: ${parsed.speaking}`
        : grade === 7
        ? `Utilize AI reading comprehension assistants to generate targeted comprehension questions on: ${parsed.reading}`
        : grade === 8
        ? `Exercise critical judgment on AI-generated viewpoints and construct original oral arguments to: ${parsed.speaking}`
        : `Identify potential bias in AI-synthesized reading passages and present balanced oral perspectives to: ${parsed.speaking}`
    });
  } else if (l.includes('skills 2')) {
    // 3 NLS, 2 AI
    nlsList.push({
      code: isLower ? (grade === 6 ? '3.1.TC1a' : '3.1.TC1b') : (grade === 8 ? '3.1.TC2a' : '3.1.TC2b'),
      requirement: `Compose, format, and edit digital written texts using word processing software: ${parsed.writing}`
    });
    nlsList.push({
      code: isLower ? '1.1.TC1a' : '1.1.TC2a',
      requirement: `Access digital audio streams, manipulate playback speeds, and capture structured listening notes on: ${parsed.listening}`
    });
    nlsList.push({
      code: isLower ? '3.2.TC1a' : '3.2.TC2a',
      requirement: `Integrate listening notes into a cohesive digital written draft to: ${parsed.writing}`
    });

    aiList.push({
      code: grade === 6 ? '6.A1.3' : grade === 7 ? '7.B3.1' : grade === 8 ? '8.A1.2' : '9.C2.1',
      requirement: grade === 6
        ? `Use AI tools to transcribe audio clips and check sentence structures while verifying correctness to: ${parsed.writing}`
        : grade === 7
        ? `Demonstrate personal commitment to responsible AI usage; transparently disclose AI utilization in drafts to: ${parsed.writing}`
        : grade === 8
        ? `Use AI writing assistants to receive feedback on vocabulary diversity and cohesion to: ${parsed.writing}`
        : `Collaborate with AI writing assistants for structural refinement and self-editing to: ${parsed.writing}`
    });
    aiList.push({
      code: grade === 6 ? '6.C3.1' : grade === 7 ? '7.A1.1' : grade === 8 ? '8.B2.1' : '9.D1.1',
      requirement: grade === 6
        ? `Utilize AI speech recognition to verify listening comprehension and check transcript fidelity for: ${parsed.listening}`
        : grade === 7
        ? `Evaluate automated AI feedback on written drafts to improve sentence structure for: ${parsed.writing}`
        : grade === 8
        ? `Ensure academic honesty and personal data protection when using online AI writing checkers for: ${parsed.writing}`
        : `Direct AI writing prompts to generate varied sentence structures while preserving student voice in: ${parsed.writing}`
    });
  } else if (l.includes('looking back') || l.includes('project')) {
    // 3 NLS, 2 AI
    nlsList.push({
      code: isLower ? (grade === 6 ? '2.4.TC1a' : '2.4.TC1b') : (grade === 8 ? '2.4.TC2a' : '2.4.TC2b'),
      requirement: `Collaborate digitally in teams to create multimedia project posters and presentations for ${unitName} Project`
    });
    nlsList.push({
      code: isLower ? '3.3.TC1a' : '3.3.TC2a',
      requirement: `Apply digital copyright rules, cite online sources, and integrate multimedia assets into the ${unitName} project`
    });
    nlsList.push({
      code: isLower ? '3.1.TC1a' : '3.1.TC2a',
      requirement: `Design digital project slides (PowerPoint, Canva) and record video project presentations for ${unitName}`
    });

    aiList.push({
      code: grade === 6 ? '6.D1.1' : grade === 7 ? '7.D1.1' : grade === 8 ? '8.D1.1' : '9.D1.1',
      requirement: grade === 6
        ? `Identify scenarios where AI creative tools can support project visual design and brainstorming for ${unitName}`
        : grade === 7
        ? `Identify community or school problems solvable with AI and design a project presentation for ${unitName}`
        : grade === 8
        ? `Plan a collaborative multimedia project utilizing AI generative tools for infographic design for ${unitName}`
        : `Lead AI-assisted collaborative project design, integrating multimodal AI tools into presentations for ${unitName}`
    });
    aiList.push({
      code: grade === 6 ? '6.A1.1' : grade === 7 ? '7.B3.1' : grade === 8 ? '8.B2.1' : '9.A3.1',
      requirement: grade === 6
        ? `Maintain human creativity and leadership when incorporating AI-generated images or ideas into ${unitName} project`
        : grade === 7
        ? `Transparently cite AI assistance and tools used in creating project presentations for ${unitName}`
        : grade === 8
        ? `Protect personal data and respect digital copyright when querying project AI tools for ${unitName}`
        : `Demonstrate human-AI co-creation skills by critically refining and assembling AI project assets for ${unitName}`
    });
  } else if (l.includes('language') && (u.includes('review') || l.includes('review'))) {
    // 3 NLS, 2 AI
    nlsList.push({
      code: isLower ? '5.2.TC1a' : '5.2.TC2a',
      requirement: 'Identify individual learning needs and use digital self-assessment tests to consolidate language knowledge across Units'
    });
    nlsList.push({
      code: isLower ? '1.3.TC1a' : '1.3.TC2a',
      requirement: 'Organize and categorize digital review notes, vocabulary banks, and grammar flashcards'
    });
    nlsList.push({
      code: isLower ? '6.2.TC1a' : '6.2.TC2a',
      requirement: 'Leverage digital practice apps and LMS review modules for comprehensive self-directed revision'
    });

    aiList.push({
      code: grade === 6 ? '6.C1.1' : grade === 7 ? '7.C5.1' : grade === 8 ? '8.A3.3' : '9.A3.1',
      requirement: grade === 6
        ? 'Use AI-based quiz systems to detect grammatical and vocabulary gaps for targeted revision'
        : grade === 7
        ? 'Utilize adaptive AI learning tools for customized language revision and self-directed practice'
        : grade === 8
        ? 'Demonstrate accountability in AI-assisted revision by tracking personal error logs and improvement metrics'
        : 'Employ AI adaptive review systems to strengthen high-school entrance examination competencies'
    });
    aiList.push({
      code: grade === 6 ? '6.A1.3' : grade === 7 ? '7.A1.MR1' : grade === 8 ? '8.A1.1' : '9.A2.2',
      requirement: grade === 6
        ? 'Evaluate AI-generated diagnostic feedback against textbook references to confirm accuracy'
        : grade === 7
        ? 'Cross-verify AI automated explanations of review questions with trusted language dictionaries'
        : grade === 8
        ? 'Distinguish between core grammar rules and AI-generated stylistic suggestions during revision'
        : 'Analyze diagnostic AI recommendations to refine exam time management and review focus'
    });
  } else if (l.includes('skills') && (u.includes('review') || l.includes('review'))) {
    // 3 NLS, 2 AI
    nlsList.push({
      code: isLower ? '3.2.TC1a' : '3.2.TC2a',
      requirement: 'Integrate and reconstruct digital learning content from multiple units into comprehensive review portfolios'
    });
    nlsList.push({
      code: isLower ? '2.2.TC1a' : '2.2.TC2a',
      requirement: 'Share integrated skill practice outputs and peer review audio/text recordings on digital platforms'
    });
    nlsList.push({
      code: isLower ? '1.2.TC1a' : '1.2.TC2a',
      requirement: 'Evaluate multimedia learning materials across units to consolidate listening and reading skills'
    });

    aiList.push({
      code: grade === 6 ? '6.C3.1' : grade === 7 ? '7.C5.1' : grade === 8 ? '8.C1.1' : '9.C2.1',
      requirement: grade === 6
        ? 'Practice integrated reading and listening skills using AI interactive comprehension tools'
        : grade === 7
        ? 'Engage with AI skill simulators for multifaceted language proficiency evaluation'
        : grade === 8
        ? 'Synthesize four language skills using AI multimodal comprehension and response platforms'
        : 'Simulate comprehensive communicative tasks with AI multi-skill examination interfaces'
    });
    aiList.push({
      code: grade === 6 ? '6.A1.3' : grade === 7 ? '7.B3.1' : grade === 8 ? '8.A1.2' : '9.A3.1',
      requirement: grade === 6
        ? 'Review AI-generated skill summaries to verify factual correctness and communicative coherence'
        : grade === 7
        ? 'Maintain academic transparency when using AI aids for integrated skill rehearsals'
        : grade === 8
        ? 'Critique AI suggestions on four-skill tasks to ensure authentic individual language performance'
        : 'Compare AI feedback with teacher assessment criteria to enhance overall communicative competence'
    });
  } else if (l.includes('test') || l.includes('exam')) {
    // 3 NLS, 2 AI
    nlsList.push({
      code: isLower ? '4.2.TC1a' : '4.2.TC2a',
      requirement: 'Protect personal test credentials, secure digital examination accounts, and ensure privacy during testing'
    });
    nlsList.push({
      code: isLower ? '4.1.TC1a' : '4.1.TC2a',
      requirement: 'Ensure digital device security, stable system configuration, and software compliance in digital test environments'
    });
    nlsList.push({
      code: isLower ? '2.5.TC1a' : '2.5.TC2a',
      requirement: 'Comply strictly with examination rules and digital ethics during online and paper-based assessments'
    });

    aiList.push({
      code: grade === 6 ? '6.A3.3' : grade === 7 ? '7.B3.1' : grade === 8 ? '8.B1.1' : '9.B2.3',
      requirement: grade === 6
        ? 'Maintain digital integrity and adhere strictly to regulations regarding AI assistance during official assessments'
        : grade === 7
        ? 'Demonstrate academic honesty and ethics by completing language assessments independently without unauthorized AI aid'
        : grade === 8
        ? 'Recognize the importance of academic integrity and the risks of generative AI plagiarism during examinations'
        : 'Uphold rigorous academic ethics and personal accountability in formal standardized language evaluations'
    });
    aiList.push({
      code: grade === 6 ? '6.B1.1' : grade === 7 ? '7.A1.1' : grade === 8 ? '8.A1.1' : '9.A1.1',
      requirement: grade === 6
        ? 'Understand that test outcomes measure personal human competence rather than automated tool outputs'
        : grade === 7
        ? 'Commit to independent cognitive effort and human autonomy during evaluation sessions'
        : grade === 8
        ? 'Acknowledge that personal mastery of language requires unassisted human problem-solving in exams'
        : 'Affirm personal responsibility and independent mastery of English competencies in high-stakes testing'
    });
  } else if (l.includes('feedback')) {
    // 3 NLS, 2 AI
    nlsList.push({
      code: isLower ? '5.1.TC1a' : '5.1.TC2a',
      requirement: 'Analyze digital test results to troubleshoot technical and conceptual learning challenges'
    });
    nlsList.push({
      code: isLower ? '5.2.TC1a' : '5.2.TC2a',
      requirement: 'Identify specific learning gaps revealed by assessment data and select targeted digital remedial exercises'
    });
    nlsList.push({
      code: isLower ? '1.3.TC1a' : '1.3.TC2a',
      requirement: 'Archive test error logs and track longitudinal score analytics on personal digital study sheets'
    });

    aiList.push({
      code: grade === 6 ? '6.A1.1' : grade === 7 ? '7.A1.1' : grade === 8 ? '8.A1.2' : '9.A2.2',
      requirement: grade === 6
        ? 'Review AI-assisted test analytics to understand error patterns and corrective strategies'
        : grade === 7
        ? 'Evaluate automated feedback on test performance to formulate personal remediation plans'
        : grade === 8
        ? 'Examine diagnostic AI feedback on common grammar and vocabulary errors for targeted remediation'
        : 'Analyze algorithmic performance diagnostics to correct misconceptions and refine exam strategies'
    });
    aiList.push({
      code: grade === 6 ? '6.A1.3' : grade === 7 ? '7.A1.MR1' : grade === 8 ? '8.A3.3' : '9.A3.1',
      requirement: grade === 6
        ? 'Cross-check AI error explanations with teacher feedback to ensure correct conceptual understanding'
        : grade === 7
        ? 'Validate AI suggestions for test remediation against official curriculum benchmarks'
        : grade === 8
        ? 'Use AI diagnostic feedback to establish targeted individual language mastery goals'
        : 'Employ AI adaptive remedial pathways to systematically resolve remaining language difficulties'
    });
  } else {
    // In reserve or other
    nlsList.push({
      code: isLower ? (grade === 6 ? '2.5.TC1a' : '6.2.TC1a') : (grade === 8 ? '2.5.TC2a' : '6.2.TC2a'),
      requirement: 'Practice positive digital communication etiquette and cultural empathy in online language communities'
    });
    nlsList.push({
      code: isLower ? '6.2.TC1a' : '6.2.TC2a',
      requirement: 'Explore innovative educational software, interactive language games, and digital libraries for self-directed enrichment'
    });
    nlsList.push({
      code: isLower ? '3.1.TC1a' : '3.1.TC2a',
      requirement: 'Author creative digital English media, storytelling podcasts, or cultural exchange blogs'
    });

    aiList.push({
      code: grade === 6 ? '6.C2.2' : grade === 7 ? '7.D1.1' : grade === 8 ? '8.D2.1' : '9.C2.1',
      requirement: grade === 6
        ? 'Engage in creative English games and conversational practice with interactive AI tools'
        : grade === 7
        ? 'Explore open-ended AI language challenges and intercultural storytelling simulations'
        : grade === 8
        ? 'Develop personalized English conversational scenarios using AI chatbot prompts'
        : 'Pursue autonomous English projects and creative multimedia storytelling powered by generative AI'
    });
    aiList.push({
      code: grade === 6 ? '6.D1.1' : grade === 7 ? '7.A3.1' : grade === 8 ? '8.D1.1' : '9.D1.1',
      requirement: grade === 6
        ? 'Identify creative opportunities where generative AI can inspire English creative writing'
        : grade === 7
        ? 'Experiment with AI interactive dialogue agents to explore diverse global cultural topics'
        : grade === 8
        ? 'Construct guided conversational prompts for collaborative English club AI roleplays'
        : 'Design student-led extracurricular English enrichment activities integrating generative AI technologies'
    });
  }

  const allNlsCodes = nlsList.map((x) => x.code).join(', ');
  const allAiCodes = aiList.map((x) => x.code).join(', ');

  const formattedLines: string[] = [
    ...nlsList.map((x) => `• [NLS Code: ${x.code}] ${x.requirement}`),
    ...aiList.map((x) => `• [AI Code: ${x.code}] ${x.requirement}`)
  ];

  return {
    nlsCode: allNlsCodes,
    nlsRequirement: nlsList.map((x) => x.requirement).join('; '),
    aiCode: allAiCodes,
    aiRequirement: aiList.map((x) => x.requirement).join('; '),
    digitalCompetency: formattedLines.join('\n')
  };
}

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
    const comp = getEnglishLessonNlsAndAi(g, def.lesson, def.unit, def.objectives);
    return {
      week: def.week,
      topic: def.unit,
      name: def.lesson,
      periods: 1,
      yccd: def.objectives,
      equipment: 'Audio CD/MP3 Global Success, Smart TV/Projector, Loudspeaker, Flashcards, LMS',
      location: 'English Language Lab / Classroom',
      nlsCode: comp.nlsCode,
      aiCode: comp.aiCode,
      digitalCompetency: comp.digitalCompetency,
      notes: def.isTest ? 'Assessment (Test / Exam)' : ''
    };
  });
}
