import { Download, CheckCircle2, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const DOWNLOAD_URL = "https://gofile.io/d/S2GhPk";

export default function Index() {
  return (
    <div className="relative">
      {/* Hero */}
      <section className="container pt-16 pb-8 md:pt-24 md:pb-12">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent">
            Install the Browser Extension in Minutes
          </h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground">
            A simple, step-by-step guide for Chrome and Edge. Clear steps, no fluff.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3">
            <Button asChild size="lg" variant="gradient" className="px-8 py-6 text-base md:text-lg shadow-lg shadow-fuchsia-300/30">
              <a href={DOWNLOAD_URL} target="_blank" rel="noopener noreferrer" aria-label="Download the extension">
                <Download className="mr-2" />
                Download Extension
              </a>
            </Button>
            <a href={DOWNLOAD_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
              Direct link <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="container py-6 md:py-10">
        <div className="mx-auto max-w-5xl rounded-2xl border bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-[0_10px_30px_-10px_rgba(99,102,241,0.25)] p-6 md:p-10">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Installation Checklist</h2>
          </div>
          <p className="mt-2 text-muted-foreground">Choose your browser below and follow the numbered steps.</p>

          <Tabs defaultValue="chrome" className="mt-6">
            <TabsList className="bg-gradient-to-r from-violet-100 to-rose-100 text-foreground">
              <TabsTrigger value="chrome">Chrome</TabsTrigger>
              <TabsTrigger value="edge">Edge</TabsTrigger>
            </TabsList>
            <TabsContent value="chrome" className="mt-6">
              <StepsList
                steps={[
                  "Click the Download button above to get the ZIP file.",
                  "Right‑click the ZIP and Extract it to a folder.",
                  "Open Chrome and go to chrome://extensions",
                  "Turn on Developer mode (top-right).",
                  "Click Load unpacked and select the extracted folder.",
                  "Confirm the extension appears and is enabled.",
                ]}
              />
            </TabsContent>
            <TabsContent value="edge" className="mt-6">
              <StepsList
                steps={[
                  "Download the ZIP using the button above.",
                  "Extract the ZIP to a simple folder path (e.g., Desktop/Extension).",
                  "Open Edge and go to edge://extensions",
                  "Enable Developer mode (left sidebar toggle).",
                  "Click Load unpacked and choose the extracted folder.",
                  "Ensure the extension shows up and toggle it On.",
                ]}
              />
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Troubleshooting */}
      <section className="container py-6 md:py-12">
        <div className="mx-auto max-w-5xl grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 p-6 md:p-8 shadow-[0_10px_30px_-10px_rgba(236,72,153,0.25)]">
            <h3 className="text-xl md:text-2xl font-bold">Troubleshooting</h3>
            <p className="mt-2 text-muted-foreground">Common issues and quick fixes.</p>
            <Accordion type="single" collapsible className="mt-4">
              <AccordionItem value="invalid">
                <AccordionTrigger>“Package is invalid” or manifest error</AccordionTrigger>
                <AccordionContent>
                  Ensure you extracted the ZIP. You must load the folder that contains manifest.json, not the ZIP file itself.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="no-developer">
                <AccordionTrigger>Can’t find Developer mode or Load unpacked</AccordionTrigger>
                <AccordionContent>
                  On Chrome, open chrome://extensions and toggle Developer mode in the top-right. On Edge, open edge://extensions and enable Developer mode from the left sidebar.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="permissions">
                <AccordionTrigger>Permission prompts or warnings</AccordionTrigger>
                <AccordionContent>
                  Read the prompt carefully and click Allow if you trust the source. You can review permissions anytime from the Extensions page.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="doesnt-appear">
                <AccordionTrigger>Extension doesn’t appear after loading</AccordionTrigger>
                <AccordionContent>
                  Check that you selected the correct folder and that the extension is enabled. Try reloading the Extensions page or restarting the browser.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="rounded-2xl border bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 p-6 md:p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-xl md:text-2xl font-bold">Need the file again?</h3>
              <p className="mt-2 text-muted-foreground">Use the secure download link below.</p>
            </div>
            <div className="mt-6">
              <Button asChild size="lg" variant="gradient" className="w-full md:w-auto">
                <a href={DOWNLOAD_URL} target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2" /> Download Extension
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container py-8 md:py-12">
        <div className="mx-auto max-w-3xl text-center rounded-2xl border bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 p-8 md:p-10 shadow-[0_10px_30px_-10px_rgba(147,51,234,0.25)]">
          <h3 className="text-2xl md:text-3xl font-bold">All set?</h3>
          <p className="mt-2 text-muted-foreground">Keep this page handy if you need to reinstall later.</p>
          <Button asChild size="lg" variant="gradient" className="mt-6">
            <a href={DOWNLOAD_URL} target="_blank" rel="noopener noreferrer">
              <Download className="mr-2" /> Download Now
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}

function StepsList({ steps }: { steps: string[] }) {
  return (
    <ol className="grid gap-3 md:gap-4">
      {steps.map((s, i) => (
        <li key={i} className="group flex items-start gap-3 rounded-xl border bg-white/80 p-4 md:p-5">
          <span className="mt-0.5 inline-flex h-8 w-8 flex-none items-center justify-center rounded-full bg-gradient-to-br from-violet-500 via-fuchsia-500 to-rose-500 text-white font-bold shadow-sm">
            {i + 1}
          </span>
          <div className="flex-1 leading-relaxed text-sm md:text-base">
            <p className="text-foreground">{s}</p>
            <div className="mt-2 hidden items-center gap-2 text-emerald-600 group-hover:flex">
              <CheckCircle2 className="h-4 w-4" />
              <span className="text-xs">Ready for the next step</span>
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
}
