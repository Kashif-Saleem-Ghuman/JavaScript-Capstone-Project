const newLike = async (id) => {
  const data = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/oiEzvAHZtSIWS2sLpqLB/likes', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ item_id: id }),
  });
  return data;
};

const getLikes = async () => {
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/oiEzvAHZtSIWS2sLpqLB/likes');
  const series = await response.json();
  return series;
};

const likedItemID = async (mylikes, itemid) => {
  for (let i = 0; i < mylikes.length; i += 1) {
    if (itemid.toString() === mylikes[i].item_id) {
      return mylikes[i].likes;
    }
  }

  return 0;
};

export { newLike, getLikes, likedItemID };