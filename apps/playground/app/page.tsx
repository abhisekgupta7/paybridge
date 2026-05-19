"use client"

export default function HomePage() {
  const handlePayment = async () => {
    const response = await fetch("/api/initiate", {
      method: "POST", 
    })

    const data = await response.json()

    window.location.href = data.payment_url
  }

  return (
    <main>
      <button onClick={handlePayment}>
        Pay with Khalti
      </button>
    </main>
  )
}