import { Flex } from '@chakra-ui/react'
import { Routes, Route } from 'react-router-dom'
import { Dashboard } from './screens/dashboard/Dashboard'
import { Intro } from './screens/intro/Intro'
import { Tasks } from './screens/tasks/Tasks';
import Spend from './screens/spend/Spend';
import { Login } from './screens/login/Login';
import { FC, PropsWithChildren } from 'react';
import Navigation from './shared/Navigation';

const WithMainNavigation: FC<PropsWithChildren<{}>> = ({children}) => <>{children}<Navigation/></>

function App() {
    return (
        <Flex width="100%" justify="center">
            <Routes>
                <Route path="/" element={<Intro/>}/>
                <Route path="login" element={<Login/>}/>
                <Route path="dashboard" element={<WithMainNavigation><Dashboard/></WithMainNavigation>}/>
                <Route path="tasks" element={<WithMainNavigation><Tasks/></WithMainNavigation>}/>
                <Route path="spend" element={<WithMainNavigation><Spend/></WithMainNavigation>}/>
            </Routes>
        </Flex>
    )
}

export default App
