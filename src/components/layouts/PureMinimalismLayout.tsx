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
import { StyledCard } from '../StyledCard'

/**
 * PureMinimalismLayout Component
 *
 * An ultra-clean layout emphasizing whitespace, simplicity, and the bare essentials.
 * Features generous spacing, subtle borders, and focus on content over decoration.
 */
export function PureMinimalismLayout() {
  const { currentStyle } = useDesignStyle()
  const [uploadProgress] = useState(67)
  const [volume, setVolume] = useState(75)
  const [termsAccepted, setTermsAccepted] = useState(false)
  const [notificationsEnabled, setNotificationsEnabled] = useState(true)

  return (
    <div className="w-full space-y-24 py-8">
      {/* Minimal Hero - Maximum Whitespace */}
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <h1 className={cn(currentStyle.card.title, "text-4xl")}>
          Welcome to Acme Corp
        </h1>
        <p className={cn(currentStyle.card.content, "text-lg leading-loose")}>
          Your trusted partner in innovative business solutions. Explore our comprehensive dashboard to manage your projects, team, and resources all in one place.
        </p>
      </div>

      {/* Minimal Actions - Spaced Out */}
      <div className="max-w-2xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Button className={cn(currentStyle.button.base, currentStyle.button.primary, "py-6")}>
            Create New Project
          </Button>
          <Button className={cn(currentStyle.button.base, currentStyle.button.secondary, "py-6")}>
            View Analytics
          </Button>
          <Button className={cn(currentStyle.button.base, currentStyle.button.outline, "py-6")}>
            Team Settings
          </Button>
          <Button
            className={cn(currentStyle.button.base, currentStyle.button.primary, "py-6")}
            disabled
          >
            Export Report
          </Button>
        </div>
      </div>

      {/* Contact Form - Generous Spacing */}
      <div className="max-w-2xl mx-auto space-y-8">
        <h2 className={cn(currentStyle.card.title, "text-center text-3xl")}>Contact Us</h2>
        <div className="space-y-8">
          <div className="space-y-3">
            <Label className={currentStyle.input.label}>Full Name</Label>
            <Input
              type="text"
              placeholder="John Doe"
              className={cn(currentStyle.input.base, "py-6")}
            />
          </div>
          <div className="space-y-3">
            <Label className={currentStyle.input.label}>Email Address</Label>
            <Input
              type="email"
              placeholder="john@acmecorp.com"
              className={cn(currentStyle.input.base, "py-6")}
            />
          </div>
          <div className="space-y-3">
            <Label className={currentStyle.input.label}>Company</Label>
            <Input
              type="text"
              placeholder="Your Company Inc."
              className={cn(currentStyle.input.base, "py-6")}
            />
          </div>
          <div className="space-y-3">
            <Label className={currentStyle.input.label}>Phone Number</Label>
            <Input
              type="tel"
              placeholder="+1 (555) 123-4567"
              className={cn(currentStyle.input.base, "py-6")}
            />
          </div>
          <div className="space-y-3">
            <Label className={currentStyle.input.label}>Message</Label>
            <Textarea
              placeholder="Tell us about your project..."
              className={currentStyle.textarea.base}
              rows={6}
            />
          </div>
        </div>
      </div>

      {/* Dashboard */}
      <div className="max-w-4xl mx-auto space-y-8">
        <h2 className={cn(currentStyle.card.title, "text-center text-3xl")}>Dashboard</h2>
        <Tabs defaultValue="overview">
          <TabsList className={cn(currentStyle.tabs.list, "w-full justify-center")}>
            <StyledTabTrigger value="overview">Overview</StyledTabTrigger>
            <StyledTabTrigger value="analytics">Analytics</StyledTabTrigger>
            <StyledTabTrigger value="team">Team</StyledTabTrigger>
            <StyledTabTrigger value="settings">Settings</StyledTabTrigger>
          </TabsList>
          <TabsContent value="overview" className={cn(currentStyle.tabs.content, "py-12")}>
            <h3 className={cn('text-2xl mb-6', currentStyle.card.title)}>
              Overview
            </h3>
            <p className={cn(currentStyle.card.content, "leading-loose")}>
              Welcome to your dashboard overview. Here you'll find key metrics, recent activity, and important updates from your team and projects.
            </p>
          </TabsContent>
          <TabsContent value="analytics" className={cn(currentStyle.tabs.content, "py-12")}>
            <h3 className={cn('text-2xl mb-6', currentStyle.card.title)}>
              Analytics
            </h3>
            <p className={cn(currentStyle.card.content, "leading-loose")}>
              Track your performance with detailed analytics. Monitor user engagement, conversion rates, and revenue growth across all your projects.
            </p>
          </TabsContent>
          <TabsContent value="team" className={cn(currentStyle.tabs.content, "py-12")}>
            <h3 className={cn('text-2xl mb-6', currentStyle.card.title)}>
              Team
            </h3>
            <p className={cn(currentStyle.card.content, "leading-loose")}>
              Manage your team members, assign roles, and collaborate effectively. View team performance and resource allocation at a glance.
            </p>
          </TabsContent>
          <TabsContent value="settings" className={cn(currentStyle.tabs.content, "py-12")}>
            <h3 className={cn('text-2xl mb-6', currentStyle.card.title)}>
              Settings
            </h3>
            <p className={cn(currentStyle.card.content, "leading-loose")}>
              Configure your account preferences, security settings, billing information, and integration options all in one place.
            </p>
          </TabsContent>
        </Tabs>
      </div>

      {/* Project Status */}
      <div className="max-w-2xl mx-auto space-y-8">
        <h2 className={cn(currentStyle.card.title, "text-center text-3xl")}>Project Status</h2>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Badge className={cn(currentStyle.badge.base, currentStyle.badge.success)}>
            Active
          </Badge>
          <Badge className={cn(currentStyle.badge.base, currentStyle.badge.warning)}>
            In Review
          </Badge>
          <Badge className={cn(currentStyle.badge.base, currentStyle.badge.error)}>
            Blocked
          </Badge>
          <Badge className={cn(currentStyle.badge.base, 'bg-blue-50 text-blue-700 border-blue-200')}>
            Planning
          </Badge>
          <Badge className={cn(currentStyle.badge.base, 'bg-purple-50 text-purple-700 border-purple-200')}>
            Completed
          </Badge>
        </div>
        <div className="space-y-12">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <Label className={currentStyle.input.label}>Website Redesign</Label>
              <span className={currentStyle.checkbox.label}>{uploadProgress}%</span>
            </div>
            <Progress
              value={uploadProgress}
              className={currentStyle.progress.container}
            />
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
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

      {/* Account Preferences */}
      <div className="max-w-2xl mx-auto space-y-12">
        <h2 className={cn(currentStyle.card.title, "text-center text-3xl")}>Account Preferences</h2>
        <div className="space-y-12">
          <div className="space-y-6">
            <h3 className={cn('text-xl', currentStyle.input.label)}>Email Preferences</h3>
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
            <h3 className={cn('text-xl', currentStyle.input.label)}>Notifications</h3>
            <div className="space-y-5">
              <div className="flex items-center justify-between py-2">
                <span className={currentStyle.checkbox.label}>Email Notifications</span>
                <Switch
                  checked={notificationsEnabled}
                  onChange={(e) => setNotificationsEnabled(e.target.checked)}
                />
              </div>
              <div className="flex items-center justify-between py-2">
                <span className={currentStyle.checkbox.label}>Push Notifications</span>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between py-2">
                <span className={currentStyle.checkbox.label}>SMS Alerts</span>
                <Switch />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-6xl mx-auto space-y-12">
        <h2 className={cn(currentStyle.card.title, "text-center text-3xl")}>Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <StyledCard
            title="Cloud Solutions"
            content="Scalable cloud infrastructure designed to grow with your business. Deploy, manage, and scale applications effortlessly."
          />
          <StyledCard
            title="Data Analytics"
            content="Transform your data into actionable insights with our powerful analytics platform and visualization tools."
          />
          <StyledCard
            title="Security Services"
            content="Enterprise-grade security solutions to protect your business from modern cyber threats and vulnerabilities."
          />
          <StyledCard
            title="Team Collaboration"
            content="Streamline communication and boost productivity with integrated collaboration tools for distributed teams."
          />
          <StyledCard
            title="API Integration"
            content="Seamlessly connect with third-party services and build custom integrations with our robust API platform."
          />
          <StyledCard
            title="24/7 Support"
            content="Round-the-clock technical support from our expert team to keep your operations running smoothly."
          />
        </div>
      </div>

      {/* FAQ */}
      <div className="max-w-3xl mx-auto space-y-8">
        <h2 className={cn(currentStyle.card.title, "text-center text-3xl")}>Frequently Asked Questions</h2>
        <Accordion>
          <AccordionItem value="item-1" className={currentStyle.accordion.item}>
            <AccordionTrigger className={currentStyle.accordion.trigger}>
              What services does Acme Corp offer?
            </AccordionTrigger>
            <AccordionContent className={cn(currentStyle.accordion.content, "leading-loose py-6")}>
              Acme Corp provides comprehensive business solutions including project management, team collaboration tools, analytics platforms, and custom software development tailored to your needs.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className={currentStyle.accordion.item}>
            <AccordionTrigger className={currentStyle.accordion.trigger}>
              How do I get started?
            </AccordionTrigger>
            <AccordionContent className={cn(currentStyle.accordion.content, "leading-loose py-6")}>
              Getting started is easy! Simply create an account, choose your plan, and our onboarding team will guide you through the setup process. We offer personalized training sessions for all new clients.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className={currentStyle.accordion.item}>
            <AccordionTrigger className={currentStyle.accordion.trigger}>
              What support options are available?
            </AccordionTrigger>
            <AccordionContent className={cn(currentStyle.accordion.content, "leading-loose py-6")}>
              We offer 24/7 email support, live chat during business hours, and dedicated account managers for enterprise customers. Our comprehensive knowledge base and video tutorials are also available anytime.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4" className={currentStyle.accordion.item}>
            <AccordionTrigger className={currentStyle.accordion.trigger}>
              Can I upgrade or downgrade my plan?
            </AccordionTrigger>
            <AccordionContent className={cn(currentStyle.accordion.content, "leading-loose py-6")}>
              Yes! You can change your plan at any time from your account settings. Upgrades take effect immediately, while downgrades will apply at the end of your current billing cycle.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      {/* System Notifications */}
      <div className="max-w-3xl mx-auto space-y-8">
        <h2 className={cn(currentStyle.card.title, "text-center text-3xl")}>System Notifications</h2>
        <div className="space-y-6">
          <Alert className={cn(currentStyle.alert.base, 'bg-blue-50 border-blue-200 text-blue-900')}>
            <AlertTitle className={currentStyle.alert.title}>New Feature Available</AlertTitle>
            <AlertDescription className={cn(currentStyle.alert.description, "leading-loose mt-2")}>
              Check out our new AI-powered analytics dashboard for deeper insights into your business metrics.
            </AlertDescription>
          </Alert>
          <Alert className={cn(currentStyle.alert.base, currentStyle.badge.success)}>
            <AlertTitle className={currentStyle.alert.title}>Update Successful</AlertTitle>
            <AlertDescription className={cn(currentStyle.alert.description, "leading-loose mt-2")}>
              Your profile has been updated successfully. All changes are now live.
            </AlertDescription>
          </Alert>
          <Alert className={cn(currentStyle.alert.base, currentStyle.badge.warning)}>
            <AlertTitle className={currentStyle.alert.title}>Action Required</AlertTitle>
            <AlertDescription className={cn(currentStyle.alert.description, "leading-loose mt-2")}>
              Your payment method will expire soon. Please update your billing information.
            </AlertDescription>
          </Alert>
          <Alert className={cn(currentStyle.alert.base, currentStyle.badge.error)}>
            <AlertTitle className={currentStyle.alert.title}>Service Disruption</AlertTitle>
            <AlertDescription className={cn(currentStyle.alert.description, "leading-loose mt-2")}>
              We're experiencing higher than normal traffic. Some features may be temporarily unavailable.
            </AlertDescription>
          </Alert>
        </div>
      </div>

      {/* Important Actions */}
      <div className="max-w-md mx-auto text-center space-y-6">
        <h2 className={cn(currentStyle.card.title, "text-3xl")}>Important Actions</h2>
        <Dialog>
          <DialogTrigger className={cn(currentStyle.button.base, currentStyle.button.primary, "py-6 w-full")}>
            Delete Project
          </DialogTrigger>
          <DialogContent className={currentStyle.dialog.content}>
            <DialogHeader>
              <DialogTitle className={currentStyle.dialog.title}>
                Confirm Deletion
              </DialogTitle>
              <DialogDescription className={cn(currentStyle.dialog.description, "mt-4 leading-loose")}>
                Are you sure you want to delete this project? This action cannot be undone and all associated data will be permanently removed.
              </DialogDescription>
            </DialogHeader>
            <div className="flex gap-4 justify-end mt-8">
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
