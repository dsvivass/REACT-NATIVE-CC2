import { Text, StyleSheet } from 'react-native'
import theme from '../theme'

const styles = StyleSheet.create({
    text: {
        color: theme.colors.textPrimary,
        fontSize: theme.fontSizes.body,
        fontFamily: theme.fonts.main,
        fontWeight: theme.fontWeight.normal
    },
    colorPrimary: {
        color: theme.colors.primary
    },
    colorSecondary: {
        color: theme.colors.textSecondary
    },
    bold: {
        fontWeight: theme.fontWeight.bold
    },
    subheading: {
        fontSize: theme.fontSizes.subheading
    },
    center: {
        textAlign: 'center'
    }
})

export default function StyledText({ align, children, color, fontSize, fontWeight, style, ...restOfProps }) {

    const textStyles = [
        styles.text,
        align === 'center' && styles.center,
        color === 'primary' && styles.colorPrimary,
        color === 'secondary' && styles.colorSecondary,
        fontWeight === 'bold' && styles.bold,
        fontSize === 'subheading' && styles.subheading,
        style
    ]

    return (
        <Text style={textStyles} {...restOfProps}>
            {children}
        </Text>
    )
}