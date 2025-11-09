import { useState } from 'react'
import { useDesignStyle } from '@/contexts/DesignStyleContext'
import { cn } from '@/lib/utils'
import { DemoSection } from '../DemoSection'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { Label } from '../ui/label'
import { Checkbox } from '../ui/checkbox'
import { Switch } from '../ui/switch'
import { Tabs, TabsList, TabsContent } from '../ui/tabs'
import { StyledTabTrigger } from '../StyledTabTrigger'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../ui/accordion'
import { Alert, AlertTitle, AlertDescription } from '../ui/alert'
import { Badge } from '../ui/badge'
import { Progress } from '../ui/progress'
import { Slider } from '../ui/slider'
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '../ui/dialog'
import { StyledCard } from '../StyledCard'

/**
 * GlassmorphismLayout Component
 *
 * A modern layout featuring frosted glass effects, floating cards, and subtle blur.
 * Emphasizes depth through layering, generous spacing, and translucent surfaces.
 */
export function GlassmorphismLayout() {
  const { currentStyle } = useDesignStyle()
  const [uploadProgress] = useState(67)
  const [volume, setVolume] = useState(75)
  const [termsAccepted, setTermsAccepted] = useState(false)
  const [notificationsEnabled, setNotificationsEnabled] = useState(true)

  return (
    <div className="w-full space-y-16">
      {/* Floating Hero Card with Glass Effect */}
      <div className="relative">
        <StyledCard
          title="Welcome to Acme Corp"
          content="Your trusted partner in innovative business solutions. Explore our comprehensive dashboard to manage your projects, team, and resources all in one place."
          className="w-full transform hover:scale-[1.02] transition-transform duration-300"
        />
      </div>

      {/* Quick Actions - Floating Buttons with Generous Spacing */}
      <div className="space-y-6">
        <h2 className={cn(currentStyle.card.title, "text-center")}>Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Button className={cn(currentStyle.button.base, currentStyle.button.primary, "py-6 text-lg shadow-xl")}>
            Create New Project
          </Button>
          <Button className={cn(currentStyle.button.base, currentStyle.button.secondary, "py-6 text-lg shadow-xl")}>
            View Analytics
          </Button>
          <Button className={cn(currentStyle.button.base, currentStyle.button.outline, "py-6 text-lg shadow-xl")}>
            Team Settings
          </Button>
          <Button
            className={cn(currentStyle.button.base, currentStyle.button.primary, "py-6 text-lg shadow-xl")}
            disabled
          >
            Export Report
          </Button>
        </div>
      </div>

      {/* Layered Two-Column Layout: Contact & Status */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Form - Glass Card */}
        <div className={cn(currentStyle.card.container, "p-8 shadow-2xl")}>
          <h2 className={cn(currentStyle.card.title, "mb-6")}>Contact Us</h2>
          <div className="space-y-5">
            <div className="space-y-2">
              <Label className={currentStyle.input.label}>Full Name</Label>
              <Input
                type="text"
                placeholder="John Doe"
                className={currentStyle.input.base}
              />
            </div>
            <div className="space-y-2">
              <Label className={currentStyle.input.label}>Email Address</Label>
              <Input
                type="email"
                placeholder="john@acmecorp.com"
                className={currentStyle.input.base}
              />
            </div>
            <div className="space-y-2">
              <Label className={currentStyle.input.label}>Company</Label>
              <Input
                type="text"
                placeholder="Your Company Inc."
                className={currentStyle.input.base}
              />
            </div>
            <div className="space-y-2">
              <Label className={currentStyle.input.label}>Phone Number</Label>
              <Input
                type="tel"
                placeholder="+1 (555) 123-4567"
                className={currentStyle.input.base}
              />
            </div>
            <div className="space-y-2">
              <Label className={currentStyle.input.label}>Message</Label>
              <Textarea
                placeholder="Tell us about your project..."
                className={currentStyle.textarea.base}
                rows={4}
              />
            </div>
          </div>
        </div>

        {/* Project Status - Floating Glass Card */}
        <div className={cn(currentStyle.card.container, "p-8 shadow-2xl")}>
          <h2 className={cn(currentStyle.card.title, "mb-6")}>Project Status</h2>
          <div className="flex flex-wrap gap-3 mb-8">
            <Badge className={cn(currentStyle.badge.base, currentStyle.badge.success)}>
              Active
            </Badge>
            <Badge className={cn(currentStyle.badge.base, currentStyle.badge.warning)}>
              In Review
            </Badge>
            <Badge className={cn(currentStyle.badge.base, currentStyle.badge.error)}>
              Blocked
            </Badge>
            <Badge className={cn(currentStyle.badge.base, 'bg-blue-500/20 text-blue-300 border-blue-500/50 backdrop-blur-sm')}>
              Planning
            </Badge>
            <Badge className={cn(currentStyle.badge.base, 'bg-purple-500/20 text-purple-300 border-purple-500/50 backdrop-blur-sm')}>
              Completed
            </Badge>
          </div>
          <div className="space-y-8">
            <div className="space-y-3">
              <div className="flex justify-between items-center mb-2">
                <Label className={currentStyle.input.label}>Website Redesign</Label>
                <span className={currentStyle.checkbox.label}>{uploadProgress}%</span>
              </div>
              <Progress
                value={uploadProgress}
                className={currentStyle.progress.container}
              />
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center mb-2">
                <Label className={currentStyle.input.label}>Team Resources</Label>
                <span className={currentStyle.checkbox.label}>{volume}%</span>
              </div>
              <Slider
                value={volume}
                onValueChange={setVolume}
                min={0}
                max={100}
                className={currentStyle.slider.base}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Account Preferences - Layered Cards */}
      <div className="space-y-6">
        <h2 className={cn(currentStyle.card.title, "text-center")}>Account Preferences</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className={cn(currentStyle.card.container, "p-8 shadow-2xl")}>
            <h3 className={cn('text-xl mb-6', currentStyle.input.label)}>Email Preferences</h3>
            <div className="space-y-4">
              <label className="flex items-center gap-3 cursor-pointer">
                <Checkbox
                  className={currentStyle.checkbox.base}
                  checked={termsAccepted}
                  onChange={(e) => setTermsAccepted(e.target.checked)}
                />
                <span className={currentStyle.checkbox.label}>
                  Send me product updates
                </span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <Checkbox className={currentStyle.checkbox.base} defaultChecked />
                <span className={currentStyle.checkbox.label}>
                  Weekly newsletter
                </span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <Checkbox className={currentStyle.checkbox.base} />
                <span className={currentStyle.checkbox.label}>
                  Marketing communications
                </span>
              </label>
            </div>
          </div>
          <div className={cn(currentStyle.card.container, "p-8 shadow-2xl")}>
            <h3 className={cn('text-xl mb-6', currentStyle.input.label)}>Notifications</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className={currentStyle.checkbox.label}>Email Notifications</span>
                <Switch
                  checked={notificationsEnabled}
                  onChange={(e) => setNotificationsEnabled(e.target.checked)}
                />
              </div>
              <div className="flex items-center justify-between">
                <span className={currentStyle.checkbox.label}>Push Notifications</span>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <span className={currentStyle.checkbox.label}>SMS Alerts</span>
                <Switch />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dashboard Tabs - Glass Effect */}
      <div className="space-y-6">
        <h2 className={cn(currentStyle.card.title, "text-center")}>Dashboard</h2>
        <Tabs defaultValue="overview">
          <TabsList className={currentStyle.tabs.list}>
            <StyledTabTrigger value="overview">Overview</StyledTabTrigger>
            <StyledTabTrigger value="analytics">Analytics</StyledTabTrigger>
            <StyledTabTrigger value="team">Team</StyledTabTrigger>
            <StyledTabTrigger value="settings">Settings</StyledTabTrigger>
          </TabsList>
          <TabsContent value="overview" className={currentStyle.tabs.content}>
            <h3 className={cn('text-2xl mb-4', currentStyle.card.title)}>
              Overview
            </h3>
            <p className={currentStyle.card.content}>
              Welcome to your dashboard overview. Here you'll find key metrics, recent activity, and important updates from your team and projects.
            </p>
          </TabsContent>
          <TabsContent value="analytics" className={currentStyle.tabs.content}>
            <h3 className={cn('text-2xl mb-4', currentStyle.card.title)}>
              Analytics
            </h3>
            <p className={currentStyle.card.content}>
              Track your performance with detailed analytics. Monitor user engagement, conversion rates, and revenue growth across all your projects.
            </p>
          </TabsContent>
          <TabsContent value="team" className={currentStyle.tabs.content}>
            <h3 className={cn('text-2xl mb-4', currentStyle.card.title)}>
              Team
            </h3>
            <p className={currentStyle.card.content}>
              Manage your team members, assign roles, and collaborate effectively. View team performance and resource allocation at a glance.
            </p>
          </TabsContent>
          <TabsContent value="settings" className={currentStyle.tabs.content}>
            <h3 className={cn('text-2xl mb-4', currentStyle.card.title)}>
              Settings
            </h3>
            <p className={currentStyle.card.content}>
              Configure your account preferences, security settings, billing information, and integration options all in one place.
            </p>
          </TabsContent>
        </Tabs>
      </div>

      {/* FAQ - Glass Accordion */}
      <div className="space-y-6">
        <h2 className={cn(currentStyle.card.title, "text-center")}>Frequently Asked Questions</h2>
        <Accordion>
          <AccordionItem value="item-1" className={currentStyle.accordion.item}>
            <AccordionTrigger className={currentStyle.accordion.trigger}>
              What services does Acme Corp offer?
            </AccordionTrigger>
            <AccordionContent className={currentStyle.accordion.content}>
              Acme Corp provides comprehensive business solutions including project management, team collaboration tools, analytics platforms, and custom software development tailored to your needs.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className={currentStyle.accordion.item}>
            <AccordionTrigger className={currentStyle.accordion.trigger}>
              How do I get started?
            </AccordionTrigger>
            <AccordionContent className={currentStyle.accordion.content}>
              Getting started is easy! Simply create an account, choose your plan, and our onboarding team will guide you through the setup process. We offer personalized training sessions for all new clients.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className={currentStyle.accordion.item}>
            <AccordionTrigger className={currentStyle.accordion.trigger}>
              What support options are available?
            </AccordionTrigger>
            <AccordionContent className={currentStyle.accordion.content}>
              We offer 24/7 email support, live chat during business hours, and dedicated account managers for enterprise customers. Our comprehensive knowledge base and video tutorials are also available anytime.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4" className={currentStyle.accordion.item}>
            <AccordionTrigger className={currentStyle.accordion.trigger}>
              Can I upgrade or downgrade my plan?
            </AccordionTrigger>
            <AccordionContent className={currentStyle.accordion.content}>
              Yes! You can change your plan at any time from your account settings. Upgrades take effect immediately, while downgrades will apply at the end of your current billing cycle.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      {/* System Notifications - Floating Alerts */}
      <div className="space-y-6">
        <h2 className={cn(currentStyle.card.title, "text-center")}>System Notifications</h2>
        <div className="space-y-4">
          <Alert className={cn(currentStyle.alert.base, 'bg-blue-500/10 border-blue-500/30 text-blue-300 backdrop-blur-md')}>
            <AlertTitle className={currentStyle.alert.title}>New Feature Available</AlertTitle>
            <AlertDescription className={currentStyle.alert.description}>
              Check out our new AI-powered analytics dashboard for deeper insights into your business metrics.
            </AlertDescription>
          </Alert>
          <Alert className={cn(currentStyle.alert.base, currentStyle.badge.success)}>
            <AlertTitle className={currentStyle.alert.title}>Update Successful</AlertTitle>
            <AlertDescription className={currentStyle.alert.description}>
              Your profile has been updated successfully. All changes are now live.
            </AlertDescription>
          </Alert>
          <Alert className={cn(currentStyle.alert.base, currentStyle.badge.warning)}>
            <AlertTitle className={currentStyle.alert.title}>Action Required</AlertTitle>
            <AlertDescription className={currentStyle.alert.description}>
              Your payment method will expire soon. Please update your billing information.
            </AlertDescription>
          </Alert>
          <Alert className={cn(currentStyle.alert.base, currentStyle.badge.error)}>
            <AlertTitle className={currentStyle.alert.title}>Service Disruption</AlertTitle>
            <AlertDescription className={currentStyle.alert.description}>
              We're experiencing higher than normal traffic. Some features may be temporarily unavailable.
            </AlertDescription>
          </Alert>
        </div>
      </div>

      {/* Services Grid - Floating Cards */}
      <div className="space-y-6">
        <h2 className={cn(currentStyle.card.title, "text-center")}>Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <StyledCard
            title="Cloud Solutions"
            content="Scalable cloud infrastructure designed to grow with your business. Deploy, manage, and scale applications effortlessly."
            className="shadow-2xl hover:shadow-3xl transition-shadow duration-300"
          />
          <StyledCard
            title="Data Analytics"
            content="Transform your data into actionable insights with our powerful analytics platform and visualization tools."
            className="shadow-2xl hover:shadow-3xl transition-shadow duration-300"
          />
          <StyledCard
            title="Security Services"
            content="Enterprise-grade security solutions to protect your business from modern cyber threats and vulnerabilities."
            className="shadow-2xl hover:shadow-3xl transition-shadow duration-300"
          />
          <StyledCard
            title="Team Collaboration"
            content="Streamline communication and boost productivity with integrated collaboration tools for distributed teams."
            className="shadow-2xl hover:shadow-3xl transition-shadow duration-300"
          />
          <StyledCard
            title="API Integration"
            content="Seamlessly connect with third-party services and build custom integrations with our robust API platform."
            className="shadow-2xl hover:shadow-3xl transition-shadow duration-300"
          />
          <StyledCard
            title="24/7 Support"
            content="Round-the-clock technical support from our expert team to keep your operations running smoothly."
            className="shadow-2xl hover:shadow-3xl transition-shadow duration-300"
          />
        </div>
      </div>

      {/* Important Actions Dialog */}
      <div className="text-center">
        <h2 className={cn(currentStyle.card.title, "mb-6")}>Important Actions</h2>
        <Dialog>
          <DialogTrigger className={cn(currentStyle.button.base, currentStyle.button.primary, "px-8 py-4 text-lg shadow-xl")}>
            Delete Project
          </DialogTrigger>
          <DialogContent className={currentStyle.dialog.content}>
            <DialogHeader>
              <DialogTitle className={currentStyle.dialog.title}>
                Confirm Deletion
              </DialogTitle>
              <DialogDescription className={currentStyle.dialog.description}>
                Are you sure you want to delete this project? This action cannot be undone and all associated data will be permanently removed.
              </DialogDescription>
            </DialogHeader>
            <div className="flex gap-4 justify-end mt-6">
              <Button className={cn(currentStyle.button.base, currentStyle.button.outline)}>
                Cancel
              </Button>
              <Button className={cn(currentStyle.button.base, currentStyle.button.primary)}>
                Confirm Delete
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
