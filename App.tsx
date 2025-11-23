import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import { Home } from './pages/Home';
import { AiBuilder } from './pages/AiBuilder';
import { DocPage } from './pages/DocPage';

// Primitives
import { Button } from './components/ui-lib/Button';
import { Card, CardHeader, CardTitle, CardContent } from './components/ui-lib/Card';
import { Input } from './components/ui-lib/Input';
import { Badge } from './components/ui-lib/Badge';
import { Avatar, AvatarFallback } from './components/ui-lib/Avatar';
import { Alert } from './components/ui-lib/Alert';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './components/ui-lib/Tabs';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './components/ui-lib/Accordion';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from './components/ui-lib/Dialog';
import { Switch } from './components/ui-lib/Switch';
import { Skeleton } from './components/ui-lib/Skeleton';
import { Checkbox } from './components/ui-lib/Checkbox';
import { RadioGroup, RadioGroupItem } from './components/ui-lib/RadioGroup';
import { Select } from './components/ui-lib/Select';
import { Textarea } from './components/ui-lib/Textarea';
import { Slider } from './components/ui-lib/Slider';
import { Progress } from './components/ui-lib/Progress';
import { Separator } from './components/ui-lib/Separator';
import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from './components/ui-lib/Sheet';
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from './components/ui-lib/Table';
import { Label } from './components/ui-lib/Label';

// Blocks
import { Hero } from './components/blocks/Hero';
import { Features } from './components/blocks/Features';
import { Pricing } from './components/blocks/Pricing';
import { Testimonials } from './components/blocks/Testimonials';
import { Stats } from './components/blocks/Stats';
import { CTA } from './components/blocks/CTA';
import { FAQ } from './components/blocks/FAQ';
import { Team } from './components/blocks/Team';
import { Contact } from './components/blocks/Contact';
import { Blog } from './components/blocks/Blog';

import { Footer } from './components/Footer';
import { Menu, X, Github, Layers, Search } from 'lucide-react';
import { ThemeToggle } from './components/ThemeToggle';
import { SearchDialog } from './components/SearchDialog';

// Example Code Snippets (Simplified for brevity, ideally imported or separate)
const DEMO_CODES = {
  BUTTON: `import { Button } from "@/components/ui/button"\n\nexport function ButtonDemo() { return <Button>Button</Button> }`,
  INPUT: `import { Input } from "@/components/ui/input"\n\nexport function InputDemo() { return <Input type="email" placeholder="Email" /> }`,
  // ... others would follow same pattern
};

const AppContent: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background flex flex-col text-foreground transition-colors duration-300">
      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
      
      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center px-4 sm:px-8 mx-auto max-w-screen-2xl">
          <div className="mr-4 hidden md:flex">
            <Link to="/" className="mr-6 flex items-center space-x-2">
              <Layers className="h-6 w-6 text-primary" />
              <span className="hidden font-bold sm:inline-block text-lg tracking-tight">
                NextUI Gen
              </span>
            </Link>
          </div>
          
          <button 
            className="inline-flex items-center justify-center rounded-md p-2 text-muted-foreground hover:bg-accent md:hidden mr-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-5 w-5"/> : <Menu className="h-5 w-5" />}
            <span className="sr-only">Toggle Menu</span>
          </button>

          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none">
              <button 
                onClick={() => setSearchOpen(true)}
                className="inline-flex items-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground px-4 py-2 text-sm text-muted-foreground shadow-sm h-9 w-full justify-start md:w-64"
              >
                <Search className="mr-2 h-4 w-4" />
                <span className="hidden lg:inline-flex">Search documentation...</span>
                <span className="inline-flex lg:hidden">Search...</span>
                <kbd className="pointer-events-none absolute right-1.5 top-1.5 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
                  <span className="text-xs">⌘</span>K
                </kbd>
              </button>
            </div>
            <nav className="flex items-center gap-2">
               <a href="#" className="w-9 h-9 flex items-center justify-center rounded-md hover:bg-accent hover:text-accent-foreground transition-colors">
                 <Github className="h-5 w-5" />
               </a>
               <ThemeToggle />
            </nav>
          </div>
        </div>
      </header>

      <div className="flex-1 container flex-row md:flex mx-auto max-w-screen-2xl items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10 px-4 sm:px-8">
        <Sidebar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
        
        <main className="relative py-6 lg:gap-10 lg:py-8 w-full min-w-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/installation" element={
              <div className="max-w-3xl space-y-6">
                 <h1 className="text-4xl font-bold text-foreground">Installation</h1>
                 <p className="text-muted-foreground text-lg">
                   This library is not a dependency you install. It is a set of components you copy and paste into your project.
                 </p>
                 <div className="p-4 bg-zinc-950 rounded-md border border-border">
                   <h3 className="font-mono text-sm text-zinc-400 mb-2">Add utilities</h3>
                   <pre className="text-sm text-zinc-300">npm install tailwindcss-animate class-variance-authority clsx tailwind-merge</pre>
                 </div>
              </div>
            } />
            <Route path="/ai-generator" element={<AiBuilder />} />
            
            {/* Existing Components */}
            <Route path="/components/button" element={<DocPage title="Button" description="Displays a button." component={<Button>Button</Button>} code={DEMO_CODES.BUTTON} />} />
            <Route path="/components/input" element={<DocPage title="Input" description="Displays a form input." component={<div className="max-w-sm space-y-2"><Input type="email" placeholder="Email" /><Input type="password" placeholder="Password" /></div>} code={DEMO_CODES.INPUT} />} />
            <Route path="/components/card" element={<DocPage title="Card" description="Displays a card." component={<Card className="w-[350px]"><CardHeader><CardTitle>Title</CardTitle></CardHeader><CardContent>Content</CardContent></Card>} code="<Card>...</Card>" />} />
            <Route path="/components/badge" element={<DocPage title="Badge" description="Displays a badge." component={<div className="flex gap-2"><Badge>Default</Badge><Badge variant="secondary">Secondary</Badge></div>} code="<Badge>Badge</Badge>" />} />
            <Route path="/components/avatar" element={<DocPage title="Avatar" description="An image element with a fallback." component={<Avatar><AvatarFallback>CN</AvatarFallback></Avatar>} code="<Avatar>...</Avatar>" />} />
            <Route path="/components/alert" element={<DocPage title="Alert" description="Displays a callout." component={<Alert title="Heads up!">You can add components using the cli.</Alert>} code="<Alert>...</Alert>" />} />
            <Route path="/components/tabs" element={<DocPage title="Tabs" description="Layered sections of content." component={<Tabs defaultValue="a" className="w-[400px]"><TabsList><TabsTrigger value="a">Tab A</TabsTrigger><TabsTrigger value="b">Tab B</TabsTrigger></TabsList><TabsContent value="a">Content A</TabsContent><TabsContent value="b">Content B</TabsContent></Tabs>} code="<Tabs>...</Tabs>" />} />
            <Route path="/components/accordion" element={<DocPage title="Accordion" description="Vertically stacked interactive headings." component={<Accordion type="single" collapsible className="w-full"><AccordionItem value="1"><AccordionTrigger>Item 1</AccordionTrigger><AccordionContent>Content 1</AccordionContent></AccordionItem></Accordion>} code="<Accordion>...</Accordion>" />} />
            <Route path="/components/dialog" element={<DocPage title="Dialog" description="A window overlaid on content." component={<Dialog><DialogTrigger asChild><Button variant="outline">Open</Button></DialogTrigger><DialogContent><DialogHeader><DialogTitle>Dialog</DialogTitle></DialogHeader>Content</DialogContent></Dialog>} code="<Dialog>...</Dialog>" />} />
            <Route path="/components/switch" element={<DocPage title="Switch" description="Toggles between checked and not checked." component={<Switch />} code="<Switch />" />} />
            <Route path="/components/skeleton" element={<DocPage title="Skeleton" description="Placeholder for loading state." component={<div className="flex items-center space-x-4"><Skeleton className="h-12 w-12 rounded-full" /><div className="space-y-2"><Skeleton className="h-4 w-[250px]" /><Skeleton className="h-4 w-[200px]" /></div></div>} code="<Skeleton />" />} />

            {/* New Components */}
            <Route path="/components/checkbox" element={<DocPage title="Checkbox" description="A control that allows the user to toggle between checked and not checked." component={<div className="flex items-center space-x-2"><Checkbox id="terms" /><Label htmlFor="terms">Accept terms</Label></div>} code="<Checkbox />" />} />
            <Route path="/components/radio-group" element={<DocPage title="Radio Group" description="A set of checkable buttons." component={<RadioGroup defaultValue="option-one"><div className="flex items-center space-x-2"><RadioGroupItem value="option-one" id="option-one" /><Label htmlFor="option-one">Option One</Label></div><div className="flex items-center space-x-2"><RadioGroupItem value="option-two" id="option-two" /><Label htmlFor="option-two">Option Two</Label></div></RadioGroup>} code="<RadioGroup>...</RadioGroup>" />} />
            <Route path="/components/select" element={<DocPage title="Select" description="Displays a list of options for the user to pick from." component={<div className="w-[200px]"><Select><option>Option 1</option><option>Option 2</option></Select></div>} code="<Select>...</Select>" />} />
            <Route path="/components/textarea" element={<DocPage title="Textarea" description="Displays a form textarea." component={<div className="max-w-sm"><Textarea placeholder="Type your message here." /></div>} code="<Textarea />" />} />
            <Route path="/components/slider" element={<DocPage title="Slider" description="An input where the user selects a value from within a given range." component={<div className="w-[300px]"><Slider defaultValue={50} max={100} step={1} /></div>} code="<Slider />" />} />
            <Route path="/components/progress" element={<DocPage title="Progress" description="Displays an indicator showing the completion progress of a task." component={<div className="w-[300px]"><Progress value={33} /></div>} code="<Progress value={33} />" />} />
            <Route path="/components/separator" element={<DocPage title="Separator" description="Visually or semantically separates content." component={<div className="space-y-1"><div><h4 className="text-sm font-medium leading-none">Radix Primitives</h4><p className="text-sm text-muted-foreground">An open-source UI component library.</p></div><Separator className="my-4" /><div className="flex h-5 items-center space-x-4 text-sm"><div>Blog</div><Separator orientation="vertical" /><div>Docs</div><Separator orientation="vertical" /><div>Source</div></div></div>} code="<Separator />" />} />
            <Route path="/components/sheet" element={<DocPage title="Sheet" description="Extends the Dialog component to display content that complements the main screen." component={<Sheet><SheetTrigger asChild><Button variant="outline">Open Sheet</Button></SheetTrigger><SheetContent><SheetHeader><SheetTitle>Edit profile</SheetTitle><SheetDescription>Make changes to your profile here.</SheetDescription></SheetHeader><div className="py-4">Content goes here</div><SheetFooter><Button type="submit">Save changes</Button></SheetFooter></SheetContent></Sheet>} code="<Sheet>...</Sheet>" />} />
            <Route path="/components/table" element={<DocPage title="Table" description="A responsive table component." component={<Table><TableCaption>A list of your recent invoices.</TableCaption><TableHeader><TableRow><TableHead className="w-[100px]">Invoice</TableHead><TableHead>Status</TableHead><TableHead>Method</TableHead><TableHead className="text-right">Amount</TableHead></TableRow></TableHeader><TableBody><TableRow><TableCell className="font-medium">INV-001</TableCell><TableCell>Paid</TableCell><TableCell>Credit Card</TableCell><TableCell className="text-right">$250.00</TableCell></TableRow><TableRow><TableCell className="font-medium">INV-002</TableCell><TableCell>Pending</TableCell><TableCell>PayPal</TableCell><TableCell className="text-right">$150.00</TableCell></TableRow></TableBody><TableFooter><TableRow><TableCell colSpan={3}>Total</TableCell><TableCell className="text-right">$400.00</TableCell></TableRow></TableFooter></Table>} code="<Table>...</Table>" />} />
            
            {/* Blocks */}
            <Route path="/blocks/hero" element={<Hero />} />
            <Route path="/blocks/features" element={<Features />} />
            <Route path="/blocks/pricing" element={<Pricing />} />
            <Route path="/blocks/testimonials" element={<Testimonials />} />
            <Route path="/blocks/stats" element={<Stats />} />
            <Route path="/blocks/cta" element={<CTA />} />
            <Route path="/blocks/faq" element={<FAQ />} />
            <Route path="/blocks/team" element={<Team />} />
            <Route path="/blocks/contact" element={<Contact />} />
            <Route path="/blocks/blog" element={<Blog />} />

          </Routes>
        </main>
      </div>
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
