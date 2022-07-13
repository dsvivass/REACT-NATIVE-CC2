import React from "react"
import { View } from "react-native"
import RepositoryList from "./RepositoryList"
import AppBar from "./AppBar"
import { Route, Routes } from "react-router-native"
import LoginPage from "../pages/Login"
// import { Platform } from "react-native-web"

// Otra forma de importar un componente segun la plataforma

// const AppBar = Platform.select({
//     ios: () => require('./IOSAppBar.jsx').default,
//     default: () => require('AppBar.jsx').default
// })()

const Main = () => {
    return (
        <View style={{ flex: 1 }}>
            <AppBar />
            <Routes>
                <Route path='/' element={<RepositoryList />} >
                    
                </Route>
                <Route path='/signin' element={<LoginPage/>}>
                    
                </Route>
                {/* <Redirect to='/' /> */}
            </Routes>
        </View>
    )
}

export default Main