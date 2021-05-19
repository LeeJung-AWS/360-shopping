import express, { Request, Response, NextFunction}  from 'express';
import routes from './routes';
// import routesTest from './routes/routesTest';

const app = express();
const PORT = process.env.PORT || 3001;

// express middleware, used to be bodyparser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve up static assets
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('frontend/build'));
  }

// Add routes
app.use(routes);
// app.use('/api', routesTest);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message });
});

// Start the API server
app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);