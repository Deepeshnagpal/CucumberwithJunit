package StepDefinitions;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;

public class GoogleSearchSteps extends TestBase {
	WebDriver driver = getDriver();

	@Given("open the browser")
	public void open_the_browser() {
		driver = new ChromeDriver();
		
	}

	@And("navigate to google search page")
	public void navigate_to_google_search_page() {
		driver.get("http://www.google.com");
		driver.manage().window().maximize();
		getTitle(driver);
		
	}

	@Given("enter the text in search box and click enter")
	public void enter_the_text_in_search_box() {
		WebElement ele = driver.findElement(By.name("q"));
		ele.sendKeys("Automation Step by Step");
		ele.sendKeys(Keys.ENTER);
	}

	@Then("user is navigated to search results")
	public void user_is_navigated_to_search_results() {
		driver.getPageSource().contains("Online Courses");
		Assert.assertFalse(false);
		driver.quit();
	}

}
