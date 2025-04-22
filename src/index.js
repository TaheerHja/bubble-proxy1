export default {
  async fetch(request, env, ctx) {
    const targetUrl = 'https://all-in-1-app-u.bubbleapps.io/version-test/';
    const url = new URL(request.url);
    const targetRequestUrl = targetUrl + url.pathname + url.search;

    const response = await fetch(targetRequestUrl, {
      method: request.method,
      headers: request.headers,
      body: request.body,
    });

    return response;
  }
};
