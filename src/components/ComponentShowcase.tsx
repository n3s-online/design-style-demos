import { useState } from 'react'
import { useDesignStyle } from '@/contexts/DesignStyleContext'
import { cn } from '@/lib/utils'
import { DemoSection } from './DemoSection'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Label } from './ui/label'
import { Checkbox } from './ui/checkbox'
import { Switch } from './ui/switch'
import { Tabs, TabsList, TabsTrigger, TabsContent } from './ui/tabs'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './ui/accordion'
import { Alert, AlertTitle, AlertDescription } from './ui/alert'
import { Badge } from './ui/badge'
import { Progress } from './ui/progress'
import { Slider } from './ui/slider'
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog'
import { StyledCard } from './StyledCard'

export function ComponentShowcase() {
  const { currentStyle } = useDesignStyle()
  const [progress] = useState(45)
  const [sliderValue, setSliderValue] = useState(50)
  const [isChecked, setIsChecked] = useState(false)
  const [isSwitchOn, setIsSwitchOn] = useState(false)

  return (
    <div className="w-full max-w-6xl mx-auto space-y-12">
      {/* Welcome Card */}
      <StyledCard
        title="Design System Demo"
        content="Welcome to the comprehensive component showcase! Switch between design styles using the navbar above to see how all components adapt to different visual languages."
        className="w-full"
      />

      {/* Buttons */}
      <DemoSection title="Buttons">
        <div className="flex flex-wrap gap-4">
          <Button className={cn(currentStyle.button.base, currentStyle.button.primary)}>
            Primary Button
          </Button>
          <Button className={cn(currentStyle.button.base, currentStyle.button.secondary)}>
            Secondary Button
          </Button>
          <Button className={cn(currentStyle.button.base, currentStyle.button.outline)}>
            Outline Button
          </Button>
          <Button
            className={cn(currentStyle.button.base, currentStyle.button.primary)}
            disabled
          >
            Disabled Button
          </Button>
        </div>
      </DemoSection>

      {/* Form Inputs */}
      <DemoSection title="Form Inputs">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label className={currentStyle.input.label}>Email Address</Label>
            <Input
              type="email"
              placeholder="your@email.com"
              className={currentStyle.input.base}
            />
          </div>
          <div className="space-y-2">
            <Label className={currentStyle.input.label}>Username</Label>
            <Input
              type="text"
              placeholder="johndoe"
              className={currentStyle.input.base}
            />
          </div>
          <div className="space-y-2 md:col-span-2">
            <Label className={currentStyle.input.label}>Message</Label>
            <Textarea
              placeholder="Type your message here..."
              className={currentStyle.textarea.base}
              rows={4}
            />
          </div>
        </div>
      </DemoSection>

      {/* Checkboxes and Switches */}
      <DemoSection title="Selection Controls">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className={cn('text-lg font-semibold', currentStyle.input.label)}>Checkboxes</h3>
            <div className="space-y-3">
              <label className="flex items-center gap-3 cursor-pointer">
                <Checkbox
                  className={currentStyle.checkbox.base}
                  checked={isChecked}
                  onChange={(e) => setIsChecked(e.target.checked)}
                />
                <span className={currentStyle.checkbox.label}>
                  I agree to the terms and conditions
                </span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <Checkbox className={currentStyle.checkbox.base} />
                <span className={currentStyle.checkbox.label}>
                  Subscribe to newsletter
                </span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <Checkbox className={currentStyle.checkbox.base} defaultChecked />
                <span className={currentStyle.checkbox.label}>
                  Enable notifications
                </span>
              </label>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className={cn('text-lg font-semibold', currentStyle.input.label)}>Switches</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className={currentStyle.checkbox.label}>Dark Mode</span>
                <Switch
                  checked={isSwitchOn}
                  onChange={(e) => setIsSwitchOn(e.target.checked)}
                />
              </div>
              <div className="flex items-center justify-between">
                <span className={currentStyle.checkbox.label}>Auto-save</span>
                <Switch />
              </div>
              <div className="flex items-center justify-between">
                <span className={currentStyle.checkbox.label}>2FA Authentication</span>
                <Switch defaultChecked />
              </div>
            </div>
          </div>
        </div>
      </DemoSection>

      {/* Badges */}
      <DemoSection title="Badges">
        <div className="flex flex-wrap gap-3">
          <Badge className={cn(currentStyle.badge.base, currentStyle.badge.success)}>
            Active
          </Badge>
          <Badge className={cn(currentStyle.badge.base, currentStyle.badge.warning)}>
            Pending
          </Badge>
          <Badge className={cn(currentStyle.badge.base, currentStyle.badge.error)}>
            Error
          </Badge>
          <Badge className={cn(currentStyle.badge.base, 'bg-blue-500 text-white border-blue-600')}>
            New
          </Badge>
          <Badge className={cn(currentStyle.badge.base, 'bg-purple-500 text-white border-purple-600')}>
            Premium
          </Badge>
        </div>
      </DemoSection>

      {/* Progress & Slider */}
      <DemoSection title="Progress & Slider">
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between items-center mb-2">
              <Label className={currentStyle.input.label}>Upload Progress</Label>
              <span className={currentStyle.checkbox.label}>{progress}%</span>
            </div>
            <Progress
              value={progress}
              className={currentStyle.progress.container}
            />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between items-center mb-2">
              <Label className={currentStyle.input.label}>Volume</Label>
              <span className={currentStyle.checkbox.label}>{sliderValue}%</span>
            </div>
            <Slider
              value={sliderValue}
              onValueChange={setSliderValue}
              min={0}
              max={100}
              className={currentStyle.slider.base}
            />
          </div>
        </div>
      </DemoSection>

      {/* Tabs */}
      <DemoSection title="Tabs">
        <Tabs defaultValue="overview">
          <TabsList className={currentStyle.tabs.list}>
            <TabsTrigger value="overview" className={currentStyle.tabs.trigger}>
              Overview
            </TabsTrigger>
            <TabsTrigger value="analytics" className={currentStyle.tabs.trigger}>
              Analytics
            </TabsTrigger>
            <TabsTrigger value="reports" className={currentStyle.tabs.trigger}>
              Reports
            </TabsTrigger>
            <TabsTrigger value="settings" className={currentStyle.tabs.trigger}>
              Settings
            </TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className={currentStyle.tabs.content}>
            <p className={currentStyle.card.content}>
              This is the overview tab. It contains a high-level summary of your dashboard metrics and key performance indicators.
            </p>
          </TabsContent>
          <TabsContent value="analytics" className={currentStyle.tabs.content}>
            <p className={currentStyle.card.content}>
              Analytics data shows detailed insights into user behavior, traffic patterns, and conversion metrics.
            </p>
          </TabsContent>
          <TabsContent value="reports" className={currentStyle.tabs.content}>
            <p className={currentStyle.card.content}>
              Generate and download comprehensive reports for your team or stakeholders.
            </p>
          </TabsContent>
          <TabsContent value="settings" className={currentStyle.tabs.content}>
            <p className={currentStyle.card.content}>
              Configure your preferences, notification settings, and account details here.
            </p>
          </TabsContent>
        </Tabs>
      </DemoSection>

      {/* Accordion */}
      <DemoSection title="Accordion">
        <Accordion>
          <AccordionItem value="item-1" className={currentStyle.accordion.item}>
            <AccordionTrigger className={currentStyle.accordion.trigger}>
              What is Neobrutalism?
            </AccordionTrigger>
            <AccordionContent className={currentStyle.accordion.content}>
              Neobrutalism is a design style characterized by bold, thick borders, stark shadows, and vibrant colors. It embraces a raw, unpolished aesthetic with strong visual hierarchy.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className={currentStyle.accordion.item}>
            <AccordionTrigger className={currentStyle.accordion.trigger}>
              What is Art Deco?
            </AccordionTrigger>
            <AccordionContent className={currentStyle.accordion.content}>
              Art Deco is an elegant design style from the 1920s-1930s featuring geometric patterns, luxurious materials, and symmetrical designs. It emphasizes glamour and sophistication.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className={currentStyle.accordion.item}>
            <AccordionTrigger className={currentStyle.accordion.trigger}>
              How do I switch between styles?
            </AccordionTrigger>
            <AccordionContent className={currentStyle.accordion.content}>
              Use the dropdown selector in the navigation bar at the top of the page to switch between different design styles. All components will automatically adapt to match the selected style.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </DemoSection>

      {/* Alerts */}
      <DemoSection title="Alerts">
        <div className="space-y-4">
          <Alert className={cn(currentStyle.alert.base, 'bg-blue-50 border-blue-500 text-blue-900')}>
            <AlertTitle className={currentStyle.alert.title}>Information</AlertTitle>
            <AlertDescription className={currentStyle.alert.description}>
              This is an informational alert. It provides helpful context or tips to the user.
            </AlertDescription>
          </Alert>
          <Alert className={cn(currentStyle.alert.base, currentStyle.badge.success)}>
            <AlertTitle className={currentStyle.alert.title}>Success</AlertTitle>
            <AlertDescription className={cn(currentStyle.alert.description, 'text-green-800')}>
              Your changes have been saved successfully!
            </AlertDescription>
          </Alert>
          <Alert className={cn(currentStyle.alert.base, currentStyle.badge.warning)}>
            <AlertTitle className={currentStyle.alert.title}>Warning</AlertTitle>
            <AlertDescription className={cn(currentStyle.alert.description, 'text-yellow-800')}>
              Please review your settings before proceeding.
            </AlertDescription>
          </Alert>
          <Alert className={cn(currentStyle.alert.base, currentStyle.badge.error)}>
            <AlertTitle className={currentStyle.alert.title}>Error</AlertTitle>
            <AlertDescription className={cn(currentStyle.alert.description, 'text-red-800')}>
              An error occurred while processing your request.
            </AlertDescription>
          </Alert>
        </div>
      </DemoSection>

      {/* Dialog */}
      <DemoSection title="Dialog">
        <Dialog>
          <DialogTrigger className={cn(currentStyle.button.base, currentStyle.button.primary)}>
            Open Dialog
          </DialogTrigger>
          <DialogContent className={currentStyle.dialog.content}>
            <DialogHeader>
              <DialogTitle className={currentStyle.dialog.title}>
                Confirm Action
              </DialogTitle>
              <DialogDescription className={currentStyle.dialog.description}>
                Are you sure you want to proceed with this action? This operation cannot be undone.
              </DialogDescription>
            </DialogHeader>
            <div className="flex gap-4 justify-end mt-6">
              <Button className={cn(currentStyle.button.base, currentStyle.button.outline)}>
                Cancel
              </Button>
              <Button className={cn(currentStyle.button.base, currentStyle.button.primary)}>
                Confirm
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </DemoSection>

      {/* Additional Demo Cards */}
      <DemoSection title="Card Variations">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <StyledCard
            title="Feature 1"
            content="This card showcases how content adapts to the selected design style with automatic theming."
          />
          <StyledCard
            title="Feature 2"
            content="All typography, colors, borders, and shadows change based on the active theme."
          />
          <StyledCard
            title="Feature 3"
            content="Create consistent, beautiful interfaces that match your brand's visual identity."
          />
        </div>
      </DemoSection>
    </div>
  )
}
