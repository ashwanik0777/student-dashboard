// import { useState } from "react";

// export default function UnderDevLogin({ onLogin }) {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Dummy credentials
//     if (username == "A" && password == "A") {
//       localStorage.setItem("loggedIn", "true");
//       onLogin();
//     } else {
//       setError("Invalid ID or Password");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
//       <div className="bg-gray-900 p-10 rounded shadow-lg w-full max-w-md">
//         <h2 className="text-3xl font-bold mb-6 text-center">🚧 Under Development</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label className="block mb-1">User ID</label>
//             <input
//               type="text"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-700 rounded"
//               required
//             />
//           </div>
//           <div>
//             <label className="block mb-1">Password</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-700 rounded"
//               required
//             />
//           </div>
//           {error && <div className="text-red-500 text-sm">{error}</div>}
//           <button
//             type="submit"
//             className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded font-semibold"
//           >
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

import { useState, useEffect } from "react";

export default function UnderDevLogin({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const cachedUsername = localStorage.getItem("username");
    const cachedPassword = localStorage.getItem("password");
    const isLoggedIn = localStorage.getItem("loggedIn");

    // Auto-login if cached credentials are correct
    if (isLoggedIn === "true" && cachedUsername === "A" && cachedPassword === "A") {
      onLogin();
    }
  }, [onLogin]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === "A" && password === "A") {
      // Save credentials and login state
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      localStorage.setItem("loggedIn", "true");
      onLogin();
    } else {
      setError("Invalid ID or Password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="bg-gray-900 p-10 rounded shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center">🚧 Under Development</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1">User ID</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-700 rounded"
              required
            />
          </div>
          <div>
            <label className="block mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-700 rounded"
              required
            />
          </div>
          {error && <div className="text-red-500 text-sm">{error}</div>}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded font-semibold"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
