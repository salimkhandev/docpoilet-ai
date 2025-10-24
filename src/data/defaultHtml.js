export const defaultHtml = `



<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>TypeScript Interview Cheat Sheet</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            font-family: 'Open Sans', sans-serif;
            background: #f8fafc;
        }

        h1,
        h2,
        h3 {
            font-family: 'Montserrat', sans-serif;
        }

        code,
        pre {
            font-family: 'Fira Mono', monospace;
        }

        .section {
            background: #fff;
            border-radius: 1rem;
            box-shadow: 0 2px 8px #0001;
            margin-bottom: 2rem;
            padding: 2rem;
        }

        .problem-title {
            display: flex;
            align-items: center;
            font-size: 1.25rem;
            font-weight: 700;
            color: #2563eb;
            margin-bottom: 0.5rem;
        }

        .problem-title i {
            margin-right: 0.5rem;
        }

        .tip {
            background: #e0f2fe;
            color: #0369a1;
            border-left: 4px solid #0ea5e9;
            padding: 1rem;
            border-radius: 0.5rem;
            margin-top: 2rem;
        }

        @media (max-width: 600px) {
            .section {
                padding: 1rem;
            }

            pre {
                font-size: 0.9rem;
            }
        }
    </style>

</head>
<body class="p-4 md:p-8">
  <div class="max-w-3xl mx-auto">
    <h1 class="text-3xl md:text-4xl font-bold text-blue-700 mb-6 flex items-center gap-2">
      <i class="fa-brands fa-js-square text-yellow-400"></i>
      TypeScript Interview Cheat Sheet
    </h1>
    <div class="section">
      <div class="problem-title"><i class="fa-solid fa-brain text-purple-600"></i> 1. What is TypeScript?</div>
      <p>TypeScript is a superset of JavaScript that adds static typing and compile-time error checking. It compiles to plain JavaScript.</p>
    </div>
    <div class="section">
      <div class="problem-title"><i class="fa-solid fa-font text-pink-600"></i> 2. Difference between JavaScript and TypeScript</div>
      <div class="overflow-x-auto">
        <table class="min-w-full text-left border border-gray-200 rounded-lg mb-2">
          <thead>
            <tr class="bg-blue-50">
              <th class="py-1 px-2 font-semibold">Feature</th>
              <th class="py-1 px-2 font-semibold">JavaScript</th>
              <th class="py-1 px-2 font-semibold">TypeScript</th>
            </tr>
          </thead>
          <tbody>
            <tr><td class="py-1 px-2">Typing</td><td class="py-1 px-2">Dynamic</td><td class="py-1 px-2">Static</td></tr>
            <tr class="bg-gray-50"><td class="py-1 px-2">Compilation</td><td class="py-1 px-2">Interpreted</td><td class="py-1 px-2">Compiled to JS</td></tr>
            <tr><td class="py-1 px-2">Error Checking</td><td class="py-1 px-2">Runtime</td><td class="py-1 px-2">Compile time</td></tr>
            <tr class="bg-gray-50"><td class="py-1 px-2">Support for OOP</td><td class="py-1 px-2">Partial</td><td class="py-1 px-2">Full (Classes, Interfaces, etc.)</td></tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="section">
      <div class="problem-title"><i class="fa-solid fa-puzzle-piece text-green-600"></i> 3. What are types in TypeScript?</div>
      <ul class="list-disc pl-6">
        <li>Primitive: <span class="font-mono text-blue-700">string</span>, <span class="font-mono text-blue-700">number</span>, <span class="font-mono text-blue-700">boolean</span>, <span class="font-mono text-blue-700">null</span>, <span class="font-mono text-blue-700">undefined</span></li>
        <li>Special: <span class="font-mono text-blue-700">any</span>, <span class="font-mono text-blue-700">unknown</span>, <span class="font-mono text-blue-700">never</span>, <span class="font-mono text-blue-700">void</span></li>
        <li>Advanced: union, intersection, tuple, enum, generics</li>
      </ul>
    </div>
    <div class="section">
      <div class="problem-title"><i class="fa-solid fa-cube text-orange-600"></i> 4. What is an Interface?</div>
      <p>Used to define the structure of an object.</p>
      <pre class="language-typescript"><code class="language-typescript">interface User &#123;
  name: string;
  age: number;
&#125;</code></pre>
    </div>
    <div class="section">
      <div class="problem-title"><i class="fa-solid fa-file-lines text-indigo-600"></i> 5. Type Alias vs Interface</div>
      <div class="overflow-x-auto">
        <table class="min-w-full text-left border border-gray-200 rounded-lg mb-2">
          <thead>
            <tr class="bg-blue-50">
              <th class="py-1 px-2 font-semibold">Aspect</th>
              <th class="py-1 px-2 font-semibold">Interface</th>
              <th class="py-1 px-2 font-semibold">Type Alias</th>
            </tr>
          </thead>
          <tbody>
            <tr><td class="py-1 px-2">Extendable</td><td class="py-1 px-2">Yes</td><td class="py-1 px-2">Yes (via intersection)</td></tr>
            <tr class="bg-gray-50"><td class="py-1 px-2">Use for</td><td class="py-1 px-2">Objects</td><td class="py-1 px-2">Objects, primitives, unions</td></tr>
          </tbody>
        </table>
      </div>
    </div>
    <!-- Coding Problems Section -->
    <div class="section">
      <h2 class="text-xl font-bold text-blue-700 mb-4 flex items-center gap-2"><i class="fa-solid fa-code text-blue-500"></i>10 Practical TypeScript Coding Problems</h2>
      <div class="mb-6">
        <h3 class="font-semibold text-lg mb-1 flex items-center gap-2"><span>1️⃣</span> Reverse a String</h3>
        <pre class="language-typescript"><code class="language-typescript">function reverseString(str: string): string &#123;
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) &#123;
    reversed += str[i];
  &#125;
  return reversed;
&#125;
console.log(reverseString("Salim")); // "milaS"</code></pre>
      </div>
      <div class="mb-6">
        <h3 class="font-semibold text-lg mb-1 flex items-center gap-2"><span>2️⃣</span> Check Palindrome</h3>
        <pre class="language-typescript"><code class="language-typescript">function isPalindrome(str: string): boolean &#123;
  return str === str.split("").reverse().join("");
&#125;
console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false</code></pre>
      </div>
      <div class="mb-6">
        <h3 class="font-semibold text-lg mb-1 flex items-center gap-2"><span>3️⃣</span> Find Largest Number in Array</h3>
        <pre class="language-typescript"><code class="language-typescript">function largestNumber(arr: number[]): number &#123;
  let max = arr[0];
  for (let num of arr) &#123;
    if (num > max) max = num;
  &#125;
  return max;
&#125;
console.log(largestNumber([10, 5, 23, 8])); // 23</code></pre>
      </div>
      <div class="mb-6">
        <h3 class="font-semibold text-lg mb-1 flex items-center gap-2"><span>4️⃣</span> Remove Duplicates from Array</h3>
        <pre class="language-typescript"><code class="language-typescript">function removeDuplicates(arr: number[]): number[] &#123;
  return Array.from(new Set(arr));
&#125;
console.log(removeDuplicates([1, 2, 2, 3, 3, 4])); // [1,2,3,4]</code></pre>
      </div>
      <div class="mb-6">
        <h3 class="font-semibold text-lg mb-1 flex items-center gap-2"><span>5️⃣</span> Count Character Occurrences in String</h3>
        <pre class="language-typescript"><code class="language-typescript">function charCount(str: string): Record&lt;string, number&gt; &#123;
  const count: Record&lt;string, number&gt; = &#123;&#125;;
  for (const char of str) &#123;
    count[char] = (count[char] || 0) + 1;
  &#125;
  return count;
&#125;
console.log(charCount("salim")); // { s:1, a:1, l:1, i:1, m:1 }</code></pre>
      </div>
      <div class="mb-6">
        <h3 class="font-semibold text-lg mb-1 flex items-center gap-2"><span>6️⃣</span> FizzBuzz</h3>
        <pre class="language-typescript"><code class="language-typescript">function fizzBuzz(n: number): void &#123;
  for (let i = 1; i <= n; i++) &#123;
    if (i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz");
    else if (i % 3 === 0) console.log("Fizz");
    else if (i % 5 === 0) console.log("Buzz");
    else console.log(i);
  &#125;
&#125;
fizzBuzz(15);</code></pre>
      </div>
      <div class="mb-6">
        <h3 class="font-semibold text-lg mb-1 flex items-center gap-2"><span>7️⃣</span> Factorial (Recursive)</h3>
        <pre class="language-typescript"><code class="language-typescript">function factorial(n: number): number &#123;
  return n <= 1 ? 1 : n * factorial(n - 1);
&#125;
console.log(factorial(5)); // 120</code></pre>
      </div>
      <div class="mb-6">
        <h3 class="font-semibold text-lg mb-1 flex items-center gap-2"><span>8️⃣</span> Fibonacci Sequence</h3>
        <pre class="language-typescript"><code class="language-typescript">function fibonacci(n: number): number[] &#123;
  const seq = [0, 1];
  for (let i = 2; i < n; i++) &#123;
    seq[i] = seq[i - 1] + seq[i - 2];
  &#125;
  return seq;
&#125;
console.log(fibonacci(7)); // [0,1,1,2,3,5,8]</code></pre>
      </div>
      <div class="mb-6">
        <h3 class="font-semibold text-lg mb-1 flex items-center gap-2"><span>9️⃣</span> Find First Non-Repeating Character</h3>
        <pre class="language-typescript"><code class="language-typescript">function firstNonRepeating(str: string): string | null &#123;
  const count: Record&lt;string, number&gt; = &#123;&#125;;
  for (const char of str) count[char] = (count[char] || 0) + 1;
  for (const char of str) if (count[char] === 1) return char;
  return null;
&#125;
console.log(firstNonRepeating("salims")); // "a"</code></pre>
      </div>
      <div class="mb-6">
        <h3 class="font-semibold text-lg mb-1 flex items-center gap-2"><span>🔟</span> Two-Sum Problem</h3>
        <pre class="language-typescript"><code class="language-typescript">function twoSum(arr: number[], target: number): [number, number] | null &#123;
  const map: Record&lt;number, number&gt; = &#123;&#125;;
  for (let i = 0; i < arr.length; i++) &#123;
    const complement = target - arr[i];
    if (map[complement] !== undefined) return [map[complement], i];
    map[arr[i]] = i;
  &#125;
  return null;
&#125;
console.log(twoSum([2,7,11,15], 9)); // [0,1]</code></pre>
      </div>
    </div>
    <div class="tip">
      <b><i class="fa-solid fa-lightbulb text-yellow-400"></i> Interview tip:</b><br>
      <ul class="list-disc pl-6 mt-1">
        <li>For each problem, know <b>2–3 ways to solve it</b> (loop, recursion, built-in methods).</li>
        <li>Explain <b>time &amp; space complexity</b>.</li>
      </ul>
    </div>
  </div>
  <script>
    Prism.highlightAll();
  </script>
</body>
</html>
`;
