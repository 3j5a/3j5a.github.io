<script>
    import Caret from "$lib/Caret.svelte";
    import ExternalReference from "$lib/ExternalReference.svelte";
    import NodeReplCodeBlock from "$lib/NodeReplCodeBlock.svelte";
    import JavaScriptCodeBlock from "$lib/JavaScriptCodeBlock.svelte";
    import CodeFrame from "$lib/CodeFrame.svelte";
    import SideNote from "$lib/SideNote.svelte";
    import JavaCodeBlock from "$lib/JavaCodeBlock.svelte";
    import ShellCodeBlock from "$lib/ShellCodeBlock.svelte";

    export let codeBlocks;
</script>

<main>
    <article class="typed">
        <header>
            <h4>typed</h4>
        </header>
        <section id="intro">
            <p>
                Types are important. They keep you away from inconsistent mess,
                guard from certain errors, allow to model and document things,
                and write performant code. The better type system of your language is, the better
                your code should be.
            </p>
            <SideNote style="margin: -1.25em 0 0 auto;">
                I can't but make a note of an excellent <br/> talk by Philip Wadler -
                <ExternalReference href="https://www.youtube.com/watch?v=IOiZatlZtGU"
                                   text="Propositions as Types"/>
            </SideNote>
        </section>
        <section id="JavaScript">
            <p>
                <b>JavaScript</b> type system... JS type system... well it's formally there 😐.
                But informally it feels like you're at a playground and nobody's watching, so you
                can easily find yourself swinging on a merry-go-round and spinning on a swing
                (I honestly don't mind that kind of fun 🤓).
            </p>
            <SideNote style="float: right; margin-top: -1.25em;">
                <b>JS</b> is actually <b>loosely</b>, <b>implicitly</b> <br/> and <b>dynamically</b> typed.<br/>
                It has both <b>primitive values</b> and <b>objects</b>.
            </SideNote>
            <p>
                There are lots of crazy cool examples related to JS built in data-types and
                its type coercion. If somehow you've missed a hilarious
                <ExternalReference href="https://youtu.be/et8xNAc2ic8" text="WTFJS"/> - enjoy.
                Here are some of my favourites:
            </p>
            <div class="wtfjs">
                <CodeFrame>
                    <NodeReplCodeBlock code="{codeBlocks.javascript[10].code}"/>
                    <div slot="output">
                        <JavaScriptCodeBlock code="{codeBlocks.javascript[11].code}"/>
                    </div>
                </CodeFrame>
                <CodeFrame>
                    <NodeReplCodeBlock code="{codeBlocks.javascript[8].code}"/>
                    <div slot="output">
                        <JavaScriptCodeBlock code="{codeBlocks.javascript[9].code}"/>
                    </div>
                </CodeFrame>
                <CodeFrame>
                    <NodeReplCodeBlock code="{codeBlocks.javascript[2].code}"/>
                    <div slot="output">
                        <JavaScriptCodeBlock code="{codeBlocks.javascript[3].code}"/>
                    </div>
                </CodeFrame>
                <CodeFrame>
                    <NodeReplCodeBlock code="{codeBlocks.javascript[5].code}"/>
                    <div slot="output">
                        <JavaScriptCodeBlock code="{codeBlocks.javascript[6].code}"/>
                    </div>
                </CodeFrame>
            </div>
            <p>
                And can a poor monkey dodge a snake and have enough mangoes and maybe a pie in a cruel JS world?
            </p>
            <CodeFrame style="margin: 0.25em auto 0;">
                <JavaScriptCodeBlock code="{codeBlocks.javascript[4].code}"/>
                <div slot="output">
                    <JavaScriptCodeBlock code="🤔"/>
                </div>
            </CodeFrame>
            <p>
                There have been quite a few data-types added to the language over time, like
                <ExternalReference href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#bigint_type"
                                   text="BigInt"/> and
                <ExternalReference href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#symbol_type"
                                   text="Symbol"/> for example. To me, addition of
                <ExternalReference href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays"
                                   text="Typed arrays"/> was like entering
                <ExternalReference href="https://en.wikipedia.org/wiki/The_Twilight_Zone" text="The Twilight Zone"/> -
                science fiction, suspense, horror and super cool at once 😐.
                <br/>
                <ExternalReference href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise"
                                   text="Promise"/> and
                <ExternalReference href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator"
                                   text="Generator"/> (JS functions are good parts for sure) additions were warmly welcomed
                as well. How about <b>mango-infinity</b> for that monkey?
            </p>
            <CodeFrame style="margin: -1em 0 0 auto;">
                <JavaScriptCodeBlock code="{codeBlocks.javascript[7].code}"/>
            </CodeFrame>
            <p style="clear: both">
                And I can't but agree that <ExternalReference href="https://en.wikipedia.org/wiki/Duck_typing" text="If it walks like a duck and it quacks like a duck, then it must be a duck"/>
                is a cool no fuss usage oriented way to code.
            </p>
        </section>
        <section id="java">
            <b>Java</b> has come a long way enhancing its type system over time.
            <ExternalReference href="https://en.wikipedia.org/wiki/Generics_in_Java" text="Generics"/> were the first
            notable addition. Backward compatibility requirement, being at the heart of language evolution,
            obviously impacted generics design choices.
            <ExternalReference href="https://en.wikipedia.org/wiki/Generics_in_Java#Problems_with_type_erasure" text="Type erasure"/>
            just had to happen, but it was actually a good old null pointer that some 12 years later allowed
            for a (fearful) discovery:
            <ExternalReference href="https://dl.acm.org/doi/10.1145/2983990.2984004" text="Java is Unsound"/> (😨...and Scala as well 😱).
            Should you care though? Well, if you're designing a new programming language then wtf are you doing here 😕?
            Java isn't done with generics though: <ExternalReference href="https://openjdk.org/jeps/8261529" text="Universal Generics"/>
            are already on the horizon at the time of writing.
            <SideNote style="margin: -1.5em 3em 0 auto">
                Generics even got an excellent book devoted to them back then  -
                <ExternalReference href="https://learning.oreilly.com/library/view/java-generics-and/0596527756/" text="Java Generics"/> <br/> with
                Phillip Wadler as a co-author, also a co-creator of <ExternalReference href="https://homepages.inf.ed.ac.uk/wadler/gj/" text="GJ"/>
                that became <br/> the basis for generics as we know it.
            </SideNote>
            <div>
                There's been quite a few additions since generics. I've patiently waited for <b>var</b> support,
                wondering why <b>Script</b> had it, but <b>Java</b> did not 🤔.
                <SideNote style="float:right">
                    High-five if you ever tried to use "var" in Java when <br/> switching
                    to it from some JavaScript code, before <ExternalReference href="https://openjdk.org/jeps/286" text="JEP 286"/>
                    <br/> BTW you probably shouldn't use it anymore in JS.
                </SideNote>
                It turned out to be much more than just a syntactic convenience, adding
                (even if limited) support for non-denotable types. <b>var</b> allows to preserve
                type information, so the following is possible:
                <CodeFrame style="margin: 0 auto;">
                    <ShellCodeBlock code="java {codeBlocks.java[5].fileName}"/>
                    <div slot="output">
                        <JavaCodeBlock code="{codeBlocks.java[5].code}" header="{codeBlocks.java[5].fileName}" icon="fa-regular fa-file-lines"/>
                        <JavaCodeBlock code="{codeBlocks.java[6].code}" header="&nbsp;"/>
                    </div>
                </CodeFrame>
                <p>
                    Obviously <ExternalReference href="https://openjdk.org/jeps/126" text="Lambdas"/> happened earlier (Java 8 vs. Java 10) and were a much-much-...-much<br/>
                    bigger than <b>var</b> (why did I mention it first then? 🤔). And they brought in a notion of a target type
                    slash <b>functional interface</b>, and also <b>default methods</b> in interfaces. And then there were.. and also... Well, somebody has to put
                    together a good article about Java type-system history and evolution for sure (📝).<br/>
                    Fast forward and there you have your
                    <ExternalReference href="https://openjdk.org/jeps/394" text="Pattern Matching for instanceof"/>,
                    <ExternalReference href="https://openjdk.org/jeps/395" text="Records"/>,
                    <ExternalReference href="https://openjdk.org/jeps/409" text="Sealed Classes"/>
                    and already a third preview of <ExternalReference href="https://openjdk.org/jeps/427" text="Pattern Matching for switch"/>.
                </p>
                <CodeFrame style="margin: 0.25em auto 0;" >
                    <ShellCodeBlock code="java {codeBlocks.java[4].code}"/>
                    <div slot="output">
                        <JavaCodeBlock code="{codeBlocks.java[3].code}"/>
                    </div>
                </CodeFrame>
                <CodeFrame style="margin: 0.25em auto 0;" >
                    <ShellCodeBlock code="{codeBlocks.java[2].code}"/>
                    <div slot="output">
                        <JavaCodeBlock code="{codeBlocks.java[0].code}" header="{codeBlocks.java[0].fileName}" icon="fa-regular fa-file-lines"/>
                    </div>
                </CodeFrame>
                <p>
                    And with current and ongoing type system changes Java is up for yet another programming paradigm -
                    <ExternalReference href="https://www.infoq.com/articles/data-oriented-programming-java/" text="DOP" />.
                (Doh!)
                </p>
            </div>
        </section>
        <section id="julia">
            <b>Julia</b>
        </section>
        <Caret/>
    </article>
</main>

<style>

    .wtfjs {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }

    section#java, section#julia {
        margin-top: 0.5em;
    }

</style>