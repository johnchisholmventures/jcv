import { createClient } from "tinacms/dist/client";
import { queries } from "./types.js";
export const client = createClient({ cacheDir: '/home/pfawkes/Documents/code/jcv/tina/__generated__/.cache/1785723126732', url: 'http://localhost:4001/graphql', token: 'null', queries,  });
export default client;
  