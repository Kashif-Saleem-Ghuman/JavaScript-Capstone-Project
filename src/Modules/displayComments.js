const displayComments = (data) => {
  const displayCount = document.querySelector('.c4c');
  displayCount.innerHTML = `Comments(${data.length})`;
  return data.length;
};
export default displayComments;