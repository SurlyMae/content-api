import app from "../server";
import request from "supertest";

describe("GET /", () => {
  it("responds with json", async () => {
    const res = await request(app).get("/");
    expect(res.body.message).toBe("hiiii");
    expect(res.status).toEqual(200);
  });
});
