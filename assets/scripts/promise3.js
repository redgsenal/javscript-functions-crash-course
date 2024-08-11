const functionReject = () => {
  console.log("function reject here");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Some error here...");
    }, 1000);
  });
};

const functionResolve = () => {
  console.log("function resolved here");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("This is now resolved😀");
    }, 1000);
  });
};

const onSuccess = (data) => {
  console.log(`success: ${data}`);
};

const onError = (errorCode) => {
  console.log(`fail: ${errorCode}`);
};

const onFinally = () => {
  console.log("finally called");
};

functionResolve().then(functionResolve, onError).then(onSuccess).catch(onError).finally(onFinally);
