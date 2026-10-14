import React from 'react'
import Button from "../Components/ui/Button";
import Input from "../Components/ui/Input"


const Home = () => {

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");

    console.log(name);
    console.log(email);
    console.log(password);
  }

   function hello() {
    alert("hello world");
  }
  return (
    <>
     <main >
      <h1>Welcome to Home Page</h1>
      <p>This is the home page of our application.</p>

    </main>
    
     <div className="min-h-screen bg-sky-50 px-4 py-10">
          <h2 className="mb-6 text-center text-3xl font-bold text-slate-800">
            Create Account
          </h2>

          <form
            onSubmit={handleSubmit}
            className="mx-auto flex w-full max-w-md flex-col gap-5 rounded-2xl bg-white p-8 shadow-lg"
          >
            <Input name="name" placeholder="Enter your name" />

            <Input
              type="password"
              name="password"
              placeholder="Enter your password"
            />

            <Input
              type="email"
              name="email"
              placeholder="Enter your email please!"
            />

            <Button type="submit">Create Account</Button>
          </form>

          <div className="mt-6 flex justify-center">
            <Button onClick={hello}>Click</Button>
          </div>
        </div>
    </>
  )
}

export default Home