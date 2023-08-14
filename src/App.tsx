import React from 'react';
import './App.css';
import { Layout } from './Components/Layout/layout';
import { Header } from './Components/Header/header';
import { Footer } from './Components/Footer/footer';
import { Board } from './Components/Board/board';
import { CardDetail } from './Components/Board/CardDetail/cardDetail';


function App() {
    return (
        <div className={'app'}>
            <Layout>
                <Header />
                    <main>
                        {/* <CardDetail /> */}
                        <Board />
                    </main>
                <Footer />
            </Layout>
        </div>
    );
}

export default App;
