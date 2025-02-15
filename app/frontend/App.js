import { useState, useEffect } from 'react';

function App() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('/api/data')
            .then(res => res.json())
            .then(data => setData(data))
            .catch(err => console.error("Error fetching data:", err));
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <h1>Kubernetes Microservices Demo</h1>
                {data ? (
                    <div>
                        <p>Message from Backend: {data.message}</p>
                        <p>Hostname: {data.hostname}</p>
                    </div>
                ) : (
                    <p>Loading data from backend...</p>
                )}
            </header>
        </div>
    );
}

export default App;
