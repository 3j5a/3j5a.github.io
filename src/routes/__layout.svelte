<script>
    import Header from "$lib/Header.svelte";
    import "../app.css";
</script>

<svelte:head>
    <link rel="stylesheet" href="/css/fontawesome-all.min.css">
</svelte:head>

<Header/>
<slot></slot>