import { t } from "../utils";
import { z } from "zod";

export const exampleRouter = t.router({
  hello: t.procedure
    .input(z.object({ text: z.string().nullish() }).nullish())
    .query(({ input }) => {
      return {
        greeting: `Hello ${input?.text ?? "world"}!`,
        secondHello: `How was you visit to the Database, ${
          input?.text ?? "You are a cat"
        }?`,
      };
    }),
  getAll: t.procedure.query(({ ctx }) => {
    return ctx.prisma.example.findMany();
  }),
});
