import { describe, it, expect } from "vitest";
import { fileURLToPath } from "node:url";
import { setup, $fetch } from "@nuxt/test-utils";
describe("only url configuration", async () => {
  await setup({
    rootDir: fileURLToPath(new URL("./fixtures/only-url-configuration", import.meta.url)),
  });

  it("renders the index page", async () => {
    // Get response to a server-rendered page with `$fetch`.
    const html = await $fetch("/");
    expect(html).toContain("<div>OK</div>");
  });
});
