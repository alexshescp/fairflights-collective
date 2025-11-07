import React, { useState } from 'react';
import { MailCheck, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

/**
 * NewsletterCTA offers an opt-in briefing subscription to maintain engagement
 * between milestones. Simulated async handling illustrates best practices for
 * controlled forms without requiring a backend.
 */
const NewsletterCTA = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email.trim()) {
      toast({
        title: 'Email required',
        description: 'Please add your email address to receive the litigation briefings.',
        variant: 'destructive'
      });
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: 'Subscribed',
        description: 'Thanks for joining the FairFlights briefing list. Expect monthly updates with milestones.',
        variant: 'default'
      });
      setEmail('');
    }, 1200);
  };

  return (
    <section id="newsletter" className="section bg-gradient-to-r from-suit-50 via-white to-justice-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto card text-center">
          <MailCheck size={40} className="mx-auto text-suit-600 mb-4" />
          <h2 className="heading-2 mb-4">Stay informed with monthly briefings</h2>
          <p className="subtitle mb-8">
            Receive concise updates on regulatory actions, negotiation windows, and calls-to-action. We respect your inbox and
            send one curated summary per month.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              value={email}
              onChange={event => setEmail(event.target.value)}
              placeholder="your.email@example.com"
              className="flex-1 form-input"
              aria-describedby="newsletter-helper"
            />
            <button
              type="submit"
              className="btn btn-primary inline-flex items-center justify-center"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={18} className="mr-2 animate-spin" />
                  Joining…
                </>
              ) : (
                'Subscribe'
              )}
            </button>
          </form>

          <p id="newsletter-helper" className="text-xs text-justice-500 mt-4">
            We only use your email to deliver case updates. Unsubscribe at any time via the footer link.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterCTA;
