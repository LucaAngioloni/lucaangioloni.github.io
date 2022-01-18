const postcssConfig = {
  plugins: [require("tailwindcss"), require("autoprefixer")],
};

postcssConfig.plugins.push(
  require("cssnano")({
    preset: [
      "default",
      {
        discardComments: {
          removeAll: true,
        },
      },
    ],
  })
);

module.exports = postcssConfig;
