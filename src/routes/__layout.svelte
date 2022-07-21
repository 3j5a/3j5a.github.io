<script>
    import Header from "$lib/Header.svelte";
    import "../app.css";
</script>

<svelte:head>
    <link rel="stylesheet" href="/css/fontawesome-all.min.css">
</svelte:head>

<Header/>
<slot></slot>

<style>
    :global(:root) {
        --caret-color: rgb(188, 188, 188);
        --tombstone-color: rgb(188, 188, 188);
        --reference-color: rgb(188, 188, 188);
        --header-color: rgb(188, 188, 188);
        --code-frame-color: rgb(188, 188, 188, 0.2);

        --aside-bacground-color: rgb(188, 188, 188, 0.2);

        --caret-color-dark: rgb(132, 132, 132);
        --tombstone-color-dark: rgb(132, 132, 132);
    }
</style>