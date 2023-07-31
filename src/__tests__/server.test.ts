import app from "../server";
import request from "supertest";

describe("POST /signup", () => {
  it("creates a user when give a password and unique username", async () => {
    const testUser = { username: "testUser", password: "testPw" };

    const response = await request(app)
      .post("/signup")
      .send(testUser) //sends as json body
      .set("Accept", "application/json");

    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.status).toEqual(200);
    expect(response.body.user).toBeDefined();
  });
});
