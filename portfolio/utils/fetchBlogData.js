export async function fetchBlogData() {
  const res = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@panchalparthppp`);
  const data = await res.json();

  if (!data.items) {
    throw new Error('Items not found in response');
  }

  return data.items.filter((item) => item);
}
