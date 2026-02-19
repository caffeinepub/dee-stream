import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all fields');
      return;
    }

    const mailtoLink = `mailto:dee.streaming.cinema@gmail.com?subject=Contact from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    
    window.location.href = mailtoLink;
    
    toast.success('Opening your email client...');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10 lg:mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Contact{' '}
              <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                DEE stream
              </span>
            </h2>
            <a
              href="mailto:dee.streaming.cinema@gmail.com"
              className="text-lg sm:text-xl text-blue-600 hover:text-blue-700 font-medium transition-colors duration-300"
            >
              dee.streaming.cinema@gmail.com
            </a>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 bg-gradient-to-br from-blue-50/50 to-white p-8 lg:p-10 rounded-2xl shadow-lg">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-base font-medium text-gray-900">
                Name
              </Label>
              <Input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="h-12 text-base transition-all duration-300 focus:ring-2 focus:ring-blue-500"
                placeholder="Your name"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-base font-medium text-gray-900">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="h-12 text-base transition-all duration-300 focus:ring-2 focus:ring-blue-500"
                placeholder="your.email@example.com"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-base font-medium text-gray-900">
                Message
              </Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="min-h-[150px] text-base transition-all duration-300 focus:ring-2 focus:ring-blue-500"
                placeholder="Tell us about your inquiry..."
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-base lg:text-lg font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 transform"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
