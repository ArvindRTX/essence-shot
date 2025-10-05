import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, Send } from "lucide-react";

const contactSchema = z.object({
  name: z.string().trim().min(2, { message: "Name must be at least 2 characters" }).max(100, { message: "Name must be less than 100 characters" }),
  phone: z.string().trim().min(10, { message: "Please enter a valid phone number" }).max(15, { message: "Phone number is too long" }),
  email: z.string().trim().email({ message: "Please enter a valid email address" }).max(255, { message: "Email must be less than 255 characters" }),
  service: z.string().trim().min(3, { message: "Please specify the service you're interested in" }).max(100, { message: "Service description is too long" }),
  message: z.string().trim().min(10, { message: "Message must be at least 10 characters" }).max(1000, { message: "Message must be less than 1000 characters" }),
});

type ContactFormData = z.infer<typeof contactSchema>;

interface ContactFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  defaultService?: string;
}

const ContactForm = ({ open, onOpenChange, defaultService = "" }: ContactFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      service: defaultService,
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      // Create WhatsApp message
      const message = `*New Photography Inquiry*\n\n*Name:* ${data.name}\n*Phone:* ${data.phone}\n*Email:* ${data.email}\n*Service:* ${data.service}\n*Message:* ${data.message}`;
      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/918438650107?text=${encodedMessage}`;
      
      // Open WhatsApp in new tab
      window.open(whatsappUrl, '_blank');
      
      toast({
        title: "Success!",
        description: "Opening WhatsApp to complete your inquiry. We'll get back to you soon!",
      });
      
      form.reset();
      onOpenChange(false);
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again or call us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto glass-card-light border-accent/20">
        <DialogHeader>
          <DialogTitle className="text-2xl font-serif text-foreground">Get in Touch</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Fill out the form below and we'll contact you shortly to discuss your photography needs.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" className="glass-card border-accent/20 focus:glass-glow" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input placeholder="8438650107" className="pl-10 glass-card border-accent/20 focus:glass-glow" {...field} />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input type="email" placeholder="john@example.com" className="pl-10 glass-card border-accent/20 focus:glass-glow" {...field} />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="service"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Service Interested In</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Wedding Photography, Portraits" className="glass-card border-accent/20 focus:glass-glow" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Tell us about your event, preferred dates, and any specific requirements..." 
                      className="min-h-[120px] resize-none glass-card border-accent/20 focus:glass-glow"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex gap-3 pt-4">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground glass-glow hover:scale-105 smooth-transition"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Inquiry
                  </>
                )}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => onOpenChange(false)}
                disabled={isSubmitting}
                className="glass-card border-accent/40 hover:glass-glow hover:scale-105 smooth-transition"
              >
                Cancel
              </Button>
            </div>

            <p className="text-xs text-center text-muted-foreground pt-2">
              By submitting, you'll be redirected to WhatsApp to complete your inquiry.
            </p>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactForm;