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

describe("POST /content", () => {
  it("creates a content record for the user", async () => {
    const testUserA = {
      username: process.env.TEST_USER_A_NAME,
      password: process.env.TEST_USER_A_PASSWORD,
    };

    const testContent = {
      title: process.env.TEST_CONTENT_TITLE,
      text: process.env.TEST_CONTENT_TEXT,
    };

    const signIn = await request(app)
      .post("/signin")
      .send(testUserA) //sends as json body
      .set("Accept", "application/json");

    //grab response.body.token and send as bearer with post content request
    const response = await request(app)
      .post("/api/content")
      .send(testContent)
      .auth(signIn.body.token, { type: "bearer" });

    expect(response.body.content).toBeDefined();
    expect(response.status).toEqual(200);
    expect(response.body.content.userId).toBe(signIn.body.user.id);
  });
});
