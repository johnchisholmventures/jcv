import { createClient } from "tinacms/dist/client";
import { queries } from "./types.js";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: '3f8f6dc1476f1eaf8f6d616a627f72190c2784c2', queries,  });
export default client;
  