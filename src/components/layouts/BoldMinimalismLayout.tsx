import { useState } from 'react'
import { useDesignStyle } from '@/contexts/DesignStyleContext'
import { cn } from '@/lib/utils'
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

export function BoldMinimalismLayout() {
  const { currentStyle } = useDesignStyle()
  const [uploadProgress] = useState(67)
  const [volume, setVolume] = useState(75)
  const [termsAccepted, setTermsAccepted] = useState(false)
  const [notificationsEnabled, setNotificationsEnabled] = useState(true)

  return (
    <div className="w-full space-y-12 sm:space-y-16 md:space-y-20 lg:space-y-24 py-6 sm:py-8 md:py-12">
      {/* Welcome Section - Emphasize bold typography */}
      <div className="space-y-8">
        <h1 className={cn(currentStyle.card.title, 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-3 sm:mb-4')}>
          Welcome to Acme Corp
        </h1>
        <p className={cn(currentStyle.card.content, 'max-w-3xl text-base sm:text-lg md:text-xl')}>
          Your trusted partner in innovative business solutions. Explore our comprehensive dashboard to manage your projects, team, and resources all in one place.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="space-y-8">
        <h2 className={cn(currentStyle.card.title, 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl')}>Quick Actions</h2>
        <div className="flex flex-wrap gap-4 sm:gap-6">
          <Button className={cn(currentStyle.button.base, currentStyle.button.primary)}>
            Create New Project
          </Button>
          <Button className={cn(currentStyle.button.base, currentStyle.button.secondary)}>
            View Analytics
          </Button>
          <Button className={cn(currentStyle.button.base, currentStyle.button.outline)}>
            Team Settings
          </Button>
          <Button
            className={cn(currentStyle.button.base, currentStyle.button.primary)}
            disabled
          >
            Export Report
          </Button>
        </div>
      </div>

      {/* Contact Form */}
      <div className="space-y-8">
        <h2 className={cn(currentStyle.card.title, 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl')}>Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6 sm:gap-x-8 sm:gap-y-8 md:gap-x-12 max-w-4xl">
          <div className="space-y-3">
            <Label className={currentStyle.input.label}>Full Name</Label>
            <Input
              type="text"
              placeholder="John Doe"
              className={currentStyle.input.base}
            />
          </div>
          <div className="space-y-3">
            <Label className={currentStyle.input.label}>Email Address</Label>
            <Input
              type="email"
              placeholder="john@acmecorp.com"
              className={currentStyle.input.base}
            />
          </div>
          <div className="space-y-3">
            <Label className={currentStyle.input.label}>Company</Label>
            <Input
              type="text"
              placeholder="Your Company Inc."
              className={currentStyle.input.base}
            />
          </div>
          <div className="space-y-3">
            <Label className={currentStyle.input.label}>Phone Number</Label>
            <Input
              type="tel"
              placeholder="+1 (555) 123-4567"
              className={currentStyle.input.base}
            />
          </div>
          <div className="space-y-3 md:col-span-2">
            <Label className={currentStyle.input.label}>Message</Label>
            <Textarea
              placeholder="Tell us about your project..."
              className={currentStyle.textarea.base}
              rows={4}
            />
          </div>
        </div>
      </div>

      {/* Preferences */}
      <div className="space-y-8">
        <h2 className={cn(currentStyle.card.title, 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl')}>Account Preferences</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 max-w-4xl">
          <div className="space-y-6">
            <h3 className={cn('text-2xl font-bold', currentStyle.input.label)}>Email Preferences</h3>
            <div className="space-y-5">
              <label className="flex items-center gap-4 cursor-pointer">
                <Checkbox
                  className={currentStyle.checkbox.base}
                  checked={termsAccepted}
                  onChange={(e) => setTermsAccepted(e.target.checked)}
                />
                <span className={currentStyle.checkbox.label}>
                  Send me product updates
                </span>
              </label>
              <label className="flex items-center gap-4 cursor-pointer">
                <Checkbox className={currentStyle.checkbox.base} defaultChecked />
                <span className={currentStyle.checkbox.label}>
                  Weekly newsletter
                </span>
              </label>
              <label className="flex items-center gap-4 cursor-pointer">
                <Checkbox className={currentStyle.checkbox.base} />
                <span className={currentStyle.checkbox.label}>
                  Marketing communications
                </span>
              </label>
            </div>
          </div>
          <div className="space-y-6">
            <h3 className={cn('text-2xl font-bold', currentStyle.input.label)}>Notifications</h3>
            <div className="space-y-5">
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

      {/* Project Status */}
      <div className="space-y-8">
        <h2 className={cn(currentStyle.card.title, 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl')}>Project Status</h2>
        <div className="flex flex-wrap gap-4 mb-6 sm:mb-8">
          <Badge className={cn(currentStyle.badge.base, currentStyle.badge.success)}>
            Active
          </Badge>
          <Badge className={cn(currentStyle.badge.base, currentStyle.badge.warning)}>
            In Review
          </Badge>
          <Badge className={cn(currentStyle.badge.base, currentStyle.badge.error)}>
            Blocked
          </Badge>
          <Badge className={cn(currentStyle.badge.base, 'bg-blue-500 text-white border-blue-600')}>
            Planning
          </Badge>
          <Badge className={cn(currentStyle.badge.base, 'bg-purple-500 text-white border-purple-600')}>
            Completed
          </Badge>
        </div>
        <div className="space-y-10 max-w-2xl">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <Label className={currentStyle.input.label}>Website Redesign</Label>
              <span className={cn(currentStyle.checkbox.label, 'text-2xl font-bold')}>{uploadProgress}%</span>
            </div>
            <Progress
              value={uploadProgress}
              className={currentStyle.progress.container}
            />
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <Label className={currentStyle.input.label}>Team Resources</Label>
              <span className={cn(currentStyle.checkbox.label, 'text-2xl font-bold')}>{volume}%</span>
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

      {/* Dashboard Tabs */}
      <div className="space-y-8">
        <h2 className={cn(currentStyle.card.title, 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl')}>Dashboard</h2>
        <Tabs defaultValue="overview">
          <TabsList className={currentStyle.tabs.list}>
            <StyledTabTrigger value="overview">Overview</StyledTabTrigger>
            <StyledTabTrigger value="analytics">Analytics</StyledTabTrigger>
            <StyledTabTrigger value="team">Team</StyledTabTrigger>
            <StyledTabTrigger value="settings">Settings</StyledTabTrigger>
          </TabsList>
          <TabsContent value="overview" className={currentStyle.tabs.content}>
            <h3 className={cn('text-3xl font-black mb-4', currentStyle.card.title)}>
              Overview
            </h3>
            <p className={currentStyle.card.content}>
              Welcome to your dashboard overview. Here you'll find key metrics, recent activity, and important updates from your team and projects.
            </p>
          </TabsContent>
          <TabsContent value="analytics" className={currentStyle.tabs.content}>
            <h3 className={cn('text-3xl font-black mb-4', currentStyle.card.title)}>
              Analytics
            </h3>
            <p className={currentStyle.card.content}>
              Track your performance with detailed analytics. Monitor user engagement, conversion rates, and revenue growth across all your projects.
            </p>
          </TabsContent>
          <TabsContent value="team" className={currentStyle.tabs.content}>
            <h3 className={cn('text-3xl font-black mb-4', currentStyle.card.title)}>
              Team
            </h3>
            <p className={currentStyle.card.content}>
              Manage your team members, assign roles, and collaborate effectively. View team performance and resource allocation at a glance.
            </p>
          </TabsContent>
          <TabsContent value="settings" className={currentStyle.tabs.content}>
            <h3 className={cn('text-3xl font-black mb-4', currentStyle.card.title)}>
              Settings
            </h3>
            <p className={currentStyle.card.content}>
              Configure your account preferences, security settings, billing information, and integration options all in one place.
            </p>
          </TabsContent>
        </Tabs>
      </div>

      {/* FAQ */}
      <div className="space-y-8">
        <h2 className={cn(currentStyle.card.title, 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl')}>FAQ</h2>
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

      {/* System Notifications */}
      <div className="space-y-8">
        <h2 className={cn(currentStyle.card.title, 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl')}>System Notifications</h2>
        <div className="space-y-6">
          <Alert className={cn(currentStyle.alert.base, 'border-blue-500')}>
            <AlertTitle className={currentStyle.alert.title}>New Feature Available</AlertTitle>
            <AlertDescription className={currentStyle.alert.description}>
              Check out our new AI-powered analytics dashboard for deeper insights into your business metrics.
            </AlertDescription>
          </Alert>
          <Alert className={cn(currentStyle.alert.base, 'border-green-500')}>
            <AlertTitle className={currentStyle.alert.title}>Update Successful</AlertTitle>
            <AlertDescription className={currentStyle.alert.description}>
              Your profile has been updated successfully. All changes are now live.
            </AlertDescription>
          </Alert>
          <Alert className={cn(currentStyle.alert.base, 'border-yellow-500')}>
            <AlertTitle className={currentStyle.alert.title}>Action Required</AlertTitle>
            <AlertDescription className={currentStyle.alert.description}>
              Your payment method will expire soon. Please update your billing information.
            </AlertDescription>
          </Alert>
          <Alert className={cn(currentStyle.alert.base, 'border-red-500')}>
            <AlertTitle className={currentStyle.alert.title}>Service Disruption</AlertTitle>
            <AlertDescription className={currentStyle.alert.description}>
              We're experiencing higher than normal traffic. Some features may be temporarily unavailable.
            </AlertDescription>
          </Alert>
        </div>
      </div>

      {/* Important Actions Dialog */}
      <div className="space-y-8">
        <h2 className={cn(currentStyle.card.title, 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl')}>Important Actions</h2>
        <Dialog>
          <DialogTrigger className={cn(currentStyle.button.base, currentStyle.button.primary)}>
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
            <div className="flex gap-6 justify-end mt-10">
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

      {/* Services Grid */}
      <div className="space-y-8">
        <h2 className={cn(currentStyle.card.title, 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl')}>Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          <div className="space-y-4">
            <h3 className={cn(currentStyle.card.title, 'text-xl sm:text-2xl md:text-3xl')}>Cloud Solutions</h3>
            <p className={currentStyle.card.content}>
              Scalable cloud infrastructure designed to grow with your business. Deploy, manage, and scale applications effortlessly.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className={cn(currentStyle.card.title, 'text-xl sm:text-2xl md:text-3xl')}>Data Analytics</h3>
            <p className={currentStyle.card.content}>
              Transform your data into actionable insights with our powerful analytics platform and visualization tools.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className={cn(currentStyle.card.title, 'text-xl sm:text-2xl md:text-3xl')}>Security Services</h3>
            <p className={currentStyle.card.content}>
              Enterprise-grade security solutions to protect your business from modern cyber threats and vulnerabilities.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className={cn(currentStyle.card.title, 'text-xl sm:text-2xl md:text-3xl')}>Team Collaboration</h3>
            <p className={currentStyle.card.content}>
              Streamline communication and boost productivity with integrated collaboration tools for distributed teams.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className={cn(currentStyle.card.title, 'text-xl sm:text-2xl md:text-3xl')}>API Integration</h3>
            <p className={currentStyle.card.content}>
              Seamlessly connect with third-party services and build custom integrations with our robust API platform.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className={cn(currentStyle.card.title, 'text-xl sm:text-2xl md:text-3xl')}>24/7 Support</h3>
            <p className={currentStyle.card.content}>
              Round-the-clock technical support from our expert team to keep your operations running smoothly.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
