import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Hello World</CardTitle>
          <CardDescription>Welcome to your new Vite + React + TypeScript app with ShadCN!</CardDescription>
        </CardHeader>
        <CardContent>
          <p>This is a simple card component from ShadCN UI.</p>
        </CardContent>
      </Card>
    </div>
  )
}

export default App
