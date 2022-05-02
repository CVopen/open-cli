declare module '*.css' {
  const content: { [selector: string]: string }
  export default content
}

declare module '*.less' {
  const content: { [selector: string]: string }
  export default content
}

declare module '*.svg'
declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.gif'
declare module '*.bmp'
declare module '*.tiff'

declare module 'lodash'

declare module 'validate-npm-package-name'
