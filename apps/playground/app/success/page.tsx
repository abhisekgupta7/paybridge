"use client";

import { useEffect, useState } from "react";

export default function SuccessPage({
  searchParams,
}: {
  searchParams: {
    pidx?: string;
  };
}) {
  const [loading, setLoading] = useState(true);
  const [verified, setVerified] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    async function verifyPayment() {
      try {
        if (!searchParams.pidx) {
          setMessage("Missing payment ID");
          setLoading(false);
          return;
        }

        const response = await fetch("/api/verify", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            pidx: searchParams.pidx,
          }),
        });

        const data = await response.json();

        if (data.verified) {
          setVerified(true);
          setMessage(data.message);
        } else {
          setVerified(false);
          setMessage(data.message ?? "Payment verification failed");
        }
      } catch (error) {
        setVerified(false);
        setMessage("Something went wrong");
      } finally {
        setLoading(false);
      }
    }

    verifyPayment();
  }, [searchParams.pidx]);

  if (loading) {
    return <div>Verifying payment...</div>;
  }

  return (
    <div>
      <h1>{verified ? "Payment Successful" : "Payment Failed"}</h1>

      <p>{message}</p>

      <p>Pidx: {searchParams.pidx}</p>
    </div>
  );
}
