"use client"

import { useState } from 'react';
import { Code2, Users, Mic, MessageCircle, Send } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center p-4">
        <Code2 className="w-20 h-20 mb-6 text-primary animate-pulse" />
        <h1 className="text-5xl font-bold mb-4">AlgoManiacZ</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mb-8">
          Building the future of open source, one project at a time
        </p>
        <Button size="lg" className="animate-bounce">
          Join Our Community
        </Button>
      </section>

      {/* About Section */}
      <section className="min-h-screen bg-card p-8 flex flex-col items-center justify-center">
        <Users className="w-16 h-16 mb-6 text-primary" />
        <h2 className="text-4xl font-bold mb-8">About Us</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl">
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Our Mission</h3>
            <p className="text-muted-foreground">
              To foster innovation and collaboration in the open source community
            </p>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Our Vision</h3>
            <p className="text-muted-foreground">
              Creating a world where knowledge is freely shared and accessible
            </p>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Our Values</h3>
            <p className="text-muted-foreground">
              Transparency, collaboration, and continuous learning
            </p>
          </Card>
        </div>
      </section>

      {/* Guest Speakers Section */}
      <section className="min-h-screen p-8 flex flex-col items-center justify-center">
        <Mic className="w-16 h-16 mb-6 text-primary" />
        <h2 className="text-4xl font-bold mb-8">Guest Speakers</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl">
          {[1, 2, 3].map((speaker) => (
            <Card key={speaker} className="overflow-hidden">
              <img
                src={`https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=300&fit=crop`}
                alt={`Speaker ${speaker}`}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">John Doe</h3>
                <p className="text-muted-foreground mb-4">Senior Developer at Tech Corp</p>
                <p className="text-sm">
                  Expert in algorithms and data structures with 10+ years of experience
                </p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Q&A Section */}
      <section className="min-h-screen bg-card p-8 flex flex-col items-center justify-center">
        <MessageCircle className="w-16 h-16 mb-6 text-primary" />
        <h2 className="text-4xl font-bold mb-8">Questions & Answers</h2>
        <div className="max-w-3xl w-full space-y-6">
          {[
            {
              q: "How can I join AlgoManiacZ?",
              a: "You can join our community by signing up on our platform or joining our Discord server."
            },
            {
              q: "What kind of projects do you work on?",
              a: "We work on a variety of open source projects, from algorithms and data structures to full-stack applications."
            },
            {
              q: "Do you accept project contributions?",
              a: "Yes! We welcome contributions from developers of all skill levels. Check our GitHub repositories."
            }
          ].map((qa, index) => (
            <Card key={index} className="p-6">
              <h3 className="text-xl font-bold mb-2">{qa.q}</h3>
              <p className="text-muted-foreground">{qa.a}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="min-h-screen p-8 flex flex-col items-center justify-center">
        <Send className="w-16 h-16 mb-6 text-primary" />
        <h2 className="text-4xl font-bold mb-8">Contact Us</h2>
        <Card className="max-w-xl w-full p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={4}
              />
            </div>
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </Card>
      </section>
    </main>
  );
}