import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
    const port = process.env.PORT ?? 3000;

    const app = await NestFactory.create(AppModule);

    const config = new DocumentBuilder()
        .setTitle('Try Typescript Unit Testing')
        .setDescription('The API description')
        .setVersion('3.1')
        .build();

    const documentFactory = () => SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('swagger', app, documentFactory, {
        yamlDocumentUrl: 'swagger/yaml',
        jsonDocumentUrl: 'swagger/json',
    });

    await app.listen(port);
    Logger.log(`Server running on http://localhost:${port}`);
}
bootstrap();
