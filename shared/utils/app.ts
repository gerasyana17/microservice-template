import * as express from "express";
import { Request, Response } from 'express'
import { Application } from 'express';

interface Router {
    path: string;
    router: any;
}

interface AppOptions {
    port: number;
    middleWares: any[];
    routerOptions: Router;
}

class App {
    public app: Application
    public port: number

    constructor(options: AppOptions) {
        const { port, middleWares, routerOptions } = options;
        this.app = express()
        this.port = port
        this.middlewares(middleWares)
        this.router(routerOptions)
    }

    private middlewares(middleWares: any[]) {
        middleWares.forEach(middleWare => {
            this.app.use(middleWare)
        })
    }

    private router({ path, router }: Router) {
        this.app.get("/ping", (req: Request, res: Response) => res.sendStatus(202));
        this.app.use(path, router);
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log(`App listening on the http://localhost:${this.port}`)
        })
    }
}

export default App;