async function data(limit = 50, page = 1) {
  const res = await fetch(
    "https://picsum.photos/v2/list?page=" + page + "&limit=" + limit
  );
  return res.json();
}

// data().then((data) => {
//   console.log(data);
// });
const getProfiles = async (limit, page) => {
  const profiles = await data(limit, page);
  return profiles.map((element) => {
    const { author, download_url, width, height, id } = element;
    return { author, download_url, width, height, id };
  });
};

export { getProfiles };
