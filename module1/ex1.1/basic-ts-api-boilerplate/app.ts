import express from "express";

import moviesRouter from "./routes/movies";
import textsRouter from "./routes/texts";

const app = express();

let GetCounter = 0;
app.use((req,_res, next) => {
    
    if (req.method === "GET"){
        GetCounter++;
        console.log(`Request counter Get: ${GetCounter}`);
    }
    next();
}
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/movies", moviesRouter);
app.use('/texts'),textsRouter;

export default app;
