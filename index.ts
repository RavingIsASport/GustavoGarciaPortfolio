import { file, serve } from "bun";

serve({
  port: process.env.PORT || 3000,

  async fetch(req) {
    let url = new URL(req.url).pathname;

    // Default to index.html
    if (url === "/") {
      url = "/index.html";
    }

    const filepath = "./public" + url;

    return new Response(file(filepath));
  },
});

console.log("Server running on http://localhost:3000");
