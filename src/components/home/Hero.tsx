import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section 
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
      role="banner"
      aria-label="Welcome to Flona"
    >
      {/* Background Image with Gradient Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(
              to bottom,
              rgba(255, 236, 230, 0),
              rgba(183, 223, 227, 0)
            ),
            url('https://images.unsplash.com/photo-1557672186-269926e526c1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')
          `,
            backgroundSize: '80%',  // Make the image smaller (adjust percentage to your liking)
            backgroundPosition: 'center 10%',
        }}
      >
        {/* Fallback background for older browsers */}
        <div 
          className="absolute inset-0 bg-gradient-to-b from-rose-100/90 to-teal-100/70"
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-primary mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Because connection heals,
            <br />
            and every story matters.
          </motion.h1>

          <motion.p 
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Join our compassionate community where understanding meets support. 
            Share your journey in a safe, anonymous space designed for healing and growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-shadow"
              aria-label="Sign in with Google to join Flora"
            >
              Start Your Journey
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}