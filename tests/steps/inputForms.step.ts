import { Given, When, Then, Before, setDefaultTimeout } from "@cucumber/cucumber"
import { chromium, Browser, Page, BrowserContext } from "@playwright/test"
import { FormsPage } from "../pages/forms.page"
import { Context } from "vm"
import { formatSummary } from "@cucumber/cucumber/lib/formatter/helpers"

setDefaultTimeout(60 * 1000)

let page: Page
let browser: Browser
let context: BrowserContext
let formsPage: FormsPage

Before(async () => {
  browser = await chromium.launch({ headless: false })
  context = await browser.newContext()
  page = await context.newPage()
  formsPage = new FormsPage(page)
  await formsPage.navigateToFormsPage()
  await formsPage.tappedOnFormTab()
})

Given('User is on the forms page', async () => {
  await formsPage.containerBodyIsVisible()
})

When('User inputs {string} as the first name', async (firstName: string) => {
  await formsPage.setFirstName(firstName)
})

When('User inputs {string} as the last name', async (lastName: string) => {
  await formsPage.setLastName(lastName)
})

When('User inputs {string} as the email', async (email: string) => {
  await formsPage.setEmail(email)
})

When('User inputs {string} as the gender', async (gender: string) => {
  await formsPage.setGender(gender)
})

When('User inputs {string} as the phone number', async (phoneNumber: string) => {
  await formsPage.setPhoneNumber(phoneNumber)
})

When('User selects {string} as hobbies', async (hobbies: string) => {
  const hobbiesArray = hobbies.split(',').map(hobby => hobby.trim())

  await formsPage.setHobbies(hobbiesArray)
})

When('User taps on the submit button', async() => {
  await formsPage.clickSubmitButton()
})

Then('User sees a modal view confirming submission', async() => {
  await formsPage.modalContentIsVisible()
})