import { serve } from "inngest/next";
import { inngest, syncUserDeletion, syncUserCreation, syncUserUpdation } from "@/config/inngest";

// Create an API that serves zero functions
export const { GET, POST } = serve({
  client: inngest,
  functions: [
    syncUserCreation,
    syncUserUpdation,
    syncUserDeletion
  ],
});