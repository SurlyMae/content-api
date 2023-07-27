import app from "../server";
import request from "supertest";

describe("POST /user", () => {
  it("creates a user when give a password and unique username", async () => {
    const testUser = { username: "testUser", password: "testPw" };

    const response = await request(app)
      .post("/user")
      .send(testUser) //sends as json body
      .set("Accept", "application/json");

    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.status).toEqual(200);
    expect(response.body.user).toBeDefined();
  });
});
