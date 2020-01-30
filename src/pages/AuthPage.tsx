import React from "react";

export const AuthPage = () => {
  return (
    <div>
      <h1>Auth Page</h1>
      <form>
        <label>
          Email: <input type="email" name="email"/>
        </label>
        <label>
          Password: <input type="password" name="name"/>
        </label>
        <input type="submit" value="Submit"/>
      </form>
    </div>
  )
};