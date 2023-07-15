import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routes } from '~/routes';
import MainLayout from './layouts/mainLayout/mainLayout';

import './App.scss';

function App() {
    return (
        <Router>
            <div className="main">
                <Routes>
                    {routes.map((route, index) => {
                        const Page = route.component;
                        let Layout = MainLayout;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
