export async function fetchDailyMeal() {
  const baseUrl = process.env.BASE_URL;
  const endpoint = "random.php";

  if (!baseUrl) {
    throw new Error("API configuration is missing");
  }

  const url = new URL(endpoint, baseUrl);

  try {
    const response = await fetch(url.toString());

    if (!response.ok) {
      throw new Error(`API request failed: ${response.statusText}`);
    }

    return response.json();
  } catch (error) {
    console.error("Failed to fetch daily meal:", error);
    throw error;
  }
}

export async function fetchAllMeals() {
  const baseUrl = process.env.BASE_URL;

  if (!baseUrl) {
    throw new Error("API configuration is missing");
  }

  const url = new URL("search.php", baseUrl);
  url.searchParams.set("s", "");

  const response = await fetch(url.toString());

  if (!response.ok) {
    throw new Error(`API request failed: ${response.statusText}`);
  }

  return response.json();
}
