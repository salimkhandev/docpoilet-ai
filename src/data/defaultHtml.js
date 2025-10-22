export const defaultHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Khalil Studio Project Report</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    @page {
      size: A4;
      margin: 25mm 20mm;
    }
    body {
      background-color: white;
      color: #222;
    }
  </style>
</head>
<body class="max-w-[210mm] mx-auto px-12 py-10 font-sans leading-relaxed text-gray-800">

  <!-- Header -->
  <header class="border-b border-gray-400 pb-3 mb-10">
    <div class="flex justify-between items-start">
      <div>
        <h1 class="text-3xl font-bold uppercase tracking-wide">KHALIL STUDIO</h1>
        <p class="text-base font-medium mt-1">Muhammad Khalil</p>
        <p class="text-sm italic text-gray-600">Handled Under Salim Khan</p>
      </div>
      <p class="text-sm italic mt-2 text-gray-700">19 Oct 2025</p>
    </div>
  </header>

  <!-- Content -->
  <main class="space-y-8">

    <!-- Summary -->
    <div class="grid grid-cols-[160px_1fr] gap-6">
      <p class="font-semibold text-gray-700">Summary</p>
      <p>
        Khalil Studio is a professional portfolio website for a video editor.
        It showcases editing work, client projects, and showreels through a responsive and creative interface.
        The main goal of this project is to build a clean, lightweight, and visually engaging portfolio that reflects the editor’s artistic and technical abilities while helping attract new clients.
      </p>
    </div>

    <!-- Work Completed -->
    <div class="grid grid-cols-[160px_1fr] gap-6">
      <p class="font-semibold text-gray-700">Work Completed</p>
      <ul class="list-disc list-inside space-y-1">
        <li>Designed and developed the full frontend using React and Tailwind CSS.</li>
        <li>Built sections for Home, Portfolio, About, and Contact with responsive layouts.</li>
        <li>Integrated video previews, hover effects, and smooth animations.</li>
      </ul>
    </div>

    <!-- Work in Progress -->
    <div class="grid grid-cols-[160px_1fr] gap-6">
      <p class="font-semibold text-gray-700">Work in Progress</p>
      <ul class="list-disc list-inside space-y-1">
        <li>Improving loading performance for high-resolution video content.</li>
        <li>Implementing SEO and structured data for better discoverability.</li>
        <li>Testing accessibility features for all screen sizes.</li>
      </ul>
    </div>

    <!-- Work Planning -->
    <div class="grid grid-cols-[160px_1fr] gap-6">
      <p class="font-semibold text-gray-700">Work Planning</p>
      <ul class="list-disc list-inside space-y-1">
        <li>Develop backend for handling contact messages and portfolio uploads.</li>
        <li>Add testimonial and review sections for client credibility.</li>
        <li>Include admin dashboard for content management.</li>
      </ul>
    </div>

    <!-- Work Planned -->
    <div class="grid grid-cols-[160px_1fr] gap-6">
      <p class="font-semibold text-gray-700">Work Planned</p>
      <ul class="list-disc list-inside space-y-1">
        <li>Deploy website on Vercel or Netlify with custom domain integration.</li>
        <li>Conduct cross-browser and device testing before launch.</li>
        <li>Prepare promotional media for launch on social platforms.</li>
      </ul>
    </div>

    <!-- Challenges -->
    <div class="grid grid-cols-[160px_1fr] gap-6">
      <p class="font-semibold text-gray-700">Challenges</p>
      <ul class="list-disc list-inside space-y-1">
        <li>Ensuring fast load time while maintaining video quality.</li>
        <li>Managing responsive design consistency across all devices.</li>
        <li>Handling hosting limitations for heavy video assets.</li>
      </ul>
    </div>

    <!-- Budget Estimation -->
    <div class="grid grid-cols-[160px_1fr] gap-6">
      <p class="font-semibold text-gray-700">Budget Estimation</p>
      <ul class="list-disc list-inside space-y-1">
        <li><strong>Frontend Development:</strong> Rs 12,000 – UI, UX, animations, and responsiveness.</li>
        <li><strong>Backend Development:</strong> Rs 8,000 – Server setup, form handling, and content management.</li>
        <li><strong>Testing & Deployment:</strong> Rs 5,000 – Quality assurance, optimization, and hosting setup.</li>
      </ul>
    </div>

    <!-- Conclusion -->
    <div class="grid grid-cols-[160px_1fr] gap-6">
      <p class="font-semibold text-gray-700">Conclusion</p>
      <p>
        Khalil Studio successfully represents the identity of a modern video editor through creative design and performance optimization.
        It combines visual storytelling with seamless technology to deliver an elegant user experience.
        Once completed, the website will serve as a professional digital portfolio for attracting clients and showcasing video editing expertise effectively.
      </p>
    </div>

  </main>

  <!-- Footer -->
  <footer class="mt-12 pt-4 border-t border-gray-400 text-sm text-gray-600 text-right">
    Report Prepared by <span class="font-semibold">XYZ</span>
  </footer>

</body>
</html>
`;
