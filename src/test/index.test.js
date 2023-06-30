const request = require("supertest");
const app = require("./index");

describe("Testando rota de autenticação", () => {
  it("Testando rota put user validate", async () => {
    const res = await request(app).get("/authenticate");
    expect(res.body).toHaveProperty("auth");
  });

  it("Testando rota de create user", async () => {
    const res = await request(app).get("/create");
    expect(res.body).toHaveProperty("message", "Usuário cadastrado com sucesso!");
  });
});
