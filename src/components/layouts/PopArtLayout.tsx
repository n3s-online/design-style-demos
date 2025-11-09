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
 * PopArtLayout Component
 *
 * A bold, vibrant layout inspired by 1960s Pop Art movement.
 * Features high contrast colors, comic-style typography, and energetic grid layouts.
 */
export function PopArtLayout() {
  const { currentStyle } = useDesignStyle()
  const [uploadProgress] = useState(67)
  const [volume, setVolume] = useState(75)
  const [termsAccepted, setTermsAccepted] = useState(false)
  const [notificationsEnabled, setNotificationsEnabled] = useState(true)

  return (
    <div className="w-full space-y-10">
      {/* Bold Hero Card */}
      <div className="relative">
        <StyledCard
          title="WELCOME TO ACME CORP"
          content="Your trusted partner in innovative business solutions. Explore our comprehensive dashboard to manage your projects, team, and resources all in one place."
          className="w-full"
        />
      </div>

      {/* Quick Actions - Bold Grid */}
      <DemoSection title="QUICK ACTIONS">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Button className={cn(currentStyle.button.base, currentStyle.button.primary, "text-xl py-7 font-black")}>
            CREATE NEW PROJECT!
          </Button>
          <Button className={cn(currentStyle.button.base, currentStyle.button.secondary, "text-xl py-7 font-black")}>
            VIEW ANALYTICS!
          </Button>
          <Button className={cn(currentStyle.button.base, currentStyle.button.outline, "text-xl py-7 font-black")}>
            TEAM SETTINGS!
          </Button>
          <Button
            className={cn(currentStyle.button.base, currentStyle.button.primary, "text-xl py-7 font-black")}
            disabled
          >
            EXPORT REPORT!
          </Button>
        </div>
      </DemoSection>

      {/* Bold Two-Column Grid: Contact & Status */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Form - High Contrast */}
        <div className={cn(currentStyle.card.container, "p-7")}>
          <h2 className={cn(currentStyle.card.title, "mb-6 text-2xl")}>CONTACT US!</h2>
          <div className="space-y-5">
            <div className="space-y-2">
              <Label className={cn(currentStyle.input.label, "text-lg font-bold")}>FULL NAME</Label>
              <Input
                type="text"
                placeholder="JOHN DOE"
                className={currentStyle.input.base}
              />
            </div>
            <div className="space-y-2">
              <Label className={cn(currentStyle.input.label, "text-lg font-bold")}>EMAIL</Label>
              <Input
                type="email"
                placeholder="JOHN@ACMECORP.COM"
                className={currentStyle.input.base}
              />
            </div>
            <div className="space-y-2">
              <Label className={cn(currentStyle.input.label, "text-lg font-bold")}>COMPANY</Label>
              <Input
                type="text"
                placeholder="YOUR COMPANY INC."
                className={currentStyle.input.base}
              />
            </div>
            <div className="space-y-2">
              <Label className={cn(currentStyle.input.label, "text-lg font-bold")}>PHONE</Label>
              <Input
                type="tel"
                placeholder="+1 (555) 123-4567"
                className={currentStyle.input.base}
              />
            </div>
            <div className="space-y-2">
              <Label className={cn(currentStyle.input.label, "text-lg font-bold")}>MESSAGE</Label>
              <Textarea
                placeholder="TELL US ABOUT YOUR PROJECT..."
                className={currentStyle.textarea.base}
                rows={4}
              />
            </div>
          </div>
        </div>

        {/* Project Status - Vibrant */}
        <div className={cn(currentStyle.card.container, "p-7")}>
          <h2 className={cn(currentStyle.card.title, "mb-6 text-2xl")}>PROJECT STATUS!</h2>
          <div className="flex flex-wrap gap-4 mb-7">
            <Badge className={cn(currentStyle.badge.base, currentStyle.badge.success, "text-lg px-4 py-2 font-black")}>
              ACTIVE
            </Badge>
            <Badge className={cn(currentStyle.badge.base, currentStyle.badge.warning, "text-lg px-4 py-2 font-black")}>
              IN REVIEW
            </Badge>
            <Badge className={cn(currentStyle.badge.base, currentStyle.badge.error, "text-lg px-4 py-2 font-black")}>
              BLOCKED
            </Badge>
            <Badge className={cn(currentStyle.badge.base, 'bg-blue-500 text-white border-4 border-black', "text-lg px-4 py-2 font-black")}>
              PLANNING
            </Badge>
            <Badge className={cn(currentStyle.badge.base, 'bg-purple-500 text-white border-4 border-black', "text-lg px-4 py-2 font-black")}>
              COMPLETED
            </Badge>
          </div>
          <div className="space-y-7">
            <div className="space-y-3">
              <div className="flex justify-between items-center mb-2">
                <Label className={cn(currentStyle.input.label, "text-lg font-bold")}>WEBSITE REDESIGN</Label>
                <span className={cn(currentStyle.checkbox.label, "text-2xl font-black")}>{uploadProgress}%</span>
              </div>
              <Progress
                value={uploadProgress}
                className={currentStyle.progress.container}
              />
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center mb-2">
                <Label className={cn(currentStyle.input.label, "text-lg font-bold")}>TEAM RESOURCES</Label>
                <span className={cn(currentStyle.checkbox.label, "text-2xl font-black")}>{volume}%</span>
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

      {/* Account Preferences - Bold Grid */}
      <DemoSection title="ACCOUNT PREFERENCES">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className={cn(currentStyle.card.container, "p-7")}>
            <h3 className={cn('text-xl mb-5 font-black', currentStyle.input.label)}>EMAIL PREFERENCES</h3>
            <div className="space-y-5">
              <label className="flex items-center gap-4 cursor-pointer">
                <Checkbox
                  className={currentStyle.checkbox.base}
                  checked={termsAccepted}
                  onChange={(e) => setTermsAccepted(e.target.checked)}
                />
                <span className={cn(currentStyle.checkbox.label, "font-bold")}>
                  SEND ME PRODUCT UPDATES
                </span>
              </label>
              <label className="flex items-center gap-4 cursor-pointer">
                <Checkbox className={currentStyle.checkbox.base} defaultChecked />
                <span className={cn(currentStyle.checkbox.label, "font-bold")}>
                  WEEKLY NEWSLETTER
                </span>
              </label>
              <label className="flex items-center gap-4 cursor-pointer">
                <Checkbox className={currentStyle.checkbox.base} />
                <span className={cn(currentStyle.checkbox.label, "font-bold")}>
                  MARKETING COMMUNICATIONS
                </span>
              </label>
            </div>
          </div>
          <div className={cn(currentStyle.card.container, "p-7")}>
            <h3 className={cn('text-xl mb-5 font-black', currentStyle.input.label)}>NOTIFICATIONS</h3>
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <span className={cn(currentStyle.checkbox.label, "font-bold")}>EMAIL NOTIFICATIONS</span>
                <Switch
                  checked={notificationsEnabled}
                  onChange={(e) => setNotificationsEnabled(e.target.checked)}
                />
              </div>
              <div className="flex items-center justify-between">
                <span className={cn(currentStyle.checkbox.label, "font-bold")}>PUSH NOTIFICATIONS</span>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <span className={cn(currentStyle.checkbox.label, "font-bold")}>SMS ALERTS</span>
                <Switch />
              </div>
            </div>
          </div>
        </div>
      </DemoSection>

      {/* Dashboard Tabs - Comic Style */}
      <DemoSection title="DASHBOARD">
        <Tabs defaultValue="overview">
          <TabsList className={currentStyle.tabs.list}>
            <StyledTabTrigger value="overview">OVERVIEW</StyledTabTrigger>
            <StyledTabTrigger value="analytics">ANALYTICS</StyledTabTrigger>
            <StyledTabTrigger value="team">TEAM</StyledTabTrigger>
            <StyledTabTrigger value="settings">SETTINGS</StyledTabTrigger>
          </TabsList>
          <TabsContent value="overview" className={currentStyle.tabs.content}>
            <h3 className={cn('text-2xl mb-4 font-black', currentStyle.card.title)}>
              OVERVIEW
            </h3>
            <p className={currentStyle.card.content}>
              Welcome to your dashboard overview. Here you'll find key metrics, recent activity, and important updates from your team and projects.
            </p>
          </TabsContent>
          <TabsContent value="analytics" className={currentStyle.tabs.content}>
            <h3 className={cn('text-2xl mb-4 font-black', currentStyle.card.title)}>
              ANALYTICS
            </h3>
            <p className={currentStyle.card.content}>
              Track your performance with detailed analytics. Monitor user engagement, conversion rates, and revenue growth across all your projects.
            </p>
          </TabsContent>
          <TabsContent value="team" className={currentStyle.tabs.content}>
            <h3 className={cn('text-2xl mb-4 font-black', currentStyle.card.title)}>
              TEAM
            </h3>
            <p className={currentStyle.card.content}>
              Manage your team members, assign roles, and collaborate effectively. View team performance and resource allocation at a glance.
            </p>
          </TabsContent>
          <TabsContent value="settings" className={currentStyle.tabs.content}>
            <h3 className={cn('text-2xl mb-4 font-black', currentStyle.card.title)}>
              SETTINGS
            </h3>
            <p className={currentStyle.card.content}>
              Configure your account preferences, security settings, billing information, and integration options all in one place.
            </p>
          </TabsContent>
        </Tabs>
      </DemoSection>

      {/* FAQ - High Contrast */}
      <DemoSection title="FAQ">
        <Accordion>
          <AccordionItem value="item-1" className={currentStyle.accordion.item}>
            <AccordionTrigger className={cn(currentStyle.accordion.trigger, "font-black")}>
              WHAT SERVICES DOES ACME CORP OFFER?
            </AccordionTrigger>
            <AccordionContent className={currentStyle.accordion.content}>
              Acme Corp provides comprehensive business solutions including project management, team collaboration tools, analytics platforms, and custom software development tailored to your needs.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className={currentStyle.accordion.item}>
            <AccordionTrigger className={cn(currentStyle.accordion.trigger, "font-black")}>
              HOW DO I GET STARTED?
            </AccordionTrigger>
            <AccordionContent className={currentStyle.accordion.content}>
              Getting started is easy! Simply create an account, choose your plan, and our onboarding team will guide you through the setup process. We offer personalized training sessions for all new clients.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className={currentStyle.accordion.item}>
            <AccordionTrigger className={cn(currentStyle.accordion.trigger, "font-black")}>
              WHAT SUPPORT OPTIONS ARE AVAILABLE?
            </AccordionTrigger>
            <AccordionContent className={currentStyle.accordion.content}>
              We offer 24/7 email support, live chat during business hours, and dedicated account managers for enterprise customers. Our comprehensive knowledge base and video tutorials are also available anytime.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4" className={currentStyle.accordion.item}>
            <AccordionTrigger className={cn(currentStyle.accordion.trigger, "font-black")}>
              CAN I UPGRADE OR DOWNGRADE MY PLAN?
            </AccordionTrigger>
            <AccordionContent className={currentStyle.accordion.content}>
              Yes! You can change your plan at any time from your account settings. Upgrades take effect immediately, while downgrades will apply at the end of your current billing cycle.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </DemoSection>

      {/* System Notifications - Bold Alerts */}
      <DemoSection title="SYSTEM NOTIFICATIONS">
        <div className="space-y-5">
          <Alert className={cn(currentStyle.alert.base, 'bg-blue-500 text-white border-4 border-black')}>
            <AlertTitle className={cn(currentStyle.alert.title, "font-black text-xl")}>NEW FEATURE AVAILABLE!</AlertTitle>
            <AlertDescription className={cn(currentStyle.alert.description, "font-semibold")}>
              Check out our new AI-powered analytics dashboard for deeper insights into your business metrics.
            </AlertDescription>
          </Alert>
          <Alert className={cn(currentStyle.alert.base, currentStyle.badge.success)}>
            <AlertTitle className={cn(currentStyle.alert.title, "font-black text-xl")}>UPDATE SUCCESSFUL!</AlertTitle>
            <AlertDescription className={cn(currentStyle.alert.description, "font-semibold")}>
              Your profile has been updated successfully. All changes are now live.
            </AlertDescription>
          </Alert>
          <Alert className={cn(currentStyle.alert.base, currentStyle.badge.warning)}>
            <AlertTitle className={cn(currentStyle.alert.title, "font-black text-xl")}>ACTION REQUIRED!</AlertTitle>
            <AlertDescription className={cn(currentStyle.alert.description, "font-semibold")}>
              Your payment method will expire soon. Please update your billing information.
            </AlertDescription>
          </Alert>
          <Alert className={cn(currentStyle.alert.base, currentStyle.badge.error)}>
            <AlertTitle className={cn(currentStyle.alert.title, "font-black text-xl")}>SERVICE DISRUPTION!</AlertTitle>
            <AlertDescription className={cn(currentStyle.alert.description, "font-semibold")}>
              We're experiencing higher than normal traffic. Some features may be temporarily unavailable.
            </AlertDescription>
          </Alert>
        </div>
      </DemoSection>

      {/* Services Grid - Bold Comic Grid */}
      <DemoSection title="OUR SERVICES">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          <StyledCard
            title="CLOUD SOLUTIONS!"
            content="Scalable cloud infrastructure designed to grow with your business. Deploy, manage, and scale applications effortlessly."
          />
          <StyledCard
            title="DATA ANALYTICS!"
            content="Transform your data into actionable insights with our powerful analytics platform and visualization tools."
          />
          <StyledCard
            title="SECURITY SERVICES!"
            content="Enterprise-grade security solutions to protect your business from modern cyber threats and vulnerabilities."
          />
          <StyledCard
            title="TEAM COLLABORATION!"
            content="Streamline communication and boost productivity with integrated collaboration tools for distributed teams."
          />
          <StyledCard
            title="API INTEGRATION!"
            content="Seamlessly connect with third-party services and build custom integrations with our robust API platform."
          />
          <StyledCard
            title="24/7 SUPPORT!"
            content="Round-the-clock technical support from our expert team to keep your operations running smoothly."
          />
        </div>
      </DemoSection>

      {/* Important Actions Dialog */}
      <DemoSection title="IMPORTANT ACTIONS">
        <div className="text-center">
          <Dialog>
            <DialogTrigger className={cn(currentStyle.button.base, currentStyle.button.primary, "text-xl py-7 px-10 font-black")}>
              DELETE PROJECT!
            </DialogTrigger>
            <DialogContent className={currentStyle.dialog.content}>
              <DialogHeader>
                <DialogTitle className={cn(currentStyle.dialog.title, "font-black")}>
                  CONFIRM DELETION
                </DialogTitle>
                <DialogDescription className={currentStyle.dialog.description}>
                  Are you sure you want to delete this project? This action cannot be undone and all associated data will be permanently removed.
                </DialogDescription>
              </DialogHeader>
              <div className="flex gap-4 justify-end mt-6">
                <Button className={cn(currentStyle.button.base, currentStyle.button.outline, "font-bold")}>
                  CANCEL
                </Button>
                <Button className={cn(currentStyle.button.base, currentStyle.button.primary, "font-bold")}>
                  CONFIRM DELETE
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </DemoSection>
    </div>
  )
}
