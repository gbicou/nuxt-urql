import { fileURLToPath } from "node:url";
import { describe, it, expect } from "vitest";
import { setup, $fetch } from "@nuxt/test-utils";

describe("basic", async () => {
  await setup({
    rootDir: fileURLToPath(new URL("./fixtures/basic", import.meta.url)),
  });

  it("renders the index page", async () => {
    const html = await $fetch("/");
    expect(html).toContain("<div>basic</div>");
    expect(html).toContain("<no>basic</no>");
  });

  it("execute a graphql query", async () => {
    const html = await $fetch("/fr");
    expect(html).toContain("<div>France</div>");
  });

  it("execute a query on server", async () => {
    // SSR supposed to be active
    const html = await $fetch("/ssr-on");
    expect(html).toContain("<div>France</div>");
  });

  it("execute a query on client", async () => {
    // should not render without await
    const html = await $fetch("/ssr-off");
    expect(html).not.toContain("<div>France</div>");
  });
});
