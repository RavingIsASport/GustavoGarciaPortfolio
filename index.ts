import { Elysia } from "elysia";
import { staticPlugin } from "@elysiajs/static";

new Elysia()
  .use(
    await staticPlugin({
      prefix: "/",
    }),
  )
  .listen(process.env.PORT || 3000);

console.log("Server running on http://localhost:" + (process.env.PORT || 3000));
