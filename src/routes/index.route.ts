import userRoute from "./user.route";
import categoryRoute from "./category.route";
import productRoute from "./product.route";

function apiRoute(app: any) {
  app.use("/api", userRoute);
  app.use("/api", categoryRoute);
  app.use("/api", productRoute);
}

export default apiRoute;
