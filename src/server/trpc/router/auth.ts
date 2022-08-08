import { t, authedProcedure } from "../utils";

export const authRouter = t.router({
  getSession: t.procedure.query(({ ctx }) => {
    return ctx.session;
  }),
  getSecretMessage: authedProcedure.query(() => {
    return "This is a secret Message from TRPC";
  }),
});
