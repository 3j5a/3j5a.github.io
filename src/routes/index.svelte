<script>
    import Caret from "$lib/Caret.svelte";
    import PageLink from "$lib/PageLink.svelte";
</script>

<main>
    <section class="pages">
        <PageLink page="wayback" title="way back"/>
        <PageLink page="runtimes" title="runtimes"/>
        <PageLink page="why" title="why"/>
        <PageLink page="bitbybyte" title="bit by byte"/>
        <PageLink page="typed" title="typed"/>
    </section>
    <Caret/>
</main>

<style>
    section.pages {
        float: left;
    }

    .pages {
        margin-right: 1em;
    }
</style>
