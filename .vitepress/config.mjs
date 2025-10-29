import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Nature'S Remedy Hub",
  description: "A modern blog dedicated to alternative natural medicine, providing in-depth, step-by-step guides to solving common health problems using nature's remedies. Explore homemade treatments for ailments like insomnia, digestive issues, headaches, immune boost, and stress relief, featuring randomly selected subjects such as herbal teas for sleep, essential oils for digestion, plant-based migraine relief, superfood smoothies for immunity, and mindfulness gardens for anxiety—perfect for holistic wellness seekers.",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Blog', link: '/blog/' },
      { text: 'About Us', link: '/about-us' },
      { text: 'Contact', link: '/contact' },
      { text: 'Resources', link: '/resources' }
    ],
    socialLinks: [],
    footer: {
      message: 'Built with VitePress & AI',
      copyright: `Copyright © ${new Date().getFullYear()} Nature'S Remedy Hub`
    }
  },
  head: [
    ['meta', { name: 'theme-color', content: '#228B22' }],
    ['link', { rel: 'stylesheet', href: '/styles.css' }]
  ],
  appearance: 'dark',
  lastUpdated: true
})
