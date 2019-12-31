import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class UrlService {
  constructor() {}
  baseURL() {
    const baseUrl = "http://localhost:5000/";
    return baseUrl;
  }
}
