import React from 'react'
import { FlatList, Text } from 'react-native'
import repositories from '../data/repositories'
import RepositoryItem from './RepositoryItem'

function RepositoryList() {
    return (
        <FlatList
            data={repositories}
            ItemSeparatorComponent={() => <Text />}
            renderItem={({ item: repo }) => (
                <RepositoryItem {...repo}/>
            )}
        />
    )
}

export default RepositoryList