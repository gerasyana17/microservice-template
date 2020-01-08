import express from "express";

interface Router {
    path: string;
    router: express.Router;
}

interface AppOptions {
    port: number;
    middleWares: Array<express.RequestHandler>;
    routerOptions: Router;
}

class App {
    public app: express.Application;
    public port: number;

    constructor(options: AppOptions) {
        const { port, middleWares, routerOptions } = options;
        this.app = express();
        this.port = port;
        this._setMiddlewares(middleWares);
        this._setRouter(routerOptions);
    }

    private _setMiddlewares(middleWares: Array<express.RequestHandler>): void {
        middleWares.forEach(middleWare => {
            this.app.use(middleWare);
        });
    }

    private _setRouter({ path, router }: Router): void {
        this.app.get("/ping", (req: express.Request, res: express.Response) => res.sendStatus(202));
        this.app.use(path, router);
    }

    listen(): void {
        this.app.listen(this.port, () => {
            console.log(`App listening on the http://localhost:${this.port}`);
        });
    }
}

export default App;