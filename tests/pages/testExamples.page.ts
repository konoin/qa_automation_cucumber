import { expect, Page } from '@playwright/test'

export class TestExamples {
  private page: Page
  private formButton
  private mainPageTitleHref

  constructor(page: Page) {
    this.page = page
    this.formButton = this.page.locator('[class="card-body"]', { hasText: 'Forms' })
    this.mainPageTitleHref = this.page.locator('[id="app"]')
  }

  async navigateToMainDemoQAPage() {
    await this.page.goto('https://demoqa.com/')
  }

  async clickOnFormsPage() {
    await this.formButton.click()
  }

  async mainPageIsVisible() {
    await expect(this.mainPageTitleHref).toBeVisible()
  }
}