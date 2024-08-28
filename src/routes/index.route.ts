import userRoute from "./user.route";
import categoryRoute from "./category.route";
import productRoute from "./product.route";
import cartRoute from "./cart.route";
import orderRoute from "./order.route";

function apiRoute(app: any) {
  app.use("/api", userRoute);
  app.use("/api", categoryRoute);
  app.use("/api", productRoute);
  app.use("/api", cartRoute);
  app.use("/api", orderRoute);
}

export default apiRoute;
