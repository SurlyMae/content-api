import app from "../server";
import request from "supertest";

describe("POST /content", () => {
  xit("creates a content record for the user", async () => {
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
