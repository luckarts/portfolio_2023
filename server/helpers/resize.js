import resize from './thumbnails';

export default async (req, res) => {
  // Extract the query-parameter

  const widthString = 1;
  const heightString = 1;
  const format = req.query.format;
  const image = 'public/img/' + req.params.img;
  // Parse to integer if possible
  let width, height;
  if (widthString) {
    width = parseInt(widthString);
  }
  if (heightString) {
    height = parseInt(heightString);
  }

  // Set the content-type of the response
  res.type(`image/${format || 'png'}`);

  try {
    // Get the resized image
    const stream = await resize(image, format, width, height);
    stream.pipe(res);
  } catch (error) {
    console.log('image thum generation error is: ', String(error));
    res.status(404).send();
  }
};
