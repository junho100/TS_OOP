{
  /**
   * Print Loading State
   */

  type LoadingState = {
    state: "loading";
  };

  type SuccessState = {
    state: "success";
    response: {
      body: string;
    };
  };

  type FailState = {
    state: "fail";
    reason: string;
  };

  type ResourceLoadState = LoadingState | SuccessState | FailState;

  const printLoginState = (result: ResourceLoadState) => {
    switch (result.state) {
      case "loading": {
        console.log("👀 loading...");
        break;
      }
      case "success": {
        console.log(`😃 ${result.response.body}`);
        break;
      }
      case "fail": {
        console.log(`😱 ${result.reason}`);
        break;
      }
      default: {
        throw new Error("error!");
      }
    }
  };

  printLoginState({ state: "loading" }); // 👀 loading...
  printLoginState({ state: "success", response: { body: "loaded" } }); // 😃 loaded
  printLoginState({ state: "fail", reason: "no network" }); // 😱 no network
}
