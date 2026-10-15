import React from 'react'
import Card from '../Components/ui/Card'
import Button from '../Components/ui/Button'
const About = () => {
  return (
    <>
    <main>
      <h1>About Us</h1>
      <p>This page contains information about our application.</p>
      
    </main>

    <Card title="phone" description="A powerful phone">
      <p className="mb-2 text-red-600"> Order now, limited stock available</p>
       <p className="mb-2 font-semibold text-green-600">
      Price: $50
    </p>
  <Button text="Buy Now" onClick={() => alert("Added!")} />
</Card>
    </>
  )
}

export default About