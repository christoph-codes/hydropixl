/** @type {import('@remix-run/dev').AppConfig} */
export default {
	ignoredRouteFiles: ["**/.*"],
	serverDependenciesToBundle: ["@radix-ui/themes"], // https://github.com/remix-run/remix/discussions/7494
	appDirectory: "app",
	assetsBuildDirectory: "public/build",
	publicPath: "/build/",
	serverBuildPath: "build/index.js",
};
