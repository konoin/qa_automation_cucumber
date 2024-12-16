import { Given, When, Then, Before, After, setDefaultTimeout } from "@cucumber/cucumber"
import { chromium, Browser, Page, expect } from "@playwright/test"
import { TestExamples } from "../pages/testExamples.page"
import { FormsPage } from "../pages/forms.page"

setDefaultTimeout(60 * 1000)

let page: Page
let browser: Browser
let demoQAMainPage: TestExamples
let formsPage: FormsPage

Before(async function () {
  browser = await chromium.launch({ headless: false })
  const context = await browser.newContext()
  page = await context.newPage()
  demoQAMainPage = new TestExamples(page)
  await demoQAMainPage.navigateToMainDemoQAPage()
})

Given('User navigate to the main page on DemoQA site', async () => {
  await demoQAMainPage.mainPageIsVisible()
})

When('User tapped on Forms card', async () => {
  await demoQAMainPage.clickOnFormsPage()
  formsPage = new FormsPage(page)
})

Then('User move on the forms page', async () => {
  await formsPage.containerBodyIsVisible()
})