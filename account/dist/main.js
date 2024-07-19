"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const config_1 = require("@nestjs/config");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./module/app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const config = app.get(config_1.ConfigService);
    app.setGlobalPrefix(config.get('HTTP_PREFIX'));
    const configSwagger = new swagger_1.DocumentBuilder()
        .setTitle(`${config.get('SERVICE_NAME')} microservice`)
        .setDescription('API Documentation')
        .addServer(`http://${config.get('HTTP_HOST')}:${config.get('HTTP_PORT')}${config.get('HTTP_PEFIX')}`)
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, configSwagger);
    swagger_1.SwaggerModule.setup(`${config.get('HTTP_PREFIX')}/docs`, app, document);
    await app.listen(config.get('HTTP_PORT'));
}
bootstrap();
//# sourceMappingURL=main.js.map