import app from "../server";
import request from "supertest";

describe("POST /signin", () => {
  it("signs in a user when given username & password", async () => {
    const testUser = {
      username: process.env.TEST_USER_NAME,
      password: process.env.TEST_USER_PASSWORD,
    };

    const response = await request(app)
      .post("/signin")
      .send(testUser) //sends as json body
      .set("Accept", "application/json");

    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.status).toEqual(200);
    expect(response.body.user).toBeDefined();
    expect(response.body.token).toBeDefined();
  });

  it("does not sign in a user when given wrong username or password", async () => {
    const testUser = {
      username: "test name",
      password: "test password",
    };

    const response = await request(app)
      .post("/signin")
      .send(testUser)
      .set("Accept", "application/json");

    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.status).toEqual(200);
    expect(response.body.user).toBeUndefined();
    expect(response.body.token).toBeUndefined();
  });
});
