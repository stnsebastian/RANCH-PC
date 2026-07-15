import { defineConfig } from 'vite'
import fs from 'fs'
import path from 'path'

// Custom plugin to copy icon.png from ranchillo-ventas
const copyIconPlugin = () => ({
  name: 'copy-icon-plugin',
  buildStart() {
    const sourceDir = path.resolve(__dirname, '../ranchillo-ventas')
    const destDir = __dirname
    const publicDestDir = path.resolve(__dirname, 'public')

    const iconSrc = path.join(sourceDir, 'icon.png')
    const iconRootDest = path.join(destDir, 'icon.png')
    const iconPublicDest = path.join(publicDestDir, 'icon.png')

    // Copy icon.png to root
    if (fs.existsSync(iconSrc)) {
      try {
        fs.copyFileSync(iconSrc, iconRootDest)
        console.log('✓ icon.png copiado con éxito a la raíz')
      } catch (err) {
        console.error('Error copiando icon.png a la raíz:', err)
      }
    }
    // Copy icon.png to public
    if (!fs.existsSync(publicDestDir)) {
      fs.mkdirSync(publicDestDir, { recursive: true })
    }
    if (fs.existsSync(iconSrc)) {
      try {
        fs.copyFileSync(iconSrc, iconPublicDest)
        console.log('✓ icon.png copiado con éxito a public/')
      } catch (err) {
        console.error('Error copiando icon.png a public:', err)
      }
    }
  }
})

export default defineConfig({
  plugins: [copyIconPlugin()]
})
