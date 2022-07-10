import React from "react"
import { Text, View } from "react-native"
import RepositoryList from "./RepositoryList"
import AppBar from "./AppBar"
import { Route, Routes } from "react-router-native"

const Main = () => {
    return (
        <View style={{ flex: 1 }}>
            <AppBar />
            <Routes>
                <Route path='/' element={<RepositoryList />} >
                    
                </Route>
                <Route path='/signin' element={<Text>Working on it</Text>}>
                    
                </Route>
                {/* <Redirect to='/' /> */}
            </Routes>
        </View>
    )
}

export default Main