import { Formik, useField } from "formik"
import { Button, Text, TextInput, StyleSheet, View } from "react-native"
import StyledTextInput from '../components/StyledTextInput'
import StyledText from "../components/StyledText"

const initialValues = {
    email: '',
    password: ''
}

const styles = StyleSheet.create({
    error: {
        color: 'red',
        fontSize: 12,
        marginBottom: 20,
        marginTop: -5
    },
    form: {
        margin: 12
    }
})

const FormikInputValue = ({ name, ...props }) => {

    const [field, meta, helpers] = useField(name)

    return <>
        <StyledTextInput
            value={field.value}
            error={meta.error}
            onChangeText={value => helpers.setValue(value)}
            {...props}
        />
        {meta.error && <StyledText style={styles.error}>{meta.error}</StyledText>}
    </>
}

const validate = values => {
    const errors = {}

    if (!values.email) {
        errors.email = 'Email is required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }

    if (values.password.length < 8) {
        errors.password = 'password must be higher than 8 characters'
    }

    console.log(errors)

    return errors
}

const LoginPage = () => {
    return <Formik
        validate={validate}
        initialValues={initialValues}
        onSubmit={(values) => console.log(values)}>

        {({ handleChange, handleSubmit, values }) => {
            return (
                <View style={styles.form}>
                    <FormikInputValue
                        placeholder="email"
                        name='email'
                    />
                    <FormikInputValue
                        placeholder="password"
                        name='password'
                        secureTextEntry
                    />
                    <Button onPress={handleSubmit} title='Login' />
                </View>
            )
        }}

    </Formik>
}

export default LoginPage

