import type { APIRoute } from "astro";

export const get: APIRoute = ({ params, request }) => {
  const { code } = params;

  const exists = code === "astro";

  if (exists) {
    return new Response(
      JSON.stringify({
        status: "OK",
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } else {
    return new Response(
      JSON.stringify({
        status: "Not Found",
      }),
      {
        status: 404,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
};
