package StepDefinitions;

import java.io.IOException;

import org.openqa.selenium.WebDriver;

import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.Scenario;
import io.cucumber.java.en.Then;

public class Stackoverflow extends TestBase {
	
	Scenario scenario;
	
	@After
	public void tearDown(Scenario scenario) throws IOException {
		if(scenario.isFailed()) {
			takeScreenshot(driver, "C:\\Users\\A748795\\Eclipse_Deepesh1\\image.png");
		}
	}
	
	@Before
	public void setUp(Scenario s) {
		scenario =s;
	}
	
	WebDriver driver = getDriver();
	
	@SuppressWarnings("deprecation")
	@Then("^navigate to \"([^\"]*)\"$")
	public void navigate_to(String string) {
		
	    driver.get(string);
	    driver.manage().window().maximize();
	    getTitle(driver);
	    scenario.write("Opened the browser:"+string);
	    driver.quit();
	}

}
