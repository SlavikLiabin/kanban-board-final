import React from 'react';
import './App.css';
import { Layout } from './Components/Layout/layout';
import { Header } from './Components/Header/header';
import { Footer } from './Components/Footer/footer';
import { Board } from './Components/Board/board';


function App() {
    return (
        <div className={'app'}>
            <Layout>
                <Header />
                    <main>
                        <Board />
                    </main>
                <Footer />
            </Layout>
        </div>
    );
}

export default App;
