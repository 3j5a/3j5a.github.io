<script>
    import Caret from "$lib/Caret.svelte";
    import PageLink from "$lib/PageLink.svelte";
</script>

<svelte:head>
    <link rel="stylesheet" href="/css/fontawesome-all.min.css">
</svelte:head>

<main>
    <section class="pages">
        <PageLink page="wayback" title="way back"/>
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
