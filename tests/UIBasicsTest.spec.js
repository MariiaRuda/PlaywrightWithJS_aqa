const {test, expect} =require ('@playwright/test');

test('Browser Playwright Test', async ({browser})=>
{ 
    //new browser window(instanse)
    const context = await browser.newContext(); 

    // creates new tab/page for you to enter url and start automation
    const page = await context.newPage();
    
    //now to direct url to go +await
    await page.goto("https://nodejs.org/en/download");
});

//browser global variable tells Playwright to open new window with all existing browser data (cookies etc.)

test('Page Playwright Test', async ({page})=>
{ 
    //now to direct url to go +await
    await page.goto("https://google.com");
    console.log(await page.title());
    await expect(page).toHaveTitle("Google");
});

test.only('Browser Context Playwright test', async ({browser})=>
    {   //initialize browser window, tab and url
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

        //wait untill page of url is loaded - title appears and we catch it
        console.log(await page.title());

        //css locators to select any  element 
        //enter username
        await page.locator('#username').fill('rahulshetty');

        //enter password
        await page.locator('#password').fill('learning');

        //click submit button
        await page.locator('#signInBtn').click();

        // wait for validation banner to show => console.log error message text of banner
        console.log(await page.locator("[style*='block']").textContent());

    });
