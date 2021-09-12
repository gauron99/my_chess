// the server file (start server)
import app from "./app";

//for setting views, not messing with that for now
// app.set("views",path.join(__dirname,"../src/views"));

// app.get('/', (req: express.Request, res: express.Response) => {
// 	res.sendFile(path.join(__dirname,"../src/views/index.html")); // how to do this better?
// });

const server = app.listen(app.get("port"), () => {
  console.log("The application is listening on port "+app.get("port")+ "!");
	console.log("Press CTRL-C to shut me down");
});


export default server;