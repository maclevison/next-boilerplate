import theme from 'styled-components'

// inferĂȘncia de tipos
type Theme = typeof theme

declare module 'styled-components' {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    export interface DefaultTheme extends Theme {}
}
