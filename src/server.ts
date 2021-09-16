// the server file (start server)
import app from "./app";

const server = app.listen(app.get("port"), () => {
  console.log("The application is listening on port "+app.get("port")+ "!");
	console.log("Press CTRL-C to shut me down");
});

export default server;