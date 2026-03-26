import React, { useState, useEffect } from 'react';

const TableFilterAPI = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filterId, setFilterId] = useState("");
    const [searchText, setSearchText] = useState("");

    // --- Pagination State ---
    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 10;

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((json) => {
                setData(json);
                setLoading(false);
            })
            .catch((err) => console.error("Fetch error:", err));
    }, []);

    // 1. First, filter the data
    const filteredRecords = data.filter((item) => {
        const matchesId = filterId === "" || item.userId.toString() === filterId;
        const matchesText = searchText === "" ||
            item.title.toLowerCase().includes(searchText.toLowerCase()) ||
            item.body.toLowerCase().includes(searchText.toLowerCase());
        return matchesId && matchesText;
    });

    // 2. Then, calculate pagination indices
    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

    // 3. Slice the filtered records to get only the current page (Immutable)
    const currentRecords = filteredRecords.slice(indexOfFirstRecord, indexOfLastRecord);
    const totalPages = Math.ceil(filteredRecords.length / recordsPerPage);

    // Reset to page 1 whenever filters change
    useEffect(() => {
        setCurrentPage(1);
    }, [filterId, searchText]);

    if (loading) return <div>Loading records...</div>;

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial' }}>
            <h1>Paginated Posts Table</h1>

            {/* Filters */}
            <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
                <div>
                    <label>User ID: </label>
                    <input type="number" value={filterId} onChange={(e) => setFilterId(e.target.value)} style={{ padding: '5px' }} />
                </div>
                <div>
                    <label>Search Text: </label>
                    <input type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)} style={{ padding: '5px', width: '200px' }} />
                </div>
            </div>

            {/* Table */}
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr style={{ backgroundColor: '#f2f2f2', textAlign: 'left' }}>
                        <th style={tableStyle}>User ID</th>
                        <th style={tableStyle}>Title</th>
                        <th style={tableStyle}>Body</th>
                    </tr>
                </thead>
                <tbody>
                    {currentRecords.map((item) => (
                        <tr key={item.id}>
                            <td style={tableStyle}>{item.userId}</td>
                            <td style={tableStyle}><strong>{item.title}</strong></td>
                            <td style={tableStyle}>{item.body}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Pagination Controls */}
            <div style={{ marginTop: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <button
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage(prev => prev - 1)}
                    style={buttonStyle}
                >
                    Previous
                </button>

                <span>Page {currentPage} of {totalPages || 1}</span>

                <button
                    disabled={currentPage === totalPages || totalPages === 0}
                    onClick={() => setCurrentPage(prev => prev + 1)}
                    style={buttonStyle}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

const tableStyle = { padding: '12px', border: '1px solid #ddd' };
const buttonStyle = { padding: '8px 16px', cursor: 'pointer' };

export default TableFilterAPI;