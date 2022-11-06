class ApiResponse {
  constructor(response, json) {
    this.raw = response;
    this.json = json;
    this.success = response.status >= 200 && response.status < 300;
  }
}

class API {
  constructor() {
    this.apiUrl = "https://devirenelektrotechniek.tk";
  }

  async Post(path, data, requestConfig) {
    const res = await fetch(`${this.apiUrl}${path}`, {
      method: "POST",
      headers: !!data ? { "Content-Type": "application/json" } : {},
      body: !!data ? JSON.stringify(data) : null,
      credentials: "include",
      mode: "cors",
      ...requestConfig,
    });
    const json = await res.json();
    return new ApiResponse(res, json);
  }

  async createOfferte(name, email, phone, subject, message) {
    return await this.Post("/api/offerte", {
      name,
      email,
      phone,
      subject,
      message,
    });
  }
}

export default new API();
