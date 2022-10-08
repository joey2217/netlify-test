import type { Context } from "https://edge.netlify.com";

export default async (req: Request, { next }: Context) => {
    const res = await next({sendConditionalRequest: true});
  
    // If the response is a 304, it’s cached in the client and we can return it
    if (res.status === 304) {
      return res;
    }
    
    // Transform the response however you need
    const text = await res.text();
  
    return new Response(text.toUpperCase(), res);
  };
  