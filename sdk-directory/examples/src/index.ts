import { SwaggerPetstore } from 'swagger petstore';

(async () => {
  const swaggerPetstore = new SwaggerPetstore({});

  const { data } = await swaggerPetstore.logout.logsOutCurrentLoggedInUserSession_();

  console.log(data);
})();
