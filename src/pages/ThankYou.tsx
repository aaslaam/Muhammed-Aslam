
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export default function ThankYou() {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Redirect to home after 5 seconds
    const timeout = setTimeout(() => {
      navigate("/");
    }, 5000);
    
    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center max-w-md px-4">
        <div className="mb-6 text-primary">
          <CheckCircle className="h-16 w-16 mx-auto" />
        </div>
        <h1 className="text-4xl font-bold mb-4">Thank You!</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Your message has been received. I'll get back to you as soon as possible.
        </p>
        <Button onClick={() => navigate("/")}>
          Back to Home
        </Button>
        <p className="text-sm text-muted-foreground mt-6">
          You will be automatically redirected in a few seconds...
        </p>
      </div>
    </div>
  );
}
