export default async function getCoins() {
  try {
    const response = await fetch("https://api.coincap.io/v2/assets");
    if (!response.ok) {
      throw new Error("Something went wrong with the request");
    }
    const coinData = await response.json();
    return coinData.data.slice(0, 50);
  } catch (error) {
    throw new Error(error.message);
  }
}
