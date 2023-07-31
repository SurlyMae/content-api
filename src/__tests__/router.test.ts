import app from "../server";
import request from "supertest";

describe("GET /content", () => {
  it("gets all user's content", async () => {
    // use testuserB to get an array of content
    const testUserB = {
      username: process.env.TEST_USER_B_NAME,
      password: process.env.TEST_USER_B_PASSWORD,
    };

    const signIn = await request(app)
      .post("/signin")
      .send(testUserB) //sends as json body
      .set("Accept", "application/json");

    //grab response.body.token and send as bearer with get content request
    const response = await request(app)
      .get("/api/content")
      .auth(signIn.body.token, { type: "bearer" });

    expect(response.text).toBeDefined();
    expect(response.status).toEqual(200);
    expect(response.body.data).toBeDefined();
    response.body.data.forEach((content) => {
      expect(content.userId).toBe(signIn.body.user.id);
    });
  });
});
