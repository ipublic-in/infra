module.exports = {
    apps : [
      {
      name: "api",
      cwd: "/home/orientation/api",
      script: "node_modules/@nestjs/cli/bin/nest.js",
      args: "start --watch",
      // watch: ["src"],
      // Delay between restart
      // watch_delay: 1000,
      // ignore_watch : ["node_modules"]
    },
    {
      name: "spa",
      cwd: "/home/orientation/spa",
      script: "node_modules/@vue/cli-service/bin/vue-cli-service.js",
      args: "serve",
      // watch: ["src"],
      // Delay between restart
      // watch_delay: 1000,
      // ignore_watch : ["node_modules"]
    }
  ]
}