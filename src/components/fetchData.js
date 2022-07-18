export async function fetchGamesData(summonerName, region, count = 10) {
    const url =
      "http://lolmood.net/index.php?summonerName=" +
      summonerName +
      "&region=" +
      region +
      "&count=" +
      count;

    const res = await fetch(url);

    const data = await res.json();

    return data;
}