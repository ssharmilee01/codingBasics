import React, { useEffect, useState } from "react";
import Button from "./button";
import withLogging from "./withLoggin";


// 1. The Higher-Order Component
const withLoading = (WrappedComponent) => {
    return function EnhancedComponent({ isLoading, ...props }) {
        if (isLoading) return <h3 style={{ color: 'blue' }}>Loading data, please wait...</h3>;
        return <WrappedComponent {...props} />;
    };
};

// 2. A Basic Presentational Component
const UserList = ({ users }) => (
    <div>
        <h2>User Directory</h2>
        <ul>
            {users.map(user => <li key={user.id}>{user.name}</li>)}
        </ul>
    </div>
);

// 3. Enhance the component using the HOC
const UserListWithLoading = withLoading(UserList);

// 4. The Main App (Parent Component)
export default function HigherOrderComponent() {
    const [loading, setLoading] = useState(true);
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        // Simulate an API call with a 2-second delay
        setTimeout(() => {
            setUserData([
                { id: 1, name: 'Alice Johnson' },
                { id: 2, name: 'Bob Smith' },
                { id: 3, name: 'Charlie Brown' }
            ]);
            setLoading(false);
        }, 2000);
    }, []);

    return (
        <div style={{ padding: '20px' }}>
            <h1>My React App</h1>
            {/* 5. We pass the 'isLoading' prop which the HOC consumes */}
            <UserListWithLoading isLoading={loading} users={userData} />
        </div>
    );
}


