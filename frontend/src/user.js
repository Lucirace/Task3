import React, { useState } from "react";

const User = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const User = { name, email, age };

    try {
      const response = await fetch("http://localhost:3001/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(User),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage("User submitted successfully!");
        setName("");
        setEmail("");
        setAge("");
      } else {
        setMessage(`Error : ${result.message}`);
      }
    } catch (error) {
      setMessage(`Error : ${error.message}`);
    }
  };

  return (
    <div className="container mt-5">
      <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
        <div className="mb-5">
          <label
            for="name"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Name
          </label>

          <input
            type="text"
            id="name"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="testname"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            for="email"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="test@gmail.com"
            required
          />
        </div>
        <div className="mb-5">
          <label
            for="age"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Age{" "}
          </label>
          <input
            type="number"
            value={age}
            id="age"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="18"
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>

        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Register new account
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default User;
