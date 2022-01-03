module.exports = {
  extract: {
    include: ['**/*.{jsx,tsx,html,css}'],
    exclude: ['node_modules', '.git', 'dist', 'build'],
  },
  theme: {
    extend: {
      colors: {
        blue: {
          solid: '#466FA4',
          footer: '#324253',
          light: {
            solid: '#86bde5',
          }
        },
        select: {
          gray: '#f8f4f4'
        }
      },
    },
  },
}