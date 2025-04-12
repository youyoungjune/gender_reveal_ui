import { test, expect } from "@playwright/test";

test("developed", async ({ page }) => {
  await page.goto("http://localhost:3000");

  const developedLink = await page.getByTestId("developed-link");

  await expect(developedLink).toHaveText("developed");

  await developedLink.click();
});
