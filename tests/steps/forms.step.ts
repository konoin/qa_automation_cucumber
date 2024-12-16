import { Given, When, Then, Before, After, setDefaultTimeout, context } from "@cucumber/cucumber"
import { chromium, Browser, Page, expect, BrowserContext } from "@playwright/test"
import { FormsPage } from "../pages/forms.page"

setDefaultTimeout(60 * 1000)

let page: Page
let browser: Browser
let browserContext: BrowserContext
let formsPage: FormsPage

Before(async () => {
  browser = await chromium.launch({ headless: false })
  browserContext = await browser.newContext()
  page = await browserContext.newPage()
  formsPage = new FormsPage(page)
})

After(async () => {
  if (context) {
    await browserContext.close()
  }
  if (browser) {
    await browser.close()
  }
})

Given('User located on the forms page', async () => {
  await formsPage.navigateToFormsPage()
  await formsPage.containerBodyIsVisible()
})

When('User tapped on forms tab on the left menu', async () => {
  await formsPage.tappedOnFormTab()
})

Then('User see forms', async () => {
  await formsPage.formsAreVisible()
})