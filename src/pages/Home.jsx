import { Chat } from '../components';
import { Sidebar } from '../components';

function Home() {
    return (
        <div className="home">
            <Sidebar />
            <Chat />
        </div>
    );
}

export default Home;
