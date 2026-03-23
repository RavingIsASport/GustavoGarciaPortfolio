import { Elysia } from "elysia";
import { staticPlugin } from "@elysiajs/static";

new Elysia()
  .use(
    await staticPlugin({
      prefix: "/",
    }),
  )
  .listen(3000);

console.log("Server running on http://localhost:3000");
