const newComment = async (id, username, comment) => {
  const data = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/oiEzvAHZtSIWS2sLpqLB/comments', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: id,
      username,
      comment,
    }),
  });
  return data;
};

const getComments = async (id) => {
  const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/oiEzvAHZtSIWS2sLpqLB/comments?item_id=${id}`);
  const comments = await response.json();
  return comments;
};

export { newComment, getComments };
