import { Server } from './Server';

const server = new Server().app;

server.listen(3000, () => {
  console.log(`App listening`)
})