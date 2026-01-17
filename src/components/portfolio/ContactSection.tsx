import { useState } from 'react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { Mail, MapPin, Github, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useForm } from 'react-hook-form';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { toast } from 'sonner';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactSection() {
  const { ref, hasIntersected } = useIntersectionObserver({
    threshold: 0.3,
    freezeOnceVisible: true,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormData>({
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    console.log('Form submitted:', data);
    toast.success('Message sent successfully! I\'ll get back to you soon.');
    form.reset();
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      value: 'adityareachme1048@gmail.com',
      link: 'mailto:adityareachme1048@gmail.com',
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: 'GitHub',
      value: '@Aditya2829-debug',
      link: 'https://github.com/Aditya2829-debug',
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: 'Location',
      value: 'Kanpur, India',
      link: null,
    },
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl xl:text-5xl font-bold gradient-text mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground">
            Let's connect and build something amazing together
          </p>
        </div>

        <div
          ref={ref}
          className={`grid xl:grid-cols-2 gap-8 ${hasIntersected ? 'animate-fade-in' : 'opacity-0'}`}
        >
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="glass-bright rounded-2xl p-8 gradient-border-bright">
              <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-center gap-4">
                    <div className="p-3 rounded-xl glass-strong glow-primary">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground font-medium">{info.label}</p>
                      {info.link ? (
                        <a
                          href={info.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-foreground hover:text-primary transition-colors font-semibold"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-foreground font-semibold">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-bright rounded-2xl p-8 gradient-border-bright">
              <h3 className="text-xl font-bold text-foreground mb-4">Follow Me</h3>
              <p className="text-muted-foreground mb-4">
                Connect with me on social media and competitive programming platforms
              </p>
              <div className="flex flex-wrap gap-3">
                {['GitHub', 'LinkedIn', 'LeetCode', 'CodeForces', 'CodeChef', 'HackerRank'].map((platform) => (
                  <Button
                    key={platform}
                    variant="outline"
                    size="sm"
                    className="glass-strong hover:glass-bright hover:glow-primary border-primary/30 text-primary font-semibold"
                  >
                    {platform}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-bright rounded-2xl p-8 gradient-border-bright">
            <h3 className="text-2xl font-bold text-foreground mb-6">Send a Message</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  rules={{ required: 'Name is required' }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground font-semibold">Name</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Your name"
                          className="glass-strong border-border text-foreground"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  rules={{
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address',
                    },
                  }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground font-semibold">Email</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="email"
                          placeholder="your.email@example.com"
                          className="glass-strong border-border text-foreground"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  rules={{ required: 'Message is required' }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground font-semibold">Message</FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          placeholder="Your message..."
                          rows={5}
                          className="glass-strong border-border resize-none text-foreground"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  size="lg"
                  className="w-full glass-bright hover:glow-primary transition-all duration-300 bg-primary/20 border-primary/30 text-foreground font-bold"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-muted-foreground">
          <p>© 2026 Aditya Srivastava. Built with passion and code.</p>
        </div>
      </div>
    </section>
  );
}
