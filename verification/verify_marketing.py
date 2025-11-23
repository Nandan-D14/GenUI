from playwright.sync_api import Page, expect, sync_playwright

def verify_marketing_components(page: Page):
    page.on("console", lambda msg: print(f"Console: {msg.text}"))
    page.on("pageerror", lambda exc: print(f"PageError: {exc}"))

    print("Navigating to Hero Block...")
    page.goto("http://localhost:3000/#/blocks/hero")
    page.wait_for_load_state("networkidle")

    # Check if root has content
    if page.locator("#root").inner_html() == "":
        print("Root is empty!")

    # Use looser locator
    expect(page.locator("body")).to_contain_text("Master Your Workflow")
    page.screenshot(path="verification/hero_block.png")
    print("Hero verified.")

    print("Navigating to Pricing Block...")
    page.goto("http://localhost:3000/#/blocks/pricing")
    page.wait_for_load_state("networkidle")
    expect(page.locator("body")).to_contain_text("Pricing Plans")
    expect(page.locator("body")).to_contain_text("$29")
    page.screenshot(path="verification/pricing_block.png")
    print("Pricing verified.")

    print("Navigating to Contact Block...")
    page.goto("http://localhost:3000/#/blocks/contact")
    page.wait_for_load_state("networkidle")
    expect(page.locator("body")).to_contain_text("Contact Us")
    page.screenshot(path="verification/contact_block.png")
    print("Contact verified.")

    print("Navigating to Sheet Component...")
    page.goto("http://localhost:3000/#/components/sheet")
    page.wait_for_load_state("networkidle")
    page.get_by_role("button", name="Open Sheet").click()
    page.wait_for_timeout(500)
    expect(page.locator("body")).to_contain_text("Edit profile")
    page.screenshot(path="verification/sheet_component.png")
    print("Sheet verified.")

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            verify_marketing_components(page)
        except Exception as e:
            print(f"Verification failed: {e}")
            page.screenshot(path="verification/error_marketing.png")
        finally:
            browser.close()
