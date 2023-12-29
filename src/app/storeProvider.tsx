'use client'
import { Provider } from 'react-redux'
import { Stored } from './lib/store/store'

export default function StoreProvider({
    children
}: {
    children: React.ReactNode
}) {
    return <Provider store={Stored}>{children}</Provider>
}