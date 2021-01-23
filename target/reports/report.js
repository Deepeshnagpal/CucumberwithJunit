$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/Amazon.feature");
formatter.feature({
  "name": "Navigate to StackoverFlow functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Stackoverflow",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "navigate to \"http://www.amazon.in\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Stackoverflow.navigate_to(java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: failed to change window state to maximized, current state is minimized\n  (Session info: chrome\u003d70.0.3538.102)\n  (Driver info: chromedriver\u003d2.45.615291 (ec3682e3c9061c10f26ea9e5cdcf3c53f3f74387),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027MC0AEP7C\u0027, ip: \u0027172.20.10.3\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:59413}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, platformName\u003dXP, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003dignore, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.45.615291 (ec3682e3c9061c10f26ea9e5cdcf3c53f3f74387), userDataDir\u003dC:\\Users\\A748795\\AppData\\Local\\Temp\\scoped_dir22140_16694}, takesHeapSnapshot\u003dtrue, unhandledPromptBehavior\u003dignore, pageLoadStrategy\u003dnormal, strictFileInteractability\u003dfalse, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d70.0.3538.102, browserConnectionEnabled\u003dfalse, proxy\u003dProxy(), nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 27a5621a90910cd6e68bfaa1306e2a49\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:703)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:934)\r\n\tat StepDefinitions.Stackoverflow.navigate_to(Stackoverflow.java:35)\r\n\tat ✽.navigate to \"http://www.amazon.in\"(file:///C:/Users/A748795/Eclipse_Deepesh1/src/test/resources/Features/Amazon.feature:4)\r\n",
  "status": "failed"
});
formatter.after({
  "error_message": "java.lang.ClassCastException: org.openqa.selenium.chrome.ChromeDriver cannot be cast to java.io.File\r\n\tat StepDefinitions.TestBase.takeScreenshot(TestBase.java:29)\r\n\tat StepDefinitions.Stackoverflow.tearDown(Stackoverflow.java:19)\r\n",
  "status": "failed"
});
formatter.uri("file:src/test/resources/Features/GoogleSearch.feature");
formatter.feature({
  "name": "Google Search",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Validate google search is working",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "open the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.GoogleSearchSteps.open_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "navigate to google search page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.GoogleSearchSteps.navigate_to_google_search_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter the text in search box and click enter",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.GoogleSearchSteps.enter_the_text_in_search_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is navigated to search results",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.GoogleSearchSteps.user_is_navigated_to_search_results()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/Features/Stackoverflow.feature");
formatter.feature({
  "name": "Navigate to StackoverFlow functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Stackoverflow",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "navigate to \"http://www.stackoverflow.com\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Stackoverflow.navigate_to(java.lang.String)"
});
formatter.write("Opened the browser:http://www.stackoverflow.com");
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/Features/Way2Automation.feature");
formatter.feature({
  "name": "Navigate to StackoverFlow functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Stackoverflow",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "navigate to \"http://way2automation.com/\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Stackoverflow.navigate_to(java.lang.String)"
});
formatter.write("Opened the browser:http://way2automation.com/");
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/Features/wikipedia.feature");
formatter.feature({
  "name": "Navigate to StackoverFlow functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Stackoverflow",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "navigate to \"http://www.wikipdeia.org\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Stackoverflow.navigate_to(java.lang.String)"
});
formatter.write("Opened the browser:http://www.wikipdeia.org");
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});