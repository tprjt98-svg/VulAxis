import pptxgen from "pptxgenjs";

console.log("Generating PPTX file... please wait.");

let pptx = new pptxgen();

// Set presentation properties
pptx.author = "Harshil Panchal";
pptx.company = "AI-VAPT";
pptx.title = "AI-VAPT Presentation";

// Shared Theme configuration
const darkBg = "0A0005"; // Very dark cinematic red/black
const textColor = "FFFFFF"; // White
const accentColor = "FF0044"; // Cinematic Red

// ---------------------------------------------------------
// Slide 1: Title
// ---------------------------------------------------------
let slide1 = pptx.addSlide();
slide1.background = { color: darkBg };
slide1.addText("AI-VAPT", { 
    x: "10%", y: "30%", w: "80%", h: 1.5, 
    fontSize: 64, bold: true, color: accentColor, align: "center" 
});
slide1.addText("Next-Generation Autonomous Vulnerability Assessment Dashboard", { 
    x: "10%", y: "50%", w: "80%", h: 1, 
    fontSize: 24, color: textColor, align: "center" 
});

// ---------------------------------------------------------
// Slide 2: What is AI-VAPT?
// ---------------------------------------------------------
let slide2 = pptx.addSlide();
slide2.background = { color: darkBg };
slide2.addText("Redefining Security Interfaces", { x: 0.5, y: 0.5, w: "90%", h: 1, fontSize: 36, color: accentColor, bold: true });
slide2.addText([
    { text: "• High-fidelity, interactive cybersecurity dashboard.\n\n", options: { fontSize: 24, color: textColor } },
    { text: "• Designed for penetration testers and security researchers.\n\n", options: { fontSize: 24, color: textColor } },
    { text: "• Focuses on a seamless, real-time user experience.\n", options: { fontSize: 24, color: textColor } }
], { x: 0.5, y: 1.5, w: "90%", h: 3.5 });

// ---------------------------------------------------------
// Slide 3: Core Features
// ---------------------------------------------------------
let slide3 = pptx.addSlide();
slide3.background = { color: darkBg };
slide3.addText("Key Dashboard Capabilities", { x: 0.5, y: 0.5, w: "90%", h: 1, fontSize: 36, color: accentColor, bold: true });
slide3.addText([
    { text: "• Target Specification: Easy-to-use inputs for URLs and scan intensities.\n\n", options: { fontSize: 22, color: textColor } },
    { text: "• Deep-Dive Analysis: Detailed views for every vulnerability.\n\n", options: { fontSize: 22, color: textColor } },
    { text: "• Intelligent Filtering: Sort by Exploitability, OWASP, or Business Impact.\n", options: { fontSize: 22, color: textColor } }
], { x: 0.5, y: 1.5, w: "90%", h: 3 });

// Attempt to add the Dashboard image to Slide 3 if it exists
try {
    slide3.addImage({ path: "Dashboard.png", x: 1.5, y: 3.5, w: 7, h: 1.8 });
} catch (e) {
    console.log("Could not find Dashboard.png to add to slide 3.");
}

// ---------------------------------------------------------
// Slide 4: Tech Stack
// ---------------------------------------------------------
let slide4 = pptx.addSlide();
slide4.background = { color: darkBg };
slide4.addText("Built for Speed & Modularity", { x: 0.5, y: 0.5, w: "90%", h: 1, fontSize: 36, color: accentColor, bold: true });
slide4.addText([
    { text: "• Frontend Framework: React 18 & Vite\n\n", options: { fontSize: 24, color: textColor } },
    { text: "• Language: TypeScript for strict typing\n\n", options: { fontSize: 24, color: textColor } },
    { text: "• Styling: TailwindCSS combined with Custom Animations\n", options: { fontSize: 24, color: textColor } },
], { x: 0.5, y: 1.5, w: "90%", h: 3 });

// ---------------------------------------------------------
// Slide 5: The Aesthetic
// ---------------------------------------------------------
let slide5 = pptx.addSlide();
slide5.background = { color: darkBg };
slide5.addText("The Cyber-Premium Aesthetic", { x: 0.5, y: 0.5, w: "90%", h: 1, fontSize: 36, color: accentColor, bold: true });
slide5.addText([
    { text: "• Custom Cinematic Core CSS classes.\n\n", options: { fontSize: 24, color: textColor } },
    { text: "• Glassmorphism effects and dynamic glowing borders.\n\n", options: { fontSize: 24, color: textColor } },
    { text: "• Animated laser scan beams simulating neural analysis.\n", options: { fontSize: 24, color: textColor } },
], { x: 0.5, y: 1.5, w: "90%", h: 3 });

// ---------------------------------------------------------
// Slide 6: Roadmap
// ---------------------------------------------------------
let slide6 = pptx.addSlide();
slide6.background = { color: darkBg };
slide6.addText("The Roadmap", { x: 0.5, y: 0.5, w: "90%", h: 1, fontSize: 36, color: accentColor, bold: true });
slide6.addText([
    { text: "CURRENT (Frontend Shell):\n", options: { fontSize: 24, color: accentColor, bold: true } },
    { text: "  • Interactive UI Sandbox\n", options: { fontSize: 20, color: textColor } },
    { text: "  • Dynamically Mocked Data\n\n", options: { fontSize: 20, color: textColor } },
    { text: "FUTURE (Real Backend):\n", options: { fontSize: 24, color: accentColor, bold: true } },
    { text: "  • Python/Flask API Integration\n", options: { fontSize: 20, color: textColor } },
    { text: "  • Live Nmap & Nuclei Scanning execution\n", options: { fontSize: 20, color: textColor } }
], { x: 0.5, y: 1.5, w: "50%", h: 3.5 });

// Attempt to add the Flowchart image to Slide 6 if it exists
try {
    slide6.addImage({ path: "Flowchart.png", x: 5.5, y: 1.5, w: 4, h: 3.5 });
} catch (e) {
    console.log("Could not find Flowchart.png to add to slide 6.");
}

// ---------------------------------------------------------
// Slide 7: Conclusion
// ---------------------------------------------------------
let slide7 = pptx.addSlide();
slide7.background = { color: darkBg };
slide7.addText("Questions & Next Steps", { x: "10%", y: "30%", w: "80%", h: 1.5, fontSize: 48, color: accentColor, bold: true, align: "center" });
slide7.addText("Security is no more an option — Privacy by design, trust by vision.", { x: "10%", y: "50%", w: "80%", h: 1, fontSize: 22, color: textColor, align: "center", italic: true });

// ---------------------------------------------------------
// Save the Presentation
// ---------------------------------------------------------
pptx.writeFile({ fileName: "AI-VAPT_Presentation.pptx" }).then(fileName => {
    console.log(`\n🎉 SUCCESS! Your presentation has been created at: ${fileName}`);
    console.log("Check your project folder for 'AI-VAPT_Presentation.pptx'");
});
