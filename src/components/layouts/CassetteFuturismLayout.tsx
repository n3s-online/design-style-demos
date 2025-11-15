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
 * CassetteFuturismLayout Component
 *
 * A retro-futuristic layout inspired by 1970s-80s sci-fi aesthetic.
 * Features chunky terminals, monospaced fonts, analog displays, and industrial design.
 */
export function CassetteFuturismLayout() {
  const { currentStyle } = useDesignStyle()
  const [systemLoad] = useState(67)
  const [powerLevel, setPowerLevel] = useState(75)
  const [diagnosticsEnabled, setDiagnosticsEnabled] = useState(false)
  const [terminalActive, setTerminalActive] = useState(true)

  return (
    <div className="w-full space-y-8 sm:space-y-10 md:space-y-12">
      {/* Terminal Welcome Display */}
      <div className="relative">
        <div className={cn(currentStyle.card.container, "p-6 sm:p-8 md:p-10")}>
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 rounded-full bg-palette-accent shadow-[0_0_8px_rgba(255,107,53,0.8)]"></div>
              <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></div>
              <div className="w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></div>
            </div>
            <h1 className={cn(currentStyle.card.title, "text-2xl sm:text-3xl md:text-4xl")}>
              [SYSTEM] ACME CORP TERMINAL
            </h1>
            <div className={cn(currentStyle.card.content, "border-l-4 border-palette-accent pl-4")}>
              <p className="mb-2">&gt; AUTHENTICATED: GUEST USER</p>
              <p>Your trusted partner in innovative business solutions. Explore our comprehensive dashboard to manage your projects, team, and resources all in one place.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Command Buttons */}
      <div className="space-y-4 sm:space-y-6">
        <h2 className={cn(currentStyle.card.title, "text-center text-lg sm:text-xl md:text-2xl")}>
          [QUICK COMMANDS]
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          <Button className={cn(currentStyle.button.base, currentStyle.button.primary, "py-5 sm:py-6 text-sm sm:text-base")}>
            [INIT] NEW PROJECT
          </Button>
          <Button className={cn(currentStyle.button.base, currentStyle.button.secondary, "py-5 sm:py-6 text-sm sm:text-base")}>
            [VIEW] ANALYTICS
          </Button>
          <Button className={cn(currentStyle.button.base, currentStyle.button.outline, "py-5 sm:py-6 text-sm sm:text-base")}>
            [CONFIG] TEAM SETTINGS
          </Button>
          <Button
            className={cn(currentStyle.button.base, currentStyle.button.primary, "py-5 sm:py-6 text-sm sm:text-base")}
            disabled
          >
            [EXPORT] REPORT.DAT
          </Button>
        </div>
      </div>

      {/* Two Column: Input Form & System Status */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        {/* Data Input Terminal */}
        <div className={cn(currentStyle.card.container, "p-5 sm:p-6 md:p-7")}>
          <h2 className={cn(currentStyle.card.title, "mb-5 sm:mb-6 text-base sm:text-lg")}>
            [CONTACT INTERFACE]
          </h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label className={currentStyle.input.label}>Full Name</Label>
              <Input
                type="text"
                placeholder="JOHN DOE"
                className={currentStyle.input.base}
              />
            </div>
            <div className="space-y-2">
              <Label className={currentStyle.input.label}>Email Address</Label>
              <Input
                type="email"
                placeholder="JOHN@ACMECORP.COM"
                className={currentStyle.input.base}
              />
            </div>
            <div className="space-y-2">
              <Label className={currentStyle.input.label}>Company</Label>
              <Input
                type="text"
                placeholder="YOUR COMPANY INC."
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
              <Label className={currentStyle.input.label}>Message Buffer</Label>
              <Textarea
                placeholder="ENTER MESSAGE DATA..."
                className={currentStyle.textarea.base}
                rows={4}
              />
            </div>
          </div>
        </div>

        {/* System Status Panel */}
        <div className={cn(currentStyle.card.container, "p-5 sm:p-6 md:p-7")}>
          <h2 className={cn(currentStyle.card.title, "mb-5 sm:mb-6 text-base sm:text-lg")}>
            [PROJECT STATUS]
          </h2>
          <div className="flex flex-wrap gap-2 sm:gap-3 mb-6">
            <Badge className={cn(currentStyle.badge.base, currentStyle.badge.success)}>
              ACTIVE
            </Badge>
            <Badge className={cn(currentStyle.badge.base, currentStyle.badge.warning)}>
              IN REVIEW
            </Badge>
            <Badge className={cn(currentStyle.badge.base, currentStyle.badge.error)}>
              BLOCKED
            </Badge>
            <Badge className={cn(currentStyle.badge.base, 'bg-blue-900 text-blue-300 border-blue-700')}>
              PLANNING
            </Badge>
            <Badge className={cn(currentStyle.badge.base, 'bg-purple-900 text-purple-300 border-purple-700')}>
              COMPLETED
            </Badge>
          </div>
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between items-center mb-2">
                <Label className={currentStyle.input.label}>Website Redesign</Label>
                <span className={cn(currentStyle.checkbox.label, "text-palette-text font-bold")}>{systemLoad}%</span>
              </div>
              <Progress
                value={systemLoad}
                className={currentStyle.progress.container}
              />
              <div className="flex justify-between text-xs font-mono text-palette-textSecondary mt-1">
                <span>[0%]</span>
                <span>[50%]</span>
                <span>[100%]</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center mb-2">
                <Label className={currentStyle.input.label}>Team Resources</Label>
                <span className={cn(currentStyle.checkbox.label, "text-palette-text font-bold")}>{powerLevel}%</span>
              </div>
              <Slider
                value={powerLevel}
                onValueChange={setPowerLevel}
                min={0}
                max={100}
                className={currentStyle.slider.base}
              />
              <div className="flex justify-between text-xs font-mono text-palette-textSecondary mt-1">
                <span>[MIN]</span>
                <span>[MED]</span>
                <span>[MAX]</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Configuration Panel */}
      <div className="space-y-4 sm:space-y-6">
        <h2 className={cn(currentStyle.card.title, "text-center text-lg sm:text-xl md:text-2xl")}>
          [SYSTEM CONFIGURATION]
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <div className={cn(currentStyle.card.container, "p-5 sm:p-6 md:p-7")}>
            <h3 className={cn('text-sm sm:text-base mb-4 sm:mb-5', currentStyle.input.label)}>
              Email Preferences
            </h3>
            <div className="space-y-4">
              <label className="flex items-center gap-3 cursor-pointer">
                <Checkbox
                  className={currentStyle.checkbox.base}
                  checked={diagnosticsEnabled}
                  onChange={(e) => setDiagnosticsEnabled(e.target.checked)}
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
          <div className={cn(currentStyle.card.container, "p-5 sm:p-6 md:p-7")}>
            <h3 className={cn('text-sm sm:text-base mb-4 sm:mb-5', currentStyle.input.label)}>
              Notifications
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className={currentStyle.checkbox.label}>Email Notifications</span>
                <Switch
                  checked={terminalActive}
                  onChange={(e) => setTerminalActive(e.target.checked)}
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

      {/* Control Panels (Tabs) */}
      <div className="space-y-4 sm:space-y-6">
        <h2 className={cn(currentStyle.card.title, "text-center text-lg sm:text-xl md:text-2xl")}>
          [CONTROL PANELS]
        </h2>
        <Tabs defaultValue="overview">
          <TabsList className={currentStyle.tabs.list}>
            <StyledTabTrigger value="overview">Overview</StyledTabTrigger>
            <StyledTabTrigger value="analytics">Analytics</StyledTabTrigger>
            <StyledTabTrigger value="team">Team</StyledTabTrigger>
            <StyledTabTrigger value="settings">Settings</StyledTabTrigger>
          </TabsList>
          <TabsContent value="overview" className={currentStyle.tabs.content}>
            <h3 className={cn('text-base sm:text-lg md:text-xl mb-3 sm:mb-4', currentStyle.card.title)}>
              &gt; OVERVIEW.SYS
            </h3>
            <p className={currentStyle.card.content}>
              Welcome to your dashboard overview. Here you'll find key metrics, recent activity, and important updates from your team and projects.
            </p>
          </TabsContent>
          <TabsContent value="analytics" className={currentStyle.tabs.content}>
            <h3 className={cn('text-base sm:text-lg md:text-xl mb-3 sm:mb-4', currentStyle.card.title)}>
              &gt; ANALYTICS.DAT
            </h3>
            <p className={currentStyle.card.content}>
              Track your performance with detailed analytics. Monitor user engagement, conversion rates, and revenue growth across all your projects.
            </p>
          </TabsContent>
          <TabsContent value="team" className={currentStyle.tabs.content}>
            <h3 className={cn('text-base sm:text-lg md:text-xl mb-3 sm:mb-4', currentStyle.card.title)}>
              &gt; TEAM.CFG
            </h3>
            <p className={currentStyle.card.content}>
              Manage your team members, assign roles, and collaborate effectively. View team performance and resource allocation at a glance.
            </p>
          </TabsContent>
          <TabsContent value="settings" className={currentStyle.tabs.content}>
            <h3 className={cn('text-base sm:text-lg md:text-xl mb-3 sm:mb-4', currentStyle.card.title)}>
              &gt; SETTINGS.INI
            </h3>
            <p className={currentStyle.card.content}>
              Configure your account preferences, security settings, billing information, and integration options all in one place.
            </p>
          </TabsContent>
        </Tabs>
      </div>

      {/* Information Database (FAQ) */}
      <div className="space-y-4 sm:space-y-6">
        <h2 className={cn(currentStyle.card.title, "text-center text-lg sm:text-xl md:text-2xl")}>
          [INFORMATION DATABASE]
        </h2>
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

      {/* System Messages */}
      <div className="space-y-4 sm:space-y-6">
        <h2 className={cn(currentStyle.card.title, "text-center text-lg sm:text-xl md:text-2xl")}>
          [SYSTEM MESSAGES]
        </h2>
        <div className="space-y-4">
          <Alert className={cn(currentStyle.alert.base, 'bg-blue-950 border-blue-600')}>
            <AlertTitle className={cn(currentStyle.alert.title, 'text-blue-400')}>
              [INFO] NEW FEATURE AVAILABLE
            </AlertTitle>
            <AlertDescription className={cn(currentStyle.alert.description, 'text-blue-200')}>
              Check out our new AI-powered analytics dashboard for deeper insights into your business metrics.
            </AlertDescription>
          </Alert>
          <Alert className={cn(currentStyle.alert.base, currentStyle.badge.success)}>
            <AlertTitle className={currentStyle.alert.title}>
              [OK] UPDATE SUCCESSFUL
            </AlertTitle>
            <AlertDescription className={currentStyle.alert.description}>
              Your profile has been updated successfully. All changes are now live.
            </AlertDescription>
          </Alert>
          <Alert className={cn(currentStyle.alert.base, currentStyle.badge.warning)}>
            <AlertTitle className={currentStyle.alert.title}>
              [WARN] ACTION REQUIRED
            </AlertTitle>
            <AlertDescription className={currentStyle.alert.description}>
              Your payment method will expire soon. Please update your billing information.
            </AlertDescription>
          </Alert>
          <Alert className={cn(currentStyle.alert.base, currentStyle.badge.error)}>
            <AlertTitle className={currentStyle.alert.title}>
              [ERROR] SERVICE DISRUPTION
            </AlertTitle>
            <AlertDescription className={currentStyle.alert.description}>
              We're experiencing higher than normal traffic. Some features may be temporarily unavailable.
            </AlertDescription>
          </Alert>
        </div>
      </div>

      {/* Service Modules Grid */}
      <div className="space-y-4 sm:space-y-6">
        <h2 className={cn(currentStyle.card.title, "text-center text-lg sm:text-xl md:text-2xl")}>
          [SERVICE MODULES]
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <StyledCard
            title="[MOD] CLOUD SOLUTIONS"
            content="Scalable cloud infrastructure designed to grow with your business. Deploy, manage, and scale applications effortlessly."
          />
          <StyledCard
            title="[MOD] DATA ANALYTICS"
            content="Transform your data into actionable insights with our powerful analytics platform and visualization tools."
          />
          <StyledCard
            title="[MOD] SECURITY SERVICES"
            content="Enterprise-grade security solutions to protect your business from modern cyber threats and vulnerabilities."
          />
          <StyledCard
            title="[MOD] TEAM COLLABORATION"
            content="Streamline communication and boost productivity with integrated collaboration tools for distributed teams."
          />
          <StyledCard
            title="[MOD] API INTEGRATION"
            content="Seamlessly connect with third-party services and build custom integrations with our robust API platform."
          />
          <StyledCard
            title="[MOD] 24/7 SUPPORT"
            content="Round-the-clock technical support from our expert team to keep your operations running smoothly."
          />
        </div>
      </div>

      {/* Critical Operations Dialog */}
      <div className="text-center space-y-4 sm:space-y-6">
        <h2 className={cn(currentStyle.card.title, "text-lg sm:text-xl md:text-2xl")}>
          [CRITICAL OPERATIONS]
        </h2>
        <Dialog>
          <DialogTrigger className={cn(currentStyle.button.base, currentStyle.button.primary, "px-6 py-4 sm:px-8 sm:py-5 text-sm sm:text-base")}>
            [DELETE] PROJECT.DAT
          </DialogTrigger>
          <DialogContent className={currentStyle.dialog.content}>
            <DialogHeader>
              <DialogTitle className={currentStyle.dialog.title}>
                [CONFIRM] DELETION
              </DialogTitle>
              <DialogDescription className={currentStyle.dialog.description}>
                Are you sure you want to delete this project? This action cannot be undone and all associated data will be permanently removed.
              </DialogDescription>
            </DialogHeader>
            <div className="flex gap-4 justify-end mt-6">
              <Button className={cn(currentStyle.button.base, currentStyle.button.outline)}>
                [CANCEL]
              </Button>
              <Button className={cn(currentStyle.button.base, currentStyle.button.primary)}>
                [CONFIRM]
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
