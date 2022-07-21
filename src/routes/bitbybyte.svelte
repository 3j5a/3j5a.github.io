<script>
    import ExternalReference from "$lib/ExternalReference.svelte";
    import ShellCodeBlock from "$lib/ShellCodeBlock.svelte";
    import JavaCodeBlock from "$lib/JavaCodeBlock.svelte";
    import JavaScriptCodeBlock from "$lib/JavaScriptCodeBlock.svelte";
    import JuliaReplCodeBlock from "$lib/JuliaReplCodeBlock.svelte";
    import JuliaCodeBlock from "$lib/JuliaCodeBlock.svelte";
    import LLVMCodeBlock from "$lib/LLVMCodeBlock.svelte";
    import AssemblerCodeBlock from "$lib/AssemblerCodeBlock.svelte";
    import Tombstone from "$lib/Tombstone.svelte";
    import SideNote from "$lib/SideNote.svelte";
    import CodeFrame from "$lib/CodeFrame.svelte";

    export let codeBlocks;
</script>

<main>
    <article class="bitbybyte">
        <header>
            <h4>bit by byte</h4>
        </header>
        <section class="intro">
            <p>
            Source code is for humans. So you should use every bit of syntactic abilities of a programming
            language combined with your writing skills and strive to actually make it so.
            </p>
            <SideNote>
                "Any fool can write code that a computer can understand. <br/>
                Good programmers write code that humans can understand." - <ExternalReference href="https://martinfowler.com/" text="Martin Fowler"/>
            </SideNote>
            <p>
                Machines don't really care, they want machine code.
                But there is an important intermediate representation before a source code gets there (if at all
                in some cases 🤔).
            </p>
        </section>
        <section id="java">
                <p>
                    <b>Java</b> source code journey begins with
                    <ExternalReference href="https://en.wikipedia.org/wiki/Javac" text="javac"/>. It's a <b>front-end</b>ish
                    compiler that turns java source code files into <b>bytecode</b> class files (it can also
                    process <ExternalReference href="https://en.wikipedia.org/wiki/Java_annotation" text="annotations"/>
                    in already compiled class files... which would be a some other time topic for sure). Class files
                    are hardly human readable, but you can disassemble them using
                    <ExternalReference href="https://docs.oracle.com/en/java/javase/18/docs/specs/man/javap.html" text="javap"/> tool:
                </p>
                <div class="java-bitbybyte">
                    <CodeFrame>
                        <ShellCodeBlock code="javac {codeBlocks.java[1].fileName}"/>
                        <div slot="output">
                            <JavaCodeBlock code="{codeBlocks.java[1].code}" header="{codeBlocks.java[1].fileName}" icon="fa-regular fa-file-lines"/>
                        </div>
                    </CodeFrame>
                    <CodeFrame>
                        <ShellCodeBlock code="javap -c {codeBlocks.java[0].fileName}" icon="fa-solid fa-file-code"/>
                        <div slot="output">
                            <JavaCodeBlock code="{codeBlocks.java[2].code}" header="&nbsp;"/>
                        </div>
                    </CodeFrame>
                </div>
                <div>
                    <b>javap</b> -v option would give more details, but you can already see the things <b>javac</b> does for you,
                    like
                    <div style="width: fit-content; margin-left: auto; margin-right: auto;">
                        <JavaCodeBlock code='1: invokespecial #1  // Method java/lang/Object."<init>":()V'/>
                    </div>
                    which refers to the default constructor that compiler inserts for you. You can also get a
                    sense of the <ExternalReference href="https://en.wikipedia.org/wiki/Opcode" text="opcode"/> semantics:
                    <b>y</b> method works with <b>int</b>, and its opcodes reflect it using "i" (type) as a prefix followed by
                    the operation name - <b>i</b>const,
                    <b>i</b>mul
                    (if you're curious - <ExternalReference href="https://en.wikipedia.org/wiki/List_of_Java_bytecode_instructions"
                                                           text="list of Java bytecode instructions"/>).
                    <p>
                    So Java bytecode is actually an instruction set for <b>JVM</b>.
                    And JVM has both an <b>interpreter</b>
                    to run the bytecode in a generic way right away and a
                        <ExternalReference href="https://en.wikipedia.org/wiki/Just-in-time_compilation" text="JIT"/> compiler
                        that can turn it into machine code.
                    Not all bytecode gets to be JIT-compiled as JVM is clever about compilation performance implication,
                        so only most used (<b>hot spot</b>) <b>methods</b> get to be compiled.
                    </p>
                    <div style="display: flex">
                        <div>
                            Any language that can compile to Java bytecode can be run on JVM. And many do.
                            Java is one of them 😐.<br/> Java has a rich set of bytecode manipulation frameworks
                            (<ExternalReference href="https://asm.ow2.io" text="ASM"/>, <ExternalReference href="https://www.javassist.org/" text="Javassist"/>), allowing things like
                            instrumenting existing classes or dynamically generating new ones.
                        </div>
                        <SideNote style="margin-top: -1.25em;">
                            Emphasis on <b>methods</b> here is intentional as methods <br/> actually run your program.<br/>
                            An entry point to a Java program execution <br/> is a method as well, aka <b>psvm</b> (or not 😐):
                            <div style="font-size: 1.25em">
                                <JavaCodeBlock code="public static void main(String[] args) {'{'}...{'}'}"/>
                            </div>
                        </SideNote>
                    </div>
                </div>
            </section>
            <section id="javascript">
                <div>
                <p>
                <b>JavaScript</b> started out as an interpreted language.
                <ExternalReference href="https://en.wikipedia.org/wiki/SpiderMonkey" text="SpiderMonkey"/>,
                its first engine, was doing just that: reading and executing source code as is.
                But it couldn't just stay that way and
                    <ExternalReference href="https://en.wikipedia.org/wiki/SpiderMonkey#TraceMonkey" text="TraceMonkey"/>
                    became the first JIT compiler for <b>JS</b>.
                </p>
                <SideNote>
                    Things were much simpler back then, not only SpiderMonkey was just an interpreter.<br/>
                    JavaScript was also just a "View Page Source" away.
                </SideNote>
                <div>
                    <p>Guess what happens before it gets to machine code though? Bytecode!</p>
                    <div class="javascript-bitbybyte">
                        <CodeFrame>
                            <JavaScriptCodeBlock code="{codeBlocks.javascript[0].code}" header="{codeBlocks.javascript[0].fileName}" icon="fa-regular fa-file-lines"/>
                        </CodeFrame>
                        <CodeFrame>
                            <ShellCodeBlock code="node --print-bytecode --print-bytecode-filter=y {codeBlocks.javascript[0].fileName}"/>
                            <div slot="output">
                                <JavaScriptCodeBlock code="{codeBlocks.javascript[1].code}" />
                            </div>
                        </CodeFrame>
                    </div>
                    <p>
                        So there is that <b>y</b> function again (same <b>triple</b> semantics). And we're viewing
                        <b>V8</b> bytecode, at least that's what <b>node</b> runs on at the time of writing. What's
                        (arguably 🤓) interesting is that it's so lazy that even to get it generate the bytecode, <b>y</b> has to be called, that's
                        what <b>y(10)</b> is there for. In V8, <ExternalReference href="https://v8.dev/docs/ignition" text="Ignition"/>
                        (interpreter) is responsible for bytecode generation. And you can see how <b>Ldar</b> <b>l</b>oads
                        function argument into <b>a</b>ccumulator <b>r</b>egister, how <b>MulSmi</b>
                        decided to use <b>sm</b>all <b>i</b>nteger type,
                        and how it stores multiplication result back into accumulator register [0]
                        (if curious - <ExternalReference href="https://github.com/v8/v8/blob/master/src/interpreter/bytecodes.h" text="V8's bytecodes"/>).
                        <br/>If a function is used a lot (<b>hot spot</b>), <ExternalReference href="https://v8.dev/docs/turbofan" text="Turbofan"/>
                        takes its bytecode together with type feedback (oh, JS type system) and produces machine code.
                    </p>
                    <SideNote style="float:right; margin-top: -1em;">
                        <b>V8</b> actually took a lot from
                        <ExternalReference href="https://en.wikipedia.org/wiki/HotSpot_(virtual_machine)" text="HotSpot"/>
                        JVM.<br/> So its code execution pipeline is very similar to that of JVM.
                    </SideNote>
                </div>
                </div>
            </section>
        <section id="julia">
            <p>
            <b>Julia</b> is a <b>bit</b> different. Well it's a lot different 😐.
            Julia uses JIT compiler aka <b>just-ahead-of-time JAOT</b> compiler
            and by default compiles everything to machine code before running it. And to get to machine code
            it relies on <ExternalReference href="https://llvm.org/" text="LLVM Compiler Infrastructure"/>.<br/>
            I used to think that Julia produces <ExternalReference href="https://llvm.org/docs/BitCodeFormat.html#overview" text="LLVM bitcode"/> and I think you can occasionally read or hear
            the same (have friends talking about Julia and bitcode? 🤓). But it actually produces an
            in memory LLVM <b>IR</b>: an assembly-like language that is used as an <b>I</b>ntermediate <b>R</b>epresentation
            between different compiler optimization passes.
            <br/>Julia is super transparent about all the transformations (<b>code lowering</b>) that the source code goes through.
            </p>
            <div class="julia-bitbybyte">
                <CodeFrame>
                    <JuliaReplCodeBlock code="{codeBlocks.julia[0].code}"/>
                    <div slot="output">
                        <JuliaCodeBlock code="{codeBlocks.julia[1].code}"/>
                    </div>
                </CodeFrame>
            </div>
            And the first step is a lowered code construction that can be seen using
            <ExternalReference href="https://docs.julialang.org/en/v1/stdlib/InteractiveUtils/#InteractiveUtils.@code_lowered"
                               text="@code_lowered"/> macro.
            <div class="julia-bitbybyte journey">
                <CodeFrame>
                    <JuliaReplCodeBlock code="{codeBlocks.julia[4].code}"/>
                    <div slot="output">
                        <JuliaCodeBlock code="{codeBlocks.julia[5].code}"/>
                    </div>
                </CodeFrame>
            </div>
            <p>
                There is nothing about type information yet.
                <ExternalReference href="https://docs.julialang.org/en/v1/stdlib/InteractiveUtils/#InteractiveUtils.@code_typed"
                                   text="@code_typed"/> macro allows to see a lower typed level:
            </p>
            <div class="julia-bitbybyte journey">
                <CodeFrame>
                    <JuliaReplCodeBlock code="{codeBlocks.julia[8].code}"/>
                    <div slot="output">
                        <JuliaCodeBlock code="{codeBlocks.julia[9].code}"/>
                    </div>
                </CodeFrame>
            </div>
            <p>
                Next (lower still 😐) comes LLVM. <b>Julia</b> uses LLVM's C++ API to produce in memory LLVM IR.
                <ExternalReference href="https://docs.julialang.org/en/v1/stdlib/InteractiveUtils/#InteractiveUtils.@code_llvm" text="@code_llvm"/>
                macro prints it:
            </p>
            <div class="julia-bitbybyte journey">
                <CodeFrame>
                    <JuliaReplCodeBlock code="{codeBlocks.julia[2].code}"/>
                    <div slot="output">
                        <LLVMCodeBlock code="{codeBlocks.julia[3].code}"/>
                    </div>
                </CodeFrame>
            </div>
            <p>
                At the bottom lies machine (native) code built by LLVM.
                <ExternalReference href="https://docs.julialang.org/en/v1/stdlib/InteractiveUtils/#InteractiveUtils.@code_native" text="@code_native"/>
                shows native assembly instructions:
            </p>
            <div class="julia-bitbybyte journey">
                <CodeFrame>
                    <JuliaReplCodeBlock code="{codeBlocks.julia[6].code}"/>
                    <div slot="output">
                        <AssemblerCodeBlock code="{codeBlocks.julia[7].code}"/>
                    </div>
                </CodeFrame>
            </div>
            <p>
                And if you know Julia rules (performance tips) - it gets really-really fast
                (even if there is a delay during the first run aka
                <ExternalReference href="https://discourse.julialang.org/t/time-to-first-plot-clarification/58534" text="time to first plot"/>).
            </p>
        </section>
        <Tombstone/>
    </article>
</main>

<style>

    .java-bitbybyte, .javascript-bitbybyte, .julia-bitbybyte {
        display: flex;
        justify-content: space-evenly;
    }

    section#javascript, section#julia {
        padding-top: 0.5em;
    }

    section#julia {
        clear: both;
    }

</style>