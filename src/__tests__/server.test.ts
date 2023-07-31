import app from "../server";
import request from "supertest";

describe("POST /signin", () => {
  it("signs in a user when given username & password", async () => {
    const testUser = { username: "testUser", password: "testPw" };

    const response = await request(app)
      .post("/signin")
      .send(testUser) //sends as json body
      .set("Accept", "application/json");

    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.status).toEqual(200);
    expect(response.body.user).toBeDefined();
    expect(response.body.token).toBeDefined();
  });
});
