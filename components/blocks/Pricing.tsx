import React from 'react';
import { Check } from 'lucide-react';
import { Button } from '../ui-lib/Button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui-lib/Card';

export const Pricing: React.FC = () => {
  return (
    <section className="py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Pricing Plans</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Choose the perfect plan for your team. Simple, transparent pricing.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-3 md:gap-8">
          {/* Free Plan */}
          <Card>
            <CardHeader>
              <CardTitle>Free</CardTitle>
              <CardDescription>For hobbyists and side projects.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold">$0</div>
              <div className="text-sm text-muted-foreground">/month</div>
              <ul className="mt-4 space-y-2 text-sm">
                <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-500" /> 1 User</li>
                <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-500" /> 5 Projects</li>
                <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-500" /> Community Support</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant="outline">Get Started</Button>
            </CardFooter>
          </Card>

          {/* Pro Plan */}
          <Card className="border-primary shadow-lg">
            <CardHeader>
              <CardTitle>Pro</CardTitle>
              <CardDescription>For small teams and professionals.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold">$29</div>
              <div className="text-sm text-muted-foreground">/month</div>
               <ul className="mt-4 space-y-2 text-sm">
                <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-500" /> 5 Users</li>
                <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-500" /> Unlimited Projects</li>
                <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-500" /> Priority Support</li>
                <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-500" /> Analytics</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Subscribe</Button>
            </CardFooter>
          </Card>

          {/* Enterprise Plan */}
          <Card>
            <CardHeader>
              <CardTitle>Enterprise</CardTitle>
              <CardDescription>For large organizations.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold">Custom</div>
              <div className="text-sm text-muted-foreground">/year</div>
               <ul className="mt-4 space-y-2 text-sm">
                <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-500" /> Unlimited Users</li>
                <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-500" /> SSO & Advanced Security</li>
                <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-500" /> Dedicated Manager</li>
                <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-500" /> SLA</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant="outline">Contact Sales</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};
