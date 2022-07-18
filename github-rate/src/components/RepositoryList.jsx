import React, { useEffect, useState } from 'react'
import { FlatList, Text } from 'react-native'
import RepositoryItem from './RepositoryItem'

function RepositoryList() {
    const [repositories, setRepositories] = useState([])

    const fetchRepositories = async () => {
        const response = await fetch('http://localhost:5000/api/repositories')
        const json = await response.json()
        setRepositories(json)
    }

    useEffect(() => {
        fetchRepositories()
    }, [])

    const repositoriesNodes = repositories ? repositories.edge.map(edge => edge.node) : []

    return (
        <FlatList
            data={repositories}
            ItemSeparatorComponent={() => <Text />}
            renderItem={({ item: repo }) => (
                <RepositoryItem {...repo} />
            )}
        />
    )
}

export default RepositoryList