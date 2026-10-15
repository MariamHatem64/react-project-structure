import React from 'react'
import Button from "../Components/ui/Button";
import Input from "../Components/ui/Input"
import Card from '../Components/ui/Card';
import Table from "../Components/ui/Table";

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

            <Button text="Create Account" type="submit" variant="primary" />
          </form>

          <div className="mt-6 flex justify-center gap-3 ">
            
            <Button text="Save" variant="primary" onClick={() => alert("Saved!")} />

            <Button text="Delete" variant="danger" onClick={() => alert("Deleted!")} />

            <Button text="Disabled" disabled={true} />
          </div>
        </div>
<div className="my-10 flex flex-wrap justify-center gap-6">
        <Card title="Laptop" description="A powerful laptop">
          <p className="mb-2 font-semibold text-green-600">price 500$</p>
  <Button text="Buy Now" onClick={() => alert("Added!")} />
</Card>

<Card title="headphone" description="A good headphone for you!">
  <p className="mb-2 font-semibold text-green-600">price 100$</p>
  <Button text="Buy Now" onClick={() => alert("Added!")} />
</Card>

<Card title="airpods" description="good battary and small size ">
  <p className="mb-2 font-semibold text-green-600">price 200$</p>
  <Button text="Buy Now" onClick={() => alert("Added!")} />
</Card>

</div>


<div className="mx-auto mt-12 w-full max-w-4xl">
  <h2 className="mb-4 text-center text-2xl font-bold text-slate-800">
    Products Table
  </h2>

  <Table
    columns={["name", "price", "quantity"]}
    data={[
      { name: "Laptop", price: "$800", quantity: 5 },
      { name: "Headphones", price: "$50", quantity: 12 },
      { name: "Keyboard", price: "$30", quantity: 8 },
    ]}
    striped={true}
  />
</div>


    </>
  )
}

export default Home