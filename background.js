chrome.commands.onCommand.addListener((command) => {
  if (command === "open_client_manager") {
    chrome.tabs.create({ url: "file:///Directory/Path/index.html" });
  }
});
