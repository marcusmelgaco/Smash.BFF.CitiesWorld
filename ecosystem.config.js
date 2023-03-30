module.exports = {
  apps: [
    {
      name: "cities-world",
      script: "app.js",
      watch: ".",
      ignore_watch: ["node_modules", "public/*"],
    },
  ],
};
