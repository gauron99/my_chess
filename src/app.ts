// main file
import express from 'express';
import path from 'path';

const app = express();

// configure port
if (process.argv.length === 3){
	console.log("3 arguments!",process.argv);

  var port = process.argv[2];

	//set port to listen on if given by cml parameter
	if (port.length === 4 && /^[0-9]{4}$/.test(port)){
		app.set('port',+port);
	}

} else { //default
	app.set('port',3333); 
}

//__dirname is where this gets run from, which is the .js in /build

// ---------- static files ---------- \\
app.use('/css',express.static(path.join(__dirname,"../src/public/css")))
app.use('/js',express.static(__dirname)); // ./build for js

// ---------- views for ejs ---------- \\
app.set('views',path.join( __dirname,'../views'));
app.set('view engine', 'ejs');
// console.log("Views:",path.join( __dirname,'../views'))

// ---------- render ---------- \\
app.get('/',(req: express.Request,res: express.Response) => {
	res.render('index');
});
// for callback of root(/) by others
app.get('/index',(req: express.Request,res: express.Response) => {
	res.render('index');
});

app.get('/singleplayer',(req: express.Request,res: express.Response) => {
	res.render('singleplayer');
});

app.get('/game',(req: express.Request,res: express.Response) => {
	res.render('game');
});

export default app;