import React from 'react';
import './App.css';
import { Layout } from './Components/Layout/layout';
import { Header } from './Components/Header/header';
import { Footer } from './Components/Footer/footer';
import { Board } from './Components/Board/board';
import { CardDetail } from './Components/Board/CardDetail/cardDetail';
import { ContextWrapper } from './Components/Context/taskContext';


function App() {
    return (
        <div className={'app'}>
            <ContextWrapper>
                <Layout>
                    <Header />
                        <main>
                            {/* <CardDetail /> */}
                            <Board />
                        </main>
                    <Footer />
                </Layout>
            </ContextWrapper>
        </div>
    );
}

export default App;
