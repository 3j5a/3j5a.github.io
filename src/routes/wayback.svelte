<script>
    import ExternalReference from "$lib/ExternalReference.svelte";
    import Tombstone from "$lib/Tombstone.svelte";
    import JavaCodeBlock from "$lib/JavaCodeBlock.svelte";
    import ShellCodeBlock from "$lib/ShellCodeBlock.svelte";
    import JavaScriptCodeBlock from "$lib/JavaScriptCodeBlock.svelte";
    import JuliaCodeBlock from "$lib/JuliaCodeBlock.svelte";
    import SideNote from "$lib/SideNote.svelte";
    import CodeFrame from "$lib/CodeFrame.svelte";

    export let codeBlocks;
</script>

<main>
    <article class="wayback">
        <header>
            <h4>way back</h4>
        </header>
        <section>
            <p>
                I've started learning and using <b>Java</b> just when the Wild Type West ended and
                <ExternalReference href="https://en.wikipedia.org/wiki/Generics_in_Java" text="generics"/> were added to the language.
            </p>
            <p>
                It was relatively around the same time that I started to take <b>JavaScript</b> seriously, especially with all
                <ExternalReference href="https://www.oreilly.com/library/view/javascript-the-good/9780596517748" text="the good parts"/>.
            </p>
            <p>
                <b>Julia</b> caught my eye around the time
                <ExternalReference href="https://en.wikipedia.org/wiki/Project_Jupyter" text="Jupyter"/>
                took off and I finally realized what "Ju" was all about... and besides why not learn another language that starts with "J" &#129300;?
            </p>
        </section>
        <SideNote>
            <p>
                The book that I started learning Java with was
                <ExternalReference href="https://www.amazon.com/Thinking-Java-4th-Bruce-Eckel/dp/0131872486" text="Thinking in Java"/>
                (yeah, 1k+ pages book)
            </p>
            <p>
                <ExternalReference href="https://www.manning.com/books/ajax-in-action" text="Ajax in Action"/> got me into JavaScript. 😐
            </p>
            <p>
                Since Julia wasn't the first language for me to learn, it was mostly about digging through the <ExternalReference href="https://docs.julialang.org/en/v1/manual/getting-started/" text="docs"/>,
                various articles and YouTube videos.
                But I found <ExternalReference href="https://learning.oreilly.com/library/view/hands-on-design-patterns/9781838648817" text="Hands-On Design Patterns and Best Practices with Julia"/>
                to be a really useful one.
            </p>
        </SideNote>
        <section>
            <p>
                Back then <b>Java</b> didn't have a repl, so <ExternalReference href="https://en.wikipedia.org/wiki/%22Hello,_World!%22_program#History" text="Hello, World!"/>
                (still in use right? &#129488;) was full of WTF...
                Remains so to be honest, but thanks to
                <ExternalReference href="https://openjdk.java.net/jeps/330" text="JEP 330"/> you can now run a single file
                program without having to
                <ExternalReference href="https://en.wikipedia.org/wiki/Javac" text="java-see"/> it first.
                JShell makes "Hello, World!" a lot easier and even more so with the help of
                <ExternalReference href="https://docs.oracle.com/en/java/javase/17/jshell/scripts.html" text="PRINTING"/>
                script.
            </p>
            <div class="java-hello-world-code">
                <CodeFrame>
                    <ShellCodeBlock code="java {codeBlocks.java[1].fileName}"/>
                    <div slot="output">
                        <JavaCodeBlock code="{codeBlocks.java[1].code}" header="{codeBlocks.java[1].fileName}" icon="fa-regular fa-file-lines"/>
                    </div>
                </CodeFrame>
                <CodeFrame>
                    <ShellCodeBlock code="{codeBlocks.java[0].code}"/>
                    <div slot="output">
                        <JavaCodeBlock language="java" code="{codeBlocks.java[2].code}"/>
                    </div>
                </CodeFrame>
            </div>
        </section>
        <section class="javascript-replace-all">
             <p>
                I don't recall any particular code to run as a start for <b>JavaScript</b>.
                But I do recall how cool I thought passing a function to another function was.
                I've found out about <strong>that</strong> in a bit weird way, using
                <ExternalReference href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll"
                                    text="replaceAll"/>.
                And now you get to use <ExternalReference href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions" text="arrow function expressions"/>.
             </p>
                <CodeFrame style="margin: 0.5em auto 0;">
                    <JavaScriptCodeBlock code="{codeBlocks.javascript[0].code}"/>
                </CodeFrame>
        </section>
        <section class="julia">
            <p>
                REPL was a natural starting point for <b>Julia</b>. To be honest it's the REPL, syntactic sugar
                and Unicode names support that got me into the language. I get that it was designed to be (and it is)
                <ExternalReference href="https://julialang.org/benchmarks/" text="fast"/> and Oh, the <ExternalReference
                 href="https://docs.julialang.org/en/v1/manual/methods/" text="multiple dispatch"/>, but look how cool
                it is:
            </p>
            <div class="julia-repl">
                <CodeFrame>
                    <ShellCodeBlock code="julia"/>
                    <div slot="output">
                        <JuliaCodeBlock code={codeBlocks.julia[1].code}/>
                    </div>
                </CodeFrame>
                <CodeFrame>
                        <JuliaCodeBlock code={codeBlocks.julia[0].code}/>
                </CodeFrame>
            </div>
            <p>
                And <b>interactivity</b> (that's where Julia also really shines for me) goes to a totally new level with
                <ExternalReference href="https://github.com/fonsp/Pluto.jl" text="Pluto"/>
            </p>
        </section>
    </article>
    <Tombstone/>
</main>

<style>

    .java-hello-world-code, .julia-repl {
        display: flex;
        justify-content: space-evenly;
    }

</style>