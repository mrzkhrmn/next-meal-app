export async function fetchDailyMeal() {
  const baseUrl = process.env.BASE_URL;

  if (!baseUrl) {
    throw new Error("API configuration is missing");
  }

  const url = new URL("random.php", baseUrl);

  const response = await fetch(url.toString());

  if (!response.ok) {
    throw new Error(`API request failed: ${response.statusText}`);
  }

  return response.json();
}

export async function fetchAllMeals() {
  const baseUrl = process.env.BASE_URL;

  if (!baseUrl) {
    throw new Error("API configuration is missing");
  }

  const url = new URL("search.php?s=", baseUrl);

  const response = await fetch(url.toString());

  if (!response.ok) {
    throw new Error(`API request failed: ${response.statusText}`);
  }

  return response.json();
}
