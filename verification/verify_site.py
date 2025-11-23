from playwright.sync_api import Page, expect, sync_playwright

def verify_home_and_components(page: Page):
    # 1. Verify Home Page
    print("Navigating to Home...")
    page.goto("http://localhost:3000")
    page.wait_for_load_state("networkidle")
<<<<<<< HEAD

=======

>>>>>>> origin/main
    print("Verifying Home content...")
    # Use looser locators
    expect(page.locator("body")).to_contain_text("Build beautiful interfaces")
    expect(page.locator("body")).to_contain_text("TRUSTED BY DEVELOPERS AT")
<<<<<<< HEAD

=======

>>>>>>> origin/main
    # Take screenshot of Home
    page.screenshot(path="verification/home.png", full_page=True)
    print("Home page verified and screenshot taken.")

    # 2. Verify Badge Component
    print("Navigating to Badge...")
    page.goto("http://localhost:3000/#/components/badge")
    page.wait_for_load_state("networkidle")
<<<<<<< HEAD

    # Wait for text
    expect(page.locator("body")).to_contain_text("Default")
    expect(page.locator("body")).to_contain_text("Destructive")

=======

    # Wait for text
    expect(page.locator("body")).to_contain_text("Default")
    expect(page.locator("body")).to_contain_text("Destructive")

>>>>>>> origin/main
    # Take screenshot of Badge Docs
    page.screenshot(path="verification/badge.png")
    print("Badge page verified and screenshot taken.")

    # 3. Verify Tabs Component
    print("Navigating to Tabs...")
    page.goto("http://localhost:3000/#/components/tabs")
    page.wait_for_load_state("networkidle")
<<<<<<< HEAD

    expect(page.locator("body")).to_contain_text("Make changes to your account here")

    # Click Password tab
    page.get_by_role("button", name="Password").click()

    # Check new state (Password tab content active)
    expect(page.locator("body")).to_contain_text("Change your password here")

=======

    expect(page.locator("body")).to_contain_text("Make changes to your account here")

    # Click Password tab
    page.get_by_role("button", name="Password").click()

    # Check new state (Password tab content active)
    expect(page.locator("body")).to_contain_text("Change your password here")

>>>>>>> origin/main
    # Take screenshot of Tabs Docs
    page.screenshot(path="verification/tabs.png")
    print("Tabs page verified and screenshot taken.")

    # 4. Verify Footer
    expect(page.locator("footer")).to_be_visible()
    expect(page.locator("footer")).to_contain_text("Built with love & coffee")
    print("Footer verified.")

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            verify_home_and_components(page)
        except Exception as e:
            print(f"Verification failed: {e}")
            page.screenshot(path="verification/error.png")
        finally:
            browser.close()
