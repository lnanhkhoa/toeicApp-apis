"use strict";
const _ = require("lodash");
const partOneSample = require("../../fixtures/sample/part1");
const partTwoSample = require("../../fixtures/sample/part2");
const partThreeSample = require("../../fixtures/sample/part3");
const partFourSample = require("../../fixtures/sample/part4");
const partFiveSample = require("../../fixtures/sample/part5");
const partSixSample = require("../../fixtures/sample/part6");
const partSevenSample = require("../../fixtures/sample/part7");

/**
 * An asynchronous bootstrap function that runs before
 * your application gets started.
 *
 * This gives you an opportunity to set up your data model,
 * run jobs, or perform some special logic.
 *
 * See more details here: https://strapi.io/documentation/developer-docs/latest/setup-deployment-guides/configurations.html#bootstrap
 */

const PART_ONE = "part-one";
const PART_TWO = "part-two";
const PART_THREE = "part-three";
const PART_FOUR = "part-four";
const PART_FIVE = "part-five";
const PART_SIX = "part-six";
const PART_SEVEN = "part-seven";
const ANSWER = "answer";
const QUESTION = "question";
const CONFIG = "config";

module.exports = async () => {
  const { services } = strapi;
  const config = await services[CONFIG].findOne({ configID: "config" });
  if (!config) return null;
  const { mongoDB } = config;

  if (!mongoDB.INIT_DB) {
    // part 1
    await generatePartOne();
    // part 2
    await generatePartTwo();
    // part 3
    await generatePartWithQuestion(partThreeSample, PART_THREE, "third");
    // part 4
    await generatePartWithQuestion(partFourSample, PART_FOUR, "fourth");
    // part 5
    await generatePartFive();
    // part 6
    await generatePartSix();
    // part 7
    await generatePartSeven();

    await services[CONFIG].update(
      { id: config.id },
      {
        mongoDB: {
          ...mongoDB,
          INIT_DB: true,
        },
      },
    );
  }
};

async function generatePartTwo() {
  const { services } = strapi;
  await Promise.all(
    partTwoSample.map(async (sample) => {
      const { indexNumber, answerKey, answerLists, question } = sample;
      let createdAnwserLists = [];
      for (let index = 0; index < answerLists.length; index++) {
        const element = answerLists[index];
        const createdAnwser = await services[ANSWER].createOrUpdate({
          bullet: element.bullet,
          text: element.text,
          part: "second",
        });
        createdAnwserLists.push(createdAnwser);
      }
      const createdSample = await services[PART_TWO].createOrUpdate({
        indexNumber,
        answerKey,
        question,
        answerLists: createdAnwserLists,
      });
    }),
  );
}

async function generatePartOne() {
  const { services } = strapi;
  await Promise.all(
    partOneSample.map(async (sample) => {
      const { indexNumber, answerKey, answerLists } = sample;
      let createdAnwserLists = [];
      for (let index = 0; index < answerLists.length; index++) {
        const element = answerLists[index];
        const createdAnwser = await services[ANSWER].createOrUpdate({
          bullet: element.bullet,
          text: element.text,
          part: "second",
        });
        createdAnwserLists.push(createdAnwser);
      }
      const createdSample = await services[PART_ONE].createOrUpdate({
        indexNumber,
        answerKey,
        answerLists: createdAnwserLists,
      });
    }),
  );
}

async function generatePartWithQuestion(data, partName, keyword) {
  const { services } = strapi;
  await Promise.all(
    data.map(async (sample) => {
      const { indexNumber, questionLists } = sample;
      let createdQuestionLists = [];
      //
      for (let index = 0; index < questionLists.length; index++) {
        //
        const questionElement = questionLists[index];
        let createdAnwserLists = [];
        for (let index = 0; index < questionElement.answerLists.length; index++) {
          const answerElement = questionElement.answerLists[index];
          const createdAnwser = await services[ANSWER].createOrUpdate({
            bullet: answerElement.bullet,
            text: answerElement.text,
            part: keyword,
          });
          createdAnwserLists.push(createdAnwser);
        }
        //
        const createdQuestion = await services[QUESTION].createOrUpdate({
          answerKey: questionElement.answerKey,
          indexNumber: questionElement.indexNumber,
          questionText: questionElement.questionText,
          answerLists: createdAnwserLists,
          part: keyword,
        });
        createdQuestionLists.push(createdQuestion);
      }
      //
      const createdSample = await services[partName].createOrUpdate({
        indexNumber,
        questionLists: createdQuestionLists,
      });
    }),
  );
}

async function generatePartFive() {
  const { services } = strapi;
  await Promise.all(
    partFiveSample.map(async (sample) => {
      const { indexNumber, question } = sample;

      //
      const { answerLists = [] } = question;
      let createdAnwserLists = [];
      for (let index = 0; index < answerLists.length; index++) {
        const element = answerLists[index];
        const createdAnwser = await services[ANSWER].createOrUpdate({
          bullet: element.bullet,
          text: element.text,
          part: "fifth",
        });
        createdAnwserLists.push(createdAnwser);
      }

      //
      const { answerKey, indexNumber: indexNumberQuestion, questionText } = question;
      const createdQuestion = await services[QUESTION].createOrUpdate({
        indexNumber: indexNumberQuestion,
        questionText: questionText,
        answerKey: answerKey,
        answerLists: createdAnwserLists,
        part: "fifth",
      });

      const createdSample = await services[PART_FIVE].createOrUpdate({
        indexNumber,
        question: createdQuestion,
      });
    }),
  );
}

async function generatePartSix() {
  const { services } = strapi;
  await Promise.all(
    partSixSample.map(async (sample) => {
      //
      const { answerLists } = sample;
      let createdAnwserLists = [];
      for (let index = 0; index < answerLists.length; index++) {
        const element = answerLists[index];
        const createdAnwser = await services[ANSWER].createOrUpdate({
          bullet: element.bullet,
          text: element.text,
          part: "second",
        });
        createdAnwserLists.push(createdAnwser);
      }

      //
      const { indexNumber, paragraph } = sample;
      const createdSample = await services[PART_SIX].createOrUpdate({
        indexNumber,
        paragraph,
        answerLists: createdAnwserLists,
      });
    }),
  );
}

async function generatePartSeven() {
  const { services } = strapi;
  await Promise.all(
    partSevenSample.map(async (sample) => {
      //
      const { questionLists } = sample;
      const createdQuestionLists = [];
      for (let index = 0; index < questionLists.length; index++) {
        const questionElement = questionLists[index];

        //
        const { answerLists } = questionElement;
        let createdAnwserLists = [];
        for (let index = 0; index < answerLists.length; index++) {
          const element = answerLists[index];
          const createdAnwser = await services[ANSWER].createOrUpdate({
            bullet: element.bullet,
            text: element.text,
            part: "seventh",
          });
          createdAnwserLists.push(createdAnwser);
        }

        //
        const { answerKey, indexNumber: indexNumberQuestion, questionText } = questionElement;
        const createdQuestion = await services[QUESTION].createOrUpdate({
          indexNumber: indexNumberQuestion,
          answerKey: answerKey,
          questionText: questionText,
          answerLists: createdAnwserLists,
          part: "seventh",
        });
        createdQuestionLists.push(createdQuestion);
      }

      const { indexNumber, paragraph } = sample;
      const createdSample = await services[PART_SEVEN].createOrUpdate({
        indexNumber,
        paragraph,
        questionLists: createdQuestionLists,
      });
    }),
  );
}
