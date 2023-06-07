/*
 * This function is not intended to be invoked directly. Instead it will be
 * triggered by an HTTP starter function.
 *
 * Before running this sample, please:
 * - create a Durable activity function (default name is "Hello")
 * - create a Durable HTTP starter function
 * - run 'npm install durable-functions' from the wwwroot folder of your
 *    function app in Kudu
 */

import * as df from "durable-functions";

const orchestrator = df.orchestrator(function* (context) {
  const outputs = [];
  // Replace "Hello" with the name of your Durable Activity Function.
  const helloResult = yield context.df.callActivity("Hello", [1,2,3]);
  console.log("helloResult",helloResult);

  return outputs;
});

export default orchestrator;
