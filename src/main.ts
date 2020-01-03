import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

const { PORT } = process.env;

if (!PORT) {
	throw new Error("Port is not provided.");
}

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	await app.listen(PORT);
}

bootstrap();