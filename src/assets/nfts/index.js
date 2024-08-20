function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

export default importAll(require.context("./", false, /\.(png|jpe?g|svg)$/));
