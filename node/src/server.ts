import app, { init } from '@/app';

const port = +process.env.PORT || 5000;

init().then(async () => {
  app.listen(port, () => {
    console.log(`Server is listening on port ${port}.`);
  });
});