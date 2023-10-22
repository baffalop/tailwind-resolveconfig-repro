import config from '../tailwind.config'
import resolveConfig from 'tailwindcss/resolveConfig'

const resolved = resolveConfig(config)

// ts error: property 'colors' does not exist on type ...
console.log(resolved.theme.colors.cerulean)
console.log(resolved.theme.colors.red)

// no errors
console.log(resolved.theme.width)

// runtime error:
console.log(resolved.theme.extend.colors.cerulean)
