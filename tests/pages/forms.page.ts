import { expect, Page } from '@playwright/test'

export class FormsPage {
  private page: Page
  private containerBody
  private leftPanelPracticeFormButton
  private forms
  private firstNameField
  private lastNameField
  private emailField
  private genderCheck
  private phoneNumberField
  private subjectField
  private currentAddressField
  private submitButton
  private modalContent

  constructor(page: Page) {
    this.page = page
    this.containerBody = this.page.locator('[class="container playgound-body"]')
    this.leftPanelPracticeFormButton = this.page.locator('[class="text"]', { hasText: 'Practice Form' })
    this.forms = this.page.locator('[id="Ad.Plus-970x250-1"]')
    this.firstNameField = this.page.locator('[id="firstName"]')
    this.lastNameField = this.page.locator('[id="lastName"]')
    this.emailField = this.page.locator('[id="userEmail"]')
    this.genderCheck = this.page.locator('input[name="gender"]')
    this.phoneNumberField = this.page.locator('[id="userNumber"]')
    this.subjectField = this.page.locator('[id="subjectsContainer"]')
    this.currentAddressField = this.page.locator('[id="currentAddress"]')
    this.submitButton = this.page.locator('[id="submit"]')
    this.modalContent = this.page.locator('[class=""modal-content]')
  }

  async navigateToFormsPage() {
    await this.page.goto('https://demoqa.com/forms')
  }

  async containerBodyIsVisible() {
    await expect(this.containerBody).toBeVisible()
  }

  async tappedOnFormTab() {
    await this.leftPanelPracticeFormButton.click()
  }

  async formsAreVisible() {
    await expect(this.forms).toBeVisible()
  }


  //MARK: Input page
  async setFirstName(firstName: string) {
    await this.firstNameField.fill(firstName)
  }

  async setLastName(lastName: string) {
    await this.lastNameField.fill(lastName)
  }

  async setEmail(email: string) {
    await this.emailField.fill(email)
  }

  async setPhoneNumber(phoneNumber: string) {
    await this.phoneNumberField.fill(phoneNumber)
  }

  async setGender(gender: string) {
    if (gender === 'Male') {
      const maleCheck = this.genderCheck.locator('[value="Male"]')
      await maleCheck.check()
    } else if (gender === 'Female') {
      const femaleCheck = this.genderCheck.locator('[value="Female"]')
      await femaleCheck.check()
    } else if (gender === 'Other') {
      const other = this.genderCheck.locator('[value="Other"]')
      await other.check()
    }
  }

  async setSubject(subject: string) {
    await this.subjectField.fill(subject)
  }

  async setCurrentAddress(currentAddress: string) {
    await this.currentAddressField.fill(currentAddress)
  }

  async setHobbies(hobbies: string[]) {
    for (let hobbie in hobbies) {
      const check = this.page.locator('label', { hasText: `${hobbie}`})
      await check.check()
    }
  }

  async clickSubmitButton() {
    await this.submitButton.click()
  }

  async modalContentIsVisible() {
    await expect(this.modalContent).toBeVisible()
  }
}