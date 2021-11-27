module.exports = {
  // mode: 'jit',
  purge: {
    enabled: true,
    preserveHtmlElements: false,
    content: [
      './src/*.{js,css}'
    ],
    options: {
      keyframes: true,
      fontFace: true,
    },
  },
  theme: {
    colors: {
      blue: 'hsl(246, 80%, 60%)',
      white: 'hsl(0, 0%, 100%)',

      lightRedWork: 'hsl(15, 100%, 70%)',
      softBluePlay: 'hsl(195, 74%, 62%)',
      lightRedStudy: 'hsl(348, 100%, 68%)',
      limeGreenExercise: 'hsl(145, 58%, 55%)',
      violetSocial: 'hsl(264, 64%, 52%)',
      softOrangeCare: 'hsl(43, 84%, 65%)',

      veryDarkBlue: 'hsl(226, 43%, 10%)',
      darkBlue: "hsl(235, 46%, 20%)",
      desaturatedBlue: 'hsl(235, 45%, 61%)',
      paleBlue: 'hsl(236, 100%, 87%)',
    },
    extend: {
      backgroundImage: {
        'icon-work': "url('./images/icon-work.svg')",
        'icon-play': "url('./images/icon-play.svg')",
        'icon-study': "url('./images/icon-study.svg')",
        'icon-exercise': "url('./images/icon-exercise.svg')",
        'icon-social': "url('./images/icon-social.svg')",
        'icon-care': "url('./images/icon-self-care.svg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
