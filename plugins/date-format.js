const dateFormat = (timestamp) => {
  const dateString = timestamp.split('-');
  const month = dateString[1];
  const day = dateString[2].substr(0, 2)
  const year = dateString[0];

  return `${month}/${day}/${year}`;
};

export default dateFormat;
