export default function TypeScriptCarousel() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-12 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-6xl font-bold text-white mb-4">TypeScript Mastery Guide</h1>
                    <p className="text-2xl text-purple-200">Complete TypeScript Learning Path</p>
                </div>

                <div className="space-y-8">

                        {/* Slide 1: Basics */}
                        <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl shadow-2xl p-10 border-4 border-blue-200">
                            <div className="flex items-center mb-8">
                                <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mr-5 shadow-lg">1</div>
                                <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Basics of TypeScript</h2>
                            </div>

                            <div className="space-y-8">
                                <div className="bg-white rounded-2xl p-6 shadow-md border border-blue-100">
                                    <h3 className="text-2xl font-bold text-blue-800 mb-4">📝 What is TypeScript?</h3>
                                    <p className="text-gray-700 mb-4 leading-relaxed">TypeScript is a strongly typed programming language that builds on JavaScript, adding optional static typing to catch errors during development rather than at runtime.</p>
                                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-5 border-l-4 border-blue-500">
                                        <p className="font-bold text-blue-900 mb-3 text-lg">Why Use TypeScript?</p>
                                        <ul className="space-y-2 text-gray-700">
                                            <li className="flex items-start"><span className="text-blue-600 mr-2">•</span> Catch errors during development with type checking</li>
                                            <li className="flex items-start"><span className="text-blue-600 mr-2">•</span> Better IDE support with autocompletion and IntelliSense</li>
                                            <li className="flex items-start"><span className="text-blue-600 mr-2">•</span> Enhanced code documentation through types</li>
                                            <li className="flex items-start"><span className="text-blue-600 mr-2">•</span> Safer refactoring and better maintainability</li>
                                            <li className="flex items-start"><span className="text-blue-600 mr-2">•</span> Modern JavaScript features with backward compatibility</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-white rounded-2xl p-6 shadow-md border border-blue-100">
                                    <h3 className="text-2xl font-bold text-blue-800 mb-4">⚙️ Installing & Setup</h3>
                                    <div className="bg-gray-900 rounded-xl p-5 text-green-400 font-mono text-sm overflow-x-auto">
                                        <div className="text-gray-500"># Install TypeScript globally</div>
                                        <div className="mb-3">npm install -g typescript</div>
                                        <div className="text-gray-500"># Initialize tsconfig.json</div>
                                        <div className="mb-3">tsc --init</div>
                                        <div className="text-gray-500"># Compile TypeScript file</div>
                                        <div>tsc filename.ts</div>
                                    </div>
                                    <p className="text-gray-700 mt-4 mb-3 font-semibold">tsconfig.json Configuration:</p>
                                    <div className="bg-gray-900 rounded-xl p-5 text-purple-300 font-mono text-sm overflow-x-auto">
                                        <div>{'{'}</div>
                                        <div className="ml-4"><span className="text-blue-400">"compilerOptions"</span>: {'{'}</div>
                                        <div className="ml-8"><span className="text-blue-400">"target"</span>: <span className="text-yellow-400">"ES2020"</span>,</div>
                                        <div className="ml-8"><span className="text-blue-400">"module"</span>: <span className="text-yellow-400">"commonjs"</span>,</div>
                                        <div className="ml-8"><span className="text-blue-400">"strict"</span>: <span className="text-orange-400">true</span>,</div>
                                        <div className="ml-8"><span className="text-blue-400">"esModuleInterop"</span>: <span className="text-orange-400">true</span>,</div>
                                        <div className="ml-8"><span className="text-blue-400">"outDir"</span>: <span className="text-yellow-400">"./dist"</span>,</div>
                                        <div className="ml-8"><span className="text-blue-400">"rootDir"</span>: <span className="text-yellow-400">"./src"</span></div>
                                        <div className="ml-4">{'}'}</div>
                                        <div>{'}'}</div>
                                    </div>
                                </div>

                                <div className="bg-white rounded-2xl p-6 shadow-md border border-blue-100">
                                    <h3 className="text-2xl font-bold text-blue-800 mb-4">🎯 Basic Types</h3>
                                    <div className="bg-gray-900 rounded-xl p-5 text-purple-300 font-mono text-sm overflow-x-auto space-y-3">
                                        <div><span className="text-gray-500">// String</span></div>
                                        <div><span className="text-pink-400">let</span> <span className="text-blue-300">username</span>: <span className="text-green-400">string</span> = <span className="text-yellow-400">"John"</span>;</div>

                                        <div className="mt-3"><span className="text-gray-500">// Number</span></div>
                                        <div><span className="text-pink-400">let</span> <span className="text-blue-300">age</span>: <span className="text-green-400">number</span> = <span className="text-orange-400">25</span>;</div>

                                        <div className="mt-3"><span className="text-gray-500">// Boolean</span></div>
                                        <div><span className="text-pink-400">let</span> <span className="text-blue-300">isActive</span>: <span className="text-green-400">boolean</span> = <span className="text-orange-400">true</span>;</div>

                                        <div className="mt-3"><span className="text-gray-500">// Any - disables type checking (avoid when possible)</span></div>
                                        <div><span className="text-pink-400">let</span> <span className="text-blue-300">data</span>: <span className="text-green-400">any</span> = <span className="text-yellow-400">"can be anything"</span>;</div>
                                        <div><span className="text-blue-300">data</span> = <span className="text-orange-400">123</span>; <span className="text-gray-500">// No error</span></div>

                                        <div className="mt-3"><span className="text-gray-500">// Unknown - safer than any, requires type checking</span></div>
                                        <div><span className="text-pink-400">let</span> <span className="text-blue-300">value</span>: <span className="text-green-400">unknown</span> = <span className="text-yellow-400">"hello"</span>;</div>
                                        <div><span className="text-pink-400">if</span> (<span className="text-pink-400">typeof</span> <span className="text-blue-300">value</span> === <span className="text-yellow-400">"string"</span>) {'{'}</div>
                                        <div className="ml-4">console.log(<span className="text-blue-300">value</span>.toUpperCase());</div>
                                        <div>{'}'}</div>

                                        <div className="mt-3"><span className="text-gray-500">// Void - functions that don't return</span></div>
                                        <div><span className="text-pink-400">function</span> <span className="text-blue-300">logMessage</span>(<span className="text-blue-300">msg</span>: <span className="text-green-400">string</span>): <span className="text-green-400">void</span> {'{'}</div>
                                        <div className="ml-4">console.log(<span className="text-blue-300">msg</span>);</div>
                                        <div>{'}'}</div>

                                        <div className="mt-3"><span className="text-gray-500">// Null and Undefined</span></div>
                                        <div><span className="text-pink-400">let</span> <span className="text-blue-300">empty</span>: <span className="text-green-400">null</span> = <span className="text-orange-400">null</span>;</div>
                                        <div><span className="text-pink-400">let</span> <span className="text-blue-300">notDefined</span>: <span className="text-green-400">undefined</span> = <span className="text-orange-400">undefined</span>;</div>
                                    </div>
                                </div>

                                <div className="bg-white rounded-2xl p-6 shadow-md border border-blue-100">
                                    <h3 className="text-2xl font-bold text-blue-800 mb-4">🔍 Type Inference vs Explicit Typing</h3>
                                    <div className="bg-gray-900 rounded-xl p-5 text-purple-300 font-mono text-sm overflow-x-auto">
                                        <div><span className="text-gray-500">// Type Inference - TS infers the type</span></div>
                                        <div><span className="text-pink-400">let</span> <span className="text-blue-300">message</span> = <span className="text-yellow-400">"Hello"</span>; <span className="text-gray-500">// inferred as string</span></div>
                                        <div className="mt-3"><span className="text-gray-500">// Explicit Typing - you specify the type</span></div>
                                        <div><span className="text-pink-400">let</span> <span className="text-blue-300">count</span>: <span className="text-green-400">number</span> = <span className="text-orange-400">10</span>;</div>
                                    </div>
                                </div>

                                <div className="bg-white rounded-2xl p-6 shadow-md border border-blue-100">
                                    <h3 className="text-2xl font-bold text-blue-800 mb-4">📦 let, const, var</h3>
                                    <div className="bg-gray-900 rounded-xl p-5 text-purple-300 font-mono text-sm overflow-x-auto space-y-3">
                                        <div><span className="text-gray-500">// const - cannot be reassigned</span></div>
                                        <div><span className="text-pink-400">const</span> <span className="text-blue-300">PI</span>: <span className="text-green-400">number</span> = <span className="text-orange-400">3.14</span>;</div>

                                        <div className="mt-3"><span className="text-gray-500">// let - block-scoped, can be reassigned</span></div>
                                        <div><span className="text-pink-400">let</span> <span className="text-blue-300">score</span>: <span className="text-green-400">number</span> = <span className="text-orange-400">100</span>;</div>
                                        <div><span className="text-blue-300">score</span> = <span className="text-orange-400">200</span>; <span className="text-gray-500">// OK</span></div>

                                        <div className="mt-3"><span className="text-gray-500">// var - function-scoped (avoid in modern TS)</span></div>
                                        <div><span className="text-pink-400">var</span> <span className="text-blue-300">oldWay</span>: <span className="text-green-400">string</span> = <span className="text-yellow-400">"legacy"</span>;</div>
                                    </div>
                                </div>

                                <div className="bg-white rounded-2xl p-6 shadow-md border border-blue-100">
                                    <h3 className="text-2xl font-bold text-blue-800 mb-4">🎭 Type Assertions (as keyword)</h3>
                                    <div className="bg-gray-900 rounded-xl p-5 text-purple-300 font-mono text-sm overflow-x-auto space-y-3">
                                        <div><span className="text-gray-500">// Type assertion with 'as' keyword</span></div>
                                        <div><span className="text-pink-400">let</span> <span className="text-blue-300">someValue</span>: <span className="text-green-400">unknown</span> = <span className="text-yellow-400">"this is a string"</span>;</div>
                                        <div><span className="text-pink-400">let</span> <span className="text-blue-300">strLength</span>: <span className="text-green-400">number</span> = (<span className="text-blue-300">someValue</span> <span className="text-pink-400">as</span> <span className="text-green-400">string</span>).length;</div>

                                        <div className="mt-3"><span className="text-gray-500">// Practical example with DOM</span></div>
                                        <div><span className="text-pink-400">const</span> <span className="text-blue-300">input</span> = document.querySelector(<span className="text-yellow-400">"input"</span>) <span className="text-pink-400">as</span> <span className="text-green-400">HTMLInputElement</span>;</div>
                                        <div>console.log(<span className="text-blue-300">input</span>.value);</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Slide 2: Functions */}
                        <div className="bg-gradient-to-br from-green-50 to-white rounded-3xl shadow-2xl p-10 border-4 border-green-200">
                            <div className="flex items-center mb-8">
                                <div className="bg-gradient-to-r from-green-600 to-emerald-800 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mr-5 shadow-lg">2</div>
                                <h2 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Functions in TypeScript</h2>
                            </div>

                            <div className="space-y-8">
                                <div className="bg-white rounded-2xl p-6 shadow-md border border-green-100">
                                    <h3 className="text-2xl font-bold text-green-800 mb-4">⚡ Function Types & Return Types</h3>
                                    <div className="bg-gray-900 rounded-xl p-5 text-purple-300 font-mono text-sm overflow-x-auto space-y-3">
                                        <div><span className="text-gray-500">// Function with typed parameters and return type</span></div>
                                        <div><span className="text-pink-400">function</span> <span className="text-blue-300">add</span>(<span className="text-blue-300">a</span>: <span className="text-green-400">number</span>, <span className="text-blue-300">b</span>: <span className="text-green-400">number</span>): <span className="text-green-400">number</span> {'{'}</div>
                                        <div className="ml-4"><span className="text-pink-400">return</span> <span className="text-blue-300">a</span> + <span className="text-blue-300">b</span>;</div>
                                        <div>{'}'}</div>

                                        <div className="mt-3"><span className="text-gray-500">// Arrow function</span></div>
                                        <div><span className="text-pink-400">const</span> <span className="text-blue-300">multiply</span> = (<span className="text-blue-300">a</span>: <span className="text-green-400">number</span>, <span className="text-blue-300">b</span>: <span className="text-green-400">number</span>): <span className="text-green-400">number</span> ={'> a * b;'}</div>

                                        <div className="mt-3"><span className="text-gray-500">// Function type annotation</span></div>
                                        <div><span className="text-pink-400">let</span> <span className="text-blue-300">calculate</span>: (<span className="text-blue-300">x</span>: <span className="text-green-400">number</span>, <span className="text-blue-300">y</span>: <span className="text-green-400">number</span>) ={'> number;'}</div>
                                        <div><span className="text-blue-300">calculate</span> = (<span className="text-blue-300">x</span>, <span className="text-blue-300">y</span>) ={'> x + y;'}</div>

                                        <div className="mt-3"><span className="text-gray-500">// Void return type</span></div>
                                        <div><span className="text-pink-400">function</span> <span className="text-blue-300">logError</span>(<span className="text-blue-300">error</span>: <span className="text-green-400">string</span>): <span className="text-green-400">void</span> {'{'}</div>
                                        <div className="ml-4">console.error(<span className="text-blue-300">error</span>);</div>
                                        <div>{'}'}</div>

                                        <div className="mt-3"><span className="text-gray-500">// Never return type (function never returns)</span></div>
                                        <div><span className="text-pink-400">function</span> <span className="text-blue-300">throwError</span>(<span className="text-blue-300">message</span>: <span className="text-green-400">string</span>): <span className="text-green-400">never</span> {'{'}</div>
                                        <div className="ml-4"><span className="text-pink-400">throw new</span> Error(<span className="text-blue-300">message</span>);</div>
                                        <div>{'}'}</div>
                                    </div>
                                </div>

                                <div className="bg-white rounded-2xl p-6 shadow-md border border-green-100">
                                    <h3 className="text-2xl font-bold text-green-800 mb-4">❓ Optional Parameters</h3>
                                    <div className="bg-gray-900 rounded-xl p-5 text-purple-300 font-mono text-sm overflow-x-auto space-y-3">
                                        <div><span className="text-gray-500">// Optional parameter with ?</span></div>
                                        <div><span className="text-pink-400">function</span> <span className="text-blue-300">greet</span>(<span className="text-blue-300">name</span>: <span className="text-green-400">string</span>, <span className="text-blue-300">age</span>?: <span className="text-green-400">number</span>): <span className="text-green-400">string</span> {'{'}</div>
                                        <div className="ml-4"><span className="text-pink-400">if</span> (<span className="text-blue-300">age</span>) {'{'}</div>
                                        <div className="ml-8"><span className="text-pink-400">return</span> <span className="text-yellow-400">"`Hello " + name + ", you are " + age + " years old`"</span>;</div>
                                        <div className="ml-4">{'}'}</div>
                                        <div className="ml-4"><span className="text-pink-400">return</span> <span className="text-yellow-400">"`Hello " + name + "`"</span>;</div>
                                        <div>{'}'}</div>

                                        <div className="mt-3">console.log(<span className="text-blue-300">greet</span>(<span className="text-yellow-400">"Alice"</span>)); <span className="text-gray-500">// "Hello Alice"</span></div>
                                        <div>console.log(<span className="text-blue-300">greet</span>(<span className="text-yellow-400">"Bob"</span>, <span className="text-orange-400">30</span>)); <span className="text-gray-500">// "Hello Bob, you are 30 years old"</span></div>

                                        <div className="mt-3"><span className="text-gray-500">// Optional must come after required parameters</span></div>
                                        <div><span className="text-pink-400">function</span> <span className="text-blue-300">buildName</span>(<span className="text-blue-300">firstName</span>: <span className="text-green-400">string</span>, <span className="text-blue-300">lastName</span>?: <span className="text-green-400">string</span>): <span className="text-green-400">string</span> {'{'}</div>
                                        <div className="ml-4"><span className="text-pink-400">return</span> <span className="text-blue-300">lastName</span> ? <span className="text-yellow-400">"`" + firstName + " " + lastName + "`"</span> : <span className="text-blue-300">firstName</span>;</div>
                                        <div>{'}'}</div>
                                    </div>
                                </div>

                                <div className="bg-white rounded-2xl p-6 shadow-md border border-green-100">
                                    <h3 className="text-2xl font-bold text-green-800 mb-4">🎯 Default Parameters</h3>
                                    <div className="bg-gray-900 rounded-xl p-5 text-purple-300 font-mono text-sm overflow-x-auto space-y-3">
                                        <div><span className="text-gray-500">// Parameters with default values</span></div>
                                        <div><span className="text-pink-400">function</span> <span className="text-blue-300">createUser</span>(<span className="text-blue-300">name</span>: <span className="text-green-400">string</span>, <span className="text-blue-300">role</span>: <span className="text-green-400">string</span> = <span className="text-yellow-400">"guest"</span>): <span className="text-green-400">string</span> {'{'}</div>
                                        <div className="ml-4"><span className="text-pink-400">return</span> <span className="text-yellow-400">"`User " + name + " with role " + role + "`"</span>;</div>
                                        <div>{'}'}</div>

                                        <div className="mt-3">console.log(<span className="text-blue-300">createUser</span>(<span className="text-yellow-400">"John"</span>)); <span className="text-gray-500">// "User John with role guest"</span></div>
                                        <div>console.log(<span className="text-blue-300">createUser</span>(<span className="text-yellow-400">"Jane"</span>, <span className="text-yellow-400">"admin"</span>)); <span className="text-gray-500">// "User Jane with role admin"</span></div>

                                        <div className="mt-3"><span className="text-gray-500">// Default parameters with complex types</span></div>
                                        <div><span className="text-pink-400">function</span> <span className="text-blue-300">connect</span>(<span className="text-blue-300">timeout</span>: <span className="text-green-400">number</span> = <span className="text-orange-400">5000</span>, <span className="text-blue-300">retries</span>: <span className="text-green-400">number</span> = <span className="text-orange-400">3</span>): <span className="text-green-400">void</span> {'{'}</div>
                                        <div className="ml-4">console.log(<span className="text-yellow-400">"`Connecting with timeout " + timeout + "ms, retries: " + retries + "`"</span>);</div>
                                        <div>{'}'}</div>
                                    </div>
                                </div>

                                <div className="bg-white rounded-2xl p-6 shadow-md border border-green-100">
                                    <h3 className="text-2xl font-bold text-green-800 mb-4">📝 Rest Parameters</h3>
                                    <div className="bg-gray-900 rounded-xl p-5 text-purple-300 font-mono text-sm overflow-x-auto space-y-3">
                                        <div><span className="text-gray-500">// Rest parameters collect multiple arguments into an array</span></div>
                                        <div><span className="text-pink-400">function</span> <span className="text-blue-300">sum</span>(...<span className="text-blue-300">numbers</span>: <span className="text-green-400">number</span>[]): <span className="text-green-400">number</span> {'{'}</div>
                                        <div className="ml-4"><span className="text-pink-400">return</span> <span className="text-blue-300">numbers</span>.reduce((<span className="text-blue-300">total</span>, <span className="text-blue-300">n</span>) {'=> total + n, 0);'}</div>
                                        <div>{'}'}</div>

                                        <div className="mt-3">console.log(<span className="text-blue-300">sum</span>(<span className="text-orange-400">1</span>, <span className="text-orange-400">2</span>, <span className="text-orange-400">3</span>)); <span className="text-gray-500">// 6</span></div>
                                        <div>console.log(<span className="text-blue-300">sum</span>(<span className="text-orange-400">1</span>, <span className="text-orange-400">2</span>, <span className="text-orange-400">3</span>, <span className="text-orange-400">4</span>, <span className="text-orange-400">5</span>)); <span className="text-gray-500">// 15</span></div>

                                        <div className="mt-3"><span className="text-gray-500">// Rest parameters with other parameters</span></div>
                                        <div><span className="text-pink-400">function</span> <span className="text-blue-300">buildMessage</span>(<span className="text-blue-300">prefix</span>: <span className="text-green-400">string</span>, ...<span className="text-blue-300">words</span>: <span className="text-green-400">string</span>[]): <span className="text-green-400">string</span> {'{'}</div>
                                        <div className="ml-4"><span className="text-pink-400">return</span> <span className="text-blue-300">prefix</span> + <span className="text-yellow-400">" "</span> + <span className="text-blue-300">words</span>.join(<span className="text-yellow-400">" "</span>);</div>
                                        <div>{'}'}</div>

                                        <div className="mt-3">console.log(<span className="text-blue-300">buildMessage</span>(<span className="text-yellow-400">"Hello"</span>, <span className="text-yellow-400">"world"</span>, <span className="text-yellow-400">"from"</span>, <span className="text-yellow-400">"TypeScript"</span>));</div>
                                    </div>
                                </div>

                                <div className="bg-white rounded-2xl p-6 shadow-md border border-green-100">
                                    <h3 className="text-2xl font-bold text-green-800 mb-4">🔄 Function Overloading</h3>
                                    <div className="bg-gray-900 rounded-xl p-5 text-purple-300 font-mono text-sm overflow-x-auto space-y-3">
                                        <div><span className="text-gray-500">// Function overload signatures</span></div>
                                        <div><span className="text-pink-400">function</span> <span className="text-blue-300">combine</span>(<span className="text-blue-300">a</span>: <span className="text-green-400">string</span>, <span className="text-blue-300">b</span>: <span className="text-green-400">string</span>): <span className="text-green-400">string</span>;</div>
                                        <div><span className="text-pink-400">function</span> <span className="text-blue-300">combine</span>(<span className="text-blue-300">a</span>: <span className="text-green-400">number</span>, <span className="text-blue-300">b</span>: <span className="text-green-400">number</span>): <span className="text-green-400">number</span>;</div>
                                        <div><span className="text-pink-400">function</span> <span className="text-blue-300">combine</span>(<span className="text-blue-300">a</span>: <span className="text-green-400">any</span>, <span className="text-blue-300">b</span>: <span className="text-green-400">any</span>): <span className="text-green-400">any</span> {'{'}</div>
                                        <div className="ml-4"><span className="text-pink-400">if</span> (<span className="text-pink-400">typeof</span> <span className="text-blue-300">a</span> === <span className="text-yellow-400">"string"</span> && <span className="text-pink-400">typeof</span> <span className="text-blue-300">b</span> === <span className="text-yellow-400">"string"</span>) {'{'}</div>
                                        <div className="ml-8"><span className="text-pink-400">return</span> <span className="text-blue-300">a</span> + <span className="text-blue-300">b</span>;</div>
                                        <div className="ml-4">{'}'}</div>
                                        <div className="ml-4"><span className="text-pink-400">return</span> <span className="text-blue-300">a</span> + <span className="text-blue-300">b</span>;</div>
                                        <div>{'}'}</div>

                                        <div className="mt-3">console.log(<span className="text-blue-300">combine</span>(<span className="text-yellow-400">"Hello"</span>, <span className="text-yellow-400">"World"</span>)); <span className="text-gray-500">// "HelloWorld"</span></div>
                                        <div>console.log(<span className="text-blue-300">combine</span>(<span className="text-orange-400">10</span>, <span className="text-orange-400">20</span>)); <span className="text-gray-500">// 30</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Slide 3: Arrays & Tuples */}
                        <div className="bg-gradient-to-br from-purple-50 to-white rounded-3xl shadow-2xl p-10 border-4 border-purple-200">
                            <div className="flex items-center mb-8">
                                <div className="bg-gradient-to-r from-purple-600 to-pink-800 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mr-5 shadow-lg">3</div>
                                <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Arrays & Tuples</h2>
                            </div>

                            <div className="space-y-8">
                                <div className="bg-white rounded-2xl p-6 shadow-md border border-purple-100">
                                    <h3 className="text-2xl font-bold text-purple-800 mb-4">📚 Typed Arrays</h3>
                                    <div className="bg-gray-900 rounded-xl p-5 text-purple-300 font-mono text-sm overflow-x-auto space-y-3">
                                        <div><span className="text-gray-500">// Array type syntax - method 1</span></div>
                                        <div><span className="text-pink-400">let</span> <span className="text-blue-300">numbers</span>: <span className="text-green-400">number</span>[] = [<span className="text-orange-400">1</span>, <span className="text-orange-400">2</span>, <span className="text-orange-400">3</span>, <span className="text-orange-400">4</span>, <span className="text-orange-400">5</span>];</div>

                                        <div className="mt-3"><span className="text-gray-500">// Array type syntax - method 2 (generic)</span></div>
                                        <div><span className="text-pink-400">let</span> <span className="text-blue-300">strings</span>: Array{'<'}<span className="text-green-400">string</span>{'>'} = [<span className="text-yellow-400">"apple"</span>, <span className="text-yellow-400">"banana"</span>, <span className="text-yellow-400">"cherry"</span>];</div>

                                        <div className="mt-3"><span className="text-gray-500">// Mixed type arrays with union types</span></div>
                                        <div><span className="text-pink-400">let</span> <span className="text-blue-300">mixed</span>: (<span className="text-green-400">number</span> | <span className="text-green-400">string</span>)[] = [<span className="text-orange-400">1</span>, <span className="text-yellow-400">"two"</span>, <span className="text-orange-400">3</span>, <span className="text-yellow-400">"four"</span>];</div>

                                        <div className="mt-3"><span className="text-gray-500">// Array of objects</span></div>
                                        <div><span className="text-pink-400">interface</span> <span className="text-green-400">User</span> {'{'}</div>
                                        <div className="ml-4"><span className="text-blue-300">id</span>: <span className="text-green-400">number</span>;</div>
                                        <div className="ml-4"><span className="text-blue-300">name</span>: <span className="text-green-400">string</span>;</div>
                                        <div>{'}'}</div>

                                        <div className="mt-2"><span className="text-pink-400">let</span> <span className="text-blue-300">users</span>: <span className="text-green-400">User</span>[] = [</div>
                                        <div className="ml-4">{'{ id: 1, name: "Alice" }'},</div>
                                        <div className="ml-4">{'{ id: 2, name: "Bob" }'}</div>
                                        <div>];</div>

                                        <div className="mt-3"><span className="text-gray-500">// Multidimensional arrays</span></div>
                                        <div><span className="text-pink-400">let</span> <span className="text-blue-300">matrix</span>: <span className="text-green-400">number</span>[][] = [</div>
                                        <div className="ml-4">[<span className="text-orange-400">1</span>, <span className="text-orange-400">2</span>, <span className="text-orange-400">3</span>],</div>
                                        <div className="ml-4">[<span className="text-orange-400">4</span>, <span className="text-orange-400">5</span>, <span className="text-orange-400">6</span>],</div>
                                        <div className="ml-4">[<span className="text-orange-400">7</span>, <span className="text-orange-400">8</span>, <span className="text-orange-400">9</span>]</div>
                                        <div>];</div>
                                    </div>
                                </div>

                                <div className="bg-white rounded-2xl p-6 shadow-md border border-purple-100">
                                    <h3 className="text-2xl font-bold text-purple-800 mb-4">🎯 Tuples</h3>
                                    <div className="bg-gray-900 rounded-xl p-5 text-purple-300 font-mono text-sm overflow-x-auto space-y-3">
                                        <div><span className="text-gray-500">// Tuple - fixed-length array with different types</span></div>
                                        <div><span className="text-pink-400">let</span> <span className="text-blue-300">person</span>: [<span className="text-green-400">string</span>, <span className="text-green-400">number</span>] = [<span className="text-yellow-400">"Alice"</span>, <span className="text-orange-400">30</span>];</div>

                                        <div className="mt-3"><span className="text-gray-500">// Accessing tuple elements</span></div>
                                        <div>console.log(<span className="text-blue-300">person</span>[<span className="text-orange-400">0</span>]); <span className="text-gray-500">// "Alice"</span></div>
                                        <div>console.log(<span className="text-blue-300">person</span>[<span className="text-orange-400">1</span>]); <span className="text-gray-500">// 30</span></div>

                                        <div className="mt-3"><span className="text-gray-500">// Tuple with optional elements</span></div>
                                        <div><span className="text-pink-400">let</span> <span className="text-blue-300">data</span>: [<span className="text-green-400">string</span>, <span className="text-green-400">number</span>?] = [<span className="text-yellow-400">"test"</span>];</div>

                                        <div className="mt-3"><span className="text-gray-500">// Tuple with rest elements</span></div>
                                        <div><span className="text-pink-400">let</span> <span className="text-blue-300">tuple</span>: [<span className="text-green-400">string</span>, ...<span className="text-green-400">number</span>[]] = [<span className="text-yellow-400">"hello"</span>, <span className="text-orange-400">1</span>, <span className="text-orange-400">2</span>, <span className="text-orange-400">3</span>];</div>

                                        <div className="mt-3"><span className="text-gray-500">// Named tuples (TS 4.0+)</span></div>
                                        <div><span className="text-pink-400">type</span> <span className="text-green-400">Point</span> = [<span className="text-blue-300">x</span>: <span className="text-green-400">number</span>, <span className="text-blue-300">y</span>: <span className="text-green-400">number</span>];</div>
                                        <div><span className="text-pink-400">let</span> <span className="text-blue-300">point</span>: <span className="text-green-400">Point</span> = [<span className="text-orange-400">10</span>, <span className="text-orange-400">20</span>];</div>
                                    </div>
                                </div>

                                <div className="bg-white rounded-2xl p-6 shadow-md border border-purple-100">
                                    <h3 className="text-2xl font-bold text-purple-800 mb-4">🔒 Readonly Arrays & Tuples</h3>
                                    <div className="bg-gray-900 rounded-xl p-5 text-purple-300 font-mono text-sm overflow-x-auto space-y-3">
                                        <div><span className="text-gray-500">// Readonly array - cannot be modified</span></div>
                                        <div><span className="text-pink-400">let</span> <span className="text-blue-300">readonlyNumbers</span>: <span className="text-green-400">readonly number</span>[] = [<span className="text-orange-400">1</span>, <span className="text-orange-400">2</span>, <span className="text-orange-400">3</span>];</div>
                                        <div><span className="text-gray-500">// readonlyNumbers.push(4); // Error!</span></div>

                                        <div className="mt-3"><span className="text-gray-500">// ReadonlyArray generic type</span></div>
                                        <div><span className="text-pink-400">let</span> <span className="text-blue-300">readonlyStrings</span>: ReadonlyArray{'<'}<span className="text-green-400">string</span>{'>'} = [<span className="text-yellow-400">"a"</span>, <span className="text-yellow-400">"b"</span>, <span className="text-yellow-400">"c"</span>];</div>

                                        <div className="mt-3"><span className="text-gray-500">// Readonly tuple</span></div>
                                        <div><span className="text-pink-400">let</span> <span className="text-blue-300">readonlyTuple</span>: <span className="text-green-400">readonly</span> [<span className="text-green-400">string</span>, <span className="text-green-400">number</span>] = [<span className="text-yellow-400">"test"</span>, <span className="text-orange-400">42</span>];</div>
                                        <div><span className="text-gray-500">// readonlyTuple[0] = "new"; // Error!</span></div>

                                        <div className="mt-3"><span className="text-gray-500">// Const assertion for readonly</span></div>
                                        <div><span className="text-pink-400">let</span> <span className="text-blue-300">constArray</span> = [<span className="text-orange-400">1</span>, <span className="text-orange-400">2</span>, <span className="text-orange-400">3</span>] <span className="text-pink-400">as const</span>;</div>
                                        <div><span className="text-gray-500">// Type: readonly [1, 2, 3]</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Slide 4: Objects & Interfaces */}
                        <div className="bg-gradient-to-br from-orange-50 to-white rounded-3xl shadow-2xl p-10 border-4 border-orange-200">
                            <div className="flex items-center mb-8">
                                <div className="bg-gradient-to-r from-orange-600 to-red-800 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mr-5 shadow-lg">4</div>
                                <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Objects & Interfaces</h2>
                            </div>

                            <div className="space-y-8">
                                <div className="bg-white rounded-2xl p-6 shadow-md border border-orange-100">
                                    <h3 className="text-2xl font-bold text-orange-800 mb-4">🎨 Typing Objects</h3>
                                    <div className="bg-gray-900 rounded-xl p-5 text-purple-300 font-mono text-sm overflow-x-auto space-y-3">
                                        <div><span className="text-gray-500">// Object type annotation</span></div>
                                        <div><span className="text-pink-400">let</span> <span className="text-blue-300">user</span>: {'{ name: string; age: number }'} = {'{'}</div>
                                        <div className="ml-4"><span className="text-blue-300">name</span>: <span className="text-yellow-400">"John"</span>,</div>
                                        <div className="ml-4"><span className="text-blue-300">age</span>: <span className="text-orange-400">25</span></div>
                                        <div>{'}'};</div>

                                        <div className="mt-3"><span className="text-gray-500">// Nested objects</span></div>
                                        <div><span className="text-pink-400">let</span> <span className="text-blue-300">employee</span>: {'{'}</div>
                                        <div className="ml-4"><span className="text-blue-300">name</span>: <span className="text-green-400">string</span>;</div>
                                        <div className="ml-4"><span className="text-blue-300">address</span>: {'{'}</div>
                                        <div className="ml-8"><span className="text-blue-300">street</span>: <span className="text-green-400">string</span>;</div>
                                        <div className="ml-8"><span className="text-blue-300">city</span>: <span className="text-green-400">string</span>;</div>
                                        <div className="ml-4">{'}'};</div>
                                        <div>{'}'} = {'{'}</div>
                                        <div className="ml-4"><span className="text-blue-300">name</span>: <span className="text-yellow-400">"Alice"</span>,</div>
                                        <div className="ml-4"><span className="text-blue-300">address</span>: {'{'}</div>
                                        <div className="ml-8"><span className="text-blue-300">street</span>: <span className="text-yellow-400">"123 Main St"</span>,</div>
                                        <div className="ml-8"><span className="text-blue-300">city</span>: <span className="text-yellow-400">"NYC"</span></div>
                                        <div className="ml-4">{'}'}</div>
                                        <div>{'}'};</div>
                                    </div>
                                </div>

                                <div className="bg-white rounded-2xl p-6 shadow-md border border-orange-100">
                                    <h3 className="text-2xl font-bold text-orange-800 mb-4">⚖️ Interfaces vs Type Aliases</h3>
                                    <div className="bg-gray-900 rounded-xl p-5 text-purple-300 font-mono text-sm overflow-x-auto space-y-3">
                                        <div><span className="text-gray-500">// Interface declaration</span></div>
                                        <div><span className="text-pink-400">interface</span> <span className="text-green-400">Person</span> {'{'}</div>
                                        <div className="ml-4"><span className="text-blue-300">name</span>: <span className="text-green-400">string</span>;</div>
                                        <div className="ml-4"><span className="text-blue-300">age</span>: <span className="text-green-400">number</span>;</div>
                                        <div>{'}'}</div>

                                        <div className="mt-3"><span className="text-gray-500">// Type alias</span></div>
                                        <div><span className="text-pink-400">type</span> <span className="text-green-400">PersonType</span> = {'{'}</div>
                                        <div className="ml-4"><span className="text-blue-300">name</span>: <span className="text-green-400">string</span>;</div>
                                        <div className="ml-4"><span className="text-blue-300">age</span>: <span className="text-green-400">number</span>;</div>
                                        <div>{'}'};</div>

                                        <div className="mt-3"><span className="text-gray-500">// Key differences:</span></div>
                                        <div><span className="text-gray-500">// 1. Interfaces can be extended/merged</span></div>
                                        <div><span className="text-pink-400">interface</span> <span className="text-green-400">Person</span> {'{'}</div>
                                        <div className="ml-4"><span className="text-blue-300">email</span>: <span className="text-green-400">string</span>; <span className="text-gray-500">// Merges with above</span></div>
                                        <div>{'}'}</div>

                                        <div className="mt-3"><span className="text-gray-500">// 2. Type aliases can use unions/intersections</span></div>
                                        <div><span className="text-pink-400">type</span> <span className="text-green-400">ID</span> = <span className="text-green-400">string</span> | <span className="text-green-400">number</span>;</div>
                                        <div><span className="text-pink-400">type</span> <span className="text-green-400">Status</span> = <span className="text-yellow-400">"active"</span> | <span className="text-yellow-400">"inactive"</span>;</div>
                                    </div>
                                </div>

                                <div className="bg-white rounded-2xl p-6 shadow-md border border-orange-100">
                                    <h3 className="text-2xl font-bold text-orange-800 mb-4">❓ Optional & Readonly Properties</h3>
                                    <div className="bg-gray-900 rounded-xl p-5 text-purple-300 font-mono text-sm overflow-x-auto space-y-3">
                                        <div><span className="text-gray-500">// Optional properties with ?</span></div>
                                        <div><span className="text-pink-400">interface</span> <span className="text-green-400">Product</span> {'{'}</div>
                                        <div className="ml-4"><span className="text-blue-300">id</span>: <span className="text-green-400">number</span>;</div>
                                        <div className="ml-4"><span className="text-blue-300">name</span>: <span className="text-green-400">string</span>;</div>
                                        <div className="ml-4"><span className="text-blue-300">description</span>?: <span className="text-green-400">string</span>; <span className="text-gray-500">// Optional</span></div>
                                        <div>{'}'}</div>

                                        <div className="mt-3"><span className="text-pink-400">let</span> <span className="text-blue-300">product1</span>: <span className="text-green-400">Product</span> = {'{ id: 1, name: "Laptop" }'}; <span className="text-gray-500">// OK</span></div>
                                        <div><span className="text-pink-400">let</span> <span className="text-blue-300">product2</span>: <span className="text-green-400">Product</span> = {'{'}</div>
                                        <div className="ml-4"><span className="text-blue-300">id</span>: <span className="text-orange-400">2</span>,</div>
                                        <div className="ml-4"><span className="text-blue-300">name</span>: <span className="text-yellow-400">"Phone"</span>,</div>
                                        <div className="ml-4"><span className="text-blue-300">description</span>: <span className="text-yellow-400">"Smartphone"</span></div>
                                        <div>{'}'};</div>

                                        <div className="mt-3"><span className="text-gray-500">// Readonly properties</span></div>
                                        <div><span className="text-pink-400">interface</span> <span className="text-green-400">Config</span> {'{'}</div>
                                        <div className="ml-4"><span className="text-pink-400">readonly</span> <span className="text-blue-300">apiKey</span>: <span className="text-green-400">string</span>;</div>
                                        <div className="ml-4"><span className="text-pink-400">readonly</span> <span className="text-blue-300">endpoint</span>: <span className="text-green-400">string</span>;</div>
                                        <div>{'}'}</div>

                                        <div className="mt-2"><span className="text-pink-400">let</span> <span className="text-blue-300">config</span>: <span className="text-green-400">Config</span> = {'{'}</div>
                                        <div className="ml-4"><span className="text-blue-300">apiKey</span>: <span className="text-yellow-400">"abc123"</span>,</div>
                                        <div className="ml-4"><span className="text-blue-300">endpoint</span>: <span className="text-yellow-400">"https://api.example.com"</span></div>
                                        <div>{'}'};</div>
                                        <div><span className="text-gray-500">// config.apiKey = "new"; // Error!</span></div>
                                    </div>
                                </div>

                                <div className="bg-white rounded-2xl p-6 shadow-md border border-orange-100">
                                    <h3 className="text-2xl font-bold text-orange-800 mb-4">🔑 Index Signatures</h3>
                                    <div className="bg-gray-900 rounded-xl p-5 text-purple-300 font-mono text-sm overflow-x-auto space-y-3">
                                        <div><span className="text-gray-500">// String index signature</span></div>
                                        <div><span className="text-pink-400">interface</span> <span className="text-green-400">StringDictionary</span> {'{'}</div>
                                        <div className="ml-4">[<span className="text-blue-300">key</span>: <span className="text-green-400">string</span>]: <span className="text-green-400">string</span>;</div>
                                        <div>{'}'}</div>

                                        <div className="mt-2"><span className="text-pink-400">let</span> <span className="text-blue-300">dict</span>: <span className="text-green-400">StringDictionary</span> = {'{'}</div>
                                        <div className="ml-4"><span className="text-blue-300">name</span>: <span className="text-yellow-400">"John"</span>,</div>
                                        <div className="ml-4"><span className="text-blue-300">role</span>: <span className="text-yellow-400">"admin"</span></div>
                                        <div>{'}'};</div>

                                        <div className="mt-3"><span className="text-gray-500">// Number index signature</span></div>
                                        <div><span className="text-pink-400">interface</span> <span className="text-green-400">NumberArray</span> {'{'}</div>
                                        <div className="ml-4">[<span className="text-blue-300">index</span>: <span className="text-green-400">number</span>]: <span className="text-green-400">string</span>;</div>
                                        <div>{'}'}</div>

                                        <div className="mt-2"><span className="text-pink-400">let</span> <span className="text-blue-300">arr</span>: <span className="text-green-400">NumberArray</span> = [<span className="text-yellow-400">"a"</span>, <span className="text-yellow-400">"b"</span>, <span className="text-yellow-400">"c"</span>];</div>

                                        <div className="mt-3"><span className="text-gray-500">// Mixed with regular properties</span></div>
                                        <div><span className="text-pink-400">interface</span> <span className="text-green-400">FlexibleObject</span> {'{'}</div>
                                        <div className="ml-4"><span className="text-blue-300">id</span>: <span className="text-green-400">number</span>;</div>
                                        <div className="ml-4"><span className="text-blue-300">name</span>: <span className="text-green-400">string</span>;</div>
                                        <div className="ml-4">[<span className="text-blue-300">key</span>: <span className="text-green-400">string</span>]: <span className="text-green-400">any</span>;</div>
                                        <div>{'}'}</div>
                                    </div>
                                </div>

                                <div className="bg-white rounded-2xl p-6 shadow-md border border-orange-100">
                                    <h3 className="text-2xl font-bold text-orange-800 mb-4">🔗 Extending Interfaces</h3>
                                    <div className="bg-gray-900 rounded-xl p-5 text-purple-300 font-mono text-sm overflow-x-auto space-y-3">
                                        <div><span className="text-gray-500">// Base interface</span></div>
                                        <div><span className="text-pink-400">interface</span> <span className="text-green-400">Animal</span> {'{'}</div>
                                        <div className="ml-4"><span className="text-blue-300">name</span>: <span className="text-green-400">string</span>;</div>
                                        <div className="ml-4"><span className="text-blue-300">age</span>: <span className="text-green-400">number</span>;</div>
                                        <div>{'}'}</div>

                                        <div className="mt-3"><span className="text-gray-500">// Extending interface</span></div>
                                        <div><span className="text-pink-400">interface</span> <span className="text-green-400">Dog</span> <span className="text-pink-400">extends</span> <span className="text-green-400">Animal</span> {'{'}</div>
                                        <div className="ml-4"><span className="text-blue-300">breed</span>: <span className="text-green-400">string</span>;</div>
                                        <div className="ml-4"><span className="text-blue-300">bark</span>(): <span className="text-green-400">void</span>;</div>
                                        <div>{'}'}</div>

                                        <div className="mt-3"><span className="text-pink-400">let</span> <span className="text-blue-300">myDog</span>: <span className="text-green-400">Dog</span> = {'{'}</div>
                                        <div className="ml-4"><span className="text-blue-300">name</span>: <span className="text-yellow-400">"Buddy"</span>,</div>
                                        <div className="ml-4"><span className="text-blue-300">age</span>: <span className="text-orange-400">3</span>,</div>
                                        <div className="ml-4"><span className="text-blue-300">breed</span>: <span className="text-yellow-400">"Golden Retriever"</span>,</div>
                                        <div className="ml-4"><span className="text-blue-300">bark</span>: () {'=> console.log("Woof!")}'}</div>
                                        <div>{'}'};</div>

                                        <div className="mt-3"><span className="text-gray-500">// Extending multiple interfaces</span></div>
                                        <div><span className="text-pink-400">interface</span> <span className="text-green-400">Flyable</span> {'{'}</div>
                                        <div className="ml-4"><span className="text-blue-300">fly</span>(): <span className="text-green-400">void</span>;</div>
                                        <div>{'}'}</div>

                                        <div className="mt-2"><span className="text-pink-400">interface</span> <span className="text-green-400">Bird</span> <span className="text-pink-400">extends</span> <span className="text-green-400">Animal</span>, <span className="text-green-400">Flyable</span> {'{'}</div>
                                        <div className="ml-4"><span className="text-blue-300">species</span>: <span className="text-green-400">string</span>;</div>
                                        <div>{'}'}</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Slide 5: Generics */}
                        <div className="bg-gradient-to-br from-indigo-50 to-white rounded-3xl shadow-2xl p-10 border-4 border-indigo-200">
                            <div className="flex items-center mb-8">
                                <div className="bg-gradient-to-r from-indigo-600 to-blue-800 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mr-5 shadow-lg">5</div>
                                <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">Generics</h2>
                            </div>

                            <div className="space-y-8">
                                <div className="bg-white rounded-2xl p-6 shadow-md border border-indigo-100">
                                    <h3 className="text-2xl font-bold text-indigo-800 mb-4">🔧 Generic Functions</h3>
                                    <div className="bg-gray-900 rounded-xl p-5 text-purple-300 font-mono text-sm overflow-x-auto space-y-3">
                                        <div><span className="text-gray-500">// Generic function with type parameter</span></div>
                                        <div><span className="text-pink-400">function</span> <span className="text-blue-300">identity</span>{'<'}<span className="text-green-400">T</span>{'>'}(<span className="text-blue-300">arg</span>: <span className="text-green-400">T</span>): <span className="text-green-400">T</span> {'{'}</div>
                                        <div className="ml-4"><span className="text-pink-400">return</span> <span className="text-blue-300">arg</span>;</div>
                                        <div>{'}'}</div>

                                        <div className="mt-3"><span className="text-gray-500">// Usage with explicit type</span></div>
                                        <div><span className="text-pink-400">let</span> <span className="text-blue-300">result1</span> = <span className="text-blue-300">identity</span>{'<'}<span className="text-green-400">string</span>{'>'}(<span className="text-yellow-400">"hello"</span>);</div>
                                        <div><span className="text-pink-400">let</span> <span className="text-blue-300">result2</span> = <span className="text-blue-300">identity</span>{'<'}<span className="text-green-400">number</span>{'>'}(<span className="text-orange-400">42</span>);</div>

                                        <div className="mt-3"><span className="text-gray-500">// Type inference (preferred)</span></div>
                                        <div><span className="text-pink-400">let</span> <span className="text-blue-300">result3</span> = <span className="text-blue-300">identity</span>(<span className="text-yellow-400">"world"</span>); <span className="text-gray-500">// T inferred as string</span></div>
                                        <div><span className="text-pink-400">let</span> <span className="text-blue-300">result4</span> = <span className="text-blue-300">identity</span>(<span className="text-orange-400">100</span>); <span className="text-gray-500">// T inferred as number</span></div>
                                    </div>
                                </div>

                                <div className="bg-white rounded-2xl p-6 shadow-md border border-indigo-100">
                                    <h3 className="text-2xl font-bold text-indigo-800 mb-4">📦 Generic Interfaces</h3>
                                    <div className="bg-gray-900 rounded-xl p-5 text-purple-300 font-mono text-sm overflow-x-auto space-y-3">
                                        <div><span className="text-gray-500">// Generic interface</span></div>
                                        <div><span className="text-pink-400">interface</span> <span className="text-green-400">Container</span>{'<'}<span className="text-green-400">T</span>{'>'} {'{'}</div>
                                        <div className="ml-4"><span className="text-blue-300">value</span>: <span className="text-green-400">T</span>;</div>
                                        <div className="ml-4"><span className="text-blue-300">getValue</span>(): <span className="text-green-400">T</span>;</div>
                                        <div className="ml-4"><span className="text-blue-300">setValue</span>(<span className="text-blue-300">val</span>: <span className="text-green-400">T</span>): <span className="text-green-400">void</span>;</div>
                                        <div>{'}'}</div>

                                        <div className="mt-3"><span className="text-gray-500">// Implementation</span></div>
                                        <div><span className="text-pink-400">class</span> <span className="text-green-400">Box</span>{'<'}<span className="text-green-400">T</span>{'>'} <span className="text-pink-400">implements</span> <span className="text-green-400">Container</span>{'<'}<span className="text-green-400">T</span>{'>'} {'{'}</div>
                                        <div className="ml-4"><span className="text-pink-400">constructor</span>(<span className="text-pink-400">private</span> <span className="text-blue-300">_value</span>: <span className="text-green-400">T</span>) {'{'}</div>
                                        <div className="ml-8"><span className="text-blue-300">this</span>.<span className="text-blue-300">value</span> = <span className="text-blue-300">_value</span>;</div>
                                        <div className="ml-4">{'}'}</div>
                                        <div className="ml-4"><span className="text-blue-300">value</span>: <span className="text-green-400">T</span>;</div>
                                        <div className="ml-4"><span className="text-blue-300">getValue</span>(): <span className="text-green-400">T</span> {'{'}</div>
                                        <div className="ml-8"><span className="text-pink-400">return</span> <span className="text-blue-300">this</span>.<span className="text-blue-300">value</span>;</div>
                                        <div className="ml-4">{'}'}</div>
                                        <div className="ml-4"><span className="text-blue-300">setValue</span>(<span className="text-blue-300">val</span>: <span className="text-green-400">T</span>): <span className="text-green-400">void</span> {'{'}</div>
                                        <div className="ml-8"><span className="text-blue-300">this</span>.<span className="text-blue-300">value</span> = <span className="text-blue-300">val</span>;</div>
                                        <div className="ml-4">{'}'}</div>
                                        <div>{'}'}</div>
                                    </div>
                                </div>

                                <div className="bg-white rounded-2xl p-6 shadow-md border border-indigo-100">
                                    <h3 className="text-2xl font-bold text-indigo-800 mb-4">🎯 Generic Constraints</h3>
                                    <div className="bg-gray-900 rounded-xl p-5 text-purple-300 font-mono text-sm overflow-x-auto space-y-3">
                                        <div><span className="text-gray-500">// Constraint with extends</span></div>
                                        <div><span className="text-pink-400">interface</span> <span className="text-green-400">Lengthwise</span> {'{'}</div>
                                        <div className="ml-4"><span className="text-blue-300">length</span>: <span className="text-green-400">number</span>;</div>
                                        <div>{'}'}</div>

                                        <div className="mt-3"><span className="text-pink-400">function</span> <span className="text-blue-300">loggingIdentity</span>{'<'}<span className="text-green-400">T</span> <span className="text-pink-400">extends</span> <span className="text-green-400">Lengthwise</span>{'>'}(<span className="text-blue-300">arg</span>: <span className="text-green-400">T</span>): <span className="text-green-400">T</span> {'{'}</div>
                                        <div className="ml-4">console.log(<span className="text-blue-300">arg</span>.length); <span className="text-gray-500">// Now we know it has a .length property</span></div>
                                        <div className="ml-4"><span className="text-pink-400">return</span> <span className="text-blue-300">arg</span>;</div>
                                        <div>{'}'}</div>

                                        <div className="mt-3"><span className="text-gray-500">// Usage</span></div>
                                        <div><span className="text-blue-300">loggingIdentity</span>(<span className="text-yellow-400">"hello"</span>); <span className="text-gray-500">// OK, string has length</span></div>
                                        <div><span className="text-blue-300">loggingIdentity</span>([<span className="text-orange-400">1</span>, <span className="text-orange-400">2</span>, <span className="text-orange-400">3</span>]); <span className="text-gray-500">// OK, array has length</span></div>
                                        <div><span className="text-gray-500">// loggingIdentity(123); // Error! number doesn't have length</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Slide 6: Advanced Types */}
                        <div className="bg-gradient-to-br from-teal-50 to-white rounded-3xl shadow-2xl p-10 border-4 border-teal-200">
                            <div className="flex items-center mb-8">
                                <div className="bg-gradient-to-r from-teal-600 to-cyan-800 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mr-5 shadow-lg">6</div>
                                <h2 className="text-4xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">Advanced Types</h2>
                            </div>

                            <div className="space-y-8">
                                <div className="bg-white rounded-2xl p-6 shadow-md border border-teal-100">
                                    <h3 className="text-2xl font-bold text-teal-800 mb-4">🔀 Union & Intersection Types</h3>
                                    <div className="bg-gray-900 rounded-xl p-5 text-purple-300 font-mono text-sm overflow-x-auto space-y-3">
                                        <div><span className="text-gray-500">// Union types with |</span></div>
                                        <div><span className="text-pink-400">type</span> <span className="text-green-400">StringOrNumber</span> = <span className="text-green-400">string</span> | <span className="text-green-400">number</span>;</div>
                                        <div><span className="text-pink-400">function</span> <span className="text-blue-300">format</span>(<span className="text-blue-300">value</span>: <span className="text-green-400">StringOrNumber</span>): <span className="text-green-400">string</span> {'{'}</div>
                                        <div className="ml-4"><span className="text-pink-400">if</span> (<span className="text-pink-400">typeof</span> <span className="text-blue-300">value</span> === <span className="text-yellow-400">"string"</span>) {'{'}</div>
                                        <div className="ml-8"><span className="text-pink-400">return</span> <span className="text-blue-300">value</span>.toUpperCase();</div>
                                        <div className="ml-4">{'}'}</div>
                                        <div className="ml-4"><span className="text-pink-400">return</span> <span className="text-blue-300">value</span>.toString();</div>
                                        <div>{'}'}</div>

                                        <div className="mt-3"><span className="text-gray-500">// Intersection types with &</span></div>
                                        <div><span className="text-pink-400">type</span> <span className="text-green-400">Person</span> = {'{'}</div>
                                        <div className="ml-4"><span className="text-blue-300">name</span>: <span className="text-green-400">string</span>;</div>
                                        <div>{'}'};</div>
                                        <div><span className="text-pink-400">type</span> <span className="text-green-400">Employee</span> = {'{'}</div>
                                        <div className="ml-4"><span className="text-blue-300">id</span>: <span className="text-green-400">number</span>;</div>
                                        <div>{'}'};</div>
                                        <div><span className="text-pink-400">type</span> <span className="text-green-400">EmployeePerson</span> = <span className="text-green-400">Person</span> & <span className="text-green-400">Employee</span>;</div>
                                    </div>
                                </div>

                                <div className="bg-white rounded-2xl p-6 shadow-md border border-teal-100">
                                    <h3 className="text-2xl font-bold text-teal-800 mb-4">🔍 Type Guards & Narrowing</h3>
                                    <div className="bg-gray-900 rounded-xl p-5 text-purple-300 font-mono text-sm overflow-x-auto space-y-3">
                                        <div><span className="text-gray-500">// Type guard function</span></div>
                                        <div><span className="text-pink-400">function</span> <span className="text-blue-300">isString</span>(<span className="text-blue-300">value</span>: <span className="text-green-400">unknown</span>): <span className="text-blue-300">value</span> <span className="text-pink-400">is</span> <span className="text-green-400">string</span> {'{'}</div>
                                        <div className="ml-4"><span className="text-pink-400">return</span> <span className="text-pink-400">typeof</span> <span className="text-blue-300">value</span> === <span className="text-yellow-400">"string"</span>;</div>
                                        <div>{'}'}</div>

                                        <div className="mt-3"><span className="text-gray-500">// Usage with type narrowing</span></div>
                                        <div><span className="text-pink-400">function</span> <span className="text-blue-300">processValue</span>(<span className="text-blue-300">value</span>: <span className="text-green-400">unknown</span>) {'{'}</div>
                                        <div className="ml-4"><span className="text-pink-400">if</span> (<span className="text-blue-300">isString</span>(<span className="text-blue-300">value</span>)) {'{'}</div>
                                        <div className="ml-8"><span className="text-gray-500">// TypeScript knows value is string here</span></div>
                                        <div className="ml-8">console.log(<span className="text-blue-300">value</span>.toUpperCase());</div>
                                        <div className="ml-4">{'}'}</div>
                                        <div>{'}'}</div>

                                        <div className="mt-3"><span className="text-gray-500">// Discriminated unions</span></div>
                                        <div><span className="text-pink-400">type</span> <span className="text-green-400">Shape</span> = {'{'}</div>
                                        <div className="ml-4"><span className="text-blue-300">kind</span>: <span className="text-yellow-400">"circle"</span>;</div>
                                        <div className="ml-4"><span className="text-blue-300">radius</span>: <span className="text-green-400">number</span>;</div>
                                        <div>{'}'} | {'{'}</div>
                                        <div className="ml-4"><span className="text-blue-300">kind</span>: <span className="text-yellow-400">"rectangle"</span>;</div>
                                        <div className="ml-4"><span className="text-blue-300">width</span>: <span className="text-green-400">number</span>;</div>
                                        <div className="ml-4"><span className="text-blue-300">height</span>: <span className="text-green-400">number</span>;</div>
                                        <div>{'}'};</div>
                                    </div>
                                </div>

                                <div className="bg-white rounded-2xl p-6 shadow-md border border-teal-100">
                                    <h3 className="text-2xl font-bold text-teal-800 mb-4">🎭 Conditional Types</h3>
                                    <div className="bg-gray-900 rounded-xl p-5 text-purple-300 font-mono text-sm overflow-x-auto space-y-3">
                                        <div><span className="text-gray-500">// Basic conditional type</span></div>
                                        <div><span className="text-pink-400">type</span> <span className="text-green-400">IsArray</span>{'<'}<span className="text-green-400">T</span>{'>'} = <span className="text-blue-300">T</span> <span className="text-pink-400">extends</span> <span className="text-green-400">any</span>[] ? <span className="text-green-400">true</span> : <span className="text-green-400">false</span>;</div>

                                        <div className="mt-3"><span className="text-gray-500">// Extract array element type</span></div>
                                        <div><span className="text-pink-400">type</span> <span className="text-green-400">ArrayElement</span>{'<'}<span className="text-green-400">T</span>{'>'} = <span className="text-blue-300">T</span> <span className="text-pink-400">extends</span> (<span className="text-green-400">infer</span> <span className="text-blue-300">U</span>)[] ? <span className="text-blue-300">U</span> : <span className="text-green-400">never</span>;</div>

                                        <div className="mt-3"><span className="text-gray-500">// Usage</span></div>
                                        <div><span className="text-pink-400">type</span> <span className="text-green-400">StringArray</span> = <span className="text-green-400">string</span>[];</div>
                                        <div><span className="text-pink-400">type</span> <span className="text-green-400">StringElement</span> = <span className="text-blue-300">ArrayElement</span>{'<'}<span className="text-green-400">StringArray</span>{'>'}; <span className="text-gray-500">// string</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Slide 7: Best Practices */}
                        <div className="bg-gradient-to-br from-rose-50 to-white rounded-3xl shadow-2xl p-10 border-4 border-rose-200">
                            <div className="flex items-center mb-8">
                                <div className="bg-gradient-to-r from-rose-600 to-pink-800 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mr-5 shadow-lg">7</div>
                                <h2 className="text-4xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">Best Practices</h2>
                            </div>

                            <div className="space-y-8">
                                <div className="bg-white rounded-2xl p-6 shadow-md border border-rose-100">
                                    <h3 className="text-2xl font-bold text-rose-800 mb-4">✅ TypeScript Best Practices</h3>
                                    <div className="space-y-4">
                                        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-5 border-l-4 border-green-500">
                                            <p className="font-bold text-green-900 mb-3 text-lg">1. Enable Strict Mode</p>
                                            <div className="bg-gray-900 rounded-lg p-3 text-green-400 font-mono text-sm">
                                                <div>{'{'}</div>
                                                <div className="ml-4"><span className="text-blue-400">"strict"</span>: <span className="text-orange-400">true</span>,</div>
                                                <div className="ml-4"><span className="text-blue-400">"noImplicitAny"</span>: <span className="text-orange-400">true</span>,</div>
                                                <div className="ml-4"><span className="text-blue-400">"strictNullChecks"</span>: <span className="text-orange-400">true</span></div>
                                                <div>{'}'}</div>
                                            </div>
                                        </div>

                                        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-5 border-l-4 border-blue-500">
                                            <p className="font-bold text-blue-900 mb-3 text-lg">2. Use Interfaces for Object Shapes</p>
                                            <ul className="space-y-2 text-gray-700">
                                                <li className="flex items-start"><span className="text-blue-600 mr-2">•</span> Prefer interfaces over type aliases for object shapes</li>
                                                <li className="flex items-start"><span className="text-blue-600 mr-2">•</span> Use type aliases for unions, primitives, and computed types</li>
                                                <li className="flex items-start"><span className="text-blue-600 mr-2">•</span> Interfaces can be extended and merged</li>
                                            </ul>
                                        </div>

                                        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-5 border-l-4 border-purple-500">
                                            <p className="font-bold text-purple-900 mb-3 text-lg">3. Avoid 'any' Type</p>
                                            <ul className="space-y-2 text-gray-700">
                                                <li className="flex items-start"><span className="text-purple-600 mr-2">•</span> Use 'unknown' instead of 'any' when type is truly unknown</li>
                                                <li className="flex items-start"><span className="text-purple-600 mr-2">•</span> Use type assertions sparingly and with proper type guards</li>
                                                <li className="flex items-start"><span className="text-purple-600 mr-2">•</span> Leverage type inference when possible</li>
                                            </ul>
                                        </div>

                                        <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-5 border-l-4 border-orange-500">
                                            <p className="font-bold text-orange-900 mb-3 text-lg">4. Use Generics Wisely</p>
                                            <ul className="space-y-2 text-gray-700">
                                                <li className="flex items-start"><span className="text-orange-600 mr-2">•</span> Create reusable components with generics</li>
                                                <li className="flex items-start"><span className="text-orange-600 mr-2">•</span> Use constraints to limit generic types</li>
                                                <li className="flex items-start"><span className="text-orange-600 mr-2">•</span> Prefer type inference over explicit generic parameters</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white rounded-2xl p-6 shadow-md border border-rose-100">
                                    <h3 className="text-2xl font-bold text-rose-800 mb-4">🚀 Performance Tips</h3>
                                    <div className="space-y-4">
                                        <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-5 border-l-4 border-teal-500">
                                            <p className="font-bold text-teal-900 mb-3 text-lg">Compilation Optimization</p>
                                            <ul className="space-y-2 text-gray-700">
                                                <li className="flex items-start"><span className="text-teal-600 mr-2">•</span> Use 'incremental' compilation for faster builds</li>
                                                <li className="flex items-start"><span className="text-teal-600 mr-2">•</span> Enable 'skipLibCheck' to skip type checking of declaration files</li>
                                                <li className="flex items-start"><span className="text-teal-600 mr-2">•</span> Use project references for large codebases</li>
                                            </ul>
                                        </div>

                                        <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl p-5 border-l-4 border-indigo-500">
                                            <p className="font-bold text-indigo-900 mb-3 text-lg">Runtime Performance</p>
                                            <ul className="space-y-2 text-gray-700">
                                                <li className="flex items-start"><span className="text-indigo-600 mr-2">•</span> TypeScript types are erased at runtime - no performance impact</li>
                                                <li className="flex items-start"><span className="text-indigo-600 mr-2">•</span> Use 'const assertions' for immutable data</li>
                                                <li className="flex items-start"><span className="text-indigo-600 mr-2">•</span> Leverage 'readonly' for preventing mutations</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        // </div>
    );
}