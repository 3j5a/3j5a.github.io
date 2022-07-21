<script>
    import ExternalReference from "$lib/ExternalReference.svelte";
    import Tombstone from "$lib/Tombstone.svelte";
    import SideNote from "$lib/SideNote.svelte";
</script>

<main>
    <article class="why">
        <header>
            <h4>why</h4>
        </header>
        <section>
            <div class="intro">
                <p>
                    How about learning a new programming language every year? <br/>
                    And how about all the frameworks, tools, patterns, architecture
                    styles, best practices, devsecdatamlaiuiuxops? 🤯 <br/>
                    A few programming languages appeared since I've started and I've tried (at least to learn)
                    some of them, like
                    <ExternalReference href="https://en.wikipedia.org/wiki/Apache_Groovy" text="Groovy"/>,
                    <ExternalReference href="https://en.wikipedia.org/wiki/Scala_(programming_language)" text="Scala"/>,
                    <ExternalReference href="https://en.wikipedia.org/wiki/Clojure" text="Clojure"/>
                    (talking about <ExternalReference href="https://www.manning.com/books/the-well-grounded-java-developer"
                                                      text="Well Grounded Java Develop"/> here)
                    , and also <ExternalReference href="https://en.wikipedia.org/wiki/Rust_(programming_language)" text="Rust"/>
                    and  <ExternalReference href="https://en.wikipedia.org/wiki/Swift_(programming_language)" text="Swift"/>.
                </p>
                <SideNote>
                    1999 was a good year:  <ExternalReference href="https://en.wikipedia.org/wiki/The_Pragmatic_Programmer" text="The Pragmatic Programmer"/>,
                    <ExternalReference href="https://en.wikipedia.org/wiki/The_Matrix" text="The Matrix"/>... <br/>
                    Kosovo War, Second Chechen War and fcking Putin taking over as the acting President.<br/>
                    I take it back, it wasn't a good year at all 😐
                </SideNote>
            </div>
            <div class="jjj">
                Must say that all of them are really cool languages and it was worthwhile <br/> trying them out.
                But with <b>Java</b> and <b>JavaScript</b> already under my belt,
                I never felt the need to use any other language to get the job done, and
                I guess more importantly I haven't had a job that needed another language (un or fortunately? 🤔).
                <ExternalReference href="https://en.wikipedia.org/wiki/Write_once,_run_anywhere" text="Write once, run anywhere"/>
                and <ExternalReference href="http://brendaneich.github.io/ModernWeb.tw-2015/#74" text="always bet on JS"/>.
                <p id="julia">
                    I never thought of <b>Julia</b> as a general-purpose programming language. While it certainly is and you
                    can write entire
                    <ExternalReference href="https://www.youtube.com/watch?v=uLhXgt_gKJc"
                                       text="applications and even microservices"/> (have they worn out yet?)
                    in Julia, there are lots of well established languages for that.
                    For me, the language itself and its ecosystem
                    (<ExternalReference href="https://julialang.org/packages/" text="packages"/>)
                    seems like a perfect tool to explore and work on <b>actual complex problems</b>, by allowing
                    eloquently expressing and efficiently simulating them.
                </p>
                <SideNote>
                    Someone said you should be sceptical of anything with “science” in its name,<br/> but
                    <ExternalReference href="https://en.wikipedia.org/wiki/Computational_science"
                                       text="Computational science"/> is what aims to solve those complex
                    problems using computing powers.<br/>
                    Don't recall anything similar about "thinking", so safely throwing
                    <ExternalReference href="https://computationalthinking.mit.edu/Spring21/"
                                       text="Computational thinking"/> in here <br/> for those of us not in science.
                </SideNote>
            </div>
        </section>
    </article>
    <Tombstone/>
</main>

<style>
    .intro {
        display: flex;
        justify-content: space-between;
    }

    .jjj {
        margin-top: -1em;
    }
</style>