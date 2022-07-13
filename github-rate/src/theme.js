import { Platform } from "react-native"

const theme = {
    appBar: {
        primary: '#24292e',
        textSecondary: '#999',
        textPrimary: '#fff'
    },
    colors: {
        textPrimary: '#24292e',
        textSecondary: '#586069',
        primary: Platform.select({
            ios: '#24292e',
            android: 'red',
            default: 'purple'
        }),
        white: '#FFF'
    },
    fontSizes: {
        body: 14,
        subheading: 16,
    },
    fonts: {
        main: 'System'
    },
    fontWeight: {
        normal: '400',
        bold: '700'
    }
}

export default theme