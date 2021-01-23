package StepDefinitions;

import java.io.File;
import java.io.IOException;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class TestBase {

	protected WebDriver driver;
	
	protected WebDriver getDriver() {
		if(driver==null) {
			System.setProperty("webdriver.chrome.driver", ".//drivers\\chromedriver.exe" );
			driver = new ChromeDriver();
		}
		return driver;
		
	}
	
	public static void takeScreenshot(WebDriver driver, String fileWritePath) throws IOException {
		 TakesScreenshot scrShot =((TakesScreenshot)driver); 
		 scrShot.getScreenshotAs(OutputType.FILE);
		File destFile = new File(fileWritePath);
		FileUtils.copyFile((File) scrShot, destFile);
	}
	
	public static String getTitle(WebDriver driver) {
		return driver.getTitle();
		
	}
	
}
