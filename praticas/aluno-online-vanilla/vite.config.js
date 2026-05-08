export default {
  appType: "mpa",
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        login: "login.html",
      },
    },
  },

  server: {
    host: "0.0.0.0",
    port: 5173,
    watch: {
      usePolling: true,
    },
    hmr: {
      clientPort: 5173,
    },
  },
};
