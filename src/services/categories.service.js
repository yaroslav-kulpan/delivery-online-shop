import BaseHttpService from "./base-http.service";

export default class CategoriesService extends BaseHttpService {
  getAllCategories = () => {
    return this.get("categories?limit=30");
  };
}
