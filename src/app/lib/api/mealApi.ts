export async function fetchDailyMeal(endpoint: string) {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

  console.log(baseUrl);

  if (!baseUrl) {
    throw new Error("API configuration is missing");
  }

  const url = new URL(endpoint, baseUrl);

  console.log(url);

  const response = await fetch(url.toString());

  if (!response.ok) {
    throw new Error(`API request failed: ${response.statusText}`);
  }

  return response.json();
}
