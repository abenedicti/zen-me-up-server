try {
  process.loadEnvFile();
} catch (error) {
  console.log('.env file not found. Using default values');
}
const jsonServer = require('json-server');
const server = jsonServer.create();

const config = jsonServer.defaults();
server.use(config);

const router = jsonServer.router('db.json');
server.use(router);

const PORT = process.env.PORT || 5003;
server.listen(PORT, () => {
  console.log(`JSON server running locally on port: http://localhost:${PORT}`);
});
