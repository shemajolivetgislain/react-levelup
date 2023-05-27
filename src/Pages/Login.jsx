import React from 'react'
import Input from '../components/Input'
function Login() {
  return (
    <form>
      <Input
        type="text"
        onChange={(e) => console.log(e.target.value)}
        name="username"
        pleaceholder="username"
      />
      <Input
        type="password"
        onChange={(e) => console.log(e.target.value)}
        name="username"
        pleaceholder="password"
      />
      <Input
        type="date"
        onChange={(e) => console.log(e.target.value)}
        name="Submit"
      />
      <Input
        type="submit"
        onChange={(e) => console.log(e.target.value)}
        name="Submit"
      />
    </form>
  );
}

export default Login