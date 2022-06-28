<script>
    import ExternalReference from "$lib/ExternalReference.svelte";
    import Tombstone from "$lib/Tombstone.svelte";

    export let codeBlocks;
</script>

<main>
    <article class="runtimes">
        <header>
            <h4>runtimes</h4>
        </header>
        <section id="julia">
            <p>
                It's super straightforward with <strong>Julia</strong> as there is only one runtime that runs Julia, which is...
                well Julia runtime 😐.
                So you just go to <ExternalReference href="https://julialang.org/downloads" text="downloads"/>
                (unless wanna build from <ExternalReference href="https://github.com/JuliaLang/julia" text="source"/>)
                and pick a version.
            </p>
        </section>
        <section  id="javascript">
            <p>
                It's bit trickier with <strong>JavaScript</strong>.
                And <ExternalReference text="I never wanted to be the type to think big thoughts about the nature of things.
                All I ever wanted was a stack of pancakes and a V8" href="https://www.tvfanatic.com/quotes/i-never-wanted-to-be-the-type-to-think-big-thoughts-about-the-na"/>.
                And JavaScript seems to have really wanted <ExternalReference text="V8" href="https://v8.dev"/> as well.
                There are quite a few JavaScript engines now, but <b>V8</b> stays the most widely used one. There is a good
                chance your current <b>J</b>ava<b>S</b>cript runtime is based on it...
                or <ExternalReference text="SpiderMonkey" href="https://spidermonkey.dev"/>
                or <ExternalReference text="JavaScriptCore" href="https://developer.apple.com/documentation/javascriptcore"/>.
                And it's the runtime you need to actually build something with <b>JS</b>, as it's the runtime that gives
                you access to things like <ExternalReference text="Web API" href="https://developer.mozilla.org/en-US/docs/Web/API"/> for example.
                You can start and go a long way using your browser
                as the runtime (<ExternalReference text="Lynx" href="https://lynx.invisible-island.net"/> not),
                but <ExternalReference text="node" href="https://nodejs.org"/>
                or <ExternalReference text="deno" href="https://deno.land"/> (ah, anagrams &#129299;) will get you at some point.
            </p>
        </section>
        <section id="java">
            <p>
                <b>Java</b> has been under the <ExternalReference text="sun" href="https://en.wikipedia.org/wiki/Sun_Microsystems"/> for a long time
                until <ExternalReference text="oracle" href="https://en.wikipedia.org/wiki/Oracle_Corporation#Acquisition_of_Sun_Microsystems"/> took over.
                But it's been moving towards open source at least since Sun delivered OpenJDK 6, the first open source version of Java, in 2007.
                <br/> A full open source reference implementation was completed in 2011 when Java SE 7 from Oracle launched.
                And so you get to choose from quite a few vendors:
            </p>
            <div class="vendors">
                <div><ExternalReference text="Corretto" href="https://aws.amazon.com/corretto"/></div>
                <div><ExternalReference text="Dragonwell" href="https://dragonwell-jdk.io"/></div>
                <div><ExternalReference text="Gluon" href="https://gluonhq.com/products/javafx"/></div>
                <div><ExternalReference text="GraalVM" href="https://www.graalvm.org"/></div>
                <div><ExternalReference text="Liberica" href="https://bell-sw.com/pages/libericajdk"/></div>
                <div><ExternalReference text="Mandrel" href="https://github.com/graalvm/mandrel"/></div>
                <div><ExternalReference text="Microsoft" href="https://www.microsoft.com/openjdk"/></div>
                <div><ExternalReference text="Oracle" href="https://www.oracle.com/java"/></div>
                <div><ExternalReference text="SapMachine" href="https://sap.github.io/SapMachine"/></div>
                <div><ExternalReference text="Semeru" href="https://developer.ibm.com/languages/java/semeru-runtimes"/></div>
                <div><ExternalReference text="Temurin" href="https://adoptium.net"/></div>
                <div><ExternalReference text="Trava" href="https://github.com/TravaOpenJDK"/></div>
                <div><ExternalReference text="Zulu" href="https://www.azul.com/downloads/?package=jdk"/></div>
            </div>
            <p>
                So what is it that different vendors provide?
                They give you a development kit, <b>J</b>ava <b>D</b>evelopment <b>K</b>it - <b>JDK</b>.
                The kit consists of development tools (e.g. compiler) and <b>J</b>ava <b>R</b>untime <b>E</b>nvironment - <b>JRE</b>.
                And it's the JRE that provides the libraries, <b>J</b>ava <b>V</b>irtual <b>M</b>achine - <b>JVM</b>, and other components necessary for you to run the apps written in the Java programming language.
                And <ExternalReference text="JVM" href="https://en.wikipedia.org/wiki/Java_virtual_machine"/> is at the heart of so many mind-blowing things, like birth of <ExternalReference text="JVM languages" href="https://en.wikipedia.org/wiki/List_of_JVM_languages"/> for example.
                Picking a vendor isn't a trivial job (even leaving license and support concerns aside), but <ExternalReference text="Temurin" href="https://adoptium.net"/>
                is a sensible default... and if you get to use <ExternalReference text="SDKMAN!" href="https://sdkman.io/usage"/> it's the default one.
                I'd also recommend <ExternalReference text="Semeru" href="https://developer.ibm.com/languages/java/semeru-runtimes"/> as
                a great way to get to utilize super cool <ExternalReference text="Eclipse OpenJ9" href="https://www.eclipse.org/openj9"/> JVM.
            </p>
        </section>
    </article>
    <Tombstone/>
</main>

<style>
    .vendors {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .vendors div {
        margin: 0.75em;
    }
</style>