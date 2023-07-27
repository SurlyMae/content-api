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

describe("POST /content", () => {
  xit("should create content for user", async () => {
    // create test user
    // use test user to make the post request
    // delete the content that was created
    // delete the test user
    const res = await request(app).post("api/content").send({
      title: "TITLE",
      text: "TEXT",
      userId: "",
    });

    expect(res).toBe("hiiii");
    expect(res.status).toEqual(200);
  });
});
